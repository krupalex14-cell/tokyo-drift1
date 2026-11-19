'use strict';
// ============ Рендер: вид полёта (небо, атмосфера, рельеф, аппарат) ============
const Cam = { z: 1, mapZ: 1, mapX: 0, mapY: 0, focus: null, bz: 1, bx: 0, by: 0 };

// --- LUT плотности атмосферы: f∈[0,1] — «видимая» доля рассеяния на высоте a (логарифмическая шкала) ---
function skyLUT(B) {
  if (B._sky) return B._sky;
  const A = B.atm, N = 256, lut = new Float32Array(N + 2), top = Math.max(A.top || 100e3, 5e3), rho0 = A.rho0 || A.dens(0), rmin = rho0 * 8.2e-6, maxA = top * 1.4;
  for (let i = 0; i <= N; i++) { const u = i / N, a = maxA * u * u, rho = A.dens(a); lut[i] = clamp(Math.log(Math.max(rho, rmin * 0.5) / rmin) / Math.log(rho0 / rmin), 0, 1); }
  lut[N + 1] = 0;
  const ch = c => [c & 255, (c >> 8) & 255, (c >> 16) & 255];
  const sky = ch(A.sky), haze = ch(A.haze), deep = sky.map(x => x * 0.42);
  return B._sky = { lut, maxA, N, sky, haze, deep };
}
function chan(c) { return [c & 255, (c >> 8) & 255, (c >> 16) & 255]; }
function palChans(B) { if (!B._pc && B.pal) B._pc = B.pal.map(p => p.c.map(chan)); return B._pc; }

function vn2p(a, y, N, s) { // периодический по углу value-noise: a — угол (рад), N ячеек по кругу
  const u = a / TAU * N, xi = Math.floor(u), fx = u - xi, yi = Math.floor(y), fy = y - yi;
  const m0 = ((xi % N) + N) % N, m1 = (m0 + 1) % N;
  const A = hash2(m0 + s * 97, yi), Bn = hash2(m1 + s * 97, yi), C = hash2(m0 + s * 97, yi + 1), D = hash2(m1 + s * 97, yi + 1);
  const ux = fx * fx * (3 - 2 * fx), vy = fy * fy * (3 - 2 * fy);
  return (A + (Bn - A) * ux) * (1 - vy) + (C + (D - C) * ux) * vy;
}
const BAY = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5].map(v => (v + 0.5) / 16 - 0.5);
// упорядоченное сглаживание до 4 бит на канал: «ретро-палитра» с узором
function dq(r, g, b, x, y) {
  const d = BAY[((y & 3) << 2) | (x & 3)], k = 15 / 255, m = 255 / 15;
  r = Math.round(r * k + d) * m; g = Math.round(g * k + d) * m; b = Math.round(b * k + d) * m;
  return (255 << 24) | ((b < 0 ? 0 : b > 255 ? 255 : b | 0) << 16) | ((g < 0 ? 0 : g > 255 ? 255 : g | 0) << 8) | (r < 0 ? 0 : r > 255 ? 255 : r | 0);
}
const FV = {
  stars: null, ys: null, hc: null, bc: null, ok: null, lastS: null,
  init() {
    const r = rng(77); this.stars = [];
    for (let i = 0; i < 520; i++) { const a = r() * TAU, d = Math.sqrt(r()); const k = r(); this.stars.push([Math.cos(a) * d, Math.sin(a) * d, 0.25 + 0.75 * k * k, (r() * 5) | 0]); }
  },
  // габариты аппарата вдоль «вертикали экрана» (м): ниже/выше центра масс, размер
  extents(v, psi) {
    const cx = v.mp.cx, cy = v.mp.cy, s = Math.sin(psi), c = Math.cos(psi);
    let umin = 1e9, umax = -1e9, smin = 1e9, smax = -1e9;
    const add = (px, py) => { const dx = px - cx, dy = py - cy, u = dx * s + dy * c, w = dx * c - dy * s; if (u < umin) umin = u; if (u > umax) umax = u; if (w < smin) smin = w; if (w > smax) smax = w; };
    for (const p of v.parts) {
      const e = pext(p); add(p.x - e[0], p.y - e[1]); add(p.x + e[0], p.y - e[1]); add(p.x - e[0], p.y + e[1]); add(p.x + e[0], p.y + e[1]);
      if (p.d.leg) { const f = p.d.leg.foot, sg = p.x >= 0 ? 1 : -1; add(p.x + sg * Math.abs(f[0]), p.y + f[1]); }
      if (p.d.wheel) add(p.x, p.y - p.d.wheel.r);
    }
    if (umin > umax) { umin = -1; umax = 1; smin = -1; smax = 1; }
    return { down: -umin, up: umax, hgt: umax - umin, size: Math.max(umax - umin, smax - smin) };
  },
  setup(g, W, v, t) {
    const U = W.U, B = U.byId[v.body], H = g.h, Wd = g.w;
    const r = Math.hypot(v.x, v.y), phi = Math.atan2(v.y, v.x), cph = Math.cos(phi), sph = Math.sin(phi);
    const rot = bodyRot(B, W.ut), thv = phi - rot, psi = v.a + PI / 2 - phi;
    if (v.dirty || !v.mp) vesselRefresh(v);
    const ex = this.extents(v, psi);
    const ppmV = 0.40 * H * Cam.z / clamp(ex.size, 1.5, 400);
    const Zn = H / ppmV;
    const gnd = B.landable ? surfR(W, B, thv) : B.R;
    const rf = r - ex.down, hg = Math.max(0, rf - gnd);
    const Zlow = Zn + 2.6 * hg, Zp = 2.6 * r * Cam.z * 0.0 + 2.6 * r;
    const k = smooth(0.002, 0.04, hg / B.R);
    const Zg = Math.exp((1 - k) * Math.log(Zlow) + k * Math.log(Math.max(Zp, Zlow)));
    const ppmB = H / Zg;
    const cyC = H * (0.42 - 0.12 * k) + (typeof FX !== 'undefined' ? FX.shy : 0) + (this.yOff || 0), cx = Wd / 2 + (typeof FX !== 'undefined' ? FX.shx : 0), yFoot = cyC + ex.down * ppmV;
    // Солнце в локальной системе
    const si = Systems.sunInfo(W, v); const Sx = -si.sx * sph + si.sy * cph, Sy = si.sx * cph + si.sy * sph;
    const air = atmAt(B, r - B.R);
    const S = { W, v, B, U, g, H, Wd, r, phi, cph, sph, rot, thv, psi, ex, ppmV, ppmB, cyC, cx, yFoot, rf, hg, gnd, k, Sx, Sy, S: si.S, air, t, alt: r - B.R, R: B.R };
    S.dens = B.atm ? clamp(air.rho / B.atm.rho0, 0, 1) : 0;
    S.hv = gnd - B.R;
    const A = B.atm; S.cloud = !!(A && A.cloud && S.alt > A.cloud * 0.8);
    S.solidless = !!(B.gas || S.cloud || B.kind === 'star'); S.Rcl = B.gas ? B.R : (S.cloud ? B.R + A.cloud : B.R);
    // направление вверх на экране для произвольной точки мира (инерциальной) → экран (используется эффектами и аппаратами)
    S.toScr = (wx, wy, out) => { const dx = wx - v.x, dy = wy - v.y; const X = -dx * sph + dy * cph, Y = dx * cph + dy * sph; out[0] = cx + X * ppmV; out[1] = cyC - Y * ppmV; return out; };
    S.toScrB = (wx, wy, out) => { const dx = wx - v.x, dy = wy - v.y; const X = -dx * sph + dy * cph, Y = dx * cph + dy * sph; out[0] = cx + X * ppmB; out[1] = yFoot - (Y + ex.down) * ppmB; return out; };
    return S;
  },
  // ---------- главный кадр ----------
  frame(g, W, v, t, noMarks) {
    const S = this.setup(g, W, v, t); this.lastS = S;
    this.world(g, S);
    this.celestial(g, S);
    this.extras(g, S);
    if (typeof FX !== 'undefined') FX.draw(g, S, 0);
    this.vessels(g, S);
    if (typeof FX !== 'undefined') FX.draw(g, S, 1);
    if (!noMarks) this.markers(g, S);
    return S;
  },
  // ---------- небо + поверхность по колонкам ----------
  world(g, S) {
    const { B, H, Wd, ppmB, cx, yFoot, rf, thv, Sx, Sy, R } = S;
    const buf = g.buf, GW = g.w, GH = g.h;
    if (!this.ys || this.ys.length < GW + 3) { this.ys = new Float32Array(GW + 3); this.yb = new Float32Array(GW + 3); this.hc = new Float32Array(GW + 3); this.bc = new Int16Array(GW + 3); this.dl = new Float32Array(GW + 3); }
    const ys = this.ys, yb = this.yb, hc = this.hc, bc = this.bc, dl = this.dl;
    const T = B.T, hasT = !!T && !S.solidless && B.landable;
    const atm = B.atm, sk = atm ? skyLUT(B) : null;
    const sea = B.sea ? B.sea.level : -1e18;
    const lod = Math.max(0.5, 1 / ppmB);
    S.colTop = ys;
    // фаза 1: высоты колонок
    for (let x = -1; x <= GW; x++) {
      const X = (x + 0.5 - cx) / ppmB, i = x + 1;
      let top = 1e9, bot = 1e9, h = 0, bi = 0, delta = 0;
      if (hasT) {
        const Rg0 = R + S.hv, s0 = X / Rg0;
        if (s0 > -0.995 && s0 < 0.995) {
          delta = Math.asin(s0); h = T.h(thv + delta, lod);
          if (Math.abs(s0) > 0.2) { const s1 = X / (R + h); if (Math.abs(s1) < 0.999) { delta = Math.asin(s1); h = T.h(thv + delta, lod); } }
          bi = T.biome(thv + delta, h);
          const Rs = R + Math.max(h, sea), s2 = X / Rs;
          if (Math.abs(s2) < 0.999) { const q = Rs * Math.sqrt(1 - s2 * s2); top = yFoot - (q - rf) * ppmB; bot = yFoot + (q + rf) * ppmB; } else top = 1e9;
        }
      } else if (S.solidless) {
        const Rs = S.Rcl, s2 = X / Rs; if (Math.abs(s2) < 0.999) { const q = Rs * Math.sqrt(1 - s2 * s2); top = yFoot - (q - rf) * ppmB; bot = yFoot + (q + rf) * ppmB; delta = Math.asin(s2); }
      } else if (B.kind === 'star') { }
      ys[i] = top; yb[i] = bot; hc[i] = h; bc[i] = bi; dl[i] = delta;
    }
    // фаза 2: покраска
    const space = [3, 4, 9]; const pcs = palChans(B);
    const ambG = atm ? 0.10 + 0.22 * S.dens : 0.075;
    const seaC = B.sea ? chan(hex(B.sea.color)) : null, seaD = B.sea ? chan(hex(B.sea.deep)) : null;
    const baseC = chan(B.color || 0xff808080);
    const twi = [255, 130, 60];
    const skyAt = (X, y, xs) => {
      const Yp = (yFoot - (y + 0.5)) / ppmB + rf, d = Math.sqrt(X * X + Yp * Yp), a = d - R;
      let cr = space[0], cg = space[1], cb = space[2];
      if (atm) {
        let f;
        if (a <= 0) f = 1; else if (a >= sk.maxA) f = 0; else { const u = Math.sqrt(a / sk.maxA) * sk.N, ii = u | 0, fr = u - ii; f = sk.lut[ii] + (sk.lut[ii + 1] - sk.lut[ii]) * fr; }
        if (f > 0.003) {
          const L = (X * Sx + Yp * Sy) / d;
          const day = smooth(-0.16, 0.32, L);
          const f2 = f * f, hz = f2 * f2 * 0.75;
          let r0 = sk.deep[0] + (sk.sky[0] - sk.deep[0]) * f, g0 = sk.deep[1] + (sk.sky[1] - sk.deep[1]) * f, b0 = sk.deep[2] + (sk.sky[2] - sk.deep[2]) * f;
          r0 += (sk.haze[0] - r0) * hz; g0 += (sk.haze[1] - g0) * hz; b0 += (sk.haze[2] - b0) * hz;
          const vis = Math.pow(f, 0.62) * day;
          let tw = 1 - Math.abs(L) / 0.2; tw = tw > 0 ? tw * f * 0.6 : 0;
          cr = space[0] + (r0 - space[0]) * vis; cg = space[1] + (g0 - space[1]) * vis; cb = space[2] + (b0 - space[2]) * vis;
          if (tw > 0) { const tk = tw * (1 - vis * 0.3); cr += (twi[0] - cr) * tk * 0.55; cg += (twi[1] - cg) * tk * 0.5; cb += (twi[2] - cb) * tk * 0.45; }
          if (day < 0.5 && a < sk.maxA * 0.2) { const ng = f * (1 - day * 2) * 0.16; cr += 20 * ng; cg += 40 * ng; cb += 90 * ng; }   // ночной ореол
        }
      }
      if (S.solidless && d < S.Rcl) {
        const L = (X * Sx + Yp * Sy) / d, lit = 0.06 + 0.94 * smooth(-0.12, 0.35, L);
        const ang = Math.atan2(X, Yp), band = Math.sin(ang * 14 + Math.sin(ang * 5 + t * 0.02) * 1.3) * 0.5 + Math.sin(ang * 31 + 1.2) * 0.25;
        const k2 = 0.82 + 0.22 * band;
        const bc2 = B.atm ? sk.haze : baseC;
        const deepk = B.gas ? clamp(1 + (d - R) / 3e5, 0.45, 1) : 1;
        cr = bc2[0] * lit * k2 * deepk; cg = bc2[1] * lit * k2 * deepk; cb = bc2[2] * lit * k2 * deepk;
      }
      return dq(cr, cg, cb, xs, y);
    };
    const t = S.t; const farW = smooth(0.16, 0.035, ppmB), bi0 = 0;
    for (let x = 0; x < GW; x++) {
      const X = (x + 0.5 - cx) / ppmB, i = x + 1, top = ys[i];
      const yT = top >= GH ? GH : Math.max(0, Math.ceil(top - 0.5)); const yB = yb[i] >= GH ? GH : Math.max(yT, Math.ceil(yb[i] - 0.5));
      // ----- небо -----
      for (let y = 0; y < yT; y++) buf[y * GW + x] = skyAt(X, y, x);
      // ----- поверхность -----
      if (!hasT) { for (let y = yT; y < yB; y++) { // «сплошное» тело без рельефа / неподъёмное: заполняем по глубине
          const Yp = (yFoot - (y + 0.5)) / ppmB + rf, d = Math.sqrt(X * X + Yp * Yp);
          const L = (X * Sx + Yp * Sy) / d, lit = 0.06 + 0.94 * smooth(-0.12, 0.35, L);
          const ang = Math.atan2(X, Yp), band = Math.sin(ang * 14 + Math.sin(ang * 5) * 1.3) * 0.5 + Math.sin(ang * 31 + 1.2) * 0.25, k2 = 0.82 + 0.22 * band;
          const bc2 = B.gas && atm ? sk.haze : S.cloud ? sk.haze : baseC;
          const deepk = B.gas ? clamp(1 + (d - R) / 3e5, 0.3, 1) : 1;
          buf[y * GW + x] = rgb(Math.min(255, bc2[0] * lit * k2 * deepk), Math.min(255, bc2[1] * lit * k2 * deepk), Math.min(255, bc2[2] * lit * k2 * deepk));
        } for (let y = yB; y < GH; y++) buf[y * GW + x] = skyAt(X, y, x); continue; }
      if (yT >= GH) continue;
      const h = hc[i], bi = bc[i], pc = pcs ? pcs[bi] || pcs[0] : null, delta = dl[i];
      const water = h < sea, Rt = R + h, Rw = R + sea, Rtop = water ? Rw : Rt;
      // освещение по наклону колонки
      const dy2 = (ys[i + 1] - ys[i - 1]);
      const sl = (Math.abs(dy2) < 1e6) ? Math.sqrt(dy2 * dy2 + 4) : 2;
      const lam = (dy2 * Sx + 2 * Sy) / sl;
      const wpos = (thv + delta) * R;        // положение вдоль поверхности (м)
      const cell = Math.max(1.5 / ppmB, 0.3);
      const cellI = Math.floor(wpos / cell);
      const pc0 = pcs ? pcs[0] : null;
      for (let y = yB; y < GH; y++) buf[y * GW + x] = skyAt(X, y, x);
      for (let y = yT; y < yB; y++) {
        const Yp = (yFoot - (y + 0.5)) / ppmB + rf, d = Math.sqrt(X * X + Yp * Yp);
        const L = (X * Sx + Yp * Sy) / d;
        const sunk = smooth(-0.1, 0.28, L);
        let shade = ambG + sunk * (0.78 + 0.34 * clamp(lam * 1.1 + 0.15, -0.5, 0.9)) * (atm ? 0.8 + 0.2 * (1 - S.dens) : 1);
        let c0, c1, c2;
        const depth = Rtop - d, dpx = depth * ppmB;
        const wf = farW; // доля «вида из космоса»
        if (wf < 1) {
          if (water && d > Rt) {
            const wd = clamp(depth / 160, 0, 1); c0 = seaC[0] + (seaD[0] - seaC[0]) * wd; c1 = seaC[1] + (seaD[1] - seaC[1]) * wd; c2 = seaC[2] + (seaD[2] - seaC[2]) * wd;
            if (dpx < 1.2) { c0 += 60; c1 += 70; c2 += 60; }
            else if (dpx < 3.5 && ((x + y) & 1) === 0 && Math.sin(wpos * 0.9 / Math.max(1, 1 / ppmB * 0.4) + t * 1.7) > 0.7) { c0 += 25; c1 += 30; c2 += 30; }
            shade = ambG * 1.2 + sunk * 0.85;
          } else {
            const dd = water ? Rt - d : depth; const dm = Math.max(0, dd), dpp = dm * ppmB;
            const topT = Math.max(2.6 / ppmB, 1.2), bandT = Math.max(11 / ppmB, 5);
            let col;
            if (!pc) col = baseC;
            else if (dpp < 1.05) col = pc[0];
            else if (dm < topT) { col = pc[1]; if (dm < topT * 0.45 && ((x + y) & 1)) col = pc[0]; }
            else {
              const pm = pc0 || pc;
              if (dm < bandT * 22) {
                const bi2 = Math.floor((dm - topT) / bandT), hsh = hash2(bi2 * 3 + 1, 17 + bi0);
                col = (hsh > 0.5) ? pm[2] : pm[3];
                const fr = ((dm - topT) / bandT) - bi2; if (fr < 0.16 && ((x + y) & 1)) col = hsh > 0.5 ? pm[3] : pm[2];
                const sp = hash2(cellI * 31 + ((dm / cell) | 0) * 131, 5 + bi0); if (sp > 0.965) col = pm[4]; else if (sp < 0.03) col = pm[1];
              } else { const q = Math.floor(dm / (bandT * 3)); const hb = hash2(q, 9 + bi0); col = hb > 0.5 ? pm[4] : pm[5]; if (dm > R * 0.02) col = pm[5]; }
            }
            c0 = col[0]; c1 = col[1]; c2 = col[2];
            if (water) { const wd = clamp((Rw - d) / 120, 0, 1) * 0.65; c0 = c0 * (1 - wd) + seaD[0] * wd; c1 = c1 * (1 - wd) + seaD[1] * wd; c2 = c2 * (1 - wd) + seaD[2] * wd; }
            if (dpp > 80 + 0) shade *= 0.8;
          }
        }
        if (wf > 0) { // планета «из космоса»: общий цвет тела, пятна суши/океана, облака
          const ab = thv + delta + Math.atan2(X - 0, Yp) * 0 + (Math.atan2(X, Yp) - delta) * 1; // угол точки в системе тела
          let f0, f1, f2;
          const dr = d / R;
          const cf = smooth(0.05, 0.35, dr); const n1 = 0.5 + (vn2p(ab, dr * 5, 18, 3) - 0.5) * cf, n2 = 0.5 + (vn2p(ab, dr * 13, 40, 7) - 0.5) * cf;
          if (B.sea) {
            const land = n1 * 0.7 + n2 * 0.3;
            if (land > 0.52) { const lc = pcs ? pcs[2][0] : baseC; f0 = lc[0]; f1 = lc[1]; f2 = lc[2]; } else { f0 = seaC[0]; f1 = seaC[1]; f2 = seaC[2]; }
            const cl = (vn2p(ab + 0.4, dr * 9, 30, 11) * 0.65 + vn2p(ab, dr * 23, 60, 13) * 0.35) * cf;
            if (cl > 0.6) { const q = Math.min(1, (cl - 0.6) * 5); f0 += (245 - f0) * q; f1 += (245 - f1) * q; f2 += (250 - f2) * q; }
          } else { const k = 0.82 + 0.34 * (n1 * 0.6 + n2 * 0.4); f0 = baseC[0] * k; f1 = baseC[1] * k; f2 = baseC[2] * k; }
          if (dpx < 1.1) { f0 = f0 * 1.15 + 14; f1 = f1 * 1.15 + 14; f2 = f2 * 1.15 + 14; }
          if (wf >= 1) { c0 = f0; c1 = f1; c2 = f2; } else { c0 += (f0 - c0) * wf; c1 += (f1 - c1) * wf; c2 += (f2 - c2) * wf; }
        }
        const k3 = shade > 1.25 ? 1.25 : shade;
        const r1 = c0 * k3, g1 = c1 * k3, b1 = c2 * k3;
        buf[y * GW + x] = dq(r1, g1, b1, x, y);
      }
    }
    // космодром (площадка, мачта)
    if (hasT && B.id === S.U.home && S.alt < 3000) this.pad(g, S);
  },
  pad(g, S) {
    const { B, ppmB, cx, yFoot, rf, thv, R } = S; if (ppmB < 0.25) return;
    const th0 = S.U.siteTheta; const arc = wrapPI(th0 - thv) * R; const X = arc;
    const gnd = B.T.h(th0, 1) + R; const y = yFoot - (gnd - rf) * ppmB; const sx = cx + X * ppmB;
    if (sx < -200 * ppmB || sx > g.w + 200 * ppmB) return;
    const conc = rgb(128, 130, 134), concD = rgb(84, 86, 92), steel = rgb(176, 120, 90);
    g.rect(sx - 9 * ppmB, y, 18 * ppmB, Math.max(1, 0.9 * ppmB), conc);
    g.rect(sx - 9 * ppmB, y + Math.max(1, 0.9 * ppmB), 18 * ppmB, Math.max(1, 0.5 * ppmB), concD);
    // башня обслуживания
    const tx = sx + 14 * ppmB, th = 38 * ppmB, tw = Math.max(4, 3.4 * ppmB);
    g.rect(tx, y - th, 1, th, rgb(150, 98, 76)); g.rect(tx + tw, y - th, 1, th, rgb(150, 98, 76));
    for (let k = 0; k <= 12; k++) { const yy = y - th + k * th / 12, yy2 = y - th + (k + 1) * th / 12; g.line(tx, k & 1 ? yy : yy2, tx + tw, k & 1 ? yy2 : yy, rgb(120, 80, 62)); }
    g.rect(tx - 7 * ppmB, y - th * 0.78, 7 * ppmB, 2, rgb(190, 130, 100));
    g.rect(tx + tw / 2, y - th - 4 * ppmB, 1, 4 * ppmB, rgb(220, 220, 220));
    if (((S.t * 1.2) | 0) & 1) g.px(tx + tw / 2, y - th - 4 * ppmB - 1, rgb(255, 60, 40));
  },
  // ---------- звёзды, Солнце, другие тела ----------
  celestial(g, S) {
    const { B, H, Wd, phi, cx, cyC, Sx, Sy } = S; const ys = S.colTop;
    const GW = g.w, GH = g.h;
    // видимость звёзд зависит от яркости неба
    const skyDay = B.atm ? clamp(S.dens * 1.6, 0, 1) * smooth(-0.15, 0.3, (Sy)) : 0;
    const starA = 1 - skyDay * 0.97;
    if (starA > 0.05) {
      const dia = Math.hypot(GW, GH) * 0.62, cph = Math.cos(phi - PI / 2), sph = Math.sin(phi - PI / 2);
      const cols = [rgb(255, 255, 255), rgb(190, 210, 255), rgb(255, 240, 200), rgb(255, 200, 170), rgb(220, 230, 255)];
      for (const s of this.stars) {
        // звёзды неподвижны в инерциальной системе: поворачиваем на -(phi-π/2)
        const ux = s[0] * cph + s[1] * sph, uy = -s[0] * sph + s[1] * cph;
        const px = (GW / 2 + ux * dia) | 0, py = (GH * 0.45 - uy * dia) | 0;
        if (px < 0 || py < 0 || px >= GW || py >= GH) continue;
        if (py >= (ys[px + 1] >= GH ? GH : ys[px + 1])) continue;
        const cur = g.buf[py * GW + px]; const lum = (cur & 255) + ((cur >> 8) & 255) + ((cur >> 16) & 255);
        if (lum > 200) continue; const b = s[2] * starA * (lum > 90 ? 0.35 : 1);
        if (b < 0.18) continue; const c = cols[s[3]]; g.buf[py * GW + px] = b > 0.55 ? c : shade(c, 0.45 + b * 0.5);
        if (s[2] > 0.9 && starA > 0.7) { g.px(px + 1, py, shade(c, 0.4)); g.px(px - 1, py, shade(c, 0.4)); g.px(px, py + 1, shade(c, 0.4)); g.px(px, py - 1, shade(c, 0.4)); }
      }
    }
    // небесные тела (Солнце, спутники, планеты) как диски по направлению
    const list = this.skyBodies(S);
    const KS = H * 0.46;
    for (const o of list) {
      const rad = o.ang * H / 1.4 / 2;           // радиус в пикселях: угловой размер → пиксели (обзор по вертикали ≈ 80°)
      const px = GW / 2 + o.dx * KS * 1.0, py = S.cyC * 0.9 - o.dy * KS * 1.0 + 0;
      const r = Math.max(o.minR || 1, rad);
      if (px < -r || px > GW + r || py < -r || py > GH + r) continue;
      // не рисуем, если закрыто поверхностью (колонка выше)
      const colx = Math.max(0, Math.min(GW - 1, px | 0)); if (py > (ys[colx + 1] >= GH ? GH : ys[colx + 1])) continue;
      if (o.sun) {
        const vis = 1 - skyDay * 0.0; const glow = Math.min(40, r * 4 + 10);
        for (let yy = -glow; yy <= glow; yy += 1) for (let xx = -glow; xx <= glow; xx += 1) { const dd = Math.hypot(xx, yy); if (dd > glow || dd < r) continue; const k = (1 - dd / glow); const a = k * k * (0.7 - skyDay * 0.35) * 70; if (a > 1.5) g.add(px + xx, py + yy, a, a * 0.9, a * 0.62); }
        g.disc(px, py, r, o.color);
      } else {
        g.disc(px, py, r, o.color);
        if (r >= 2.5 && o.lit) { // фаза
          const ph = o.phase; const dd = Math.max(1, r | 0); for (let yy = -dd; yy <= dd; yy++) { const w = Math.sqrt(Math.max(0, dd * dd - yy * yy)); for (let xx = -w; xx <= w; xx++) { const side = xx / Math.max(1, w); const lit = (side * o.sx + 0) > -o.ph ? 0 : 1; if (lit) { const cc = g.get(px + xx, py + yy); g.px(px + xx, py + yy, shade(cc, 0.35)); } } }
        }
      }
    }
  },
  skyBodies(S) {
    const { W, v, B, U, phi, cph, sph } = S; const out = [];
    const ws = W.eph.at(W.ut);
    const Bs = ws[B.idx]; const ax = Bs.x + v.x, ay = Bs.y + v.y;     // абсолютная позиция аппарата
    const toLoc = (dx, dy) => { const X = -dx * sph + dy * cph, Y = dx * cph + dy * sph; const l = Math.hypot(X, Y) || 1; return [X / l, Y / l, l]; };
    const star = U.root, Ss = ws[star.idx];
    { const q = toLoc(Ss.x - ax, Ss.y - ay); out.push({ sun: true, dx: q[0], dy: q[1], ang: 2 * star.R / q[2], color: star.color ? star.color : rgb(255, 230, 170), minR: 2.5 }); }
    for (const b of U.bodies) {
      if (b === star) continue; const s = ws[b.idx]; let dx = s.x - ax, dy = s.y - ay;
      if (b === B) continue;
      const q = toLoc(dx, dy), ang = 2 * b.R / q[2];
      if (ang < 0.0012 && b.kind !== 'planet') continue; if (ang < 0.0006) continue;
      // фаза: направление на Солнце от тела
      const sd = toLoc(Ss.x - s.x, Ss.y - s.y); const ph = (sd[0] * q[0] + sd[1] * q[1]);
      out.push({ dx: q[0], dy: q[1], ang, color: b.color || rgb(160, 160, 170), minR: 1, lit: true, phase: 0, sx: Math.sign(q[0] - sd[0]) || 1, ph: 0.2 });
    }
    return out;
  },
  extras(g, S) { },
  // ---------- аппараты ----------
  lightFor(S) {
    const { Sx, Sy, B, v } = S; const lit = v.sunLit != null ? v.sunLit : 1;
    const inAtm = B.atm ? S.dens : 0; const dayK = B.atm ? smooth(-0.2, 0.25, Sy) : 1;
    const k = lit * (B.atm ? 1 - (1 - dayK) * (0.4 + 0.6 * inAtm) : 1);
    const L = { x: Sx * 0.85 * k, y: Sy * 0.85 * k, z: 0.55 * (0.5 + 0.5 * k), amb: 0.14 + 0.1 * inAtm + 0.04 };
    const n = Math.hypot(L.x, L.y, L.z) || 1; if (k < 0.02) { L.x = 0; L.y = 0; L.z = 0.3; } else { L.x /= n; L.y /= n; L.z /= n; }
    return L;
  },
  vessels(g, S) {
    const { W, v, B, ppmV, cx, cyC, psi } = S; const L = this.lightFor(S);
    // другие аппараты рядом
    const tmp = [0, 0];
    const others = W.vessels.filter(o => o.alive && o !== v && o.body === v.body && o.parts.length);
    S.markList = [];
    for (const o of others) {
      if (o.dirty || !o.mp) vesselRefresh(o);
      S.toScr(o.x, o.y, tmp); const d = Math.hypot(o.x - v.x, o.y - v.y);
      const po = o.a + PI / 2 - S.phi; const ext = Math.max(2, o.mp.R) * ppmV + 10;
      if (tmp[0] > -ext && tmp[0] < g.w + ext && tmp[1] > -ext && tmp[1] < g.h + ext) {
        const T = { ox: tmp[0], oy: tmp[1], ppm: ppmV, psi: po, cx: o.mp.cx, cy: o.mp.cy };
        Art.flames(o, g, T, { dens: S.dens }, S.t); Art.vessel(o, g, T, L); Art.chutes(o, g, T);
      } else if (d < 80000 && !o.debris) S.markList.push({ o, x: tmp[0], y: tmp[1], d });
    }
    if (!v.parts.length) return;
    const T = { ox: cx, oy: cyC, ppm: ppmV, psi, cx: v.mp.cx, cy: v.mp.cy };
    S.T = T;
    Art.flames(v, g, T, { dens: S.dens }, S.t);
    Art.vessel(v, g, T, L);
    Art.chutes(v, g, T);
  },
  // ---------- маркеры скорости ----------
  markers(g, S) {
    const { v, B, phi, cph, sph, cx, cyC, H } = S; if (!S.T) return;
    const Rm = H * 0.22;
    const surfMode = B.atm && S.alt < B.atm.top * 0.9 || v.mode === 'landed' || S.alt < 3000;
    let vx = v.vx, vy = v.vy;
    if (surfMode) { vx += B.rotW * v.y; vy -= B.rotW * v.x; }
    const sp = Math.hypot(vx, vy);
    if (sp > 0.5) {
      const X = (-vx * sph + vy * cph) / sp, Y = (vx * cph + vy * sph) / sp;
      const px = cx + X * Rm, py = cyC - Y * Rm;
      const c = rgb(120, 255, 140);
      g.ring(px, py, 3, c); g.px(px, py, c); g.line(px, py - 3, px, py - 5, c); g.line(px - 3, py, px - 5, py, c); g.line(px + 3, py, px + 5, py, c);
      const rx = cx - X * Rm, ry = cyC + Y * Rm, c2 = rgb(255, 120, 100);
      g.ring(rx, ry, 3, c2); g.line(rx - 2, ry - 2, rx + 2, ry + 2, c2); g.line(rx - 2, ry + 2, rx + 2, ry - 2, c2);
    }
    // стрелки к отдалённым аппаратам
    for (const m of (S.markList || []).slice(0, 6)) {
      const ang = Math.atan2(m.y - cyC, m.x - cx); const px = clamp(cx + Math.cos(ang) * (g.w * 0.42), 6, g.w - 6), py = clamp(cyC + Math.sin(ang) * (H * 0.4), 6, g.h - 6);
      g.tri(px + Math.cos(ang) * 4, py + Math.sin(ang) * 4, px - Math.sin(ang) * 3, py + Math.cos(ang) * 3, px + Math.sin(ang) * 3, py - Math.cos(ang) * 3, rgb(120, 200, 255));
    }
  }
};
