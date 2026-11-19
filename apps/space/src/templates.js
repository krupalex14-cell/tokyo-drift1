'use strict';
// ============ Шаблоны аппаратов (на основе реальных зондов) и проверка конструкции ============
// Каждый шаблон — функция, собирающая Design из каталога настоящих деталей.
const TEMPLATES = [];
function tpl(id, name, kind, real, note, make) { TEMPLATES.push({ id, name, kind, real, note, make }); }

tpl('cubesat', 'CubeSat 3U', 'probe', 'стандарт CubeSat 10×10×34 см', 'Самый простой спутник: магнитометр, антенна, солнечные элементы на корпусе. Для первых запусков.', () => {
  const D = new Design('CubeSat 3U');
  D.add('batt_s'); const c = D.add('cubesat'); D.add('i_mag'); D.add('ant_lga');
  D.add('solar_body', { x: -.25, y: c.y, h: .34 }); D.add('solar_body', { x: .25, y: c.y, h: .34 });
  return D.finish();
});

tpl('orbiter1', 'Орбитальный зонд «Маринер»', 'probe', 'Mariner 9 (НАСА, 1971): первый искусственный спутник другой планеты', 'Бортовой компьютер, гептиловый бак, двигатель LM APS, две панели, магнитометр и радиация. Умеет тормозиться у планеты.', () => {
  const D = new Design('Орбитальный зонд');
  D.add('lem_aps'); D.add('tank_hypergolic', { w: .75, h: 1.5 }); D.add('acs_ring', { w: .75 });
  const c = D.add('core_bus'); D.add('batt_m'); D.add('i_mag'); D.add('ant_mga');
  D.add('solar_small', { x: -(.3 + 2), y: c.y }); D.add('solar_small', { x: .3 + 2, y: c.y });
  D.add('i_rad', { x: .3 + .1, y: c.y + .2 });
  return D.finish();
});

tpl('orbiter2', 'Орбитальный зонд «Одиссей»', 'probe', 'Mars Odyssey (2001) / MRO (2005)', 'Тарелка 1,5 м, камера высокого разрешения HiRISE, гамма-спектрометр. Требует технологии 2.', () => {
  const D = new Design('Орбитальный зонд-2');
  D.add('lem_aps'); D.add('tank_hypergolic', { w: 1, h: 2 }); D.add('acs_ring', { w: 1 });
  const c = D.add('core_bus'); D.add('batt_m'); D.add('i_grs'); D.add('i_hirise'); D.add('ant_hga15');
  D.add('solar_mid', { x: -(.3 + 5), y: c.y }); D.add('solar_mid', { x: .3 + 5, y: c.y });
  D.add('i_mag', { x: .3 + .1, y: c.y + .2 });
  return D.finish();
});

tpl('lander', 'Посадочный зонд «Луна-9»', 'probe', 'Луна-9 (1966) / Surveyor 1 (1966) / Phoenix', 'Три сопла MR-80B (как в «небесном кране»), две опоры, камера и метеостанция. Садитесь сами: тормозите у поверхности.', () => {
  const D = new Design('Посадочный зонд');
  D.add('mr80b', { n: 3 }); const t = D.add('tank_mono', { w: 1.25, h: 2 }); D.add('acs_ring', { w: 1.25 });
  const c = D.add('core_bus'); D.add('batt_m'); D.add('i_mastcam'); D.add('i_rems'); D.add('ant_mga');
  D.add('leg_probe', { x: -(.625 + .5), y: .4 }); D.add('leg_probe', { x: .625 + .5, y: .4 });   // опоры ниже сопла: садится на лапы, а не на двигатель
  D.add('solar_small', { x: -(.625 + 2), y: t.y + .5 }); D.add('solar_small', { x: .625 + 2, y: t.y + .5 });
  return D.finish();
});

tpl('lander_mars', 'Марсианский посадочный модуль «Викинг»', 'probe', 'Viking (1976) / Phoenix (2008) / InSight (2018)', 'Парашют и реактивная посадка: воздуха у Марса мало, одним парашютом не обойтись — на высоте гасите скорость двигателями. Девять сопел MR-80B дают запас тяги, питание — РТГ (как у Curiosity). Требует технологии 2.', () => {
  const D = new Design('Марсианский модуль');
  D.add('mr80b', { n: 9 }); const t = D.add('tank_mono', { w: 1.8, h: 1.0 }); D.add('acs_ring', { w: 1.8 });
  const c = D.add('core_bus'); D.add('batt_m'); D.add('mmrtg'); D.add('i_mastcam'); D.add('i_rems'); D.add('ant_mga'); D.add('chute_dgb');
  D.add('leg_probe', { x: -(.9 + .5), y: .4 }); D.add('leg_probe', { x: .9 + .5, y: .4 });      // питание от РТГ, без панелей: стройный корпус не кувыркается в воздухе
  return D.finish();
});

tpl('lander2', 'Посадочный зонд-лаборатория', 'probe', 'Phoenix (2008) / InSight (2018)', 'Ковш и бур для образцов, сейсмометр, контейнер образцов. Требует технологии 2.', () => {
  const D = new Design('Лаборатория');
  D.add('mr80b', { n: 4 }); const t = D.add('tank_mono', { w: 1.8, h: 2 }); D.add('acs_ring', { w: 1.8 });
  D.add('core_bus'); const b = D.add('batt_l'); D.add('sample_box'); D.add('i_seis'); D.add('i_chemcam'); D.add('ant_mga');
  D.add('i_scoop', { x: .45 + .15, y: b.y }); D.add('i_apxs', { x: -(.45 + .1), y: b.y });
  D.add('leg_probe', { x: -(.9 + .5), y: .4 }); D.add('leg_probe', { x: .9 + .5, y: .4 });
  D.add('solar_small', { x: -(.9 + 2), y: t.y + .5 }); D.add('solar_small', { x: .9 + 2, y: t.y + .5 });
  return D.finish();
});

tpl('probe_entry', 'Спускаемый зонд «Галилео»', 'probe', 'Galileo Probe (1995, Юпитер) / Huygens (2005, Титан) / Венера-13', 'Носитель с двигателем + разделитель + капсула: абляционный щит, герметичная сфера 25 бар, метеодатчик, парашют. Носитель выводит на орбиту, затем отделяйте капсулу.', () => {
  const D = new Design('Спускаемый зонд');
  D.add('mr80b'); D.add('tank_mono', { w: .75, h: 1.2 }); D.add('acs_ring', { w: .75 });
  const c = D.add('core_bus'); D.add('batt_s'); D.add('ant_mga');
  D.add('solar_small', { x: -(.3 + 2), y: c.y }); D.add('solar_small', { x: .3 + 2, y: c.y });
  D.add('dec', { w: .75 });
  D.add('shield_abl', { w: 1.25 });
  const v = D.add('pv_small'); D.add('chute_drogue');
  D.add('cubesat', { x: 0, y: v.y + .12 }); D.add('i_hasi', { x: 0, y: v.y - .15 });
  return D.finish();
});

tpl('capsule', 'Спускаемая капсула', 'probe', 'Apollo CM / Союз / Stardust', 'Щит снизу, парашюты сверху: капсула падает щитом вперёд и раскрывает купола. Для первых посадок на парашюте.', () => {
  const D = new Design('Капсула');
  D.add('shield_abl', { w: 1.25 }); D.add('pv_small'); D.add('core_bus'); D.add('batt_s'); D.add('chute_drogue'); D.add('chute_main');
  return D.finish();
});

tpl('src_probe', 'Возврат образцов «Луна-16»', 'probe', 'Луна-16 (1970) / Stardust / Hayabusa2', 'Посадка, взятие грунта, взлёт и возврат на Землю в капсуле. Самая сложная миссия.', () => {
  const D = new Design('Возврат образцов');
  D.add('lem_dps'); const t0 = D.add('tank_hypergolic', { w: 1.8, h: 2 });
  D.add('dec', { w: 1.25 }); D.add('lem_aps'); D.add('tank_hypergolic', { w: 1, h: 1 });
  D.add('core_bus'); D.add('batt_m'); D.add('ant_mga'); D.add('src');
  D.add('leg_lem', { x: -(.9 + 1.2), y: t0.y - 1.5 }); D.add('leg_lem', { x: .9 + 1.2, y: t0.y - 1.5 });
  D.add('i_scoop', { x: .9 + .15, y: t0.y + 1.0 });
  return D.finish();
});

// ---------- готовые ракеты (настоящие прототипы, из настоящих деталей) ----------
// stages: [{e: двигатель, n: сколько, D: диаметр, L: длина бака, tank: тип бака}], payloadId — шаблон-нагрузка
function rocketDesign(name, stages, payloadId, o) {
  o = o || {};
  const payload = TEMPLATES.find(t => t.id === payloadId).make();
  const pl = AutoBuild.payloadInfo(payload);
  const S = stages.map(s => ({ e: PARTS[s.e], n: s.n || 1, D: s.D, L: s.L, tk: PARTS[s.tank || 'tank_kerolox'] }));
  const r = AutoBuild.assemble(null, { atm: true }, pl, payload, { stages: S }, { name, fairing: o.fairing });
  const D = r.design; D._stageLimit = r.nS;
  if (o.ringW) for (const p of D.parts) if (p.defId === 'acs_ring') p.w = o.ringW;      // большой корабль: двигатели ориентации по широкому кольцу
  for (const p of r.payloadParts) if (p.d.eng && !p.d.eng.rcs) p.stage = r.nS + 1;   // двигатель нагрузки включается после отделения
  return D;
}
function rtpl(id, name, real, note, stages, payloadId, o) { tpl(id, name, 'rocket', real, note, () => rocketDesign(name, stages, payloadId, o)); }

tpl('sound', 'Суборбитальная ракета', 'rocket', 'метеорологические / геофизические ракеты (Aerobee, «Вертикаль»)', 'Один двигатель Rutherford и маленький бак. Улетает выше 100 км (граница космоса) и падает обратно. Самый простой тест: нажмите ▶ и держите «макс. тягу».', () => {
  const D = new Design('Суборбитальная ракета');
  D.add('rutherford'); const tk = D.add('tank_kerolox', { w: .75, h: 2.0 });
  D.add('acs_ring', { w: .75 });   // кольцо РСУ — чтобы можно было наклонять ракету
  const bus = D.add('core_bus'); D.add('batt_m'); const mg = D.add('i_mag'); D.add('nose', { w: Math.max(.45, mg.w), h: 1.2 });
  D.add('ant_lga', { x: bus.w / 2 + .05, y: bus.y, noStack: true });   // антенна сбоку на приборном отсеке, а не вместо носового конуса
  const fw = .45;   // узкие стабилизаторы у нижней части бака — ракета летит носом вперёд сама
  for (const sx of [-1, 1]) D.add('fin', { w: fw, h: 1.3, x: sx * (tk.w / 2 + fw / 2), y: .85, noStack: true });
  return D.finish();
});
rtpl('electron', 'Электрон', 'Rocket Lab Electron: 9 × Rutherford + Rutherford Vac, Ø1,2 м (2017)', 'Лёгкая двухступенчатая ракета для спутников. Первая ступень — девять двигателей Rutherford, вторая — один вакуумный. Выводит CubeSat на орбиту 200 км.',
  [{ e: 'rutherford', n: 9, D: 1.25, L: 11.5 }, { e: 'rutherford_vac', n: 1, D: 1.25, L: 2.0 }], 'cubesat');
rtpl('falcon9', 'Falcon 9', 'SpaceX Falcon 9: 9 × Merlin 1D + Merlin Vacuum, Ø3,7 м', 'Самая популярная ракета мира. Девять двигателей Merlin 1D на керосине, вторая ступень с вакуумным соплом. Выводит орбитальный зонд типа «Маринер».',
  [{ e: 'merlin1d', n: 9, D: 3.7, L: 41 }, { e: 'merlin_vac', n: 1, D: 3.7, L: 11 }], 'orbiter1');
rtpl('atlas5', 'Atlas V 401', 'ULA Atlas V: РД-180 + Centaur (RL10), Ø3,7 м', 'Керосиновая первая ступень с российским РД-180 (4,1 МН) и водородный «Центавр» с RL10 — эффективная верхняя ступень. Отправляет тяжёлые межпланетные зонды (Juno, New Horizons, MSL).',
  [{ e: 'rd180', n: 1, D: 3.7, L: 30 }, { e: 'rl10', n: 1, D: 3.0, L: 6, tank: 'tank_hydrolox' }], 'probe_entry');
rtpl('saturn5', 'Saturn V', 'НАСА Saturn V: 5 × F-1, 5 × J-2, 1 × J-2 (1967); Ø10 м', 'Самая мощная ракета в истории (7,7 МН на каждый F-1). Три ступени: S-IC на керосине, S-II и S-IVB на водороде. Рассчитана на полёт к Луне.',
  [{ e: 'f1', n: 5, D: 10.1, L: 32 }, { e: 'j2', n: 5, D: 10.1, L: 19, tank: 'tank_hydrolox' }, { e: 'j2', n: 1, D: 6.0, L: 12.5, tank: 'tank_hydrolox' }], 'lander');
rtpl('starship', 'Starship', 'SpaceX Starship / Super Heavy: Raptor 2 и Raptor Vacuum, метан + кислород, Ø9 м', 'Полностью метановая двухступенчатая ракета с кластером из 33 двигателей Raptor 2. Огромная грузоподъёмность — ей по силам отправить посадочный модуль к Марсу.',
  [{ e: 'raptor2', n: 33, D: 10.1, L: 60, tank: 'tank_methalox' }, { e: 'raptor_vac', n: 6, D: 10.1, L: 20, tank: 'tank_methalox' }], 'lander2', { ringW: 9 });

tpl('rover', 'Луноход (вездеход)', 'rover', 'Луноход-1 (1970) / LRV (Apollo 15–17)', 'Четыре колеса LRV, батарея, солнечные панели, камера и антенна. Ехать по поверхности. В «Готовых ракетах» его можно сразу поставить на Луну или Марс и поездить; настоящий — запускать на ракете.', () => {
  const D = new Design('Вездеход');
  const cw = 1.8, c = D.add('core_bus', { w: cw, h: .6 }); const bt = D.add('batt_m'); D.add('i_mastcam'); D.add('ant_mga');
  const r = PARTS.wheel_lrv.w / 2;
  for (const sx of [-1, 1]) for (const k of [0, 1]) D.add('wheel_lrv', { x: sx * (cw / 2 + r + k * 2 * r), y: c.y - .1, noStack: true });
  for (const sx of [-1, 1]) D.add('solar_small', { w: 1.6, x: sx * (bt.w / 2 + .8), y: bt.y, noStack: true });
  return D.finish();
});

// максимальный «уровень технологии» среди деталей
function designTier(parts) { let t = 0; for (const p of parts) t = Math.max(t, p.d.tier || 0); return t; }

// ---------- проверка проекта ----------
// возвращает { issues:[{lvl,text}], ok, stats }
function validateDesign(parts, W, o) {
  o = o || {}; const ch = (W && W.cheats) || {}; const issues = []; const add = (lvl, text) => issues.push({ lvl, text });
  if (!parts.length) { add('err', 'Пусто: добавьте детали'); return { issues, ok: false }; }
  const edges = computeEdges(parts);
  const comps = components(parts, edges);
  if (comps.length > 1) add(ch.overlap ? 'warn' : 'err', 'Деталей-«островов»: ' + comps.length + '. Все детали должны касаться друг друга');
  if (!ch.overlap) {
    const bad = [], seen = new Set();
    for (const p of parts) { const q = overlaps(parts, p); if (q && !seen.has(p.id + ':' + q.id) && !seen.has(q.id + ':' + p.id)) { seen.add(p.id + ':' + q.id); bad.push(p.d.name + ' ⟷ ' + q.d.name); } }
    if (bad.length) add('err', 'Детали пересекаются: ' + bad.slice(0, 3).join('; ') + (bad.length > 3 ? '…' : ''));
  }
  if (!parts.some(p => p.d.core)) add('warn', 'Нет блока управления: аппарат не сможет ориентироваться');
  const engs = parts.filter(p => p.d.eng && !p.d.eng.rcs);
  if (!engs.length) add('warn', 'Нет двигателя');
  else {
    const sec = computeSections(parts, edges);
    for (const e of engs) {
      if (e.d.eng.solid) continue; const prop = e.d.eng.prop; if (e.d.eng.power > 0) { if (!parts.some(p => p.d.solar || p.d.rtg)) add('warn', e.d.name + ': ионному двигателю нужна электроэнергия'); }
      const s = sec.get(e.id); const ok = parts.some(t => t.d.tank && t.d.tank.prop === prop && (sec.get(t.id) === s));
      if (!ok) { add('warn', e.d.name + ': нет бака «' + PROPS[prop].name + '» в той же секции'); break; }
    }
  }
  const noStage = engs.filter(p => p.stage < 0 && !p.d.eng.rcs); if (noStage.length && engs.length) add('warn', 'Двигатель без ступени: назначьте её в окне «Ступени»');
  if (parts.some(p => p.d.core) && !parts.some(p => p.d.rw || (p.d.eng && p.d.eng.rcs) || (p.d.eng && p.d.eng.gim))) {
    const A = attAuthority(parts); if (A.t90 > 45) add('warn', 'Слабое управление поворотом: разворот на 90° займёт ~' + Math.round(A.t90) + ' с. Добавьте РСУ («Кольцо РСУ», Draco) или маховики');
  }
  const ec = parts.reduce((s, p) => s + (p.d.batt || 0), 0), use = parts.reduce((s, p) => s + (p.d.core ? p.d.core.ec : 0), 0);
  if (use > 0 && ec <= 0) add('warn', 'Нет батарей: блок управления остановится в тени');
  let cost = 0, mass = 0; for (const p of parts) { cost += partCost(p); mass += partMassTotal(p); }
  const tier = designTier(parts);
  if (W && !(W.sandbox || ch.freeBuild) && tier > W.tier) add('err', 'Нужна технология ' + tier + ' (сейчас ' + W.tier + ')');
  // габариты площадки
  if (!ch.infField) {
    let top = -1e9, wmax = 0; for (const p of parts) { const r = prect(p); top = Math.max(top, r.y1); wmax = Math.max(wmax, Math.abs(r.x0), Math.abs(r.x1)); }
    if (top > BUILD_H) add('err', 'Выше ангара: ' + top.toFixed(0) + ' м (предел ' + BUILD_H + ' м). Включите «бесконечное поле» в читах');
    if (wmax > BUILD_W) add('err', 'Шире площадки: ' + wmax.toFixed(0) + ' м (предел ±' + BUILD_W + ' м)');
  }
  return { issues, ok: !issues.some(i => i.lvl === 'err'), cost, mass, tier, comps: comps.length };
}
const BUILD_H = 160, BUILD_W = 30;
