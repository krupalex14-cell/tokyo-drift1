'use strict';
// ============ Мир: время, аппараты, смена сфер влияния, время-варп ============
const WARPS = [1, 2, 4, 10, 50, 100, 1000, 10000, 100000];   // 1..4 — физический, дальше — по орбите
const PHYS_MAX = 50;     // самое большое «честное» ускорение (значение): физика считается по-настоящему, как при тяге и посадке
const PHYS_IDX = 4;      // его индекс в WARPS; выше — ускорение «по орбите» (по рельсам)
function World(U, opts) {
  opts = opts || {};
  this.U = U; this.eph = new Ephemeris(U);
  this.ut = opts.ut != null ? opts.ut : (Date.now() - Date.UTC(2000, 0, 1, 12)) / 1000;
  this.t0 = this.ut;
  this.vessels = []; this.active = null; this.warpIdx = 0;
  this.cheats = { noGravity: false, infFuel: false, infEC: false, noCrash: false, noHeat: false, infChute: false, overlap: false, infField: false, freeBuild: false, instantScience: false };
  this.evq = []; this.logs = []; this.tile = null;
  this.funds = opts.funds != null ? opts.funds : 8e6; this.sandbox = !!opts.sandbox; this.tier = opts.tier || 0;
  this.science = { points: 0, done: {}, codex: {}, rec: [] };
  this.contracts = []; this.stats = { flights: 0, maxAlt: 0 };
  setStartRotation(U, this.eph, this.ut, 8.6);
  this.homeBody = U.byId[U.home];
}
World.prototype.event = function (e) { if (this.evq.length < 400) this.evq.push(e); };
World.prototype.log = function (text, kind) { this.logs.push({ t: this.ut, text, kind: kind || 'info', id: (this._lid = (this._lid || 0) + 1) }); if (this.logs.length > 60) this.logs.shift(); };
World.prototype.body = function (v) { return this.U.byId[v.body]; };
World.prototype.warpVal = function () { return WARPS[this.warpIdx]; };
World.prototype.setWarp = function (i) { this.warpIdx = clamp(i | 0, 0, WARPS.length - 1); };

// ---------- запуск ----------
World.prototype.launch = function (design, siteTheta) {
  const parts = design.parts.map(clonePart);
  const edges = computeEdges(parts);
  const v = makeVessel(parts, edges, design.name || 'Ракета');
  // выровнять стопку: нижняя точка на y=0
  let ymin = 1e9; for (const p of parts) ymin = Math.min(ymin, p.y - pext(p)[1]);
  // ноги: опора ниже
  for (const p of parts) if (p.d.leg) { ymin = Math.min(ymin, p.y + p.d.leg.foot[1]); }
  for (const p of parts) if (p.d.wheel) ymin = Math.min(ymin, p.y - p.d.wheel.r);
  v.stages = []; buildStages(v);
  vesselRefresh(v);
  for (const p of parts) if (p.d.leg) p.st.deployed = true;
  const B = this.homeBody; v.body = B.id;
  const th = siteTheta != null ? siteTheta : this.U.siteTheta;
  this.tile = null; ensureTile(this, B, th, 400);
  const gh = terrH(this, B, th);
  const rr = B.R + gh + (v.mp.cy - ymin) + 0.01;
  const rot = bodyRot(B, this.ut), phi = th + rot;
  v.land = { th, rr, dang: -Math.PI / 2 };
  v.mode = 'landed'; v.clamped = v.engines.some(p => !p.d.eng.rcs); v.a = phi - Math.PI / 2; v.sas = 'hold'; v.sasTarget = v.a; v.rcs = v.rcsList.length > 0; v.age = 0; v.t0 = this.ut;
  this.setPinned(v);
  v.sas = 'up';
  for (const p of parts) { p.temp = 288; }
  v.ec = v.ecCap * 0.98;
  this.vessels.push(v); this.active = v; this.stats.flights++;
  this.log('Старт аппарата «' + v.name + '» (' + fmtMass(v.mp.m) + ')', 'ok');
  return v;
};
World.prototype.setPinned = function (v) {
  const B = this.U.byId[v.body], rot = bodyRot(B, this.ut), phi = v.land.th + rot;
  v.x = v.land.rr * Math.cos(phi); v.y = v.land.rr * Math.sin(phi);
  v.vx = -B.rotW * v.y; v.vy = B.rotW * v.x; v.a = wrapPI(phi + v.land.dang); v.w = B.rotW;
};
World.prototype.pin = function (v) {
  const B = this.U.byId[v.body], rot = bodyRot(B, this.ut), phi = Math.atan2(v.y, v.x);
  v.land = { th: wrapPI(phi - rot), rr: Math.hypot(v.x, v.y), dang: wrapPI(v.a - phi) };
  v.mode = 'landed'; v.vx = -B.rotW * v.y; v.vy = B.rotW * v.x; v.w = B.rotW;
};
// ---------- ступени ----------
World.prototype.stage = function (v) {
  v = v || this.active; if (!v) return;
  if (v.stageIdx >= v.stages.length) return;
  const idx = v.stageIdx++;
  const old = { cx: v.mp.cx, cy: v.mp.cy, m: v.mp.m, x: v.x, y: v.y, vx: v.vx, vy: v.vy, a: v.a, w: v.w };
  const r = fireStage(v, idx);
  // если разгон под нагрузкой: разлёт
  this.afterSplit(v, old, r.debris, r.events);
  for (const e of r.events) { this.event({ t: e.t, v, p: e.p }); }
  if (v.mode === 'landed' && r.events.some(e => e.t === 'sep')) { v.mode = 'phys'; }
  if (r.events.some(e => e.t === 'sep') && this.active === v && !v.parts.some(p => p.d.core && !p.d.core.rocket)) {
    const nx = r.debris.find(d => d.parts.some(p => p.d.core && !p.d.core.rocket));
    if (nx) { this.active = nx; nx.sas = 'prograde'; nx.lastPlan = v.lastPlan; nx.tasks = v.payloadTasks || []; nx.ap = nx.tasks.length ? nx.tasks.shift() : { phase: 'none', done: true }; v.payloadTasks = null; v.tasks = []; nx.name = v.name + ' — аппарат'; v.name += ' (ступень)'; v.debris = false; for (const q of nx.parts) { if ((q.d.solar && q.d.solar.deploy) || (q.d.ant && q.d.ant.deploy)) q.st.deployed = true; } this.log('Аппарат отделён и принят под управление', 'ok'); this.event({ t: 'switch', v: nx }); }
  }
  if (r.events.some(e => e.t === 'ign') && v.mode === 'landed') { /* зажигание: останется закреплённым пока тяга мала */ }
  this.log('Ступень ' + (idx + 1) + ': ' + r.events.map(e => ACT_NAMES[{ ign: 'ign', sep: 'sep', fairing: 'fairing', chute: 'chute', deploy: 'deploy', legs: 'legs' }[e.t]]).filter((x, i, a) => a.indexOf(x) === i).join(', '), 'stage');
  return r;
};
World.prototype.jettisonFairing = function (v) {
  const f = v.parts.find(p => p.d.fair); if (!f) return;
  const old = { cx: v.mp.cx, cy: v.mp.cy, m: v.mp.m, x: v.x, y: v.y, vx: v.vx, vy: v.vy, a: v.a, w: v.w };
  v.parts = v.parts.filter(q => q !== f); v.edges = v.edges.filter(([a, b]) => a !== f.id && b !== f.id);
  v.pm = new Map(v.parts.map(q => [q.id, q])); vesselRefresh(v);
  this.afterSplit(v, old, [], [{ t: 'fairing', p: f }]);
  this.event({ t: 'fairing', v, p: f });
};
// Пересчёт положения после отделения: основной аппарат и осколки
World.prototype.afterSplit = function (v, old, debris, events) {
  vesselRefresh(v);
  const place = (nv, sepV, dirx, diry, mFrac) => {
    // положение центра масс нового тела в МСК
    const c = Math.cos(old.a), s = Math.sin(old.a);
    const dx = nv.mp.cx - old.cx, dy = nv.mp.cy - old.cy;
    const rx = dx * c - dy * s, ry = dx * s + dy * c;
    nv.x = old.x + rx; nv.y = old.y + ry;
    nv.vx = old.vx - old.w * ry; nv.vy = old.vy + old.w * rx;
    nv.a = old.a; nv.w = old.w; nv.body = v.body; nv.mode = v.mode === 'landed' ? 'phys' : v.mode; if (nv !== v) { nv.sas = 'off'; nv.sasTarget = nv.a; }   // основной аппарат сохраняет режим SAS и после ступенизации
    nv.age = 0; nv.armed = v.armed || v.age > 0.3; nv.throttle = 0; nv.t0 = v.t0;
    for (const p of nv.parts) p.st = p.st || {};
    return nv;
  };
  // основной
  place(v, 0); if (v.mode === 'landed') { v.mode = 'phys'; }
  v.mode = v.mode === 'rails' ? 'rails' : 'phys';
  const mainM = v.mp.m;
  const sepSpeed = 1.1;
  for (const d of debris) {
    place(d); d.mode = v.mode;
    // направление разлёта: от центра основного к центру осколка (в МСК)
    let dx = d.x - v.x, dy = d.y - v.y; const l = Math.hypot(dx, dy) || 1; dx /= l; dy /= l;
    const mt = mainM + d.mp.m;
    d.vx += dx * sepSpeed * mainM / mt; d.vy += dy * sepSpeed * mainM / mt;
    v.vx -= dx * sepSpeed * d.mp.m / mt; v.vy -= dy * sepSpeed * d.mp.m / mt;
    this.vessels.push(d);
    d.debris = !d.parts.some(p => p.d.core);
    // у осколков с двигателями — сохраняем список ступеней (без управления)
    d.stages = []; d.stageIdx = 0;
  }
  // полуоболочки обтекателя
  for (const e of events) if (e.t === 'fairing') {
    const f = e.p;
    for (const sg of [-1, 1]) {
      const q = clonePart(f); q.st = { half: sg }; q.w = f.w / 2; q.x = f.x + sg * f.w / 4; q.dry = f.dry / 2; q.d = f.d; q.res = {}; q.shielded = false;
      const hv = makeVessel([q], [], 'Створка обтекателя'); vesselRefresh(hv);
      place(hv); hv.mode = v.mode; hv.debris = true;
      const cc = Math.cos(old.a), ss = Math.sin(old.a);
      const ux = cc * sg, uy = ss * sg;            // «наружу» вдоль локальной x
      hv.vx += ux * 2.4 + (-ss) * 0.3; hv.vy += uy * 2.4 + cc * 0.3; hv.w += sg * -0.15;
      hv.parts[0].d = f.d; this.vessels.push(hv);
    }
  }
};

// ---------- удаление деталей, взрывы ----------
World.prototype.destroyPart = function (v, p, cause) {
  if (!v.parts.includes(p)) return;
  // разрушение при ударе поглощает энергию: уцелевшая часть не отскакивает пружиной, а гасит скорость относительно грунта
  if (cause === 'impact' && v.mode !== 'rails') { const B0 = this.U.byId[v.body], gx = -B0.rotW * v.y, gy = B0.rotW * v.x; v.vx = gx + (v.vx - gx) * 0.4; v.vy = gy + (v.vy - gy) * 0.4; v.w *= 0.4; }
  const old = { cx: v.mp.cx, cy: v.mp.cy, m: v.mp.m, x: v.x, y: v.y, vx: v.vx, vy: v.vy, a: v.a, w: v.w };
  let fuel = 0, ox = false; for (const k in p.res) if (k !== 'ec') { fuel += p.res[k]; if (PROPS[k] && PROPS[k].ox) ox = true; }
  const ca = Math.cos(v.a), sa = Math.sin(v.a); const lx = p.x - v.mp.cx, ly = p.y - v.mp.cy;
  const wx = v.x + lx * ca - ly * sa, wy = v.y + lx * sa + ly * ca;
  const size = Math.max(pw(p), p.h);
  const B = this.U.byId[v.body];
  this.event({ t: 'boom', v, x: wx, y: wy, vx: v.vx, vy: v.vy, fuel, ox, size, cause, a: v.a, w: pw(p), h: p.h, body: B.id, defId: p.d.id, solid: p.d.eng && p.d.eng.solid });
  v.parts = v.parts.filter(q => q !== p);
  v.edges = v.edges.filter(([a, b]) => a !== p.id && b !== p.id);
  v.pm = new Map(v.parts.map(q => [q.id, q])); p.gone = true;
  // ударная волна: соседние детали
  if (fuel > 20 && (ox || fuel > 200)) {
    const rad = 0.55 * Math.cbrt(fuel) * (ox ? 1 : 0.5);
    for (const q of v.parts) { const d = Math.hypot(q.x - p.x, q.y - p.y) - pext(q)[1]; if (d < rad * (q.d.tank ? 0.6 : 1)) { q.dead = q.dead || 'blast'; } }
  }
  if (!v.parts.length) { v.alive = false; return; }
  vesselRefresh(v);
  const comps = components(v.parts, v.edges);
  let debris = [];
  if (comps.length > 1) { const vs = splitVessel(v); debris = vs.filter(x => x !== v); vesselRefresh(v); for (const d of debris) vesselRefresh(d); }
  this.afterSplit(v, old, debris, []);
  if (v === this.active && !hasCore(v)) this.log('Потеряна связь с аппаратом: нет управляющего блока', 'bad');
};
World.prototype.reap = function (v) {
  let any = true, guard = 0;
  while (any && guard++ < 8) {
    any = false;
    for (const p of v.parts.slice()) {
      if (p.dead && v.parts.includes(p)) {
        any = true;
        if (p.dead === 'impact' && p.d.leg) { p.dead = 0; p.st.broken = true; }
        this.destroyPart(v, p, p.dead);
        if (!v.alive) return;
      }
    }
  }
  // давление
  const B = this.U.byId[v.body];
  if (B.atm && v.air && v.air.p > 1e4) {
    for (const p of v.parts.slice()) {
      let lim = p.d.crushP; if (p.insideV) lim = Math.max(lim, p.insideV);
      if (v.air.p > lim && !(this.cheats.noCrash)) { p.dead = 'crush'; }
    }
    if (v.parts.some(p => p.dead)) this.reap(v);
  }
  if (B.gas && v.alt < B.atm.floor) { for (const p of v.parts.slice()) p.dead = 'crush'; this.reap(v); }
};
// ---------- единичный шаг ----------
World.prototype.physStep = function (v, dt) {
  v.age += dt;
  if (v.dirty) vesselRefresh(v);
  // пины
  if (v.mode === 'landed') {
    if (v.ap && !v.ap.done) { const rr0 = Math.hypot(v.x, v.y); apStep(this, v, dt, v.x / rr0, v.y / rr0); }
    const thrusting = v.throttle > 0.003 && v.engines.some(p => p.on && (p.d.eng.solid || p.res)) || Math.abs(v.drive || 0) > 0.01;
    if (!thrusting) { this.setPinned(v); v.thrust = 0; for (const p of v.engines) p.fl = 0; return; }
    if (v.clamped) {   // стартовые захваты держат ракету, пока тяга не превысит вес
      stepVessel(this, v, dt); this.reap(v);
      if (v.alive) {
        const B0 = this.U.byId[v.body], r0 = Math.hypot(v.x, v.y), g0 = B0.gm / (r0 * r0);
        if (v.thrust > 1.03 * v.mp.m * g0 || this.cheats.noGravity) { v.clamped = false; v.mode = 'phys'; } else this.setPinned(v);
      }
      return;
    }
    v.mode = 'phys';
  }
  const c = stepVessel(this, v, dt);
  this.reap(v);
  if (v.alive && v.mode === 'phys') {
    // состояние покоя
    const B = this.U.byId[v.body];
    if (c && c.any && v.contact > 0 && B.landable) {
      const gvx = -B.rotW * v.y, gvy = B.rotW * v.x; const rv = Math.hypot(v.vx - gvx, v.vy - gvy);
      if (rv < 0.12 && Math.abs(v.w - B.rotW) < 0.015 && v.thrust <= 0 && Math.abs(v.drive || 0) < 0.01) { v.rest = (v.rest || 0) + dt; if (v.rest > 1.6) { this.pin(v); v.rest = 0; } } else v.rest = 0;
    } else v.rest = 0;
  }
};
World.prototype.railsStep = function (v, dt) {
  const B = this.U.byId[v.body];
  if (v.mode === 'landed') { this.setPinned(v); return; }
  const o = kepProp(B.gm, v.x, v.y, v.vx, v.vy, dt, v._kp || (v._kp = [0, 0, 0, 0]));
  v.x = o[0]; v.y = o[1]; v.vx = o[2]; v.vy = o[3];
  v.age += dt; v.w = 0;
  if (v.ap && !v.ap.done && (v.ap.phase === 'wait' || v.ap.phase === 'hold' || v.ap.phase === 'corr' || v.ap.phase === 'pefix' || v.ap.phase === 'capture' || v.ap.phase === 'plan') && hasCore(v)) { const rr1 = Math.hypot(v.x, v.y); apStep(this, v, dt, v.x / rr1, v.y / rr1); }
  if (v.ap && !v.ap.done && v.ap.phase === 'node' && hasCore(v)) { const nd = v.ap.node; const rem = [nd.dv[0] - (v.ap.acc ? v.ap.acc[0] : 0), nd.dv[1] - (v.ap.acc ? v.ap.acc[1] : 0)]; v.a = Math.atan2(-rem[0], rem[1]); }
  else if (v.sas && v.sas !== 'hold' && v.sas !== 'off' && hasCore(v)) { const rr = Math.hypot(v.x, v.y); v.a = targetAngleFor(this, v, v.sas, v.x / rr, v.y / rr); }
  const alt = Math.hypot(v.x, v.y) - B.R;
  v.alt = alt;
  // вход в атмосферу или касание → вернуть в физику
  const lim = (B.atm ? B.atm.top : 0) + (B.landable ? Math.max(B.T ? B.T.maxH * 0 : 0, 0) : 0);
  if (alt < Math.max(lim, B.landable ? 1500 : 0) && (B.atm || B.landable)) { v.mode = 'phys'; this.event({ t: 'warpStop', v }); if (v === this.active) this.setWarp(0); }
  if (B.gas && B.atm && alt < B.atm.top) { v.mode = 'phys'; if (v === this.active) this.setWarp(0); }
};
// смена сферы влияния
World.prototype.checkSOI = function (v) {
  const U = this.U;
  for (let k = 0; k < 3; k++) {
    const B = U.byId[v.body]; let changed = false;
    for (const c of B.children) {
      bodyLocal(c, this.ut, this._tmp || (this._tmp = { x: 0, y: 0, vx: 0, vy: 0 }));
      const t = this._tmp;
      if (Math.hypot(v.x - t.x, v.y - t.y) < c.soi) {
        v.x -= t.x; v.y -= t.y; v.vx -= t.vx; v.vy -= t.vy; v.body = c.id; changed = true;
        this.event({ t: 'soi', v, from: B.id, to: c.id }); this.onSOI(v, B, c); break;
      }
    }
    if (!changed && B.parent && Math.hypot(v.x, v.y) > B.soi) {
      const P = U.byId[B.parent]; bodyLocal(B, this.ut, this._tmp || (this._tmp = { x: 0, y: 0, vx: 0, vy: 0 })); const t = this._tmp;
      v.x += t.x; v.y += t.y; v.vx += t.vx; v.vy += t.vy; v.body = P.id; changed = true;
      this.event({ t: 'soi', v, from: B.id, to: P.id }); this.onSOI(v, B, P);
    }
    if (!changed) break;
    this.tile = null;
  }
};
World.prototype.onSOI = function (v, from, to) {
  if (v === this.active) { this.log('Вход в сферу влияния: ' + to.name, 'ok'); if (this.warpIdx > 5) this.setWarp(4); }
};
// допустимый варп
World.prototype.maxWarpIdx = function () {
  // Физическое ускорение (до ×50) доступно ВСЕГДА: на тяге, у поверхности, в атмосфере, при посадке.
  // Ограничения остаются только у ускорения «по орбите» (> ×50): там физика не считается, и пропустить манёвр или упасть было бы нечестно.
  const v = this.active; if (!v) return WARPS.length - 1;
  const B = this.U.byId[v.body];
  if (v.mode === 'landed') return v.throttle > 0.003 ? PHYS_IDX : WARPS.length - 1;
  const alt = Math.hypot(v.x, v.y) - B.R;
  const thrusting = v.throttle > 0.003 && v.engines && v.engines.some(p => p.on);
  if (thrusting) return PHYS_IDX;
  if (v.ap && !v.ap.done) {
    if (v.ap.phase === 'node' && v.mode !== 'landed') {
      const inf = nodeInfo(this, v); const tb = v.ap.node.t - inf.burn / 2 - 60 - this.ut;
      let idx = PHYS_IDX; for (let i = PHYS_IDX + 1; i < WARPS.length; i++) if (WARPS[i] * 6 <= tb) idx = i; return idx;
    }
    if (v.ap.phase === 'wait') return WARPS.length - 1;
    if (v.ap.phase === 'hold' && v.ap.until) { let idx = PHYS_IDX; const tb = v.ap.until - this.ut - 30; for (let i = PHYS_IDX + 1; i < WARPS.length; i++) if (WARPS[i] * 6 <= tb) idx = i; return idx; }
    if (v.ap.phase === 'coast' && alt > (B.atm ? B.atm.top : 0) * 1.05 + 1000) {
      const ci = apCoastInfo(this, v); const tb = ci.tA - ci.burn / 2 - 30;
      let idx = PHYS_IDX; for (let i = PHYS_IDX + 1; i < WARPS.length; i++) if (WARPS[i] * 6 <= tb) idx = i;
      return idx;
    }
    if (v.ap.phase === 'land') {
      if (v.ap.st !== 'fall') return PHYS_IDX; const L = landLead(this, v); let idx = PHYS_IDX; for (let i = PHYS_IDX + 1; i < WARPS.length; i++) if (WARPS[i] * 6 <= L) idx = i; return idx;
    }
    return PHYS_IDX;
  }
  const el = elements(B.gm, v.x, v.y, v.vx, v.vy);
  const peAlt = el.rp - B.R;
  if (B.landable || B.atm) { const safe = B.atm ? B.atm.top : 0; if (alt < safe + 500) return PHYS_IDX; if (el.bound && peAlt < safe + 500 && alt < safe * 3 + 20000) return 6 - 0; if (!el.bound && alt < (B.atm ? B.atm.top : 0) * 2 + 5000) return 4; }
  if (v.contact) return PHYS_IDX;
  return WARPS.length - 1;
};
World.prototype.chooseDt = function (v) {
  const B = this.U.byId[v.body]; const alt = (v.alt != null ? v.alt : Math.hypot(v.x, v.y) - B.R);
  const thr = v.throttle > 0.003 || (v.thrust > 0);
  const near = v.mp && alt < (v.mp.R + 60) && B.landable;
  const fast = this.warpVal() >= 10 ? 2 : 1;      // ×10/×50: шаг вдвое крупнее, иначе телефону не хватит скорости
  if (near || (v.contact > 0)) return (this.coarse ? 1 / 60 : 1 / 120) * fast;
  if (B.atm && alt < B.atm.top && B.atm.dens(alt) > 1e-6) return (this.coarse ? 1 / 30 : 1 / 60) * fast;
  if (thr) return (this.coarse ? 1 / 20 : 1 / 40) * fast;
  return 1 / 15;
};
World.prototype.step = function (dtReal) {
  dtReal = Math.min(dtReal, 0.1);
  let warp = this.warpVal();
  if (this.autoWarp && this.active && this.active.ap && !this.active.ap.done && (this.active.ap.phase === 'coast' || this.active.ap.phase === 'node' || this.active.ap.phase === 'hold' || this.active.ap.phase === 'wait' || (this.active.ap.phase === 'land' && this.active.ap.st === 'fall' && landLead(this, this.active) > 60))) this.setWarp(this.maxWarpIdx());
  else if (this.autoWarp && this.active && this.active.ap && !this.active.ap.done && this.active.ap.phase === 'land' && this.active.mode === 'phys') {
    // автопосадка сама ускоряет время, пока до земли далеко (долгое торможение), и замедляется перед касанием
    const c = landCalc(this, this.active); if (c) { const tt = Math.max(0, c.hg) / Math.max(2, -c.vv); this.setWarp(Math.min(this.maxWarpIdx(), tt > 150 ? 4 : tt > 45 ? 3 : tt > 16 ? 2 : tt > 7 ? 1 : 0)); }
  }
  const mx = this.maxWarpIdx(); if (this.warpIdx > mx) { this.setWarp(mx); }
  warp = this.warpVal();
  const A = this.active;
  let remaining = dtReal * warp;
  let guard = 0;
  const rails = warp > PHYS_MAX;
  // перевод в режимы
  if (rails) {
    for (const v of this.vessels) if (v.mode === 'phys') this.settle(v, v === A);
  } else if (A && A.mode === 'rails') { A.mode = 'phys'; }
  // другие аппараты вне варпа: все в phys рядом, rails вдалеке
  while (remaining > 1e-9 && guard++ < 4000) {
    let dt;
    if (rails) {
      dt = Math.min(remaining, this.railsLimit());
      // автопосадка: подойти к началу торможения в обычной физике
      if (A && A.alive && A.ap && !A.ap.done && A.ap.phase === 'land' && A.ap.st === 'fall') {
        const lead = landLead(this, A); if (lead < 40) { this.setWarp(0); break; } dt = Math.min(dt, Math.max(1, lead - 30));
      }
      // подошло время манёвра: не пролетать мимо, вернуться в физику
      if (A && A.alive && A.ap && !A.ap.done && A.ap.phase === 'node' && A.ap.node) {
        const inf = nodeInfo(this, A), lead = A.ap.node.t - inf.burn / 2 - 60 - this.ut;
        if (lead <= 0.5) { this.setWarp(Math.min(this.warpIdx, 2)); break; }
        dt = Math.min(dt, lead);
      }
    }
    else { dt = A ? Math.min(remaining, this.chooseDt(A)) : Math.min(remaining, 1 / 30); }
    this.ut += dt; remaining -= dt;
    for (let i = 0; i < this.vessels.length; i++) {
      const v = this.vessels[i]; if (!v.alive) continue;
      if (rails || v.mode === 'rails') { if (v.mode === 'phys') this.settle(v, v === A); if (v.mode !== 'phys') this.railsStep(v, dt); else this.physStep(v, dt); }
      else if (v.mode === 'landed') { if (v === A) this.physStep(v, dt); else this.setPinned(v); }
      else {
        // удалённые отлетевшие осколки → по орбите
        if (v !== A && A && (Math.hypot(v.x - A.x, v.y - A.y) > 25000 || (v.debris && v.age > 120 && !v.contact)) && v.body === A.body) { this.settle(v, false); if (v.mode === 'phys') this.physStep(v, dt); else this.railsStep(v, dt); }
        else this.physStep(v, dt);
      }
      if (v.alive) { this.checkSOI(v); Systems.tick(this, v, dt); if (v.ap && v.ap.done && v.tasks && v.tasks.length) { v.ap = v.tasks.shift(); v.ap.t = 0; } }
    }
    // отдельно удаляем мёртвые
    if (this.vessels.some(v => !v.alive)) { this.vessels = this.vessels.filter(v => v.alive || v === A); if (A && !A.alive) { this.onActiveLost(); break; } }
    if (this.vessels.length > 80) this.cullDebris();
  }
  if (A && A.alive) { A.alt = Math.hypot(A.x, A.y) - this.U.byId[A.body].R; this.stats.maxAlt = Math.max(this.stats.maxAlt, A.alt); }
  Science.world(this, dtReal);
};
// Максимальный шаг по рельсам: аналитическое Кеплерово движение точно, ограничиваем только
// обнаружение смены сфер влияния, входа в атмосферу и динамическое время орбиты.
World.prototype.railsLimit = function () {
  let lim = 2e6; const U = this.U;
  for (const v of this.vessels) {
    if (!v.alive || v.mode === 'landed') continue;
    const B = U.byId[v.body]; const r = Math.hypot(v.x, v.y) || 1, sp = Math.hypot(v.vx, v.vy) || 1;
    // динамическое время: orbital 0.1·sqrt(r³/μ), пролёт 0.1·r/v
    lim = Math.min(lim, 0.1 * Math.sqrt(r * r * r / B.gm), 0.1 * r / sp);
    // снижающаяся траектория, пересекающая атмосферу/поверхность: не перепрыгнуть тело
    if (B.landable || B.atm) {
      const top = (B.atm ? B.atm.top : 0) + (B.landable ? 1500 : 0), alt = r - B.R, vr = (v.x * v.vx + v.y * v.vy) / r;
      if (vr < 0 && alt > top) { const el = elements(B.gm, v.x, v.y, v.vx, v.vy); if (el.rp < B.R + top + 1000) lim = Math.min(lim, Math.max(0.4 * (alt - top) / -vr, 0.05)); }
    }
    // дистанция до границ сфер дочерних тел
    for (const c of B.children) {
      bodyLocal(c, this.ut, this._tmp2 || (this._tmp2 = { x: 0, y: 0, vx: 0, vy: 0 }));
      const t = this._tmp2; const d = Math.hypot(v.x - t.x, v.y - t.y) - c.soi;
      const vr = Math.hypot(v.vx - t.vx, v.vy - t.vy) + 1;
      if (d > 0) lim = Math.min(lim, Math.max(0.4 * d / vr, 0.03 * c.soi / vr));
    }
    if (B.parent && B.soi < Infinity) { const d = B.soi - r; if (d > 0) lim = Math.min(lim, Math.max(0.4 * d / sp, 0.03 * B.soi / sp)); }
  }
  return clamp(lim, 0.05, 2e6);
};
World.prototype.onActiveLost = function () {
  const A = this.active; this.active = null;
  this.log('Аппарат «' + (A ? A.name : '') + '» потерян', 'bad'); this.event({ t: 'lost', v: A });
  // другой доступный аппарат с управлением
  const o = this.vessels.find(v => v.alive && v !== A && hasCore(v)); if (o) this.active = o;
};
World.prototype.cullDebris = function () {
  const A = this.active; const deb = this.vessels.filter(v => v.debris && v !== A);
  deb.sort((a, b) => a.age - b.age); while (this.vessels.length > 60 && deb.length) { const d = deb.pop(); d.alive = false; }
  this.vessels = this.vessels.filter(v => v.alive || v === A);
};
// перевести аппарат из физики в «по рельсам» / посадку / уничтожение
World.prototype.settle = function (v, isActive) {
  const B = this.U.byId[v.body]; const alt = Math.hypot(v.x, v.y) - B.R;
  if (v.mode !== 'phys') return;
  const el = elements(B.gm, v.x, v.y, v.vx, v.vy);
  const safe = (B.atm ? B.atm.top : 0) + (B.landable ? 2000 : 0);
  if (v.contact > 0 && (B.landable)) { if (Math.hypot(v.vx + B.rotW * v.y, v.vy - B.rotW * v.x) < 3) { this.pin(v); return; } }
  if ((el.rp - B.R > safe || !el.bound && el.rp - B.R > safe) && alt > safe) { v.mode = 'rails'; v.throttle = 0; v.w = 0; return; }
  if (!isActive) {
    // не активный: если падает — уничтожаем (обломки сгорели/разбились), иначе остаёмся
    if (el.rp - B.R < safe && alt < safe * 2) { v.alive = false; this.event({ t: 'vanish', v }); } else { v.mode = 'rails'; }
    return;
  }
  // активный, но в атмосфере/у поверхности — не даём варпить
  if (this.warpIdx > PHYS_IDX) this.setWarp(PHYS_IDX);
};
// -------- телепорт / читы --------
World.prototype.placeInOrbit = function (v, bodyId, alt, dir) {
  const B = this.U.byId[bodyId]; v.body = bodyId; dir = dir || (B.rotW < 0 ? -1 : 1);
  const r = B.R + alt, vc = Math.sqrt(B.gm / r);
  const th = (v.orbPhase = ((v.orbPhase || 0) + 1.3));
  v.x = r * Math.cos(th); v.y = r * Math.sin(th);
  v.vx = -dir * vc * Math.sin(th); v.vy = dir * vc * Math.cos(th);
  v.mode = 'phys'; v.land = null; v.rest = 0; v.a = Math.atan2(-v.vx, v.vy); v.w = 0; v.sasTarget = v.a; v.sas = 'prograde';
  this.tile = null; if (v.parts) vesselRefresh(v);
};
// «зависнуть» над телом в начале спуска: высота, скорость падения и горизонтальная скорость относительно поверхности (м/с)
World.prototype.placeDescent = function (v, bodyId, alt, vDown, vHor, dir) {
  const B = this.U.byId[bodyId]; v.body = bodyId; dir = dir || 1;
  const th = (v.orbPhase = ((v.orbPhase || 0) + 1.3)), rx = Math.cos(th), ry = Math.sin(th), tx = -ry * dir, ty = rx * dir;
  this.tile = null; if (v.parts) vesselRefresh(v); ensureTile(this, B, th - bodyRot(B, this.ut), 2000);
  let down = 1; for (const p of (v.parts || [])) { let yb = p.y - pext(p)[1]; if (p.d.leg) yb = Math.min(yb, p.y + p.d.leg.foot[1]); down = Math.max(down, v.mp.cy - yb); }
  const r = surfR(this, B, th - bodyRot(B, this.ut)) + down + alt;       // высота — над грунтом, а не над средним радиусом
  v.x = r * rx; v.y = r * ry;
  const sx = -vDown * rx + vHor * tx, sy = -vDown * ry + vHor * ty;
  v.vx = sx - B.rotW * v.y; v.vy = sy + B.rotW * v.x;
  v.mode = 'phys'; v.land = null; v.rest = 0; v.w = 0; v.sas = 'sretro'; v.a = Math.atan2(sx, -sy); v.sasTarget = v.a;
  this.tile = null; if (v.parts) vesselRefresh(v);
};
World.prototype.placeOnSurface = function (v, bodyId, th) {
  const B = this.U.byId[bodyId]; v.body = bodyId; this.tile = null; ensureTile(this, B, th, 400);
  vesselRefresh(v);
  // опорные точки (низ детали, ноги, колёса): ставим так, чтобы самая «глубокая» относительно рельефа касалась земли
  let rr = 0;
  for (const p of v.parts) {
    let yb = p.y - pext(p)[1];
    if (p.d.leg) yb = Math.min(yb, p.y + p.d.leg.foot[1]);
    if (p.d.wheel) yb = Math.min(yb, p.y - p.d.wheel.r);
    rr = Math.max(rr, surfR(this, B, th - p.x / B.R) + (v.mp.cy - yb));
  }
  v.land = { th, rr: rr + 0.01, dang: -Math.PI / 2 }; v.mode = 'landed'; v.throttle = 0; v.rest = 0; v.clamped = false;
  if (v.parts.some(p => p.d.wheel) && !v.engines.some(p => !p.d.eng.rcs)) { v.sas = 'off'; v.rcs = false; }   // вездеход: ориентация по рельефу, без «выравнивания» SAS
  this.setPinned(v);
};
World.prototype.switchTo = function (v) {
  if (!v || !v.alive) return; this.active = v; if (v.mode === 'rails' && this.warpIdx <= PHYS_IDX) v.mode = 'phys';
};
World.prototype.recover = function (v) {
  const B = this.U.byId[v.body]; if (!(B.id === this.U.home && v.mode === 'landed')) return null;
  let sci = 0;
  for (const it of v.science.slice()) { if (it.type === 'sample' || it.type === 'data') { sci += Science.credit(this, it, 1.0); } }
  v.science = [];
  v.alive = false; this.vessels = this.vessels.filter(x => x !== v);
  if (this.active === v) this.active = this.vessels.find(x => x.alive && hasCore(x)) || null;
  this.log('Аппарат возвращён, наука +' + sci.toFixed(1), 'ok');
  return { sci };
};
// ---------- сохранение ----------
function serPart(p) { return { i: p.id, d: p.defId, x: p.x, y: p.y, w: p.w, h: p.h, w2: p.w2, n: p.n, r: p.rot, f: p.flip ? 1 : 0, s: p.stage, res: p.res, a: p.abl, on: p.on ? 1 : 0, ign: p.ign, st: p.st, t: p.temp }; }
function desPart(o) { const p = newPart(o.d, o.x, o.y, { w: o.w, h: o.h, w2: o.w2, n: o.n, rot: o.r, flip: !!o.f, stage: o.s }); p.id = o.i; p.res = o.res || {}; p.abl = o.a || 0; p.on = !!o.on; p.ign = o.ign; p.st = o.st || {}; p.temp = o.t || 290; if (p.id >= _pid) _pid = p.id + 1; return p; }
function serDesign(D) { return { name: D.name, parts: D.parts.map(serPart) }; }
function desDesign(o) { const D = new Design(o.name); D.parts = o.parts.map(desPart); D.edges = computeEdges(D.parts); return D; }
function serVessel(v) { return { id: v.id, name: v.name, parts: v.parts.map(serPart), edges: v.edges, body: v.body, x: v.x, y: v.y, vx: v.vx, vy: v.vy, a: v.a, w: v.w, mode: v.mode, throttle: v.throttle, stageIdx: v.stageIdx, sas: v.sas, sasTarget: v.sasTarget, land: v.land, ec: v.ec, t0: v.t0, science: v.science, samples: v.samples, debris: v.debris, nodes: v.nodes, rcs: v.rcs, cross: v.cross, ap: v.ap || null, tasks: v.tasks || [], payloadTasks: v.payloadTasks || null, armed: !!v.armed, name0: v.name0 }; }
function desVessel(o) {
  const parts = o.parts.map(desPart); const v = makeVessel(parts, o.edges, o.name); v.id = o.id; if (v.id >= _vid) _vid = v.id + 1;
  Object.assign(v, { body: o.body, x: o.x, y: o.y, vx: o.vx, vy: o.vy, a: o.a, w: o.w, mode: o.mode, throttle: o.throttle, stageIdx: o.stageIdx, sas: o.sas, sasTarget: o.sasTarget, land: o.land, ec: o.ec, t0: o.t0, science: o.science || [], samples: o.samples || [], debris: o.debris, nodes: o.nodes || [], rcs: o.rcs, cross: o.cross });
  v.ap = o.ap || null; v.tasks = o.tasks || []; v.payloadTasks = o.payloadTasks || null; v.armed = !!o.armed;
  buildStages(v); vesselRefresh(v); return v;
}
World.prototype.serialize = function () {
  return { univ: { kind: this.U.kind, seed: this.U.seed }, ut: this.ut, t0: this.t0, vessels: this.vessels.filter(v => v.alive).map(serVessel), active: this.active ? this.active.id : null, cheats: this.cheats, funds: this.funds, sandbox: this.sandbox, tier: this.tier, science: this.science, contracts: this.contracts, stats: this.stats, warp: this.warpIdx, autoWarp: !!this.autoWarp };
};
function worldFromSave(s) {
  const U = s.univ.kind === 'solar' ? makeSolarSystem() : s.univ.kind === 'trappist' ? makeTrappist() : makeRandomSystem(s.univ.seed);
  const W = new World(U, { ut: s.ut, funds: s.funds, sandbox: s.sandbox, tier: s.tier });
  W.t0 = s.t0; W.cheats = Object.assign(W.cheats, s.cheats || {}); W.science = s.science || W.science; W.contracts = s.contracts || []; W.stats = s.stats || W.stats;
  W.vessels = s.vessels.map(desVessel); W.active = W.vessels.find(v => v.id === s.active) || null; W.warpIdx = Math.min(s.warp || 0, 2); W.autoWarp = !!s.autoWarp;
  // восстановить вращение дома (фаза зависит от t0)
  setStartRotation(U, W.eph, W.t0, 8.6);
  return W;
}
