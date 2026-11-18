'use strict';
// ============ Пиксельный буфер: всё рисуем в маленький ImageData и растягиваем без сглаживания ============
const Gfx = {
  cv: null, ctx: null, w: 160, h: 300, img: null, buf: null, scale: 3,
  init(cv) { this.cv = cv; this.ctx = cv.getContext('2d', { alpha: false }); },
  resize(cssW, cssH, target) {
    const sc = clamp(Math.round(Math.min(cssW, 1000) / (target || 170)), 2, 6);
    this.scale = sc; this.w = Math.max(60, Math.ceil(cssW / sc)); this.h = Math.max(60, Math.ceil(cssH / sc));
    this.cv.width = this.w; this.cv.height = this.h;
    this.cv.style.width = this.w * sc + 'px'; this.cv.style.height = this.h * sc + 'px';
    this.img = this.ctx.createImageData(this.w, this.h); this.buf = new Uint32Array(this.img.data.buffer);
  },
  present() { this.ctx.putImageData(this.img, 0, 0); },
  clear(c) { this.buf.fill(c); },
  px(x, y, c) { x |= 0; y |= 0; if (x >= 0 && y >= 0 && x < this.w && y < this.h) this.buf[y * this.w + x] = c; },
  get(x, y) { x |= 0; y |= 0; return (x >= 0 && y >= 0 && x < this.w && y < this.h) ? this.buf[y * this.w + x] : 0; },
  // смешивание с прозрачностью a (0..1)
  blend(x, y, c, a) {
    x |= 0; y |= 0; if (x < 0 || y < 0 || x >= this.w || y >= this.h || a <= 0) return;
    const i = y * this.w + x; if (a >= 1) { this.buf[i] = c; return; }
    const o = this.buf[i], ia = 1 - a;
    this.buf[i] = (255 << 24) | ((((c >> 16) & 255) * a + ((o >> 16) & 255) * ia) << 16 & 0xff0000) | ((((c >> 8) & 255) * a + ((o >> 8) & 255) * ia) << 8 & 0xff00) | ((((c & 255) * a + (o & 255) * ia)) & 255);
  },
  add(x, y, r, g, b) {   // световое сложение (огонь, свечение)
    x |= 0; y |= 0; if (x < 0 || y < 0 || x >= this.w || y >= this.h) return;
    const i = y * this.w + x, o = this.buf[i];
    const R = Math.min(255, (o & 255) + r), G = Math.min(255, ((o >> 8) & 255) + g), B = Math.min(255, ((o >> 16) & 255) + b);
    this.buf[i] = (255 << 24) | (B << 16) | (G << 8) | R;
  },
  rect(x, y, w, h, c) {
    let x0 = Math.max(0, x | 0), y0 = Math.max(0, y | 0), x1 = Math.min(this.w, (x + w) | 0), y1 = Math.min(this.h, (y + h) | 0);
    for (let j = y0; j < y1; j++) { const o = j * this.w; for (let i = x0; i < x1; i++) this.buf[o + i] = c; }
  },
  hline(x0, x1, y, c) { y |= 0; if (y < 0 || y >= this.h) return; x0 = Math.max(0, x0 | 0); x1 = Math.min(this.w - 1, x1 | 0); const o = y * this.w; for (let i = x0; i <= x1; i++) this.buf[o + i] = c; },
  line(x0, y0, x1, y1, c) {
    x0 |= 0; y0 |= 0; x1 |= 0; y1 |= 0; let dx = Math.abs(x1 - x0), dy = -Math.abs(y1 - y0), sx = x0 < x1 ? 1 : -1, sy = y0 < y1 ? 1 : -1, er = dx + dy;
    for (let n = 0; n < 4000; n++) { this.px(x0, y0, c); if (x0 === x1 && y0 === y1) break; const e2 = 2 * er; if (e2 >= dy) { er += dy; x0 += sx; } if (e2 <= dx) { er += dx; y0 += sy; } }
  },
  dashed(x0, y0, x1, y1, c, on, off) {
    x0 |= 0; y0 |= 0; x1 |= 0; y1 |= 0; let dx = Math.abs(x1 - x0), dy = -Math.abs(y1 - y0), sx = x0 < x1 ? 1 : -1, sy = y0 < y1 ? 1 : -1, er = dx + dy, n = 0; on = on || 3; off = off || 3;
    for (let k = 0; k < 4000; k++) { if ((n++ % (on + off)) < on) this.px(x0, y0, c); if (x0 === x1 && y0 === y1) break; const e2 = 2 * er; if (e2 >= dy) { er += dy; x0 += sx; } if (e2 <= dx) { er += dx; y0 += sy; } }
  },
  disc(cx, cy, r, c) {
    const r2 = r * r + r * 0.8; const y0 = Math.max(0, Math.floor(cy - r)), y1 = Math.min(this.h - 1, Math.ceil(cy + r));
    for (let y = y0; y <= y1; y++) { const dy = y - cy; const q = r2 - dy * dy; if (q < 0) continue; const dx = Math.sqrt(q); this.hline(Math.round(cx - dx), Math.round(cx + dx), y, c); }
  },
  ring(cx, cy, r, c) { // окружность Брезенхема
    let x = Math.round(r), y = 0, d = 1 - x; cx = Math.round(cx); cy = Math.round(cy);
    if (r > 3000) return;
    while (x >= y) {
      this.px(cx + x, cy + y, c); this.px(cx + y, cy + x, c); this.px(cx - y, cy + x, c); this.px(cx - x, cy + y, c);
      this.px(cx - x, cy - y, c); this.px(cx - y, cy - x, c); this.px(cx + y, cy - x, c); this.px(cx + x, cy - y, c);
      y++; if (d < 0) d += 2 * y + 1; else { x--; d += 2 * (y - x) + 1; }
    }
  },
  tri(x0, y0, x1, y1, x2, y2, c, fn) { // закрашенный треугольник; fn(x,y,u,v) — необязательно
    const minY = Math.max(0, Math.floor(Math.min(y0, y1, y2))), maxY = Math.min(this.h - 1, Math.ceil(Math.max(y0, y1, y2)));
    const den = (y1 - y2) * (x0 - x2) + (x2 - x1) * (y0 - y2); if (Math.abs(den) < 1e-9) return;
    for (let y = minY; y <= maxY; y++) {
      // пересечения горизонтали y+0.5 со сторонами
      const yy = y + 0.5; let xa = 1e9, xb = -1e9;
      const E = [[x0, y0, x1, y1], [x1, y1, x2, y2], [x2, y2, x0, y0]];
      for (const e of E) { const ya = e[1], yb = e[3]; if ((ya <= yy && yb > yy) || (yb <= yy && ya > yy)) { const t = (yy - ya) / (yb - ya); const x = e[0] + (e[2] - e[0]) * t; if (x < xa) xa = x; if (x > xb) xb = x; } }
      if (xa > xb) continue;
      for (let x = Math.max(0, Math.round(xa)); x <= Math.min(this.w - 1, Math.round(xb) - 1); x++) { if (fn) fn(x, y); else this.buf[y * this.w + x] = c; }
    }
  },
  // выпуклый многоугольник (по точкам)
  poly(pts, c, fn) { for (let i = 1; i < pts.length - 1; i++) this.tri(pts[0][0], pts[0][1], pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1], c, fn); }
};
// === пиксельные шрифтовые метки в буфере: крошечный шрифт 3×5 (цифры, +/-, ., :, %, буквы lat) ===
const MICRO = { '0': '111101101101111', '1': '010110010010111', '2': '111001111100111', '3': '111001111001111', '4': '101101111001001', '5': '111100111001111', '6': '111100111101111', '7': '111001001001001', '8': '111101111101111', '9': '111101111001111', '-': '000000111000000', '+': '000010111010000', '.': '000000000000010', ':': '000010000010000', '%': '101001010100101', 'k': '101110100110101', 'm': '000111111101101', 'M': '101111111101101', 'x': '000101010101000', ' ': '000000000000000', 'a': '000011111101111', 'u': '000101101101111', 'c': '000111100100111', 'd': '001001111101111', 'h': '100100111101101', 's': '000111110001111', 'e': '000111111100111', 'g': '000111101111001' };
Gfx.micro = function (x, y, str, c, shadow) {
  x |= 0; y |= 0;
  for (const ch of String(str)) {
    const g = MICRO[ch]; if (g) { for (let j = 0; j < 5; j++) for (let i = 0; i < 3; i++) if (g[j * 3 + i] === '1') { if (shadow) this.px(x + i + 1, y + j + 1, shadow); this.px(x + i, y + j, c); } }
    x += 4;
  }
  return x;
};
