'use strict';
// ============ Планировщик перелётов: окна запуска, Ламберт, манёвры ============
const Planner = {
  chain(U, b) { const c = [b]; while (c[c.length - 1].parent) c.push(U.byId[c[c.length - 1].parent]); return c; },
  relation(U, B, T) {
    if (B === T) return { ok: false, err: 'Вы уже здесь' };
    const cb = this.chain(U, B), ct = this.chain(U, T);
    const ib = cb.findIndex(x => ct.includes(x)); const X = cb[ib], it = ct.indexOf(X);
    if (X === B) return { ok: true, kind: 'child', A: B, bT: ct[it - 1] };
    if (X === T) return { ok: false, err: 'Цель — родительское тело: возврат строится вручную' };
    const bB = cb[ib - 1], bT = ct[it - 1];
    if (bB !== B) return { ok: false, err: 'Из системы спутника: сначала уйдите на орбиту планеты ' + bB.name };
    return { ok: true, kind: 'sib', A: X, bB, bT };
  },
  rel(W, b, A, t) { const s = W.eph.at(t), sb = s[b.idx], sa = s[A.idx]; return [sb.x - sa.x, sb.y - sa.y, sb.vx - sa.vx, sb.vy - sa.vy]; },
  defaultRp(T) { return T.R + (T.atm ? Math.max(T.atm.top * (T.gas ? 0.2 : 1) + 25e3, 60e3) : Math.max(0.12 * T.R, 60e3)); },
  // ---- одна оценка: вылет в момент tb, перелёт tof ----
  evalAt(W, ctx, tb, tof) {
    const { rel, B, T, bT, A, r0, vc, dir, th0, t0, nO, rp } = ctx;
    const muT = bT.gm, vsw = [0, 0];
    let x1, y1, vx1, vy1, ex, ey, evx, evy;
    if (rel.kind === 'child') {
      if (ctx.st) { const o = kepProp(B.gm, ctx.st.x, ctx.st.y, ctx.st.vx, ctx.st.vy, tb - t0, ctx._o || (ctx._o = [0, 0, 0, 0])); x1 = o[0]; y1 = o[1]; vx1 = o[2]; vy1 = o[3]; }
      else { const th = th0 + dir * nO * (tb - t0);
        x1 = r0 * Math.cos(th); y1 = r0 * Math.sin(th); vx1 = -dir * vc * Math.sin(th); vy1 = dir * vc * Math.cos(th); }
    } else { const s = this.rel(W, ctx.bB, A, tb); x1 = s[0]; y1 = s[1]; vx1 = s[2]; vy1 = s[3]; }
    const s2 = rel.kind === 'child' ? (() => { const o = W.eph.rel(bT, tb + tof); return [o.x, o.y, o.vx, o.vy]; })() : this.rel(W, bT, A, tb + tof);
    const mu = rel.kind === 'child' ? B.gm : A.gm;
    let ax = s2[0], ay = s2[1], L = null, vin = 0, ux = 0, uy = 0;
    for (let it = 0; it < 3; it++) {
      L = lambert(mu, x1, y1, ax, ay, tof, true); if (!L) return null;
      const wx = L.v2[0] - s2[2], wy = L.v2[1] - s2[3]; vin = Math.hypot(wx, wy); ux = wx / vin; uy = wy / vin;
      const b = rp * Math.sqrt(1 + 2 * muT / (rp * vin * vin));       // прицельная дальность для перицентра rp
      ax = s2[0] + b * uy * ctx.side; ay = s2[1] - b * ux * ctx.side;   // сторона: прямой/обратный захват
    }
    const wx0 = L.v1[0] - vx1, wy0 = L.v1[1] - vy1; const dvm = Math.hypot(wx0, wy0);
    let dvDep, vinfDep = 0;
    if (rel.kind === 'child') dvDep = dvm; else { vinfDep = dvm; dvDep = Math.sqrt(vinfDep * vinfDep + 2 * B.gm / r0) - vc; }
    const rc = rp, dvCap = Math.sqrt(vin * vin + 2 * muT / rc) - Math.sqrt(muT / rc);
    return { tb, tof, cost: dvDep + ctx.capW * dvCap, dvDep, dvCap, vinfArr: vin, vinfDep, v1: L.v1, v2: L.v2, x1, y1, vx1, vy1, wx: wx0, wy: wy0 };
  },
  // ---- поиск лучшего окна ----
  // s: { body, r0, dir, theta0, t0, target, rp, capW, horizon }
  find(W, s) {
    const U = W.U, B = U.byId[s.body], T = U.byId[s.target]; if (!B || !T) return { err: 'Нет цели' };
    const rel = this.relation(U, B, T); if (!rel.ok) return { err: rel.err };
    const bT = rel.bT, r0 = s.r0, vc = Math.sqrt(B.gm / r0), nO = vc / r0;
    const ctx = { rel, B, T, bT, bB: rel.bB, A: rel.A, r0, vc, dir: s.dir || 1, th0: s.theta0 || 0, t0: s.t0 != null ? s.t0 : W.ut, nO, rp: s.rp || this.defaultRp(bT), capW: s.capW != null ? s.capW : 0.35, side: s.side || 1, st: s.state || null };
    const tOrb = TAU / nO; let H, step, tofs = [];
    if (rel.kind === 'child') {
      const aT = bT.orb.a, tH = Math.PI * Math.sqrt(Math.pow((r0 + aT) / 2, 3) / B.gm);
      H = Math.min(1.08 * bT.period, 60 * DAY); step = tOrb / 5;
      for (let i = 0; i < 14; i++) tofs.push(tH * Math.pow(3.6, i / 13) * 0.62);
    } else {
      const bB = rel.bB, Pb = bB.period, Pt = bT.period; const syn = Math.abs(Pb - Pt) < 1 ? Pb : 1 / Math.abs(1 / Pb - 1 / Pt);
      const aB = bB.orb.a, aT = bT.orb.a, tH = Math.PI * Math.sqrt(Math.pow((aB + aT) / 2, 3) / rel.A.gm);
      H = Math.min(syn * 1.03, s.horizon || 1e10); step = H / 330;
      for (let i = 0; i < 16; i++) tofs.push(tH * Math.pow(3.5, i / 15) * 0.55);
    }
    const cand = [];
    for (let tb = ctx.t0 + 60; tb < ctx.t0 + H; tb += step) {
      let best = null;
      for (const tof of tofs) { const r = this.evalAt(W, ctx, tb, tof); if (r && isFinite(r.cost) && (!best || r.cost < best.cost)) best = r; }
      if (best) cand.push(best);
    }
    if (!cand.length) return { err: 'Нет решения' };
    cand.sort((a, b) => a.cost - b.cost);
    const picks = []; for (const c of cand) { if (picks.every(p => Math.abs(p.tb - c.tb) > 2.5 * step)) picks.push(c); if (picks.length >= 3) break; }
    let best = null;
    for (const c of picks) {
      let b = c; const fs = rel.kind === 'child' ? tOrb / 60 : step / 10;
      for (let k = -12; k <= 12; k++) {
        const tb = c.tb + k * fs; if (tb < ctx.t0 + 30) continue;
        let lo = c.tof * 0.85, hi = c.tof * 1.18, bb = null;
        for (let i = 0; i < 9; i++) { const tof = lo + (hi - lo) * i / 8; const r = this.evalAt(W, ctx, tb, tof); if (r && (!bb || r.cost < bb.cost)) bb = r; }
        if (bb) { for (let it = 0; it < 6; it++) { const w = (hi - lo) / 4; lo = Math.max(lo, bb.tof - w); hi = bb.tof + w; for (let i = 0; i < 5; i++) { const tof = lo + (hi - lo) * i / 4; const r = this.evalAt(W, ctx, tb, tof); if (r && r.cost < bb.cost) bb = r; } } if (bb.cost < b.cost) b = bb; }
      }
      if (!best || b.cost < best.cost) best = b;
    }
    // манёвр отлёта
    let tBurn = best.tb, dv, theta;
    if (rel.kind === 'child') {
      dv = [best.wx, best.wy]; theta = Math.atan2(best.y1, best.x1);
    } else {
      // гиперболическая траектория отлёта: перицентр при угле θp; импульс по касательной
      const vinf = best.vinfDep, e = 1 + r0 * vinf * vinf / B.gm, nuI = Math.acos(-1 / e), alpha = Math.atan2(best.wy, best.wx);
      const thp = ctx.dir > 0 ? alpha - nuI : alpha + nuI; theta = thp;
      const vp = Math.sqrt(vinf * vinf + 2 * B.gm / r0), dvm = vp - vc;
      dv = [-ctx.dir * dvm * Math.sin(thp), ctx.dir * dvm * Math.cos(thp)];
      // фазировка: ближайший момент, когда аппарат на угле thp (по реальным элементам орбиты, чтобы не копить ошибку фазы)
      let t = ctx.t0 + wrap2PI(ctx.dir * (thp - ctx.th0)) / nO, per = tOrb;
      if (ctx.st) { const el = elements(B.gm, ctx.st.x, ctx.st.y, ctx.st.vx, ctx.st.vy); if (el.bound) { per = el.T; t = ctx.t0 + timeToNu(el, wrapPI(el.dir * (thp - el.w))); } }
      while (t < best.tb - per / 2) t += per; while (t > best.tb + per / 2) t -= per;
      if (t < ctx.t0 + 30) t += per; tBurn = t;
    }
    return { ok: true, kind: rel.kind, tBurn, tof: best.tof, tArr: best.tb + best.tof, dv, dvMag: Math.hypot(dv[0], dv[1]), dvDep: best.dvDep, dvCap: best.dvCap, vinfDep: best.vinfDep, vinfArr: best.vinfArr, theta, rp: ctx.rp, target: bT.id, side: ctx.side, tb0: best.tb };
  },
  // ---- коррекция курса из текущего состояния (в системе тела, где летит аппарат) ----
  correct(W, v, targetId, tArr, rp, side) {
    side = side || 1;
    const U = W.U, B = U.byId[v.body], T = U.byId[targetId];
    const rel = this.relation(U, B, T); if (!rel.ok && !(B === T)) return { err: rel.err };
    let x1 = v.x, y1 = v.y, mu = B.gm, bT = T, s2;
    if (rel.kind === 'child') { bT = rel.bT; const o = W.eph.rel(bT, tArr); s2 = [o.x, o.y, o.vx, o.vy]; }
    else if (rel.kind === 'sib') { bT = rel.bT; mu = rel.A.gm; const s1 = this.rel(W, rel.bB, rel.A, W.ut); s2 = this.rel(W, bT, rel.A, tArr); x1 = v.x; y1 = v.y; }
    else return { err: 'Нет решения' };
    const LEAD = 60, tof = tArr - W.ut - LEAD; if (tof < 60) return { err: 'Слишком поздно' };
    const st0 = kepProp(mu, v.x, v.y, v.vx, v.vy, 60, [0, 0, 0, 0]); x1 = st0[0]; y1 = st0[1];
    rp = rp || this.defaultRp(bT); const muT = bT.gm; let ax = s2[0], ay = s2[1], L = null;
    for (let it = 0; it < 3; it++) {
      L = lambert(mu, x1, y1, ax, ay, tof, true); if (!L) return { err: 'Нет решения' };
      const wx = L.v2[0] - s2[2], wy = L.v2[1] - s2[3], vin = Math.hypot(wx, wy), ux = wx / vin, uy = wy / vin;
      const b = rp * Math.sqrt(1 + 2 * muT / (rp * vin * vin)); ax = s2[0] + b * uy * side; ay = s2[1] - b * ux * side;
    }
    const dv = [L.v1[0] - st0[2], L.v1[1] - st0[3]];
    return { ok: true, dv, dvMag: Math.hypot(dv[0], dv[1]), tBurn: W.ut + LEAD, tArr };
  },
  // ---- точная подстройка перицентра на подлёте (малый боковой импульс) ----
  fixPeriapsis(W, v, rpTarget) {
    const B = W.U.byId[v.body], LEAD = 60; const st = kepProp(B.gm, v.x, v.y, v.vx, v.vy, LEAD, [0, 0, 0, 0]);
    const sp = Math.hypot(st[2], st[3]), px = -st[3] / sp, py = st[2] / sp;
    const g = (s_) => { const el = elements(B.gm, st[0], st[1], st[2] + px * s_, st[3] + py * s_); return el.e > 1 ? el.rp - rpTarget : NaN; };
    const S = 300, N = 240; let best = null, prev = null;
    for (let i = 0; i <= N; i++) {
      const s_ = -S + 2 * S * i / N, gv = g(s_);
      if (!isFinite(gv)) { prev = null; continue; }
      if (prev && prev.g * gv <= 0) { let a = prev.s, b = s_, ga = prev.g; for (let k = 0; k < 40; k++) { const m = 0.5 * (a + b), gm = g(m); if (ga * gm <= 0) b = m; else { a = m; ga = gm; } } const r = 0.5 * (a + b); if (!best || Math.abs(r) < Math.abs(best)) best = r; }
      prev = { s: s_, g: gv };
    }
    if (best == null) return { err: 'Нет решения' };
    return { ok: true, dv: [px * best, py * best], dvMag: Math.abs(best), tBurn: W.ut + LEAD };
  },
  // ---- манёвры на текущей орбите ----
  // импульс в перицентре/апоцентре, чтобы получить противоположную высоту
  nodeAt(W, v, where, targetR) {   // where: 'pe' | 'ap'; targetR — новый радиус противоположной точки (от центра)
    const B = W.U.byId[v.body], el = elements(B.gm, v.x, v.y, v.vx, v.vy); if (!el.bound && where === 'ap') return null;
    const nu = where === 'pe' ? 0 : Math.PI, rr = where === 'pe' ? el.rp : el.ra;
    const t = W.ut + timeToNu(el, nu); const vNow = Math.sqrt(B.gm * (2 / rr - 1 / el.a));
    const aN = (rr + targetR) / 2, vNew = Math.sqrt(B.gm * (2 / rr - 1 / aN));
    // направление: по касательной (в точке апсиды скорость ⟂ радиусу)
    const pos = conicAt(el, nu); const th = Math.atan2(pos[1], pos[0]);
    const sgn = el.dir; const dvm = vNew - vNow;
    return { t, dv: [-sgn * dvm * Math.sin(th), sgn * dvm * Math.cos(th)], mag: Math.abs(dvm), where, r: targetR };
  },
  // скорость отлёта/прибытия для описания: время в пути, окно и т.д.
  describe(W, p) { const T = W.U.byId[p.target]; return { when: p.tBurn - W.ut, tof: p.tof, dvDep: p.dvDep, dvCap: p.dvCap, vinfArr: p.vinfArr, target: T ? T.name : '' }; }
};
