'use strict';
// ============ Карта: орбиты, фокус на теле, планировщик перелётов и манёвров ============
const MapV = {
  root: null, W: null, focus: null, mpp: 1e6, pan: { x: 0, y: 0 }, lbls: [], ptrs: new Map(), drag: null, pinch: null, E: {}, sheet: null, plan: null, tgt: null, hudT: 0,
  open() {
    const W = this.W = App.W; const v = W.active && W.active.alive ? W.active : null; this.focus = v ? v.body : W.U.home; this.plan = null; this.tgt = null;
    this.fit(); this.dom(); this.bind(); App.mode = 'map';
  },
  leave() { this.unbind(); if (this.root) this.root.remove(); this.root = null; this.lbls = []; if (this.sheet) { this.sheet.close(); this.sheet = null; } },
  B() { return this.W.U.byId[this.focus]; },
  fit() {
    const W = this.W, B = this.B(), v = W.active && W.active.alive && W.active.body === B.id ? W.active : null; this.pan = { x: 0, y: 0 };
    let ext = B.R * 3;
    if (v) { const el = orbitInfo(W, v); ext = Math.max(ext, el.bound ? el.ra * 1.15 : Math.min(el.rp * 6, (B.soi < Infinity ? B.soi : 1e12))); }
    if (B.children.length && !v) { ext = Math.max(ext, ...B.children.map(c => c.orb.a * (1 + (c.e || 0)))); }
    else if (B.children.length && v) { const near = B.children.filter(c => c.orb.a < ext * 3); }
    ext = Math.min(ext, 1e14); this.mpp = ext / (Math.min(Gfx.w, Gfx.h * .8) * 0.45);
  },
  dom() {
    const E = this.E = {}; const root = this.root = h('div', { class: 'scr' });
    E.title = h('b', { class: 'cy', style: 'flex:1;text-align:center' }, '');
    const top = h('div', { class: 'top' }, h('div', { class: 'row' }, h('button', { class: 'btn', onclick: () => UI.go('flight') }, '← Полёт'), E.title,
      h('button', { class: 'btn', onclick: () => this.focusSheet() }, '◎'), h('button', { class: 'btn', onclick: () => { this.fit(); } }, '⌂')));
    E.info = h('div', { class: 'hud', style: 'left:6px;top:calc(env(safe-area-inset-top) + 56px);font-size:11px;line-height:1.35' });
    const bot = h('div', { class: 'row', style: 'position:absolute;left:6px;right:6px;bottom:calc(env(safe-area-inset-bottom) + 6px)' },
      h('button', { class: 'btn sp', onclick: () => this.planSheet() }, '🧭 Маршрут и манёвры'), h('button', { class: 'btn', onclick: () => this.warpBtn(-1) }, '⏪'), E.wl = h('b', { class: 'cy', style: 'min-width:48px;text-align:center' }, '×1'), h('button', { class: 'btn', onclick: () => this.warpBtn(1) }, '⏩'));
    const zoom = h('div', { class: 'col', style: 'position:absolute;right:6px;top:calc(env(safe-area-inset-top) + 56px)' }, h('button', { class: 'btn sm', onclick: () => this.mpp /= 1.4 }, '＋'), h('button', { class: 'btn sm', onclick: () => this.mpp *= 1.4 }, '−'));
    root.append(top, E.info, zoom, bot); $('#ui').append(root);
  },
  warpBtn(d) { const W = this.W; const mx = W.maxWarpIdx(); const ni = clamp(W.warpIdx + d, 0, WARPS.length - 1); if (d > 0 && ni > mx) { UI.toast('Сейчас нельзя ускорять', 'bad'); return; } W.setWarp(ni); },
  key(e) { if (e.code === 'KeyM' || e.code === 'Escape') UI.go('flight'); },
  // ---------- ввод ----------
  bind() {
    const cv = App.cv; const xy = e => { const r = cv.getBoundingClientRect(); return [(e.clientX - r.left) / Gfx.scale, (e.clientY - r.top) / Gfx.scale]; };
    this._d = e => { if (App.mode !== 'map') return; const [x, y] = xy(e); this.ptrs.set(e.pointerId, { x, y }); try { cv.setPointerCapture(e.pointerId); } catch (_) { } if (this.ptrs.size === 1) this.drag = { x, y, px: this.pan.x, py: this.pan.y, moved: false }; else { const a = [...this.ptrs.values()]; this.pinch = { d: Math.hypot(a[0].x - a[1].x, a[0].y - a[1].y), mpp: this.mpp }; this.drag = null; } };
    this._m = e => { if (App.mode !== 'map' || !this.ptrs.has(e.pointerId)) return; const [x, y] = xy(e); this.ptrs.set(e.pointerId, { x, y }); if (this.ptrs.size >= 2 && this.pinch) { const a = [...this.ptrs.values()]; const d = Math.hypot(a[0].x - a[1].x, a[0].y - a[1].y); this.mpp = clamp(this.pinch.mpp * this.pinch.d / Math.max(1, d), 1e-1, 1e14); return; } if (this.drag) { const dx = x - this.drag.x, dy = y - this.drag.y; if (Math.hypot(dx, dy) > 3) this.drag.moved = true; if (this.drag.moved) { this.pan.x = this.drag.px - dx * this.mpp; this.pan.y = this.drag.py + dy * this.mpp; } } };
    this._u = e => { if (!this.ptrs.has(e.pointerId)) return; const P = this.ptrs.get(e.pointerId); this.ptrs.delete(e.pointerId); if (this.ptrs.size === 0) { const dr = this.drag; this.drag = null; this.pinch = null; if (dr && !dr.moved) this.tap(P.x, P.y); } else this.pinch = null; };
    this._w = e => { e.preventDefault(); this.mpp = clamp(this.mpp * (e.deltaY < 0 ? 1 / 1.15 : 1.15), 1e-1, 1e14); };
    cv.addEventListener('pointerdown', this._d); addEventListener('pointermove', this._m); addEventListener('pointerup', this._u); addEventListener('pointercancel', this._u); cv.addEventListener('wheel', this._w, { passive: false });
  },
  unbind() { const cv = App.cv; cv.removeEventListener('pointerdown', this._d); removeEventListener('pointermove', this._m); removeEventListener('pointerup', this._u); removeEventListener('pointercancel', this._u); cv.removeEventListener('wheel', this._w); this.ptrs.clear(); },
  tap(x, y) {   // выбор тела касанием: переключить фокус
    const W = this.W, B = this.B(); let best = null, bd = 18;
    const test = (b, wx, wy) => { const s = this.scr(wx, wy); const d = Math.hypot(s[0] - x, s[1] - y); if (d < bd) { bd = d; best = b; } };
    for (const c of B.children) { const o = this.childPos(c); test(c, o[0], o[1]); }
    if (best) { this.setFocus(best.id); }
  },
  setFocus(id) { this.focus = id; this.fit(); },
  childPos(c) { const t = this._t || (this._t = { x: 0, y: 0, vx: 0, vy: 0 }); bodyLocal(c, this.W.ut, t); return [t.x, t.y]; },
  scr(x, y) { return [Gfx.w / 2 + (x - this.pan.x) / this.mpp, Gfx.h * .44 - (y - this.pan.y) / this.mpp]; },
  focusSheet() {
    const W = this.W, B = this.B(), b = h('div', { class: 'col' }); const sh = UI.sheet('Фокус карты', b, { height: '60%' });
    const btn = (x, pre) => h('button', { class: 'btn' + (x.id === this.focus ? ' on' : ''), onclick: () => { sh.close(); this.setFocus(x.id); } }, (pre || '') + x.name + (x.kind === 'star' ? ' ☀' : ''));
    if (B.parent) b.append(btn(W.U.byId[B.parent], '⬆ '));
    b.append(btn(B, '● ')); for (const c of B.children) b.append(btn(c, '  ◦ '));
  },
  // ---------- рисование ----------
  curve(g, el, a, b, col, step, dashed) {
    // рисуем конику по истинной аномалии от a до b
    const n = clamp(Math.round(Math.abs(b - a) * Math.sqrt(Math.min(1e5, Math.max(el.p, 1) / this.mpp)) * 0.9), 48, 700); let pr = null;
    for (let i = 0; i <= n; i++) { const nu = a + (b - a) * i / n; const q = conicAt(el, nu); if (!isFinite(q[0])) { pr = null; continue; } const s = this.scr(q[0], q[1]); if (pr && (!dashed || (i & 2))) { if (Math.abs(s[0] - pr[0]) < 3000 && Math.abs(s[1] - pr[1]) < 3000) g.line(pr[0], pr[1], s[0], s[1], col); } pr = s; }
  },
  lbl(i, text, x, y, cls) {
    let e = this.lbls[i]; if (!e) { e = this.lbls[i] = h('div', { class: 'lbl' }); this.root.append(e); }
    e.textContent = text; e.className = 'lbl ' + (cls || ''); e.style.left = Math.round(x * Gfx.scale + 6) + 'px'; e.style.top = Math.round(y * Gfx.scale - 6) + 'px'; e.style.display = '';
  },
  tick(g, dt) {
    const W = this.W; W.step(dt); UI.pumpLogs(W);
    const B = this.B(); const v = W.active && W.active.alive ? W.active : null;
    // фон
    for (let y = 0; y < g.h; y++) { const o = y * g.w, c = rgb(4, 6, 14 + (y / g.h) * 8); for (let x = 0; x < g.w; x++) g.buf[o + x] = c; }
    for (let i = 0; i < 90; i++) { const hx = (hash2(i, 3) * g.w) | 0, hy = (hash2(i, 7) * g.h) | 0; g.px(hx, hy, rgb(70 + hash2(i, 9) * 100, 80 + hash2(i, 9) * 90, 120 + hash2(i, 11) * 100)); }
    let li = 0; const cB = typeof B.color === 'number' ? B.color : rgb(200, 200, 220);
    // тело
    const c0 = this.scr(0, 0); const rpx = Math.max(2.5, B.R / this.mpp);
    if (B.kind === 'star') { g.disc(c0[0], c0[1], rpx * 1.12, add(cB, -40, -60, -60)); }
    if (B.atm && rpx > 4) g.disc(c0[0], c0[1], Math.max(rpx + 1, (B.R + B.atm.top) / this.mpp), mix(B.atm.sky, rgb(4, 6, 14), 0.55));
    g.disc(c0[0], c0[1], rpx, cB); if (rpx > 5) { g.disc(c0[0] - rpx * .25, c0[1] - rpx * .25, rpx * .62, shade(cB, 1.15)); g.disc(c0[0] + rpx * .35, c0[1] + rpx * .3, rpx * .5, shade(cB, .62)); g.disc(c0[0], c0[1], rpx * .0, cB); g.ring(c0[0], c0[1], rpx, shade(cB, .7)); }
    this.lbl(li++, B.name, c0[0], c0[1] - rpx - 8, 'cy');
    // сфера влияния
    if (B.soi < Infinity && B.soi / this.mpp > 20 && B.soi / this.mpp < 4000) { g.ring(c0[0], c0[1], B.soi / this.mpp, rgb(120, 70, 40)); }
    // спутники и планеты
    for (const c of B.children) {
      const col = typeof c.color === 'number' ? c.color : rgb(150, 150, 170); const dim = shade(col, .45);
      const orb = c.orb, el = { p: orb.a * (1 - orb.e * orb.e), e: orb.e, w: orb.w, dir: 1 };
      if (orb.a / this.mpp > 3 && orb.a / this.mpp < 5e4) this.curve(g, el, 0, TAU, dim, 1, true);
      const o = this.childPos(c), s = this.scr(o[0], o[1]); const r2 = Math.max(2, c.R / this.mpp);
      if (s[0] > -20 && s[0] < g.w + 20 && s[1] > -20 && s[1] < g.h + 20) { g.disc(s[0], s[1], r2, col); if (r2 > 3) g.ring(s[0], s[1], r2, shade(col, .7)); if (c.soi / this.mpp > 6 && c.soi / this.mpp < 400) g.ring(s[0], s[1], c.soi / this.mpp, rgb(80, 60, 50)); if (li < 40) this.lbl(li++, c.name, s[0], s[1] - r2 - 7, this.tgt === c.id ? 'yl' : ''); }
    }
    // аппараты
    const others = W.vessels.filter(o => o.alive && o !== v && o.body === B.id && !o.debris);
    for (const o of others) { const s = this.scr(o.x, o.y); g.rect(s[0] - 1, s[1] - 1, 3, 3, rgb(120, 200, 255)); if (li < 40) this.lbl(li++, o.name, s[0], s[1] - 6, ''); }
    let info = '';
    if (v && v.body === B.id) {
      const el = orbitInfo(W, v); const col = rgb(111, 216, 255);
      if (el.bound) this.curve(g, el, 0, TAU, col, 1, false); else this.curve(g, el, -el.nuInf * 0.985, el.nuInf * 0.985, col, 1, false);
      // апоцентр/перицентр
      const pe = conicAt(el, 0), sp = this.scr(pe[0], pe[1]); g.tri(sp[0], sp[1] + 1, sp[0] - 3, sp[1] + 6, sp[0] + 3, sp[1] + 6, rgb(255, 179, 71)); this.lbl(li++, 'Pe ' + fmtDist(el.rp - B.R), sp[0], sp[1] + 8, 'or');
      if (el.bound) { const ap = conicAt(el, PI), sa = this.scr(ap[0], ap[1]); g.tri(sa[0], sa[1] - 1, sa[0] - 3, sa[1] - 6, sa[0] + 3, sa[1] - 6, rgb(255, 179, 71)); this.lbl(li++, 'Ap ' + fmtDist(el.ra - B.R), sa[0], sa[1] - 14, 'or'); }
      // манёвр
      const ap = v.ap; if (ap && ap.phase === 'node' && ap.node && ap.node.body === B.id && !ap.done) {
        const dt = ap.node.t - W.ut; if (dt > -60) { const st = kepProp(B.gm, v.x, v.y, v.vx, v.vy, Math.max(0, dt), [0, 0, 0, 0]); const sn = this.scr(st[0], st[1]); g.ring(sn[0], sn[1], 4, rgb(255, 120, 255)); g.line(sn[0] - 6, sn[1], sn[0] + 6, sn[1], rgb(255, 120, 255)); g.line(sn[0], sn[1] - 6, sn[0], sn[1] + 6, rgb(255, 120, 255));
          const e2 = elements(B.gm, st[0], st[1], st[2] + ap.node.dv[0], st[3] + ap.node.dv[1]); const c2 = rgb(255, 120, 255); if (e2.bound) this.curve(g, e2, 0, TAU, c2, 1, true); else this.curve(g, e2, -e2.nuInf * 0.985, e2.nuInf * 0.985, c2, 1, true);
          this.lbl(li++, 'Δv ' + Math.round(ap.node.mag) + ' м/с · через ' + fmtDur(dt), sn[0], sn[1] + 8, ''); }
      }
      const s = this.scr(v.x, v.y); g.tri(s[0], s[1] - 4, s[0] - 3, s[1] + 3, s[0] + 3, s[1] + 3, rgb(255, 240, 120)); this.lbl(li++, v.name, s[0], s[1] - 12, 'yl');
      info = 'Апоцентр: ' + (el.bound ? fmtDist(el.ra - B.R) : '—') + '<br>Перицентр: ' + fmtDist(el.rp - B.R) + '<br>' + (el.bound ? 'Период: ' + fmtDur(el.T) + '<br>' : '') + 'Эксцентриситет: ' + el.e.toFixed(3) + '<br>Скорость: ' + fmtSpeed(Math.hypot(v.vx, v.vy));
    } else if (v) { info = 'Аппарат «' + esc(v.name) + '» в системе: ' + esc(W.U.byId[v.body].name) + '<br><span class="mut">нажмите ◎ чтобы вернуться</span>'; }
    for (let i = li; i < this.lbls.length; i++) this.lbls[i].style.display = 'none';
    this.hudT -= dt; if (this.hudT <= 0) { this.hudT = .25; this.E.title.textContent = B.name + (B.parent ? ' · у ' + W.U.byId[B.parent].name : '') + ' · ' + fmtDate(W.ut); this.E.info.innerHTML = info; this.E.wl.textContent = '×' + fmtNum(W.warpVal(), 0); }
    try { Sfx.update(0, 0, 0, false); } catch (e) { }
  },
  // ---------- планировщик ----------
  planSheet() {
    const W = this.W, v = W.active && W.active.alive ? W.active : null; if (!v) { UI.toast('Нет управляемого аппарата', 'bad'); return; }
    const U = W.U, B = U.byId[v.body]; const b = h('div', { class: 'col' }); const sh = this.sheet = UI.sheet('🧭 Маршрут и манёвры', b, { height: '82%', onClose: () => { this.sheet = null; } });
    const el = orbitInfo(W, v); const safe = (B.atm ? B.atm.top : 0);
    const orbiting = el.bound && el.rp > B.R + safe && v.mode !== 'landed';
    const hasEng = v.engines && v.engines.length > 0;
    b.append(h('div', { class: 'card small' }, h('div', { class: 'kv' }, h('span', null, 'Орбита вокруг'), h('b', null, B.name)), h('div', { class: 'kv' }, h('span', null, 'Ap / Pe'), h('span', null, (el.bound ? fmtDist(el.ra - B.R) : '∞') + ' / ' + fmtDist(el.rp - B.R))), h('div', { class: 'kv' }, h('span', null, 'Δv запас'), h('span', { class: 'cy' }, hasEng ? Math.round(AutoBuild.remainDV(v, v.stages.length)) + ' м/с' : 'нет двигателей'))));
    if (!orbiting) { b.append(h('div', { class: 'card or small' }, 'Манёвры доступны на устойчивой орбите (перицентр выше атмосферы). Сейчас аппарат ' + (v.mode === 'landed' ? 'на поверхности.' : 'не на такой орбите.'))); return; }
    // --- смена орбиты ---
    let where = 'ap', alt = Math.round((el.ra - B.R) / 1000) || 200;
    const av = h('b', { class: 'cy' }, '');
    const mkSlider = () => { const minA = Math.ceil((safe + 15000) / 1000), maxA = Math.max(minA + 50, Math.round(Math.min(B.soi < Infinity ? B.soi * .6 : 1e12, B.R * 40) / 1000)); alt = clamp(alt, minA, maxA); return h('input', { type: 'range', min: minA, max: maxA, step: Math.max(1, Math.round((maxA - minA) / 400)), value: alt, oninput: e => { alt = +e.target.value; av.textContent = fmtDist(alt * 1000); } }); };
    av.textContent = fmtDist(alt * 1000);
    const orbCard = h('div', { class: 'card col' }, h('b', { class: 'yl' }, 'Изменить орбиту'), h('div', { class: 'tiny mut' }, 'Импульс в выбранной точке меняет высоту противоположной точки. Скруглить = поставить высоту, равную текущей.'),
      h('div', { class: 'row w' }, h('button', { class: 'btn sm on', onclick: e => { where = 'ap'; e.target.parentNode.querySelectorAll('button').forEach(x => x.classList.remove('on')); e.target.classList.add('on'); } }, 'в апоцентре'), h('button', { class: 'btn sm', onclick: e => { where = 'pe'; e.target.parentNode.querySelectorAll('button').forEach(x => x.classList.remove('on')); e.target.classList.add('on'); } }, 'в перицентре')),
      h('div', { class: 'row' }, h('span', { class: 'small' }, 'Новая высота другой точки: '), av), mkSlider(),
      h('div', { class: 'row' }, h('button', { class: 'btn sm go sp' + (hasEng ? '' : ' dis'), onclick: () => { const r = B.R + alt * 1000; const n = Planner.nodeAt(W, v, where, r); if (!n) { UI.toast('Нет решения', 'bad'); return; } this.runNode(n); sh.close(); } }, 'Построить манёвр'),
        h('button', { class: 'btn sm sp' + (hasEng ? '' : ' dis'), onclick: () => { const r = where === 'ap' ? el.ra : el.rp; const n = Planner.nodeAt(W, v, where, r); if (!n) { UI.toast('Нет решения', 'bad'); return; } this.runNode(n); sh.close(); } }, 'Скруглить орбиту')));
    b.append(orbCard);
    // --- перелёт ---
    const targets = U.bodies.filter(x => x.id !== B.id && Planner.relation(U, B, x).ok);
    if (targets.length) {
      const sel = h('select', { style: 'width:100%' }, targets.map(x => h('option', { value: x.id }, x.name + (x.parent && x.parent !== U.root.id ? ' (у ' + U.byId[x.parent].name + ')' : ''))));
      if (this.tgt && targets.some(x => x.id === this.tgt)) sel.value = this.tgt; sel.addEventListener('change', () => { this.tgt = sel.value; });
      const out = h('div', { class: 'col' });
      const card = h('div', { class: 'card col' }, h('b', { class: 'yl' }, 'Перелёт к другому телу'), h('div', { class: 'tiny mut' }, 'Планировщик ищет окно запуска и точный импульс (решение задачи Ламберта). Дальше автопилот: разгон, полёт, коррекция, торможение у цели (нужен двигатель).'), sel,
        h('button', { class: 'btn sm', onclick: () => { out.innerHTML = ''; out.append(h('div', { class: 'cy small' }, 'Считаю…')); setTimeout(() => { this.tgt = sel.value; this.calcRoute(sel.value, out, sh); }, 30); } }, 'Найти окно'), out);
      b.append(card);
    } else b.append(h('div', { class: 'card tiny mut' }, 'Перелёт из этой системы строится вручную: сначала поднимитесь на орбиту планеты.'));
    if (v.ap && !v.ap.done) b.append(h('button', { class: 'btn warn', onclick: () => { Flight.stopAP(); sh.close(); } }, 'Отменить текущий манёвр / автопилот'));
  },
  runNode(n) { const W = this.W, v = W.active; v.ap = { phase: 'node', node: { t: n.t, dv: n.dv, body: v.body, mag: n.mag }, stageLimit: v.stages.length }; v.tasks = []; W.autoWarp = true; UI.toast('Манёвр: Δv ' + Math.round(n.mag) + ' м/с через ' + fmtDur(n.t - W.ut), 'ok'); },
  calcRoute(target, out, sh) {
    const W = this.W, v = W.active, B = W.U.byId[v.body]; let p;
    try { const dirv = Math.sign(v.x * v.vy - v.y * v.vx) || 1; p = Planner.find(W, { body: v.body, r0: Math.hypot(v.x, v.y), dir: dirv, theta0: Math.atan2(v.y, v.x), t0: W.ut, target, state: { x: v.x, y: v.y, vx: v.vx, vy: v.vy } }); } catch (e) { p = { err: e.message }; }
    out.innerHTML = '';
    if (p.err) { out.append(h('div', { class: 'rd small' }, '⛔ ' + p.err)); return; }
    const T = W.U.byId[p.target]; const inj = p.dvMag; const have = AutoBuild.remainDV(v, v.stages.length);
    out.append(h('div', { class: 'kv' }, h('span', null, 'Цель'), h('b', null, T.name)), h('div', { class: 'kv' }, h('span', null, 'Окно через'), h('span', null, fmtDur(p.tBurn - W.ut))), h('div', { class: 'kv' }, h('span', null, 'Время в пути'), h('span', null, fmtDur(p.tof))),
      h('div', { class: 'kv' }, h('span', null, 'Импульс отлёта'), h('span', { class: 'cy' }, Math.round(inj) + ' м/с')), h('div', { class: 'kv' }, h('span', null, 'Торможение у цели (оценка)'), h('span', null, Math.round(p.dvCap || 0) + ' м/с')),
      h('div', { class: 'kv' }, h('span', null, 'Δv запас аппарата'), h('span', { class: have >= inj ? 'gr' : 'rd' }, Math.round(have) + ' м/с')),
      (have < inj ? h('div', { class: 'rd tiny' }, '⚠ Δv не хватает для отлёта') : null),
      h('button', { class: 'btn go', onclick: () => { this.runRoute(p, target); sh.close(); } }, '▶ Выполнить маршрут'));
  },
  runRoute(p, target) {
    const W = this.W, v = W.active, B = W.U.byId[v.body]; const par = B.parent || B.id, child = p.kind === 'child';
    v.lastPlan = p; v.ap = { phase: 'node', node: { t: p.tBurn, dv: p.dv, body: v.body, mag: p.dvMag }, stageLimit: v.stages.length };
    v.tasks = [child ? { phase: 'wait', dt: 1800 } : { phase: 'wait', soi: par, extra: 2 * 86400 }, { phase: 'corr' }, { phase: 'wait', soi: target, extra: 600 }, { phase: 'pefix' }, { phase: 'capture' }, { phase: 'hold', sas: 'prograde' }];
    W.autoWarp = true; UI.toast('Маршрут принят: автопилот ведёт к цели', 'ok');
  }
};
