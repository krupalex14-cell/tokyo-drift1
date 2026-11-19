'use strict';
// ============ Полёт: управление, приборы, автопилот, панели ============
const SAS_MODES = [['hold', 'Удержание'], ['prograde', 'По скорости'], ['retrograde', 'Против скорости'], ['up', 'От тела ↑'], ['antiradial', 'К телу ↓'], ['sprograde', 'По скор. над пов.'], ['sretro', 'Против скор. над пов.'], ['node', 'На манёвр'], ['off', 'Выкл']];
const AP_NAMES = { land: 'Автопосадка', launch: 'Взлёт и разгон', coast: 'Набор высоты', circ: 'Выход на круговую орбиту', done: 'Орбита достигнута', plan: 'Расчёт окна запуска', node: 'Манёвр', sep: 'Отделение зонда', hold: 'Удержание ориентации', wait: 'Ожидание', corr: 'Коррекция курса', pefix: 'Подстройка периапсиса', capture: 'Захват на орбиту', none: '—' };
const LAND_ST = { init: 'подготовка', deorbit: 'сход с орбиты', fall: 'снижение', brake: 'торможение', final: 'посадка' };
const ST_NAMES = SIT_NAMES;

const Flight = {
  root: null, E: {}, panel: null, keys: {}, thr: 0, rot: 0, hudT: 0, ghost: null, lostT: 0, lostShown: false, lastLogId: 0, sasPop: null, _pT: 0, zoomT: 0,
  open() {
    const W = App.W; if (!W) { UI.go('hub'); return; }
    if (!W.active || !W.active.alive) { const v = W.vessels.find(x => x.alive && hasCore(x)) || W.vessels.find(x => x.alive); if (v) W.switchTo(v); }
    this.hudMode = Store.get('hudm', 1); this.lostShown = false; this.lostT = 0; this.ghost = null; this.lastLogId = W.logs.length ? W.logs[W.logs.length - 1].id : 0; this.rot = 0;
    FX.clear && FX.clear(); Cam.ox = Cam.oy = 0; this.dom(); App.mode = 'flight';
    if (!W.active) { UI.toast('Нет аппаратов в полёте. Соберите ракету в ангаре.', 'info'); setTimeout(() => UI.go('hub'), 50); }
    this.bind();
  },
  leave() { Cam.ox = Cam.oy = 0; this.partCard(null); if (this.root) this.root.remove(); this.root = null; this.panel = null; this.unbind(); try { Sfx.update(0, 0, 0, false); } catch (e) { } if (App.W && App.W.active) App.W.active.ctl.rot = 0; App.W && (App.W.warpIdx = Math.min(App.W.warpIdx, 0)); },
  // ---------- DOM ----------
  dom() {
    const E = this.E = {}; const self = this;
    const root = this.root = h('div', { class: 'scr' });
    const safeT = 'calc(env(safe-area-inset-top) + 6px)', safeB = 'calc(env(safe-area-inset-bottom) + 8px)';
    E.hud = h('div', { class: 'hud', style: 'position:static;min-width:150px' });
    E.lcol = h('div', { class: 'lcol', style: 'position:absolute;left:6px;top:' + safeT + ';display:flex;flex-direction:column;gap:4px;align-items:flex-start;pointer-events:none' }, E.hud);
    E.hud2 = h('div', { class: 'hud hud2', style: 'right:56px;top:' + safeT + ';text-align:right;max-width:44%' });
    const tr = h('div', { class: 'col trbtns', style: 'position:absolute;right:6px;top:' + safeT }, h('button', { class: 'btn sm', onclick: () => UI.go('map') }, '🌍'), h('button', { class: 'btn sm', onclick: () => this.menu() }, '☰'), E.hudB = h('button', { class: 'btn sm', title: 'Панели: компактные / полные / скрыты', onclick: () => this.cycleHud() }, 'HUD'), E.cenB = h('button', { class: 'btn sm hide', title: 'Камера к ракете', onclick: () => { Cam.ox = Cam.oy = 0; this.camBtn(); } }, '◎'));
    // тяга: ползунок слева и быстрые кнопки рядом
    E.thr = h('div', { class: 'thr' }, h('i'), h('u')); E.thrFill = E.thr.firstChild; E.thrMark = E.thr.lastChild;
    E.thrL = h('div', { class: 'lbl', style: 'left:8px;bottom:272px;font-size:12px' }, 'ТЯГА');
    const thrBtns = h('div', { class: 'col', style: 'position:absolute;left:54px;bottom:96px;gap:4px' }, h('button', { class: 'btn sm', onclick: () => this.setThr(1) }, 'MAX'), h('button', { class: 'btn sm', onclick: () => this.setThr(.5) }, '50'), h('button', { class: 'btn sm', onclick: () => this.setThr(0) }, 'СТОП'));
    // справа: ступень, SAS, РСУ
    E.stage = h('button', { class: 'btn go stbtn', onclick: () => this.doStage() }, 'СТУП');
    E.sasB = h('button', { class: 'btn sm sasbtn', onclick: () => this.sasMenu() }, 'SAS');
    E.rcsB = h('button', { class: 'btn sm', onclick: () => this.toggleRcs() }, 'РСУ');
    const rc = h('div', { class: 'col', style: 'position:absolute;right:8px;bottom:200px;gap:4px;align-items:flex-end' }, E.sasB, E.rcsB);
    const hold = (el, on, off) => { const d = e => { e.preventDefault(); try { el.setPointerCapture(e.pointerId); } catch (x) { } on(); }; const u = () => off(); el.addEventListener('pointerdown', d); el.addEventListener('pointerup', u); el.addEventListener('pointercancel', u); el.addEventListener('pointerleave', u); };
    // поворот: большие кнопки в нижних углах (как в Spaceflight Simulator) — достаются большими пальцами
    E.left = h('button', { class: 'btn big rot', style: 'left:8px;bottom:' + safeB }, h('i', { class: 'px mono', 'data-n': 'chevL' }), h('div', { class: 'tiny' }, 'влево'));
    E.right = h('button', { class: 'btn big rot', style: 'right:8px;bottom:' + safeB }, h('i', { class: 'px mono', 'data-n': 'chevR' }), h('div', { class: 'tiny' }, 'вправо'));
    hold(E.left, () => this.setRot(-1), () => this.setRot(0)); hold(E.right, () => this.setRot(1), () => this.setRot(0));
    E.drvL = h('button', { class: 'btn sm hide', style: 'width:64px' }, '🛞◀'); E.drvR = h('button', { class: 'btn sm hide', style: 'width:64px' }, '🛞▶');
    hold(E.drvL, () => this.setDrive(-1), () => this.setDrive(0)); hold(E.drvR, () => this.setDrive(1), () => this.setDrive(0));
    const steer = h('div', { class: 'row', style: 'position:absolute;left:50%;transform:translateX(-50%);bottom:62px' }, E.drvL, E.drvR);
    // время
    E.warpL = h('b', { class: 'cy', style: 'min-width:54px;text-align:center;font-size:14px' }, '×1');
    const warp = h('div', { class: 'row warp', style: 'position:absolute;left:50%;transform:translateX(-50%);bottom:' + safeB + ';gap:4px' },
      h('button', { class: 'btn sm', onclick: () => this.warp(-1) }, '⏪'), E.warpL, h('button', { class: 'btn sm', onclick: () => this.warp(1) }, '⏩'), h('button', { class: 'btn sm', onclick: () => this.warp(0) }, '⏹'));
    // выдвижная панель слева: пиксельные значки вместо нижних кнопок
    const dbtn = (ico, t, f) => h('button', { class: 'dbtn', onclick: () => { this.drawer(false); f(); } }, h('i', { class: 'px' + (PX_MONO[ico] ? ' mono' : ''), 'data-n': ico }), h('span', null, t));
    E.drawer = h('div', { class: 'drawer' }, dbtn('robot', 'Автопилот', () => this.apPanel()), dbtn('lander', 'Посадка', () => this.landPanel()), dbtn('microscope', 'Приборы', () => this.sciPanel()),
      dbtn('stages', 'Ступени', () => this.stagesPanel()), dbtn('wrench', 'Детали', () => this.partsPanel()), dbtn('rocket', 'Аппараты', () => this.vesPanel()), dbtn('book', 'Обучение', () => Tutor.open()), dbtn('flask', 'Читы', () => UI.cheatSheet()));
    E.dh = h('button', { class: 'dh', title: 'Меню инструментов', onclick: () => this.drawer() }, h('i', { class: 'px mono', 'data-n': 'chevR' }));
    E.ap = h('div', { class: 'hud hide', style: 'position:static;font-size:11px;white-space:normal;max-width:200px;text-align:left' }); E.lcol.prepend(E.ap);
    E.land = h('div', { class: 'hud hide land', style: 'position:static' }); E.lcol.append(E.land);
    E.hint = h('div', { class: 'hud hide hint', style: 'left:50%;transform:translateX(-50%);bottom:96px' });
    this.applyHud();
    root.append(E.lcol, E.hud2, tr, E.thr, E.thrL, thrBtns, rc, E.stage, steer, E.left, E.right, warp, E.hint, E.drawer, E.dh);
    $('#ui').append(root);
  },
  // ---------- режим панелей, камера, тап по детали ----------
  applyHud() { const E = this.E, m = this.hudMode; if (!E.lcol) return; E.lcol.style.display = m === 2 ? 'none' : ''; E.hud2.style.display = m === 2 ? 'none' : ''; if (m === 2) E.hint.classList.add('hide'); },
  cycleHud() { this.hudMode = this.hudMode === 1 ? 0 : this.hudMode === 0 ? 2 : 1; Store.set('hudm', this.hudMode); this.applyHud(); this.hudT = 0; UI.toast(['Панели: полные', 'Панели: компактные', 'Панели скрыты'][this.hudMode], 'info'); },
  camBtn() { const E = this.E; if (E.cenB) E.cenB.classList.toggle('hide', Math.abs(Cam.ox) + Math.abs(Cam.oy) < 3); },
  tap(cx, cy) {
    const now = performance.now();
    if (this._lt && now - this._lt.t < 350 && Math.hypot(cx - this._lt.x, cy - this._lt.y) < 36) { this._lt = null; Cam.ox = Cam.oy = 0; this.camBtn(); this.partCard(null); return; }   // двойной тап — камера к ракете
    this._lt = { t: now, x: cx, y: cy };
    if (!this.V() || !FV.lastS) return;
    const r = App.cv.getBoundingClientRect(), k = Gfx.w / Math.max(1, r.width);
    this.partCard(FV.partAt((cx - r.left) * k, (cy - r.top) * k));
  },
  partCard(p) {
    if (this.pcard) { this.pcard.remove(); this.pcard = null; } this.pcardP = p || null; if (!p || !this.root) return;
    this.pcard = h('div', { class: 'hud pcard', style: 'position:absolute;left:50%;transform:translateX(-50%);top:37%;width:min(92vw,330px);pointer-events:auto;z-index:25;white-space:normal;text-align:left;font-size:12px' });
    this.root.append(this.pcard); this.drawCard();
  },
  drawCard() {
    const p = this.pcardP, v = this.V(), W = App.W; if (!this.pcard) return;
    if (!p || !v || !v.parts.includes(p)) { this.partCard(null); return; }
    const d = p.d, L = [], Bt = []; const kv = (c, t) => L.push(h('div', { class: c || '' }, t));
    if (d.real) kv('tiny mut', d.real);
    if (p.shielded) kv('or', 'Закрыт обтекателем: прибор и антенна не работают, пока его не сбросить.');
    if (d.eng && !d.eng.rcs) { kv(p.on ? 'gr' : 'mut', (p.on ? 'Работает' : 'Выключен') + (p.stage >= 0 ? ' · включится на ступени ' + (p.stage + 1) : '')); kv('mut', 'Тяга ' + fmtForce((d.eng.Fv || 0) * (p.n || 1))); }
    else if (d.eng && d.eng.rcs) kv('mut', 'Двигатель ориентации (РСУ)');
    if (d.dec) kv('mut', 'Разделитель' + (p.stage >= 0 ? ' · сработает на ступени ' + (p.stage + 1) : ''));
    if (d.tank || d.res || (p.res && Object.keys(p.res).length && !d.eng)) { const cap = partCap(p), cur = Object.keys(p.res || {}).filter(k => k !== 'ec').reduce((s, k) => s + p.res[k], 0); if (cap > 0) kv('', 'Топливо: ' + fmtMass(cur) + ' из ' + fmtMass(cap)); }
    if (d.solar) { if (d.solar.deploy) { const on = !!p.st.deployed; kv(on ? 'gr' : 'or', on ? 'Панель раскрыта' : 'Панель сложена'); Bt.push([on ? 'Сложить' : 'Раскрыть', () => { p.st.deployed = !on; }]); } else kv('mut', 'Солнечные элементы на корпусе'); }
    if (d.ant) { if (d.ant.deploy) { const on = !!p.st.deployed; kv(on ? 'gr' : 'or', on ? 'Антенна раскрыта' : 'Антенна сложена'); Bt.push([on ? 'Сложить' : 'Раскрыть', () => { p.st.deployed = !on; }]); } else kv('mut', 'Антенна'); }
    if (d.leg) { const on = !!p.st.deployed; kv(on ? 'gr' : 'or', on ? 'Опора выпущена' : 'Опора убрана'); Bt.push([on ? 'Убрать' : 'Выпустить', () => { p.st.deployed = !on; }]); }
    if (d.chute || d.src) { const s = p.st.chute; kv(s === 'open' ? 'gr' : 'mut', s === 'arm' ? 'Парашют взведён: раскроется сам' : s === 'deploy' ? 'Раскрывается' : s === 'open' ? 'Раскрыт' : s === 'cut' ? 'Отстрелен' : 'Парашют в ранце'); if (!s) Bt.push(['Взвести', () => { p.st.chute = 'arm'; }]); else if (s === 'arm') Bt.push(['Снять', () => { p.st.chute = null; }]); }
    if (d.fair) { kv('mut', 'Головной обтекатель'); Bt.push(['Сбросить', () => { W.jettisonFairing(v); }]); }
    if (d.inst) { const running = p.st.run != null && p.st.run >= 0, why = Science.canRun(W, v, p); kv(running ? 'cy' : why ? 'or' : 'gr', running ? 'Измерение идёт…' : (why || 'Прибор готов')); if (!running && !why) Bt.push(['Запустить', () => { const r = Science.start(W, v, p); if (r) UI.toast(r, 'bad'); }]); }
    if (d.wheel) kv('mut', 'Колесо Ø' + (d.wheel.r * 2).toFixed(2) + ' м: едет кнопками ◀ ▶ внизу');
    if (d.core) kv('mut', 'Блок управления · потребляет ' + d.core.ec + ' ед. энергии/с');
    if (d.batt && !d.core) kv('mut', 'Аккумулятор');
    if (typeof partDry === 'function') kv('tiny mut', 'Масса ' + fmtMass(partDry(p)));
    this.pcard.innerHTML = '';
    this.pcard.append(h('div', { class: 'row' }, h('b', { class: 'cy sp' }, d.name), h('button', { class: 'btn sm', onclick: () => this.partCard(null) }, '✕')), ...L,
      ...(Bt.length ? [h('div', { class: 'row', style: 'margin-top:4px' }, ...Bt.map(([t, f]) => h('button', { class: 'btn sm go sp', onclick: () => { f(); this.drawCard(); } }, t)))] : []));
  },
  drawer(open) {
    const E = this.E; const on = open == null ? !E.drawer.classList.contains('open') : !!open;
    E.drawer.classList.toggle('open', on); E.dh.classList.toggle('open', on);
  },
  bind() {
    const el = this.E.thr; const mv = e => { const r = el.getBoundingClientRect(); this.setThr(clamp(1 - (e.clientY - r.top) / r.height, 0, 1)); };
    this._tp = e => { e.preventDefault(); el.setPointerCapture(e.pointerId); this._td = true; mv(e); }; this._tm = e => { if (this._td) mv(e); }; this._tu = () => { this._td = false; };
    el.addEventListener('pointerdown', this._tp); el.addEventListener('pointermove', this._tm); el.addEventListener('pointerup', this._tu); el.addEventListener('pointercancel', this._tu);
    // зум и панорама камеры по холсту
    const cv = App.cv; this._ptr = new Map();
    this._cd = e => { this._ptr.set(e.pointerId, { x: e.clientX, y: e.clientY }); this._g = this._ptr.size === 1 ? { x: e.clientX, y: e.clientY, t: performance.now(), mv: 0 } : null; if (this._ptr.size === 2) { const a = [...this._ptr.values()]; this._pd = Math.hypot(a[0].x - a[1].x, a[0].y - a[1].y); this._pz = Cam.z; } };
    this._cm = e => {
      if (!this._ptr.has(e.pointerId)) return; const old = this._ptr.get(e.pointerId); this._ptr.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (this._ptr.size === 2 && this._pd) { const a = [...this._ptr.values()]; const d = Math.hypot(a[0].x - a[1].x, a[0].y - a[1].y); Cam.z = clamp(this._pz * d / this._pd, .15, 12); this._g = null; }
      else if (this._ptr.size === 1 && this._g) {   // один палец: тянем камеру (вид сдвигается за пальцем)
        this._g.mv = Math.max(this._g.mv, Math.hypot(e.clientX - this._g.x, e.clientY - this._g.y));
        if (this._g.mv > 8) { const k = Gfx.w / Math.max(1, App.cv.clientWidth); Cam.ox = clamp(Cam.ox + (e.clientX - old.x) * k, -Gfx.w * 1.2, Gfx.w * 1.2); Cam.oy = clamp(Cam.oy + (e.clientY - old.y) * k, -Gfx.h * 1.2, Gfx.h * 1.2); this.camBtn(); }
      }
    };
    this._cu = e => {
      const had = this._ptr.has(e.pointerId); this._ptr.delete(e.pointerId); this._pd = 0;
      const g = this._g; this._g = null;
      if (had && g && g.mv <= 8 && performance.now() - g.t < 450 && e.type === 'pointerup') this.tap(e.clientX, e.clientY);
    };
    this._cw = e => { e.preventDefault(); Cam.z = clamp(Cam.z * (e.deltaY < 0 ? 1.12 : 1 / 1.12), .15, 12); };
    cv.addEventListener('pointerdown', this._cd); addEventListener('pointermove', this._cm); addEventListener('pointerup', this._cu); addEventListener('pointercancel', this._cu); cv.addEventListener('wheel', this._cw, { passive: false });
  },
  unbind() { const cv = App.cv; cv.removeEventListener('pointerdown', this._cd); removeEventListener('pointermove', this._cm); removeEventListener('pointerup', this._cu); removeEventListener('pointercancel', this._cu); cv.removeEventListener('wheel', this._cw); },
  // ---------- команды ----------
  V() { const W = App.W; return W && W.active && W.active.alive ? W.active : null; },
  stopAP(why) { const v = this.V(); if (!v) return; if (v.ap && !v.ap.done) { v.ap = { phase: 'none', done: true }; v.tasks = []; v.payloadTasks = null; App.W.autoWarp = false; UI.toast('Автопилот отключён' + (why ? ' (' + why + ')' : ''), 'info'); } },
  setThr(x) { const v = this.V(); if (!v) return; if (v.ap && !v.ap.done && Math.abs(x - v.throttle) > .02 && ['launch', 'coast', 'circ', 'node', 'land'].includes(v.ap.phase)) this.stopAP('ручная тяга'); v.throttle = clamp(x, 0, 1); },
  setRot(r) { const v = this.V(); this.rot = r; if (!v) return; v.ctl.rot = r; if (r && v.ap && !v.ap.done && ['launch', 'coast', 'circ', 'land'].includes(v.ap.phase)) this.stopAP('ручное управление'); },
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
      if (warp <= PHYS_MAX) FX.update(W, dt * Math.min(warp, 4), A || view); else { FX.P.length = 0; W.evq.length = 0; }
      FV.frame(g, W, view, App.t);
      try { Sfx.update(A ? A.throttle : 0, FV.lastS ? FV.lastS.dens : 0, A ? (A.q || 0) : 0, !!A && warp <= 2); } catch (e) { }
    } else { g.clear(rgb(4, 6, 14)); }
    // потеря
    if (!A) { this.lostT += dt; if (this.lostT > 1.6 && !this.lostShown) { this.lostShown = true; this.lostPanel(); } }
    else if (this.lostShown) { this.lostShown = false; this.lostT = 0; UI.closeSheets(); }
    // журнал → тосты
    UI.pumpLogs(W);
    this.hudT -= dt; if (this.hudT <= 0) { this.hudT = .15; this.hud(A, W); }
    if (this.pcard) { this._pcT = (this._pcT || 0) - dt; if (this._pcT <= 0) { this._pcT = .4; this.drawCard(); } }
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
    const full = this.hudMode === 0, orb = v.mode !== 'landed' && alt > 15000;   // компактный режим: три строки, а орбита — только когда мы уже в космосе
    h1 += row(surfM ? 'Скор. пов.' : 'Скорость', fmtSpeed(sp)); h1 += row('Верт.', (vr >= 0 ? '+' : '') + fmtSpeed(vr), vr < -40 && alt < 20000 && v.mode !== 'rails' ? 'rd' : ''); if (full) h1 += row('Гориз.', fmtSpeed(vh));
    if (full || orb) { h1 += row('Апоцентр', ap, 'or'); h1 += row('Перицентр', el.rp < B.R * 0.1 || v.mode === 'landed' ? '—' : pe, el.rp < B.R + (B.atm ? B.atm.top : 0) ? 'rd' : 'or'); }
    E.hud.innerHTML = h1;
    // правая колонка: тяга, энергия, топливо
    const fu = this.fuel(v); const ecf = v.ecCap > 0 ? v.ec / v.ecCap : 0; const bar = (f, c) => '<div class="bar ' + c + '" style="width:70px;display:inline-block;vertical-align:middle"><i style="width:' + Math.round(clamp(f, 0, 1) * 100) + '%"></i></div>';
    let h2 = '<div>Топливо ' + bar(fu, 'fu') + '</div><div>Энергия ' + bar(ecf, 'ec') + '</div>';
    if (full) h2 += '<div class="mut">Масса ' + fmtMass(v.mp.m) + '</div>';
    if (v.thrust > 0 && full) h2 += '<div>Тяга ' + fmtForce(v.thrust) + ' · TWR ' + tw.toFixed(2) + '</div>';
    if (v.gload > 1.5) h2 += '<div class="' + (v.gload > 6 ? 'rd' : 'or') + '">' + v.gload.toFixed(1) + ' g</div>';
    if (v.q > 500) h2 += '<div class="' + (v.q > 30000 ? 'or' : 'mut') + '">Q ' + fmtNum(v.q / 1000, 1) + ' кПа</div>';
    const hot = Math.max(0, ...v.parts.map(p => p.temp || 0)); if (hot > 600) h2 += '<div class="' + (hot > 1200 ? 'rd' : 'or') + '">нагрев ' + Math.round(hot) + ' K</div>';
    if (v.gen != null && full) h2 += '<div class="mut">' + (v.gen - v.use >= 0 ? '+' : '') + fmtPow(v.gen - v.use) + '</div>';
    if (v.link && (full || !v.link.ok)) h2 += '<div class="' + (v.link.ok ? 'gr' : 'mut') + '">' + (v.link.ok ? (v.txing ? '📡 ' + fmtBits(v.link.rate / 1e6 * 8 / 8) + '/с' : '📡 связь') : '📡 ' + (v.link.why || 'нет')) + '</div>';
    E.hud2.innerHTML = h2;
    // автопилот
    if (v.ap && !v.ap.done && v.ap.phase !== 'none') { E.ap.classList.remove('hide'); E.ap.innerHTML = '🤖 ' + (AP_NAMES[v.ap.phase] || v.ap.phase) + (v.ap.phase === 'land' && v.ap.st ? ': ' + (LAND_ST[v.ap.st] || '') : '') + (v.ap.phase === 'wait' && v.ap.until ? ' · ' + fmtDur(v.ap.until - W.ut) : '') + (v.tasks && v.tasks.length ? ' · далее: ' + v.tasks.length : ''); }
    else if (v.ap && v.ap.fail) { E.ap.classList.remove('hide'); E.ap.innerHTML = '<span class="rd">⛔ ' + esc(v.ap.fail) + '</span>'; }
    else E.ap.classList.add('hide');
    this.landHud(v, W, B);
    // кнопки
    const nb = StagePanel.nextBrief(v); const left = v.stages.length - v.stageIdx;
    const key = left + '|' + v.stageIdx + '|' + nb.map(g => g.defId + g.n).join(',');
    if (E.stageKey !== key) {
      E.stageKey = key; E.stage.innerHTML = '';
      if (left > 0) {
        E.stage.append(h('div', null, 'СТУП'), h('div', { class: 'tiny' }, (v.stageIdx + 1) + ' / ' + v.stages.length));
        const ic = h('div', { class: 'nxt' }); for (const g of nb.slice(0, 3)) ic.append(h('span', { class: 'nx ' + StagePanel.actCls(g.act) }, StagePanel.icon(g.defId, 20), g.n > 1 ? h('i', null, '×' + g.n) : null));
        E.stage.append(ic);
      } else E.stage.append(h('div', null, 'нет'), h('div', { class: 'tiny' }, 'ступеней'));
    }
    E.stage.classList.toggle('dis', left <= 0);
    E.sasB.textContent = 'SAS: ' + (SAS_MODES.find(x => x[0] === v.sas) || ['', v.sas])[1]; E.sasB.classList.toggle('on', v.sas !== 'off'); E.rcsB.classList.toggle('on', !!v.rcs);
    const wh = v.parts.some(p => p.d.wheel); E.drvL.classList.toggle('hide', !wh); E.drvR.classList.toggle('hide', !wh);
    E.warpL.textContent = '×' + fmtNum(W.warpVal(), 0);
  },
  // ---------- посадка: показания и подсказки ----------
  landState(v, W) {
    const B = W.U.byId[v.body]; if (!B || !B.landable || v.mode === 'landed' || v.mode === 'rails') return null;
    let c; try { c = landCalc(W, v); } catch (e) { return null; } if (!c || c.hg > 30000) return null;
    const aUse = Math.max(0.3, 0.55 * (c.aT * 0.9 - c.g)); const vAllow = -landProfile(c, aUse);       // скорость падения, которую ещё можно погасить
    return { B, c, aUse, vAllow };
  },
  landHud(v, W, B) {
    const E = this.E; const L = this.landState(v, W);
    if (!L) { E.land.classList.add('hide'); E.hint.classList.add('hide'); return; }
    const { c, vAllow } = L, fall = -c.vv;
    let cv = '', ch = '';
    if (c.hg < 25) { cv = fall <= 3 ? 'gr' : fall <= 6 ? 'or' : 'rd'; ch = c.vh <= 2 ? 'gr' : c.vh <= 5 ? 'or' : 'rd'; }
    else { cv = fall > vAllow * 1.25 && fall > 8 ? 'rd' : fall > vAllow * 0.9 && fall > 8 ? 'or' : 'gr'; ch = c.hg < 800 ? (c.vh <= 3 ? 'gr' : c.vh <= 10 ? 'or' : 'rd') : ''; }
    const row = (a, b, k) => '<div style="display:flex;justify-content:space-between;gap:10px"><span class="mut">' + a + '</span><b class="' + k + '">' + b + '</b></div>';
    let t = '<div class="cy" style="text-align:center">🛬 ПОСАДКА</div>' + row('Над грунтом', fmtDist(Math.max(0, c.hg)), '') + row('Падение', (c.vv > 0.5 ? 'вверх ' : '') + fmtSpeed(Math.abs(c.vv)), cv) + row('Боковая', fmtSpeed(c.vh), ch);
    if (c.vv < -0.5) t += row('До касания', fmtDur(Math.max(0, c.hg / -c.vv)), '');
    if (this.hudMode === 0 || c.aT / c.g < 1.1) t += row('Тяга / вес', (c.aT / c.g).toFixed(2), c.aT / c.g < 1.1 ? 'rd' : '');
    E.land.innerHTML = t; E.land.classList.remove('hide');
    const hint = (v.ap && !v.ap.done && v.ap.phase === 'land') ? 'Автопосадка ведёт аппарат сама. Любое ваше действие тягой/поворотом отключит её.' : this.landHint(v, W, L);
    const apOn = v.ap && !v.ap.done && v.ap.phase === 'land';
    if (hint && this.hudMode !== 2 && !(apOn && this.hudMode === 1)) { E.hint.textContent = hint; E.hint.classList.remove('hide'); } else E.hint.classList.add('hide');
  },
  landHint(v, W, L) {
    const { B, c, vAllow } = L, fall = -c.vv; const legs = v.parts.filter(p => p.d.leg), wh = v.parts.some(p => p.d.wheel);
    if (c.aT < c.g * 1.05 && v.thrust <= 0 && !v.parts.some(p => p.d.chute)) return 'Тяги не хватит, чтобы зависнуть здесь (тяга/вес ' + (c.aT / c.g).toFixed(2) + '). Нужен парашют или мощнее двигатель.';
    if (c.hg < 600 && legs.length && legs.some(p => !p.st.deployed)) return 'Выпустите опоры: меню слева → «Детали».';
    if (B.atm && c.pa > 300 && v.parts.some(p => p.d.chute) && v.parts.some(p => (p.d.chute) && !p.st.chute) && c.hg < 8000) return 'Парашют не взведён: меню слева → «Детали» → «Взвести».';
    if (c.hg > 1500 && c.vh > 40) return 'Гасите боковую скорость: SAS «Против скор. над пов.», затем тяга вверх ползунком (MAX).';
    if (c.hg < 25) return fall > 6 ? 'Слишком быстро! Добавьте тягу.' : (c.vh > 3 ? 'Гасите боковую скорость: наклоните ракету против движения.' : 'Держите ровно, опускайтесь ≤ 3 м/с. Тягу по чуть-чуть.');
    if (fall > vAllow * 1.1 && fall > 8) return 'Падаете слишком быстро — прибавьте тягу сейчас!';
    if (c.vh > 8 && c.hg < 1500) return 'Боковая скорость ' + Math.round(c.vh) + ' м/с — наклоняйте ракету против движения и жмите тягу.';
    if (v.sas !== 'sretro' && v.sas !== 'up' && v.sas !== 'hold' && c.hg < 5000) return 'Для посадки удобны SAS «Против скор. над пов.» (торможение) и «От тела ↑» (вертикаль).';
    return '';
  },
  startLand() {
    const W = App.W, v = this.V(); if (!v) return; const B = W.U.byId[v.body];
    if (!B.landable) { UI.toast('Здесь нет твёрдой поверхности', 'bad'); return; }
    v.ap = { phase: 'land', stageLimit: v.stages.length }; v.tasks = []; W.autoWarp = true; UI.toast('Автопосадка включена', 'ok'); if (this.panel) { this.panel.sh.close(); this.panel = null; }
  },
  landPanel() {
    this.openPanel('🛬 Посадка', b => {
      const W = App.W, v = this.V(); if (!v) return; const B = W.U.byId[v.body];
      if (!B.landable) { b.append(h('div', { class: 'card' }, 'На ' + B.name + ' нет твёрдой поверхности — сесть нельзя. Можно зависнуть в атмосфере на парашюте.')); return; }
      const r = Math.hypot(v.x, v.y), g = B.gm / (r * r), c = landCalc(W, v);
      const rows = [], ok = (t, good, fix) => rows.push(h('div', { class: 'row' }, h('span', { class: good ? 'gr' : 'rd', style: 'width:16px' }, good ? '✔' : '✖'), h('span', { class: 'small sp' }, t), fix || null));
      const mk = (t, f) => h('button', { class: 'btn sm', onclick: () => { f(); this.panel && this.panel.render(); } }, t);
      b.append(h('div', { class: 'card small' }, h('div', { class: 'kv' }, h('span', null, 'Тело'), h('b', null, B.name)), h('div', { class: 'kv' }, h('span', null, 'Тяготение'), h('b', null, g.toFixed(2) + ' м/с²')), h('div', { class: 'kv' }, h('span', null, 'Атмосфера'), h('b', null, B.atm ? 'есть (' + (B.atm.dens(0)).toFixed(2) + ' кг/м³ у земли)' : 'нет — только двигатели'))));
      const legs = v.parts.filter(p => p.d.leg), chutes = v.parts.filter(p => p.d.chute || p.d.src);
      if (legs.length) ok('Опоры выпущены', legs.every(p => p.st.deployed), mk('Выпустить', () => legs.forEach(p => p.st.deployed = true))); else ok('Опоры: нет (сядете на корпус или колёса)', false);
      if (B.atm) { if (chutes.length) ok('Парашют взведён', chutes.every(p => p.st.chute), mk('Взвести', () => chutes.forEach(p => { if (!p.st.chute) p.st.chute = 'arm'; }))); else ok('Парашюта нет (в атмосфере нужен)', B.atm.dens(0) < 0.05); }
      const twr = c ? c.aT / g : 0; ok('Тяга/вес здесь: ' + twr.toFixed(2) + ' (нужно ≥ 1,3)', twr >= 1.3);
      const A = attAuthority(v.parts, v.mp); ok('Управление поворотом: ' + (A.t90 < 30 ? 'хорошее' : 'слабое — разворот на 90° ≈ ' + Math.round(A.t90) + ' с'), A.t90 < 30);
      if (c) { const d = landDv(W, v, c); ok('Запас скорости ≈ ' + Math.round(d.have) + ' м/с (нужно ≈ ' + Math.round(d.need) + ')', d.have >= d.need); }
      b.append(h('div', { class: 'card col' }, h('b', { class: 'yl' }, 'Проверка перед посадкой'), ...rows));
      b.append(h('button', { class: 'btn go', onclick: () => this.startLand() }, '🤖 Автопосадка'), h('div', { class: 'tiny mut' }, 'Сама сойдёт с орбиты, затормозит и сядет на опоры. Любое ваше нажатие тяги или поворота отключит её.'));
      b.append(h('div', { class: 'card col small', style: 'line-height:1.35' }, h('b', { class: 'yl' }, 'Вручную — по шагам'),
        h('div', null, '1. Против скорости: SAS «Против скор. над пов.» — нос развернётся тягой вперёд по движению.'), h('div', null, '2. Тормозите: ползунок тяги слева вверх (MAX), пока горизонтальная скорость не станет ≈ 0.'),
        h('div', null, '3. Выпустите опоры. SAS «От тела ↑» — ракета встанет вертикально.'), h('div', null, '4. Снижайтесь, держа падение ниже 10 м/с у высоты 100 м и ≈ 2–3 м/с у земли. Следите за зелёными цифрами в блоке «Посадка».'),
        h('div', { class: 'mut' }, 'Обучение → «Посадка на Луну» проведёт шаг за шагом.')));
    }, '72%');
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
  // что сработает на следующих нажатиях «СТУП»
  stagesPanel() {
    this.openPanel('Ступени', b => { const v = this.V(); if (!v) return; b.append(StagePanel.render({ parts: v.parts, edit: false, cur: v.stageIdx, stagesN: v.stages.length })); }, '62%');
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
      if (B.landable) b.append(h('div', { class: 'card col' }, h('b', { class: 'yl' }, 'Посадка'), h('div', { class: 'tiny mut' }, 'Сойдёт с орбиты, затормозит и сядет на опоры сама. Подробности и проверка — в меню слева «Посадка».'), h('div', { class: 'row' }, h('button', { class: 'btn sm go sp', onclick: () => this.startLand() }, '🤖 Автопосадка'), h('button', { class: 'btn sm', onclick: () => this.landPanel() }, 'Проверка'))));
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
    if (v && v.mode === 'landed' && v.body === W.U.home) b.append(btn('♻ Вернуть аппарат на космодром (наука)', () => { const r = W.recover(v); if (r) { UI.toast('Возвращён, наука +' + r.sci.toFixed(1), 'ok'); UI.save(true); UI.go('hub'); } }));
    b.append(btn('🏠 В центр управления', () => { UI.save(true); UI.go('hub'); }), btn('💾 Сохранить', () => UI.save()), btn('⚙ Настройки', () => UI.settings()), btn('🧪 Читы', () => UI.cheatSheet()));
  },
  lostPanel() {
    const W = App.W; const b = h('div', { class: 'col' }); const sh = UI.sheet('Аппарат потерян', b, { height: '46%' });
    b.append(h('div', { class: 'small', style: 'line-height:1.35' }, 'Связь с аппаратом потеряна. Проверьте журнал: возможно, не хватило топлива, ударились о поверхность или сгорели при входе в атмосферу.'),
      h('div', { class: 'col' }, h('button', { class: 'btn go', onclick: () => { sh.close(); const dr = Store.get('draft', null); UI.go('build', dr ? desDesign(dr) : null); } }, '🛠 В ангар — переделать'), h('button', { class: 'btn', onclick: () => { sh.close(); UI.go('hub'); } }, '🏠 В центр управления')));
    try { Sfx.bad(); } catch (e) { }
  }
};
