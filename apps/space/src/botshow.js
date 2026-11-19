'use strict';
// ============ Бот-шоу: за главным экраном автопилоты сами запускают и сажают настоящие аппараты ============
// Своя маленькая вселенная (не сохраняется, не влияет на игру): ракета на старте → отсчёт → взлёт на автопилоте →
// сброс ступеней → космос; а ещё посадка на Луну. Камера ведёт текущий аппарат, потом плавный переход к следующему.
const BOT_SHOWS = [
  { id: 'falcon9', k: 'launch' }, { id: 'electron', k: 'launch' }, { id: 'lander', k: 'land', body: 'moon', alt: 1800, vd: 20, vh: 55 },
  { id: 'saturn5', k: 'launch' }, { id: 'sound', k: 'launch' }, { id: 'atlas5', k: 'launch' }, { id: 'starship', k: 'launch' },
  { id: 'lander2', k: 'land', body: 'moon', alt: 1500, vd: 18, vh: 45 }
];
const BotShow = {
  W: null, v: null, spec: null, tpl: null, ph: 'pad', pt: 0, T0: 0, real: 0, fade: 1, fadeDir: -1, order: [], last: '', capEl: null, nameEl: null, infoEl: null, ov: null, started: false,
  // ---------- подготовка ----------
  begin() {
    const ui = document.getElementById('ui');
    if (!this.ov && ui && ui.parentNode) { this.ov = document.createElement('div'); this.ov.style.cssText = 'position:fixed;inset:0;background:#000;opacity:1;pointer-events:none'; ui.parentNode.insertBefore(this.ov, ui); }
    this.next(true);
  },
  pick() {
    if (!this.order.length) {
      const a = BOT_SHOWS.slice(); for (let i = a.length - 1; i > 0; i--) { const j = (Math.random() * (i + 1)) | 0; [a[i], a[j]] = [a[j], a[i]]; }
      if (a[0].id === this.last) a.push(a.shift());
      this.order = a;
    }
    return this.order.shift();
  },
  // красивый свет: подобрать время суток (старт с Земли) — Солнце невысоко над горизонтом
  sunny(W, v) {
    const t0 = W.ut; let best = t0, bs = 9;
    for (let k = 0; k < 144; k++) {
      W.ut = t0 + k * 600; W.setPinned(v); const si = Systems.sunInfo(W, v), r = Math.hypot(v.x, v.y);
      const sc = Math.abs((v.x * si.sx + v.y * si.sy) / r - 0.55); if (sc < bs) { bs = sc; best = W.ut; }
    }
    W.ut = best; W.setPinned(v);
  },
  next(first) {
    let spec = this.pick(), tries = 0;
    while ((!TEMPLATES.find(x => x.id === spec.id) || (spec.body && !UI.getU('solar').byId[spec.body])) && tries++ < 8) spec = this.pick();
    this.spec = spec; this.last = spec.id;
    const t = TEMPLATES.find(x => x.id === spec.id); this.tpl = t;
    const W = new World(UI.getU('solar'), { tier: 9 }); W.sandbox = true;
    const D = t.make(); const v = W.launch(D); v.throttle = 0; W.active = v; v.sunLit = 1;
    this.W = W; this.v = v; this.D = D; this.ph = 'pad'; this.pt = 0; this.real = 0; this.T0 = 0;
    if (typeof FX !== 'undefined') FX.clear();
    if (spec.k === 'launch') this.sunny(W, v);
    else {
      // посадка: Солнце под приятным углом к площадке спуска
      v.body = spec.body; const si = Systems.sunInfo(W, v), a0 = Math.atan2(si.sy, si.sx);
      v.orbPhase = a0 + Math.acos(0.62) * (Math.random() < .5 ? 1 : -1) - 1.3;
      W.placeDescent(v, spec.body, spec.alt, spec.vd, spec.vh);
      if (!v.engines.some(p => p.on)) { try { W.stage(v); } catch (e) { } }
      v.throttle = 0; v.sas = 'sretro'; v.rcs = v.rcsList.length > 0;
      for (const p of v.parts) { if (p.d.leg) p.st.deployed = true; if (p.d.chute || p.d.src) p.st.chute = 'arm'; }
      W.setWarp(0); this.ph = 'fly'; this.T0 = W.ut; this.go();
    }
    this.fade = 1; this.fadeDir = -1;
    this.started = true;
  },
  // включить автопилот выбранного бота
  go() {
    const W = this.W, v = this.v, s = this.spec;
    if (s.k === 'launch') { const goal = s.id === 'sound' ? { alt: 150e3, inj: 0, restarts: 0, label: 'Суборбитальный полёт' } : AutoBuild.planGoal(W, null, 200e3); AutoBuild.startMission(W, v, goal, this.D); }
    else v.ap = { phase: 'land', stageLimit: v.stages.length };
    W.autoWarp = false; W.setWarp(0); this.ph = 'fly'; this.T0 = W.ut;
  },
  skip() { if (this.fadeDir > 0 || this.ph === 'out') return; this.ph = 'out'; this.fadeDir = 1; },
  // вернулись из полёта/карты в меню: чистим эффекты и возвращаем камеру
  resume() { if (typeof FX !== 'undefined') FX.clear(); Cam.z = 0.72; if (this.W && this.W.setWarp) this.W.setWarp(0); },
  // ---------- подпись «БОТ · ракета» ----------
  makeCap(top) {
    this.nameEl = h('b', { class: 'cy' }); this.infoEl = h('div', { class: 'tiny', style: 'color:#dbe6ff' });
    this.capEl = h('div', { class: 'hud botcap', style: 'position:absolute;left:50%;transform:translateX(-50%);top:' + top + ';white-space:nowrap;display:flex;gap:10px;align-items:center;pointer-events:auto;text-align:left;z-index:2' },
      h('div', null, this.nameEl, this.infoEl), h('button', { class: 'btn sm', title: 'Следующий бот', onclick: () => this.skip() }, '»'));
    this.capT = 0; return this.capEl;
  },
  caption(v, B, alt, T) {
    if (!this.nameEl) return;
    if (B.landable && FV.lastS && FV.lastS.v === v && FV.lastS.hg != null) alt = FV.lastS.hg;   // высота над грунтом (рельеф), а не над средним радиусом
    this.nameEl.textContent = '🤖 БОТ · ' + (this.tpl.kind === 'rocket' ? this.tpl.name : this.tpl.name.replace(/^Посадочный зонд /, '').replace(/[«»]/g, ''));
    let s;
    if (this.ph === 'pad') s = 'Старт через ' + Math.max(1, Math.ceil(3 - this.pt)) + '…';
    else if (!v.alive) s = 'Авария';
    else if (this.spec.k === 'land') s = v.mode === 'landed' ? 'Мягкая посадка · ' + (B.name || '') : (B.name || '') + ' · ' + fmtDist(alt) + ' · ' + fmtSpeed(Math.hypot(v.vx + B.rotW * v.y, v.vy - B.rotW * v.x));
    else { const m = Math.max(0, T) | 0; s = 'T+' + ((m / 60) | 0) + ':' + ('0' + (m % 60)).slice(-2) + ' · ' + fmtDist(alt) + ' · ' + fmtSpeed(Math.hypot(v.vx + B.rotW * v.y, v.vy - B.rotW * v.x)); }
    this.infoEl.textContent = s;
  },
  // ---------- кадр ----------
  frame(g, dt) {
    if (!this.started) return;
    const W = this.W, v = this.v; dt = Math.min(dt, 0.1); this.real += dt;
    const B = W.U.byId[v.body]; let warp = 1;
    if (this.ph === 'pad') {
      W.setPinned(v); this.pt += dt;
      if (this.pt >= 3) this.go();
    }
    if (this.ph === 'fly' || this.ph === 'end' || this.ph === 'out') {
      const A = v.alive ? v : null, alt0 = Math.hypot(v.x, v.y) - B.R, T = W.ut - this.T0;
      // темп: взлёт в реальном времени, дальше быстрее (на тяге физика держит не больше ×4)
      let idx = 0; if (this.spec.k === 'land') idx = 1; else if (T > 10) idx = alt0 < 20000 ? 2 : 3;
      idx = Math.min(idx, W.maxWarpIdx()); if (W.warpIdx !== idx) W.setWarp(idx);
      W.step(dt); warp = W.warpVal();
      const alt = Math.hypot(v.x, v.y) - B.R;
      if (this.ph === 'fly') {
        if (!v.alive) { this.ph = 'end'; this.pt = 0; }
        else if (this.spec.k === 'land' ? (v.mode === 'landed' && T > 5) : (alt >= 88000 || T > 260)) { this.ph = 'end'; this.pt = 0; }
        else if (this.real > 110) { this.ph = 'out'; this.fadeDir = 1; }
      } else if (this.ph === 'end') { this.pt += dt; if (this.pt > (v.alive ? 4 : 3.5)) { this.ph = 'out'; this.fadeDir = 1; } }
      this.caption(v, B, alt, T);
    } else this.caption(v, B, Math.hypot(v.x, v.y) - B.R, 0);
    if (typeof FX !== 'undefined') FX.update(W, dt * (warp || 1), v);
    FV.yOff = App.mode === 'hub' ? -0.07 * g.h : 0;   // в центре управления снизу большая панель: поднимаем ракету
    FV.frame(g, W, v, App.t, true); FV.yOff = 0;
    // плавный переход
    if (this.fadeDir) {
      this.fade = clamp(this.fade + this.fadeDir * dt / 0.55, 0, 1);
      if (this.fadeDir > 0 && this.fade >= 1) { this.next(); }
      else if (this.fadeDir < 0 && this.fade <= 0) this.fadeDir = 0;
    }
    if (this.ov) this.ov.style.opacity = this.fade;
  },
  hide() { if (this.ov) this.ov.style.opacity = 0; }
};
