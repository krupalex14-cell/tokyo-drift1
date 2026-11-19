'use strict';
// ============ Конструктор (ангар): палитра, размещение, размеры, ступени, анализ ============
function partBrief(d) {
  if (d.eng && d.eng.rcs) return 'РСУ ' + fmtForce(d.eng.Fv * 1) + ' · ' + d.eng.IspV + ' с';
  if (d.eng) { const e = d.eng; return (e.power > 0 ? 'ЭРД ' + fmtForce(e.Fv) + ' · ' + fmtPow(e.power) : fmtForce(e.Fv) + ' · Isp ' + Math.round(e.IspV) + ' с'); }
  if (d.tank) return PROPS[d.tank.prop].name;
  if (d.solar) return d.solar.area + ' м² · ' + fmtPow(d.solar.area * 1361 * d.solar.eff) + ' у Земли';
  if (d.rtg) return d.rtg + ' Вт, вечный источник';
  if (d.batt) return (d.batt / 1000).toFixed(1) + ' кВт·ч';
  if (d.ant) return 'усиление ' + (10 * Math.log10(d.ant.G)).toFixed(0) + ' дБ · до ' + fmtBits(d.ant.maxRate / 1000) + '/с';
  if (d.core) return d.core.rocket ? 'ракетная авионика' : 'управление зонда';
  if (d.rw) return 'момент ' + d.rw.torque + ' Н·м';
  if (d.inst) return KIND_NAMES[d.inst.kind] || d.inst.kind;
  if (d.leg) return 'опора, допуск ' + d.leg.tol + ' м/с';
  if (d.wheel) return 'колесо ⌀' + (d.wheel.r * 200).toFixed(0) + ' см';
  if (d.chute) return 'парашют ⌀' + d.chute.D.toFixed(1) + ' м';
  if (d.shield) return 'тепловой щит';
  if (d.dec) return d.dec.kind === 'radial' ? 'боковой' : 'ступенчатый';
  if (d.fair) return 'сбрасываемый';
  if (d.samples) return 'образцов: ' + d.samples;
  return '';
}

// ---------- иконки деталей (рисуем тем же пиксельным рендером) ----------
const Icons = {
  cache: {},
  get(id) {
    if (this.cache[id]) return this.cache[id];
    const d = PARTS[id], S = 44, g = Gfx;
    const cv = document.createElement('canvas'); cv.width = S; cv.height = S; cv.className = 'ico';
    this.cache[id] = cv;
    if (!g.buf || g.w < S || g.h < S) return cv;
    const p = newPart(id, 0, 0, {}); const ew = pw(p), eh = p.h;
    let ppm = (S - 6) / Math.max(ew, eh); const mn = Math.min(ew, eh); if (mn * ppm < 4) ppm = 4 / mn;
    // сохранить область буфера
    const save = new Uint32Array(S * S); for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) save[y * S + x] = g.buf[y * g.w + x];
    for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) g.buf[y * g.w + x] = rgb(10, 14, 28);
    if (p.d.solar) p.st.deployed = true; if (p.d.ant) p.st.deployed = true; if (p.d.leg) p.st.deployed = true;
    try { Art.vessel({ parts: [p] }, g, { ox: S / 2, oy: S / 2, ppm, psi: 0, cx: 0, cy: 0 }, { x: -.5, y: .6, z: .62, amb: .3 }, { all: true }); } catch (e) { }
    const im = cv.getContext('2d').createImageData(S, S), b32 = new Uint32Array(im.data.buffer);
    for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) b32[y * S + x] = g.buf[y * g.w + x];
    cv.getContext('2d').putImageData(im, 0, 0);
    for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) g.buf[y * g.w + x] = save[y * S + x];
    return cv;
  },
  clone(id) { const c = this.get(id), n = document.createElement('canvas'); n.width = c.width; n.height = c.height; n.className = 'ico'; n.getContext('2d').drawImage(c, 0, 0); return n; }
};

const Builder = {
  W: null, D: null, sel: null, dir: 'up', sym: true, magnet: true, chain: false, cam: { x: 0, y: 6, ppm: 8 }, hist: [], fut: [], root: null, cat: 'engine', ptrs: new Map(), drag: null, pal: null, dockEl: null,
  vp: { parts: [] }, stats: null, anaT: 0, manualStage: false, tilesEl: null, chipEl: null, stripEl: null, nameEl: null, propSheet: null, showStages: true,
  avail(d) { const W = this.W; return W.sandbox || W.cheats.freeBuild || d.tier <= W.tier; },

  open(W, design) {
    this.W = W; this.D = design ? clonePartsDesign(design) : new Design('Проект'); this.D.parts.forEach(p => { p.st = p.st || {}; }); this.D.top = 0;
    this.sel = null; this.hist = []; this.fut = []; this.ptrs.clear(); this.drag = null; this.manualStage = this.D.parts.some(p => p.stage >= 0);
    App.mode = 'build'; this.vp.parts = this.D.parts;
    this.dom(); this.touch(true); this.fit(); this.bindPointer();
    if (!this.D.parts.length) UI.toast('Нажмите на деталь внизу — она встанет на площадку, или потяните её вверх на поле. Значок «i» — зачем деталь нужна', 'info');
  },
  leave() { const ts = $('#toast'); if (ts) ts.classList.remove('lo'); if (this.pal) { this.pal.g.remove(); this.pal = null; } this.unbindPointer(); if (this.propSheet) { this.propSheet.close(); this.propSheet = null; } if (this.root) this.root.remove(); this.root = null; this.ptrs.clear(); this.drag = null; },
  close() { UI.go('hub'); },

  // ---------- история ----------
  snap() { this.hist.push(JSON.stringify(serDesign(this.D))); if (this.hist.length > 60) this.hist.shift(); this.fut.length = 0; },
  restore(js) { const D = desDesign(JSON.parse(js)); this.D.parts = D.parts; this.D.edges = D.edges; this.D.name = D.name; this.vp.parts = this.D.parts; this.sel = null; this.touch(); },
  undo() { if (!this.hist.length) return; this.fut.push(JSON.stringify(serDesign(this.D))); this.restore(this.hist.pop()); },
  redo() { if (!this.fut.length) return; this.hist.push(JSON.stringify(serDesign(this.D))); this.restore(this.fut.pop()); },

  // ---------- геометрия ----------
  ground() { let y = 1e9; for (const p of this.D.parts) { y = Math.min(y, prect(p).y0); if (p.d.leg) y = Math.min(y, p.y + p.d.leg.foot[1]); if (p.d.wheel) y = Math.min(y, p.y - p.d.wheel.r); } return y; },
  normalize() { if (!this.D.parts.length) return; const g = this.ground(); if (Math.abs(g) > 1e-6) for (const p of this.D.parts) p.y -= g; },
  touch(first) {
    const D = this.D; D.edges = computeEdges(D.parts);
    if (!this.manualStage) autoStage(D.parts, D.edges);
    this.normalize(); this.vp.parts = D.parts; this.stats = null; this.anaT = 0.25; this.upd();
  },
  fit() {
    const ps = this.D.parts, H = Gfx.h, top = H * .17, bot = H * .60;   // полоса между верхней панелью и палитрой
    if (!ps.length) { const ppm = Math.max(2, H / 28); this.cam = { x: 0, y: (bot - H * .46) / ppm, ppm }; return; }
    let x0 = 1e9, x1 = -1e9, y1 = -1e9; for (const p of ps) { const r = prect(p); x0 = Math.min(x0, r.x0); x1 = Math.max(x1, r.x1); y1 = Math.max(y1, r.y1); }
    const w = Math.max(x1 - x0, 6), hh = Math.max(y1, 6); const ppm = clamp(Math.min(Gfx.w * .74 / w, (bot - top) / hh), .12, 60);
    this.cam = { x: (x0 + x1) / 2, y: (bot - H * .46) / ppm, ppm };
  },
  scr(x, y) { const c = this.cam; return [Gfx.w / 2 + (x - c.x) * c.ppm, Gfx.h * .46 - (y - c.y) * c.ppm]; },
  wld(sx, sy) { const c = this.cam; return [c.x + (sx - Gfx.w / 2) / c.ppm, c.y - (sy - Gfx.h * .46) / c.ppm]; },
  hit(sx, sy) {
    const [wx, wy] = this.wld(sx, sy); const pad = 6 / this.cam.ppm; let best = null, ba = 1e18;
    for (const p of this.D.parts) { const r = prect(p); if (wx >= r.x0 - pad * .5 && wx <= r.x1 + pad * .5 && wy >= r.y0 - pad * .5 && wy <= r.y1 + pad * .5) { const a = (r.x1 - r.x0) * (r.y1 - r.y0); if (a < ba) { ba = a; best = p; } } }
    return best;
  },
  // связанные «выше/ниже» детали: для вставки в стопку
  chainOf(tgt, up) {
    const D = this.D, edges = D.edges, byId = new Map(D.parts.map(p => [p.id, p])), adj = new Map(D.parts.map(p => [p.id, []]));
    for (const [a, b] of edges) { adj.get(a).push(b); adj.get(b).push(a); }
    const r = prect(tgt), seen = new Set([tgt.id]), out = [], q = [];
    for (const id of adj.get(tgt.id)) { const o = byId.get(id), ro = prect(o); if (up ? ro.y0 >= r.y1 - .15 : ro.y1 <= r.y0 + .15) { seen.add(id); q.push(o); } }
    while (q.length) { const o = q.pop(); out.push(o); for (const id of adj.get(o.id)) { if (!seen.has(id)) { seen.add(id); q.push(byId.get(id)); } } }
    return out;
  },
  // ---------- размещение ----------
  // подогнать размер новой детали под соседа (диаметр, длина бака и т.п.)
  sizeFor(p, tgt, dir) {
    const d = p.d;
    if (d.size && d.size.dia && (dir === 'up' || dir === 'down') && !d.fair) { const w = snapDia(pw(tgt), d.size.dia); if (!(d.eng) && !d.shield) { p.w = w; if (d.id === 'adapter') { p.w2 = snapDia(Math.max(.3, w * .5), d.size.dia); } if (d.tank && d.size.len) p.h = clamp(Math.round(w * 2.7 * 4) / 4, d.size.len[0], d.size.len[1]); if (d.id === 'nose' && d.size.len) p.h = clamp(Math.round(w * 2 * 4) / 4, d.size.len[0], d.size.len[1]); fillPart(p); } }
    if (d.fair && (dir === 'up' || dir === 'down')) { p.w = snapDia(Math.max(pw(tgt), p.w), d.size.dia); fillPart(p); }
  },
  place(defId) {
    const d = PARTS[defId], D = this.D;
    if (!this.avail(d)) { UI.toast('Нужна технология ' + d.tier + ' (сейчас ' + this.W.tier + ') — изучите в «Технологиях»', 'bad'); return; }
    this.snap();
    const p = newPart(defId, 0, 0, {});
    if (d.attach === 'radial' || d.attach === 'both') { }
    if (!D.parts.length) { p.x = 0; p.y = pext(p)[1]; D.parts.push(p); this.select(p); this.touch(); this.fit(); return; }
    const tgt = this.sel && D.parts.includes(this.sel) ? this.sel : D.parts[D.parts.length - 1];
    let dir = this.dir; const att = d.attach || 'both'; const vert = dir === 'up' || dir === 'down';
    if (att === 'radial' && vert) { dir = 'right'; UI.toast('Эта деталь крепится сбоку', 'info'); }
    if (att === 'stack' && !vert) { dir = 'up'; }
    if (att === 'bottom' && dir !== 'up') { dir = 'up'; }
    this.sizeFor(p, tgt, dir);
    const r = prect(tgt), e = pext(p);
    let x = tgt.x, y = tgt.y; const side = dir === 'left' ? -1 : 1;
    if (dir === 'up') { y = r.y1 + e[1]; }
    else if (dir === 'down') { y = r.y0 - e[1]; }
    else { x = tgt.x + side * ((r.x1 - r.x0) / 2 + e[0]); y = tgt.y; if (d.leg || d.wheel || d.fin) y = r.y0 + e[1] + (d.leg ? 0 : 0); if (dir === 'left') p.flip = true; }
    p.x = x; p.y = y;
    if (dir === 'up' || dir === 'down') { const ch = this.chainOf(tgt, dir === 'up'); const dy = (dir === 'up' ? 1 : -1) * e[1] * 2; for (const o of ch) o.y += dy; }
    D.parts.push(p); const added = [p];
    if (this.sym && (dir === 'left' || dir === 'right') && !(Math.abs(tgt.x) > 1e-6 && false)) {
      const q = clonePart(p); q.id = _pid++; q.x = 2 * tgt.x - p.x; q.flip = !p.flip; q.st = {}; D.parts.push(q); added.push(q);
    }
    // если после этого есть пересечение (и не «читерим»), сдвигаем наружу
    if (!this.W.cheats.overlap && (dir === 'left' || dir === 'right')) {
      for (const a of added) { const sgn = a.x >= tgt.x ? 1 : -1; for (let k = 0; k < 80 && overlaps(D.parts, a); k++) a.x += sgn * .25; }
    }
    this.select(p); this.touch();
  },
  select(p) { this.sel = p; this.upd(); if (this.propSheet) this.propsRefresh(); },
  remove(p) {
    if (!p) return; this.snap(); const D = this.D;
    const r = prect(p); const col = !(p.d.attach === 'radial') && !(p.rot & 1);
    let up = []; if (col) up = this.chainOf(p, true);
    D.parts = D.parts.filter(q => q !== p); this.vp.parts = D.parts;
    if (col && up.length) { const h = r.y1 - r.y0; for (const o of up) o.y -= h; }
    this.sel = null; this.touch();
  },
  dup(p) { if (!p) return; this.snap(); const q = clonePart(p); q.id = _pid++; q.st = {}; const r = prect(p); if (p.d.attach === 'radial') { q.x = p.x + (p.x >= 0 ? 1 : -1) * (r.x1 - r.x0 + .05); } else { q.y = r.y1 + (r.y1 - r.y0) / 2; const ch = this.chainOf(p, true); for (const o of ch) o.y += (r.y1 - r.y0); } this.D.parts.push(q); this.select(q); this.touch(); },
  rotate(p) { if (!p) return; this.snap(); p.rot = (p.rot + 1) & 3; this.touch(); },
  mirror(p) { if (!p) return; this.snap(); p.flip = !p.flip; this.touch(); },
  mirrorSide(p) { if (!p) return; this.snap(); const q = clonePart(p); q.id = _pid++; q.st = {}; q.x = -p.x; q.flip = !p.flip; this.D.parts.push(q); this.touch(); },
  // изменение размера
  resize(p, o) {
    const r0 = prect(p), d = p.d; const stackish = !(d.attach === 'radial') && !(p.rot & 1) && !(Math.abs(p.x) > pw(p) * .6 && d.attach === 'both');
    const ch = stackish ? this.chainOf(p, true) : [];
    if (o.w != null) { p.w = o.w; if (d.shield && !d.shield.own) { p.h = Math.max(.15, p.w * .08); p.abl = d.shield.abl * Math.PI * p.w * p.w / 4; } }
    if (o.w2 != null) p.w2 = o.w2; if (o.h != null) p.h = o.h;
    if (o.n != null) { p.n = clamp(o.n | 0, 1, 33); p.w = clusterW(d.w, p.n); }
    fillPart(p);
    const r1 = prect(p), dh = (r1.y1 - r1.y0) - (r0.y1 - r0.y0), e = pext(p);
    if (!stackish) { const sg = p.x >= 0 ? 1 : -1; p.x = sg > 0 ? r0.x0 + e[0] : r0.x1 - e[0]; p.y = r0.y0 + e[1]; }
    else { p.y = r0.y0 + e[1]; if (Math.abs(dh) > 1e-6) for (const o2 of ch) o2.y += dh; }
    this.touch();
  },
  nudge(p, dx, dy) { p.x += dx; p.y += dy; this.touch(); },

  // ---------- магнитная стыковка (как в Spaceflight Simulator) ----------
  // Ищет лучшее место крепления детали P, если её центр «хотят» поставить в (nx, ny).
  // Возвращает { x, y, q, type } — type: 'up' (P над q), 'down', 'left', 'right' — или null.
  dockCands(P, nx, ny, excl, only) {
    const e = pext(P), T = only ? 1e9 : Math.max(.35, 24 / this.cam.ppm); let best = null, bs = 1e18;
    const cands = this.D.parts;
    const tryC = (type, q, cx, cy, xw, yw) => {
      const sc = Math.hypot((cx - nx) * xw, (cy - ny) * yw); if (sc > T) return;
      // пересечение с остальными (кроме тех, что сдвинутся при вставке)
      let pen = 0; if (!this.W.cheats.overlap) { const save = [P.x, P.y]; P.x = cx; P.y = cy; const skip = (type === 'up' || type === 'down') ? new Set(this.chainOf(q, type === 'up')) : null; for (const o of cands) { if (o === P || o === q || (excl && excl.has(o)) || (skip && skip.has(o))) continue; if (overlaps([P, o], P)) { pen = T * .8; break; } } P.x = save[0]; P.y = save[1]; }
      if (sc + pen < bs) { bs = sc + pen; best = { x: cx, y: cy, q, type, bad: pen > 0 }; }
    };
    for (const q of cands) {
      if (q === P || (excl && excl.has(q)) || (only && q !== only)) continue; const r = prect(q);
      if (acceptEdge(P, 'bottom') && acceptEdge(q, 'top')) tryC('up', q, q.x, r.y1 + e[1], .5, 1);
      if (acceptEdge(P, 'top') && acceptEdge(q, 'bottom')) tryC('down', q, q.x, r.y0 - e[1], .5, 1);
      if (acceptEdge(P, 'left') && acceptEdge(q, 'right')) for (const yc of [q.y, r.y0 + e[1], r.y1 - e[1]]) tryC('right', q, r.x1 + e[0], yc, 1, .5);
      if (acceptEdge(P, 'right') && acceptEdge(q, 'left')) for (const yc of [q.y, r.y0 + e[1], r.y1 - e[1]]) tryC('left', q, r.x0 - e[0], yc, 1, .5);
    }
    return best;
  },
  dockBest(P, nx, ny, excl, auto) {
    let s = this.dockCands(P, nx, ny, excl); if (!s) return null;
    if (auto && (s.type === 'up' || s.type === 'down')) { this.sizeFor(P, s.q, s.type); s = this.dockCands(P, nx, ny, excl, s.q) || s; }
    return s;
  },
  // свободное положение (без стыковки): не ниже земли, липнет к центральной оси
  freePos(P, nx, ny) {
    const e = pext(P), T = Math.max(.25, 8 / this.cam.ppm); let y = ny, x = nx;
    let low = P.d.wheel ? P.d.wheel.r : P.d.leg ? -P.d.leg.foot[1] + 0 : e[1]; if (P.d.leg) low = e[1];
    if (y < low) y = low; if (Math.abs(x) < T) x = 0; return [x, y];
  },
  // после стыковки: если деталь «влезла» между частями стопки — раздвинуть
  pushFor(P, s, excl) {
    if (!s || (s.type !== 'up' && s.type !== 'down')) return;
    const ch = this.chainOf(s.q, s.type === 'up').filter(o => o !== P && !(excl && excl.has(o))); if (!ch.length) return;
    const r = prect(P); let dy = 0;
    if (s.type === 'up') { for (const o of ch) dy = Math.max(dy, r.y1 - prect(o).y0); } else { for (const o of ch) dy = Math.min(dy, r.y0 - prect(o).y1); }
    if (Math.abs(dy) > .01) for (const o of ch) o.y += dy;
  },
  // ---------- перетаскивание из палитры ----------
  dockTop() { return this.dockEl ? this.dockEl.getBoundingClientRect().top : innerHeight * .8; },
  palDragStart(defId, ev) {
    const d = PARTS[defId]; if (!this.avail(d)) { UI.toast('Нужна технология ' + d.tier + ' (сейчас ' + this.W.tier + ')', 'bad'); return false; }
    const P = newPart(defId, 0, 0, {}); if (P.d.solar) P.st.deployed = true; if (P.d.ant) P.st.deployed = true; if (P.d.leg) P.st.deployed = true;
    const ref = (this.sel && this.D.parts.includes(this.sel)) ? this.sel : this.D.parts[this.D.parts.length - 1]; if (ref) this.sizeFor(P, ref, 'up');   // сразу разумный размер под соседа
    const g = Icons.clone(defId); g.className = 'ico ghost'; document.body.append(g);
    this.pal = { defId, P, g, snap: null, inCv: false, nx: 0, ny: 0 }; this.palDragMove(ev); return true;
  },
  palDragMove(ev) {
    const pal = this.pal; if (!pal) return;
    pal.g.style.left = (ev.clientX - 30) + 'px'; pal.g.style.top = (ev.clientY - 84) + 'px';
    const inCv = ev.clientY < this.dockTop() - 6; pal.inCv = inCv; pal.g.style.opacity = inCv ? 0 : 1;
    if (!inCv) { pal.snap = null; return; }
    const r = App.cv.getBoundingClientRect(), gx = (ev.clientX - r.left) / Gfx.scale, gy = (ev.clientY - r.top) / Gfx.scale - 30;   // деталь рисуем выше пальца, чтобы её было видно
    const [wx, wy] = this.wld(gx, gy); pal.nx = wx; pal.ny = wy;
    const P = pal.P; if (!this.D.parts.length) { P.x = 0; P.y = pext(P)[1]; pal.snap = null; return; }
    const s = this.dockBest(P, wx, wy, null, true);
    if (s) { P.x = s.x; P.y = s.y; pal.snap = s; if (s.type === 'left') P.flip = true; else if (s.type === 'right') P.flip = false; }
    else { const f = this.freePos(P, wx, wy); P.x = f[0]; P.y = f[1]; pal.snap = null; }
  },
  palDragEnd(ev) {
    const pal = this.pal; this.pal = null; if (!pal) return; pal.g.remove(); const D = this.D, P = pal.P;
    if (!pal.inCv) return;           // отпустили над палитрой — отмена
    this.snap();
    if (!D.parts.length) { P.x = 0; P.y = pext(P)[1]; D.parts.push(P); this.select(P); this.touch(); this.fit(); return; }
    const s = pal.snap; D.parts.push(P); const added = [P];
    if (s) {
      this.pushFor(P, s);
      if (this.sym && (s.type === 'left' || s.type === 'right')) { const q = clonePart(P); q.id = _pid++; q.x = 2 * s.q.x - P.x; q.flip = !P.flip; q.st = {}; D.parts.push(q); added.push(q); }
    } else UI.toast('Деталь не касается ракеты — подтяните её к другой детали', 'info');
    this.select(P); this.touch();
  },

  // ---------- анализ ----------
  analyze() {
    const D = this.D; const W = this.W; const B = W.homeBody;
    const ps = D.parts; if (!ps.length) { this.stats = { mass: 0, cost: 0, dv: 0, twr: 0, issues: [] }; return; }
    const val = validateDesign(ps, W);
    let a = { dv: 0, stages: [] }, tw = 0;
    try { a = totalDV(D, 9.80665, 0); const sl = B.atm ? B.atm.press(0) : 0; const b = analyzeStages(D, B.g, { pAmb: sl, dt: 1 }); tw = b.stages.length ? b.stages[0].twr : 0; } catch (e) { }
    this.stats = { mass: val.mass, cost: val.cost, dv: a.dv || 0, twr: tw, stages: a.stages || [], issues: val.issues, ok: val.ok, tier: val.tier };
    this.upd();
  },
  upd() {
    if (!this.root) return; const s = this.stats;
    if (this.stripEl) {
      this.stripEl.innerHTML = '';
      if (!s) this.stripEl.append(h('span', { class: 'mut' }, 'считаю…'));
      else {
        const bad = s.issues.filter(i => i.lvl === 'err').length, warn = s.issues.filter(i => i.lvl === 'warn').length;
        this.stripEl.append(...[h('span', null, fmtMass(s.mass)), h('span', { class: 'cy' }, 'Δv ' + Math.round(s.dv) + ' м/с'), h('span', { class: s.twr < 1 && s.twr > 0 ? 'rd' : '' }, 'TWR ' + s.twr.toFixed(2)), h('span', { class: 'yl' }, fmtMoney(s.cost)), (bad ? h('span', { class: 'rd' }, '⛔' + bad) : null), (warn ? h('span', { class: 'or' }, '⚠' + warn) : null)].filter(Boolean));
      }
    }
    if (this.chipEl) this.chips();
    if (this.goBtn) { const s = this.stats; this.goBtn.classList.toggle('dis', !(s && s.ok && this.D.parts.length)); }
  },
  need() { return !!(this.D.parts.length); },

  // ---------- DOM ----------
  dom() {
    const self = this, W = this.W;
    this.root = h('div', { class: 'scr' });
    this.nameEl = h('input', { type: 'text', value: this.D.name, maxlength: 28, style: 'flex:1;min-width:0', oninput: e => { this.D.name = e.target.value; } });
    const top = h('div', { class: 'top' }, h('div', { class: 'row' },
      h('button', { class: 'btn', onclick: () => this.exit() }, '←'), this.nameEl,
      h('button', { class: 'btn', onclick: () => this.undo() }, '↶'), h('button', { class: 'btn', onclick: () => this.redo() }, '↷'),
      h('button', { class: 'btn', onclick: () => this.menu() }, '⋯')));
    this.stripEl = h('div', { class: 'hud', style: 'position:static;margin-top:4px;pointer-events:auto;display:flex;gap:10px;flex-wrap:wrap;cursor:pointer', onclick: () => this.analysis() });
    top.append(this.stripEl);
    this.goBtn = h('button', { class: 'btn go big', onclick: () => this.launchManual(), style: 'width:76px;padding:6px' }, '▶', h('br'), h('span', { class: 'small' }, 'старт'));
    const aut = h('button', { class: 'btn big', onclick: () => AutoUI.open(this.D), style: 'width:76px;padding:6px;background:#4a2a8a' }, '✨', h('br'), h('span', { class: 'small' }, 'авто'));
    const side = h('div', { class: 'col', style: 'position:absolute;right:6px;top:calc(env(safe-area-inset-top) + 100px)' }, this.goBtn, aut,
      h('button', { class: 'btn sm', onclick: () => this.fit() }, '⌂'), h('button', { class: 'btn sm', onclick: () => this.zoom(1.3) }, '＋'), h('button', { class: 'btn sm', onclick: () => this.zoom(1 / 1.3) }, '−'));
    this.chipEl = h('div', { class: 'pn', style: 'position:absolute;left:0;right:0;bottom:158px;padding:5px 6px' });
    this.tilesEl = h('div', { class: 'row scroll', style: 'overflow-x:auto;overflow-y:hidden;gap:6px;padding:4px 2px 2px;align-items:stretch' });
    this.tabsEl = h('div', { class: 'tabs' });
    const dock = h('div', { class: 'pn solid', style: 'position:absolute;left:0;right:0;bottom:0;padding:4px 4px calc(env(safe-area-inset-bottom) + 4px)' }, this.tabsEl, this.tilesEl); this.dockEl = dock; const ts = $('#toast'); if (ts) ts.classList.add('lo');
    this.root.append(top, side, this.chipEl, dock);
    $('#ui').append(this.root);
    this.tabs(); this.tiles(); this.chips();
  },
  zoom(k) { this.cam.ppm = clamp(this.cam.ppm * k, .1, 120); },
  tabs() {
    this.tabsEl.innerHTML = '';
    const mk = (id, label) => h('button', { class: 'btn sm tab' + (this.cat === id ? ' on' : ''), onclick: () => { this.cat = id; this.tabs(); this.tiles(); } }, label);
    for (const [id, n] of CATS) this.tabsEl.append(mk(id, n)); this.tabsEl.append(mk('tpl', '★ Шаблоны'));
  },
  tiles() {
    const el = this.tilesEl; el.innerHTML = ''; el.scrollLeft = 0;
    if (this.cat === 'tpl') {
      const groups = [['rocket', '🚀 Ракеты'], ['probe', '🛰 Зонды'], ['rover', '🛞 Вездеходы']];
      for (const [kind, label] of groups) {
        const list = TEMPLATES.filter(t => t.kind === kind); if (!list.length) continue;
        el.append(h('div', { class: 'grp' }, label));
        for (const t of list) {
          const ok = this.W.sandbox || this.W.cheats.freeBuild || (designTier(t.make().parts) <= this.W.tier);
          el.append(h('div', { class: 'card ptile' + (ok ? '' : ' dis'), style: 'min-width:112px;max-width:112px;cursor:pointer;justify-content:flex-start', onclick: () => this.loadTemplate(t) },
            h('b', { class: 'tiny', style: 'text-align:center;line-height:1.1' }, t.name), h('span', { class: 'tiny mut', style: 'text-align:center;line-height:1.1;height:24px;overflow:hidden' }, (t.real || '').split(':')[0].slice(0, 34)), h('span', { class: 'tiny ' + (ok ? 'gr' : 'rd') }, ok ? 'открыть' : 'нужна техн.')));
        }
      }
      el.append(h('div', { class: 'card ptile', style: 'min-width:100px;max-width:100px;cursor:pointer;justify-content:flex-start', onclick: () => this.pickSaved() }, h('b', { class: 'tiny' }, '💾 Мои проекты'), h('span', { class: 'tiny mut' }, 'сохранённые')));
      return;
    }
    const list = PART_LIST.filter(d => d.cat === this.cat).sort((a, b) => (a.tier - b.tier) || (a.cost - b.cost));
    for (const d of list) {
      const ok = this.avail(d);
      const cv = Icons.clone(d.id);
      const tile = h('div', { class: 'card ptile pt' + (ok ? '' : ' dis'), style: 'min-width:86px;max-width:86px;cursor:pointer;justify-content:flex-start;padding:5px 3px' },
        cv, h('span', { class: 'tiny', style: 'text-align:center;line-height:1.05;height:22px;overflow:hidden' }, d.name),
        h('span', { class: 'tiny ' + (ok ? 'yl' : 'rd') }, ok ? fmtMoney(d.cost) : '🔒 тех.' + d.tier), PartInfo.badge(d.id, () => this.place(d.id)));
      this.tileInput(tile, d.id); el.append(tile);
    }
  },
  // тап — поставить к выбранной; потянуть вверх — перетащить на поле; удержать — справка
  tileInput(el, defId) {
    el.addEventListener('pointerdown', e => {
      if (e.target.classList && e.target.classList.contains('inf')) return;
      const st = { id: e.pointerId, x: e.clientX, y: e.clientY, drag: false, long: false };
      st.t = setTimeout(() => { if (!st.drag) { st.long = true; PartInfo.show(defId, () => this.place(defId)); } }, 520);
      const off = () => { clearTimeout(st.t); removeEventListener('pointermove', mv); removeEventListener('pointerup', up); removeEventListener('pointercancel', cn); };
      const mv = ev => {
        if (ev.pointerId !== st.id) return; const dx = ev.clientX - st.x, dy = ev.clientY - st.y;
        if (!st.drag && !st.long) {
          if (dy < -14 && Math.abs(dy) > Math.abs(dx) * .7) { st.drag = true; clearTimeout(st.t); if (!this.palDragStart(defId, ev)) { off(); return; } }
          else if (Math.hypot(dx, dy) > 10) clearTimeout(st.t);
        }
        if (st.drag) this.palDragMove(ev);
      };
      const up = ev => { if (ev.pointerId !== st.id) return; const moved = Math.hypot(ev.clientX - st.x, ev.clientY - st.y); off(); if (st.drag) this.palDragEnd(ev); else if (!st.long && moved < 10) this.place(defId); };
      const cn = ev => { if (ev.pointerId !== st.id) return; off(); if (st.drag && this.pal) { this.pal.g.remove(); this.pal = null; } };
      addEventListener('pointermove', mv); addEventListener('pointerup', up); addEventListener('pointercancel', cn);
    });
  },
  chips() {
    const el = this.chipEl, p = this.sel; el.innerHTML = '';
    const dirBtn = (k, l) => h('button', { class: 'btn sm' + (this.dir === k ? ' on' : ''), onclick: () => { this.dir = k; this.chips(); } }, l);
    const r1 = h('div', { class: 'row' }, dirBtn('up', '↑'), dirBtn('down', '↓'), dirBtn('left', '←'), dirBtn('right', '→'),
      h('button', { class: 'btn sm' + (this.sym ? ' on' : ''), onclick: () => { this.sym = !this.sym; this.chips(); } }, '⇆ симм.'),
      h('span', { class: 'sp' }), h('button', { class: 'btn sm' + (this.magnet ? ' on' : ''), onclick: () => { this.magnet = !this.magnet; this.chips(); } }, '🧲 магнит'),
      h('button', { class: 'btn sm' + (this.chain ? ' on' : ''), onclick: () => { this.chain = !this.chain; this.chips(); } }, '⇡ цепь'));
    el.append(r1);
    if (p) {
      el.append(h('div', { class: 'row w', style: 'margin-top:4px' }, h('b', { class: 'small cy', style: 'flex:1;min-width:90px' }, p.d.name + (p.n > 1 ? ' ×' + p.n : '')),
        h('button', { class: 'btn sm', onclick: () => PartInfo.show(p.defId) }, h('span', { class: 'inf s' }, 'i'), ' что это'), h('button', { class: 'btn sm', onclick: () => this.props() }, '✎ размер'), h('button', { class: 'btn sm', onclick: () => this.rotate(p) }, '⟳'), h('button', { class: 'btn sm', onclick: () => this.mirror(p) }, '⇋'),
        h('button', { class: 'btn sm', onclick: () => this.dup(p) }, '⧉'), (Math.abs(p.x) > .01 ? h('button', { class: 'btn sm', onclick: () => this.mirrorSide(p) }, '⇆+') : null),
        h('button', { class: 'btn sm warn', onclick: () => this.remove(p) }, '🗑')));
    }
  },
  // ---------- свойства детали ----------
  props() { if (!this.sel) return; if (this.propSheet) this.propSheet.close(); this.propSheet = UI.sheet('Деталь', h('div', { class: 'col' }), { onClose: () => { this.propSheet = null; }, height: '52%' }); this.propsRefresh(); },
  propsRefresh() {
    const sh = this.propSheet; if (!sh) return; const p = this.sel; const b = sh.body; b.innerHTML = ''; if (!p) { b.append(h('div', { class: 'mut' }, 'Деталь не выбрана')); return; }
    const d = p.d; const self = this;
    sh.setTitle(d.name);
    b.append(h('div', { class: 'small mut' }, 'Прототип: ' + d.real), h('div', { class: 'kv' }, h('span', null, 'Масса (сухая)'), h('span', null, fmtMass(p.dry))), h('div', { class: 'kv' }, h('span', null, 'Стоимость'), h('span', null, fmtMoney(partCost(p)))));
    if (d.tank) b.append(h('div', { class: 'kv' }, h('span', null, 'Топливо'), h('span', null, fmtMass(partCap(p)))));
    if (d.eng && !d.eng.rcs && !d.eng.solid) {
      const row = h('div', { class: 'col' }, h('div', { class: 'row' }, h('span', { class: 'small' }, 'Двигателей в связке: '), h('b', { class: 'cy', id: 'nval' }, String(p.n))),
        h('input', { type: 'range', min: 1, max: 33, step: 1, value: p.n, oninput: e => { self.resizeLive(p, { n: +e.target.value }); $('#nval').textContent = p.n; } }));
      b.append(row);
      const E = d.eng; b.append(h('div', { class: 'kv' }, h('span', null, 'Тяга (вакуум)'), h('span', null, fmtForce(E.Fv * p.n))), h('div', { class: 'kv' }, h('span', null, 'Удельный импульс'), h('span', null, E.IspV + ' с (вак.) / ' + Math.round(E.IspS) + ' с (у земли)')), h('div', { class: 'kv' }, h('span', null, 'Дросселирование'), h('span', null, E.thrMin < 1 ? Math.round(E.thrMin * 100) + '–100 %' : 'нет')), h('div', { class: 'kv' }, h('span', null, 'Перезапусков'), h('span', null, E.restarts >= 99 ? '∞' : E.restarts)));
    }
    if (d.size && d.size.dia) {
      const list = d.size.dia; const idx = Math.max(0, list.findIndex(x => Math.abs(x - p.w) < 1e-6)); const wv = h('b', { class: 'cy' }, p.w.toFixed(2) + ' м');
      b.append(h('div', { class: 'row' }, h('span', { class: 'small' }, d.id === 'adapter' ? 'Диаметр снизу: ' : 'Диаметр: '), wv),
        h('input', { type: 'range', min: 0, max: list.length - 1, step: 1, value: idx, oninput: e => { self.resizeLive(p, { w: list[+e.target.value] }); wv.textContent = p.w.toFixed(2) + ' м'; } }));
      if (d.id === 'adapter') { const iv = h('b', { class: 'cy' }, (p.w2 || 0).toFixed(2) + ' м'); const i2 = Math.max(0, list.findIndex(x => Math.abs(x - p.w2) < 1e-6)); b.append(h('div', { class: 'row' }, h('span', { class: 'small' }, 'Диаметр сверху: '), iv), h('input', { type: 'range', min: 0, max: list.length - 1, step: 1, value: i2, oninput: e => { self.resizeLive(p, { w2: list[+e.target.value] }); iv.textContent = p.w2.toFixed(2) + ' м'; } })); }
    }
    if (d.size && d.size.len) {
      const [mn, mx, st] = d.size.len; const lv = h('b', { class: 'cy' }, p.h.toFixed(2) + ' м');
      b.append(h('div', { class: 'row' }, h('span', { class: 'small' }, 'Длина: '), lv), h('input', { type: 'range', min: mn, max: mx, step: st, value: p.h, oninput: e => { self.resizeLive(p, { h: +e.target.value }); lv.textContent = p.h.toFixed(2) + ' м'; } }));
    }
    if (!(d.size && d.size.dia) && !d.eng && !d.tank) b.append(h('div', { class: 'small mut' }, 'Размер этой детали фиксирован — как у настоящего изделия.'));
    // ступень
    const act = partAction(p);
    if (act) {
      const sv = h('b', { class: 'yl' }, p.stage < 0 ? '—' : String(p.stage + 1));
      b.append(h('div', { class: 'hr' }), h('div', { class: 'row' }, h('span', { class: 'small' }, ACT_NAMES[act] + ' на ступени: '), sv, h('span', { class: 'sp' }),
        h('button', { class: 'btn sm', onclick: () => { this.manualStage = true; p.stage = Math.max(-1, p.stage - 1); sv.textContent = p.stage < 0 ? '—' : p.stage + 1; this.touch(); } }, '−'),
        h('button', { class: 'btn sm', onclick: () => { this.manualStage = true; p.stage = Math.min(30, p.stage + 1); sv.textContent = p.stage + 1; this.touch(); } }, '+')));
    }
    // точная подвижка
    b.append(h('div', { class: 'hr' }), h('div', { class: 'small mut' }, 'Сдвиг детали (шаг 0,25 м):'), h('div', { class: 'row w' },
      h('button', { class: 'btn sm', onclick: () => { this.snap(); this.nudge(p, -.25, 0); } }, '←'), h('button', { class: 'btn sm', onclick: () => { this.snap(); this.nudge(p, .25, 0); } }, '→'),
      h('button', { class: 'btn sm', onclick: () => { this.snap(); this.nudge(p, 0, .25); } }, '↑'), h('button', { class: 'btn sm', onclick: () => { this.snap(); this.nudge(p, 0, -.25); } }, '↓')));
  },
  resizeLive(p, o) { if (!this._snapT || performance.now() - this._snapT > 800) this.snap(); this._snapT = performance.now(); this.resize(p, o); },

  // ---------- меню, шаблоны, сохранение ----------
  menu() {
    const sh = UI.sheet('Проект', h('div', { class: 'col' }), { height: '58%' }); const b = sh.body;
    const btn = (t, f, cls) => h('button', { class: 'btn ' + (cls || ''), onclick: () => { sh.close(); f(); } }, t);
    b.append(btn('📐 Ступени и анализ', () => this.analysis()), btn('💾 Сохранить проект', () => this.saveDesign()), btn('📂 Мои проекты', () => this.pickSaved()), btn('⚙ Авто-ступени (сбросить ручные)', () => { this.manualStage = false; this.touch(); UI.toast('Ступени расставлены заново', 'ok'); }),
      btn('🔍 Показать всё', () => this.fit()), btn('🧹 Очистить ангар', () => { this.snap(); this.D.parts = []; this.D.edges = []; this.vp.parts = this.D.parts; this.sel = null; this.touch(); }, 'warn'));
  },
  loadTemplate(t) {
    const D = t.make(); const need = designTier(D.parts);
    if (!(this.W.sandbox || this.W.cheats.freeBuild) && need > this.W.tier) { UI.toast('Шаблон требует технологию ' + need + ' (сейчас ' + this.W.tier + ')', 'bad'); return; }
    const go = () => { this.snap(); this.D.parts = D.parts; this.D.edges = D.edges; this.D.name = t.name; this.nameEl.value = t.name; this.manualStage = false; this.vp.parts = this.D.parts; this.sel = null; this.touch(); this.fit(); if (UI.toastEl) UI.toastEl.innerHTML = ''; UI.toast(t.name + ': ' + t.note, 'info'); };
    if (this.D.parts.length) UI.confirm('Заменить текущий проект шаблоном «' + t.name + '»?', go); else go();
  },
  saveDesign() {
    if (!this.D.parts.length) return; const lib = Store.get('designs', []); const js = serDesign(this.D); js.name = this.D.name || 'Проект'; js.t = Date.now();
    const i = lib.findIndex(x => x.name === js.name); if (i >= 0) lib[i] = js; else lib.unshift(js); Store.set('designs', lib.slice(0, 40)); UI.toast('Сохранено: ' + js.name, 'ok');
  },
  pickSaved() {
    const lib = Store.get('designs', []); const sh = UI.sheet('Мои проекты', h('div', { class: 'col' }), { height: '60%' });
    if (!lib.length) sh.body.append(h('div', { class: 'mut' }, 'Пока пусто. Нажмите ⋯ → «Сохранить проект».'));
    for (const js of lib) {
      sh.body.append(h('div', { class: 'card row' }, h('div', { class: 'sp' }, h('b', null, js.name), h('div', { class: 'tiny mut' }, js.parts.length + ' дет. · ' + new Date(js.t || 0).toLocaleDateString('ru'))),
        h('button', { class: 'btn sm go', onclick: () => { sh.close(); this.snap(); const D = desDesign(js); this.D.parts = D.parts; this.D.edges = D.edges; this.D.name = js.name; this.nameEl.value = js.name; this.manualStage = D.parts.some(p => p.stage >= 0); this.vp.parts = this.D.parts; this.sel = null; this.touch(); this.fit(); } }, 'Открыть'),
        h('button', { class: 'btn sm warn', onclick: () => { Store.set('designs', Store.get('designs', []).filter(x => x.name !== js.name)); sh.close(); this.pickSaved(); } }, '🗑')));
    }
  },
  // ---------- анализ и ступени ----------
  analysis() {
    this.analyze(); const s = this.stats; const sh = UI.sheet('Анализ и ступени', h('div', { class: 'col' }), { height: '78%' }); const b = sh.body;
    if (!s || !this.D.parts.length) { b.append(h('div', { class: 'mut' }, 'Добавьте детали.')); return; }
    for (const i of s.issues) b.append(h('div', { class: 'card ' + (i.lvl === 'err' ? 'rd' : 'or'), style: 'font-size:13px' }, (i.lvl === 'err' ? '⛔ ' : '⚠ ') + i.text));
    b.append(h('div', { class: 'card' }, h('div', { class: 'kv' }, h('span', null, 'Масса на старте'), h('span', null, fmtMass(s.mass))), h('div', { class: 'kv' }, h('span', null, 'Стоимость'), h('span', null, fmtMoney(s.cost))), h('div', { class: 'kv' }, h('span', null, 'Δv (вакуум)'), h('span', { class: 'cy' }, Math.round(s.dv) + ' м/с')),
      h('div', { class: 'kv' }, h('span', null, 'Тяговооружённость 1-й ступени'), h('span', null, s.twr.toFixed(2) + ' на ' + this.W.homeBody.name))));
    if (s.stages && s.stages.length) { b.append(h('h3', null, 'Ступени (выгорание)')); for (const st of s.stages) b.append(h('div', { class: 'card' }, h('div', { class: 'kv' }, h('b', null, 'Ступень ' + (st.stage + 1)), h('span', { class: 'cy' }, Math.round(st.dv) + ' м/с')), h('div', { class: 'kv' }, h('span', null, 'время работы'), h('span', null, fmtDur(st.t))), h('div', { class: 'kv' }, h('span', null, 'масса до → после'), h('span', null, fmtMass(st.mStart) + ' → ' + fmtMass(st.mEnd))))); }
    // расстановка по ступеням
    b.append(h('h3', null, 'Что срабатывает на каждой ступени'), h('div', { class: 'small mut' }, 'Кнопка ± двигает деталь между ступенями. Ступень 1 срабатывает при старте.'));
    const acts = this.D.parts.filter(p => partAction(p) && !(p.d.leg) && !(p.d.eng && p.d.eng.rcs)).sort((a, b) => (a.stage < 0 ? 99 : a.stage) - (b.stage < 0 ? 99 : b.stage));
    for (const p of acts) {
      const lbl = h('b', { class: 'yl', style: 'min-width:22px;text-align:center' }, p.stage < 0 ? '—' : p.stage + 1);
      b.append(h('div', { class: 'card row' }, h('div', { class: 'sp small' }, h('b', null, p.d.name), h('div', { class: 'tiny mut' }, ACT_NAMES[partAction(p)] + (p.n > 1 ? ' ×' + p.n : ''))),
        h('button', { class: 'btn sm', onclick: () => { this.manualStage = true; p.stage = Math.max(-1, p.stage - 1); lbl.textContent = p.stage < 0 ? '—' : p.stage + 1; this.touch(); } }, '−'), lbl,
        h('button', { class: 'btn sm', onclick: () => { this.manualStage = true; p.stage = Math.min(30, p.stage + 1); lbl.textContent = p.stage + 1; this.touch(); } }, '+')));
    }
  },
  exit() { if (this.D.parts.length) { UI.confirm('Выйти из ангара? Проект сохранится как черновик.', () => { Store.set('draft', serDesign(this.D)); this.close(); }); } else this.close(); },

  // ---------- запуск ----------
  launchManual() {
    this.analyze(); const s = this.stats; if (!s || !s.ok) { this.analysis(); return; }
    const miss = s.issues.filter(i => i.lvl === 'warn');
    const go = () => { Store.set('draft', serDesign(this.D)); UI.launch(this.D, null); };
    if (miss.length) UI.confirm('Есть предупреждения (' + miss.length + '): ' + miss[0].text + '. Всё равно на старт?', go); else go();
  },

  // ---------- ввод ----------
  bindPointer() {
    const cv = App.cv; this._d = e => this.pdown(e); this._m = e => this.pmove(e); this._u = e => this.pup(e); this._w = e => { e.preventDefault(); this.zoom(e.deltaY < 0 ? 1.15 : 1 / 1.15); };
    cv.addEventListener('pointerdown', this._d); addEventListener('pointermove', this._m); addEventListener('pointerup', this._u); addEventListener('pointercancel', this._u); cv.addEventListener('wheel', this._w, { passive: false });
  },
  unbindPointer() { const cv = App.cv; cv.removeEventListener('pointerdown', this._d); removeEventListener('pointermove', this._m); removeEventListener('pointerup', this._u); removeEventListener('pointercancel', this._u); cv.removeEventListener('wheel', this._w); },
  xy(e) { const r = App.cv.getBoundingClientRect(); return [(e.clientX - r.left) / Gfx.scale, (e.clientY - r.top) / Gfx.scale]; },
  pdown(e) {
    if (App.mode !== 'build') return; const [x, y] = this.xy(e); this.ptrs.set(e.pointerId, { x, y, x0: x, y0: y }); try { App.cv.setPointerCapture(e.pointerId); } catch (_) { }
    if (this.ptrs.size === 1) {
      const p = this.hit(x, y); this.drag = { part: p, moved: false, mode: (p && p === this.sel) ? 'part' : 'pan', cam0: { x: this.cam.x, y: this.cam.y }, p0: p ? { x: p.x, y: p.y } : null, sx: x, sy: y, snapped: false };
      if (p && p === this.sel) this.drag.snapSaved = false;
    } else if (this.ptrs.size === 2) { const a = [...this.ptrs.values()]; this.pinch = { d: Math.hypot(a[0].x - a[1].x, a[0].y - a[1].y), ppm: this.cam.ppm, cx: (a[0].x + a[1].x) / 2, cy: (a[0].y + a[1].y) / 2, cam: { x: this.cam.x, y: this.cam.y } }; this.drag = null; }
  },
  pmove(e) {
    if (App.mode !== 'build' || !this.ptrs.has(e.pointerId)) return; const [x, y] = this.xy(e); const P = this.ptrs.get(e.pointerId); P.x = x; P.y = y;
    if (this.ptrs.size >= 2 && this.pinch) {
      const a = [...this.ptrs.values()]; const d = Math.hypot(a[0].x - a[1].x, a[0].y - a[1].y); const k = d / Math.max(1, this.pinch.d);
      this.cam.ppm = clamp(this.pinch.ppm * k, .1, 120); const mx = (a[0].x + a[1].x) / 2, my = (a[0].y + a[1].y) / 2;
      this.cam.x = this.pinch.cam.x - (mx - this.pinch.cx) / this.cam.ppm; this.cam.y = this.pinch.cam.y + (my - this.pinch.cy) / this.cam.ppm; return;
    }
    const dr = this.drag; if (!dr) return; const dx = x - dr.sx, dy = y - dr.sy;
    if (!dr.moved && Math.hypot(dx, dy) > 3) dr.moved = true;
    if (!dr.moved) return;
    if (dr.mode === 'pan') { this.cam.x = dr.cam0.x - dx / this.cam.ppm; this.cam.y = dr.cam0.y + dy / this.cam.ppm; }
    else if (dr.part) {
      if (!dr.snapSaved) { this.snap(); dr.snapSaved = true; dr.chainSet = this.chain ? this.chainOf(dr.part, true).map(o => ({ o, x: o.x, y: o.y })) : null; }
      let nx = dr.p0.x + dx / this.cam.ppm, ny = dr.p0.y - dy / this.cam.ppm;
      dr.snap = null;
      if (this.magnet) { const ex = new Set(dr.chainSet ? dr.chainSet.map(c => c.o) : []); const s = this.dockCands(dr.part, nx, ny, ex); if (s) { nx = s.x; ny = s.y; dr.snap = s; } else { const f = this.freePos(dr.part, nx, ny); nx = f[0]; ny = f[1]; } }
      const mx = nx - dr.part.x, my = ny - dr.part.y; dr.part.x = nx; dr.part.y = ny; if (dr.chainSet) for (const c of dr.chainSet) { c.o.x += mx; c.o.y += my; }
      this.D.edges = computeEdges(this.D.parts); this.stats = null; this.anaT = .3;
    }
  },
  pup(e) {
    if (!this.ptrs.has(e.pointerId)) return; const P = this.ptrs.get(e.pointerId); this.ptrs.delete(e.pointerId);
    if (this.ptrs.size === 0) {
      const dr = this.drag; this.drag = null; this.pinch = null;
      if (dr) {
        if (!dr.moved) { const p = this.hit(P.x, P.y); this.select(p); }
        else if (dr.mode === 'part') { this.pushFor(dr.part, dr.snap, new Set(dr.chainSet ? dr.chainSet.map(c => c.o) : [])); this.touch(); }
      }
    } else if (this.ptrs.size < 2) this.pinch = null;
  },
  snapPos(p, nx, ny) {
    const e = pext(p), T = Math.max(.25, 8 / this.cam.ppm); let bx = nx, by = ny, dxm = T, dym = T;
    const tryX = v => { const d = Math.abs(v - nx); if (d < dxm) { dxm = d; bx = v; } }, tryY = v => { const d = Math.abs(v - ny); if (d < dym) { dym = d; by = v; } };
    tryX(0);
    for (const q of this.D.parts) {
      if (q === p) continue; const r = prect(q);
      tryX(r.x1 + e[0]); tryX(r.x0 - e[0]); tryX(q.x); tryX(r.x1 - e[0]); tryX(r.x0 + e[0]);
      tryY(r.y1 + e[1]); tryY(r.y0 - e[1]); tryY(q.y); tryY(r.y1 - e[1]); tryY(r.y0 + e[1]);
    }
    return [bx, by];
  },

  // ---------- кадр ----------
  frame(g, dt) {
    if (this.anaT > 0) { this.anaT -= dt; if (this.anaT <= 0) this.analyze(); }
    const c = this.cam;
    // фон: ангар
    for (let y = 0; y < g.h; y++) { const t = y / g.h; const col = rgb(10 + t * 10, 14 + t * 14, 30 + t * 22); const o = y * g.w; for (let x = 0; x < g.w; x++) g.buf[o + x] = col; }
    const [, gy] = this.scr(0, 0);
    // сетка
    const steps = [.25, .5, 1, 2, 5, 10, 20, 50, 100, 200, 500]; let st = steps.find(s => s * c.ppm >= 9) || 500;
    const gridC = rgb(24, 34, 62), gridM = rgb(36, 50, 90);
    const [wx0] = this.wld(0, 0), [wx1] = this.wld(g.w, 0); const [, wy1] = this.wld(0, 0), [, wy0] = this.wld(0, g.h);
    for (let X = Math.ceil(wx0 / st) * st; X <= wx1; X += st) { const sx = this.scr(X, 0)[0] | 0; const major = Math.abs(Math.round(X / st)) % 5 === 0; const col = major ? gridM : gridC; for (let y = 0; y < g.h; y++) g.px(sx, y, col); }
    for (let Y = Math.ceil(wy0 / st) * st; Y <= wy1; Y += st) { const sy = this.scr(0, Y)[1] | 0; const major = Math.abs(Math.round(Y / st)) % 5 === 0; const col = major ? gridM : gridC; g.hline(0, g.w - 1, sy, col); if (major && Y >= 0) g.micro(2, sy - 6, String(Math.round(Y)) + (Math.abs(Y) >= 1 ? 'M' : ''), rgb(90, 120, 190)); }
    // центральная ось
    const [cx0] = this.scr(0, 0); for (let y = 0; y < g.h; y += 4) g.px(cx0 | 0, y, rgb(60, 90, 160));
    // границы площадки
    if (!this.W.cheats.infField) { const [bx0, by0] = this.scr(-BUILD_W, BUILD_H), [bx1] = this.scr(BUILD_W, 0); const bc = rgb(120, 70, 70); g.dashed(bx0, by0, bx1, by0, bc, 4, 4); g.dashed(bx0, by0, bx0, gy, bc, 4, 4); g.dashed(bx1, by0, bx1, gy, bc, 4, 4); }
    // площадка
    if (gy < g.h) { g.rect(0, gy, g.w, g.h - gy, rgb(52, 58, 72)); g.hline(0, g.w - 1, gy | 0, rgb(150, 160, 185)); for (let x = -((c.x * c.ppm) % 16) | 0; x < g.w; x += 16) g.px(x, gy + 3, rgb(90, 98, 120)); g.rect(0, gy + 1, g.w, 1, rgb(96, 104, 128)); }
    // аппарат
    const ps = this.D.parts;
    if (ps.length) {
      for (const p of ps) { if (p.d.solar) p.st.deployed = true; if (p.d.ant) p.st.deployed = true; if (p.d.leg) p.st.deployed = true; p.shielded = false; }
      Art.vessel(this.vp, g, { ox: g.w / 2, oy: g.h * .46, ppm: c.ppm, psi: 0, cx: c.x, cy: c.y }, { x: -.5, y: .62, z: .6, amb: .28 }, { all: true });
      // пересечения
      if (!this.W.cheats.overlap) for (const p of ps) { if (overlaps(ps, p)) { const r = prect(p), a = this.scr(r.x0, r.y1), b = this.scr(r.x1, r.y0); this.box(g, a[0], a[1], b[0], b[1], rgb(255, 70, 60), true); } }
      // номера ступеней
      if (this.showStages) for (const p of ps) { if (p.stage >= 0 && partAction(p) && !p.d.leg) { const a = this.scr(p.x, p.y); const pxh = p.h * c.ppm; if (pxh > 7 || pwid(p) * c.ppm > 8) { g.rect(a[0] - 3, a[1] - 3, 7, 7, rgb(0, 0, 0)); g.micro(a[0] - 1, a[1] - 2, String(p.stage + 1), p.d.dec ? rgb(255, 220, 90) : p.d.eng ? rgb(255, 150, 80) : rgb(140, 220, 255)); } } }
      // выбранная
      const s = this.sel; if (s && ps.includes(s)) {
        const r = prect(s), a = this.scr(r.x0, r.y1), b = this.scr(r.x1, r.y0); this.box(g, a[0] - 1, a[1] - 1, b[0] + 1, b[1] + 1, rgb(255, 226, 90), false);
        // стрелка направления крепления
        const mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2, cc = rgb(111, 216, 255), k = 6 + Math.sin(App.t * 6) * 1.5;
        if (this.dir === 'up') g.tri(mx, a[1] - 3 - k, mx - 4, a[1] - 3, mx + 4, a[1] - 3, cc); if (this.dir === 'down') g.tri(mx, b[1] + 3 + k, mx - 4, b[1] + 3, mx + 4, b[1] + 3, cc);
        if (this.dir === 'left') g.tri(a[0] - 3 - k, my, a[0] - 3, my - 4, a[0] - 3, my + 4, cc); if (this.dir === 'right') g.tri(b[0] + 3 + k, my, b[0] + 3, my - 4, b[0] + 3, my + 4, cc);
      }
    }
    // подсветка стыковки при перетаскивании существующей детали
    if (this.drag && this.drag.moved && this.drag.mode === 'part' && this.drag.snap) this.drawSnap(g, this.drag.part, this.drag.snap);
    // «призрак» детали, которую тянут из палитры
    const pal = this.pal;
    if (pal && pal.inCv) {
      const P = pal.P; P.shielded = false; this.vpG = this.vpG || { parts: [] }; this.vpG.parts = [P];
      Art.vessel(this.vpG, g, { ox: g.w / 2, oy: g.h * .46, ppm: c.ppm, psi: 0, cx: c.x, cy: c.y }, { x: -.5, y: .62, z: .6, amb: .28 }, { all: true });
      const r = prect(P), a = this.scr(r.x0, r.y1), b = this.scr(r.x1, r.y0);
      this.box(g, a[0] - 1, a[1] - 1, b[0] + 1, b[1] + 1, pal.snap ? (pal.snap.bad ? rgb(255, 120, 70) : rgb(110, 255, 150)) : rgb(255, 226, 90), false);
      if (pal.snap) this.drawSnap(g, P, pal.snap);
    }
    g.micro(g.w - 30, g.h - 8, c.ppm.toFixed(1) + 'PX', rgb(90, 110, 170));
  },
  // яркая полоска на стыке + точки на концах — как «узлы крепления» в SFS
  drawSnap(g, P, s) {
    const r = prect(P), q = prect(s.q), col = s.bad ? rgb(255, 150, 80) : rgb(120, 255, 160); let a, b;
    if (s.type === 'up') { const y = r.y0, x0 = Math.max(r.x0, q.x0), x1 = Math.min(r.x1, q.x1); a = this.scr(x0, y); b = this.scr(x1, y); }
    else if (s.type === 'down') { const y = r.y1, x0 = Math.max(r.x0, q.x0), x1 = Math.min(r.x1, q.x1); a = this.scr(x0, y); b = this.scr(x1, y); }
    else { const x = s.type === 'right' ? r.x0 : r.x1, y0 = Math.max(r.y0, q.y0), y1 = Math.min(r.y1, q.y1); a = this.scr(x, y1); b = this.scr(x, y0); }
    g.dashed(a[0], a[1], b[0], b[1], col, 2, 1); g.rect((a[0] | 0) - 1, (a[1] | 0) - 1, 3, 3, col); g.rect((b[0] | 0) - 1, (b[1] | 0) - 1, 3, 3, col);
  },
  box(g, x0, y0, x1, y1, c, thick) { g.dashed(x0, y0, x1, y0, c, 3, 2); g.dashed(x0, y1, x1, y1, c, 3, 2); g.dashed(x0, y0, x0, y1, c, 3, 2); g.dashed(x1, y0, x1, y1, c, 3, 2); if (thick) { g.dashed(x0 + 1, y0 + 1, x1 - 1, y0 + 1, c, 3, 2); } }
};
const pwid = p => pw(p);
