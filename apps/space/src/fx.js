'use strict';
// ============ Эффекты: взрывы, пыль, песок, дым, брызги, струи, нагрев при входе ============
// Всё зависит от настоящей среды: плотность атмосферы (сопротивление, всплытие огня), кислород (огненный шар и дым),
// гравитация тела (баллистика пыли и обломков), вакуум (пыль летит дугами и не оседает, огонь гаснет мгновенно).
const FX = {
  P: [], max: 1600, shake: 0, shx: 0, shy: 0, glow: 0, body: null,
  clear() { this.P.length = 0; this.shake = 0; },
  env(W, B, x, y) {
    const r = Math.hypot(x, y), alt = r - B.R; const A = B.atm;
    const rho = A ? (alt > A.top * 1.5 ? 0 : A.dens(Math.max(alt, 0))) : 0;
    return { r, alt, rho, o2: !!(A && A.o2), g: B.gm / (r * r), rx: x / r, ry: y / r, k: A ? clamp(rho / 1.225, 0, 8) : 0 };
  },
  add(p) { if (this.P.length >= this.max) this.P.shift(); this.P.push(p); return p; },
  groundCol(B, k) { const pc = palChans(B); if (pc && pc[0]) { const c = pc[0][k == null ? 2 : k]; return rgb(c[0], c[1], c[2]); } return B.color || rgb(150, 140, 130); },
  // ---------- обработка событий мира ----------
  onEvent(W, e, A) {
    const B = A ? W.U.byId[A.body] : null; if (!B) return;
    switch (e.t) {
      case 'boom': if (e.body === B.id) this.explosion(W, B, e); break;
      case 'impact': if (e.v && e.v.body === B.id) this.impact(W, B, e); break;
      case 'scrape': if (e.v && e.v.body === B.id) this.scrape(W, B, e); break;
      case 'ign': if (e.p && e.v === A) this.ignition(W, B, e); break;
      case 'sep': if (e.v && e.v.body === B.id) this.sepPuff(W, B, e); break;
    }
  },
  // деталь без топлива сломалась (опора, панель, антенна, пустой бак): щепки, искры и пыль — огненного шара нет
  structural(W, B, e, ev) {
    const vac = ev.rho < 1e-4, size = Math.max(0.25, e.size || 1), vx = e.vx || 0, vy = e.vy || 0, ux = ev.rx, uy = ev.ry, tx = -uy, ty = ux;
    this.add({ k: 'flash', x: e.x, y: e.y, vx, vy, age: 0, life: 0.07, size: Math.min(1.8, size * 0.5), l: 1 });
    const g = Math.max(0.3, ev.g), nD = Math.min(26, Math.round(4 + size * 3.5));
    const cols = [rgb(214, 218, 224), rgb(150, 156, 166), rgb(88, 94, 104), rgb(60, 80, 150), rgb(236, 200, 90)];
    for (let i = 0; i < nD; i++) {
      const a = (Math.random() - 0.5) * 2.4, sp = (3 + Math.random() * 14) * (0.7 + 0.3 * Math.min(2, size)), c = Math.cos(a), sn = Math.sin(a);
      this.add({ k: 'deb', x: e.x + (Math.random() - 0.5) * size * 0.4, y: e.y + (Math.random() - 0.5) * size * 0.4, vx: vx * 0.3 + (ux * c + tx * sn) * sp, vy: vy * 0.3 + (uy * c + ty * sn) * sp, age: 0, life: 5 + Math.random() * 7, size: 0.1 + Math.random() * 0.22 * Math.min(2, size), col: cols[(Math.random() * cols.length) | 0], l: 1, rot: Math.random() * TAU, spin: (Math.random() - 0.5) * 14, drag: 0.08 });
    }
    for (let i = 0; i < 8; i++) { const a = (Math.random() - 0.5) * 3, sp = 6 + Math.random() * 24 / Math.sqrt(g), c = Math.cos(a), sn = Math.sin(a); this.add({ k: 'spark', x: e.x, y: e.y, vx: vx * 0.3 + (ux * c + tx * sn) * sp, vy: vy * 0.3 + (uy * c + ty * sn) * sp, age: 0, life: 0.25 + Math.random() * 0.5, size: 0.08, l: 1, drag: ev.rho > 0.05 ? 1.2 : 0 }); }
    if (!vac) for (let i = 0; i < 3; i++) this.add({ k: 'smoke', x: e.x, y: e.y, vx: vx * 0.5 + ux * 2 + (Math.random() - 0.5) * 3, vy: vy * 0.5 + uy * 2 + (Math.random() - 0.5) * 3, age: 0, life: 1.5 + Math.random() * 1.5, size: Math.min(1.2, size * 0.5), grow: 0.3, buoy: 0.4, l: 0, dark: 0.3, drag: 1.5 });
    this.shake = Math.max(this.shake, Math.min(4, 1 + size * 0.4));
    if (typeof Sfx !== 'undefined' && Sfx.clunk) Sfx.clunk();
    if (ev.alt < 6 + size && B.landable) this.dustBurst(W, B, e.x, e.y, ev, Math.min(14, 3 + size * 2), 3 + size, 0.7);
  },
  explosion(W, B, e) {
    const ev = this.env(W, B, e.x, e.y); const fuel = e.fuel || 0, size = Math.max(0.3, e.size || 1);
    if (fuel < 3 && !e.solid) return this.structural(W, B, e, ev);
    const rho = ev.rho, vacuum = rho < 1e-4, dense = rho > 1;
    const burn = e.ox ? 1 : (fuel > 0 ? 0.35 : 0.12);                 // есть собственный окислитель — огненный шар и без воздуха
    const atmK = vacuum ? 0.4 : (dense ? 0.55 : 1);
    const Rf = (0.9 * Math.cbrt(fuel + 10) + size * 0.7) * (e.solid ? 0.8 : 1) * Math.sqrt(burn) * (vacuum ? 1.5 : 1) * atmK;
    const vx = e.vx || 0, vy = e.vy || 0, gx = -ev.rx, gy = -ev.ry;
    const nF = Math.min(70, Math.round(8 + Math.cbrt(fuel + 1) * 5)) * (vacuum ? 0.7 : 1);
    const flash = this.add({ k: 'flash', x: e.x, y: e.y, vx, vy, age: 0, life: vacuum ? 0.12 : 0.18, size: Rf * 1.5, l: 1 });
    this.shake = Math.max(this.shake, Math.min(14, 3 + Math.cbrt(fuel) * 0.8)); this.glow = Math.max(this.glow, Math.min(1, 0.4 + Rf / 40));
    if (typeof Sfx !== 'undefined') Sfx.boom(Math.min(1, (fuel + 20) / 4000), rho, W.active ? Math.hypot(e.x - W.active.x, e.y - W.active.y) : 0);
    for (let i = 0; i < nF; i++) {
      const a = Math.random() * TAU, sp = (vacuum ? 40 + Math.random() * 180 : 4 + Math.random() * 14 * Math.sqrt(Rf));
      const rr = Math.random() * Rf * 0.5;
      this.add({ k: 'fire', x: e.x + Math.cos(a) * rr, y: e.y + Math.sin(a) * rr, vx: vx + Math.cos(a) * sp, vy: vy + Math.sin(a) * sp, age: 0, life: vacuum ? 0.25 + Math.random() * 0.45 : 0.9 + Math.random() * 1.9, size: Rf * (0.25 + Math.random() * 0.4), grow: vacuum ? 0.5 : 0.25, buoy: vacuum ? 0 : (e.ox && ev.o2 ? 1.4 : 0.6), l: 1, drag: dense ? 3 : 1.2 });
    }
    if (!vacuum && fuel > 5) {      // дым: тем гуще, чем меньше кислорода сгорает (керосин/твёрдое топливо — сажа)
      const nS = Math.round(10 + Math.cbrt(fuel) * 4), sooty = (e.solid || !ev.o2) ? 0.9 : 0.6;
      for (let i = 0; i < nS; i++) {
        const a = Math.random() * TAU, sp = 2 + Math.random() * 8 * Math.sqrt(Rf);
        this.add({ k: 'smoke', x: e.x + Math.cos(a) * Rf * 0.3, y: e.y + Math.sin(a) * Rf * 0.3, vx: vx * 0.7 + Math.cos(a) * sp, vy: vy * 0.7 + Math.sin(a) * sp, age: 0, life: 4 + Math.random() * 7, size: Rf * (0.3 + Math.random() * 0.4), grow: 0.22, buoy: 0.5 + ev.k * 0.3, l: 0, dark: sooty, drag: 1.2 });
      }
    }
    if (rho > 0.005) this.add({ k: 'ring', x: e.x, y: e.y, vx, vy, age: 0, life: 0.5, size: Rf * 0.4, grow: Rf * 5 + 20, l: 1 });
    // обломки (цвета деталей)
    const nD = Math.min(46, Math.round(6 + size * 4));
    const cols = [rgb(214, 218, 224), rgb(150, 156, 166), rgb(88, 94, 104), rgb(230, 130, 60), rgb(40, 44, 52)];
    for (let i = 0; i < nD; i++) {
      const a = Math.random() * TAU, sp = (10 + Math.random() * 45) * (vacuum ? 1.3 : 1) * Math.min(2, 0.6 + Rf * 0.05);
      this.add({ k: 'deb', x: e.x, y: e.y, vx: vx + Math.cos(a) * sp, vy: vy + Math.sin(a) * sp, age: 0, life: 6 + Math.random() * 8, size: 0.15 + Math.random() * 0.5 * Math.min(2, size * 0.3), col: cols[(Math.random() * cols.length) | 0], l: 1, rot: Math.random() * TAU, spin: (Math.random() - 0.5) * 12, drag: 0.08 });
    }
    for (let i = 0; i < 18; i++) { const a = Math.random() * TAU, sp = 25 + Math.random() * 110; this.add({ k: 'spark', x: e.x, y: e.y, vx: vx + Math.cos(a) * sp, vy: vy + Math.sin(a) * sp, age: 0, life: 0.4 + Math.random() * 1.0, size: 0.1, l: 1, drag: 0.4 }); }
    if (ev.alt < Rf * 3 + 20 && B.landable) this.dustBurst(W, B, e.x, e.y, ev, Math.min(60, 10 + Rf * 2), 14 + Rf, 1);
  },
  // облако пыли у поверхности: в вакууме летит баллистическими дугами, в воздухе вздымается и висит
  dustBurst(W, B, x, y, ev, n, speed, up) {
    const th = Math.atan2(y, x) - bodyRot(B, W.ut), gr = B.R + (B.T ? terrH(W, B, th) : 0);
    const r0 = Math.hypot(x, y); const rx = x / r0, ry = y / r0, tx = -ry, ty = rx; const gx = rx * gr, gy = ry * gr;
    const col = this.groundCol(B, 2), col2 = this.groundCol(B, 0), wet = B.sea && (B.T ? terrH(W, B, th) < B.sea.level : false);
    const vac = ev.rho < 1e-3;           // вакуум: зёрна реголита летят баллистическими дугами, облака не образуют
    for (let i = 0; i < n; i++) {
      const dir = Math.random() < 0.5 ? -1 : 1, sp = speed * (0.25 + Math.random() * 0.9), upv = sp * (vac ? 0.04 + Math.random() * 0.3 : 0.12 + Math.random() * 0.5) * (up || 1);
      this.add({ k: wet ? 'water' : 'dust', x: gx + tx * (Math.random() - 0.5) * 1.2 + rx * 0.05, y: gy + ty * (Math.random() - 0.5) * 1.2 + ry * 0.05, vx: tx * dir * sp + rx * upv, vy: ty * dir * sp + ry * upv, age: 0, life: vac ? 2 + Math.random() * 4 : 2 + Math.random() * 4, size: vac ? 0.03 + Math.random() * 0.07 : 0.25 + Math.random() * 0.6, col: Math.random() < 0.5 ? col : col2, l: 0, drag: vac ? 0 : (wet ? 0.12 : 2.2), grow: vac ? 0 : 0.4 });
    }
  },
  impact(W, B, e) {
    const ev = this.env(W, B, e.x, e.y), vn = e.vn || 0;
    if (typeof Sfx !== 'undefined') Sfx.thud(Math.min(1, vn / 40), e.water, ev.rho);
    if (e.big) return;
    const n = Math.min(40, Math.round(4 + vn * 1.8));
    if (e.water) {
      const r0 = Math.hypot(e.x, e.y), rx = e.x / r0, ry = e.y / r0, tx = -ry, ty = rx;
      for (let i = 0; i < n; i++) { const dir = Math.random() < 0.5 ? -1 : 1, sp = (2 + Math.random() * vn * 0.5), up = (3 + Math.random() * vn * 0.9) * (1 - Math.random() * 0.5); this.add({ k: 'water', x: e.x, y: e.y, vx: tx * dir * sp + rx * up, vy: ty * dir * sp + ry * up, age: 0, life: 2 + Math.random() * 2, size: 0.12 + Math.random() * 0.18, col: Math.random() < 0.3 ? rgb(240, 248, 255) : rgb(120, 170, 235), l: 1, drag: 0.15 }); }
      this.add({ k: 'ring', x: e.x, y: e.y, vx: 0, vy: 0, age: 0, life: 0.9, size: 0.6, grow: 5 + vn, l: 0, water: 1 });
    } else {
      this.dustBurst(W, B, e.x, e.y, ev, n, 2 + vn * 0.8, 1);
      if (vn > 5 && !(e.p && e.p.d && e.p.d.leg && vn < 9)) { const nx = e.nx || ev.rx, ny = e.ny || ev.ry; for (let i = 0; i < Math.min(8, vn * 0.6); i++) { const a = (Math.random() - 0.5) * 2.6, sp = 2 + Math.random() * vn * 0.6, c = Math.cos(a), sn = Math.sin(a); this.add({ k: 'spark', x: e.x, y: e.y, vx: (e.v ? e.v.vx : 0) * 0.1 + (nx * c - ny * sn) * sp, vy: (e.v ? e.v.vy : 0) * 0.1 + (nx * sn + ny * c) * sp, age: 0, life: 0.25 + Math.random() * 0.4, size: 0.08, l: 1, drag: ev.rho > 0.05 ? 1.5 : 0 }); } }
    }
    this.shake = Math.max(this.shake, Math.min(8, vn * 0.35));
  },
  scrape(W, B, e) {
    if (Math.random() > 0.3) return; const ev = this.env(W, B, e.x, e.y), v = e.v;
    const dx = e.dx || 0, dy = e.dy || 0, nx = e.nx || ev.rx, ny = e.ny || ev.ry, vt = e.vt || 0;
    // искры вылетают назад по скольжению и немного вверх от грунта, только у жёсткой детали и при заметной скорости
    if (vt > 6 && (!e.p || !e.p.d || !e.p.d.leg)) this.add({ k: 'spark', x: e.x, y: e.y, vx: v.vx * 0.05 - dx * vt * 0.25 + nx * (1 + Math.random() * 4) + (Math.random() - 0.5) * 3, vy: v.vy * 0.05 - dy * vt * 0.25 + ny * (1 + Math.random() * 4) + (Math.random() - 0.5) * 3, age: 0, life: 0.25 + Math.random() * 0.3, size: 0.08, l: 1, drag: ev.rho > 0.05 ? 1.5 : 0 });
    if (Math.random() < 0.6) this.dustBurst(W, B, e.x, e.y, ev, 1 + (vt > 10 ? 1 : 0), Math.min(8, 1.5 + vt * 0.3), 1);
  },
  ignition(W, B, e) {
    const p = e.p, v = e.v, ex = this.enginePos(v, p); if (!ex) return;
    const ev = this.env(W, B, ex.x, ex.y);
    for (let i = 0; i < 6; i++) this.add({ k: 'fire', x: ex.x, y: ex.y, vx: v.vx + ex.dx * (10 + Math.random() * 20) + (Math.random() - 0.5) * 6, vy: v.vy + ex.dy * (10 + Math.random() * 20) + (Math.random() - 0.5) * 6, age: 0, life: 0.25 + Math.random() * 0.3, size: Math.max(0.4, pw(p) * 0.4), grow: 0.8, buoy: 0, l: 0, drag: 2 });
    if (typeof Sfx !== 'undefined') Sfx.ignite(ev.rho);
  },
  sepPuff(W, B, e) {
    const p = e.p, v = e.v; if (!p) return; const ex = this.enginePos(v, p, true); if (!ex) return;
    for (let i = 0; i < 10; i++) { const a = Math.random() * TAU; this.add({ k: 'spark', x: ex.x, y: ex.y, vx: v.vx + Math.cos(a) * 12, vy: v.vy + Math.sin(a) * 12, age: 0, life: 0.3 + Math.random() * 0.5, size: 0.1, l: 1, drag: 0.5 }); }
    if (typeof Sfx !== 'undefined') Sfx.clunk();
  },
  // положение сопла двигателя в инерциальных координатах и направление струи
  enginePos(v, p, center) {
    if (!v.mp) return null; const ang = (p.rot || 0) * PI / 2, nx = Math.sin(ang), ny = -Math.cos(ang);
    const lx = center ? p.x : p.x + nx * p.h * 0.5, ly = center ? p.y : p.y + ny * p.h * 0.5;
    const ca = Math.cos(v.a), sa = Math.sin(v.a), dx = lx - v.mp.cx, dy = ly - v.mp.cy;
    return { x: v.x + dx * ca - dy * sa, y: v.y + dx * sa + dy * ca, dx: nx * ca - ny * sa, dy: nx * sa + ny * ca };
  },
  // ---------- обновление ----------
  update(W, dt, A) {
    if (!A || !A.alive) return; const B = W.U.byId[A.body];
    if (this.body !== A.body) { this.P.length = 0; this.body = A.body; }
    // события
    if (W.evq.length) { const q = W.evq; W.evq = []; for (const e of q) { this.onEvent(W, e, A); if (typeof UI !== 'undefined' && UI.onEvent) UI.onEvent(e); } }
    if (dt <= 0) return;
    this.shake *= Math.exp(-dt * 6); this.glow *= Math.exp(-dt * 3);
    this.shx = (Math.random() - 0.5) * this.shake; this.shy = (Math.random() - 0.5) * this.shake;
    this.emit(W, B, A, dt);
    const wB = B.rotW, R = B.R, gm = B.gm; const P = this.P;
    let j = 0;
    for (let i = 0; i < P.length; i++) {
      const p = P[i]; p.age += dt; if (p.age >= p.life) continue;
      if (p.k === 'flash' || p.k === 'ring') { P[j++] = p; continue; }
      const r2 = p.x * p.x + p.y * p.y, r = Math.sqrt(r2), g = gm / r2, rx = p.x / r, ry = p.y / r, alt = r - R;
      let rho = 0; if (B.atm && alt < B.atm.top * 1.5) rho = B.atm.dens(Math.max(0, alt));
      let ax = -g * rx, ay = -g * ry;
      if (p.buoy && rho > 1e-4) { const b = p.buoy * Math.min(1, rho / 0.3) * Math.min(2.5, g); ax += rx * b; ay += ry * b; }
      if (rho > 1e-7 && p.drag) {
        const avx = -wB * p.y, avy = wB * p.x; const k = Math.min(0.9, p.drag * (rho / 1.225) * dt * (p.k === 'dust' || p.k === 'smoke' ? 1.6 : 1));
        p.vx += (avx - p.vx) * k; p.vy += (avy - p.vy) * k;
      }
      p.vx += ax * dt; p.vy += ay * dt; p.x += p.vx * dt; p.y += p.vy * dt;
      if (p.grow) p.size += p.grow * dt * (p.k === 'fire' ? 1 + p.size : 1) * (p.k === 'smoke' ? 1.2 : 1);
      if (p.spin) p.rot += p.spin * dt;
      // столкновение с поверхностью
      if (alt < 400 && B.landable && (p.k === 'deb' || p.k === 'dust' || p.k === 'spark' || p.k === 'water' || p.k === 'fire' || p.k === 'smoke')) {
        const th = Math.atan2(p.y, p.x) - bodyRot(B, W.ut); const sr = surfR(W, B, th);
        if (r < sr) {
          if (p.k === 'deb') { const vr = p.vx * rx + p.vy * ry, vt = -p.vx * ry + p.vy * rx; const nvr = Math.abs(vr) * 0.28, nvt = vt * 0.55; p.vx = rx * nvr - ry * nvt; p.vy = ry * nvr + rx * nvt; p.x = rx * (sr + 0.05); p.y = ry * (sr + 0.05); p.spin *= 0.4; if (Math.hypot(nvr, nvt) < 0.4) { p.vx = -wB * p.y; p.vy = wB * p.x; p.spin = 0; p.life = Math.min(p.life, p.age + 6); } }
          else if (p.k === 'water' || p.k === 'spark') continue;
          else { const vr = p.vx * rx + p.vy * ry; p.x = rx * (sr + 0.05); p.y = ry * (sr + 0.05); if (vr < 0) { const vt = -p.vx * ry + p.vy * rx; p.vx = -ry * vt * 0.7; p.vy = rx * vt * 0.7; } if (p.k === 'dust' && rho < 1e-3) { p.vx = -wB * p.y; p.vy = wB * p.x; p.life = Math.min(p.life, p.age + 1.2); } }
        }
      }
      P[j++] = p;
    }
    P.length = j;
  },
  // непрерывные источники: дым и пар из сопел, пыль под двигателями, РСУ, нагрев при входе
  emit(W, B, A, dt) {
    const v = A; if (!v.engines || v.mode === 'rails') return;
    const ev = this.env(W, B, v.x, v.y); const rho = ev.rho;
    this._acc = (this._acc || 0) + dt;
    let nF = 0;
    for (const p of v.engines) {
      if (!p.on || !(p.fl > 0.05) || p.dead) continue; nF++;
      const e = p.d.eng; const ex = this.enginePos(v, p); if (!ex) continue;
      const F = p.flF || 0, n = p.n > 1 ? Math.min(p.n, 7) : 1;
      const wsz = pw(p) / n;
      // дым / пар
      if (rho > 0.02) {
        const rate = (e.solid ? 55 : 26) * Math.min(1.5, Math.sqrt(F / 4e5 + 0.05)) * dt * Math.min(1, rho / 0.4 + 0.2);
        let cnt = rate; while (cnt > 0) {
          if (Math.random() < cnt) {
            const col = (e.prop === 'hydrolox' || e.prop === 'lh2' || e.prop === 'methalox') ? 0.12 : (e.prop === 'kerolox' ? 0.45 : e.solid ? 0.35 : 0.2);
            this.add({ k: 'smoke', x: ex.x + (Math.random() - 0.5) * wsz, y: ex.y + (Math.random() - 0.5) * wsz, vx: v.vx + ex.dx * (18 + Math.random() * 40) + (Math.random() - 0.5) * 6, vy: v.vy + ex.dy * (18 + Math.random() * 40) + (Math.random() - 0.5) * 6, age: 0, life: 1.6 + Math.random() * 2.8, size: wsz * (0.5 + Math.random() * 0.4), grow: 0.3, buoy: 0.3, l: 0, dark: col, drag: 2.2 });
          } cnt -= 1;
        }
      }
      // пыль/песок от струи у поверхности
      if (B.landable && ev.alt < 140 && F > 500) {
        const hit = this.rayGround(W, B, ex, 110);
        if (hit) {
          const q = clamp(1 - hit.d / 110, 0, 1); const nn = (26 * Math.sqrt(F / 1e5 + 0.02) * q * q * dt + Math.random()) | 0;
          const spd = clamp(e.IspV * 0.12 * Math.sqrt(F / (F + 2e5)) * (0.4 + 0.6 * q) * (rho > 0.3 ? 0.35 : 1), 4, 140);
          if (nn > 0) this.dustBurst(W, B, hit.x, hit.y, ev, nn, spd, 0.6);
          if (Math.random() < dt * 3 * q) this.add({ k: 'glow', x: hit.x, y: hit.y, vx: 0, vy: 0, age: 0, life: 0.1, size: wsz * 1.6, l: 0 });
        }
      }
    }
    // реактивные двигатели ориентации
    for (const p of v.rcsList || []) {
      if (!(p.fl > 0.05) || Math.random() > 0.5) continue; const ex = this.enginePos(v, p); if (!ex) continue;
      this.add({ k: 'spark', x: ex.x, y: ex.y, vx: v.vx + ex.dx * (30 + Math.random() * 20), vy: v.vy + ex.dy * (30 + Math.random() * 20), age: 0, life: 0.18 + Math.random() * 0.2, size: 0.06, col: rgb(230, 240, 255), l: 0, drag: rho > 0.05 ? 3 : 0 });
    }
    // входной нагрев: хвост плазмы
    const fl = this.heatLevel(v, ev); v._heat = fl;
    if (fl > 0.12) { const n = Math.min(3, fl * 2 + Math.random()); for (let i = 0; i < n; i++) { const sp = Math.hypot(v.vx + B.rotW * v.y, v.vy - B.rotW * v.x) || 1; const ux = (v.vx + B.rotW * v.y) / sp, uy = (v.vy - B.rotW * v.x) / sp; const rr = (v.mp ? v.mp.R : 3); this.add({ k: 'fire', x: v.x - ux * rr * 0.9 + (Math.random() - 0.5) * rr * 0.6, y: v.y - uy * rr * 0.9 + (Math.random() - 0.5) * rr * 0.6, vx: v.vx - ux * 6, vy: v.vy - uy * 6, age: 0, life: 0.5 + Math.random() * 0.6, size: rr * (0.3 + 0.3 * Math.random()), grow: 0.4, buoy: 0, l: 0, drag: 2.5, plasma: 1 }); } }
  },
  heatLevel(v, ev) { if (!v.air || ev.rho < 1e-7) return 0; const sp = v.sp || 0; return clamp(Math.sqrt(ev.rho) * sp * sp * sp / 3.5e9 - 0.05, 0, 1.6); },
  // луч от сопла вдоль струи до поверхности: (x,y) точки удара, расстояние
  rayGround(W, B, ex, maxD) {
    const rot = bodyRot(B, W.ut); const steps = 14; let prevS = 0;
    for (let i = 1; i <= steps; i++) {
      const s = maxD * i / steps, x = ex.x + ex.dx * s, y = ex.y + ex.dy * s, r = Math.hypot(x, y), th = Math.atan2(y, x) - rot, sr = surfR(W, B, th);
      if (r <= sr) { let lo = prevS, hi = s; for (let k = 0; k < 5; k++) { const m = (lo + hi) / 2, xm = ex.x + ex.dx * m, ym = ex.y + ex.dy * m; if (Math.hypot(xm, ym) <= surfR(W, B, Math.atan2(ym, xm) - rot)) hi = m; else lo = m; } const x2 = ex.x + ex.dx * hi, y2 = ex.y + ex.dy * hi; return { x: x2, y: y2, d: hi }; }
      prevS = s;
    }
    return null;
  },
  // ---------- рисование ----------
  disc(g, cx, cy, r, col, a) {
    if (a <= 0.02) return; r = Math.max(0.6, r);
    const y0 = Math.max(0, Math.floor(cy - r)), y1 = Math.min(g.h - 1, Math.ceil(cy + r)), r2 = r * r + r * 0.7;
    const pat = a > 0.86 ? 0 : a > 0.6 ? 1 : a > 0.38 ? 2 : a > 0.2 ? 3 : 4;
    for (let y = y0; y <= y1; y++) {
      const dy = y - cy, q = r2 - dy * dy; if (q < 0) continue; const dx = Math.sqrt(q), xa = Math.max(0, Math.round(cx - dx)), xb = Math.min(g.w - 1, Math.round(cx + dx)), o = y * g.w;
      if (pat === 0) { for (let x = xa; x <= xb; x++) g.buf[o + x] = col; }
      else for (let x = xa; x <= xb; x++) { const ok = pat === 1 ? ((x + y) & 3) !== 0 : pat === 2 ? ((x + y) & 1) === 0 : pat === 3 ? ((x & 1) === 0 && (y & 1) === 0) || (((x >> 1) + y) & 3) === 0 : ((x & 3) === 0 && (y & 3) === 0); if (ok) g.buf[o + x] = col; }
    }
  },
  FIRE: [rgb(255, 252, 220), rgb(255, 228, 120), rgb(255, 170, 50), rgb(236, 100, 28), rgb(170, 52, 24), rgb(90, 36, 30)],
  draw(g, S, layer) {
    const P = this.P, tmp = [0, 0], ppm = S.ppmV, W = S.W;
    for (let i = 0; i < P.length; i++) {
      const p = P[i]; if ((p.l | 0) !== layer) continue;
      S.toScr(p.x, p.y, tmp); const px = tmp[0], py = tmp[1], f = p.age / p.life, rad = Math.max(0.6, p.size * ppm);
      if (px < -rad - 4 || px > g.w + rad + 4 || py < -rad - 4 || py > g.h + rad + 4) continue;
      switch (p.k) {
        case 'fire': {
          const c = p.plasma ? [rgb(255, 245, 230), rgb(190, 215, 255), rgb(255, 150, 90), rgb(150, 60, 40)][Math.min(3, (f * 4) | 0)] : this.FIRE[Math.min(5, (f * 6) | 0)];
          this.disc(g, px, py, rad * (1 - f * 0.25), c, f < 0.7 ? 1 : 1 - (f - 0.7) / 0.3 * 0.75); break;
        }
        case 'smoke': { const d = (p.dark != null ? p.dark : 0.5), base = 200 - 150 * d; const c = rgb(base, base, base + 4); this.disc(g, px, py, rad, c, (0.65 - 0.5 * f) * (f < 0.1 ? f * 10 : 1)); break; }
        case 'dust': { const a = (1 - f) * 0.9; if (rad < 1.1) { if (a > 0.3 || ((i + (S.t * 20 | 0)) & 1)) g.px(px, py, p.col); } else this.disc(g, px, py, rad, p.col, a * 0.8); break; }
        case 'spark': { const c = p.col || (f < 0.4 ? rgb(255, 240, 170) : rgb(255, 150, 60)); g.px(px, py, c); if (f < 0.4) { g.px(px + 1, py, c); } break; }
        case 'water': { g.px(px, py, p.col); if (rad > 1.5) g.px(px, py + 1, p.col); break; }
        case 'deb': { const c = p.col, r = Math.max(1, rad); const ca = Math.cos(p.rot), sa = Math.sin(p.rot); g.px(px, py, c); if (r > 1.4) { g.px(px + ca * r, py + sa * r, shade(c, 0.7)); g.px(px - ca * r, py - sa * r, shade(c, 0.7)); } if (r > 2.5) g.line(px - ca * r, py - sa * r, px + ca * r, py + sa * r, c); break; }
        case 'flash': { const k = 1 - f; const r = p.size * ppm * (0.6 + 0.8 * f); this.disc(g, px, py, r, rgb(255, 255, 235), k); break; }
        case 'glow': { this.disc(g, px, py, rad, rgb(255, 200, 120), 0.7); break; }
        case 'ring': { const r = (p.size + p.grow * p.age) * ppm; const c = p.water ? rgb(200, 225, 255) : rgb(255, 245, 225); if (r < 400) { if (f < 0.7) g.ring(px, py, r, c); } break; }
      }
    }
    // входной нагрев: светящаяся ударная волна вокруг аппарата
    if (layer === 1 && S.v._heat > 0.1 && S.T) {
      const B = S.B, v = S.v; const vx = v.vx + B.rotW * v.y, vy = v.vy - B.rotW * v.x, sp = Math.hypot(vx, vy) || 1;
      const X = (-vx * S.sph + vy * S.cph) / sp, Y = (vx * S.cph + vy * S.sph) / sp;      // направление движения на экране (y вверх)
      const R = (v.mp ? v.mp.R : 3) * ppm, I = clamp(S.v._heat, 0, 1.4);
      const cxs = S.cx + X * R * 0.9, cys = S.cyC - Y * R * 0.9;
      for (let k = 0; k < 4; k++) { const rr = R * (1.35 - k * 0.2) * (0.8 + 0.2 * I), c = [rgb(150, 60, 40), rgb(255, 120, 50), rgb(255, 190, 110), rgb(255, 240, 215)][k]; this.discBow(g, cxs, cys, rr, X, -Y, c, 0.55 * Math.min(1, I * 1.2) + 0.1); }
    }
  },
  // полудиск, обращённый по направлению (dx,dy в экранных осях)
  discBow(g, cx, cy, r, dx, dy, col, a) {
    const y0 = Math.max(0, Math.floor(cy - r)), y1 = Math.min(g.h - 1, Math.ceil(cy + r));
    for (let y = y0; y <= y1; y++) { const ddy = y - cy, q = r * r - ddy * ddy; if (q < 0) continue; const w = Math.sqrt(q); for (let x = Math.max(0, Math.floor(cx - w)); x <= Math.min(g.w - 1, Math.ceil(cx + w)); x++) { if ((x - cx) * dx + ddy * dy < r * 0.1) continue; if (((x + y) & 1) === 0 || a > 0.7) { const o = g.buf[y * g.w + x]; g.buf[y * g.w + x] = a > 0.7 ? col : (o & 0xff000000) | (((o & 0xff) + (col & 0xff)) >> 1) | ((((o >> 8) & 0xff) + ((col >> 8) & 0xff)) >> 1 << 8) | ((((o >> 16) & 0xff) + ((col >> 16) & 0xff)) >> 1 << 16); } } }
  }
};
