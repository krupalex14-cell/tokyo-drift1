'use strict';
// ============ Аппарат: детали, связи, массы, ступени, топливо ============
let _pid = 1;
function newPart(defId, x, y, o) {
  const d = PARTS[defId]; o = o || {};
  const p = { id: _pid++, defId, d, x: x || 0, y: y || 0, w: o.w || d.w, h: o.h || d.h, w2: o.w2 || (d.id === 'adapter' ? d.w2 : 0), rot: o.rot || 0, flip: !!o.flip, stage: o.stage != null ? o.stage : -1, res: {}, temp: 290, abl: 0, hp: 1, st: {} };
  if (d.eng && !d.eng.solid && !d.eng.rcs) { p.n = Math.max(1, Math.min(33, (o.n | 0) || 1)); if (p.n > 1 && !o.w) p.w = clusterW(d.w, p.n); } else p.n = 1;
  if (d.size && d.size.len == null) p.h = d.h;
  if (d.shield && !d.shield.own) { p.h = Math.max(.15, p.w * 0.08); p.abl = d.shield.abl * Math.PI * p.w * p.w / 4; }
  if (d.shield && d.shield.own) p.abl = d.shield.abl;
  if (d.id === 'adapter' && !p.w2) p.w2 = d.w2;
  fillPart(p);
  if (d.eng) { p.ign = d.eng.restarts; }
  return p;
}
function fillPart(p) {
  const d = p.d, cap = partCap(p);
  if (d.tank) p.res[d.tank.prop] = cap;
  else if (d.eng && d.eng.solid) p.res.solid = d.eng.propMass;
  if (d.batt) p.res.ec = d.batt;
  p.dry = partDry(p);
}
function clonePart(p) { const q = Object.assign({}, p); q.res = Object.assign({}, p.res); q.st = Object.assign({}, p.st); return q; }
function pext(p) { return (p.rot & 1) ? [p.h / 2, pw(p) / 2] : [pw(p) / 2, p.h / 2]; }
function partMassTotal(p) { let m = p.dry; for (const k in p.res) if (k !== 'ec') m += p.res[k]; if (p.d.shield) m += p.abl * (p.d.shield.own ? 1 : 0.0); return m; }
function prect(p) { const e = pext(p); return { x0: p.x - e[0], x1: p.x + e[0], y0: p.y - e[1], y1: p.y + e[1] }; }
function acceptEdge(p, side) { // side: 'top','bottom','left','right'
  const a = p.d.attach || 'both';
  if (a === 'both') return true;
  if (a === 'stack') return side === 'top' || side === 'bottom';
  if (a === 'radial') return side === 'left' || side === 'right';
  if (a === 'bottom') return side === 'bottom';
  return true;
}
const TOL = 0.07;
// граф связей по геометрии касания
function computeEdges(parts) {
  const edges = []; const n = parts.length;
  const R = parts.map(prect);
  for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) {
    const A = parts[i], B = parts[j], a = R[i], b = R[j];
    const ox = Math.min(a.x1, b.x1) - Math.max(a.x0, b.x0), oy = Math.min(a.y1, b.y1) - Math.max(a.y0, b.y0);
    let ok = false;
    // вертикальное касание
    if (ox > Math.min(0.04, 0.3 * Math.min(a.x1 - a.x0, b.x1 - b.x0))) {
      if (Math.abs(a.y1 - b.y0) <= TOL && acceptEdge(A, 'top') && acceptEdge(B, 'bottom')) ok = true;
      else if (Math.abs(b.y1 - a.y0) <= TOL && acceptEdge(B, 'top') && acceptEdge(A, 'bottom')) ok = true;
    }
    if (!ok && oy > Math.min(0.04, 0.3 * Math.min(a.y1 - a.y0, b.y1 - b.y0))) {
      if (Math.abs(a.x1 - b.x0) <= TOL && acceptEdge(A, 'right') && acceptEdge(B, 'left')) ok = true;
      else if (Math.abs(b.x1 - a.x0) <= TOL && acceptEdge(B, 'right') && acceptEdge(A, 'left')) ok = true;
    }
    // деталь внутри гермокорпуса / обтекателя крепится к нему
    if (!ok) {
      for (const [P, Q, rq] of [[A, B, b], [B, A, a]]) {
        if (P.d.vessel) {
          const rr = Math.hypot(Q.x - P.x, Q.y - P.y);
          if (rr < P.d.vessel.inside * P.w / 2 && Q.d.inside !== false && Math.max(Q.w, Q.h) < P.w * 0.8) { ok = true; }
        }
      }
    }
    if (ok) edges.push([A.id, B.id]);
  }
  return edges;
}
function buildAdj(parts, edges) {
  const adj = new Map(); for (const p of parts) adj.set(p.id, []);
  for (const [a, b] of edges) { if (adj.has(a) && adj.has(b)) { adj.get(a).push(b); adj.get(b).push(a); } }
  return adj;
}
function components(parts, edges) {
  const adj = buildAdj(parts, edges), seen = new Set(), res = [];
  for (const p of parts) {
    if (seen.has(p.id)) continue;
    const comp = [], q = [p.id]; seen.add(p.id);
    while (q.length) { const x = q.pop(); comp.push(x); for (const y of adj.get(x)) if (!seen.has(y)) { seen.add(y); q.push(y); } }
    res.push(comp);
  }
  return res;
}
// пересечения (недопустимые наложения): возвращает true если p пересекает какую-то деталь
function overlaps(parts, p, ignore) {
  const a = prect(p);
  for (const q of parts) {
    if (q === p || (ignore && ignore.has(q.id))) continue;
    const b = prect(q);
    const ox = Math.min(a.x1, b.x1) - Math.max(a.x0, b.x0), oy = Math.min(a.y1, b.y1) - Math.max(a.y0, b.y0);
    if (ox > 0.06 && oy > 0.06) {
      // допускаем: деталь внутри обтекателя / гермокорпуса
      if (q.d.fair && insideFairing(q, p)) continue; if (p.d.fair && insideFairing(p, q)) continue;
      if (q.d.vessel && Math.hypot(p.x - q.x, p.y - q.y) < q.d.vessel.inside * q.w / 2 && Math.max(p.w, p.h) < q.w * 0.8) continue;
      if (p.d.vessel && Math.hypot(q.x - p.x, q.y - p.y) < p.d.vessel.inside * p.w / 2 && Math.max(q.w, q.h) < p.w * 0.8) continue;
      return q;
    }
  }
  return null;
}
function insideFairing(f, q) {
  const r = prect(f), b = prect(q);
  return b.x0 >= r.x0 - 0.05 && b.x1 <= r.x1 + 0.05 && b.y0 >= r.y0 - 0.05 && b.y1 <= r.y1 + 0.2 && Math.hypot(q.x - f.x, 0) < f.w / 2;
}
function updateShielding(parts) {
  for (const p of parts) p.shielded = false;
  for (const f of parts) {
    if (!f.d.fair || f.st.gone) continue;
    for (const q of parts) {
      if (q === f || q.shielded) continue;
      const b = prect(q), r = prect(f);
      if (b.x0 >= r.x0 - 0.04 && b.x1 <= r.x1 + 0.04 && b.y0 >= r.y0 - 0.04 && b.y1 <= r.y1 + 0.2 && !q.d.fair) {
        // не защищена, если стоит ниже основания обтекателя
        q.shielded = true;
      }
    }
  }
}
// секции топливных систем: связность без разделителей (если нет перекачки)
function computeSections(parts, edges) {
  const byId = new Map(parts.map(p => [p.id, p]));
  const filt = edges.filter(([a, b]) => { const A = byId.get(a), B = byId.get(b); return !(A.d.dec && !A.st.cross) && !(B.d.dec && !B.st.cross); });
  const comps = components(parts.filter(p => !(p.d.dec && !p.st.cross)), filt);
  const sec = new Map(); comps.forEach((c, i) => c.forEach(id => sec.set(id, i)));
  // сами разделители относятся к секции соседа с наименьшим y (нижней), чтобы не вылезали
  for (const p of parts) if (p.d.dec && !p.st.cross) sec.set(p.id, -1);
  return sec;
}

// ----- массовые характеристики -----
function massProps(parts) {
  let m = 0, mx = 0, my = 0;
  for (const p of parts) { const pm = partMassTotal(p); p._m = pm; m += pm; mx += pm * p.x; my += pm * p.y; }
  if (m <= 0) return { m: 1, cx: 0, cy: 0, I: 1, R: 1 };
  const cx = mx / m, cy = my / m; let I = 0, R = 0;
  for (const p of parts) {
    const e = pext(p), dx = p.x - cx, dy = p.y - cy;
    I += p._m * ((2 * e[0]) * (2 * e[0]) + (2 * e[1]) * (2 * e[1])) / 12 + p._m * (dx * dx + dy * dy);
    R = Math.max(R, Math.hypot(Math.abs(dx) + e[0], Math.abs(dy) + e[1]));
  }
  return { m, cx, cy, I: Math.max(I, 0.01), R };
}

// ----- Аппарат (динамический) -----
let _vid = 1;
function makeVessel(parts, edges, name) {
  const v = {
    id: _vid++, name: name || 'Аппарат', parts, edges: edges || computeEdges(parts), body: null,
    x: 0, y: 0, vx: 0, vy: 0, a: 0, w: 0, mode: 'phys', throttle: 0, stageIdx: 0, stages: [], sas: 'hold', sasTarget: 0, rcs: false,
    mp: null, dirty: true, landed: null, ec: 0, ecCap: 0, t0: 0, age: 0, alive: true, science: [], samples: [], log: [], ap: null, gim: 0, ctl: { rot: 0, thr: 0 }, cross: false, alt: 0, crashed: false, maxQ: 0
  };
  return v;
}
function vesselRefresh(v) {
  v.pm = new Map(v.parts.map(p => [p.id, p]));
  v.adj = buildAdj(v.parts, v.edges);
  v.sec = computeSections(v.parts, v.edges);
  updateShielding(v.parts);
  v.engines = v.parts.filter(p => p.d.eng && !p.d.eng.rcs);
  v.rcsList = v.parts.filter(p => p.d.eng && p.d.eng.rcs);
  v.tanks = v.parts.filter(p => p.d.tank || (p.d.eng && p.d.eng.solid));
  v.mp = massProps(v.parts);
  v.ecCap = v.parts.reduce((s, p) => s + (p.d.batt || 0), 0);
  v.dirty = false; v.exp = null; v._expT = -1;
}
function hasCore(v) { return v.parts.some(p => p.d.core && !p.dead); }
function controlTorque(v) {
  let t = 0; for (const p of v.parts) { if (p.d.rw) t += p.d.rw.torque; if (p.d.core) t += p.d.core.torque; }
  return t;
}
// ---- топливо ----
function sectionTanks(v, p, prop) {
  const s = v.sec.get(p.id), out = [];
  for (const t of v.tanks) { if (t.res[prop] > 0 && (v.sec.get(t.id) === s || v.cross)) out.push(t); }
  return out;
}
function propAvail(v, p, prop) { // топливо доступное двигателю p
  if (prop === 'solid') return p.res.solid || 0;
  let tot = 0; const s = v.sec.get(p.id);
  for (const t of v.tanks) if (t.res[prop] > 0 && (v.sec.get(t.id) === s || v.cross)) tot += t.res[prop];
  return tot;
}
function drawProp(v, p, prop, amount) { // забрать топливо, вернуть сколько получено
  if (prop === 'solid') { const g = Math.min(amount, p.res.solid || 0); p.res.solid -= g; return g; }
  const s = v.sec.get(p.id); let tot = 0; const list = [];
  for (const t of v.tanks) if (t.res[prop] > 0 && (v.sec.get(t.id) === s || v.cross)) { list.push(t); tot += t.res[prop]; }
  if (tot <= 0) return 0;
  const g = Math.min(amount, tot);
  for (const t of list) t.res[prop] -= g * t.res[prop] / tot;
  return g;
}
function engThrust(e, p, pAmb, thr) { // сила [Н] при давлении, дросселе (0..1 уже с учётом thrMin)
  const Ae = e.Fv * (1 - e.IspS / e.IspV) / 101325;
  return Math.max(0, e.Fv - Ae * pAmb) * thr * (p && p.n || 1);
}
function engMdot(e, thr, n) { return e.Fv / (e.IspV * G0) * thr * (n || 1); }

// ---- ступени ----
// Действия: engine (зажечь), dec (разделить), chute, fairing, deploy
function partAction(p) {
  const d = p.d;
  if (d.dec) return 'sep'; if (d.fair) return 'fairing'; if (d.eng) return 'ign'; if (d.chute) return 'chute'; if (d.solar || d.ant) return 'deploy'; if (d.leg) return 'legs'; if (d.src) return 'chute'; return null;
}
const ACT_NAMES = { sep: 'Разделить', fairing: 'Сбросить обтекатель', ign: 'Зажечь', chute: 'Парашют', deploy: 'Развернуть', legs: 'Выпустить опоры' };
function autoStage(parts, edges) {
  for (const p of parts) p.stage = -1;
  const byId = new Map(parts.map(p => [p.id, p]));
  const sec = computeSections(parts, edges);
  const ctrl = parts.find(p => p.d.core) || parts[parts.length - 1];
  const decs = parts.filter(p => p.d.dec && p.id !== undefined);
  const engs = parts.filter(p => p.d.eng && !p.d.eng.rcs);
  const radial = decs.filter(p => p.d.dec.kind === 'radial').sort((a, b) => a.y - b.y);
  const stack = decs.filter(p => p.d.dec.kind === 'stack').sort((a, b) => a.y - b.y);
  // секции: определить, какие двигатели «стартовые»: двигатели секций ниже первого стек-разделителя + боковые бустеры
  let stage = 0; const sets = [];
  const firstDecY = stack.length ? stack[0].y : Infinity;
  const startEng = engs.filter(e => e.y < firstDecY || radial.some(r => sec.get(r.id) === -1 && Math.sign(r.x) === Math.sign(e.x) && Math.abs(e.x) > Math.abs(r.x) - 0.2));
  // 0: старт: двигатели нижней секции и бустеров
  const s0 = []; for (const e of engs) { if (e.y < firstDecY) s0.push(e); }
  for (const e of s0) e.stage = 0; sets.push(s0);
  stage = 1;
  // боковые бустеры: их двигатели зажигаются на стадии 0
  for (const r of radial) {
    // двигатели с |x| > |r.x| на той же стороне
    for (const e of engs) if (e.stage < 0 && Math.sign(e.x || 1) === Math.sign(r.x || 1) && Math.abs(e.x) >= Math.abs(r.x) - 0.05) e.stage = 0;
  }
  for (const r of radial) { r.stage = stage; }
  if (radial.length) stage++;
  for (let i = 0; i < stack.length; i++) {
    const d = stack[i]; d.stage = stage;
    // двигатели выше этого разделителя и ниже следующего
    const yTop = i + 1 < stack.length ? stack[i + 1].y : Infinity;
    for (const e of engs) if (e.stage < 0 && e.y > d.y && e.y < yTop) e.stage = stage;
    stage++;
    if (i === 0) { for (const f of parts.filter(p => p.d.fair)) f.stage = stage; if (parts.some(p => p.d.fair)) stage++; }
  }
  // оставшиеся двигатели (если нет разделителей)
  for (const e of engs) if (e.stage < 0) e.stage = 0;
  // парашюты, посадочные опоры — не ставим в ступени (ручное)
  return stage;
}
function buildStages(v) { // собрать списки по p.stage
  const mx = Math.max(-1, ...v.parts.map(p => p.stage));
  v.stages = []; for (let i = 0; i <= mx; i++) v.stages.push(v.parts.filter(p => p.stage === i).map(p => p.id));
}
// Декаплер: перебираем рёбра и режем
function separateAt(v, dec) {
  const nb = v.adj.get(dec.id) || []; const cut = [];
  if (dec.d.dec.kind === 'radial') {
    const dx = Math.abs(dec.x);
    for (const id of nb) { const q = v.pm.get(id); if (Math.abs(q.x) > dx + 0.01 && Math.abs(q.x) > Math.abs(dec.x) - 0.001) cut.push(id); }
    if (!cut.length && nb.length) { let bestId = nb[0], bx = -1; for (const id of nb) { const q = v.pm.get(id); if (Math.abs(q.x) > bx) { bx = Math.abs(q.x); bestId = id; } } cut.push(bestId); }
  } else if (dec.d.dec.kind === 'stack') {
    const up = !(dec.rot === 2 || dec.flip);
    for (const id of nb) { const q = v.pm.get(id); if (up ? q.y > dec.y : q.y < dec.y) cut.push(id); }
  }
  const cs = new Set(cut.map(id => id));
  v.edges = v.edges.filter(([a, b]) => !((a === dec.id && cs.has(b)) || (b === dec.id && cs.has(a))));
  return cut.length > 0;
}
// Разбить аппарат на компоненты; возвращает список новых аппаратов (первый — продолжение исходного)
function splitVessel(v) {
  const comps = components(v.parts, v.edges);
  if (comps.length <= 1) return [v];
  const out = [];
  // какой компонент главный: с управляющим ядром, иначе с наибольшей массой
  let main = 0, best = -1;
  comps.forEach((c, i) => { const ps = c.map(id => v.pm.get(id)); let sc = 0; if (ps.some(p => p.d.core)) sc += 1e9; sc += ps.reduce((s, p) => s + partMassTotal(p), 0); if (sc > best) { best = sc; main = i; } });
  const allParts = v.parts, allEdges = v.edges;
  comps.forEach((c, i) => {
    const ids = new Set(c); const parts = allParts.filter(p => ids.has(p.id)); const edges = allEdges.filter(([a, b]) => ids.has(a) && ids.has(b));
    let nv;
    if (i === main) { nv = v; v.parts = parts; v.edges = edges; }
    else {
      nv = makeVessel(parts, edges, v.name + (parts.some(p => p.d.core) ? '' : ' (ступень)'));
      nv.body = v.body; nv.mode = v.mode; nv.t0 = v.t0; nv.stages = []; nv.sas = 'off'; nv.debris = !parts.some(p => p.d.core);
      nv.age = 0; nv.ec = 0; nv.cross = false;
    }
    out.push(nv);
  });
  return out;
}
// Положение/скорость отделившегося куска в мировой СК: наследуют от родителя с учётом вращения
function childState(parent, nv, parentMpOld) {
  nv.vp = null;
}
// ------- простая статистика (для конструктора) -------
function vesselStats(parts, edges) {
  const mp = massProps(parts);
  let prop = 0, thrustV = 0, thrustS = 0;
  for (const p of parts) { for (const k in p.res) if (k !== 'ec') prop += p.res[k]; }
  return { mass: mp.m, cx: mp.cx, cy: mp.cy, I: mp.I, parts: parts.length };
}
// Запуск ступени: активирует двигатели, разделяет, сбрасывает обтекатель. Возвращает {debris, events}
function fireStage(v, st) {
  const events = []; let split = false;
  const list = v.parts.filter(p => p.stage === st);
  for (const p of list) {
    const d = p.d;
    if (d.eng) { if (!p.on && (p.ign == null || p.ign > 0 || d.eng.solid)) { p.on = true; if (p.ign != null) p.ign--; events.push({ t: 'ign', p }); } }
    else if (d.dec) { if (separateAt(v, p)) { split = true; events.push({ t: 'sep', p }); } }
    else if (d.fair) { v.parts = v.parts.filter(q => q !== p); v.edges = v.edges.filter(([a, b]) => a !== p.id && b !== p.id); split = true; events.push({ t: 'fairing', p }); }
    else if (d.chute || d.src) { if (!p.st.chute) { p.st.chute = 'arm'; events.push({ t: 'chute', p }); } }
    else if (d.solar || d.ant) { p.st.deployed = true; events.push({ t: 'deploy', p }); }
    else if (d.leg) { p.st.deployed = true; events.push({ t: 'legs', p }); }
  }
  let debris = [];
  if (split) { v.pm = new Map(v.parts.map(q => [q.id, q])); const vs = splitVessel(v); debris = vs.filter(x => x !== v); }
  vesselRefresh(v); for (const dv of debris) vesselRefresh(dv);
  return { debris, events };
}
// Моделирование выгорания по ступеням в вакууме (Δv, время, TWR) — теми же функциями топлива.
function analyzeStages(design, bodyG, o) {
  o = o || {};
  const parts = design.parts.map(clonePart); const edges = (design.edges || computeEdges(parts)).map(e => e.slice());
  const v = makeVessel(parts, edges); vesselRefresh(v);
  const out = []; const maxSt = Math.max(-1, ...parts.map(p => p.stage));
  const pSL = o.pAmb != null ? o.pAmb : 0, g = bodyG || G0, m0 = v.mp.m, dt = o.dt || 0.5;
  for (let st = 0; st <= maxSt; st++) {
    fireStage(v, st);
    let dv = 0, t = 0, thr0 = 0, any = false; const mStart = v.mp.m;
    for (let it = 0; it < 20000; it++) {
      let F = 0;
      for (const p of v.engines) {
        if (!p.on) continue; const e = p.d.eng;
        if (e.power > 0) continue;
        const av = propAvail(v, p, e.prop); if (av <= 0) continue;
        const f = engThrust(e, p, pSL, 1), mdot = engMdot(e, 1, p.n);
        const take = Math.min(1, av / (mdot * dt)); F += f * take;
        drawProp(v, p, e.prop, mdot * dt * take);
      }
      if (F <= 0) break; any = true;
      const m = v.mp.m; if (t === 0) thr0 = F / (m * g);
      dv += F / m * dt; t += dt; v.mp = massProps(v.parts);
      if (t > 6000) break;
    }
    // электрические двигатели: Δv оценочно (если есть питание не считаем)
    if (any) out.push({ stage: st, dv, t, twr: thr0, mStart, mEnd: v.mp.m });
  }
  let sum = 0; for (const s of out) sum += s.dv;
  return { stages: out, dv: sum, mass0: m0 };
}
function totalDV(design, g, pAmb) { try { return analyzeStages(design, g, { pAmb: pAmb || 0, dt: 1 }); } catch (e) { return { stages: [], dv: 0, mass0: 0, err: e.message + e.stack }; } }

// ---- помощник сборки в стопку (для шаблонов/автосборки/тестов) ----
function Design(name) { this.name = name || 'Проект'; this.parts = []; this.edges = []; this.top = 0; }
Design.prototype.add = function (defId, o) {
  o = o || {}; const p = newPart(defId, 0, 0, o); p.x = o.x || 0;
  p.y = o.y != null ? o.y : this.top + p.h / 2;   // на верх стопки
  this.parts.push(p);
  if (o.y == null && !o.noStack) this.top = p.y + p.h / 2;
  return p;
};
Design.prototype.finish = function () { this.edges = computeEdges(this.parts); autoStage(this.parts, this.edges); return this; };
