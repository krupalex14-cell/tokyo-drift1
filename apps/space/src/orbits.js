'use strict';
// ============ Кеплер: эфемериды, универсальные переменные, Ламберт ============
function stumpC(z) { if (z > 1e-6) return (1 - Math.cos(Math.sqrt(z))) / z; if (z < -1e-6) return (Math.cosh(Math.sqrt(-z)) - 1) / (-z); return 0.5 - z / 24 + z * z / 720; }
function stumpS(z) { if (z > 1e-6) { const s = Math.sqrt(z); return (s - Math.sin(s)) / (s * s * s); } if (z < -1e-6) { const s = Math.sqrt(-z); return (Math.sinh(s) - s) / (s * s * s); } return 1 / 6 - z / 120 + z * z / 5040; }

function solveKeplerE(M, e) {
  M = wrapPI(M); let E = e < 0.8 ? M : PI * sgn(M);
  for (let i = 0; i < 40; i++) { const d = (E - e * Math.sin(E) - M) / (1 - e * Math.cos(E)); E -= d; if (Math.abs(d) < 1e-13) break; }
  return E;
}
// локальное (относительно родителя) состояние тела на момент t
function bodyLocal(b, t, out) {
  const o = b.orb, M = o.M0 + o.n * t, E = solveKeplerE(M, o.e);
  const cE = Math.cos(E), sE = Math.sin(E), q = Math.sqrt(1 - o.e * o.e), den = 1 - o.e * cE;
  const px = o.a * (cE - o.e), py = o.a * q * sE;
  const vx = -o.a * o.n * sE / den, vy = o.a * o.n * q * cE / den;
  const cw = Math.cos(o.w), sw = Math.sin(o.w);
  out.x = px * cw - py * sw; out.y = px * sw + py * cw; out.vx = vx * cw - vy * sw; out.vy = vx * sw + vy * cw;
  return out;
}
// кэш абсолютных состояний всех тел
function Ephemeris(U) { this.U = U; this.t = NaN; this.s = U.bodies.map(() => ({ x: 0, y: 0, vx: 0, vy: 0 })); this.tmp = { x: 0, y: 0, vx: 0, vy: 0 }; }
Ephemeris.prototype.at = function (t) {
  if (t === this.t) return this.s; this.t = t;
  const U = this.U;
  for (let i = 0; i < U.bodies.length; i++) {
    const b = U.bodies[i], s = this.s[i];
    if (!b.parent) { s.x = s.y = s.vx = s.vy = 0; continue; }
    bodyLocal(b, t, this.tmp); const p = this.s[U.byId[b.parent].idx];
    s.x = p.x + this.tmp.x; s.y = p.y + this.tmp.y; s.vx = p.vx + this.tmp.vx; s.vy = p.vy + this.tmp.vy;
  }
  return this.s;
};
Ephemeris.prototype.state = function (b, t) { return this.at(t)[b.idx]; };
// состояние b относительно родителя (из кэша)
Ephemeris.prototype.rel = function (b, t, out) {
  const s = this.at(t); out = out || {};
  if (!b.parent) { out.x = out.y = out.vx = out.vy = 0; return out; }
  const p = s[this.U.byId[b.parent].idx], c = s[b.idx];
  out.x = c.x - p.x; out.y = c.y - p.y; out.vx = c.vx - p.vx; out.vy = c.vy - p.vy; return out;
};
// угол вращения тела (рад) в момент t
function bodyRot(b, t) { return b.rot0 + b.rotW * t; }

// установить фазу вращения домашнего тела так, чтобы на площадке в момент t0 был заданный местный час
function setStartRotation(U, eph, t0, hour) {
  const hb = U.byId[U.home]; const s = eph.at(t0); const hs = s[hb.idx], ss = s[U.root.idx];
  const sa = Math.atan2(ss.y - hs.y, ss.x - hs.x);
  const phi = sa + (hour - 12) / 24 * TAU;
  hb.rot0 = phi - hb.rotW * t0;
}

// ---------- универсальные переменные ----------
// возвращает [x,y,vx,vy] через dt
function kepProp(mu, rx, ry, vx, vy, dt, out) {
  out = out || [0, 0, 0, 0];
  if (dt === 0) { out[0] = rx; out[1] = ry; out[2] = vx; out[3] = vy; return out; }
  const r0 = Math.hypot(rx, ry), v2 = vx * vx + vy * vy, rv = rx * vx + ry * vy, sm = Math.sqrt(mu);
  const alpha = 2 / r0 - v2 / mu;
  if (alpha > 1e-14) { const T = TAU / (sm * Math.pow(alpha, 1.5)) * 1; dt = dt % T; if (dt > T / 2) dt -= T; else if (dt < -T / 2) dt += T; }
  let chi;
  if (alpha > 1e-14) chi = sm * dt * alpha;
  else if (alpha < -1e-14) { const a = 1 / alpha; chi = sgn(dt) * Math.sqrt(-a) * Math.log((-2 * mu * alpha * dt) / (rv + sgn(dt) * Math.sqrt(-mu * a) * (1 - r0 * alpha))); if (!isFinite(chi)) chi = sm * dt / r0; }
  else chi = sm * dt / r0;
  let C = 0.5, S = 1 / 6, z = 0;
  const FF = (x) => { const zz = alpha * x * x, c = stumpC(zz), s_ = stumpS(zz); return rv / sm * x * x * c + (1 - alpha * r0) * x * x * x * s_ + r0 * x - sm * dt; };
  let ok = false, chi0 = chi;
  for (let i = 0; i < 60; i++) {
    z = alpha * chi * chi; C = stumpC(z); S = stumpS(z);
    const F = rv / sm * chi * chi * C + (1 - alpha * r0) * chi * chi * chi * S + r0 * chi - sm * dt;
    const dF = rv / sm * chi * (1 - alpha * chi * chi * S) + (1 - alpha * r0) * chi * chi * C + r0;
    let d = F / dF; if (!isFinite(d)) break;
    // защита шага
    if (Math.abs(d) > Math.abs(chi) * 4 + 1e3 * sm) d = sgn(d) * (Math.abs(chi) * 4 + 1e3 * sm);
    chi -= d; if (Math.abs(d) < 1e-9 * (1 + Math.abs(chi))) { ok = isFinite(chi); break; }
  }
  if (ok) { const rs = Math.abs(FF(chi)) / (Math.abs(sm * dt) + r0 * Math.abs(chi) + 1); if (!(rs < 1e-7)) ok = false; }
  if (!ok) {
    // F(χ) монотонна (dF/dχ = r > 0): надёжная скобка + метод Ньютона/деления
    let x = isFinite(chi0) ? chi0 : 0, f0 = FF(x), step = Math.abs(sm * dt / (r0 + 1)) + 1, lo, hi;
    if (f0 > 0) { hi = x; lo = x - step; for (let k = 0; k < 80 && FF(lo) > 0; k++) { hi = lo; step *= 2; lo = hi - step; } }
    else { lo = x; hi = x + step; for (let k = 0; k < 80 && FF(hi) < 0; k++) { lo = hi; step *= 2; hi = lo + step; } }
    chi = 0.5 * (lo + hi);
    for (let i = 0; i < 200; i++) {
      const zz = alpha * chi * chi, c = stumpC(zz), s_ = stumpS(zz);
      const F = rv / sm * chi * chi * c + (1 - alpha * r0) * chi * chi * chi * s_ + r0 * chi - sm * dt;
      const dF = rv / sm * chi * (1 - alpha * chi * chi * s_) + (1 - alpha * r0) * chi * chi * c + r0;
      if (F > 0) hi = chi; else lo = chi;
      let nx = chi - F / dF; if (!isFinite(nx) || nx <= lo || nx >= hi) nx = 0.5 * (lo + hi);
      if (Math.abs(nx - chi) < 1e-12 * (1 + Math.abs(chi))) { chi = nx; break; }
      chi = nx;
    }
  }
  z = alpha * chi * chi; C = stumpC(z); S = stumpS(z);
  const f = 1 - chi * chi / r0 * C, g = dt - chi * chi * chi / sm * S;
  const nx = f * rx + g * vx, ny = f * ry + g * vy, r = Math.hypot(nx, ny);
  const fd = sm / (r * r0) * (alpha * chi * chi * chi * S - chi), gd = 1 - chi * chi / r * C;
  out[0] = nx; out[1] = ny; out[2] = fd * rx + gd * vx; out[3] = fd * ry + gd * vy; return out;
}

// элементы 2D-орбиты
function elements(mu, rx, ry, vx, vy) {
  const r = Math.hypot(rx, ry), v2 = vx * vx + vy * vy, hh = rx * vy - ry * vx, rv = rx * vx + ry * vy;
  const ex = ((v2 - mu / r) * rx - rv * vx) / mu, ey = ((v2 - mu / r) * ry - rv * vy) / mu;
  const e = Math.hypot(ex, ey), eps = v2 / 2 - mu / r;
  const a = Math.abs(eps) < 1e-12 ? Infinity : -mu / (2 * eps);
  const p = hh * hh / mu, dir = hh >= 0 ? 1 : -1;
  const rp = p / (1 + e), ra = e < 1 ? p / (1 - e) : Infinity;
  let w = e > 1e-9 ? Math.atan2(ey, ex) : Math.atan2(ry, rx);
  // истинная аномалия
  let nu = wrapPI(dir * (Math.atan2(ry, rx) - w));
  if (e < 1e-9) nu = 0;
  const el = { mu, a, e, w, p, h: hh, dir, rp, ra, eps, r, nu, ecc: e, bound: e < 1 };
  if (e < 1) {
    el.n = Math.sqrt(mu / (a * a * a)); el.T = TAU / el.n;
    el.E = 2 * Math.atan2(Math.sqrt(1 - e) * Math.sin(nu / 2), Math.sqrt(1 + e) * Math.cos(nu / 2));
    el.M = el.E - e * Math.sin(el.E);
  } else {
    el.n = Math.sqrt(mu / Math.pow(-a, 3)); el.T = Infinity;
    const F = 2 * Math.atanh(Math.sqrt((e - 1) / (e + 1)) * Math.tan(nu / 2)); el.E = F; el.M = e * Math.sinh(F) - F;
    el.nuInf = Math.acos(-1 / e);
  }
  return el;
}
// положение на конике по истинной аномалии
function conicAt(el, nu) {
  const r = el.p / (1 + el.e * Math.cos(nu)), ang = el.w + el.dir * nu;
  return [r * Math.cos(ang), r * Math.sin(ang), r];
}
// время от перицентра до истинной аномалии (для эллипса — в пределах [-T/2,T/2], для гиперболы — со знаком)
function timeFromPeri(el, nu) {
  if (el.e < 1) { const E = 2 * Math.atan2(Math.sqrt(1 - el.e) * Math.sin(nu / 2), Math.sqrt(1 + el.e) * Math.cos(nu / 2)); return (E - el.e * Math.sin(E)) / el.n; }
  const F = 2 * Math.atanh(Math.sqrt((el.e - 1) / (el.e + 1)) * Math.tan(nu / 2)); return (el.e * Math.sinh(F) - F) / el.n;
}
function timeToNu(el, nu) { // время от текущего момента до истинной аномалии nu (вперёд)
  const t0 = timeFromPeri(el, el.nu); let t1 = timeFromPeri(el, nu);
  let d = t1 - t0; if (el.e < 1) { while (d < 0) d += el.T; } return d;
}
function speedAt(el, r) { return Math.sqrt(el.mu * (2 / r - (el.e < 1 ? 1 / el.a : 1 / el.a))); }

// ---------- Ламберт (универсальные переменные, 2D) ----------
function lambert(mu, r1x, r1y, r2x, r2y, tof, prograde) {
  const r1 = Math.hypot(r1x, r1y), r2 = Math.hypot(r2x, r2y);
  const cd = (r1x * r2x + r1y * r2y) / (r1 * r2), cz = r1x * r2y - r1y * r2x;
  let dnu = Math.acos(clamp(cd, -1, 1));
  if (prograde) { if (cz < 0) dnu = TAU - dnu; } else { if (cz >= 0) dnu = TAU - dnu; }
  const A = Math.sin(dnu) * Math.sqrt(r1 * r2 / (1 - Math.cos(dnu)));
  if (Math.abs(A) < 1e-9) return null;
  const sm = Math.sqrt(mu);
  const yf = z => r1 + r2 + A * (z * stumpS(z) - 1) / Math.sqrt(stumpC(z));
  const Ft = z => { const y = yf(z); if (y < 0) return NaN; return Math.pow(y / stumpC(z), 1.5) * stumpS(z) + A * Math.sqrt(y) - sm * tof; };
  let lo = -4 * PI * PI * 4, hi = 4 * PI * PI - 1e-3;
  // подбираем нижнюю границу, где y>0
  let z0 = 0; { let zz = lo; for (let i = 0; i < 400; i++) { if (yf(zz) > 0 && isFinite(Ft(zz))) break; zz += 1; } lo = zz; }
  const flo = Ft(lo), fhi = Ft(hi);
  if (!isFinite(flo) || !isFinite(fhi) || flo * fhi > 0) { if (!(flo < 0 && fhi > 0)) return null; }
  for (let i = 0; i < 100; i++) { z0 = (lo + hi) / 2; const f = Ft(z0); if (!isFinite(f)) { lo = z0; continue; } if (f < 0) lo = z0; else hi = z0; if (hi - lo < 1e-10) break; }
  const z = (lo + hi) / 2, y = yf(z);
  const f = 1 - y / r1, g = A * Math.sqrt(y / mu), gd = 1 - y / r2;
  return { v1: [(r2x - f * r1x) / g, (r2y - f * r1y) / g], v2: [(gd * r2x - r1x) / g, (gd * r2y - r1y) / g] };
}
