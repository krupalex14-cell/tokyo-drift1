'use strict';
// ============ Обучение: уроки с подсказками поверх игры ============
// Карточка с шагом висит сверху и не блокирует экран. Шаг засчитывается сам, когда игрок сделал нужное
// (поставил деталь, включил тягу, выпустил опоры, сел…). Для шагов без проверки есть кнопка «Дальше».
const TUT_SPAWN = {
  // посадочный аппарат в начале спуска (высота м, падение м/с, боковая м/с)
  drop(tplId, body, alt, vd, vh, o) {
    const W = App.W, t = TEMPLATES.find(x => x.id === tplId); const D = clonePartsDesign(t.make()); D.name = (o && o.name) || t.name; D.edges = computeEdges(D.parts);
    const v = W.launch(D); v.tut = true; W.placeDescent(v, body, alt, vd, vh);
    if (!v.engines.some(p => p.on)) { try { W.stage(v); } catch (e) { } }
    v.throttle = 0; for (const p of v.parts) { if (p.d.leg) p.st.deployed = !(o && o.legsIn); if (o && o.armed && (p.d.chute || p.d.src)) p.st.chute = 'arm'; } v.sas = (o && o.sas) || 'sretro'; v.rcs = v.rcsList.length > 0;
    W.switchTo(v); W.setWarp(0); return v;
  },
  orbit(tplId, body, altKm) {
    const W = App.W, t = TEMPLATES.find(x => x.id === tplId); const D = clonePartsDesign(t.make()); D.name = t.name; D.edges = computeEdges(D.parts);
    const v = W.launch(D); v.tut = true; W.placeInOrbit(v, body, altKm * 1000); if (!v.engines.some(p => p.on)) { try { W.stage(v); } catch (e) { } }
    v.throttle = 0; v.sas = 'prograde'; v.rcs = v.rcsList.length > 0; for (const p of v.parts) if (p.d.leg) p.st.deployed = true; W.switchTo(v); W.setWarp(0); return v;
  },
  pad(tplId) {
    const W = App.W, t = TEMPLATES.find(x => x.id === tplId); const D = clonePartsDesign(t.make()); D.name = t.name; D.edges = computeEdges(D.parts);
    const v = W.launch(D); v.tut = true; W.switchTo(v); return v;
  }
};
const tutAlt = (W, v) => Math.hypot(v.x, v.y) - W.U.byId[v.body].R;
const tutLand = (W, v) => { try { return landCalc(W, v); } catch (e) { return null; } };

const TUT_LESSONS = [
  {
    id: 'build', icon: 'wrench', title: 'Постройка ракеты', time: '≈ 4 мин', desc: 'Ангар: двигатель, бак, мозг, обтекатель, стабилизаторы. И «старт».',
    start() { UI.go('build', new Design('Учебная ракета')); },
    steps: [
      { t: 'Это ангар. Ракета строится снизу вверх. Внизу — вкладки с деталями. Откройте «Двигатели» и нажмите на двигатель Rutherford: он встанет на площадку.', hl: '.tabs .tab:nth-child(1)', ok: () => Builder.D.parts.some(p => p.d.eng && !p.d.eng.rcs) },
      { t: 'Над двигателем нужен бак с топливом. Вкладка «Баки» → выберите бак (керосин + кислород) и нажмите — он встанет сверху.', hl: '.tabs .tab:nth-child(2)', ok: () => Builder.D.parts.some(p => p.d.tank && p.d.tank.prop === 'kerolox') },
      { t: 'Ракете нужен «мозг»: вкладка «Управление» → бортовой компьютер. Без него ракета не слушается команд.', hl: '.tabs .tab:nth-child(4)', ok: () => Builder.D.parts.some(p => p.d.core) },
      { t: 'Сверху поставьте носовой конус (вкладка «Конструкция» → «Носовой конус»): он рассекает воздух.', hl: '.tabs .tab:nth-child(3)', ok: () => Builder.D.parts.some(p => p.defId === 'nose') },
      { t: 'Стабилизаторы держат ракету носом вперёд. Коснитесь бака на поле (он подсветится), затем «Конструкция» → «Стабилизатор». Кнопка «Симметрия» включена: деталь встанет парой — слева и справа.', hl: '.tabs .tab:nth-child(3)', ok: () => Builder.D.parts.filter(p => p.defId === 'fin').length >= 2 },
      { t: 'Коснитесь любой детали на поле: ниже появятся кнопки. «что это» объяснит, зачем деталь; есть размер, поворот, отражение и удаление.', ok: () => !!Builder.sel },
      { t: 'Кнопка «ступени» справа: что сработает на каждом нажатии «СТУП» — двигатели и разделители. Первая ступень — при старте. ▲ ▼ меняют порядок. Откройте её.', hl: '.stagesb', ok: () => !!Builder.stSheet },
      { t: 'Полоса с цифрами сверху — масса, тяга/вес и запас скорости. На старте тяга/вес должна быть больше 1,3. Нажмите на неё, чтобы увидеть подробный разбор.', next: true },
      { t: 'Готово! Зелёная кнопка «старт» справа отправит ракету на площадку. Нажмите её.', hl: '.btn.go.big', ok: () => App.mode === 'flight' }
    ]
  },
  {
    id: 'flight', icon: 'rocket', title: 'Первый полёт', time: '≈ 3 мин', desc: 'Ступень, тяга, поворот и SAS на суборбитальной ракете.',
    start() { const v = TUT_SPAWN.pad('sound'); v.sas = 'off'; Tutor.v = v; UI.go('flight'); },
    steps: [
      { t: 'Ракета на площадке. Нажмите «СТУП» справа — зажжётся двигатель. На кнопке нарисовано, что сработает следующим.', hl: '.stbtn', ok: v => v.stageIdx >= 1 },
      { t: 'Тяга: потяните ползунок слева вверх до упора (или кнопка MAX).', hl: '.thr', ok: v => v.throttle > .6 },
      { t: 'Пошла! Высота — в левом верхнем углу. Стабилизаторы держат ракету носом вперёд сами. Дождитесь высоты 1 км.', ok: (v, W) => tutAlt(W, v) > 1000 },
      { t: 'В плотном воздухе ракету не развернуть — стабилизаторы держат её, как флюгер. Дождитесь высоты 85 км: там воздуха почти нет, ракета станет послушной.', ok: (v, W) => tutAlt(W, v) > 85000 },
      { t: 'Воздуха нет, обтекатель больше не нужен. Нажмите «СТУП» ещё раз: он отстрелится и откроет антенну и приборы.', hl: '.stbtn', ok: v => !v.parts.some(p => p.d.fair) },
      { t: 'Теперь воздуха нет — ракета слушается руля. Нажмите и держите ◀ или ▶ в нижних углах: ракета наклонится. Наклоните градусов на 30.', hl: '.rot', ok: v => { if (Tutor.base == null) { Tutor.base = v.a; return false; } return Math.abs(wrapPI(v.a - Tutor.base)) > .5; } },
      { t: 'SAS — это автоматический «руль». Нажмите кнопку SAS справа и выберите «От тела ↑»: ракета выровняется вертикально.', hl: '.sasbtn', ok: v => v.sas === 'up' },
      { t: 'Дальше ракета долетит до верхней точки сама (≈ 150 км) и упадёт обратно. Ускорьте время кнопкой ⏩ внизу, посмотрите — и нажмите «Дальше».', hl: '.warp', next: true },
      { t: 'Отлично! Это настоящий суборбитальный полёт. Тормозить в космосе нечем — поэтому ракеты падают. Дальше — орбита и посадка.', next: true }
    ]
  },
  {
    id: 'orbit', icon: 'globe', title: 'Выход на орбиту', time: '≈ 5 мин', desc: 'Автопилот сам взлетит и выведет Electron на круговую орбиту.',
    start() { const v = TUT_SPAWN.pad('electron'); Tutor.v = v; UI.go('flight'); },
    steps: [
      { t: 'Ракета Electron на старте. Откройте меню инструментов: нажмите на полупрозрачную стрелку у левого края экрана.', hl: '.dh', ok: () => Flight.E && Flight.E.drawer && Flight.E.drawer.classList.contains('open') },
      { t: 'Нажмите значок робота «Автопилот».', hl: '.dbtn:nth-child(1)', ok: () => !!Flight.panel },
      { t: 'В карточке «Выход на круговую орбиту» нажмите зелёную кнопку (высота 150 км подходит).', ok: v => !!(v.ap && v.ap.phase && v.ap.phase !== 'none') },
      { t: 'Автопилот сам взлетит, наклонит ракету и сбросит ступени. Ускоряйте время кнопкой ⏩ внизу. Ждём перицентр выше атмосферы.', hl: '.warp', ok: (v, W) => { const B = W.U.byId[v.body]; const el = orbitInfo(W, v); return el.bound && el.rp - B.R > (B.atm ? B.atm.top : 0) + 5000; } },
      { t: 'Вы на орбите! Нажмите значок земного шара справа сверху — карта покажет орбиту и позволит планировать перелёты.', hl: '.trbtns .btn:nth-child(1)', ok: () => App.mode === 'map' },
      { t: 'Так выглядят орбиты. Вернуться к ракете можно кнопкой в карте. Орбита — это «вечное падение» мимо планеты: пока скорость ≈ 7,8 км/с, вы не упадёте.', next: true }
    ]
  },
  {
    id: 'moon', icon: 'moon', title: 'Посадка на Луну', time: '≈ 6 мин', desc: 'Вручную: гасим боковую скорость, выпускаем опоры, касаемся мягко. Воздуха нет — только двигатель.',
    start() { const v = TUT_SPAWN.drop('lander', 'moon', 1800, 20, 55, { legsIn: true, name: 'Учебный лунный зонд' }); Tutor.v = v; UI.go('flight'); },
    steps: [
      { t: 'Вы над Луной на высоте 1,8 км, летите вбок 55 м/с. Воздуха нет: тормозить можно только двигателем. Цифры «ПОСАДКА» сверху подсказывают, что делать.', next: true },
      { t: 'Гасим боковую скорость. Ракета уже смотрит против движения (SAS). Подвиньте ползунок тяги вверх — тормозим! Следите: «Боковая» должна упасть до 2–3 м/с.', hl: '.thr', ok: (v, W) => { const c = tutLand(W, v); return !!c && c.vh < 4; } },
      { t: 'Теперь выпустите опоры: стрелка слева → «Детали» → «Выпустить» (опоры — это «ноги» аппарата).', hl: '.dh', ok: v => v.parts.filter(p => p.d.leg).every(p => p.st.deployed) },
      { t: 'Выровняйтесь: кнопка SAS справа → «От тела ↑» — аппарат встанет вертикально, двигатель смотрит вниз.', ok: v => v.sas === 'up' },
      { t: 'Снижайтесь. Тяга по чуть-чуть: у земли падение должно быть меньше 3 м/с (цифра зелёная). Тяга/вес на Луне больше 2 — двигатель мощнее тяготения, поэтому «притормаживайте» ползунком.', ok: v => v.mode === 'landed' },
      { t: 'Мягкая посадка! Все детали целы. Если не вышло — не беда: меню слева → «Посадка» → «Автопосадка» покажет, как это делает автопилот.', next: true }
    ]
  },
  {
    id: 'autoland', icon: 'robot', title: 'Автопосадка с орбиты', time: '≈ 5 мин', desc: 'Зонд на лунной орбите. Автопилот сам сходит с орбиты и садится.',
    start() { const v = TUT_SPAWN.orbit('lander', 'moon', 100); Tutor.v = v; UI.go('flight'); },
    steps: [
      { t: 'Лунный зонд на орбите 100 км. Откройте меню слева (стрелка у края) → «Посадка».', hl: '.dh', ok: () => !!Flight.panel },
      { t: 'Проверьте список: опоры, тяга/вес, запас скорости. Затем нажмите «Автопосадка».', ok: v => !!(v.ap && v.ap.phase === 'land' && !v.ap.done) },
      { t: 'Автопилот включил торможение против движения, потом снижение и посадку. Ускоряйте время ⏩ — оно само замедлится у поверхности. Ждём касания.', ok: v => v.mode === 'landed', hl: '.warp' },
      { t: 'Посадка выполнена. С орбиты на Луну нужно потерять ≈ 1,7 км/с скорости — поэтому тормозили долго и всё топливо ушло в торможение.', next: true }
    ]
  },
  {
    id: 'mars', icon: 'sparkle', title: 'Посадка на Марс', time: '≈ 6 мин', desc: 'Воздух есть, но тонкий: парашют помогает слабо — основную работу делает двигатель.',
    start() { const v = TUT_SPAWN.drop('lander_mars', 'mars', 6000, 110, 40, { legsIn: true, name: 'Учебный марсианский модуль' }); Tutor.v = v; UI.go('flight'); },
    steps: [
      { t: 'Вы над Марсом, высота 6 км, падение 110 м/с. Воздух есть (давление ≈ 0,6% земного). Взведите парашют: стрелка слева → «Детали» → «Взвести».', hl: '.dh', ok: v => v.parts.filter(p => p.d.chute).some(p => p.st.chute) },
      { t: 'Выпустите опоры там же («Детали» → «Выпустить»).', ok: v => v.parts.filter(p => p.d.leg).every(p => p.st.deployed) },
      { t: 'Парашют на Марсе гасит скорость лишь до ≈ 60–80 м/с — дальше нужен двигатель. Гасите падение тягой: цифра «Падение» должна быть зелёной.', ok: (v, W) => { const c = tutLand(W, v); return !!c && c.hg < 300; } },
      { t: 'Последние 300 м: держите падение ≈ 2–3 м/с, ползунок тяги по чуть-чуть. Если страшно — меню слева → «Посадка» → «Автопосадка».', ok: v => v.mode === 'landed' },
      { t: 'Сели! На Марсе парашют + двигатель — так сели «Викинги» и «Феникс». А теперь сравните с Землёй, где воздуха много.', next: true }
    ]
  },
  {
    id: 'chute', icon: 'chute', title: 'Парашют на Земле', time: '≈ 3 мин', desc: 'Плотная атмосфера: щит, парашют — и мягко, без двигателя.',
    start() { const v = TUT_SPAWN.drop('capsule', 'earth', 3500, 120, 40, { name: 'Учебная капсула', sas: 'sretro', armed: true }); Tutor.v = v; UI.go('flight'); },
    steps: [
      { t: 'Капсула падает щитом вперёд — так воздух тормозит и защищает. Парашюты раскроются сами, когда воздух станет плотным. Ускоряйте время ⏩.', hl: '.warp', next: true },
      { t: 'Смотрите на «Падение»: парашют сбросит скорость до 4–6 м/с. Дождитесь касания.', ok: v => v.mode === 'landed' },
      { t: 'Земля: воздуха много, хватает одного парашюта. Луна: воздуха нет — только двигатель. Марс: воздуха мало — нужно и то, и другое.', next: true }
    ]
  },
  {
    id: 'rover', icon: 'wheel', title: 'Луноход', time: '≈ 6 мин', desc: 'Соберите вездеход, поставьте на Луну, проедьте, раскройте панели и сделайте снимок.',
    start() { UI.go('build', new Design('Мой луноход')); Tutor.base = null; },
    steps: [
      { t: 'Вездеход — это корпус с «мозгом», колёса и источник энергии. Откройте вкладку «Вездеход» (после «Посадка») и нажмите «Корпус вездехода»: внутри компьютер и аккумулятор.', hl: '.tabs .tab:nth-child(9)', ok: () => Builder.D.parts.some(p => p.defId === 'rover_deck') },
      { t: 'Колёса крепятся по бокам. Корпус выбран (рамка): нажмите «Колесо LRV». Кнопка «Симметрия» поставит пару — слева и справа.', hl: '.tabs .tab:nth-child(9)', ok: () => Builder.D.parts.filter(p => p.d.wheel).length >= 2 },
      { t: 'Нужны четыре колеса. Коснитесь крайнего колеса на поле и снова нажмите «Колесо LRV»: новая пара встанет рядом.', ok: () => Builder.D.parts.filter(p => p.d.wheel).length >= 4 },
      { t: 'Мачта поднимает камеру над корпусом. Коснитесь корпуса (не колеса) и нажмите «Мачта вездехода» — она встанет сверху.', hl: '.tabs .tab:nth-child(9)', ok: () => Builder.D.parts.some(p => p.defId === 'rover_mast') },
      { t: 'Теперь камера: коснитесь мачты, откройте «Наука» и нажмите «Камера Mastcam». Она встанет на мачту.', hl: '.tabs .tab:nth-child(7)', ok: () => Builder.D.parts.some(p => p.defId === 'i_mastcam') },
      { t: 'Без антенны снимки не уйдут на Землю. Коснитесь камеры, вкладка «Связь» → «Антенна среднего усиления».', hl: '.tabs .tab:nth-child(6)', ok: () => Builder.D.parts.some(p => p.d.ant) },
      { t: 'Энергия: вездеход живёт от солнца. Коснитесь мачты, вкладка «Энергия» → «Раскладная панель». Симметрия поставит пару по бокам мачты.', hl: '.tabs .tab:nth-child(5)', ok: () => Builder.D.parts.some(p => p.d.solar) },
      { t: 'Готово! Нажмите «старт». Взлететь вездеход не может, поэтому игра спросит, куда его привезти. Выберите «Луна».', hl: '.btn.go.big', ok: (v, W) => App.mode === 'flight' && W.active && W.active.body === 'moon' && W.active.parts.some(p => p.d.wheel) },
      { t: 'Вы на Луне. Нажмите и держите «ехать» в правом нижнем углу: вездеход поедет вправо. Отпустите — он встанет сам, даже на склоне. Проедьте метров 30.', ok: (v, W) => { const a = W.active; if (!a) return false; if (Tutor.base == null) { Tutor.base = [a.x, a.y]; return false; } return Math.hypot(a.x - Tutor.base[0], a.y - Tutor.base[1]) > 30; } },
      { t: 'Любую деталь можно коснуться пальцем: откроется карточка с состоянием и кнопками. Нажмите на солнечную панель (тонкая полоска над корпусом): её можно сложить и раскрыть. Закройте карточку крестиком.', ok: () => !!(Flight.pcard && Flight.pcardP && Flight.pcardP.d.solar) },
      { t: 'Теперь снимок. Коснитесь камеры на мачте (маленькая деталь над корпусом, можно приблизить щипком) и нажмите «Запустить». Результат уйдёт на Землю, пока есть связь.', ok: (v, W) => { const a = W.active; return !!a && (a.science.length > 0 || a.parts.some(p => p.d.inst && p.st.run != null && p.st.run >= 0)); } },
      { t: 'Отлично! Вы построили и запустили вездеход. Камеру двигайте пальцем, двойной тап возвращает её к вездеходу. Дальше можно проехать к другому ландшафту и повторить снимок: новое место — новые очки науки.', next: true }
    ]
  }
];

const Tutor = {
  cur: null, si: 0, card: null, v: null, hl: null, _t: 0, flash: 0, failed: false,
  done() { return Store.get('tut', {}) || {}; },
  open() {
    const W = App.W; const b = h('div', { class: 'col' }); const sh = UI.sheet('🎓 Обучение', b, { height: '86%' }); const dn = this.done();
    b.append(h('div', { class: 'small mut', style: 'line-height:1.35' }, 'Короткие уроки: подсказки висят сверху и не мешают играть, шаги засчитываются сами. Выход — кнопка ✕ на карточке.'));
    for (const L of TUT_LESSONS) {
      b.append(h('div', { class: 'card col', style: 'gap:3px' }, h('div', { class: 'row' }, h('i', { class: 'px', 'data-n': L.icon, style: 'width:26px;height:26px' }), h('b', { class: 'yl sp' }, L.title), dn[L.id] ? h('span', { class: 'gr small' }, '✔') : h('span', { class: 'tiny mut' }, L.time)),
        h('div', { class: 'small', style: 'line-height:1.35' }, L.desc), h('button', { class: 'btn sm go', onclick: () => { sh.close(); this.begin(L.id); } }, dn[L.id] ? 'Пройти ещё раз' : 'Начать')));
    }
  },
  begin(id) {
    if (!App.W) return; this.stop(); const L = TUT_LESSONS.find(x => x.id === id); if (!L) return;
    this.cur = L; this.si = 0; this.v = null; this.failed = false; this.hold = 0;
    try { L.start(); } catch (e) { console.error(e); UI.toast('Не удалось запустить урок: ' + e.message, 'bad'); this.stop(); return; }
    this.show();
  },
  stop() {
    this.cur = null; if (this.card) { this.card.remove(); this.card = null; } this.unhl(); document.body.classList.remove('tut', 'tutfl'); document.body.style.removeProperty('--tuth');
  },
  restart() { const id = this.cur && this.cur.id; this.stop(); if (id) this.begin(id); },
  unhl() { if (this.hl) { this.hl.classList.remove('tut-hl'); this.hl = null; } },
  show() {
    const L = this.cur; if (!L) return; this.unhl(); this.base = null;
    if (this.card) this.card.remove();
    const S = L.steps[this.si]; const last = this.si >= L.steps.length;
    const head = h('div', { class: 'row' }, h('i', { class: 'px', 'data-n': L.icon, style: 'width:20px;height:20px' }), h('b', { class: 'yl sp', style: 'font-size:12px' }, L.title + (this.mini ? '  ▴' : '  ▾')), h('span', { class: 'tiny mut' }, Math.min(this.si + 1, L.steps.length) + '/' + L.steps.length), h('button', { class: 'btn sm', style: 'min-height:26px;min-width:30px;padding:2px 6px', onclick: () => this.stop() }, '✕'));
    const btns = h('div', { class: 'row' });
    if (this.failed) { btns.append(h('button', { class: 'btn sm go sp', onclick: () => this.restart() }, '↻ Повторить'), h('button', { class: 'btn sm sp', onclick: () => this.stop() }, 'Выйти')); }
    else if (S) {
      if (S.next) btns.append(h('button', { class: 'btn sm go sp', onclick: () => this.advance() }, this.si >= L.steps.length - 1 ? 'Завершить ✔' : 'Дальше ›'));
      else btns.append(h('button', { class: 'btn sm sp', style: 'opacity:.7', onclick: () => this.advance() }, 'Пропустить шаг'));
    }
    const text = this.failed ? 'Аппарат потерян — в космосе это бывает! Попробуйте ещё раз: смотрите на цифры «Падение» и «Боковая».' : (S ? S.t : '');
    this.card = h('div', { class: 'tut pn' + (this.mini ? ' min' : '') }, head, h('div', { class: 'tx' }, text), btns);
    head.style.cursor = 'pointer'; head.title = 'Свернуть / развернуть'; head.addEventListener('click', e => { if (e.target.closest('button')) return; this.mini = !this.mini; this.card.classList.toggle('min', this.mini); const tt = head.querySelector('b'); if (tt) tt.textContent = L.title + (this.mini ? '  ▴' : '  ▾'); this.layout(); });
    UI.layer.append(this.card); document.body.classList.add('tut');
    this.layout();
    if (S && S.hl && !this.failed) setTimeout(() => { const el = document.querySelector('#ui ' + S.hl); if (el) { el.classList.add('tut-hl'); this.hl = el; } }, 60);
  },
  advance() {
    const L = this.cur; if (!L) return; this.si++; this.mini = false;   // новый шаг — новый текст: показываем развёрнутым
    try { Sfx.ok && Sfx.ok(); } catch (e) { }
    if (this.si >= L.steps.length) {
      const dn = this.done(); dn[L.id] = 1; Store.set('tut', dn); UI.toast('Урок «' + L.title + '» пройден ✔', 'ok');
      const k = TUT_LESSONS.indexOf(L), nx = TUT_LESSONS[k + 1]; this.stop(); if (nx) setTimeout(() => this.offer(nx), 400); return;
    }
    this.show();
  },
  offer(nx) {
    const b = h('div', { class: 'col' }); const sh = UI.sheet('Дальше', b, { height: '34%' });
    b.append(h('div', { class: 'card col' }, h('b', { class: 'yl' }, nx.title), h('div', { class: 'small' }, nx.desc)), h('div', { class: 'row' }, h('button', { class: 'btn go sp', onclick: () => { sh.close(); this.begin(nx.id); } }, 'Следующий урок'), h('button', { class: 'btn sp', onclick: () => sh.close() }, 'Позже')));
  },
  layout() {
    if (!this.card) return; const m = App.mode, b = m === 'build';
    this.card.style.top = b ? 'calc(env(safe-area-inset-top) + 98px)' : 'calc(env(safe-area-inset-top) + 6px)'; this.card.style.right = b ? '88px' : '52px';
    document.body.classList.toggle('tutfl', m === 'flight'); this.lastMode = m;
    document.body.style.setProperty('--tuth', (this.card.offsetHeight + 12) + 'px');
  },
  tick(dt) {
    const L = this.cur; if (!L) return; if (this.lastMode !== App.mode) this.layout(); this._t += dt; if (this._t < .25) return; this._t = 0;
    const W = App.W; if (!W) return; const S = L.steps[this.si]; if (!S) return;
    // потеря аппарата в полётном уроке
    if (this.v && App.mode === 'flight' && !this.v.alive && !this.failed) { this.failed = true; this.show(); return; }
    if (this.failed) return;
    const v = this.v && this.v.alive ? this.v : null; let ok = false;
    try { if (S.ok) ok = !!S.ok(v, W); } catch (e) { ok = false; }
    if (ok) { this.hold = (this.hold || 0) + 1; if (this.hold >= 2) { this.hold = 0; this.advance(); } } else this.hold = 0;
    if (this.card && this.card.isConnected === false) { UI.layer.append(this.card); }
  }
};
