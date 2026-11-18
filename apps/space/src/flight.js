'use strict';
// ============ Полёт: управление, приборы, автопилот, панели ============
const SAS_MODES = [['hold', 'Удержание'], ['prograde', 'По скорости'], ['retrograde', 'Против скорости'], ['up', 'От тела ↑'], ['antiradial', 'К телу ↓'], ['sprograde', 'По скор. над пов.'], ['sretro', 'Против скор. над пов.'], ['node', 'На манёвр'], ['off', 'Выкл']];
const AP_NAMES = { launch: 'Взлёт и разгон', coast: 'Набор высоты', circ: 'Выход на круговую орбиту', done: 'Орбита достигнута', plan: 'Расчёт окна запуска', node: 'Манёвр', sep: 'Отделение зонда', hold: 'Удержание ориентации', wait: 'Ожидание', corr: 'Коррекция курса', pefix: 'Подстройка периапсиса', capture: 'Захват на орбиту', none: '—' };
const ST_NAMES = SIT_NAMES;

const Flight = {
  root: null, E: {}, panel: null, keys: {}, thr: 0, rot: 0, hudT: 0, ghost: null, lostT: 0, lostShown: false, lastLogId: 0, sasPop: null, _pT: 0, zoomT: 0,
  open() {
    const W = App.W; if (!W) { UI.go('hub'); return; }
    if (!W.active || !W.active.alive) { const v = W.vessels.find(x => x.alive && hasCore(x)) || W.vessels.find(x => x.alive); if (v) W.switchTo(v); }
    this.lostShown = false; this.lostT = 0; this.ghost = null; this.lastLogId = W.logs.length ? W.logs[W.logs.length - 1].id : 0; this.rot = 0;
    FX.clear && FX.clear(); this.dom(); App.mode = 'flight';
    if (!W.active) { UI.toast('Нет аппаратов в полёте. Соберите ракету в ангаре.', 'info'); setTimeout(() => UI.go('hub'), 50); }
    this.bind();
  },
  leave() { if (this.root) this.root.remove(); this.root = null; this.panel = null; this.unbind(); try { Sfx.update(0, 0, 0, false); } catch (e) { } if (App.W && App.W.active) App.W.active.ctl.rot = 0; App.W && (App.W.warpIdx = Math.min(App.W.warpIdx, 0)); },
  // ---------- DOM ----------
  dom() {
    const E = this.E = {}; const self = this;
    const root = this.root = h('div', { class: 'scr' });
    E.hud = h('div', { class: 'hud', style: 'left:6px;top:calc(env(safe-area-inset-top) + 6px);min-width:150px' });
    E.hud2 = h('div', { class: 'hud', style: 'right:56px;top:calc(env(safe-area-inset-top) + 6px);text-align:right;max-width:44%' });
    const tr = h('div', { class: 'col', style: 'position:absolute;right:6px;top:calc(env(safe-area-inset-top) + 6px)' },
      h('button', { class: 'btn sm', onclick: () => UI.go('map') }, '🌍'), h('button', { class: 'btn sm', onclick: () => this.menu() }, '☰'));
    // тяга
    E.thr = h('div', { class: 'thr' }, h('i'), h('u')); E.thrFill = E.thr.firstChild; E.thrMark = E.thr.lastChild;
    const thrBtns = h('div', { class: 'col', style: 'position:absolute;left:54px;bottom:96px;gap:4px' }, h('button', { class: 'btn sm', onclick: () => this.setThr(1) }, 'MAX'), h('button', { class: 'btn sm', onclick: () => this.setThr(.5) }, '50'), h('button', { class: 'btn sm', onclick: () => this.setThr(0) }, 'СТОП'));
    // управление справа
    E.stage = h('button', { class: 'btn go stbtn', onclick: () => this.doStage() }, 'СТУП');
    E.sasB = h('button', { class: 'btn sm', onclick: () => this.sasMenu() }, 'SAS');
    E.rcsB = h('button', { class: 'btn sm', onclick: () => this.toggleRcs() }, 'РСУ');
    const rc = h('div', { class: 'col', style: 'position:absolute;right:8px;bottom:196px;gap:4px;align-items:flex-end' }, E.sasB, E.rcsB);
    const hold = (el, on, off) => { const d = e => { e.preventDefault(); try { el.setPointerCapture(e.pointerId); } catch (x) { } on(); }; const u = () => off(); el.addEventListener('pointerdown', d); el.addEventListener('pointerup', u); el.addEventListener('pointercancel', u); el.addEventListener('pointerleave', u); };
    E.left = h('button', { class: 'btn big', style: 'width:64px' }, '◀'); E.right = h('button', { class: 'btn big', style: 'width:64px' }, '▶');
    hold(E.left, () => this.setRot(-1), () => this.setRot(0)); hold(E.right, () => this.setRot(1), () => this.setRot(0));
    E.drvL = h('button', { class: 'btn sm hide', style: 'width:64px' }, '🛞◀'); E.drvR = h('button', { class: 'btn sm hide', style: 'width:64px' }, '🛞▶');
    hold(E.drvL, () => this.setDrive(-1), () => this.setDrive(0)); hold(E.drvR, () => this.setDrive(1), () => this.setDrive(0));
    const steer = h('div', { class: 'col', style: 'position:absolute;left:50%;transform:translateX(-50%);bottom:98px;align-items:center;gap:4px' }, h('div', { class: 'row' }, E.drvL, E.drvR), h('div', { class: 'row' }, E.left, E.right));
    // варп
    E.warpL = h('b', { class: 'cy', style: 'min-width:62px;text-align:center;font-size:13px' }, '×1');
    const warp = h('div', { class: 'row', style: 'position:absolute;left:50%;transform:translateX(-50%);bottom:58px;gap:4px' },
      h('button', { class: 'btn sm', onclick: () => this.warp(-1) }, '⏪'), E.warpL, h('button', { class: 'btn sm', onclick: () => this.warp(1) }, '⏩'), h('button', { class: 'btn sm', onclick: () => this.warp(0) }, '⏹'));
    // нижняя панель
    const tb = (t, f) => h('button', { class: 'btn sm', style: 'flex:1;padding:5px 2px', onclick: f }, t);
    const bar = h('div', { class: 'row', style: 'position:absolute;left:6px;right:6px;bottom:calc(env(safe-area-inset-bottom) + 6px)' },
      tb('🔬 Приборы', () => this.sciPanel()), tb('🔧 Детали', () => this.partsPanel()), tb('🤖 Автопилот', () => this.apPanel()), tb('🚀 Аппараты', () => this.vesPanel()), tb('🧪', () => UI.cheatSheet()));
    E.ap = h('div', { class: 'hud hide', style: 'left:50%;transform:translateX(-50%);top:calc(env(safe-area-inset-top) + 100px);text-align:center;font-size:11px;white-space:nowrap' });
    root.append(E.hud, E.hud2, tr, E.thr, thrBtns, rc, E.stage, steer, warp, E.ap, bar);
    $('#ui').append(root);
  },
  bind() {
    const el = this.E.thr; const mv = e => { const r = el.getBoundingClientRect(); this.setThr(clamp(1 - (e.clientY - r.top) / r.height, 0, 1)); };
    this._tp = e => { e.preventDefault(); el.setPointerCapture(e.pointerId); this._td = true; mv(e); }; this._tm = e => { if (this._td) mv(e); }; this._tu = () => { this._td = false; };
    el.addEventListener('pointerdown', this._tp); el.addEventListener('pointermove', this._tm); el.addEventListener('pointerup', this._tu); el.addEventListener('pointercancel', this._tu);
    // зум и панорама камеры по холсту
    const cv = App.cv; this._ptr = new Map();
    this._cd = e => { this._ptr.set(e.pointerId, { x: e.clientX, y: e.clientY }); if (this._ptr.size === 2) { const a = [...this._ptr.values()]; this._pd = Math.hypot(a[0].x - a[1].x, a[0].y - a[1].y); this._pz = Cam.z; } };
    this._cm = e => { if (!this._ptr.has(e.pointerId)) return; this._ptr.set(e.pointerId, { x: e.clientX, y: e.clientY }); if (this._ptr.size === 2 && this._pd) { const a = [...this._ptr.values()]; const d = Math.hypot(a[0].x - a[1].x, a[0].y - a[1].y); Cam.z = clamp(this._pz * d / this._pd, .15, 12); } };
    this._cu = e => { this._ptr.delete(e.pointerId); this._pd = 0; };
    this._cw = e => { e.preventDefault(); Cam.z = clamp(Cam.z * (e.deltaY < 0 ? 1.12 : 1 / 1.12), .15, 12); };
    cv.addEventListener('pointerdown', this._cd); addEventListener('pointermove', this._cm); addEventListener('pointerup', this._cu); addEventListener('pointercancel', this._cu); cv.addEventListener('wheel', this._cw, { passive: false });
  },
  unbind() { const cv = App.cv; cv.removeEventListener('pointerdown', this._cd); removeEventListener('pointermove', this._cm); removeEventListener('pointerup', this._cu); removeEventListener('pointercancel', this._cu); cv.removeEventListener('wheel', this._cw); },
  // ---------- команды ----------
  V() { const W = App.W; return W && W.active && W.active.alive ? W.active : null; },
  stopAP(why) { const v = this.V(); if (!v) return; if (v.ap && !v.ap.done) { v.ap = { phase: 'none', done: true }; v.tasks = []; v.payloadTasks = null; App.W.autoWarp = false; UI.toast('Автопилот отключён' + (why ? ' (' + why + ')' : ''), 'info'); } },
  setThr(x) { const v = this.V(); if (!v) return; if (v.ap && !v.ap.done && Math.abs(x - v.throttle) > .02 && ['launch', 'coast', 'circ', 'node'].includes(v.ap.phase)) this.stopAP('ручная тяга'); v.throttle = clamp(x, 0, 1); },
  setRot(r) { const v = this.V(); this.rot = r; if (!v) return; v.ctl.rot = r; if (r && v.ap && !v.ap.done && ['launch', 'coast', 'circ'].includes(v.ap.phase)) this.stopAP('ручное управление'); },
  setDrive(d) { const v = this.V(); if (v) v.drive = d; },
  doStage() { const W = App.W, v = this.V(); if (!v) return; if (v.stageIdx >= v.stages.length) { UI.toast('Ступеней больше нет', 'info'); return; } W.stage(v); try { Sfx.clunk(); } catch (e) { } },
  toggleRcs() { const v = this.V(); if (!v) return; v.rcs = !v.rcs; try { Sfx.click(); } catch (e) { } },
  sasMenu() {
    const v = this.V(); if (!v) return; if (this.sasPop) { this.sasPop.remove(); this.sasPop = null; return; }
    const pop = h('div', { class: 'pn col', style: 'position:absolute;right:8px;bottom:236px;z-index:20;gap:4px' }, SAS_MODES.map(([k, n]) => h('button', { class: 'btn sm' + (v.sas === k ? ' on' : ''), onclick: () => { v.sas = k; v.sasTarget = v.a; this.sasPop.remove(); this.sasPop = null; if (v.ap && !v.ap.done && ['launch', 'coast', 'circ'].includes(v.ap.phase)) this.stopAP('режим SAS'); } }, n)));
    this.sasPop = pop; this.root.append(pop);
  },
  warp(d) {
    const W = App.W; if (d === 0) { W.setWarp(0); return; } const mx = W.maxWarpIdx(); const ni = clamp(W.warpIdx + d, 0, WARPS.length - 1);
    if (d > 0 && ni > mx) { UI.toast(W.active && W.active.throttle > .003 ? 'Выключите двигатель для ускорения времени' : 'Сейчас нельзя ускорять: рядом атмосфера/поверхность или манёвр', 'bad'); return; }
    W.setWarp(ni);
  },
  key(e, down) {
    const v = this.V(); if (!v || e.repeat && down && !['ShiftLeft', 'ControlLeft'].includes(e.code)) { if (!v) return; }
    if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT')) return; const k = e.code;
    if (down) {
      if (k === 'Space') { e.preventDefault(); this.doStage(); } else if (k === 'KeyZ') this.setThr(1); else if (k === 'KeyX') this.setThr(0); else if (k === 'ShiftLeft') this.keys.up = true; else if (k === 'ControlLeft') this.keys.dn = true;
      else if (k === 'KeyA' || k === 'ArrowLeft') this.setRot(-1); else if (k === 'KeyD' || k === 'ArrowRight') this.setRot(1); else if (k === 'KeyT') this.sasMenu(); else if (k === 'KeyR') this.toggleRcs(); else if (k === 'KeyM') UI.go('map');
      else if (k === 'Period') this.warp(1); else if (k === 'Comma') this.warp(-1); else if (k === 'Slash') this.warp(0);
    } else { if (k === 'KeyA' || k === 'KeyD' || k === 'ArrowLeft' || k === 'ArrowRight') this.setRot(0); if (k === 'ShiftLeft') this.keys.up = false; if (k === 'ControlLeft') this.keys.dn = false; }
  },
  // ---------- кадр ----------
  tick(g, dt) {
    const W = App.W; if (!W) return;
    let v = W.active; if (v && !v.alive) v = null;
    if (v) { this.ghost = v; v.ctl.rot = this.rot; if (this.keys.up) this.setThr(v.throttle + dt * .7); if (this.keys.dn) this.setThr(v.throttle - dt * .7); }
    if (this.rot === 0 && v) v.ctl.rot = 0;
    W.step(dt);
    const A = W.active && W.active.alive ? W.active : null;
    const view = A || this.ghost;
    const warp = W.warpVal();
    if (view) {
      if (warp <= PHYS_MAX) FX.update(W, dt * warp, A || view); else { FX.P.length = 0; W.evq.length = 0; }
      FV.frame(g, W, view, App.t);
      try { Sfx.update(A ? A.throttle : 0, FV.lastS ? FV.lastS.dens : 0, A ? (A.q || 0) : 0, !!A && warp <= 2); } catch (e) { }
    } else { g.clear(rgb(4, 6, 14)); }
    // потеря
    if (!A) { this.lostT += dt; if (this.lostT > 1.6 && !this.lostShown) { this.lostShown = true; this.lostPanel(); } }
    else if (this.lostShown) { this.lostShown = false; this.lostT = 0; UI.closeSheets(); }
    // журнал → тосты
    UI.pumpLogs(W);
    this.hudT -= dt; if (this.hudT <= 0) { this.hudT = .15; this.hud(A, W); }
    if (this.panel) { this._pT += dt; if (this._pT > .5) { this._pT = 0; this.panel.render(); } }
    this.drawThr(A);
  },
  drawThr(v) { const t = v ? v.throttle : 0; this.E.thrFill.style.height = (t * 100) + '%'; this.E.thrMark.style.bottom = 'calc(' + (t * 100) + '% - 2px)'; },
  // ---------- индикаторы ----------
  hud(v, W) {
    const E = this.E; if (!E.hud) return;
    if (!v) { E.hud.innerHTML = '<span class="rd">нет управляемого аппарата</span>'; E.hud2.innerHTML = ''; return; }
    const B = W.U.byId[v.body], r = Math.hypot(v.x, v.y), alt = r - B.R, S = FV.lastS;
    const rx = v.x / r, ry = v.y / r; const vr = v.vx * rx + v.vy * ry; const sx = v.vx + B.rotW * v.y, sy = v.vy - B.rotW * v.x;
    const surfM = B.atm && alt < B.atm.top || v.mode === 'landed' || alt < 3000; const sp = surfM ? Math.hypot(sx, sy) : Math.hypot(v.vx, v.vy);
    const vh = Math.sqrt(Math.max(0, sp * sp - vr * vr));
    const el = orbitInfo(W, v); const sit = Science.situation(W, v);
    let radar = S && B.landable && S.hg != null && S.hg < 30000 ? S.hg : null;
    const row = (a, b, c) => '<div style="display:flex;justify-content:space-between;gap:8px"><span class="mut">' + a + '</span><span class="' + (c || '') + '">' + b + '</span></div>';
    let ap = '', pe = '';
    if (el.bound) { ap = fmtDist(el.ra - B.R); } else ap = '∞ (гипербола)'; pe = fmtDist(el.rp - B.R);
    const tw = v.thrust > 0 ? (v.thrust / (v.mp.m * (B.gm / (r * r)))) : 0;
    let h1 = '<b class="cy">' + esc(v.name) + '</b><div class="tiny mut">' + esc(B.name) + ' · ' + (ST_NAMES[sit] || sit) + (v.mode === 'rails' ? ' · по рельсам' : '') + '</div>';
    h1 += row(radar != null && radar < 30000 ? 'Выс. (рад.)' : 'Высота', fmtDist(radar != null ? radar : alt), alt < 0 ? 'rd' : '');
    h1 += row(surfM ? 'Скор. пов.' : 'Скорость', fmtSpeed(sp)); h1 += row('Верт.', (vr >= 0 ? '+' : '') + fmtSpeed(vr), vr < -40 && alt < 20000 && v.mode !== 'rails' ? 'rd' : ''); h1 += row('Гориз.', fmtSpeed(vh));
    h1 += row('Апоцентр', ap, 'or'); h1 += row('Перицентр', el.rp < B.R * 0.1 || v.mode === 'landed' ? '—' : pe, el.rp < B.R + (B.atm ? B.atm.top : 0) ? 'rd' : 'or');
    E.hud.innerHTML = h1;
    // правая колонка: тяга, энергия, топливо
    const fu = this.fuel(v); const ecf = v.ecCap > 0 ? v.ec / v.ecCap : 0; const bar = (f, c) => '<div class="bar ' + c + '" style="width:70px;display:inline-block;vertical-align:middle"><i style="width:' + Math.round(clamp(f, 0, 1) * 100) + '%"></i></div>';
    let h2 = '<div>Топливо ' + bar(fu, 'fu') + '</div><div>Энергия ' + bar(ecf, 'ec') + '</div>';
    h2 += '<div class="mut">Масса ' + fmtMass(v.mp.m) + '</div>';
    if (v.thrust > 0) h2 += '<div>Тяга ' + fmtForce(v.thrust) + ' · TWR ' + tw.toFixed(2) + '</div>';
    if (v.gload > 1.5) h2 += '<div class="' + (v.gload > 6 ? 'rd' : 'or') + '">' + v.gload.toFixed(1) + ' g</div>';
    if (v.q > 500) h2 += '<div class="' + (v.q > 30000 ? 'or' : 'mut') + '">Q ' + fmtNum(v.q / 1000, 1) + ' кПа</div>';
    const hot = Math.max(0, ...v.parts.map(p => p.temp || 0)); if (hot > 600) h2 += '<div class="' + (hot > 1200 ? 'rd' : 'or') + '">нагрев ' + Math.round(hot) + ' K</div>';
    if (v.gen != null) h2 += '<div class="mut">' + (v.gen - v.use >= 0 ? '+' : '') + fmtPow(v.gen - v.use) + '</div>';
    if (v.link) h2 += '<div class="' + (v.link.ok ? 'gr' : 'mut') + '">' + (v.link.ok ? (v.txing ? '📡 ' + fmtBits(v.link.rate / 1e6 * 8 / 8) + '/с' : '📡 связь') : '📡 ' + (v.link.why || 'нет')) + '</div>';
    E.hud2.innerHTML = h2;
    // автопилот
    if (v.ap && !v.ap.done && v.ap.phase !== 'none') { E.ap.classList.remove('hide'); E.ap.innerHTML = '🤖 ' + (AP_NAMES[v.ap.phase] || v.ap.phase) + (v.ap.phase === 'wait' && v.ap.until ? ' · ' + fmtDur(v.ap.until - W.ut) : '') + (v.tasks && v.tasks.length ? ' · далее: ' + v.tasks.length : ''); }
    else if (v.ap && v.ap.fail) { E.ap.classList.remove('hide'); E.ap.innerHTML = '<span class="rd">⛔ ' + esc(v.ap.fail) + '</span>'; }
    else E.ap.classList.add('hide');
    // кнопки
    const nextAct = v.parts.filter(p => p.stage === v.stageIdx && partAction(p)).map(p => ACT_NAMES[partAction(p)]).filter((x, i, a) => a.indexOf(x) === i);
    const left = v.stages.length - v.stageIdx;
    E.stage.innerHTML = left > 0 ? 'СТУП<div class="tiny">' + (v.stageIdx + 1) + ' / ' + v.stages.length + '</div><div class="tiny mut" style="white-space:normal;font-size:8px;line-height:1">' + esc(nextAct.slice(0, 2).join(', ')) + '</div>' : 'нет<div class="tiny">ступеней</div>';
    E.stage.classList.toggle('dis', left <= 0);
    E.sasB.textContent = 'SAS: ' + (SAS_MODES.find(x => x[0] === v.sas) || ['', v.sas])[1]; E.sasB.classList.toggle('on', v.sas !== 'off'); E.rcsB.classList.toggle('on', !!v.rcs);
    const wh = v.parts.some(p => p.d.wheel); E.drvL.classList.toggle('hide', !wh); E.drvR.classList.toggle('hide', !wh);
    E.warpL.textContent = '×' + fmtNum(W.warpVal(), 0);
  },
  fuel(v) { let t = 0, c = 0; for (const p of v.tanks || []) { const cap = p.d.eng && p.d.eng.solid ? p.d.eng.propMass : partCap(p); c += cap; for (const k in p.res) if (k !== 'ec') t += p.res[k]; } return c > 0 ? t / c : 0; },

  // ---------- панели ----------
  openPanel(title, render, height) {
    if (this.panel) { this.panel.sh.close(); this.panel = null; }
    const body = h('div', { class: 'col' }); const sh = UI.sheet(title, body, { height: height || '60%', onClose: () => { if (this.panel && this.panel.sh === sh) this.panel = null; } });
    const P = { sh, body, render: () => { const sc = body.parentNode, top = sc ? sc.scrollTop : 0; body.innerHTML = ''; try { render(body); } catch (e) { body.append(h('div', { class: 'rd' }, 'Ошибка: ' + e.message)); } if (sc) sc.scrollTop = top; } };
    this.panel = P; P.render(); return P;
  },
  sciPanel() {
    this.openPanel('🔬 Приборы и данные', b => {
      const W = App.W, v = this.V(); if (!v) { b.append(h('div', { class: 'mut' }, 'Нет аппарата')); return; }
      const sit = Science.situation(W, v), bio = Science.biome(W, v), B = W.U.byId[v.body];
      b.append(h('div', { class: 'card small' }, h('div', { class: 'kv' }, h('span', null, 'Где'), h('b', null, B.name + ' · ' + (ST_NAMES[sit] || sit))), h('div', { class: 'kv' }, h('span', null, 'Местность'), h('span', null, bio.name)), h('div', { class: 'kv' }, h('span', null, 'Связь с Землёй'), h('span', { class: v.link && v.link.ok ? 'gr' : 'rd' }, v.link ? (v.link.ok ? fmtBits(v.link.rate * 8 / 1e6) + '/с' : v.link.why) : '—'))));
      const insts = v.parts.filter(p => p.d.inst);
      if (!insts.length) b.append(h('div', { class: 'mut' }, 'На аппарате нет научных приборов.'));
      for (const p of insts) {
        const why = Science.canRun(W, v, p); const running = p.st.run != null && p.st.run >= 0; const val = Science.value(W, v, p);
        b.append(h('div', { class: 'card col', style: 'gap:2px' }, h('div', { class: 'row' }, h('b', { class: 'small', style: 'flex:1' }, p.d.name), h('span', { class: 'tiny yl' }, '+' + val.cur.toFixed(1) + (val.n ? ' (повтор ×' + val.n + ')' : ' новое'))),
          h('div', { class: 'tiny mut' }, KIND_NAMES[p.d.inst.kind] + ' · ' + p.d.inst.ec + ' Вт · ' + fmtDur(p.d.inst.time) + ' · ' + fmtBits(p.d.inst.data)),
          (running ? h('div', { class: 'bar gr' }, h('i', { style: 'width:' + Math.round(p.st.run / p.d.inst.time * 100) + '%' })) : null),
          h('div', { class: 'row' }, h('span', { class: 'tiny ' + (why ? 'or' : 'gr'), style: 'flex:1' }, running ? 'измерение…' : (why || 'готов')), h('button', { class: 'btn sm ' + (why || running ? 'dis' : 'go'), onclick: () => { const r = Science.start(W, v, p); if (r) UI.toast(r, 'bad'); this.panel && this.panel.render(); } }, 'Включить'))));
      }
      b.append(h('h3', null, 'Хранилище'));
      if (!v.science.length) b.append(h('div', { class: 'mut small' }, 'Пусто.'));
      for (const it of v.science) b.append(h('div', { class: 'card row' }, h('div', { class: 'sp small' }, h('b', null, it.name), h('div', { class: 'tiny mut' }, (W.U.byId[it.body] ? W.U.byId[it.body].name : '') + ' · ' + (ST_NAMES[it.sit] || it.sit) + ' · ' + it.biome)), h('span', { class: 'tiny ' + (it.sample ? 'or' : 'cy') }, it.sample ? 'образец — вернуть на Землю' : (it.left > 0 ? 'передача ' + fmtBits(it.left) : 'передано'))));
      if (v.science.some(it => it.type === 'data')) b.append(h('button', { class: 'btn sm' + (v.autoTx !== false ? ' on' : ''), onclick: () => { v.autoTx = v.autoTx === false; this.panel.render(); } }, 'Авто-передача: ' + (v.autoTx !== false ? 'вкл' : 'выкл')));
    }, '72%');
  },
  partsPanel() {
    this.openPanel('🔧 Детали и действия', b => {
      const W = App.W, v = this.V(); if (!v) return;
      const list = v.parts.filter(p => p.d.solar || p.d.ant && p.d.ant.deploy || p.d.leg || p.d.chute || p.d.src || p.d.fair);
      const seen = {};
      for (const p of list) {
        const d = p.d; let txt = '', act = null, on = false;
        if (d.solar && d.solar.deploy) { on = !!p.st.deployed; txt = on ? 'развёрнута' : 'сложена'; act = () => { p.st.deployed = !p.st.deployed; }; }
        else if (d.ant && d.ant.deploy) { on = !!p.st.deployed; txt = on ? 'развёрнута' : 'сложена'; act = () => { p.st.deployed = !p.st.deployed; }; }
        else if (d.leg) { on = !!p.st.deployed; txt = on ? 'выпущены' : 'убраны'; act = () => { p.st.deployed = !p.st.deployed; }; }
        else if (d.chute || d.src) { const s = p.st.chute; txt = s === 'arm' ? 'взведён (раскроется сам)' : s === 'deploy' ? 'раскрывается' : s === 'open' ? 'раскрыт' : s === 'cut' ? 'отстрелен' : 'в ранце'; if (!s) act = () => { p.st.chute = 'arm'; }; else if (s === 'arm') act = () => { p.st.chute = null; }; }
        else if (d.fair) { txt = 'на ракете'; act = () => { W.jettisonFairing(v); }; }
        if (!act && !txt) continue;
        b.append(h('div', { class: 'card row' }, h('div', { class: 'sp small' }, h('b', null, d.name), h('div', { class: 'tiny ' + (on ? 'gr' : 'mut') }, txt)), (act ? h('button', { class: 'btn sm', onclick: () => { act(); this.panel.render(); } }, d.chute || d.src ? (p.st.chute === 'arm' ? 'Снять' : 'Взвести') : d.fair ? 'Сбросить' : on ? 'Убрать' : 'Развернуть') : null)));
      }
      if (!list.length) b.append(h('div', { class: 'mut' }, 'На аппарате нет раскладных деталей.'));
      b.append(h('div', { class: 'hr' }), h('h3', null, 'Топливо'), h('div', { class: 'row' }, h('button', { class: 'btn sm' + (v.cross ? ' on' : ''), onclick: () => { v.cross = !v.cross; this.panel.render(); } }, 'Перекачка между баками: ' + (v.cross ? 'вкл' : 'выкл'))));
      for (const p of v.tanks) { const cap = p.d.eng && p.d.eng.solid ? p.d.eng.propMass : partCap(p), cur = Object.keys(p.res).filter(k => k !== 'ec').reduce((s, k) => s + p.res[k], 0); b.append(h('div', { class: 'kv' }, h('span', null, p.d.name), h('span', null, fmtMass(cur) + ' / ' + fmtMass(cap)))); }
    }, '66%');
  },
  apPanel() {
    this.openPanel('🤖 Автопилот', b => {
      const W = App.W, v = this.V(); if (!v) return; const B = W.U.byId[v.body];
      const on = v.ap && !v.ap.done && v.ap.phase !== 'none';
      b.append(h('div', { class: 'card' }, h('b', { class: on ? 'cy' : 'mut' }, on ? '🤖 ' + (AP_NAMES[v.ap.phase] || v.ap.phase) : 'Автопилот выключен'), (v.tasks && v.tasks.length ? h('div', { class: 'tiny mut' }, 'в очереди: ' + v.tasks.map(t => AP_NAMES[t.phase] || t.phase).join(' → ')) : null),
        (on ? h('button', { class: 'btn sm warn', style: 'margin-top:5px', onclick: () => { this.stopAP(); this.panel.render(); } }, 'Отключить') : null)));
      const el = orbitInfo(W, v);
      // выход на орбиту
      const aMin = Math.ceil(((B.atm ? B.atm.top : 0) / 1000 + 10) / 10) * 10; let alt = Math.max(aMin, 150);
      const av = h('b', { class: 'cy' }, alt + ' км'); const dirv = { v: 1 };
      const card = h('div', { class: 'card col' }, h('b', { class: 'yl' }, 'Выход на круговую орбиту'), h('div', { class: 'tiny mut' }, 'Из положения на старте: взлёт, гравитационный поворот, довыведение. Ступени сбрасываются сами.'),
        h('div', { class: 'row' }, h('span', { class: 'small' }, 'Высота: '), av), h('input', { type: 'range', min: aMin, max: Math.max(aMin + 10, Math.round(B.R / 1000 * 0.6 / 10) * 10), step: 10, value: alt, oninput: e => { alt = +e.target.value; av.textContent = alt + ' км'; } }),
        h('div', { class: 'row' }, h('button', { class: 'btn sm go sp', onclick: () => { v.ap = { phase: 'launch', alt: alt * 1000, dir: dirv.v, stageLimit: v.stages.length }; v.tasks = []; W.autoWarp = true; v.sas = 'hold'; UI.toast('Автопилот: выход на орбиту ' + alt + ' км', 'ok'); this.panel.sh.close(); } }, '🚀 Запустить'),
          h('button', { class: 'btn sm sp', onclick: () => { dirv.v = -dirv.v; UI.toast(dirv.v > 0 ? 'Направление: по вращению тела' : 'Направление: против вращения', 'info'); } }, '↻ Направление')));
      b.append(card);
      // манёвры на орбите
      if (el.bound && v.mode !== 'landed' && el.rp > B.R + (B.atm ? B.atm.top : 0)) {
        b.append(h('div', { class: 'card col' }, h('b', { class: 'yl' }, 'Манёвры на орбите'),
          h('div', { class: 'row w' }, h('button', { class: 'btn sm', onclick: () => this.nodeCircular('ap') }, 'Скруглить в апоцентре'), h('button', { class: 'btn sm', onclick: () => this.nodeCircular('pe') }, 'Скруглить в перицентре')),
          h('div', { class: 'tiny mut' }, 'Откройте карту (🌍), чтобы поднять/опустить орбиту и построить перелёт к другому телу.')));
      }
      b.append(h('div', { class: 'card col' }, h('b', { class: 'yl' }, 'Ориентация'), h('div', { class: 'row w' }, ...SAS_MODES.slice(0, 5).map(([k, n]) => h('button', { class: 'btn sm' + (v.sas === k ? ' on' : ''), onclick: () => { v.sas = k; v.sasTarget = v.a; this.panel.render(); } }, n)))));
      // посадка
      if (B.landable) b.append(h('div', { class: 'card tiny mut' }, 'Посадка — ручная: затормозите против скорости (SAS «Против скор. над пов.»), гасите горизонтальную скорость, садитесь ≤ 3–5 м/с на опоры. Парашют (🔧) работает в атмосфере.'));
    }, '74%');
  },
  nodeCircular(where) {
    const W = App.W, v = this.V(); if (!v) return; const B = W.U.byId[v.body], el = orbitInfo(W, v);
    const r = where === 'pe' ? el.rp : el.ra; const n = Planner.nodeAt(W, v, where, r); if (!n) { UI.toast('Нет решения', 'bad'); return; }
    v.ap = { phase: 'node', node: { t: n.t, dv: n.dv, body: v.body, mag: n.mag }, stageLimit: v.stages.length }; W.autoWarp = true;
    UI.toast('Манёвр: Δv ' + Math.round(n.mag) + ' м/с через ' + fmtDur(n.t - W.ut), 'ok'); if (this.panel) this.panel.sh.close();
  },
  vesPanel() {
    this.openPanel('🚀 Аппараты рядом', b => {
      const W = App.W, A = W.active; const list = W.vessels.filter(v => v.alive && v !== A);
      if (!list.length) b.append(h('div', { class: 'mut' }, 'Других аппаратов нет.'));
      for (const v of list) { const B = W.U.byId[v.body]; const d = A && A.body === v.body ? fmtDist(Math.hypot(v.x - A.x, v.y - A.y)) : B.name; b.append(h('div', { class: 'card row' }, h('div', { class: 'sp small' }, h('b', { class: v.debris ? 'mut' : 'cy' }, v.name + (v.debris ? ' (обломок)' : '')), h('div', { class: 'tiny mut' }, d + ' · ' + fmtMass(v.mp ? v.mp.m : 0))), h('button', { class: 'btn sm go', onclick: () => { W.switchTo(v); this.panel.sh.close(); UI.toast('Управление: ' + v.name, 'ok'); } }, 'Лететь'))); }
    }, '56%');
  },
  menu() {
    const W = App.W, v = this.V(); const b = h('div', { class: 'col' }); const sh = UI.sheet('Пауза', b, { height: '52%' });
    const btn = (t, f, c) => h('button', { class: 'btn ' + (c || ''), onclick: () => { sh.close(); f(); } }, t);
    b.append(btn('▶ Продолжить', () => { }, 'go'));
    if (v && v.mode === 'landed' && v.body === W.U.home) b.append(btn('♻ Вернуть аппарат на космодром (деньги + наука)', () => { const r = W.recover(v); if (r) { UI.toast('Возвращён: +' + fmtMoney(r.funds) + ', наука +' + r.sci.toFixed(1), 'ok'); UI.save(true); UI.go('hub'); } }));
    b.append(btn('🏠 В центр управления', () => { UI.save(true); UI.go('hub'); }), btn('💾 Сохранить', () => UI.save()), btn('⚙ Настройки', () => UI.settings()), btn('🧪 Читы', () => UI.cheatSheet()));
  },
  lostPanel() {
    const W = App.W; const b = h('div', { class: 'col' }); const sh = UI.sheet('Аппарат потерян', b, { height: '46%' });
    b.append(h('div', { class: 'small', style: 'line-height:1.35' }, 'Связь с аппаратом потеряна. Проверьте журнал: возможно, не хватило топлива, ударились о поверхность или сгорели при входе в атмосферу.'),
      h('div', { class: 'col' }, h('button', { class: 'btn go', onclick: () => { sh.close(); const dr = Store.get('draft', null); UI.go('build', dr ? desDesign(dr) : null); } }, '🛠 В ангар — переделать'), h('button', { class: 'btn', onclick: () => { sh.close(); UI.go('hub'); } }, '🏠 В центр управления')));
    try { Sfx.bad(); } catch (e) { }
  }
};
