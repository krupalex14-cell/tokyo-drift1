'use strict';
// ============ Оболочка интерфейса: меню, центр управления, листы, читы, настройки ============
const CHEATS = [
  ['noGravity', 'Нет гравитации', 'Аппарат не притягивается к телу (двигайтесь как в невесомости)'],
  ['infFuel', 'Бесконечное топливо', 'Баки не пустеют'],
  ['infEC', 'Бесконечная энергия', 'Батареи не садятся, нет ночи'],
  ['noCrash', 'Не разбиваться', 'Удары и перегрузки не ломают детали'],
  ['noHeat', 'Не нагреваться', 'Вход в атмосферу без нагрева'],
  ['infChute', 'Парашюты без предела', 'Не рвутся при любой скорости'],
  ['overlap', 'Наложение деталей', 'В ангаре детали могут пересекаться и висеть в воздухе'],
  ['infField', 'Бесконечное поле', 'Ангар без границ по высоте и ширине'],
  ['freeBuild', 'Все детали бесплатно', 'Все технологии открыты, деньги не тратятся'],
  ['instantScience', 'Мгновенная наука', 'Данные засчитываются сразу, без передачи']
];
const TECH = [
  { n: 'Первые зонды', cost: 0 }, { n: 'Орбитальные аппараты', cost: 12 }, { n: 'Дальний космос', cost: 60 }, { n: 'Тяжёлые носители', cost: 220 }, { n: 'Ядерные двигатели', cost: 650 }
];
const HELP = [
  ['Цель', 'Изучать космос по-настоящему: запускайте зонды, собирайте образцы и данные, передавайте их на Землю — за это дают науку и деньги.'],
  ['1. Ангар', 'Соберите зонд из настоящих деталей (двигатели, камеры, колёса…) или возьмите шаблон. Каждая новая деталь крепится к выбранной.'],
  ['2. Автосборка ✨', 'Нажмите «авто» — ИИ подберёт и достроит ракету под ваш зонд и выбранную цель (орбита, Луна, Марс…), проверит её виртуальным полётом.'],
  ['3. Полёт', 'Ползунок слева — тяга, «СТУП» — следующая ступень. Автопилот выведет на орбиту сам. Карта (🌍) — орбиты и перелёты.'],
  ['4. Наука', 'Включайте приборы, ловите нужные условия (орбита, посадка), передавайте данные антенной; образцы нужно вернуть домой.'],
  ['5. Энергия', 'Солнечные панели нужно развернуть. В тени и вдали от Солнца работает батарея; РИТЭГ даёт ток всегда.'],
  ['Читы 🧪', 'Бесконечное поле, наложение деталей, без гравитации, телепорт, бесконечное топливо и энергия — в центре управления и в полёте.']
];

const UI = {
  layer: null, scr: null, cur: null, bg: null, solarU: null, sheets: [], _as: 0, lastLog: 0,
  init() {
    this.layer = $('#ui'); this.toastEl = $('#toast');
    try { Sfx.init(); } catch (e) { }
    this.bgNew(); this.go('menu');
    setInterval(() => { if (App.W && (App.mode === 'hub' || App.mode === 'flight' || App.mode === 'map')) this.save(true); }, 20000);
    document.addEventListener('visibilitychange', () => { if (document.hidden && App.W && App.mode !== 'menu') this.save(true); });
    window.addEventListener('keydown', e => { if (App.mode === 'flight' && Flight.key) Flight.key(e, true); if (App.mode === 'map' && MapV.key) MapV.key(e); });
    window.addEventListener('keyup', e => { if (App.mode === 'flight' && Flight.key) Flight.key(e, false); });
  },
  getU(kind, seed) { if (kind === 'solar') { if (!this.solarU) this.solarU = makeSolarSystem(); return this.solarU; } if (kind === 'trappist') return makeTrappist(); return makeRandomSystem(seed || 1); },
  // ---------- фон меню: ракета на площадке ----------
  bgNew() {
    const U = this.getU('solar'); const W = new World(U, { tier: 9 }); W.sandbox = true;
    const D = new Design('Фон'); D.add('merlin1d', { n: 9 }); D.add('tank_kerolox', { w: 3.7, h: 22 }); D.add('dec', { w: 3.7 }); D.add('merlin_vac', {}); D.add('tank_kerolox', { w: 3.7, h: 10 }); D.add('fairing', { w: 3.7, h: 8 });
    D.finish(); const v = W.launch(D); v.throttle = 0; W.active = v; this.bg = { W, v };
    Cam.z = 0.95;
  },
  bgFrame(g, dt) {
    const b = this.bg; b.W.ut += dt * 90; b.W.setPinned(b.v); b.v.sunLit = 1;
    FV.frame(g, b.W, b.v, App.t);
  },
  // ---------- переключение режимов ----------
  go(mode, arg) {
    this.closeSheets();
    if (this.cur) { const c = this.cur; this.cur = null; if (c.leave) c.leave(); }
    if (this.scr) { this.scr.remove(); this.scr = null; }
    App.mode = mode;
    if (mode === 'menu') this.menuScreen();
    else if (mode === 'hub') { this.hubScreen(); Cam.z = 0.95; }
    else if (mode === 'flight') { this.logBase(); this.cur = Flight; Flight.open(); }
    else if (mode === 'map') { this.logBase(); this.cur = MapV; MapV.open(); }
    else if (mode === 'build') { this.cur = Builder; Builder.open(App.W, arg); }
  },
  logBase() { const W = App.W; this._logId = W && W.logs.length ? W.logs[W.logs.length - 1].id : 0; },
  pumpLogs(W) { for (const l of W.logs) { if (l.id > (this._logId || 0)) { this._logId = l.id; this.toast(l.text, l.kind === 'bad' ? 'bad' : l.kind === 'ok' ? 'ok' : ''); } } },
  tick(dt) {
    const g = Gfx; if (!g.buf) return;
    switch (App.mode) {
      case 'menu': case 'hub': this.bgFrame(g, dt); break;
      case 'build': Builder.frame(g, dt); break;
      case 'flight': Flight.tick(g, dt); break;
      case 'map': MapV.tick(g, dt); break;
    }
    g.present();
    if (this.hubTick) this.hubTick(dt);
  },
  // ---------- вспомогательные виджеты ----------
  toast(text, kind) {
    if (!this.toastEl) return; for (const c of Array.from(this.toastEl.children)) if (c.textContent === text) c.remove();
    const el = h('div', { class: 'tst ' + (kind || '') }, text); this.toastEl.append(el);
    while (this.toastEl.children.length > 3) this.toastEl.firstChild.remove();
    setTimeout(() => el.remove(), 4300);
    if (kind === 'bad') { try { Sfx.bad(); } catch (e) { } } else if (kind === 'ok') { try { Sfx.tick(); } catch (e) { } }
  },
  sheet(title, body, o) {
    o = o || {}; const el = h('div', { class: 'pn solid sheet' + (o.full ? ' full' : ''), style: (o.height ? 'max-height:' + o.height + ';' : '') + 'z-index:' + (30 + this.sheets.length) });
    const tt = h('h3', { style: 'flex:1;font-size:15px' }, title);
    const sh = { el, body, close: () => { el.remove(); this.sheets = this.sheets.filter(x => x !== sh); if (o.onClose) o.onClose(); }, setTitle: t => { tt.textContent = t; } };
    const head = h('div', { class: 'row', style: 'padding-bottom:6px' }, tt, h('button', { class: 'btn sm', onclick: () => sh.close() }, '✕'));
    const sc = h('div', { class: 'scroll' }, body); if (body.classList && !body.classList.contains('col')) { }
    sc.style.padding = '2px 2px 6px'; el.append(head, sc); this.layer.append(el); this.sheets.push(sh); try { Sfx.click(); } catch (e) { }
    return sh;
  },
  closeSheets() { for (const s of this.sheets.slice()) s.close(); },
  confirm(text, yes, no) {
    const b = h('div', { class: 'col' }, h('div', { style: 'font-size:14px;line-height:1.35' }, text));
    const sh = this.sheet('Подтвердите', b, { height: '40%' });
    b.append(h('div', { class: 'row' }, h('button', { class: 'btn go sp', onclick: () => { sh.close(); yes && yes(); } }, 'Да'), h('button', { class: 'btn sp', onclick: () => { sh.close(); no && no(); } }, 'Отмена')));
    return sh;
  },
  onEvent(e) {
    try {
      if (e.t === 'contract') { Sfx.chime(); }
      else if (e.t === 'codex') { this.toast('Кодекс: новая запись — ' + (App.W.U.byId[e.body] ? App.W.U.byId[e.body].name : '') + ' · ' + (KIND_NAMES[e.kind] || e.kind), 'ok'); }
      else if (e.t === 'credit') { Sfx.ok(); }
      else if (e.t === 'soi') { this.toast('Сфера влияния: ' + (App.W.U.byId[e.to] ? App.W.U.byId[e.to].name : ''), 'info'); }
    } catch (x) { }
  },
  // ---------- сохранение ----------
  save(quiet) {
    const W = App.W; if (!W) return; try { const ok = Store.set('save', W.serialize()); if (!quiet) this.toast(ok ? 'Игра сохранена' : 'Не удалось сохранить (память переполнена?)', ok ? 'ok' : 'bad'); } catch (e) { if (!quiet) this.toast('Ошибка сохранения', 'bad'); }
  },
  loadSave() {
    const s = Store.get('save', null); if (!s) return false;
    try { App.W = worldFromSave(s); if (!App.W.contracts.length) Contracts.generate(App.W); return true; } catch (e) { console.error(e); this.toast('Сохранение повреждено', 'bad'); return false; }
  },
  startNew(kind, seed, sandbox) {
    const U = this.getU(kind, seed); const W = new World(U, { funds: sandbox ? 1e12 : 8e6, tier: sandbox ? 9 : 0, sandbox });
    Contracts.generate(W); App.W = W; Store.set('save', W.serialize()); W.log('Добро пожаловать в космическую программу!', 'info');
    this.go('hub');
  },
  // ---------- главное меню ----------
  menuScreen() {
    const has = !!Store.get('save', null);
    const body = h('div', { class: 'scr' },
      h('div', { style: 'position:absolute;left:0;right:0;top:calc(env(safe-area-inset-top) + 40px);text-align:center;pointer-events:none' },
        h('div', { style: 'font-family:PixB;font-size:38px;letter-spacing:3px;color:#fff;text-shadow:3px 3px 0 #1a2d70,-1px -1px 0 #000' }, 'КОСМОС'),
        h('div', { class: 'small', style: 'color:#bcd4ff;text-shadow:1px 1px 0 #000;margin-top:4px' }, 'исследуйте настоящие миры')),
      h('div', { class: 'col pn', style: 'position:absolute;left:14px;right:14px;bottom:calc(env(safe-area-inset-bottom) + 14px);gap:8px' },
        h('button', { class: 'btn go big' + (has ? '' : ' dis'), onclick: () => { if (this.loadSave()) this.go('hub'); } }, '▶  Продолжить'),
        h('button', { class: 'btn big', onclick: () => this.newGameSheet() }, '✦  Новая игра'),
        h('div', { class: 'row' }, h('button', { class: 'btn sp', onclick: () => this.helpSheet() }, '？ Как играть'), h('button', { class: 'btn sp', onclick: () => this.settings() }, '⚙ Настройки'))));
    this.scr = body; this.layer.append(body);
  },
  newGameSheet() {
    let kind = 'solar', mode = 'career', seed = (Math.random() * 99999) | 0;
    const body = h('div', { class: 'col' }); const sh = this.sheet('Новая игра', body, { height: '84%' });
    const draw = () => {
      body.innerHTML = '';
      const opt = (id, name, sub) => h('div', { class: 'card' + (kind === id ? ' sel' : ''), style: 'cursor:pointer', onclick: () => { kind = id; draw(); } }, h('b', null, name), h('div', { class: 'tiny mut' }, sub));
      body.append(h('h3', null, 'Вселенная'),
        opt('solar', 'Солнечная система', 'настоящая: 8 планет, Луна, спутники Юпитера и Сатурна, Плутон. Реальные массы и орбиты.'),
        opt('trappist', 'TRAPPIST-1', 'настоящая звезда с 7 землеподобными планетами (орбитальные периоды 1,5–19 суток).'),
        opt('random', 'Случайная система', 'выдуманный мир по числу-зерну: планеты, луны, газовые гиганты, свои звёзды.'));
      if (kind === 'random') body.append(h('div', { class: 'row' }, h('span', { class: 'small' }, 'Зерно:'), h('input', { type: 'number', value: seed, style: 'width:110px', oninput: e => { seed = +e.target.value | 0; } }), h('button', { class: 'btn sm', onclick: () => { seed = (Math.random() * 99999) | 0; draw(); } }, '🎲')));
      body.append(h('h3', null, 'Режим'),
        h('div', { class: 'card' + (mode === 'career' ? ' sel' : ''), style: 'cursor:pointer', onclick: () => { mode = 'career'; draw(); } }, h('b', null, 'Карьера'), h('div', { class: 'tiny mut' }, 'деньги ограничены, детали открываются за науку, есть контракты.')),
        h('div', { class: 'card' + (mode === 'sandbox' ? ' sel' : ''), style: 'cursor:pointer', onclick: () => { mode = 'sandbox'; draw(); } }, h('b', null, 'Песочница'), h('div', { class: 'tiny mut' }, 'все детали и бесконечные деньги — просто играть и изучать.')),
        h('button', { class: 'btn go big', onclick: () => { sh.close(); this.toast('Строим вселенную…', 'info'); setTimeout(() => this.startNew(kind, seed, mode === 'sandbox'), 40); } }, 'Начать'));
    };
    draw();
  },
  helpSheet() {
    const b = h('div', { class: 'col' }); for (const [t, x] of HELP) b.append(h('div', { class: 'card' }, h('b', { class: 'yl' }, t), h('div', { class: 'small', style: 'line-height:1.35;margin-top:2px' }, x)));
    this.sheet('Как играть', b, { height: '80%' });
  },
  settings() {
    const b = h('div', { class: 'col' });
    const tog = (label, get, set) => { const bt = h('button', { class: 'btn' + (get() ? ' on' : ''), onclick: () => { set(!get()); bt.classList.toggle('on', get()); } }, label); return bt; };
    b.append(tog('Звук', () => Sfx.on !== false, v => Sfx.setOn(v)), tog('Вибрация', () => !!Sfx.vib, v => Sfx.setVib(v)));
    const pv = h('b', { class: 'cy' }, String(Store.get('pix', 170)));
    b.append(h('div', { class: 'card col' }, h('div', { class: 'row' }, h('span', { class: 'small' }, 'Размер пикселя (чем меньше число, тем крупнее пиксели):'), pv),
      h('input', { type: 'range', min: 90, max: 300, step: 10, value: Store.get('pix', 170), oninput: e => { Store.set('pix', +e.target.value); pv.textContent = e.target.value; Gfx.resize(innerWidth, innerHeight, +e.target.value); } })));
    b.append(h('button', { class: 'btn warn', onclick: () => this.confirm('Стереть сохранение и все проекты?', () => { Store.del('save'); Store.del('designs'); Store.del('draft'); this.toast('Стёрто', 'ok'); this.go('menu'); }) }, '🗑 Стереть всё'));
    this.sheet('Настройки', b, { height: '60%' });
  },
  // ---------- центр управления ----------
  hubScreen() {
    const W = App.W; if (!W) { this.go('menu'); return; }
    const top = h('div', { class: 'top' }, h('div', { class: 'hud', id: 'hubhud', style: 'position:static;pointer-events:auto;display:flex;gap:10px;flex-wrap:wrap;font-size:13px' }));
    const live = W.vessels.filter(v => v.alive && !v.debris);
    const btn = (t, sub, f, cls) => h('button', { class: 'btn ' + (cls || ''), style: 'flex:1;min-width:46%;white-space:normal;padding:8px 6px;line-height:1.15', onclick: f }, t, sub ? h('div', { class: 'tiny mut' }, sub) : null);
    const bot = h('div', { class: 'pn col', style: 'position:absolute;left:8px;right:8px;bottom:calc(env(safe-area-inset-bottom) + 8px);gap:7px' },
      (W.active && W.active.alive ? h('button', { class: 'btn go big', onclick: () => this.go('flight') }, '▶ Вернуться к «' + W.active.name + '»') : null),
      h('div', { class: 'row w' }, btn('🛠 Ангар', 'собрать ракету или зонд', () => { const dr = Store.get('draft', null); this.go('build', dr ? desDesign(dr) : null); }, 'big'),
        btn('🚀 Аппараты', live.length + ' в космосе', () => this.vesselsSheet())),
      h('div', { class: 'row w' }, btn('📜 Контракты', null, () => this.contractsSheet()), btn('🔬 Наука', 'кодекс знаний', () => this.scienceSheet())),
      h('div', { class: 'row w' }, btn('⚙ Технологии', null, () => this.techSheet()), btn('🧪 Читы', null, () => this.cheatSheet())),
      h('div', { class: 'row' }, btn('💾 Сохранить', null, () => this.save()), btn('☰ Меню', null, () => { this.save(true); this.go('menu'); })));
    this.scr = h('div', { class: 'scr' }, top, bot); this.layer.append(this.scr);
    this.hubHud(); this._hubT = 0;
    this.hubTick = dt => { if (App.mode !== 'hub') return; this._hubT += dt; if (this._hubT > 1) { this._hubT = 0; this.hubHud(); } };
  },
  hubHud() {
    const W = App.W, el = $('#hubhud'); if (!el || !W) return; el.innerHTML = '';
    el.append(h('span', { class: 'yl' }, W.sandbox ? '∞ $' : fmtMoney(W.funds)), h('span', { class: 'cy' }, '🔬 ' + W.science.points.toFixed(1)), h('span', null, 'Техн. ' + (W.cheats.freeBuild || W.sandbox ? 'все' : W.tier)), h('span', { class: 'mut' }, fmtDate(W.ut)), h('span', { class: 'mut' }, W.U.name));
  },
  vesselsSheet() {
    const W = App.W; const b = h('div', { class: 'col' }); const sh = this.sheet('Аппараты', b, { height: '70%' });
    const list = W.vessels.filter(v => v.alive); if (!list.length) b.append(h('div', { class: 'mut' }, 'Космос пуст. Соберите и запустите аппарат в ангаре.'));
    for (const v of list.sort((a, c) => (a.debris ? 1 : 0) - (c.debris ? 1 : 0))) {
      const B = W.U.byId[v.body]; const alt = Math.hypot(v.x, v.y) - B.R;
      b.append(h('div', { class: 'card row' }, h('div', { class: 'sp small' }, h('b', { class: v.debris ? 'mut' : 'cy' }, v.name + (v.debris ? ' (обломок)' : '')), h('div', { class: 'tiny mut' }, B.name + ' · ' + (v.mode === 'landed' ? 'на поверхности' : fmtDist(alt)) + ' · ' + fmtMass(v.mp ? v.mp.m : 0))),
        h('button', { class: 'btn sm go', onclick: () => { sh.close(); W.switchTo(v); this.go('flight'); } }, 'Лететь'),
        h('button', { class: 'btn sm warn', onclick: () => this.confirm('Удалить «' + v.name + '» из космоса?', () => { v.alive = false; W.vessels = W.vessels.filter(x => x !== v); if (W.active === v) W.active = W.vessels.find(x => x.alive && hasCore(x)) || null; sh.close(); this.vesselsSheet(); this.go('hub'); }) }, '🗑')));
    }
  },
  contractsSheet() {
    const W = App.W; const b = h('div', { class: 'col' }); this.sheet('Контракты', b, { height: '78%' });
    const open = W.contracts.filter(c => c.state === 'open'), done = W.contracts.filter(c => c.state === 'done');
    b.append(h('div', { class: 'small mut' }, 'Выполнено: ' + done.length + ' из ' + W.contracts.length));
    for (const c of open.concat(done)) b.append(h('div', { class: 'card' + (c.state === 'done' ? '' : ' sel'), style: c.state === 'done' ? 'opacity:.55' : '' }, h('div', { class: 'row' }, h('b', { class: c.state === 'done' ? 'gr' : 'yl', style: 'flex:1' }, (c.state === 'done' ? '✔ ' : '') + c.title), h('span', { class: 'tiny cy' }, '+' + fmtMoney(c.reward.funds) + ' · 🔬' + c.reward.sci)), h('div', { class: 'tiny mut', style: 'margin-top:2px' }, c.desc)));
  },
  scienceSheet() {
    const W = App.W; const b = h('div', { class: 'col' }); this.sheet('Наука и кодекс', b, { height: '82%' });
    b.append(h('div', { class: 'card' }, h('div', { class: 'kv' }, h('span', null, 'Очки науки'), h('b', { class: 'cy' }, W.science.points.toFixed(1))), h('div', { class: 'kv' }, h('span', null, 'Записей в кодексе'), h('span', null, Object.keys(W.science.codex).length))));
    b.append(h('div', { class: 'small mut' }, 'Кодекс пополняется, когда впервые измеряете что-то на теле. Повторные измерения в тех же условиях приносят всё меньше.'));
    const keys = Object.keys(W.science.codex);
    if (!keys.length) b.append(h('div', { class: 'mut' }, 'Пока пусто. Запустите прибор и передайте данные.'));
    for (const k of keys.sort()) {
      const [bid, kind] = k.split('|'), B = W.U.byId[bid]; if (!B) continue;
      b.append(h('div', { class: 'card' }, h('div', { class: 'row' }, h('b', { class: 'cy' }, B.name), h('span', { class: 'tiny mut' }, KIND_NAMES[kind] || kind)), h('div', { class: 'small', style: 'line-height:1.3;margin-top:3px' }, codexText(bid, kind))));
    }
  },
  techSheet() {
    const W = App.W; const b = h('div', { class: 'col' }); const sh = this.sheet('Технологии', b, { height: '82%' });
    const draw = () => {
      b.innerHTML = '';
      b.append(h('div', { class: 'card' }, h('div', { class: 'kv' }, h('span', null, 'Очки науки'), h('b', { class: 'cy' }, W.science.points.toFixed(1))), h('div', { class: 'kv' }, h('span', null, 'Открыт уровень'), h('b', null, W.sandbox || W.cheats.freeBuild ? 'все' : W.tier))));
      for (let t = 1; t < TECH.length; t++) {
        const own = W.sandbox || W.cheats.freeBuild || W.tier >= t, next = W.tier === t - 1, can = next && W.science.points >= TECH[t].cost;
        const parts = PART_LIST.filter(d => d.tier === t).map(d => d.name);
        b.append(h('div', { class: 'card' + (own ? '' : '') }, h('div', { class: 'row' }, h('b', { class: own ? 'gr' : 'yl', style: 'flex:1' }, (own ? '✔ ' : '') + 'Ур. ' + t + ': ' + TECH[t].n), (own ? null : h('button', { class: 'btn sm ' + (can ? 'go' : 'dis'), onclick: () => { W.science.points -= TECH[t].cost; W.tier = t; W.log('Изучена технология: ' + TECH[t].n, 'ok'); try { Sfx.chime(); } catch (e) { } draw(); this.hubHud(); } }, '🔬 ' + TECH[t].cost))),
          h('div', { class: 'tiny mut', style: 'line-height:1.3;margin-top:3px' }, parts.join(' · ')), (!own && !next ? h('div', { class: 'tiny rd' }, 'сначала предыдущий уровень') : null)));
      }
    };
    draw();
  },
  // ---------- читы ----------
  cheatSheet() {
    const W = App.W; const b = h('div', { class: 'col' }); const sh = this.sheet('🧪 Читы', b, { height: '86%' });
    const draw = () => {
      b.innerHTML = '';
      for (const [k, name, desc] of CHEATS) {
        const on = !!W.cheats[k];
        b.append(h('div', { class: 'card row', style: 'cursor:pointer', onclick: () => { W.cheats[k] = !W.cheats[k]; if (k === 'freeBuild' || k === 'overlap' || k === 'infField') { if (App.mode === 'build') { Builder.touch(); } } draw(); this.hubHud && this.hubHud(); } },
          h('div', { class: 'sp' }, h('b', { class: on ? 'gr' : '' }, name), h('div', { class: 'tiny mut' }, desc)), h('b', { class: on ? 'gr' : 'mut' }, on ? 'ВКЛ' : 'выкл')));
      }
      b.append(h('div', { class: 'row w' },
        h('button', { class: 'btn sm', onclick: () => { W.funds += 1e9; this.toast('+$1 млрд', 'ok'); this.hubHud(); } }, '+$1 млрд'),
        h('button', { class: 'btn sm', onclick: () => { W.science.points += 1000; this.toast('+1000 науки', 'ok'); this.hubHud(); } }, '+1000 🔬'),
        h('button', { class: 'btn sm', onclick: () => { W.tier = 9; this.toast('Все технологии открыты', 'ok'); this.hubHud(); } }, 'Все технологии'),
        h('button', { class: 'btn sm', onclick: () => { const v = W.active; if (!v) return this.toast('Нет активного аппарата', 'bad'); for (const p of v.parts) { fillPart(p); p.temp = 288; p.hp = 1; } vesselRefresh(v); v.ec = v.ecCap; this.toast('Заправлен и починен', 'ok'); } }, 'Заправить + починить'),
        h('button', { class: 'btn sm', onclick: () => { W.vessels = W.vessels.filter(v => !v.debris || v === W.active); this.toast('Обломки убраны', 'ok'); } }, 'Убрать обломки'),
        h('button', { class: 'btn sm', onclick: () => { const v = W.active; if (!v) return this.toast('Нет активного аппарата', 'bad'); const B = W.U.byId[v.body]; v.vx = -B.rotW * v.y; v.vy = B.rotW * v.x; v.w = 0; this.toast('Скорость относительно тела обнулена', 'ok'); } }, 'Стоп (скорость 0)')));
      // телепорт
      const U = W.U; const sel = h('select', null, U.bodies.filter(x => x.kind !== 'star' || true).map(x => h('option', { value: x.id }, (x.parent ? '— ' : '') + x.name)));
      sel.value = W.active ? W.active.body : U.home;
      const alt = h('input', { type: 'number', value: 300, style: 'width:90px' }); const lon = h('input', { type: 'range', min: 0, max: 360, value: 0 });
      b.append(h('h3', null, 'Телепорт активного аппарата'), h('div', { class: 'card col' }, sel,
        h('div', { class: 'row' }, h('span', { class: 'small' }, 'Высота, км:'), alt, h('button', { class: 'btn sm go', onclick: () => { const v = W.active; if (!v) return this.toast('Нет активного аппарата — сначала запустите', 'bad'); const B = U.byId[sel.value]; const a = Math.max(B.atm ? B.atm.top / 1000 + 5 : 5, +alt.value || 100) * 1000; W.placeOnSurface; W.placeInOrbit(v, B.id, B.gas ? a : a); v.throttle = 0; v.mode = 'phys'; this.toast('Телепорт: орбита ' + B.name + ' ' + Math.round(a / 1000) + ' км', 'ok'); } }, 'На орбиту')),
        h('div', { class: 'row' }, h('span', { class: 'small' }, 'Долгота:'), lon), h('button', { class: 'btn sm go', onclick: () => { const v = W.active; if (!v) return this.toast('Нет активного аппарата', 'bad'); const B = U.byId[sel.value]; if (!B.landable) return this.toast('Здесь нет твёрдой поверхности', 'bad'); W.placeOnSurface(v, B.id, +lon.value * Math.PI / 180); this.toast('Телепорт: поверхность ' + B.name, 'ok'); } }, 'На поверхность')));
      b.append(h('div', { class: 'small mut' }, 'Варп: в полёте кнопками ⏩. Читы сохраняются вместе с игрой.'));
    };
    draw();
  },
  // ---------- запуск аппарата ----------
  launch(design, goal) {
    const W = App.W; let cost = 0; for (const p of design.parts) cost += partCost(p);
    const free = W.sandbox || W.cheats.freeBuild;
    if (!free) { if (cost > W.funds) { this.toast('Не хватает денег: нужно ' + fmtMoney(cost), 'bad'); return false; } W.funds -= cost; }
    const D = clonePartsDesign(design); D.name = design.name || 'Ракета'; D.edges = computeEdges(D.parts);
    const v = W.launch(D);
    if (goal) AutoBuild.startMission(W, v, goal, design);
    Store.set('draft', serDesign(design)); this.save(true);
    this.go('flight'); return true;
  }
};
