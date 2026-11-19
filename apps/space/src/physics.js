'use strict';
// ============ Физика полёта: тяга, аэродинамика, нагрев, контакты, управление ============
const rotv = (a, x, y) => { const c = Math.cos(a), s = Math.sin(a); return [x * c - y * s, x * s + y * c]; };

function atmAt(B, alt) {
  if (!B.atm) return { rho: 0, p: 0, T: 3, c: 300 };
  const A = B.atm; const rho = alt > A.top * 1.5 ? 0 : A.dens(alt);
  const T = A.Tfn(alt);
  return { rho, p: rho * A.Rs * T, T, c: A.c };
}
// ---- плитка рельефа вокруг аппарата ----
function ensureTile(W, B, thb, spanM) {
  let t = W.tile;
  const R = B.R, span = Math.min(Math.max(spanM, 300), R * 3.0) / R;   // рад
  const need = t && t.body === B.id && Math.abs(wrapPI(thb - t.c)) < t.half * 0.6 && t.half >= span * 0.7;
  if (need) return t;
  const step = Math.max(0.5, span * R / 3000);                          // м
  const n = Math.min(6000, Math.ceil(2 * span * R / step) + 4);
  const dth = step / R; const half = n * dth / 2;
  const hh = new Float32Array(n);
  const th0 = thb - half;
  for (let i = 0; i < n; i++) hh[i] = B.T.h(th0 + i * dth, step * 0.9);
  W.tile = t = { body: B.id, c: thb, half, th0, dth, n, h: hh, step };
  return t;
}
function terrH(W, B, thb) {
  const t = W.tile;
  if (t && t.body === B.id) {
    const f = (wrapPI(thb - t.th0 - 0)) / t.dth;
    let x = wrapPI(thb - t.th0); if (x < 0 && x > -t.half * 2) { x = x; }
    const idx = (wrapPI(thb - t.th0)) / t.dth; // th0 может быть «за поворотом»
    if (idx >= 0 && idx < t.n - 1) { const i = idx | 0, fr = idx - i; return t.h[i] + (t.h[i + 1] - t.h[i]) * fr; }
  }
  return B.T.h(thb, 0.7);
}
// высота поверхности (радиус) под углом thb (в системе тела): учитывает океан
function surfR(W, B, thb) {
  const h = B.T ? terrH(W, B, thb) : 0;
  return B.R + (B.sea ? Math.max(h, B.sea.level) : h);
}
function waterAt(W, B, thb) { return B.sea && terrH(W, B, thb) < B.sea.level; }
function terrNormal(W, B, thb) { // наклон: возвращает dh/ds
  const e = 0.7 / B.R; return (terrH(W, B, thb + e) - terrH(W, B, thb - e)) / (2 * 0.7);
}

// ---- экспозиция деталей (затенение вдоль потока) ----
function computeExposure(v, dx, dy) { // dx,dy — единичный вектор направления движения в системе аппарата
  const parts = v.parts, n = parts.length;
  const ex = new Float32Array(n), eb = new Float32Array(n);
  const px = -dy, py = dx;     // поперечная ось
  const info = parts.map(p => { const e = pext(p), t = p.x * dx + p.y * dy, s = p.x * px + p.y * py, hw = e[0] * Math.abs(px) + e[1] * Math.abs(py), ht = e[0] * Math.abs(dx) + e[1] * Math.abs(dy); return { t, s0: s - hw, s1: s + hw, ht, p }; });
  for (let side = 0; side < 2; side++) {
    const sg = side === 0 ? 1 : -1;
    for (let i = 0; i < n; i++) {
      const a = info[i]; if (a.p.shielded) { (side ? eb : ex)[i] = 0; continue; }
      const iv = [];
      for (let j = 0; j < n; j++) {
        if (i === j) continue; const b = info[j];
        if (b.p.d.fair || b.p.shielded) { if (b.p.shielded) continue; }
        if ((b.t - a.t) * sg > Math.min(a.ht, b.ht) * 0.5 && b.s1 > a.s0 + 1e-3 && b.s0 < a.s1 - 1e-3) iv.push([Math.max(a.s0, b.s0), Math.min(a.s1, b.s1)]);
      }
      let cov = 0;
      if (iv.length) { iv.sort((u, w) => u[0] - w[0]); let cs = iv[0][0], ce = iv[0][1]; for (let k = 1; k < iv.length; k++) { if (iv[k][0] <= ce) ce = Math.max(ce, iv[k][1]); else { cov += ce - cs; cs = iv[k][0]; ce = iv[k][1]; } } cov += ce - cs; }
      (side ? eb : ex)[i] = clamp(1 - cov / Math.max(1e-6, a.s1 - a.s0), 0, 1);
    }
  }
  return { ex, eb };
}
function machCd(M) { return 1 + 0.9 * Math.exp(-((M - 1.15) / 0.38) * ((M - 1.15) / 0.38)) - (M > 2 ? 0.0 : 0) + (M > 1.4 ? -0.18 * Math.min(1, (M - 1.4) / 3) : 0); }
const SUTTON = 1.7415e-4;

// ---- главный шаг одного аппарата ----
function stepVessel(W, v, dt) {
  const U = W.U, B = U.byId[v.body], mu = B.gm, ch = W.cheats || {};
  if (v.dirty || !v.mp) vesselRefresh(v);
  else if (v.thrust > 0 || v.ecUseRcs) { v.mpAge = (v.mpAge || 0) + dt; if (v.mpAge > 0.15) { v.mpAge = 0; v.mp = massProps(v.parts); } }
  const mp = v.mp, m = mp.m;
  const R = B.R, rr = Math.hypot(v.x, v.y), rx = v.x / rr, ry = v.y / rr;
  const alt = rr - R, ut = W.ut;
  // атмосфера и воздушная скорость
  const air = atmAt(B, alt - 0); const wB = B.rotW;
  const avx = v.vx + wB * v.y, avy = v.vy - wB * v.x;          // скорость относительно вращающейся атмосферы
  const sp = Math.hypot(avx, avy);
  v.air = air; v.sp = sp; v.alt = alt;
  const thb = Math.atan2(v.y, v.x) - bodyRot(B, ut);
  let fx = 0, fy = 0, tq = 0;                                   // силы в МСК (мировая), момент
  const ca = Math.cos(v.a), sa = Math.sin(v.a);
  const toW = (lx, ly) => [lx * ca - ly * sa, lx * sa + ly * ca];
  // ---- управление ----
  const ctl = controlStep(W, v, dt, rx, ry);
  // ---- двигатели ----
  let thrustTot = 0, ecUse = 0, sunLit = null;
  const cx = mp.cx, cy = mp.cy;
  const gim = ctl.gim;                                          // нормированная команда карданов (-1..1)
  let lfx = 0, lfy = 0;
  v.flames = v.flames || [];
  let nflames = 0;
  for (const p of v.engines) {
    const e = p.d.eng; p.fl = 0;
    if (!p.on) continue;
    let thr = e.solid ? 1 : (v.throttle > 0.004 ? e.thrMin + (1 - e.thrMin) * v.throttle : 0);
    if (!e.solid && thr <= 0) continue;
    if (e.solid && (p.res.solid || 0) <= 0) { p.on = false; continue; }
    let av = e.solid ? p.res.solid : propAvail(v, p, e.prop);
    if (ch.infFuel && !e.solid) av = 1e12;
    if (av <= 0) { p.st.out = true; continue; }
    const md = engMdot(e, thr, p.n);
    let take = Math.min(1, av / (md * dt));
    if (e.power > 0) { const need = e.power * thr * dt / 3600; if (!ch.infEC && v.ec < need) take = Math.min(take, v.ec / need); ecUse += e.power * thr * take; }
    if (take <= 0) continue;
    const pa = air.p; let F = engThrust(e, p, pa, thr) * take;
    if (e.nuke) F = F;
    if (!(ch.infFuel && !e.solid)) drawProp(v, p, e.prop, md * dt * take);
    // направление в системе аппарата
    let ang = (p.rot * Math.PI / 2) + (p.flip ? 0 : 0);
    let dlx = -Math.sin(ang), dly = Math.cos(ang); if (p.flip && !(p.rot & 1)) { }
    const px = p.x, py = p.y + (e.rcs ? 0 : p.h * 0.15);
    const gimA = (e.gim || 0) * Math.PI / 180 * gim * (py < cy ? -1 : 1);
    const c2 = Math.cos(gimA), s2 = Math.sin(gimA);
    const tdx = dlx * c2 - dly * s2, tdy = dlx * s2 + dly * c2;
    lfx += F * tdx; lfy += F * tdy;
    tq += (px - cx) * (F * tdy) - (py - cy) * (F * tdx);
    thrustTot += F; p.fl = take * thr; p.flF = F;
    if (nflames < 64) nflames++;
  }
  // РСУ
  if (v.rcs && ctl.rcsTq !== 0) {
    const want = ctl.rcsTq; let tot = 0;
    for (const p of v.rcsList) {
      const e = p.d.eng; const ang = p.rot * Math.PI / 2; const dlx = -Math.sin(ang), dly = Math.cos(ang);
      if (e.pair) {   // кольцо РСУ: чистая пара сил, плечо = диаметр кольца
        let av = propAvail(v, p, e.prop); if (ch.infFuel) av = 1e9; if (av <= 0) { p.fl = 0; continue; }
        const F = e.Fv * clamp(Math.abs(want) / Math.max(1e-6, ctl.rcsCap), 0, 1);
        const md = 2 * F / (e.IspV * G0); if (!ch.infFuel) drawProp(v, p, e.prop, md * dt);
        tq += Math.sign(want) * F * p.w; p.fl = F / e.Fv; p.pwm = 1; continue;
      }
      const t = (p.x - cx) * dly - (p.y - cy) * dlx;            // момент на единицу силы
      if (t * want <= 0) { p.fl = 0; continue; }
      let av = propAvail(v, p, e.prop) ; if (ch.infFuel) av = 1e9; if (av <= 0) { p.fl = 0; continue; }
      p.fl = 1; p.pwm = 1;
      const F = e.Fv * clamp(Math.abs(want) / Math.max(1e-6, ctl.rcsCap), 0, 1);
      const md = F / (e.IspV * G0); if (!ch.infFuel) drawProp(v, p, e.prop, md * dt);
      lfx += F * dlx; lfy += F * dly; tq += (p.x - cx) * (F * dly) - (p.y - cy) * (F * dlx); p.fl = F / e.Fv; thrustTot += F;
    }
  } else for (const p of v.rcsList) p.fl = 0;
  // колёсные приводы и ЭУ: энергия
  for (const p of v.parts) { if (p.d.core) ecUse += p.d.core.ec; if (p.d.rw && ctl.wheelTq) ecUse += p.d.rw.ec * Math.min(1, Math.abs(ctl.wheelTq) / Math.max(1e-6, ctl.wheelCap)); }
  v.ecUse = ecUse; v.thrust = thrustTot; if (thrustTot > 0) v.dvUsed = (v.dvUsed || 0) + thrustTot / m * dt;
  // ---- аэродинамика ----
  let drag = 0;
  if (air.rho > 1e-9 && sp > 0.2) {
    const lv = rotv(-v.a, avx, avy); const lsp = Math.hypot(lv[0], lv[1]); const dirx = lv[0] / lsp, diry = lv[1] / lsp;
    if (!v.exp || ut - v._expT > 0.12 || v._expDir == null || (dirx * v._expDir[0] + diry * v._expDir[1]) < 0.995 || v._expN !== v.parts.length) {
      v.exp = computeExposure(v, dirx, diry); v._expT = ut; v._expDir = [dirx, diry]; v._expN = v.parts.length;
    }
    const q = 0.5 * air.rho * lsp * lsp; v.q = q; if (q > v.maxQ) v.maxQ = q;
    const M = lsp / air.c; const cdm = machCd(M);
    const half = 0.5 * air.rho * lsp;
    for (let i = 0; i < v.parts.length; i++) {
      const p = v.parts[i]; if (p.shielded || p.dead) continue; const d = p.d;
      const ar = (-p.rot) * Math.PI / 2; const pv = rotv(ar, lv[0], lv[1]); const ax = pv[1], nn = pv[0];
      const wd = pw(p), Aa = Math.PI * wd * wd / 4, An = wd * p.h * 0.85;
      let Fa = 0, Fn = 0;
      if (d.fin) {
        const S = d.fin.area * clamp(wd * p.h / (d.w * d.h), .08, 10); const cn = clamp(2 * Math.PI * nn / lsp, -1.2, 1.2);
        Fn = -half * lsp * S * cn; Fa = -half * ax * S * (0.06 + 0.5 * cn * cn) * cdm;
      } else {
        const front = ax > 0 ? v.exp.ex[i] : v.exp.eb[i]; const back = ax > 0 ? v.exp.eb[i] : v.exp.ex[i];
        const cdF = d.cdAx != null ? d.cdAx : (d.eng ? 0.5 : 0.42);
        const cdB = d.eng ? 0.28 : 0.1;
        Fa = -half * ax * Aa * (cdF * front + cdB * back) * cdm;
        Fa += -half * ax * 0.012 * Math.PI * wd * p.h * (d.fair || d.d === 'nose' ? 0.7 : 1);     // трение
        Fn = -half * nn * An * 0.95 * (1 + 0.3 * (cdm - 1));
        if (d.chute && p.st.chute) { /* парашют считаем отдельно */ }
      }
      // в систему аппарата
      const fl = rotv((p.rot) * Math.PI / 2, Fn, Fa);
      lfx += fl[0]; lfy += fl[1];
      tq += (p.x - cx) * fl[1] - (p.y - cy) * fl[0];
      drag += -Fa;
    }
  } else { v.q = 0; }
  // парашюты
  for (const p of v.parts) {
    const d = p.d; if (!d.chute || !p.st.chute) continue;
    const ch0 = d.chute; const q = v.q || 0;
    if (p.st.chute === 'arm') { if (air.rho > 1e-5 && q < ch0.maxQ && q > 1 && sp < 700 && (alt < (B.atm ? B.atm.top * 0.9 : 0)) && (v.vy * rx - v.vx * ry === 0 || (v.vx * rx + v.vy * ry) < 0 || true)) { if ((v.vx * rx + v.vy * ry) < 5) { p.st.chute = 'deploy'; p.st.ct = 0; W.event({ t: 'chute', v, p }); } } }
    else if (p.st.chute === 'deploy') { p.st.ct += dt; if (p.st.ct >= ch0.deployT) p.st.chute = 'open'; }
    if ((p.st.chute === 'deploy' || p.st.chute === 'open') && air.rho > 0) {
      const fr = p.st.chute === 'open' ? 1 : (p.st.ct / ch0.deployT) * 0.7 + 0.05;
      if (q > ch0.maxQ * 4 && !ch.infChute) { p.st.chute = 'cut'; W.event({ t: 'chuteRip', v, p }); continue; }
      const k = 0.5 * air.rho * sp * ch0.Cd * ch0.A * fr;
      const lf = rotv(-v.a, -avx * k, -avy * k);
      lfx += lf[0]; lfy += lf[1]; tq += (p.x - cx) * lf[1] - (p.y + p.h / 2 - cy) * lf[0];
    }
  }
  // ---- нагрев ----
  if (air.rho > 1e-8 && sp > 300 && !ch.noHeat) thermalStep(W, v, air, avx, avy, dt);
  else coolStep(v, dt);
  // ---- контакт с поверхностью ----
  const gnd = surfR(W, B, thb);
  const low = rr - gnd - mp.R < 3 + sp * dt * 3;
  let contact = null;
  if (low && B.landable) {
    const span = mp.R * 2 + 200; ensureTile(W, B, thb, span);
    contact = contactForces(W, v, B, dt, ca, sa, thb, rr, rx, ry);
    lfx += contact.fx; lfy += contact.fy; tq += contact.tq;
  } else v.contact = 0;
  // ---- гравитация ----
  let ax_ = 0, ay_ = 0;
  if (!ch.noGravity) { const g = mu / (rr * rr); ax_ = -g * rx; ay_ = -g * ry; }
  // сила → МСК
  const Fw = toW(lfx, lfy); const wax = Fw[0] / m, way = Fw[1] / m;
  // момент от управляющих устройств
  tq += ctl.tq;
  v.gload = Math.hypot(wax, way) / G0;
  v.accel = Math.hypot(wax, way);
  // ---- интегрирование ----
  const nonGrav = Math.abs(wax) + Math.abs(way) > 1e-9 || contact;
  if (!nonGrav && !ch.noGravity) {
    const o = kepProp(mu, v.x, v.y, v.vx, v.vy, dt, v._kp || (v._kp = [0, 0, 0, 0]));
    v.x = o[0]; v.y = o[1]; v.vx = o[2]; v.vy = o[3];
  } else {
    // полунеявный Эйлер с центральной точкой для гравитации
    const gx = ax_ + wax, gy = ay_ + way;
    v.vx += gx * dt; v.vy += gy * dt; v.x += v.vx * dt; v.y += v.vy * dt;
  }
  if (W.dbg) W.dbg(v, { lfx, lfy, tq, ctlTq: ctl.tq, contactTq: contact ? contact.tq : 0, contactFx: contact ? contact.fx : 0, contactFy: contact ? contact.fy : 0, wax, way });
  v.w += tq / mp.I * dt; v.a += v.w * dt; v.a = wrapPI(v.a);
  v.ecDelta = 0;
  // потеря управления: подчистить исчезнувшие двигатели
  return contact;
}

function coolStep(v, dt) {
  for (const p of v.parts) { if (p.temp > 300) { const A = 2 * Math.PI * pw(p) * p.h * 0.5 + 1; const mth = Math.max(5, p.dry * 1.2 * 900); p.temp -= 0.8 * SIGMA * A * (Math.pow(p.temp, 4) - Math.pow(250, 4)) / mth * dt; if (p.temp < 250) p.temp = 250; } }
}
function thermalStep(W, v, air, avx, avy, dt) {
  const lv = rotv(-v.a, avx, avy); const lsp = Math.hypot(lv[0], lv[1]); if (!v.exp) return;
  const kS = SUTTON * (W.U.byId[v.body].atm && W.U.byId[v.body].atm.o2 ? 1 : 1.05);
  for (let i = 0; i < v.parts.length; i++) {
    const p = v.parts[i]; if (p.shielded || p.dead) continue; const d = p.d;
    const ar = (-p.rot) * Math.PI / 2; const pv = rotv(ar, lv[0], lv[1]); const ax = pv[1], nn = pv[0];
    const wd = pw(p); const Aa = Math.PI * wd * wd / 4, An = wd * p.h * 0.8;
    const front = ax > 0 ? v.exp.ex[i] : v.exp.eb[i]; const mult = ax > 0 ? 1 : 0.12;
    const Rn = Math.max(0.12, (d.cdAx != null && d.cdAx < .2 ? 0.2 * wd : (d.shield ? wd * 0.8 : wd / 2)));
    const qf = kS * Math.sqrt(air.rho / Rn) * lsp * lsp * lsp;
    const Aexp = (Aa * front * Math.abs(ax) / lsp) * mult + An * Math.abs(nn) / lsp * 0.6;
    let Qin = qf * Aexp;
    if (d.shield && p.abl > 0 && Aexp > 0) {
      const dm = Math.min(p.abl, Qin * dt / d.shield.Hv * (qf > d.shield.maxFlux ? 3 : 1)); p.abl -= dm; p.hot = Math.min(1, qf / 3e6); p.temp = Math.min(Math.max(p.temp, 400), 900); v.hotT = 1;
      if (p.abl <= 0.001) { p.abl = 0; }
      continue;
    }
    const mth = Math.max(8, p.dry * 1.3 * 900 + (p.res.kerolox || 0) * 0 );
    const Arad = 2 * Aa + Math.PI * wd * p.h * 0.6;
    const dT = (Qin - 0.8 * SIGMA * Arad * (Math.pow(p.temp, 4) - Math.pow(250, 4))) / mth * dt;
    p.temp += dT; p.hot = Math.min(1, qf / 2e6);
    const lim = (d.shield && p.abl <= 0) ? 700 : d.maxT;
    if (p.temp > lim) { p.dead = 'heat'; }
  }
}

// ---- контактные силы ----
function contactForces(W, v, B, dt, ca, sa, thb, rr, rx, ry) {
  const mp = v.mp, m = mp.m, cx = mp.cx, cy = mp.cy, I0 = Math.max(1, mp.I); const ch = W.cheats || {};
  const wB = B.rotW; let fx = 0, fy = 0, tq = 0, n = 0, maxPen = 0;
  const pts = v.cpts || (v.cpts = buildContactPoints(v));
  if (v._cptsN !== v.parts.length || v.dirty) { v.cpts = buildContactPoints(v); v._cptsN = v.parts.length; }
  const cp = v.cpts; v.contact = 0;
  // эффективное число точек определяет жёсткость
  let nEff = 0;
  const wx0 = v.x, wy0 = v.y;
  const rot = bodyRot(B, W.ut);
  const res = [];
  for (let i = 0; i < cp.length; i++) {
    const c = cp[i]; const p = c.p; if (p.dead || p.shielded) continue;
    let lx = c.x, ly = c.y;
    if (c.kind === 'leg') { const dep = p.st.deployed; const f = dep ? 1 : 0.3; lx = p.x + (c.sx) * (c.fx * f + (c.sx > 0 ? 0 : 0)); ly = p.y + c.fy * f; if (!dep) { lx = p.x; ly = p.y - p.h * 0.3; } }
    // позиция точки в МСК относительно центра масс
    const rx_ = (lx - cx) * ca - (ly - cy) * sa, ry_ = (lx - cx) * sa + (ly - cy) * ca;
    const wx = v.x + rx_, wy = v.y + ry_;
    const r = Math.hypot(wx, wy); const th = Math.atan2(wy, wx) - rot;
    const sr = surfR(W, B, th);
    const pen = sr - r - (c.kind === 'wheel' ? 0 : 0);
    if (pen <= -0.02) { c.was = false; continue; }
    res.push({ c, p, rx_, ry_, wx, wy, r, th, pen, sr });
  }
  if (!res.length) { v.contact = 0; return { fx: 0, fy: 0, tq: 0, any: false }; }
  // катастрофический удар: пружинная модель контакта на таких скоростях неприменима — аппарат разрушается
  if (!ch.noCrash && (v.age > 0.3 || v.armed)) {
    const vg = Math.hypot(v.vx + wB * wy0, v.vy - wB * wx0); let pmax = 0; for (const q of res) pmax = Math.max(pmax, q.pen);
    if (vg > 60 || pmax > 12) {
      for (const p of v.parts) p.dead = 'impact';
      const rr0 = Math.hypot(wx0, wy0) || 1; W.event({ t: 'impact', v, x: wx0, y: wy0, vn: vg, p: res[0].p, water: false, nx: wx0 / rr0, ny: wy0 / rr0, th: res[0].th, big: true });
      v.contact = 0; return { fx: 0, fy: 0, tq: 0, any: false };
    }
  }
  nEff = Math.max(2, res.length);
  let sumFn = 0; let rollMax = 0;
  for (const q of res) {
    const c = q.c, p = q.p;
    const rh = 1 / Math.hypot(q.wx, q.wy);
    const nxW = q.wx * rh, nyW = q.wy * rh;
    const slope = terrNormal(W, B, q.th);
    // нормаль к рельефу в мировых осях: радиальная, наклонённая на slope
    const tx = -nyW, ty = nxW;
    let nx = nxW - slope * tx, ny = nyW - slope * ty; const nl = Math.hypot(nx, ny); nx /= nl; ny /= nl;
    // скорость точки относительно грунта
    const vpx = v.vx - v.w * q.ry_, vpy = v.vy + v.w * q.rx_;
    const gvx = -wB * q.wy, gvy = wB * q.wx;
    const rvx = vpx - gvx, rvy = vpy - gvy;
    const vn = rvx * nx + rvy * ny; const vtx = rvx - vn * nx, vty = rvy - vn * ny;
    const water = waterAt(W, B, q.th);
    let f = 6.5, z = 0.65, mu_ = 0.75;
    if (c.kind === 'leg') { f = p.d.leg.k; z = p.d.leg.z; mu_ = 0.9; } else if (c.kind === 'wheel') { f = 3.5; z = 0.5; mu_ = 0.85; }
    if (water) { f = 1.3; z = 1.6; mu_ = 0.03; }
    // эффективная масса точки контакта с учётом вращения: m_eff = 1/(1/m' + (плечо)²/I). Без неё длинное плечо при малом моменте инерции
    // делает пружину неустойчивой (угловая скорость «взрывается» и аппарат подбрасывает). Частота ограничена шагом интегрирования.
    const lN = q.rx_ * ny - q.ry_ * nx, mEff = 1 / (nEff / m + lN * lN / I0);
    const om = Math.min(TAU * f, 0.5 / (Math.max(z, 0.5) * dt)); const k = mEff * om * om, cd = 2 * z * mEff * om;
    // удар
    if (!c.was) {
      c.was = true; const vin = -vn;
      const lim = (p.d.crashV || 8) * (water ? 2.6 : 1);
      if (vin > lim && !ch.noCrash && (v.age > 0.3 || v.armed)) { p.dead = 'impact'; p.impact = vin; }
      v.lastImpact = Math.max(v.lastImpact || 0, vin);
      if (vin > 1.5) W.event({ t: 'impact', v, x: q.wx, y: q.wy, vn: vin, p, water, nx, ny, th: q.th });
    }
    let Fn = k * q.pen - cd * vn; if (Fn < 0) Fn = 0; if (vn > 0) Fn = Math.max(0, Math.min(Fn, k * q.pen));
    maxPen = Math.max(maxPen, q.pen);
    let Fx = Fn * nx, Fy = Fn * ny;
    // трение (кулоновское со сглаживанием)
    const vt = Math.hypot(vtx, vty);
    if (c.kind === 'wheel') {
      // продольная ось колеса вдоль касательной к поверхности
      const dirx = tx, diry = ty; const vl = rvx * dirx + rvy * diry;
      // мотор-колесо держит заданную скорость: разгоняется с силой F до vmax и тормозит на спуске, а не катится под горку всё быстрее
      const dIn = v.drive || 0, powered = v.ec > 0 || ch.infEC ? 1 : 0;
      const drive = Math.abs(dIn) > 0.01 ? powered * clamp((dIn * p.d.wheel.vmax - vl) * 8, -1, 1) * p.d.wheel.F : 0;
      const roll = -clamp(vl * 40, -1, 1) * Math.min(Fn * 0.02, 5) * (Math.abs(v.drive || 0) > 0.01 ? 0 : 6);
      const park = v.brake || !(Math.abs(v.drive || 0) > 0.01);   // стояночный тормоз: отпустили кнопку — вездеход стоит, даже на склоне
      const brake = park ? -clamp(vl / 0.05, -1, 1) * Fn * 0.9 : 0;
      let Ft = clamp(drive + roll + brake, -Fn * mu_, Fn * mu_);
      // продольное сцепление при неприводе
      if (!(Math.abs(v.drive || 0) > 0.01) && !v.brake) { Ft += clamp(-vl * 4 * Fn, -Fn * 0.03, Fn * 0.03) * 0; }
      Fx += Ft * dirx; Fy += Ft * diry;
      const vperp = vtx * 0 + 0;
      v.wheelPower = (v.drive ? Math.abs(drive) * Math.min(Math.abs(vl) + 0.05, p.d.wheel.vmax) : 0);
    } else {
      const sm = clamp(vt / 0.35, 0, 1);
      if (vt > 1e-6) {
        // трение не может погасить больше, чем есть скорости скольжения за шаг (с учётом момента инерции) — иначе колебания
        const ltx = -ny, lty = nx, lT = q.rx_ * lty - q.ry_ * ltx, mT = 1 / (nEff / m + lT * lT / I0);
        const Ff = Math.min(mu_ * Fn * sm, 0.5 * mT * vt / dt);
        Fx += -Ff * vtx / vt; Fy += -Ff * vty / vt;
      }
    }
    // вычитаем из «вращения грунта» эффект на момент
    fx += Fx; fy += Fy; tq += q.rx_ * Fy - q.ry_ * Fx; sumFn += Fn;
    v.contact++;
    if (vt > 3 && Fn > 0 && W.event) W.event({ t: 'scrape', v, x: q.wx, y: q.wy, vt, nx, ny, th: q.th, dx: vtx / vt, dy: vty / vt, p });
  }
  // сила и момент в системе аппарата → вернём в МСК: функция вызывается из stepVessel, ожидающего локальные.
  // перевод в локальные: (stepVessel добавляет в lfx, lfy: локальные оси аппарата) => вращаем обратно
  const ca2 = ca, sa2 = sa; const lfx = fx * ca2 + fy * sa2, lfy = -fx * sa2 + fy * ca2;
  v.maxPen = maxPen; v.sumFn = sumFn;
  return { fx: lfx, fy: lfy, tq, any: true };
}
function buildContactPoints(v) {
  const cp = [];
  for (const p of v.parts) {
    const d = p.d; if (p.dead) continue;
    if (d.wheel) { cp.push({ p, kind: 'wheel', x: p.x, y: p.y - d.wheel.r }); continue; }
    if (d.leg) { const f = d.leg.foot; cp.push({ p, kind: 'leg', x: p.x, y: p.y, fx: Math.abs(f[0]), fy: f[1], sx: p.x >= 0 ? 1 : -1 }); continue; }
    if (p.shielded) continue;
    if (d.vessel === undefined && p.insideV) continue;
    const e = pext(p);
    // углы + середины граней
    const hw = e[0], hh = e[1];
    cp.push({ p, kind: 'hull', x: p.x - hw, y: p.y - hh }, { p, kind: 'hull', x: p.x + hw, y: p.y - hh }, { p, kind: 'hull', x: p.x - hw, y: p.y + hh }, { p, kind: 'hull', x: p.x + hw, y: p.y + hh });
    if (hh * 2 > 6) cp.push({ p, kind: 'hull', x: p.x - hw, y: p.y }, { p, kind: 'hull', x: p.x + hw, y: p.y });
  }
  return cp;
}

// ---- Контроллер ориентации ----
function targetAngleFor(W, v, mode, rx, ry) {
  const B = W.U.byId[v.body];
  const vrx = v.vx, vry = v.vy;
  const angOf = (dx, dy) => Math.atan2(-dx, dy);       // угол аппарата, у которого «верх» направлен по (dx,dy)
  switch (mode) {
    case 'up': return angOf(rx, ry);
    case 'prograde': { const s = Math.hypot(vrx, vry); return s > 0.01 ? angOf(vrx / s, vry / s) : v.a; }
    case 'retrograde': { const s = Math.hypot(vrx, vry); return s > 0.01 ? angOf(-vrx / s, -vry / s) : v.a; }
    case 'sprograde': { const ax = vrx + B.rotW * v.y, ay = vry - B.rotW * v.x; const s = Math.hypot(ax, ay); return s > 0.01 ? angOf(ax / s, ay / s) : angOf(rx, ry); }
    case 'sretro': { const ax = vrx + B.rotW * v.y, ay = vry - B.rotW * v.x; const s = Math.hypot(ax, ay); return s > 0.01 ? angOf(-ax / s, -ay / s) : angOf(rx, ry); }
    case 'radial': { const hh = v.x * v.vy - v.y * v.vx; const sgn_ = hh >= 0 ? 1 : -1; return angOf(rx, ry); }
    case 'antiradial': return angOf(-rx, -ry);
    case 'node': if (v.nodeDir) return angOf(v.nodeDir[0], v.nodeDir[1]); return v.a;
    case 'target': if (v.targetDir) return angOf(v.targetDir[0], v.targetDir[1]); return v.a;
    default: return v.sasTarget;
  }
}
function controlStep(W, v, dt, rx, ry) {
  const out = { tq: 0, gim: 0, rcsTq: 0, rcsCap: 1, wheelTq: 0, wheelCap: 0 };
  const mp = v.mp, I = mp.I; const ch = W.cheats || {};
  const hasCtl = hasCore(v) && (v.ec > 0 || ch.infEC || v.parts.some(p => p.d.core && p.d.batt && p.res.ec > 0));
  if (v.ap) apStep(W, v, dt, rx, ry);
  if (!hasCtl || v.sas === 'off' && Math.abs(v.ctl.rot) < 0.01) { v.rotCmd = 0; return out; }
  // емкость моментов
  let wheelCap = 0; for (const p of v.parts) { if (p.d.rw) wheelCap += p.d.rw.torque; if (p.d.core) wheelCap += p.d.core.torque; }
  // кардан: Σ F·d·sin(gim)
  let gimCap = 0; const cx = mp.cx, cy = mp.cy;
  for (const p of v.engines) { if (!p.on || !p.fl) continue; const e = p.d.eng; if (!e.gim) continue; const F = p.flF || 0; gimCap += F * Math.abs(p.y - cy + p.h * 0.15) * Math.sin(e.gim * Math.PI / 180) + F * 0; }
  // РСУ
  let rcsCap = 0; if (v.rcs) for (const p of v.rcsList) { const e = p.d.eng; const ang = p.rot * Math.PI / 2; const dlx = -Math.sin(ang), dly = Math.cos(ang); if (e.pair) { if (propAvail(v, p, e.prop) > 0 || (W.cheats && W.cheats.infFuel)) rcsCap += e.Fv * p.w; } else rcsCap += Math.abs((p.x - cx) * dly - (p.y - cy) * dlx) * e.Fv; }
  const cap = wheelCap + gimCap + rcsCap;
  if (cap <= 0) { v.rotCmd = 0; return out; }
  // желаемый угол
  let tgt;
  const manual = Math.abs(v.ctl.rot) > 0.01;
  if (manual) { tgt = null; } else if (v.sas === 'hold' || v.sas === 'off') tgt = v.sasTarget; else tgt = targetAngleFor(W, v, v.sas, rx, ry);
  let wCmd;
  const aMax = cap / I; v.ctlA = aMax;
  const wLim = Math.min(1.2, Math.sqrt(2 * aMax * 0.7) * 1.0 + 0.02);
  if (manual) { wCmd = -v.ctl.rot * Math.min(wLim, 0.6 + 0.4 * Math.min(1, aMax * 10)); v.sasTarget = v.a; }
  else {
    const e = wrapPI(tgt - v.a); const wc = Math.min(Math.abs(e) * 1.2, Math.sqrt(2 * aMax * 0.6 * Math.abs(e)) + 0.002, wLim);
    wCmd = sgn(e) * wc;
    if (Math.abs(e) < 0.002 && Math.abs(v.w) < 0.005) wCmd = 0;
  }
  const alpha = (wCmd - v.w) / Math.max(0.15, Math.min(0.5, 1 / Math.sqrt(aMax + 1e-9) * 0.3 + 0.1));
  let tqReq = clamp(I * alpha, -cap, cap);
  // распределение: колёса → кардан → РСУ
  let rem = tqReq; let tw = clamp(rem, -wheelCap, wheelCap); rem -= tw;
  out.wheelTq = tw; out.wheelCap = wheelCap;
  let tg = 0; if (gimCap > 0) { tg = clamp(rem, -gimCap, gimCap); rem -= tg; out.gim = tg / gimCap; }
  let tr = 0; if (rcsCap > 0) { tr = clamp(rem, -rcsCap, rcsCap); out.rcsTq = tr; out.rcsCap = rcsCap; }
  // инерционные запаздывания кардана
  v.gimS = v.gimS == null ? 0 : v.gimS + (out.gim - v.gimS) * Math.min(1, dt / 0.08); out.gim = v.gimS;
  out.tq = tw;       // момент от колёс; кардан и РСУ учитываются силами
  v.rotCmd = tqReq;
  return out;
}

// ---- Автопилот выведения ----
function orbitInfo(W, v) {
  const B = W.U.byId[v.body]; return elements(B.gm, v.x, v.y, v.vx, v.vy);
}

// ---- Автопосадка и подсказки для ручной посадки ----
// Высота «до опор» над грунтом: расстояние от центра масс до самой нижней точки при вертикальном положении
function vesselDown(v) {
  let lo = 1e9;
  for (const p of v.parts) { if (p.dead) continue; const d = p.d; let y; if (d.leg) y = p.y + (p.st.deployed ? d.leg.foot[1] : -p.h * 0.2); else if (d.wheel) y = p.y - d.wheel.r; else y = p.y - pext(p)[1]; if (y < lo) lo = y; }
  return lo > 1e8 ? 1 : Math.max(0.2, v.mp.cy - lo);
}
// максимальная тяга работающих двигателей при данном давлении и минимальный дроссель
function landThrust(W, v, pAmb) {
  let F = 0, tm = 0, solid = false, any = false;
  for (const p of v.engines) {
    if (!p.on || p.dead) continue; const e = p.d.eng; if (e.rcs) continue;
    const av = e.solid ? (p.res.solid || 0) : propAvail(v, p, e.prop);
    if (!(av > 0) && !(W.cheats && W.cheats.infFuel && !e.solid)) continue;
    any = true; if (e.solid) solid = true; F += engThrust(e, p, pAmb, 1); tm = Math.max(tm, e.solid ? 1 : e.thrMin);
  }
  return { F, tm, solid, any };
}
// всё, что нужно и автопосадке, и подсказкам на экране
function landCalc(W, v) {
  const B = W.U.byId[v.body]; const r = Math.hypot(v.x, v.y), rx = v.x / r, ry = v.y / r;
  if (!B.landable) return null;
  const th = Math.atan2(v.y, v.x) - bodyRot(B, W.ut), gnd = surfR(W, B, th), down = vesselDown(v);
  const hg = r - gnd - down, g = B.gm / (r * r);
  const sx = v.vx + B.rotW * v.y, sy = v.vy - B.rotW * v.x, vv = sx * rx + sy * ry;
  const hx = sx - vv * rx, hy = sy - vv * ry, vh = Math.hypot(hx, hy), vs = Math.hypot(sx, sy);
  const pa = B.atm ? B.atm.press(Math.max(0, r - B.R)) : 0;
  const T = landThrust(W, v, pa), m = v.mp.m, aT = T.F / Math.max(1, m);
  const sinG = vs > 0.5 ? clamp(-vv / vs, -1, 1) : 1;
  const aDec = aT * 0.85 - g * Math.max(0, sinG);                  // чистое торможение вдоль скорости
  const d = hg / Math.max(sinG, 0.02);                              // путь до грунта вдоль скорости
  const dStop = aDec > 0.05 ? vs * vs / (2 * aDec) : 1e12;
  let hgA = hg; { const hsT = hx * -ry + hy * rx; if (Math.abs(hsT) > 20) for (const tl of [6, 12, 20, 30]) hgA = Math.min(hgA, r - surfR(W, B, th + hsT * tl / r) - down); }   // рельеф впереди по курсу
  return { B, r, rx, ry, hg, hgA, g, vv, vh, vs, hx, hy, aT, T, sinG, aDec, d, dStop, gnd, down, m, pa, tc: vv < -0.3 ? hg / -vv : 1e9 };
}
// номинальный профиль скорости снижения: на высоте h разрешённая скорость падения (м/с, <0)
function landProfile(c, aUse) { const h = Math.max(0, c.hg - 0.3), aU = aUse * clamp(0.45 + h / 40, 0.45, 1); return -(0.6 + Math.sqrt(2 * aU * h)); }   // у самой земли торможение мягче
// команда дросселя 0..1 из доли максимальной тяги f с «ШИМом» ниже минимального дросселя
function landThr(ap, f, tm) {
  if (f <= 0.02) return 0; if (f >= tm) return clamp((f - tm) / Math.max(1e-6, 1 - tm), 0, 1) || 0.001;
  ap.pw = (ap.pw || 0) + f / tm; if (ap.pw >= 1) { ap.pw -= 1; return 0.001; } return 0;
}
// запас скорости (м/с) по формуле Циолковского для работающих двигателей и сколько нужно для посадки с текущей скорости
function landDv(W, v, c) {
  const B = c.B; let isp = 0, nE = 0;
  for (const p of v.engines) { if (p.dead || p.d.eng.rcs || p.d.eng.solid) continue; isp += p.d.eng.IspV; nE++; }
  if (!nE) return { have: 0, need: 0 }; isp /= nE;
  let fuel = 0; const props = new Set(v.engines.filter(p => !p.dead && !p.d.eng.rcs).map(p => p.d.eng.prop));
  for (const t of v.tanks) for (const k of props) fuel += (t.res && t.res[k]) || 0;
  const m = v.mp.m, have = isp * 9.80665 * Math.log(m / Math.max(1, m - fuel));
  const shield = B.atm && v.parts.some(p => p.d.shield && !p.dead);
  return { have, need: shield ? 500 : c.vs * 1.1 + 100 };
}
// целевой периапсис схода с орбиты: с тепловым щитом — входим в атмосферу, без щита — тормозим двигателем почти до земли
function landPeT(v, B) { return (B.atm && v.parts.some(p => p.d.shield && !p.dead)) ? Math.min(B.atm.top * 0.2, 40000) : -2500; }
// сколько секунд до начала торможения (по орбите: время до касания грунта минус время, нужное на торможение)
function landLead(W, v) {
  const B = W.U.byId[v.body]; if (!B.landable) return 1e9;
  const c = landCalc(W, v); if (!c) return 1e9;
  if (c.hg < 3000) return 0;
  const el = orbitInfo(W, v); const rg = B.R + 300;
  if (el.bound && el.rp - B.R > landPeT(v, B) + 300 && v.ap && v.ap.phase === 'land' && v.ap.st === 'fall') return 0;   // орбита не ведёт к земле: пора снова тормозить
  if (el.e < 1e-6 || el.rp >= rg) return 1e9;
  const cosN = (el.p / rg - 1) / el.e; if (!(Math.abs(cosN) <= 1)) return 1e9;
  const nuH = -Math.acos(cosN);
  let tHit; if (el.bound) { if (el.nu > 0 && el.r > rg) return 1e9; tHit = timeToNu(el, nuH); } else { tHit = timeFromPeri(el, nuH) - timeFromPeri(el, el.nu); if (tHit < 0) return 0; }
  const vsH = speedAt(el, rg), vtH = Math.abs(el.h) / rg, vrH = Math.sqrt(Math.max(0, vsH * vsH - vtH * vtH)), sinH = clamp(vrH / vsH, 0.02, 1);
  const gH = B.gm / (rg * rg), aDec = Math.max(0.05, c.aT * 0.85 - gH * sinH), dStop = vsH * vsH / (2 * aDec);
  return tHit - dStop * 1.4 / (0.55 * vsH) - 40;
}
function landStep(W, v, dt, rx, ry, ap) {
  const fail = t => { ap.fail = t; ap.done = true; v.throttle = 0; W.log('Автопосадка: ' + t, 'bad'); };
  const B = W.U.byId[v.body];
  if (!B.landable) return fail('на этом теле нет твёрдой поверхности');
  if (v.mode === 'landed') { v.throttle = 0; ap.done = true; W.log('Посадка выполнена', 'ok'); W.event({ t: 'landed', v }); return; }
  const c = landCalc(W, v); if (!c) return;
  v.rcs = true;
  const setDir = (dxu, dyu) => { v.sas = 'hold'; v.sasTarget = Math.atan2(-dxu, dyu); };
  const angErr = () => Math.abs(wrapPI(v.sasTarget - v.a));
  // подготовка: двигатель, опоры, парашюты
  if (!ap.st) {
    ap.st = 'init'; ap.t0 = W.ut;
    for (const p of v.parts) { if (p.d.leg) p.st.deployed = true; if ((p.d.chute || p.d.src) && B.atm && B.atm.dens(0) > 0.02 && !p.st.chute) p.st.chute = 'arm'; }
  }
  // только парашют: в атмосфере капсула без тяги просто спускается на куполе
  if (B.atm && v.parts.some(p => (p.d.chute || p.d.src) && !p.dead) && (!c.T.any || c.T.solid || c.aT * 0.9 - c.g < 0.12 * c.g + 0.05)) {
    if (ap.st !== 'fall') { ap.st = 'fall'; ap.chuteOnly = true; W.log('Автопосадка: только на парашюте (тяги для посадки нет)', 'info'); }
    for (const p of v.parts) if ((p.d.chute || p.d.src) && !p.st.chute) p.st.chute = 'arm';
    v.throttle = 0; v.sas = 'sretro'; return;
  }
  if (v.ctlA != null && v.ctlA < 0.003) return fail('нет управления поворотом — добавьте РСУ (кольцо РСУ, Draco) или маховики');
  if (!c.T.any) {                                    // двигатель не включён — пробуем следующую ступень
    ap.stT = (ap.stT || 0) + dt; v.throttle = 0;
    if (ap.stT > 0.5) { ap.stT = 0; if (v.stageIdx < v.stages.length) { W.stage(v); } else return fail('нет работающего двигателя с топливом'); }
    return;
  }
  if (ap.st === 'init' && !ap.dvChecked) { ap.dvChecked = true; const d = landDv(W, v, c); if (d.have < d.need) return fail('не хватает топлива для посадки: нужно ≈' + Math.round(d.need) + ' м/с, есть ≈' + Math.round(d.have) + ' м/с'); }
  if (c.T.solid) return fail('твердотопливный двигатель нельзя дросселировать — мягкая посадка невозможна');
  const aUseMax = c.aT * 0.9 - c.g;
  if (aUseMax < 0.12 * c.g + 0.05) return fail('не хватает тяги: тяговооружённость у этого тела ' + (c.aT / c.g).toFixed(2) + ' (нужно хотя бы 1,3)');
  const el = orbitInfo(W, v), peAlt = el.rp - B.R;
  const peT = landPeT(v, B);
  const chuteOn = v.parts.some(p => (p.d.chute || p.d.src) && (p.st.chute === 'arm' || p.st.chute === 'deploy' || p.st.chute === 'open'));
  // выбор этапа
  if (ap.st === 'init' || ap.st === 'deorbit' || ap.st === 'fall') {
    const hits = !el.bound || peAlt < peT + 300 || c.vv < -3;
    if (!hits && c.hg > 2000) ap.st = 'deorbit'; else if (ap.st !== 'brake') ap.st = 'fall';
  }
  if (ap.st === 'fall') {
    const lead = landLead(W, v);
    if (chuteOn) { if (c.hg < 300) ap.st = 'final'; }
    else if (lead <= 0 || (c.hg < 1500 && c.vs > 12)) ap.st = (c.vh > 10 && c.vs > 30) ? 'brake' : 'final';
  }
  if (ap.st === 'brake' && (c.vs < 30 || c.vh < 110)) ap.st = 'final';
  // действия
  if (ap.st === 'deorbit') {
    v.sas = 'retrograde';
    const errA = Math.abs(wrapPI(targetAngleFor(W, v, 'retrograde', rx, ry) - v.a));
    if (peAlt <= peT) { v.throttle = 0; ap.st = 'fall'; return; }
    const f = clamp((peAlt - peT) / 30000 + 0.12, 0.12, 1);
    v.throttle = errA < 0.12 ? landThr(ap, f, c.T.tm) : 0; return;
  }
  if (ap.st === 'fall') { v.sas = 'sretro'; v.throttle = 0; return; }
  if (ap.st === 'brake') {
    // тормозной манёвр: тяга на максимум против скорости, лёгкий наклон вверх держит коридор высоты (рельеф шумит — берём сглаженную высоту)
    const hC = Math.min(c.hg, c.hgA);                               // самая низкая высота над рельефом на ближайшие 30 с
    ap.hgS = (ap.hgS == null || hC < ap.hgS || Math.abs(hC - ap.hgS) > 6000) ? hC : ap.hgS + (hC - ap.hgS) * Math.min(1, dt / 6);
    const hold = 4500, vt = ap.hgS > hold ? -clamp((ap.hgS - hold) / 40, 1, 60) : clamp((hold - ap.hgS) / 30, 0, 25);
    const hdx = c.vh > 1e-6 ? c.hx / c.vh : 0, hdy = c.vh > 1e-6 ? c.hy / c.vh : 0;
    const gc = c.g - c.vh * c.vh / c.r;
    const av = clamp(gc + 0.4 * (vt - c.vv), 0, (ap.hgS < hold ? 0.9 : 0.5) * c.aT);
    const pitch = Math.atan2(av, Math.sqrt(Math.max(1e-6, c.aT * c.aT - av * av)));
    ap.pitch = ap.pitch == null ? pitch : ap.pitch + clamp(pitch - ap.pitch, -0.25 * dt, 0.25 * dt);
    setDir(Math.sin(ap.pitch) * rx - Math.cos(ap.pitch) * hdx, Math.sin(ap.pitch) * ry - Math.cos(ap.pitch) * hdy);
    ap.on = angErr() < (ap.on ? 0.9 : 0.35);
    v.throttle = ap.on ? landThr(ap, 1, c.T.tm) : 0; return;
  }
  // финальное снижение: вертикальный канал по профилю скорости + гашение боковой скорости наклоном тяги
  const aUse = Math.max(0.3, 0.55 * aUseMax);
  const tx = -ry, ty = rx, hs = c.hx * tx + c.hy * ty;      // боковая скорость со знаком (в 2D она одна) — наклон непрерывен и не «дребезжит» около нуля
  let tilt = 0; { const ah = clamp((c.hg > 40 ? 0.5 : 0.3) * hs, -0.45 * c.aT, 0.45 * c.aT); tilt = Math.atan2(ah, Math.max(c.g, 0.5 * c.aT)); const lim = c.hg > 30 ? 0.9 : 0.5; tilt = clamp(tilt, -lim, lim); }
  if (c.hg < 3 && Math.abs(hs) < 2) tilt = 0;
  setDir(Math.cos(tilt) * rx - Math.sin(tilt) * tx, Math.cos(tilt) * ry - Math.sin(tilt) * ty);
  const vt = landProfile(c, aUse);
  const ff = aUse * clamp((vt - c.vv + 2) / 2, 0, 1);
  const aCmd = c.g + ff + 2.0 * (vt - c.vv);
  let f = aCmd / (c.aT * Math.max(0.5, Math.cos(tilt)));
  if (c.hg < 0.5 || v.contact > 0) f = c.vv < -3 ? f : 0;
  if (c.vv > 0.3 && c.hg < 50) f = 0;                      // уже поднимаемся у самой земли — не взлетать
  ap.on = angErr() < (ap.on ? 1.0 : 0.4);
  v.throttle = ap.on ? landThr(ap, clamp(f / Math.max(0.5, Math.cos(angErr())), 0, 1), c.T.tm) : 0;
}

function apStep(W, v, dt, rx, ry) {
  const ap = v.ap; if (!ap || ap.done) return;
  const B = W.U.byId[v.body], R = B.R, alt = Math.hypot(v.x, v.y) - R;
  const el = orbitInfo(W, v); const hT = ap.alt; const atmTop = B.atm ? B.atm.top : 0;
  const tx = -ry * ap.dir, ty = rx * ap.dir;       // направление «на восток»
  const vr = v.vx * rx + v.vy * ry, vt = v.vx * tx + v.vy * ty;
  const apAlt = el.e < 1 ? el.ra - R : 1e12, peAlt = el.rp - R;
  const g = B.gm / ((R + alt) * (R + alt));
  const setDir = (dxu, dyu) => { v.sas = 'hold'; v.sasTarget = Math.atan2(-dxu, dyu); };
  ap.t = (ap.t || 0) + dt;
  if (ap.phase === 'land') { landStep(W, v, dt, rx, ry, ap); return; }
  const hTurn = Math.max(0.8 * atmTop, 0.3 * hT, 2500);
  const vC = Math.sqrt(B.gm / (R + hT));
  // автоматическая ступенизация
  const lim = ap.stageLimit != null ? ap.stageLimit : v.stages.length;
  const stg = () => {
    if (v.stageIdx >= lim) return;
    let anyThrust = false, anyOn = false;
    for (const p of v.engines) { if (p.on) { anyOn = true; if (p.fl > 0) anyThrust = true; } }
    if (!anyOn && (v.throttle > 0.01)) { W.stage(v); return; }
    if (anyOn && !anyThrust && v.throttle > 0.01 && !ap._coast) {
      ap.stT = (ap.stT || 0) + dt; if (ap.stT > 0.4) { ap.stT = 0; W.stage(v); }
    } else ap.stT = 0;
  };
  if (ap.phase === 'plan') {
    const dirv = Math.sign(v.x * v.vy - v.y * v.vx) || 1;
    const r = Planner.find(W, { body: v.body, r0: Math.hypot(v.x, v.y), dir: dirv, theta0: Math.atan2(v.y, v.x), t0: W.ut, target: ap.target, rp: ap.rp, side: ap.side, state: { x: v.x, y: v.y, vx: v.vx, vy: v.vy } });
    ap.done = true;
    if (r.err) { ap.fail = r.err; W.log('Окно не найдено: ' + r.err, 'bad'); return; }
    v.lastPlan = r; if (!v.tasks) v.tasks = [];
    v.tasks.unshift({ phase: 'node', node: { t: r.tBurn, dv: r.dv, body: v.body, mag: r.dvMag }, stageLimit: ap.stageLimit });
    W.log('Окно найдено: отлёт через ' + fmtDur(r.tBurn - W.ut) + ', перелёт ' + fmtDur(r.tof) + ', Δv ' + Math.round(r.dvMag) + ' м/с', 'ok'); return;
  }
  if (ap.phase === 'wait') {
    v.throttle = 0; v.sas = 'prograde';
    if (ap.dt && ap.until == null) ap.until = W.ut + ap.dt;
    if (ap.soi && v.body === ap.soi && ap.t1 == null) ap.t1 = W.ut + (ap.extra || 0);
    if (ap.t1 != null && W.ut >= ap.t1) ap.done = true;
    if (ap.until && W.ut >= ap.until) ap.done = true;
    if (v.age > 1e9) ap.done = true;
    return;
  }
  if (ap.phase === 'corr') {
    ap.done = true; const lp = v.lastPlan; if (!lp) { W.log('Нет плана для коррекции', 'bad'); return; }
    const r = Planner.correct(W, v, lp.target, lp.tArr, lp.rp, lp.side);
    if (r.err) { W.log('Коррекция курса: ' + r.err, 'bad'); return; }
    if (r.dvMag < 0.3) { W.log('Коррекция курса не нужна', 'ok'); return; }
    v.tasks.unshift({ phase: 'node', node: { t: r.tBurn, dv: r.dv, body: v.body, mag: r.dvMag }, stageLimit: v.stages.length });
    W.log('Коррекция курса: Δv ' + r.dvMag.toFixed(1) + ' м/с', 'ok'); return;
  }
  if (ap.phase === 'pefix') {
    ap.done = true; const lp = v.lastPlan; const B2 = W.U.byId[v.body]; if (!lp || v.body !== lp.target) return;
    const r = Planner.fixPeriapsis(W, v, lp.rp); if (r.err) { W.log('Подстройка перицентра: ' + r.err, 'bad'); return; }
    if (r.dvMag < 0.3) return;
    v.tasks.unshift({ phase: 'node', node: { t: r.tBurn, dv: r.dv, body: v.body, mag: r.dvMag }, stageLimit: v.stages.length });
    W.log('Подстройка перицентра: Δv ' + r.dvMag.toFixed(1) + ' м/с', 'ok'); return;
  }
  if (ap.phase === 'capture') {
    ap.done = true; const B2 = W.U.byId[v.body]; const e2 = elements(B2.gm, v.x, v.y, v.vx, v.vy);
    if (e2.bound) { W.log('Уже на орбите', 'ok'); return; }
    const tr = ap.rA || Math.min(B2.soi * 0.04, Math.max(e2.rp * 8, B2.R * 12));
    const nd = Planner.nodeAt(W, v, 'pe', tr); if (!nd) { W.log('Захват: нет решения', 'bad'); return; }
    v.tasks.unshift({ phase: 'node', node: { t: nd.t, dv: nd.dv, body: v.body, mag: nd.mag }, stageLimit: v.stages.length });
    W.log('Торможение для захвата: Δv ' + Math.round(nd.mag) + ' м/с', 'ok'); return;
  }
  if (ap.phase === 'node') { nodeStep(W, v, dt); return; }
  if (ap.phase === 'sep') { v.throttle = 0; ap.t2 = (ap.t2 || 0) + dt; if (ap.t2 > 1.5) { while (v.stageIdx <= ap.idx && v.stageIdx < v.stages.length) W.stage(v); ap.done = true; } return; }
  if (ap.phase === 'hold') { v.sas = ap.sas || 'prograde'; v.throttle = 0; if (ap.until && W.ut >= ap.until) ap.done = true; return; }
  if (ap.phase === 'launch') {
    v.rcs = true;
    if (v.stageIdx === 0 && !ap.lit) { ap.lit = true; v.throttle = 1; W.stage(v); }
    v.throttle = 1;
    // ограничение перегрузки
    const vs = Math.hypot(v.vx + B.rotW * v.y, v.vy - B.rotW * v.x);
    const lim = (ap.gmax || 4.2) * G0; if (v.accel > lim && v.thrust > 0) v.throttle = clamp(lim / v.accel * 0.97, 0.3, 1);
    if (v.q > 38000 && B.atm) v.throttle = Math.min(v.throttle, clamp(38000 / v.q, 0.65, 1));
    // направление
    const s = clamp((alt - 120) / Math.max(1, hTurn - 120), 0, 1);
    const gDes = (Math.PI / 2) * (1 - Math.pow(s, B.atm ? 0.72 : 0.6));          // желаемый угол траектории к горизонту
    let dx, dy;
    const sv = Math.hypot(vr, vt);
    if (alt < 120 || sv < 28) { dx = rx; dy = ry; }
    else {
      const fAtm = B.atm ? clamp(1 - alt / (atmTop * 0.7 + 1), 0, 1) : 0; const vts = vt - ap.dir * B.rotW * (R + alt) * fAtm;
      const gam = Math.atan2(vr, Math.max(vts, 0.001));        // текущий угол траектории (отн. поверхности в атмосфере)
      const dg = gam - gDes; const lim = B.atm ? 0.12 + 0.3 * (1 - atmDensFrac(B, alt)) : 0.9;
      const aoa = clamp(dg * 1.5, -lim, lim);
      const pitch = gam - aoa;                                 // тяга ниже вектора скорости, если нужно «заваливать»
      dx = Math.cos(pitch) * tx + Math.sin(pitch) * rx; dy = Math.cos(pitch) * ty + Math.sin(pitch) * ry;
    }
    // Поддержание высоты, когда уже почти горизонтально
    if (alt > hTurn * 0.7 && vr < 0 && alt < hT * 0.995) { const bias = clamp(-vr / 80, 0, 0.5); const nx = dx + rx * bias, ny = dy + ry * bias; const nl = Math.hypot(nx, ny); dx = nx / nl; dy = ny / nl; }
    setDir(dx, dy);
    stg();
    if (apAlt >= hT && alt > atmTop * 0.98) { ap.phase = 'coast'; v.throttle = 0; ap._coast = true; }
    else if (apAlt >= hT * 1.02 && alt < atmTop) { v.throttle = clamp((hT * 1.02 - apAlt) / (hT * 0.01) + 0.0, 0.05, 1) * v.throttle; if (apAlt > hT * 1.08) v.throttle = 0; }
    // обтекатель
    if (alt > Math.max(atmTop * 0.85, 60000) && !ap.fairing) { const f = v.parts.find(p => p.d.fair); if (f) { f.stage = v.stageIdx; if (v.stageIdx < v.stages.length) { /* сбросит автоматически при ступенизации */ } W.jettisonFairing(v); } ap.fairing = true; }
    if (v.age > 2400) ap.done = true;
  } else if (ap.phase === 'coast') {
    v.throttle = 0; v.sas = 'prograde';
    if (apAlt < hT * 0.98 && alt < atmTop) { ap.phase = 'launch'; ap._coast = false; return; }
    const ci = apCoastInfo(W, v), tA = ci.tA, burn = ci.burn;
    if (alt > atmTop && tA < burn / 2 + 4 || (alt > atmTop && tA > el.T - 5)) { ap.phase = 'circ'; ap._coast = false; }
    if (v.stageIdx < lim && !v.engines.some(p => p.on && (p.res.solid > 0 || propAvail(v, p, p.d.eng.prop) > 0))) { if (tA < burn / 2 + 40) W.stage(v); }
  } else if (ap.phase === 'circ') {
    // тяга по горизонту, чуть вверх если падаем
    const e = el; const vrr = vr; let dx = tx, dy = ty; const up = clamp(-vrr / Math.max(30, vt * 0.1), -0.3, 0.5) + clamp((hT - alt) / hT * 1.5, -0.2, 0.3);
    dx += rx * up; dy += ry * up; const l = Math.hypot(dx, dy); setDir(dx / l, dy / l);
    v.rcs = true;
    // скорость до круговой
    const dvLeft = vC - vt;
    const aerr = Math.abs(wrapPI(v.sasTarget - v.a)); const gimOK = v.engines.some(p => p.on && p.d.eng.gim);
    const aligned = aerr < 0.15 || (gimOK && aerr < 0.7);
    const thr = estimateThrust(v) || 1; const acc = Math.max(0.01, thr / v.mp.m);
    if (peAlt >= hT * 0.985 || (dvLeft <= 0.5)) { v.throttle = 0; ap.phase = 'done'; ap.done = true; v.sas = 'prograde'; W.event({ t: 'apDone', v }); }
    else {
      v.throttle = aligned ? clamp(dvLeft / (acc * 1.2) * 0.1 + 0.05, 0.06, 1) : 0;
      if (dvLeft > acc * 3) v.throttle = aligned ? 1 : 0;
    }
    if (!v.engines.some(p => p.on && p.fl > 0) && v.throttle > 0.01) { stg(); if (v.stageIdx >= lim && !v.engines.some(p => p.on && propAvail(v, p, p.d.eng.prop) > 0)) { ap.done = true; ap.fail = 'Топливо закончилось'; v.throttle = 0; } }
    if (!ap.t2) ap.t2 = 0; ap.t2 += dt; if (ap.t2 > 1500) { ap.done = true; ap.fail = 'Тайм-аут'; v.throttle = 0; }
  }
}
function nodeInfo(W, v) {
  const ap = v.ap, nd = ap.node, m = v.mp.m; let F = 0, md = 0;
  for (const p of v.engines) { if (!p.on) continue; const e = p.d.eng; if (e.power > 0) continue; const av = e.solid ? (p.res.solid || 0) : propAvail(v, p, e.prop); if (!(av > 0)) continue; F += engThrust(e, p, 0, 1); md += engMdot(e, 1, p.n); }
  const dvm = Math.hypot(nd.dv[0], nd.dv[1]); const ve = md > 0 ? F / md : 3000;
  const burn = F > 0 ? m * (1 - Math.exp(-dvm / ve)) * ve / F : 0;
  return { F, md, ve, burn, dvm, m };
}
function nodeStep(W, v, dt) {
  const ap = v.ap, nd = ap.node; const B = W.U.byId[v.body];
  if (v.body !== nd.body) { ap.done = true; ap.fail = 'Сменилась сфера влияния'; v.throttle = 0; return; }
  if (!ap.acc) ap.acc = [0, 0];
  let inf = nodeInfo(W, v);
  if (inf.F <= 0 && !ap.burning) {
    const lim = ap.stageLimit != null ? ap.stageLimit : v.stages.length;
    if (v.stageIdx < lim && W.ut > nd.t - inf.burn - 120) { W.stage(v); return; }
    // двигатели без ступеней (аппарат после отделения): просто включаем готовые к запуску
    let lit = false; for (const p of v.engines) if (!p.on && p.d.eng && !(p.ign != null && p.ign <= 0)) { p.on = true; if (p.ign != null) p.ign--; lit = true; }
    if (lit) { inf = nodeInfo(W, v); }
    if (inf.F <= 0 && (v.stageIdx >= lim || W.ut > nd.t)) { ap.done = true; ap.fail = 'Нет работающего двигателя'; v.throttle = 0; W.log('Манёвр отменён: нет работающего двигателя', 'bad'); return; }
  }
  const rem = [nd.dv[0] - ap.acc[0], nd.dv[1] - ap.acc[1]]; const rm = Math.hypot(rem[0], rem[1]);
  v.sas = 'hold'; v.sasTarget = Math.atan2(-rem[0], rem[1]); v.rcs = true;
  const tStart = nd.t - inf.burn / 2;
  const aerr = Math.abs(wrapPI(v.sasTarget - v.a));
  if (!ap.burning) { v.throttle = 0; if (W.ut >= tStart && aerr < 0.12) { ap.burning = true; ap.t0 = W.ut; } else if (W.ut > tStart + 120 && aerr >= 0.12) { /* нет ориентации — ждём */ } }
  if (ap.burning) {
    const acc = Math.max(0.01, inf.F / inf.m);
    v.throttle = clamp(rm / (acc * 1.2), 0.04, 1);
    const sa = Math.sin(v.a), ca = Math.cos(v.a); const th = (v.thrust || 0) / inf.m * dt;
    ap.acc[0] += -sa * th; ap.acc[1] += ca * th;
    const rem2 = [nd.dv[0] - ap.acc[0], nd.dv[1] - ap.acc[1]]; const d0 = rem2[0] * nd.dv[0] + rem2[1] * nd.dv[1];
    if (d0 <= 0 || Math.hypot(rem2[0], rem2[1]) < 0.15 || (ap.burning && W.ut - ap.t0 > inf.burn * 3 + 60 && inf.F > 0)) { v.throttle = 0; ap.done = true; W.event({ t: 'nodeDone', v }); W.log('Манёвр выполнен (Δv ' + Math.round(Math.hypot(ap.acc[0], ap.acc[1])) + ' м/с)', 'ok'); }
    if (v.thrust <= 0 && v.throttle > 0.05) { ap.dry = (ap.dry || 0) + dt; if (ap.dry > 3) { const lim = ap.stageLimit != null ? ap.stageLimit : v.stages.length; if (v.stageIdx < lim) { W.stage(v); ap.dry = 0; } else { ap.done = true; ap.fail = 'Топливо закончилось'; v.throttle = 0; } } } else ap.dry = 0;
  }
}
function apCoastInfo(W, v) {
  const B = W.U.byId[v.body], ap = v.ap, el = orbitInfo(W, v);
  const vC = Math.sqrt(B.gm / (B.R + ap.alt));
  const tA = el.e < 1 ? timeToNu(el, PI) : 1e9;
  const vAp = el.e < 1 ? Math.sqrt(B.gm * (2 / el.ra - 1 / el.a)) : 0; const dv = Math.max(0, vC - vAp);
  const thr = v.thrust0 || (estimateThrust(v) || 1); const acc = Math.max(0.05, thr / v.mp.m);
  return { tA, dv, burn: dv / acc };
}
function atmDensFrac(B, alt) { return B.atm ? clamp(B.atm.dens(alt) / B.atm.rho0, 0, 1) : 0; }
function estimateThrust(v) { let F = 0; for (const p of v.engines) if (p.on && p.flF) F += p.flF; if (F > 0) return F; for (const p of v.engines) if (p.on) F += p.d.eng.Fv * 0.9 * (p.n || 1); return F; }
