'use strict';
// ============ Рисование деталей: каждый пиксель считается по слоям рисунка детали (пиксель-арт с затенением) ============
const Art = {
  RAMP: null, OUT: 0, scratch: null, sid: null,
  init() {
    const R = (a) => a.map(hex);
    this.RAMP = {
      white: R(['#f4f4ef', '#d3d6d8', '#a5abb2', '#6c737c']), steel: R(['#d2d7de', '#a3abb6', '#757e8a', '#4a515c']), dark: R(['#6a6f79', '#474b54', '#2f3238', '#1b1d22']),
      grey: R(['#c2c5c9', '#979a9f', '#6d7076', '#484b50']), gold: R(['#ffe28a', '#dcb046', '#a87d22', '#6b4a12']), orange: R(['#ffa458', '#e3742a', '#b0501a', '#6e2f0c']),
      copper: R(['#eaa07a', '#bf6e44', '#8b4a2b', '#5a2d18']), blue: R(['#7db4ff', '#4482e0', '#2c58a6', '#1a346c']), solar: R(['#4a72d8', '#3358b4', '#243f86', '#16264f'])
    };
    this.OUT = rgb(8, 10, 18);
  },
  // слой → {k: освещённость-нормаль cu, sph:[nx,ny,nz], ...} или null
  hit(Ly, u, v, p, pwid) {
    const g = Ly.g;
    switch (Ly.t) {
      case 'r': { const x0 = Math.min(g[0], g[2]), x1 = Math.max(g[0], g[2]), y0 = Math.min(g[1], g[3]), y1 = Math.max(g[1], g[3]); if (u < x0 || u > x1 || v < y0 || v > y1) return null; return { cu: (u - (x0 + x1) / 2) / ((x1 - x0) / 2 || 1), cv: (v - (y0 + y1) / 2) / ((y1 - y0) / 2 || 1) }; }
      case 't': {
        let xl, xr, hwTop, yTop, yBot = -0.5;
        if (Ly.o && Ly.o.adapt) { const top = (p.w2 || p.w) / pwid / 2; if (v < -0.5 || v > 0.5) return null; const hw = (p.w / pwid / 2) + (top - p.w / pwid / 2) * (v + 0.5); if (Math.abs(u) > hw) return null; return { cu: u / hw, cv: v }; }
        if (g[0] >= 0 && g[0] < g[2]) { // сужение: [полуширина вверху, y вверху, полуширина внизу, y внизу]
          const hwA = g[0], yA = g[1], hwB = g[2], yB = g[3]; if (v > Math.max(yA, yB) || v < Math.min(yA, yB)) return null; const t = (v - yB) / ((yA - yB) || 1); const hw = hwB + (hwA - hwB) * t; if (Math.abs(u) > hw) return null; return { cu: u / hw, cv: v };
        }
        xl = g[0]; xr = g[2]; yTop = g[1]; hwTop = g[3]; if (v > yTop || v < yBot) return null;
        const t = (v - yBot) / ((yTop - yBot) || 1), cx = (xl + xr) / 2, hwB = (xr - xl) / 2, hw = hwB + (hwTop - hwB) * t; if (Math.abs(u - cx) > hw) return null; return { cu: (u - cx) / hw, cv: v };
      }
      case 'e': { const nx = (u - g[0]) / g[2], ny = (v - g[1]) / g[3]; const d = nx * nx + ny * ny; if (d > 1) return null; return { cu: nx, cv: ny, sph: Math.sqrt(1 - d) }; }
      case 'p': {
        const n = g.length / 2; let inside = false, xl = 1e9, xr = -1e9;
        for (let i = 0, j = n - 1; i < n; j = i++) {
          const xi = g[i * 2], yi = g[i * 2 + 1], xj = g[j * 2], yj = g[j * 2 + 1];
          if ((yi > v) !== (yj > v)) { const x = xi + (v - yi) / (yj - yi) * (xj - xi); if (x < xl) xl = x; if (x > xr) xr = x; if (u < x) inside = !inside; }
        }
        if (!inside) return null; const hw = (xr - xl) / 2 || 1; return { cu: (u - (xl + xr) / 2) / hw, cv: v, sph: Ly.s === 's' ? Math.sqrt(Math.max(0, 1 - Math.pow((u - (xl + xr) / 2) / hw, 2))) : 0 };
      }
    }
    return null;
  },
  // цвет пикселя детали; (u,v) в единичных координатах, lx,ly — свет в системе детали
  shadePx(p, Ly, h, u, v, L, x, y, ppm, wy) {
    const ramp = this.RAMP[Ly.c] || this.RAMP.steel; let lf;
    const kind = Ly.s;
    if (kind === 's' && h.sph != null) { const nx = h.cu, ny = h.cv, nz = h.sph; lf = Math.max(0, nx * L.x + ny * L.y + nz * L.z); }
    else if (kind === 'c') { const cu = h.cu, nz = Math.sqrt(Math.max(0, 1 - cu * cu)); lf = Math.max(0, cu * L.x + nz * L.z + 0.18 * L.y); }
    else lf = 0.62 + 0.2 * L.z - 0.1;
    lf = lf * (1 - L.amb) + L.amb;
    const bayer = ((x & 1) + ((y & 1) << 1)) * 0.0625 - 0.04;
    lf += bayer;
    let col = lf > 0.8 ? ramp[0] : lf > 0.52 ? ramp[1] : lf > 0.28 ? ramp[2] : ramp[3];
    const o = Ly.o;
    if (o) {
      if (o.band) { const pitch = o.band[0], th = Math.max(o.band[1], 0.8 / ppm); const m = ((wy % pitch) + pitch) % pitch; if (m < th) { const r2 = this.RAMP[o.band[2]] || ramp; col = lf > 0.52 ? r2[1] : r2[2]; } }
      if (o.grid) {
        if (p.d.fin && p.d.fin.grid) { const gu = ((u + 0.5) % o.grid[0] + o.grid[0]) % o.grid[0], gv = ((v + 0.5) % o.grid[1] + o.grid[1]) % o.grid[1]; if (gu > o.grid[0] * 0.35 && gv > o.grid[1] * 0.35) return 0; }
        else { const gu = ((u + 0.5) % o.grid[0] + o.grid[0]) % o.grid[0], gv = ((v + 0.5) % o.grid[1] + o.grid[1]) % o.grid[1]; if (gu < o.grid[0] * 0.09 || gv < o.grid[1] * 0.12) col = this.RAMP.steel[1]; }
      }
      if (o.glow && p.on && p.fl > 0.02) col = mix(col, rgb(255, 170, 70), 0.55 * Math.min(1, p.fl + 0.3));
      else if (o.glow && p.temp > 500) col = mix(col, rgb(255, 110, 40), Math.min(0.8, (p.temp - 500) / 900));
      if (o.rim && v < -0.3) col = ramp[1];
      if (o.spokes) { const q = Math.atan2(v, u) * 4; if (Math.abs(Math.sin(q)) < 0.2) col = this.RAMP.steel[1]; }
    }
    if (p.temp > 620 && !(o && o.glow)) { const k = Math.min(0.85, (p.temp - 620) / 1100); col = mix(col, rgb(255, 120 + (p.temp > 1500 ? 80 : 0), 50), k); }
    return col;
  },
  // Рисует все детали аппарата. T: {ox, oy, ppm, psi, cx, cy}; L: {x,y,z,amb} свет в экранной системе
  vessel(v, g, T, L, opts) {
    opts = opts || {};
    const W = g.w, H = g.h;
    if (!this.scratch || this.scratch.length < W * H) { this.scratch = new Uint32Array(W * H); this.sid = new Int16Array(W * H); }
    const S = this.scratch, ID = this.sid;
    const cps = Math.cos(T.psi), sps = Math.sin(T.psi), ppm = T.ppm;
    let bx0 = 1e9, by0 = 1e9, bx1 = -1e9, by1 = -1e9;
    const tf = (px, py) => { const dx = px - T.cx, dy = py - T.cy; return [T.ox + (dx * cps - dy * sps) * ppm, T.oy - (dx * sps + dy * cps) * ppm]; };
    const list = [];
    for (const p of v.parts) {
      if (p.shielded && !opts.all) continue;
      const hw = pw(p) / 2, hh = p.h / 2, ang = (p.rot || 0) * Math.PI / 2, ca = Math.cos(ang), sa = Math.sin(ang);
      // габарит повернутой детали (в системе аппарата)
      let ex = Math.abs(hw * ca) + Math.abs(hh * sa), ey = Math.abs(hw * sa) + Math.abs(hh * ca);
      let fx = 0;   // сложенная панель прижата к корпусу (раньше «висела» на месте раскрытой и казалась оторванной)
      if (p.d.solar && p.d.solar.deploy && !p.st.deployed) { ex = Math.min(ex, .2); if (!((p.rot || 0) & 1)) fx = -(p.x < 0 ? -1 : 1) * Math.max(0, hw - .2); }
      const c = [tf(p.x + fx - ex, p.y - ey), tf(p.x + fx + ex, p.y - ey), tf(p.x + fx + ex, p.y + ey), tf(p.x + fx - ex, p.y + ey)];
      let x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9; for (const q of c) { x0 = Math.min(x0, q[0]); x1 = Math.max(x1, q[0]); y0 = Math.min(y0, q[1]); y1 = Math.max(y1, q[1]); }
      if (x1 < 0 || y1 < 0 || x0 > W || y0 > H) continue;
      list.push({ p, fx, x0: Math.max(0, Math.floor(x0)), x1: Math.min(W - 1, Math.ceil(x1)), y0: Math.max(0, Math.floor(y0)), y1: Math.min(H - 1, Math.ceil(y1)), ang });
      bx0 = Math.min(bx0, x0); by0 = Math.min(by0, y0); bx1 = Math.max(bx1, x1); by1 = Math.max(by1, y1);
    }
    if (!list.length) return;
    bx0 = Math.max(0, Math.floor(bx0) - 2); by0 = Math.max(0, Math.floor(by0) - 2); bx1 = Math.min(W - 1, Math.ceil(bx1) + 2); by1 = Math.min(H - 1, Math.ceil(by1) + 2);
    for (let y = by0; y <= by1; y++) { const o = y * W; for (let x = bx0; x <= bx1; x++) { S[o + x] = 0; ID[o + x] = 0; } }
    let pid = 0;
    for (const it of list) {
      const p = it.p, d = p.d; pid++;
      const ang = it.ang, ca = Math.cos(-ang), sa = Math.sin(-ang);
      const pwid = pw(p), hgt = p.h; let wScale = 1;
      if ((d.solar && d.solar.deploy && !p.st.deployed) || (d.leg && !p.st.deployed) || (d.ant && d.ant.deploy && !p.st.deployed)) wScale = Math.min(1, 0.22 / Math.max(0.2, p.w * 0.25 + 0.05));
      // свет в системе детали
      const tot = T.psi + ang; const lcx = Math.cos(-tot), lsx = Math.sin(-tot);
      const Ll = { x: (L.x * lcx - L.y * lsx) * (p.flip ? -1 : 1), y: L.x * lsx + L.y * lcx, z: L.z, amb: L.amb };
      const cluster = (d.eng && p.n > 1) ? Math.min(p.n, 7) : 1;
      const layers = d.art;
      for (let y = it.y0; y <= it.y1; y++) {
        for (let x = it.x0; x <= it.x1; x++) {
          const X = (x + 0.5 - T.ox) / ppm, Y = (T.oy - (y + 0.5)) / ppm;
          const dx = X * cps + Y * sps + T.cx - p.x - it.fx, dy = -X * sps + Y * cps + T.cy - p.y;
          let lx = dx * ca - dy * sa, ly = dx * sa + dy * ca; if (p.flip) lx = -lx;
          let u = lx / pwid, v = ly / hgt; const wy = ly + hgt / 2;
          if (v < -0.5 || v > 0.5 || u < -0.5 / wScale || u > 0.5 / wScale) continue;
          u *= wScale;
          if (cluster > 1) { const cw = 1 / cluster; const ui = Math.floor((u + 0.5) / cw); u = ((u + 0.5) - ui * cw) / cw - 0.5; if (ui < 0 || ui >= cluster) continue; }
          for (let li = layers.length - 1; li >= 0; li--) {
            const Ly = layers[li]; const h = this.hit(Ly, u, v, p, pwid); if (!h) continue;
            const col = this.shadePx(p, Ly, h, u, v, Ll, x, y, ppm * (pwid / (cluster || 1)) / pwid, wy);
            if (col) { S[y * W + x] = col; ID[y * W + x] = pid; }
            break;
          }
        }
      }
    }
    // швы между деталями + контур
    const OUT = this.OUT;
    for (let y = by0; y <= by1; y++) {
      for (let x = bx0; x <= bx1; x++) {
        const i = y * W + x, id = ID[i];
        if (id) {
          let col = S[i];
          const l = x > 0 ? ID[i - 1] : 0, u = y > 0 ? ID[i - W] : 0;
          if ((l && l !== id) || (u && u !== id)) col = shade(col, 0.62);
          g.buf[i] = col;
        } else {
          const nb = (x > 0 && ID[i - 1]) || (x < W - 1 && ID[i + 1]) || (y > 0 && ID[i - W]) || (y < H - 1 && ID[i + W]);
          if (nb) g.buf[i] = OUT;
        }
      }
    }
  },
  // ---- факелы двигателей ----
  FL: {
    kerolox: [[255, 244, 200], [255, 176, 64], [255, 100, 30]], methalox: [[236, 244, 255], [140, 184, 255], [90, 130, 230]], hydrolox: [[235, 240, 255], [150, 180, 255], [110, 140, 240]],
    hypergolic: [[255, 236, 190], [255, 190, 110], [230, 130, 60]], mono: [[255, 240, 215], [255, 215, 170], [210, 170, 140]], solid: [[255, 250, 220], [255, 190, 80], [255, 110, 40]],
    xenon: [[220, 235, 255], [160, 190, 255], [120, 140, 255]], lh2: [[255, 235, 245], [255, 190, 220], [240, 150, 190]]
  },
  flames(v, g, T, env, t) {
    const cps = Math.cos(T.psi), sps = Math.sin(T.psi), ppm = T.ppm;
    const tf = (px, py) => { const dx = px - T.cx, dy = py - T.cy; return [T.ox + (dx * cps - dy * sps) * ppm, T.oy - (dx * sps + dy * cps) * ppm]; };
    const vac = 1 - clamp(env.dens, 0, 1);
    for (const p of v.parts) {
      const e = p.d.eng; if (!e || !p.on || !(p.fl > 0.02) || p.dead) continue;
      if (e.rcs) continue;
      const ang = (p.rot || 0) * Math.PI / 2; const nx = Math.sin(ang), ny = -Math.cos(ang);   // направление факела в системе аппарата
      const gim = (v.gimS || 0) * (e.gim || 0) * Math.PI / 180; const cg = Math.cos(gim), sg = Math.sin(gim);
      const dxg = nx * cg - ny * sg, dyg = nx * sg + ny * cg;
      const w = (pw(p) / (p.n > 1 ? Math.min(p.n, 7) * 0.92 : 1)) * (e.solid ? 0.6 : 0.78);
      const ex = p.x + nx * p.h * 0.5, ey = p.y + ny * p.h * 0.5;
      const lenM = (e.solid ? 5 : 3.6) * w * (0.35 + 1.5 * Math.min(1, p.fl)) * (1 + 2.6 * vac) * (e.IspV > 400 ? 0.8 : 1) * (e.power ? 0.15 : 1);
      const widM = w * (0.62 + 1.0 * vac) * (e.power ? 0.15 : 1);
      const pal = this.FL[e.prop] || this.FL.kerolox;
      const faint = (e.prop === 'hydrolox' || e.prop === 'lh2') ? (0.25 + 0.4 * vac) : e.prop === 'hypergolic' ? 0.55 : 1;
      const nCl = p.n > 1 ? Math.min(p.n, 7) : 1;
      for (let k = 0; k < nCl; k++) {
        const off = nCl > 1 ? ((k + 0.5) / nCl - 0.5) * pw(p) : 0;
        const cx = (p.x + (-ny) * off) + (nx * p.h * 0.5), cy = (p.y + (nx) * off) + (ny * p.h * 0.5);
        const base = tf(cx, cy);
        const fl = 0.86 + 0.24 * Math.sin(t * 40 + k * 2.1 + p.id) + 0.1 * Math.sin(t * 77 + k);
        const L = Math.max(2, lenM * ppm * fl), Wd = Math.max(1.5, widM * ppm * 0.5);
        const dirx = dxg * cps - dyg * sps, diry = -(dxg * sps + dyg * cps);        // экранное направление (y вниз)
        const tipx = base[0] + dirx * L, tipy = base[1] + diry * L, px_ = -diry, py_ = dirx;
        const lay = [[1, pal[2], 0.55 * faint], [0.66, pal[1], 0.85 * faint], [0.34, pal[0], 1 * faint]];
        for (const [s, c, a] of lay) {
          const lw = Wd * (s + 0.15), l2 = L * s;
          const tx = base[0] + dirx * l2, ty = base[1] + diry * l2;
          g.tri(base[0] + px_ * lw, base[1] + py_ * lw, base[0] - px_ * lw, base[1] - py_ * lw, tx, ty, 0, (x, y) => { g.add(x, y, c[0] * a * 0.9, c[1] * a * 0.9, c[2] * a * 0.9); });
        }
        // алмазы Маха в плотном воздухе
        if (env.dens > 0.15 && L > 8 && !e.solid && e.prop !== 'xenon') { for (let m = 1; m <= 3; m++) { const q = m * 0.24; const mx = base[0] + dirx * L * q, my = base[1] + diry * L * q; g.disc(mx, my, Math.max(1, Wd * 0.18 * (1 - q)), rgb(255, 255, 235)); } }
      }
    }
  },
  // парашюты
  chutes(v, g, T) {
    const cps = Math.cos(T.psi), sps = Math.sin(T.psi), ppm = T.ppm;
    for (const p of v.parts) {
      if (!p.d.chute || !p.st.chute || p.st.chute === 'arm' || p.st.chute === 'cut' || p.dead) continue;
      const k = p.st.chute === 'open' ? 1 : clamp((p.st.ct || 0) / p.d.chute.deployT, 0.1, 1);
      const D = p.d.chute.D * 0.9 * k, Hh = D * 0.45;
      const dx = p.x - T.cx, dy = p.y - T.cy; const bx = T.ox + (dx * cps - dy * sps) * ppm, by = T.oy - (dx * sps + dy * cps) * ppm;
      // купол: направлен «вверх» экрана (против потока) — в системе мира это «вверх»; рисуем над аппаратом
      const len = (D * 1.2 + 2) * ppm * 0.6 * (0.4 + 0.6 * k); const ux = Math.sin(T.psi) * 0, uy = -1;
      const cx = bx, cy = by - len; const rw = D * ppm * 0.5, rh = Hh * ppm;
      for (let i = -1; i <= 1; i += 2) g.line(bx, by, cx + i * rw * 0.9, cy + rh * 0.3, rgb(220, 220, 210));
      for (let y = -rh; y <= 0; y++) { const q = 1 - (y / -rh) * (y / -rh); const half = rw * Math.sqrt(Math.max(0, q)); for (let x = -half; x <= half; x++) { const st = Math.floor((x + half) / Math.max(2, half / 3)) & 1; g.px(cx + x, cy + y, st ? rgb(255, 120, 40) : rgb(245, 245, 240)); } }
    }
  }
};
