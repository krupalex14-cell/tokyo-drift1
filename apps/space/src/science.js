'use strict';
// ============ Системы аппарата: энергия, связь; наука: приборы, образцы, кодекс ============
const KIND_BASE = { cam: 8, spec: 12, seis: 18, wx: 6, mag: 5, rad: 6, radar: 14, atm: 10, lidar: 12, drill: 30, scoop: 20 };
const SIT_MULT = { landed: 1, splashed: 0.9, flyingLow: 0.7, flyingHigh: 0.8, spaceLow: 1, spaceHigh: 0.8 };
const BODY_MULT = { sun: 3, mercury: 2, venus: 2.2, earth: 0.25, moon: 1, mars: 1.8, phobos: 1.6, deimos: 1.6, ceres: 2, jupiter: 3.5, io: 3, europa: 3.5, ganymede: 3, callisto: 3, saturn: 4, titan: 4.5, enceladus: 4.5, uranus: 5, neptune: 5.5, triton: 5.5, pluto: 6, charon: 6 };
const LIGHT_FRAC = { earth: 0.85, mars: 0.6, venus: 0.03, titan: 0.012 };
const COMM_C = 6.28e22;
function bodyMult(B) { if (BODY_MULT[B.id] != null) return BODY_MULT[B.id]; if (B.kind === 'star') return 3; return 2 + (B.idx || 1) * 0.15; }

const Systems = {
  sunInfo(W, v) {
    const U = W.U, B = U.byId[v.body], Bs = W.eph.state(B, W.ut);
    const ax = Bs.x + v.x, ay = Bs.y + v.y; const d = Math.max(1e7, Math.hypot(ax, ay));
    let sx, sy; // направление на звезду из тела
    if (B === U.root) { sx = -v.x; sy = -v.y; } else { sx = -Bs.x; sy = -Bs.y; }
    const sl = Math.hypot(sx, sy) || 1; sx /= sl; sy /= sl;
    return { S: U.irradiance(d), d, sx, sy };
  },
  lit(W, v, si) { // доля освещённости 0..1
    const B = W.U.byId[v.body]; if (B.kind === 'star') return 1;
    const r = Math.hypot(v.x, v.y), rdot = (v.x * si.sx + v.y * si.sy), perp = Math.abs(v.x * si.sy - v.y * si.sx);
    const alt = r - B.R;
    let f = 1;
    if (rdot < 0) { const pen = smooth(B.R * 0.98, B.R * 1.0 + (B.atm ? Math.min(B.atm.top * 0.3, 20000) : 0), perp); f = pen; }
    if (alt < 200 && v.mode !== 'phys' || (alt < 200 && v.contact > 0) || alt < 5) { const sinE = rdot / r; f = smooth(-0.03, 0.12, sinE); }
    return f;
  },
  atmLight(W, v) {
    const B = W.U.byId[v.body]; if (!B.atm) return 1; const alt = Math.hypot(v.x, v.y) - B.R;
    if (alt > B.atm.top * 0.6) return 1;
    const lf = LIGHT_FRAC[B.id] != null ? LIGHT_FRAC[B.id] : (B.atm.dust ? 1 - B.atm.dust : 0.8);
    const k = smooth(B.atm.top * 0.6, 0, alt); return 1 - (1 - lf) * k;
  },
  power(W, v) {
    const si = this.sunInfo(W, v); const lit = this.lit(W, v, si) * this.atmLight(W, v);
    const B = W.U.byId[v.body]; const r = Math.hypot(v.x, v.y); const sinE = (v.x * si.sx + v.y * si.sy) / r;
    const surf = (r - B.R) < 200 && v.mode !== 'rails';
    let gen = 0, gens = 0;
    for (const p of v.parts) {
      if (p.dead || p.shielded) continue; const d = p.d;
      if (d.rtg) { gen += d.rtg; continue; }
      if (d.solar) {
        if (d.solar.deploy && !p.st.deployed) continue;
        let fac = d.solar.track ? 1 : (surf ? clamp(sinE, 0, 1) * 0.8 : 0.5);
        if (surf && d.solar.track) fac = 0.92;
        const g = d.solar.area * d.solar.eff * si.S * lit * fac;
        gen += g;
      }
    }
    v.sunLit = lit; v.solarS = si.S;
    return gen;
  },
  coreUse(v) { let u = 0; for (const p of v.parts) { if (p.d.core) u += p.d.core.ec; } return u; },
  tick(W, v, dt) {
    if (v.dirty) vesselRefresh(v);
    const ch = W.cheats;
    const gen = this.power(W, v);
    let use = v.mode === 'phys' && v._ecT === W.ut - dt ? v.ecUse : (v.mode === 'phys' ? (v.ecUse || 0) : this.coreUse(v));
    if (v.mode !== 'phys') use = this.coreUse(v);
    // приборы и передача
    let instUse = 0;
    for (const p of v.parts) { if (p.st.run != null && p.st.run >= 0) instUse += p.d.inst ? p.d.inst.ec : 0; }
    const link = Comm.link(W, v);
    v.link = link; let txUse = 0;
    const hasData = v.science.some(it => it.type === 'data' && it.left > 0);
    if (hasData && link.ok && v.autoTx !== false && (v.ec > 0 || ch.infEC) && hasCore(v)) { txUse = link.ant.d.ant.ec; v.txing = true; Science.transmit(W, v, dt, link); } else v.txing = false;
    v.gen = gen; v.use = use + instUse + txUse;
    if (ch.infEC) v.ec = v.ecCap || 1e9; else v.ec = clamp(v.ec + (gen - v.use) * dt / 3600, 0, v.ecCap);
    // выполнение приборов
    for (const p of v.parts) { if (p.st.run != null && p.st.run >= 0) { if (v.ec > 0 || ch.infEC) { p.st.run += dt * (ch.instantScience ? 1e6 : 1); if (p.st.run >= p.d.inst.time) { p.st.run = -1; Science.finish(W, v, p); } } } }
    v._ecT = W.ut;
  }
};

const Comm = {
  link(W, v) {
    const none = { ok: false, rate: 0, d: 0, why: 'Нет антенны' };
    let best = null, bestR = -1;
    const U = W.U; const B = U.byId[v.body], home = U.byId[U.home];
    const vs = W.eph.state(B, W.ut), hs = W.eph.state(home, W.ut);
    const vx = vs.x + v.x, vy = vs.y + v.y; const dx = hs.x - vx, dy = hs.y - vy; const d = Math.hypot(dx, dy);
    for (const p of v.parts) {
      if (!p.d.ant || p.dead || p.shielded) continue; if (p.d.ant.deploy && !p.st.deployed) continue;
      const a = p.d.ant; const rate = Math.min(a.maxRate, COMM_C * a.P * a.G / Math.max(1e6, d * d));
      if (rate > bestR) { bestR = rate; best = p; }
    }
    if (!best) return none;
    if (!hasCore(v)) return { ok: false, rate: 0, d, why: 'Нет блока управления' };
    // прямая видимость
    let los = true, by = '';
    for (const b of U.bodies) {
      if (b === home) continue; const bs = W.eph.state(b, W.ut);
      // расстояние от центра тела до отрезка (v → home)
      const t = clamp(((bs.x - vx) * dx + (bs.y - vy) * dy) / (d * d), 0, 1); const px = vx + dx * t - bs.x, py = vy + dy * t - bs.y;
      const R = b.R * (b.kind === 'star' ? 1.0 : 1.0);
      if (Math.hypot(px, py) < R && !(b === B && Math.hypot(v.x, v.y) > b.R * 1.0 + 5 && (v.x * dx + v.y * dy) > 0)) { if (b === B) { const r = Math.hypot(v.x, v.y); const toward = (v.x * dx + v.y * dy) / (r * d); if (toward < -0.02 || r < b.R * 1.02 && toward < 0.0) { los = false; by = b.name; break; } } else { los = false; by = b.name; break; } }
    }
    if (!los) return { ok: false, rate: 0, d, why: 'Закрыто телом: ' + by, ant: best };
    return { ok: bestR > 1, rate: bestR, d, ant: best, why: '' };
  }
};

const Science = {
  situation(W, v) {
    const B = W.U.byId[v.body]; const alt = Math.hypot(v.x, v.y) - B.R;
    if (v.mode === 'landed' || (v.contact > 0 && v.sp < 3)) { const th = Math.atan2(v.y, v.x) - bodyRot(B, W.ut); return waterAt(W, B, th) ? 'splashed' : 'landed'; }
    if (B.gas) { if (alt < B.atm.top * 0.35) return 'flyingLow'; if (alt < B.atm.top) return 'flyingHigh'; return alt < B.spaceLow ? 'spaceLow' : 'spaceHigh'; }
    if (B.atm) { if (alt < B.atm.top * 0.35) return 'flyingLow'; if (alt < B.atm.top) return 'flyingHigh'; }
    return alt < B.spaceLow ? 'spaceLow' : 'spaceHigh';
  },
  biome(W, v) {
    const B = W.U.byId[v.body]; if (!B.T || !B.pal) return { id: 0, name: '—' };
    const th = Math.atan2(v.y, v.x) - bodyRot(B, W.ut); return biomeAt(B, th);
  },
  key(body, sit, biome, kind) { const useBiome = (sit === 'landed' || sit === 'splashed' || sit === 'flyingLow' || sit === 'spaceLow'); return body + '|' + sit + '|' + (useBiome ? biome : '-') + '|' + kind; },
  canRun(W, v, p) {
    const d = p.d.inst; if (!d) return 'Не прибор';
    if (p.st.run != null && p.st.run >= 0) return 'Уже выполняется';
    if (!hasCore(v)) return 'Нет блока управления';
    if (v.ec <= 0 && !W.cheats.infEC) return 'Нет энергии';
    const sit = this.situation(W, v), B = W.U.byId[v.body];
    if (!d.sits.includes(sit)) return 'Нужно: ' + d.sits.map(s => SIT_NAMES[s]).join(' / ');
    if (d.kind === 'atm' && !B.atm) return 'Нет атмосферы';
    if (d.kind === 'wx' && !B.atm && sit !== 'landed') return 'Нет атмосферы';
    if (p.shielded) return 'Закрыт обтекателем';
    if ((d.kind === 'drill' || d.kind === 'scoop') && !v.parts.some(q => q.d.samples)) return 'Нужен контейнер образцов';
    if ((d.kind === 'drill' || d.kind === 'scoop')) { const cap = v.parts.reduce((s, q) => s + (q.d.samples || 0), 0); if (v.science.filter(it => it.type === 'sample').length >= cap) return 'Контейнер полон'; }
    if (B.kind === 'star' && sit === 'landed') return 'На Солнце нельзя';
    return null;
  },
  value(W, v, p) {
    const d = p.d.inst; const sit = this.situation(W, v), B = W.U.byId[v.body]; const bio = this.biome(W, v);
    const key = this.key(B.id, sit, bio.name, d.kind); const n = W.science.done[key] || 0;
    const base = KIND_BASE[d.kind] * (SIT_MULT[sit] || 1) * bodyMult(B);
    let mult = (d.kind === 'cam' && p.d.id === 'i_hirise' && sit === 'spaceLow') ? clamp(2.6 - (Math.hypot(v.x, v.y) - B.R) / 3e5, 1, 2) : 1;
    if (p.d.tier >= 3) mult *= 1.2;
    return { key, base: base * mult, cur: base * mult * Math.pow(0.22, n), n, sit, bio: bio.name, bodyId: B.id };
  },
  start(W, v, p) {
    const why = this.canRun(W, v, p); if (why) return why;
    p.st.run = 0; return null;
  },
  finish(W, v, p) {
    const d = p.d.inst; const val = this.value(W, v, p);
    const type = (d.kind === 'drill' || d.kind === 'scoop') ? 'sample' : 'data';
    const item = { id: ++Science._id, type, inst: p.d.id, name: p.d.name, kind: d.kind, body: val.bodyId, sit: val.sit, biome: val.bio, key: val.key, base: val.base, size: d.data, left: d.data, t: W.ut, sample: type === 'sample' };
    // повтор того же ключа в хранилище — заменим дубликат
    if (v.science.some(it => it.key === item.key && it.type === type && it.inst === item.inst)) { W.log('Эти данные уже собраны и ждут передачи', 'info'); }
    else v.science.push(item);
    if (type === 'sample') { v.samples.push(item.id); }
    W.event({ t: 'sci', v, item });
    W.log(p.d.name + ': ' + (type === 'sample' ? 'образец взят' : 'данные получены (' + fmtBits(d.data) + ')'), 'ok');
    if (W.cheats.instantScience) { Science.credit(W, item, type === 'sample' ? 1 : 0.7); v.science = v.science.filter(x => x !== item); }
  },
  credit(W, item, frac) {
    const n = W.science.done[item.key] || 0; let pts = item.base * Math.pow(0.22, n) * (item.type === 'sample' ? 2.2 : 1) * frac;
    W.science.done[item.key] = n + 1; W.science.points += pts; W.science.rec.push({ t: W.ut, key: item.key, pts, body: item.body, kind: item.kind, sit: item.sit });
    if (W.science.rec.length > 400) W.science.rec.shift();
    const k = item.body + '|' + item.kind; if (!W.science.codex[k]) { W.science.codex[k] = { t: W.ut, sit: item.sit, biome: item.biome }; W.event({ t: 'codex', key: k, body: item.body, kind: item.kind }); }
    W.event({ t: 'credit', pts, item });
    W.log('Наука +' + pts.toFixed(1) + '  (' + item.name + ' · ' + (W.U.byId[item.body] ? W.U.byId[item.body].name : '') + ')', 'ok');
    return pts;
  },
  transmit(W, v, dt, link) {
    const it = v.science.find(x => x.type === 'data' && x.left > 0); if (!it) return;
    it.left -= link.rate * dt / 1e6; v.txRate = link.rate;
    if (it.left <= 0) { it.left = 0; Science.credit(W, it, 0.7); v.science = v.science.filter(x => x !== it); W.event({ t: 'tx', v, item: it }); }
  },
  world(W, dt) { Contracts.check(W, dt); },
  _id: 0
};

// ---------- кодекс: настоящие факты ----------
const FACTS = {
  'mars|cam': 'Съёмка поверхности Марса: кратер Гейла, где «Кьюриосити» в 2012 г. нашёл следы древнего озера. Цвет неба — «ржавый» из-за пыли с оксидами железа.',
  'mars|seis': 'InSight (2018–2022) записал более 1300 марсотрясений; радиус жидкого ядра Марса оценён в ~1830 км — больше ожидаемого.',
  'mars|drill': 'Бур «Кьюриосити» (2013, мишень John Klein) нашёл глины, органические молекулы и серу — признаки обитаемой среды в прошлом.',
  'mars|wx': 'Давление на Марсе ~600 Па (0,6% земного), суточные колебания температуры до 80 °C. REMS на «Кьюриосити» ведёт непрерывные метеонаблюдения с 2012 г.',
  'mars|mag': 'У Марса нет глобального магнитного поля, но есть остаточная намагниченность коры (MGS, 1997–2006) — реликт древнего динамо.',
  'mars|spec': 'Спектрометры показали гидратированные минералы (глины, сульфаты): раньше на Марсе была жидкая вода.',
  'mars|radar': 'SHARAD и MARSIS нашли залежи подповерхностного льда на средних широтах и, возможно, жидкие озёра под южной шапкой.',
  'moon|cam': 'Лунный реголит — крошечные стеклянные зёрна. «Луна-9» (1966) показала, что грунт твёрдый и посадка возможна.',
  'moon|seis': 'Сейсмометры «Аполлонов» регистрировали лунотрясения до 5 баллов, колебания длились более часа — кора «звенит как колокол».',
  'moon|spec': 'LCROSS (2009) и «Чандраян-1» обнаружили воду в вечно тёмных кратерах полюсов Луны (до 5% по массе).',
  'moon|scoop': 'Образцы «Луны-16/20/24» (1970–76) — 326 г, автоматическая доставка. «Чанъэ-5» (2020) привезла 1,73 кг молодых базальтов.',
  'moon|drill': 'Бур «Луны-24» взял колонку на глубину 2,25 м — первый подобный образец из лунного грунта.',
  'venus|wx': 'Температура на поверхности Венеры 462 °C, давление 92 атмосферы. «Венера-7» (1970) передавала сигнал 23 минуты.',
  'venus|cam': '«Венера-13» (1982) передала первые цветные панорамы: оранжевое небо из-за облаков серной кислоты.',
  'venus|atm': 'Атмосфера: 96,5% CO₂, облака H₂SO₄ на высоте 48–70 км. В облаках на ~50 км давление и температура близки земным.',
  'venus|spec': '«Венера-13» определила: базальты, богатые калием. Магеллан (1990–94) картировал 98% поверхности радаром.',
  'titan|atm': 'Атмосфера Титана: N₂ 95%, CH₄ 5%. «Гюйгенс» (2005) прислал первые снимки дождевых русел из метана.',
  'titan|cam': '«Гюйгенс» увидел галечную равнину, «берег» и дренажные каналы — вечная осень с метановым циклом.',
  'titan|wx': 'У поверхности Титана −179 °C и 1,47 бар. Плотный воздух и 1/7 g позволили бы летать, махая крыльями (миссия Dragonfly, 2028).',
  'europa|cam': 'Поверхность Европы — лёд с красновато-бурыми линиями-трещинами. Под ним океан воды вдвое больше земных.',
  'europa|mag': 'Магнитометр «Галилео» (1997) зафиксировал индуцированное поле — доказательство подлёдного солёного океана.',
  'jupiter|atm': 'Зонд «Галилео» (1995) вошёл в Юпитер со скоростью 47,5 км/с; при 22 бар передал: гелия меньше, чем ожидалось, мало воды, ветер до 640 км/ч.',
  'io|cam': 'Ио — самое вулканически активное тело Солнечной системы. Вулканы Ио впервые обнаружены на снимках «Вояджера-1» (1979).',
  'enceladus|spec': '«Кассини» пролетела через гейзеры Энцелада (2005–2015) и нашла органику и молекулярный водород — признаки гидротермальных процессов.',
  'earth|cam': 'Снимок «Земля-восход» (1968, «Аполлон-8») и «Бледно-голубая точка» (1990, «Вояджер-1») изменили взгляд человечества на Землю.',
  'earth|mag': 'Магнитное поле Земли защищает от солнечного ветра; радиационные пояса Ван Аллена открыты «Эксплорером-1» (1958).',
  'mercury|cam': 'МЕССЕНДЖЕР (2011–2015) картировал весь Меркурий; в полярных кратерах — водяной лёд, хотя в других местах +430 °C.',
  'mercury|mag': 'У Меркурия есть слабое глобальное магнитное поле (1% земного) — вопреки ожиданиям для столь малой планеты.',
  'pluto|cam': '«Новые горизонты» (2015): гигантская ледяная равнина Спутник, горы водяного льда до 3,5 км, голубая дымка.',
  'ceres|cam': 'Станция «Рассвет» (Dawn, 2015): яркие пятна в кратере Оккатор — карбонаты натрия из вытекшей рассолов.',
  'ganymede|mag': '«Галилео» (1996) открыл собственное магнитное поле Ганимеда — единственный спутник с динамо. Под льдом — солёный океан.',
  'callisto|cam': 'Каллисто — древнейшая кратерированная поверхность в системе (4 млрд лет). Вероятно, имеет подлёдный океан.',
  'triton|cam': '«Вояджер-2» (1989) увидел на Тритоне азотные гейзеры и «дынную» корку. Орбита ретроградная — спутник захвачен.',
  'uranus|atm': 'Единственный визит — «Вояджер-2» (1986): метановая голубая атмосфера, ось наклона 98°.',
  'neptune|atm': '«Вояджер-2» (1989): Большое Тёмное Пятно и ветры до 2100 км/ч — самые быстрые в Солнечной системе.',
  'saturn|atm': '«Кассини» (2004–2017): гексагональная буря на северном полюсе и ураган на южном; закончила миссию, войдя в атмосферу Сатурна 15.09.2017.'
};
const KIND_FACT = {
  cam: 'Получены снимки поверхности и атмосферы. Новые изображения — основа картографии и выбора места посадки.',
  spec: 'Спектры показывают состав: по линиям поглощения определяют минералы и газы.',
  seis: 'Сейсмические волны просвечивают недра: так определяют размер ядра и толщину коры.',
  wx: 'Метеорологические данные: давление, температура, влажность — основа для моделей климата.',
  mag: 'Магнитометрия выявляет динамо в недрах и подповерхностные океаны.',
  rad: 'Измерен радиационный фон — критично для будущих экспедиций.',
  radar: 'Радар зондирует недра на сотни метров — поиск льда и воды.',
  atm: 'Масс-спектрометр определил состав верхней атмосферы и темп ухода газов.',
  lidar: 'Лазерная альтиметрия строит высотную карту с точностью до метров.',
  drill: 'Образец из-под поверхности, не изменённый излучением и ветром. Лучшая цель для лабораторий на Земле.',
  scoop: 'Образец грунта — после возврата на Землю проходит анализ с точностью, недоступной приборам на борту.'
};
function codexText(bodyId, kind) { return FACTS[bodyId + '|' + kind] || KIND_FACT[kind] || ''; }

// ---------- Контракты ----------
const Contracts = {
  generate(W) {
    const U = W.U, list = [];
    const add = (c) => { c.id = list.length + 1; c.state = 'open'; list.push(c); };
    const home = U.byId[U.home];
    add({ type: 'alt', title: 'Первый взлёт: 100 км', desc: 'Подняться выше линии Кармана на ' + home.name + '.', body: home.id, alt: 100e3, reward: { funds: 1.0e6, sci: 3 } });
    add({ type: 'orbit', title: 'Спутник-1', desc: 'Выйти на орбиту вокруг ' + home.name + ' (периапсис выше атмосферы).', body: home.id, rp: (home.atm ? home.atm.top : 0) + 5e3, reward: { funds: 2.5e6, sci: 8 } });
    if (U.kind === 'solar') {
      add({ type: 'flyby', title: 'Луна-1: пролёт мимо Луны', desc: 'Войти в сферу влияния Луны.', body: 'moon', reward: { funds: 2e6, sci: 6 } });
      add({ type: 'land', title: 'Луна-9: мягкая посадка', desc: 'Сесть на Луну целым аппаратом (3 февраля 1966).', body: 'moon', reward: { funds: 4e6, sci: 15 } });
      add({ type: 'orbit', title: 'Луна-10: орбита Луны', desc: 'Выйти на орбиту Луны (периапсис > 15 км).', body: 'moon', rp: 15e3, reward: { funds: 3.5e6, sci: 12 } });
      add({ type: 'sci', title: 'Луноход: наука на Луне', desc: 'Передать данные с поверхности Луны.', body: 'moon', sit: 'landed', reward: { funds: 3e6, sci: 10 } });
      add({ type: 'sample', title: 'Луна-16: возврат образцов', desc: 'Вернуть образец грунта Луны на Землю.', body: 'moon', reward: { funds: 8e6, sci: 40 } });
      add({ type: 'land', title: 'Венера-7: посадка на Венеру', desc: 'Сесть на Венеру (92 бар, +462 °C) и передать данные.', body: 'venus', reward: { funds: 12e6, sci: 40 } });
      add({ type: 'flyby', title: 'Маринер-4: пролёт Марса', desc: 'Войти в сферу влияния Марса.', body: 'mars', reward: { funds: 6e6, sci: 25 } });
      add({ type: 'orbit', title: 'Mariner-9: орбита Марса', desc: 'Выйти на орбиту Марса.', body: 'mars', rp: (U.byId.mars.atm.top + 5e3), reward: { funds: 10e6, sci: 40 } });
      add({ type: 'land', title: 'Викинг: посадка на Марс', desc: 'Мягко сесть на Марс.', body: 'mars', reward: { funds: 15e6, sci: 60 } });
      add({ type: 'sci', title: 'Кьюриосити: химия Марса', desc: 'Передать данные спектрометра с поверхности Марса.', body: 'mars', sit: 'landed', kind: 'spec', reward: { funds: 12e6, sci: 60 } });
      add({ type: 'flyby', title: 'Вояджер-1: пролёт Юпитера', desc: 'Пролететь Юпитер (войти в его сферу).', body: 'jupiter', reward: { funds: 30e6, sci: 120 } });
      add({ type: 'land', title: 'Гюйгенс: посадка на Титан', desc: 'Опуститься на поверхность Титана.', body: 'titan', reward: { funds: 60e6, sci: 250 } });
      add({ type: 'sci', title: 'Галилео: зонд в Юпитере', desc: 'Передать данные из атмосферы Юпитера (в полёте).', body: 'jupiter', sit: 'flyingLow', reward: { funds: 50e6, sci: 200 } });
      add({ type: 'flyby', title: 'Новые горизонты: Плутон', desc: 'Достичь системы Плутона.', body: 'pluto', reward: { funds: 100e6, sci: 400 } });
    } else {
      const ps = U.bodies.filter(b => b.parent === U.root.id && b !== home).slice(0, 4);
      for (const b of ps) { add({ type: 'flyby', title: 'Исследование: ' + b.name, desc: 'Достичь сферы влияния тела ' + b.name + '.', body: b.id, reward: { funds: 6e6, sci: 30 } }); if (b.landable) add({ type: 'land', title: 'Посадка на ' + b.name, desc: 'Мягко сесть на ' + b.name + '.', body: b.id, reward: { funds: 14e6, sci: 70 } }); }
      const moons = U.bodies.filter(b => b.kind === 'moon').slice(0, 2);
      for (const b of moons) add({ type: 'land', title: 'Посадка на ' + b.name, desc: 'Мягко сесть на спутник ' + b.name + '.', body: b.id, reward: { funds: 8e6, sci: 40 } });
    }
    W.contracts = list;
  },
  check(W, dt) {
    W._ct = (W._ct || 0) + dt; if (W._ct < 0.5) return; W._ct = 0;
    const A = W.active; if (!A) return; const B = W.U.byId[A.body];
    for (const c of W.contracts) {
      if (c.state !== 'open') continue; let ok = false;
      switch (c.type) {
        case 'alt': ok = A.body === c.body && (A.alt || 0) >= c.alt; break;
        case 'orbit': { if (A.body === c.body) { const el = elements(B.gm, A.x, A.y, A.vx, A.vy); ok = el.bound && el.rp - B.R >= c.rp - B.R && el.rp > B.R + (c.rp > B.R ? 0 : c.rp) && A.mode !== 'landed' && A.age > 30; if (c.rp > B.R) ok = el.bound && (el.rp - B.R) >= (c.rp - 0) && el.rp > B.R; } break; }
        case 'flyby': ok = A.body === c.body; break;
        case 'land': ok = A.body === c.body && A.mode === 'landed' && A.parts.length > 0 && A.alive; break;
        case 'sci': ok = W.science.rec.some(r => r.body === c.body && (!c.sit || r.sit === c.sit) && (!c.kind || r.kind === c.kind) && r.t >= (c.since || 0)); break;
        case 'sample': ok = c._got; break;
      }
      if (ok) { c.state = 'done'; W.funds += c.reward.funds; W.science.points += c.reward.sci; W.log('Контракт выполнен: «' + c.title + '»  +' + fmtMoney(c.reward.funds) + ' +' + c.reward.sci + ' науки', 'ok'); W.event({ t: 'contract', c }); }
    }
  }
};
