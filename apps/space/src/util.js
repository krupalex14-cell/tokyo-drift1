'use strict';
// ============ Константы и математика ============
const TAU = Math.PI * 2, PI = Math.PI;
const G = 6.6743e-11, G0 = 9.80665, AU = 1.495978707e11, SIGMA = 5.670374e-8, DAY = 86400;
const clamp = (x, a, b) => x < a ? a : x > b ? b : x;
const lerp = (a, b, t) => a + (b - a) * t;
const sgn = x => x < 0 ? -1 : 1;
const sat = x => x < 0 ? 0 : x > 1 ? 1 : x;
const smooth = (a, b, x) => { const t = sat((x - a) / (b - a)); return t * t * (3 - 2 * t); };
const wrapPI = a => { a %= TAU; if (a > PI) a -= TAU; else if (a < -PI) a += TAU; return a; };
const wrap2PI = a => { a %= TAU; return a < 0 ? a + TAU : a; };
const hyp = Math.hypot;

function rng(seed) {
  let s = seed >>> 0;
  return function () {
    s = (s + 0x6D2B79F5) >>> 0;
    let t = s; t = Math.imul(t ^ t >>> 15, t | 1); t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
function hash2(a, b) {
  let h = (Math.imul(a | 0, 374761393) + Math.imul(b | 0, 668265263)) | 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177); h ^= h >>> 16;
  return (h >>> 0) / 4294967296;
}
function hashStr(s) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
// периодический value-noise по углу: N ячеек на окружность, результат в [-1,1]
function pnoise(th, N, seed) {
  let x = th / TAU * N; const i = Math.floor(x); let f = x - i;
  const m = ((i % N) + N) % N, m1 = (m + 1) % N;
  const a = hash2(m, seed) * 2 - 1, b = hash2(m1, seed) * 2 - 1;
  f = f * f * f * (f * (f * 6 - 15) + 10);
  return a + (b - a) * f;
}

// ============ Цвета ============
function rgb(r, g, b) { return (255 << 24) | ((b & 255) << 16) | ((g & 255) << 8) | (r & 255); } // ABGR little-endian
function hex(c) { if (typeof c === 'number') return c; c = c.replace('#', ''); if (c.length === 3) c = c[0] + c[0] + c[1] + c[1] + c[2] + c[2]; return rgb(parseInt(c.slice(0, 2), 16), parseInt(c.slice(2, 4), 16), parseInt(c.slice(4, 6), 16)); }
const cR = c => c & 255, cG = c => (c >> 8) & 255, cB = c => (c >> 16) & 255;
function mix(c1, c2, t) { t = sat(t); return rgb((cR(c1) + (cR(c2) - cR(c1)) * t) | 0, (cG(c1) + (cG(c2) - cG(c1)) * t) | 0, (cB(c1) + (cB(c2) - cB(c1)) * t) | 0); }
function shade(c, k) { return rgb(clamp(cR(c) * k, 0, 255) | 0, clamp(cG(c) * k, 0, 255) | 0, clamp(cB(c) * k, 0, 255) | 0); }
function add(c, r, g, b) { return rgb(clamp(cR(c) + r, 0, 255) | 0, clamp(cG(c) + g, 0, 255) | 0, clamp(cB(c) + b, 0, 255) | 0); }

// ============ Форматирование (рус.) ============
function fmtNum(x, d = 1) { if (!isFinite(x)) return '∞'; const a = Math.abs(x); if (a >= 1e6) return (x / 1e6).toFixed(d) + 'M'; if (a >= 1e4) return (x / 1e3).toFixed(d) + 'k'; return x.toFixed(a < 10 ? d : 0); }
function fmtDist(m) {
  const a = Math.abs(m);
  if (!isFinite(m)) return '—';
  if (a < 1e4) return m.toFixed(a < 100 ? 1 : 0) + ' м';
  if (a < 1e7) return (m / 1e3).toFixed(a < 1e5 ? 2 : 1) + ' км';
  if (a < 1e10) return (m / 1e6).toFixed(2) + ' Мм';
  return (m / AU).toFixed(3) + ' а.е.';
}
function fmtSpeed(v) { const a = Math.abs(v); return a < 1e4 ? v.toFixed(a < 100 ? 1 : 0) + ' м/с' : (v / 1e3).toFixed(2) + ' км/с'; }
function fmtMass(kg) { const a = Math.abs(kg); if (a < 1) return (kg * 1000).toFixed(0) + ' г'; if (a < 1e4) return kg.toFixed(a < 100 ? 1 : 0) + ' кг'; return (kg / 1e3).toFixed(a < 1e5 ? 2 : 1) + ' т'; }
function fmtTime(s) {
  if (!isFinite(s)) return '—'; const neg = s < 0; s = Math.abs(s);
  const y = Math.floor(s / (365 * DAY)); s -= y * 365 * DAY;
  const d = Math.floor(s / DAY); s -= d * DAY;
  const h = Math.floor(s / 3600); s -= h * 3600;
  const m = Math.floor(s / 60); s = Math.floor(s - m * 60);
  const p = n => (n < 10 ? '0' : '') + n;
  return (neg ? '-' : '') + (y ? y + 'г ' : '') + (d || y ? d + 'д ' : '') + p(h) + ':' + p(m) + ':' + p(s);
}
function fmtDur(s) { // коротко
  if (!isFinite(s)) return '—'; s = Math.abs(s);
  if (s < 90) return s.toFixed(0) + ' с'; if (s < 5400) return (s / 60).toFixed(1) + ' мин';
  if (s < 2 * DAY) return (s / 3600).toFixed(1) + ' ч'; if (s < 400 * DAY) return (s / DAY).toFixed(1) + ' сут';
  return (s / (365.25 * DAY)).toFixed(2) + ' г';
}
function fmtPow(w) { const a = Math.abs(w); return a >= 1e6 ? (w / 1e6).toFixed(2) + ' МВт' : a >= 1e3 ? (w / 1e3).toFixed(2) + ' кВт' : w.toFixed(a < 10 ? 1 : 0) + ' Вт'; }
function fmtForce(n) { const a = Math.abs(n); return a >= 1e6 ? (n / 1e6).toFixed(2) + ' МН' : a >= 1e3 ? (n / 1e3).toFixed(a < 1e4 ? 1 : 0) + ' кН' : n.toFixed(a < 10 ? 2 : 0) + ' Н'; }
function fmtMoney(x) { const a = Math.abs(x); return '₽'.replace('₽', '$') + (a >= 1e9 ? (x / 1e9).toFixed(2) + ' млрд' : a >= 1e6 ? (x / 1e6).toFixed(2) + ' млн' : a >= 1e3 ? (x / 1e3).toFixed(1) + ' тыс' : x.toFixed(0)); }
function fmtBits(mbit) { return mbit < 1 ? (mbit * 1000).toFixed(0) + ' кбит' : mbit < 1000 ? mbit.toFixed(1) + ' Мбит' : (mbit / 1000).toFixed(2) + ' Гбит'; }
function fmtDate(ut) { // ut — секунды от J2000
  const d = new Date(Date.UTC(2000, 0, 1, 12) + ut * 1000);
  const p = n => (n < 10 ? '0' : '') + n;
  return d.getUTCFullYear() + '-' + p(d.getUTCMonth() + 1) + '-' + p(d.getUTCDate()) + ' ' + p(d.getUTCHours()) + ':' + p(d.getUTCMinutes());
}
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

// ============ Хранилище ============
const Store = {
  get(k, def) { try { const v = localStorage.getItem('space1_' + k); return v == null ? def : JSON.parse(v); } catch (e) { return def; } },
  set(k, v) { try { localStorage.setItem('space1_' + k, JSON.stringify(v)); return true; } catch (e) { return false; } },
  del(k) { try { localStorage.removeItem('space1_' + k); } catch (e) { } }
};
const $ = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
function h(tag, attrs, ...kids) {
  const e = document.createElement(tag);
  if (attrs) for (const k in attrs) { if (k === 'class') e.className = attrs[k]; else if (k === 'html') e.innerHTML = attrs[k]; else if (k.startsWith('on')) e.addEventListener(k.slice(2), attrs[k]); else if (attrs[k] != null) e.setAttribute(k, attrs[k]); }
  for (const c of kids.flat()) if (c != null) e.append(c.nodeType ? c : document.createTextNode(c));
  return e;
}
