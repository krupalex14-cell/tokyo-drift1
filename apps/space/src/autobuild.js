'use strict';
// ============ Автосборка: ИИ строит ракету под зонд и точку назначения ============
const AutoBuild = {
  NAMES: ['Эконом', 'Надёжная', 'Мощная'],
  // --- что за полезная нагрузка ---
  payloadInfo(pd) {
    const ps = pd.parts; let m = 0, yminAll = 1e9, yminAx = 1e9, ymax = -1e9, xw = 0, hasCore = false;
    for (const p of ps) {
      m += partMassTotal(p); const lo = p.y - p.h / 2; yminAll = Math.min(yminAll, lo); ymax = Math.max(ymax, p.y + p.h / 2); xw = Math.max(xw, Math.abs(p.x) + pw(p) / 2);
      if (Math.abs(p.x) - pw(p) / 2 <= 0.08) yminAx = Math.min(yminAx, lo);            // деталь пересекает ось: она и крепится к адаптеру
      if (p.d.core && !p.d.core.rocket) hasCore = true;
    }
    const ymin = yminAx < 1e8 ? yminAx : yminAll;                                      // низ осевой «колонны» — сюда встанет адаптер
    let bw = 0; for (const p of ps) if (Math.abs(p.x) - pw(p) / 2 <= 0.08 && p.y - p.h / 2 < ymin + 0.2) bw = Math.max(bw, pw(p));
    return { mass: m, ymin, yminAll, ymax, h: ymax - Math.min(ymin, yminAll), halfW: xw, baseW: bw || 1, hasCore };
  },
  // --- сколько Δv нужно от поверхности до круговой орбиты ---
  ascentDV(B, h, twr) {
    const vc = Math.sqrt(B.gm / (B.R + h)), vrot = Math.abs(B.rotW) * B.R;
    const atmK = B.atm ? clamp(B.atm.rho0 / 1.2, 0.15, 1.4) : 0;
    const L = vc * (0.115 + 0.10 * atmK) * (1 + 0.6 * Math.max(0, 1.3 - (twr || 1.4)));
    return { vc, vrot, loss: L, dv: vc - vrot + L };
  },
  fairDims(pl) { const Wf = this.dia(DIAS, Math.max(pl.halfW * 2 + 0.3, 1.35)); return { Wf, Hf: Math.max(Wf * 0.9, (pl.h + 0.5) * 1.2 + 0.3) }; },
  ringDims(Dl) { const w = clamp(Dl * 0.7, 0.5, 1.5); return { w, h: 0.25 }; },
  topMass(home, pl) {
    const fd = this.fairDims(pl); const rd = this.ringDims(1.8);
    const ring = 25 + Math.PI * (rd.w / 2) ** 2 * (rd.h - 0.1 * rd.w) * 0.94 * 1004 * 0.97 * 1.1;
    const fair = home.atm ? 11 * 0.85 * Math.PI * fd.Wf * fd.Hf + 40 : 0;
    return 120 + 25 + ring + fair + 30 * Math.PI * 0.85 * 0.85 / 4 + 8;
  },
  engines(W) {
    const ok = d => W.sandbox || W.cheats.freeBuild || d.tier <= W.tier;
    return PART_LIST.filter(d => d.cat === 'engine' && d.eng && !d.eng.rcs && !d.eng.solid && !(d.eng.power > 0) && !d.eng.nuke && ok(d));
  },
  tankOf(prop) { return PART_LIST.find(d => d.tank && d.tank.prop === prop && d.cat === 'tank'); },
  tankLen(P, D, prop) { const r = PROPS[prop].rho; return P / (r * Math.PI / 4 * D * D * 0.94 * 0.97) + 0.1 * D; },
  // минимальный диаметр из списка
  dia(list, x) { for (const d of list) if (d >= x - 1e-6) return d; return list[list.length - 1]; },
  // --- аналитический расчёт ступеней ---
  solve(W, home, goal, pl, sel, split, o) {
    const g0 = G0, nS = sel.length, dvTot = goal.dv * (1 + o.margin);
    const topM = pl.mass + o.topExtra;                    // всё над последней ступенью
    let mUp = topM; const res = []; let ok = true;
    const dvs = sel.map((_, i) => dvTot * split[i]);
    for (let i = nS - 1; i >= 0 && ok; i--) {
      const e = sel[i].d, E = e.eng, prop = E.prop, PR = PROPS[prop], tk = this.tankOf(prop);
      if (!tk) { ok = false; break; }
      const IspE = i === 0 ? E.IspS + 0.55 * (E.IspV - E.IspS) : E.IspV, ve = IspE * g0;
      const isFirst = i === 0, twr = isFirst ? o.twr1 : (i === nS - 1 ? o.twrLast : o.twrMid);
      const kk = PR.frac; let n = 1, P = 0, mEng = 0, mTot = 0, D = 0, dryT = 0, dec = 0, ad = 0;
      for (let it = 0; it < 8; it++) {
        { let lo = clusterW(e.w, n) / 1.03; if (i === nS - 1) lo = Math.max(lo, pl.baseW * 0.85); else lo = Math.max(lo, res[i + 1].D); D = this.dia(tk.size.dia, Math.max(lo, 0.3)); }
        mEng = n * e.mass; dec = isFirst ? 0 : 25 * Math.PI * D * D / 4 + 15 + 80; ad = 0;
        const c = 3 * D * D * 0.35, mu = mUp + mEng + dec + ad, Rr = Math.exp(dvs[i] / ve);
        const den = 1 - kk * (Rr - 1); if (den <= 0.02) { ok = false; break; }
        P = (mu + c) * (Rr - 1) / den; dryT = Math.max(2, P * kk + c); mTot = mUp + mEng + dec + dryT + P;
        const F = (isFirst ? E.Fv * E.IspS / E.IspV : E.Fv) * 1; const need = Math.ceil(twr * mTot * (isFirst ? home.g : 9.81) / F - 1e-9);
        const nn = Math.max(1, need); if (nn === n) break; n = nn;
      }
      if (!ok) break;
      if (n > (o.maxN || 33)) { ok = false; break; }
      // обязательный перезапуск для верхней ступени при переходе
      if (i === nS - 1 && goal.restarts > E.restarts) { ok = false; break; }
      let L = this.tankLen(P, D, prop);
      while (L / D > 15) { const nd = tk.size.dia.find(x => x > D + 1e-6); if (!nd || nd > 10.2) break; D = nd; L = this.tankLen(P, D, prop); }
      if (L / D > 24 || L < 0.3) { ok = false; break; }
      res[i] = { e, n, D, P, L, prop, tk, mEng, dryT, dec, mTot, dv: dvs[i], F: E.Fv * n };
      mUp = mTot;
    }
    if (!ok) return null;
    for (let i = nS - 2; i >= 0; i--) if (res[i].D < res[i + 1].D) { res[i].D = res[i + 1].D; res[i].L = this.tankLen(res[i].P, res[i].D, res[i].prop); }
    let cost = 0; for (const r of res) cost += r.e.cost * r.n + 1.5 * r.P + 8000 * r.D + 30e3 + 15e3 * r.D * r.D;
    return { stages: res, m0: mUp, cost, nS, dvTot };
  },
  // --- сборка реального проекта из спецификации ---
  assemble(W, home, pl, payload, sp, o) {
    const D = new Design(o.name || 'Ракета'); const S = sp.stages; const nS = S.length; const edgeStage = [];
    D.top = 0; const keep = {};
    for (let i = 0; i < nS; i++) {
      const s = S[i];
      if (i > 0) {
        const Dp = S[i - 1].D;
        if (Math.abs(Dp - s.D) > 0.05) { const ad = D.add('adapter', { w: Dp, w2: s.D, h: Math.max(0.6, Math.abs(Dp - s.D) * 0.9 + 0.4) }); ad.w = Dp; ad.w2 = s.D; }
        const dc = D.add('dec', { w: s.D }); dc.stage = i;
      }
      const eng = D.add(s.e.id, { n: s.n }); eng.stage = i;
      const tk = D.add(s.tk.id, { w: s.D, h: s.L });
    }
    const lastD = S[nS - 1].D;
    { const rd = this.ringDims(lastD); D.add('acs_ring', { w: rd.w, h: rd.h }); }
    const av = D.add('core_avionics', {});
    const fairBase = D.top;
    const pafW = this.dia(PARTS.adapter_payload.size.dia, Math.min(3.7, Math.max(1.0, pl.baseW)));
    const paf = D.add('adapter_payload', { w: pafW, y: fairBase + 0.15 }); paf.stage = nS; D.top = fairBase + 0.3;
    // нагрузка
    const dy = D.top - pl.ymin; const payloadParts = [];
    for (const p of payload.parts) { const q = clonePart(p); q.y = p.y + dy; q.stage = -1; q.id = _pid++; D.parts.push(q); payloadParts.push(q); }
    let fair = null;
    if (home.atm && o.fairing !== false) {
      const { Wf, Hf } = this.fairDims(pl);
      fair = D.add('fairing', { w: Wf, h: Hf, y: fairBase + Hf / 2 }); fair.stage = -1;
    }
    D.edges = computeEdges(D.parts);
    return { design: D, nS, paf, fair, payloadParts };
  },
  // --- прогон полёта в «песочнице» ---
  simulate(W0, design, goal, o) {
    o = o || {};
    const W = new World(W0.U, { ut: W0.ut, tier: 9 }); W.sandbox = true; W.autoWarp = true; W.coarse = true;
    const v = W.launch(clonePartsDesign(design)); const B = W.U.byId[v.body];
    v.ap = { phase: 'launch', alt: goal.alt, dir: 1, stageLimit: o.stageLimit != null ? o.stageLimit : design._stageLimit };
    const t0 = W.ut; let maxQ = 0, maxG = 0, stepsMax = o.maxSteps || 60 * 3200;
    for (let i = 0; i < stepsMax && v.alive && !v.ap.done; i++) { W.step(1 / 30); if (v.q > maxQ) maxQ = v.q; if (v.gload > maxG) maxG = v.gload; }
    const el = orbitInfo(W, v); const ok = v.alive && v.ap.phase === 'done' && el.rp - B.R > (B.atm ? B.atm.top : 0) && el.e < 0.05;
    let dvLeft = 0; if (v.alive) dvLeft = this.remainDV(v, v.ap.stageLimit);
    return { ok, alive: v.alive, pe: el.rp - B.R, ra: el.e < 1 ? el.ra - B.R : 1e12, t: W.ut - t0, dvUsed: v.dvUsed || 0, dvLeft, maxQ, maxG, fail: v.ap.fail || (v.alive ? '' : 'Ракета разрушена'), phase: v.ap.phase, mass: v.mp ? v.mp.m : 0 };
  },
  // оставшееся Δv: сжигание всех баков до ступени-разделителя полезной нагрузки
  remainDV(v, lim) {
    const parts = v.parts.map(clonePart); const edges = v.edges.map(e => e.slice()); const c = makeVessel(parts, edges); c.stages = []; vesselRefresh(c);
    let dv = 0; const maxSt = Math.max(-1, ...parts.map(p => p.stage)); const stopAt = lim != null ? lim : maxSt + 1;
    let st = v.stageIdx - 1;
    for (let guard = 0; guard < 8; guard++) {
      let t = 0;
      for (let it = 0; it < 4000; it++) {
        let F = 0, any = false;
        for (const p of c.engines) { if (!p.on) continue; const e = p.d.eng; if (e.power > 0) continue; const av = propAvail(c, p, e.prop); if (av <= 0) continue; const md = engMdot(e, 1, p.n), take = Math.min(1, av / (md * 2)); F += engThrust(e, p, 0, 1) * take; drawProp(c, p, e.prop, md * 2 * take); any = true; }
        if (!any || F <= 0) break; const m = c.mp.m; dv += F / m * 2; t += 2; c.mp = massProps(c.parts); if (t > 8000) break;
      }
      st++; if (st >= stopAt) break;
      fireStage(c, st);
    }
    return dv;
  },
  // цель полёта → требования к ракете (Δv отлёта берём из планировщика)
  planGoal(W, targetId, alt) {
    const home = W.homeBody; alt = alt || 200e3;
    if (!targetId || targetId === home.id) return { alt, inj: 0, restarts: 0, label: 'Околоземная орбита ' + Math.round(alt / 1000) + ' км' };
    const p = Planner.find(W, { body: home.id, r0: home.R + alt, dir: 1, theta0: 0, t0: W.ut + 7200, target: targetId });
    if (p.err) return { err: p.err };
    return { alt, inj: p.dvMag * 1.02, restarts: 2, plan: p, target: targetId, label: 'Перелёт к: ' + W.U.byId[p.target].name };
  },
  // запуск миссии: взлёт → окно → разгонный импульс → отделение
  startMission(W, v, goal, design) {
    const lim = design._stageLimit != null ? design._stageLimit : v.stages.length - 1;
    v.ap = { phase: 'launch', alt: goal.alt, dir: 1, stageLimit: lim }; v.tasks = [];
    if (goal.target) {
      v.tasks.push({ phase: 'plan', target: goal.target, stageLimit: lim }); v.tasks.push({ phase: 'sep', idx: lim });
      const par = W.homeBody.parent || W.homeBody.id, child = goal.plan && goal.plan.kind === 'child';
      v.payloadTasks = [child ? { phase: 'wait', dt: 1800 } : { phase: 'wait', soi: par, extra: 2 * 86400 }, { phase: 'corr' }, { phase: 'wait', soi: goal.target, extra: 600 }, { phase: 'pefix' }, { phase: 'capture' }, { phase: 'hold', sas: 'prograde' }];
    }
    else v.tasks.push({ phase: 'hold', sas: 'prograde' });
    W.autoWarp = true;
  },
  // --- главный метод ---
  // goal: { alt, dv (вся Δv от земли), inj (Δv отлёта), restarts }
  run(W, payload, goalIn, o) {
    o = o || {}; const home = W.homeBody; const pl = this.payloadInfo(payload);
    if (!pl.hasCore) return { err: 'У зонда нет блока управления (бортовой компьютер/кубсат). Добавьте его — без него нечем управлять после отделения.' };
    const goal = Object.assign({ alt: 200e3, inj: 0, restarts: 0 }, goalIn);
    const asc = this.ascentDV(home, goal.alt, 1.4); goal.dv = asc.dv + (goal.inj || 0); goal.restarts = goal.inj > 0 ? 2 : 0;
    const eng = this.engines(W); if (!eng.length) return { err: 'Нет доступных двигателей: изучите технологии' };
    const topExtra = this.topMass(home, pl);
    let cands = [];
    const firsts = eng.filter(d => !d.eng.vac && d.eng.Fv >= 15e3);
    const uppers = eng.filter(d => d.eng.restarts >= 1);
    const splits2 = [[0.40, 0.60], [0.46, 0.54], [0.52, 0.48], [0.58, 0.42]], splits3 = [[0.28, 0.32, 0.40], [0.34, 0.33, 0.33], [0.40, 0.30, 0.30]];
    // сначала «приличные» ракеты (≤ 9 двигателей в ступени); если таких нет — разрешаем большие кластеры
    for (const maxN of [9, 33]) {
      for (const margin of [0.05]) {
        for (const e1 of firsts) for (const e2 of uppers) {
          for (const sp of splits2) { const r = this.solve(W, home, goal, pl, [{ d: e1 }, { d: e2 }], sp, { margin, twr1: 1.35, twrMid: 0.7, twrLast: 0.5, topExtra, maxN }); if (r) cands.push(r); }
          if (goal.dv > 12000) for (const e3 of uppers) { if (e3 === e2) continue; for (const sp of splits3) { const r = this.solve(W, home, goal, pl, [{ d: e1 }, { d: e2 }, { d: e3 }], sp, { margin, twr1: 1.35, twrMid: 0.7, twrLast: 0.45, topExtra, maxN }); if (r) cands.push(r); } }
        }
      }
      if (cands.length >= 3) break;
    }
    for (const c of cands) c.score = c.cost * (1 + 0.015 * c.stages.reduce((a, s) => a + s.n - 1, 0));
    if (!cands.length) return { err: 'Подходящую ракету из доступных деталей собрать не удалось (слишком тяжёлая нагрузка или цель). Изучите больше технологий.' };
    cands.sort((a, b) => a.score - b.score);
    // уникальные по набору двигателей
    const seen = new Set(), pick = [];
    for (const c of cands) { const key = c.stages.map(s => s.e.id).join('+'); if (seen.has(key)) continue; seen.add(key); pick.push(c); if (pick.length >= 8) break; }
    const out = [];
    const marginFor = [0.04, 0.12, 0.25];
    let vi = 0;
    for (const c of pick) {
      if (out.length >= 3) break;
      const mg = marginFor[out.length] || 0.1;
      const res = this.verify(W, home, payload, pl, goal, c, mg, topExtra, o);
      if (res) { res.name = this.NAMES[out.length]; out.push(res); }
    }
    if (!out.length) return { err: 'Расчёт не сошёлся: ни один вариант не вышел на орбиту в проверочном полёте.' };
    return { ok: true, variants: out, goal, payloadInfo: pl };
  },
  // собрать, прогнать, при недолёте — добавить топлива
  verify(W, home, payload, pl, goal, c, margin, topExtra, o) {
    const sel = c.stages.map(s => ({ d: s.e })); const split = c.stages.map(s => s.dv / c.dvTot);
    const asc = this.ascentDV(home, goal.alt, 1.4); const inj = goal.inj || 0; let loss = asc.loss, cur = c;
    const TWM = [0.7, 0.9, 1.1, 1.3, 1.5, 1.7], TWL = [0.5, 0.75, 0.95, 1.15, 1.35, 1.55], TW1 = [1.35, 1.4, 1.5, 1.6, 1.7, 1.8]; let tw = 0;
    for (let tries = 0; tries < 6; tries++) {
      const dvReq = (asc.vc - asc.vrot + loss) + inj;
      const sp = this.solve(W, home, { dv: dvReq * (1 + margin), restarts: goal.restarts }, pl, sel, split, { margin: 0, twr1: TW1[tw], twrMid: TWM[tw], twrLast: TWL[tw], topExtra }) || cur;
      const asm = this.assemble(W, home, pl, payload, sp, { name: 'Ракета «' + (payload.name || 'зонд') + '»' });
      asm.design._stageLimit = asm.nS;
      let sim; try { sim = this.simulate(W, asm.design, goal); } catch (e) { sim = { ok: false, fail: 'ошибка: ' + e.message, dvUsed: 0 }; }
      const need = inj * 1.03, ascOK = sim.ok;
      const realLoss = sim.dvUsed > 0 ? Math.max(0, sim.dvUsed - (asc.vc - asc.vrot)) : loss * 1.15;
      if (ascOK && sim.dvLeft >= need - 1 && tries >= 0) {
        const cost = asm.design.parts.reduce((s, p) => s + partCost(p), 0);
        const mp = massProps(asm.design.parts); const tdv = totalDV(asm.design, 9.80665, 0);
        return { design: asm.design, sim, spec: sp, nS: asm.nS, cost, mass0: mp.m, margin, stageLimit: asm.nS, report: this.report(asm, sp, sim, tdv, pl, goal, cost, mp.m) };
      }
      if (ascOK) loss = Math.max(loss, realLoss); else { loss = Math.max(loss * 1.08, realLoss * 1.04); if (!sim.alive || sim.ra < goal.alt * 0.9) tw = Math.min(tw + 1, TWM.length - 1); }
      if (ascOK) { margin += Math.max(0.03, (need - sim.dvLeft) / Math.max(3000, dvReq) + 0.02); }
      cur = sp;
    }
    return null;
  },
  report(asm, sp, sim, tdv, pl, goal, cost, m0) {
    const st = sp.stages.map((s, i) => ({ eng: s.e.name, n: s.n, prop: PROPS[s.prop].name, D: s.D, L: s.L, P: s.P }));
    return { stages: st, m0, cost, payloadMass: pl.mass, twr0: tdv.stages[0] ? tdv.stages[0].twr : 0, dvStages: tdv.stages.map(s => s.dv), dvLeft: sim.dvLeft, tAscent: sim.t, maxQ: sim.maxQ, maxG: sim.maxG, pe: sim.pe, ra: sim.ra, orbitAlt: goal.alt, inj: goal.inj || 0 };
  }
};
function clonePartsDesign(d) { const n = new Design(d.name); n.parts = d.parts.map(clonePart); n.edges = d.edges.map(e => e.slice()); n.top = d.top; n._stageLimit = d._stageLimit; return n; }
