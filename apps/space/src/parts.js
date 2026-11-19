'use strict';
// ============ Каталог настоящих деталей ============
// Тяга/Isp/массы — округлённые опубликованные значения реальных изделий.
const PROPS = {
  kerolox: { name: 'Керосин + О₂', rho: 1024, frac: 0.045, ox: true, color: '#e8e4dc' },
  hydrolox: { name: 'Водород + О₂', rho: 362, frac: 0.085, ox: true, color: '#d9702a' },
  methalox: { name: 'Метан + О₂', rho: 833, frac: 0.05, ox: true, color: '#b8bcc4' },
  hypergolic: { name: 'N₂O₄ + гептил/аэрозин', rho: 1150, frac: 0.06, ox: true, color: '#d8c06a' },
  mono: { name: 'Гидразин (монотопливо)', rho: 1004, frac: 0.08, ox: false, color: '#9a9a96' },
  lh2: { name: 'Жидкий водород', rho: 71, frac: 0.12, ox: false, color: '#e9e6df' },
  xenon: { name: 'Ксенон', rho: 1600, frac: 0.15, ox: false, color: '#b8c8d8' },
  solid: { name: 'Твёрдое топливо', rho: 1800, frac: 0, ox: true, color: '#4a4a48' }
};
const CATS = [['engine', 'Двигатели'], ['tank', 'Баки'], ['struct', 'Конструкция'], ['control', 'Управление'], ['power', 'Энергия'], ['comm', 'Связь'], ['science', 'Наука'], ['landing', 'Посадка'], ['rover', 'Вездеход']];
const PARTS = {}; const PART_LIST = [];
const L = (t, g, c, s, o) => ({ t, g, c, s: s || 'f', o: o || null });   // слой рисунка
function def(d) { d.w = d.w || 1; d.h = d.h || 1; d.tier = d.tier || 0; d.cost = d.cost || 1000; d.crashV = d.crashV || 9; d.maxT = d.maxT || 900; d.crushP = d.crushP || 6e5; PARTS[d.id] = d; PART_LIST.push(d); return d; }
const ogive = (n, y0, y1, hw) => { const pts = []; for (let i = 0; i <= n; i++) { const t = i / n; pts.push([-hw * Math.sqrt(1 - t * t * 0.96), y0 + (y1 - y0) * t]); } const r = pts.map(p => [-p[0], p[1]]).reverse(); return pts.concat(r).flat(); };
const DIAS = [0.3, 0.5, 0.75, 1.0, 1.25, 1.8, 2.5, 3.0, 3.7, 4.5, 5.0, 6.0, 8.4, 10.1];

// ---------- Двигатели ----------
function eng(id, name, real, o) {
  const prop = o.prop, vac = !!o.vac;
  const d = def({
    id, name, cat: 'engine', real, tier: o.tier || 0, cost: o.cost, mass: o.mass, w: o.w, h: o.h, attach: 'stack', crashV: 7, maxT: 1800,
    eng: { Fv: o.Fv * 1000, IspV: o.IspV, IspS: o.IspS != null ? o.IspS : (vac ? o.IspV * 0.38 : 0), prop, gim: o.gim || 0, thrMin: o.thrMin || 1, restarts: o.restarts == null ? 99 : o.restarts, solid: o.solid, power: o.power || 0, burn: o.burn, vac, rcs: !!o.rcs, nuke: !!o.nuke },
    art: o.art || artEngine(o)
  });
  if (o.solid) { d.eng.propMass = o.propMass; d.eng.Fv = o.propMass / o.burn * o.IspV * G0; d.attach = 'both'; d.tankRes = 'solid'; }
  return d;
}
function artEngine(o) {
  const b = o.bellC || 'dark';
  return [
    L('r', [-.5, .3, .5, .5], 'steel', 'c'), L('r', [-.38, .22, .38, .32], 'copper', 'c'),
    L('t', [-.5, .3, .5, .16], b, 'c', { glow: 1 }), L('r', [-.5, .3, .5, .36], 'dark', 'c'),
    L('t', [-.5, .12, .5, .02], b === 'dark' ? 'steel' : b, 'c', { rim: 1 })
  ];
}
eng('rutherford', 'Rutherford', 'Rocket Lab Electron, 1-я ступень', { prop: 'kerolox', Fv: 26, IspV: 325, IspS: 311, mass: 35, w: .4, h: .9, gim: 4, cost: 25e3, tier: 0 });
eng('rutherford_vac', 'Rutherford Vacuum', 'Electron, 2-я ступень', { prop: 'kerolox', Fv: 25.8, IspV: 343, vac: 1, mass: 35, w: .84, h: 1.0, gim: 4, cost: 30e3, tier: 0 });
eng('kestrel', 'Kestrel', 'SpaceX Falcon 1, 2-я ступень', { prop: 'kerolox', Fv: 31, IspV: 317, vac: 1, mass: 52, w: .7, h: 1.4, gim: 5, cost: 120e3, tier: 0 });
eng('merlin1d', 'Merlin 1D', 'SpaceX Falcon 9 / Heavy', { prop: 'kerolox', Fv: 914, IspV: 311, IspS: 282, mass: 470, w: .92, h: 2.9, gim: 5, thrMin: .4, cost: 1000e3, tier: 1 });
eng('merlin_vac', 'Merlin 1D Vacuum', 'Falcon 9, 2-я ступень', { prop: 'kerolox', Fv: 981, IspV: 348, vac: 1, mass: 490, w: 3.3, h: 3.0, gim: 5, thrMin: .39, cost: 1500e3, tier: 1 });
eng('rl10', 'RL10B-2', 'Pratt & Whitney: Delta IV 2-я ступень', { prop: 'hydrolox', Fv: 110, IspV: 465.5, vac: 1, mass: 301, w: 2.15, h: 4.15, gim: 4, restarts: 5, cost: 4500e3, tier: 2 });
eng('j2', 'J-2', 'Rocketdyne: Saturn V S-II / S-IVB', { prop: 'hydrolox', Fv: 1033, IspV: 421, vac: 1, mass: 1788, w: 2.0, h: 3.4, gim: 7, restarts: 2, cost: 6000e3, tier: 2 });
eng('rd180', 'РД-180', 'НПО Энергомаш: Atlas V', { prop: 'kerolox', Fv: 4152, IspV: 338, IspS: 311, mass: 5480, w: 3.2, h: 3.6, gim: 8, thrMin: .47, cost: 25e6, tier: 2 });
eng('be4', 'BE-4', 'Blue Origin: Vulcan / New Glenn', { prop: 'methalox', Fv: 2600, IspV: 339, IspS: 310, mass: 2000, w: 1.8, h: 4.1, gim: 5, thrMin: .5, cost: 8e6, tier: 3 });
eng('raptor2', 'Raptor 2', 'SpaceX Starship / Super Heavy', { prop: 'methalox', Fv: 2450, IspV: 350, IspS: 327, mass: 1600, w: 1.3, h: 3.1, gim: 8, thrMin: .4, cost: 1000e3, tier: 3 });
eng('raptor_vac', 'Raptor Vacuum', 'SpaceX Starship', { prop: 'methalox', Fv: 2530, IspV: 380, vac: 1, mass: 1700, w: 2.4, h: 3.7, gim: 0, thrMin: .4, cost: 1500e3, tier: 3 });
eng('rs25', 'RS-25 (SSME)', 'Aerojet Rocketdyne: Space Shuttle / SLS', { prop: 'hydrolox', Fv: 2279, IspV: 452, IspS: 366, mass: 3527, w: 2.4, h: 4.3, gim: 10.5, thrMin: .67, cost: 40e6, tier: 3 });
eng('rs68', 'RS-68', 'Aerojet Rocketdyne: Delta IV', { prop: 'hydrolox', Fv: 3560, IspV: 410, IspS: 365, mass: 6597, w: 2.9, h: 5.2, gim: 8, thrMin: .57, cost: 20e6, tier: 3 });
eng('f1', 'F-1', 'Rocketdyne: Saturn V S-IC', { prop: 'kerolox', Fv: 7770, IspV: 304, IspS: 263, mass: 8400, w: 3.7, h: 5.8, gim: 6, cost: 15e6, tier: 3 });
eng('lem_dps', 'LM Descent Engine (DPS)', 'Лунный модуль «Аполлон»', { prop: 'hypergolic', Fv: 45, IspV: 311, vac: 1, mass: 179, w: 1.5, h: 1.5, gim: 6, thrMin: .1, cost: 3e6, tier: 1 });
eng('lem_aps', 'LM Ascent Engine (APS)', 'Лунный модуль «Аполлон»', { prop: 'hypergolic', Fv: 15.6, IspV: 311, vac: 1, mass: 82, w: .8, h: 1.2, gim: 0, cost: 2e6, tier: 1 });
eng('sps', 'AJ10-137 (SPS)', 'Aerojet: служебный модуль «Аполлон»', { prop: 'hypergolic', Fv: 91.2, IspV: 314, vac: 1, mass: 300, w: 1.5, h: 3.9, gim: 6, cost: 3e6, tier: 1 });
eng('oms', 'AJ10-190 (OMS)', 'Aerojet: Space Shuttle', { prop: 'hypergolic', Fv: 26.7, IspV: 316, vac: 1, mass: 118, w: 1.2, h: 1.9, gim: 8, cost: 2e6, tier: 1 });
eng('mr80b', 'MR-80B', 'Aerojet: Curiosity «небесный кран»', { prop: 'mono', Fv: 3.06, IspV: 224, IspS: 215, mass: 8.2, w: .3, h: .6, gim: 0, thrMin: .13, cost: 300e3, tier: 1 });
eng('nerva', 'NERVA XE', 'NASA/AEC: ядерный тепловой двигатель', { prop: 'lh2', Fv: 246.7, IspV: 841, vac: 1, mass: 6800, w: 2.2, h: 6.9, gim: 0, restarts: 10, nuke: 1, cost: 60e6, tier: 4 });
eng('nstar', 'NSTAR (ионный)', 'NASA: Deep Space 1, Dawn', { prop: 'xenon', Fv: 0.092, IspV: 3100, IspS: 0, power: 2300, mass: 25, w: .3, h: .3, cost: 5e6, tier: 2 });
eng('spt100', 'СПД-100 (холловский)', 'ОКБ «Факел»', { prop: 'xenon', Fv: 0.083, IspV: 1600, IspS: 0, power: 1350, mass: 12, w: .2, h: .3, cost: 1e6, tier: 1 });
eng('next', 'NEXT-C (ионный)', 'NASA Glenn: DART', { prop: 'xenon', Fv: 0.236, IspV: 4190, IspS: 0, power: 6900, mass: 35, w: .4, h: .3, cost: 8e6, tier: 3 });
// РДТТ
eng('star48', 'Star 48B', 'Northrop Grumman: ступень разгонного блока', { prop: 'solid', solid: 1, propMass: 2010, burn: 87, IspV: 292, vac: 1, mass: 140, w: 1.24, h: 2.04, cost: 1.5e6, tier: 0, art: artSolid(0, 'steel') });
eng('gem63', 'GEM 63', 'Northrop Grumman: Atlas V, Vulcan', { prop: 'solid', solid: 1, propMass: 44200, burn: 94, IspV: 283, IspS: 262, mass: 5200, w: 1.6, h: 20.1, gim: 0, cost: 3e6, tier: 2, art: artSolid(1, 'white') });
eng('srb', 'Space Shuttle SRB', 'Thiokol/ATK: РДТТ Space Shuttle', { prop: 'solid', solid: 1, propMass: 500000, burn: 124, IspV: 268, IspS: 242, mass: 90000, w: 3.7, h: 45.5, gim: 8, cost: 40e6, tier: 3, art: artSolid(2, 'white') });
function artSolid(k, col) {
  return [L('r', [-.5, -.4, .5, .5], col, 'c', { band: [k === 2 ? 5 : 3, .12, 'dark'] }), L('t', [.4, .5, .5, .3], col, 'c'), L('t', [-.5, -.38, .36, .5], 'dark', 'c', { glow: 1 })];
}
// РСУ
def({ id: 'draco', name: 'Draco', cat: 'engine', real: 'SpaceX Dragon: РСУ', tier: 1, cost: 200e3, mass: 1.5, w: .3, h: .3, rcs: 1, attach: 'radial', eng: { Fv: 400, IspV: 300, IspS: 250, prop: 'hypergolic', gim: 0, thrMin: 1, restarts: 99, rcs: true }, art: [L('r', [-.5, -.5, .5, .5], 'steel', 'c'), L('t', [-.5, -.2, .5, .5], 'dark', 'c', { glow: 1 })] });
def({ id: 'acs_ring', name: 'РСУ-кольцо (гидразин)', cat: 'engine', real: 'как у ступеней Centaur / Фрегат: 12 гидразиновых сопел по кольцу', tier: 0, cost: 350e3, mass: 25, w: 1.5, h: .45, rcs: 1, attach: 'stack', tank: { prop: 'mono' }, size: { dia: [.5, .75, 1, 1.25, 1.8, 2.5, 3.0, 3.7, 4.5, 5, 6], len: [.3, 1.5, .05] }, tankRes: 'mono', eng: { Fv: 200, IspV: 220, IspS: 190, prop: 'mono', gim: 0, thrMin: 1, restarts: 999, rcs: true, pair: true }, art: [L('r', [-.5, -.5, .5, .5], 'steel', 'c', { band: [3, .2, 'dark'] }), L('r', [-.5, -.1, -.38, .1], 'dark', 'c'), L('r', [.38, -.1, .5, .1], 'dark', 'c')] });
def({ id: 'mr111', name: 'MR-111C', cat: 'engine', real: 'Aerojet: Вояджер, Кассини, Rosetta', tier: 0, cost: 60e3, mass: .33, w: .2, h: .2, rcs: 1, attach: 'radial', eng: { Fv: 4.5, IspV: 229, IspS: 200, prop: 'mono', gim: 0, thrMin: 1, restarts: 99, rcs: true }, art: [L('r', [-.5, -.5, .5, .5], 'steel', 'c'), L('t', [-.5, -.2, .5, .5], 'dark', 'c', { glow: 1 })] });
def({ id: 'cold_gas', name: 'Азотный РД 1 Н', cat: 'engine', real: 'CubeSat: холодный газ (азот)', tier: 0, cost: 20e3, mass: .06, w: .1, h: .1, rcs: 1, attach: 'radial', eng: { Fv: 1, IspV: 70, IspS: 60, prop: 'mono', gim: 0, thrMin: 1, restarts: 99, rcs: true }, art: [L('r', [-.5, -.5, .5, .5], 'steel', 'c')] });

// ---------- Баки ----------
function tank(id, name, real, prop, o) {
  const P = PROPS[prop];
  return def({
    id, name, cat: 'tank', real, tier: o.tier || 0, cost: o.cost || 0, mass: 0, w: o.w, h: o.h, attach: 'both', crashV: 6, maxT: 800,
    tank: { prop }, size: { dia: o.dia || DIAS, len: o.len || [.5, 60, .25] }, tankRes: prop,
    art: o.art || [L('r', [-.5, -.5, .5, .5], o.col || 'white', 'c', { band: [o.bandP || 6, .12, o.bandC || 'grey'], rivet: 1 }), L('r', [-.5, .42, .5, .5], o.col2 || 'grey', 'c'), L('r', [-.5, -.5, .5, -.42], o.col2 || 'grey', 'c')]
  });
}
tank('tank_kerolox', 'Бак «керосин + О₂»', 'как у Falcon 9 / Atlas / Электрон', 'kerolox', { w: 3.7, h: 10, col: 'white', tier: 0 });
tank('tank_hydrolox', 'Бак «водород + О₂»', 'как у Space Shuttle ET / SLS / Centaur', 'hydrolox', { w: 5, h: 10, col: 'orange', col2: 'orange', bandC: 'orange', tier: 2 });
tank('tank_methalox', 'Бак «метан + О₂» (сталь)', 'как у Starship', 'methalox', { w: 4.5, h: 10, col: 'steel', col2: 'steel', bandC: 'dark', tier: 3 });
tank('tank_hypergolic', 'Бак гептил/АТ', 'как у ступеней «Протон», служебных модулей', 'hypergolic', { w: 1.8, h: 2.5, col: 'gold', col2: 'gold', bandC: 'dark', tier: 1, dia: [.3, .5, .75, 1, 1.25, 1.8, 2.5, 3.0, 3.7, 4.1], len: [.3, 20, .25] });
tank('tank_mono', 'Бак гидразина', 'шаровые/цилиндрические баки зондов', 'mono', { w: .6, h: 1, col: 'grey', col2: 'steel', bandC: 'dark', tier: 0, dia: [.2, .3, .5, .75, 1, 1.25, 1.8], len: [.2, 6, .1] });
tank('tank_lh2', 'Бак жидкого водорода', 'для ядерного двигателя NERVA', 'lh2', { w: 8.4, h: 12, col: 'white', col2: 'grey', bandC: 'grey', tier: 4, dia: [2.5, 3.7, 5, 6, 8.4, 10.1], len: [1, 40, .5] });
tank('tank_xenon', 'Бак ксенона', 'сфера высокого давления (Dawn, DS1)', 'xenon', { w: .5, h: .5, col: 'steel', col2: 'steel', bandC: 'dark', tier: 0, dia: [.15, .25, .35, .5, .75], len: [.15, 1, .05], art: [L('e', [0, 0, .5, .5], 'steel', 's'), L('r', [-.12, .42, .12, .5], 'dark', 'f')] });

// ---------- Конструкции ----------
def({ id: 'dec', name: 'Разделитель ступеней', cat: 'struct', real: 'пироболт + пружины / межступенчатый отсек', tier: 0, cost: 50e3, mass: 50, w: 3.7, h: .35, attach: 'stack', dec: { kind: 'stack' }, size: { dia: DIAS, len: null }, crashV: 8, art: [L('r', [-.5, -.5, .5, .5], 'dark', 'c', { band: [.35, .08, 'steel'] }), L('r', [-.5, -.05, .5, .05], 'orange', 'f')] });
def({ id: 'dec_radial', name: 'Боковой разделитель', cat: 'struct', real: 'узел крепления боковых ускорителей', tier: 0, cost: 80e3, mass: 60, w: .4, h: 1.2, attach: 'radial', dec: { kind: 'radial' }, crashV: 8, art: [L('r', [-.5, -.5, .5, .5], 'dark', 'c'), L('r', [-.5, -.1, .5, .1], 'orange', 'f')] });
def({ id: 'adapter', name: 'Переходник', cat: 'struct', real: 'конический межступенчатый переходник', tier: 0, cost: 30e3, mass: 0, w: 3.7, h: 2, w2: 1.8, attach: 'stack', size: { dia: DIAS, dia2: DIAS, len: [.25, 12, .25] }, art: [L('t', [-.5, .5, .5, .5], 'white', 'c', { adapt: 1 })] });
def({ id: 'nose', name: 'Носовой конус', cat: 'struct', real: 'аэродинамический обтекатель', tier: 0, cost: 20e3, mass: 0, w: 1.25, h: 2.5, attach: 'bottom', size: { dia: DIAS, len: [.5, 15, .25] }, cdAx: .12, art: [L('p', ogive(14, -.5, .5, .5), 'white', 'c')] });
def({ id: 'fairing', name: 'Головной обтекатель', cat: 'struct', real: 'как у Falcon 9 / Atlas V / Электрон', tier: 1, cost: 6e6, mass: 0, w: 5.2, h: 13, attach: 'bottom', fair: 1, size: { dia: DIAS, len: [1.5, 30, .5] }, cdAx: .15, crashV: 6, art: [L('p', ogive(16, -.5, .5, .5), 'white', 'c', { band: [4, .1, 'grey'] })] });
def({ id: 'adapter_payload', name: 'Адаптер полезной нагрузки', cat: 'struct', real: 'PAF 1666 / 937 (кольцо + пружинные толкатели)', tier: 0, cost: 40e3, mass: 0, w: 1.7, h: .3, attach: 'stack', dec: { kind: 'stack', spring: 1 }, size: { dia: [.3, .5, .75, 1, 1.25, 1.7, 2.5, 3.7], len: null }, art: [L('r', [-.5, -.5, .5, .5], 'dark', 'c'), L('r', [-.5, -.1, .5, .1], 'steel', 'f')] });
def({ id: 'strut', name: 'Балка', cat: 'struct', real: 'алюминиевая/углепластиковая ферма', tier: 0, cost: 5e3, mass: 0, w: .3, h: 2, attach: 'both', size: { dia: [.15, .3, .5, 1, 2], len: [.25, 20, .25] }, art: [L('r', [-.5, -.5, .5, .5], 'steel', 'c', { band: [1, .1, 'dark'] })] });
def({ id: 'fin', name: 'Стабилизатор', cat: 'struct', real: 'неподвижное оперение (как у Н-1, Атлас)', tier: 0, cost: 15e3, mass: 60, w: 1.2, h: 2.6, attach: 'radial', fin: { area: 3, grid: 0, authority: 0 }, size: { dia: [.3, .45, .6, .8, 1, 1.2, 1.6, 2, 2.5, 3.2], len: [.6, 8, .2] }, crashV: 7, art: [L('p', [-.5, -.5, .5, -.5, .5, .2, -.5, .5], 'steel', 'f'), L('r', [-.5, -.5, -.4, .5], 'dark', 'f')] });
def({ id: 'grid_fin', name: 'Решётчатый руль', cat: 'struct', real: 'SpaceX Falcon 9 (titanium)', tier: 1, cost: 120e3, mass: 90, w: 1.6, h: .5, attach: 'radial', fin: { area: 2.2, grid: 1, authority: 1 }, crashV: 6, art: [L('r', [-.5, -.5, .5, .5], 'steel', 'f', { grid: [.12, .25] })] });
def({ id: 'pv_small', name: 'Гермосфера 25 бар', cat: 'struct', real: 'титановый корпус зонда «Галилео»/«Гюйгенс»', tier: 1, cost: 600e3, mass: 70, w: .8, h: .8, attach: 'both', vessel: { crush: 2.5e6, inside: .85 }, crushP: 2.5e6, maxT: 1100, art: [L('e', [0, 0, .5, .5], 'steel', 's'), L('e', [0, 0, .32, .32], 'dark', 's')] });
def({ id: 'pv_venera', name: 'Гермокорпус «Венера» 100 бар', cat: 'struct', real: 'титановая сфера «Венера-13/14» (+ теплоизоляция)', tier: 2, cost: 5e6, mass: 600, w: 2.0, h: 2.0, attach: 'both', vessel: { crush: 1.2e7, inside: .85 }, crushP: 1.2e7, maxT: 1000, art: [L('e', [0, 0, .5, .5], 'gold', 's'), L('e', [0, 0, .36, .36], 'dark', 's'), L('r', [-.5, -.04, .5, .04], 'steel', 'f')] });

// ---------- Управление ----------
def({ id: 'cubesat', name: 'CubeSat 3U (шина)', cat: 'control', real: 'стандарт CubeSat 10×10×34 см, ~4 кг', tier: 0, cost: 200e3, mass: 4, w: .1, h: .34, attach: 'both', core: { torque: .0005, ec: 3, mini: 1 }, batt: 20, art: [L('r', [-.5, -.5, .5, .5], 'gold', 'c'), L('r', [-.5, -.5, -.35, .5], 'steel', 'f'), L('r', [.35, -.5, .5, .5], 'steel', 'f')] });
def({ id: 'core_bus', name: 'Бортовой компьютер RAD750', cat: 'control', real: 'BAE: Curiosity, JWST (+ звёздный датчик, ИДУ)', tier: 1, cost: 1.2e6, mass: 15, w: .6, h: .5, attach: 'both', core: { torque: .3, ec: 18 }, batt: 100, art: [L('r', [-.5, -.5, .5, .5], 'steel', 'c'), L('r', [-.38, -.25, .38, .25], 'gold', 'f'), L('e', [.2, .0, .1, .1], 'blue', 's')] });
def({ id: 'core_avionics', name: 'Авионика ракеты', cat: 'control', real: 'как у Falcon 9 (инерциальная + GPS) / Centaur', tier: 0, cost: 800e3, mass: 120, w: 1.25, h: .5, attach: 'both', core: { torque: 0, ec: 60, rocket: 1 }, batt: 1500, art: [L('r', [-.5, -.5, .5, .5], 'dark', 'c', { band: [.2, .05, 'steel'] }), L('r', [-.4, .1, .4, .3], 'gold', 'f')] });
def({ id: 'iu', name: 'Приборный отсек (IU)', cat: 'control', real: 'IBM/NASA: Saturn V, 6,6 м, 1995 кг', tier: 3, cost: 6e6, mass: 1995, w: 6.6, h: .9, attach: 'stack', core: { torque: 0, ec: 600, rocket: 1 }, batt: 8000, art: [L('r', [-.5, -.5, .5, .5], 'white', 'c', { band: [.45, .06, 'dark'] }), L('r', [-.5, -.5, .5, -.4], 'dark', 'c')] });
def({ id: 'rw_small', name: 'Маховики HR16', cat: 'control', real: 'Honeywell: реактивные колёса малых КА', tier: 1, cost: 300e3, mass: 9, w: .3, h: .3, attach: 'both', rw: { torque: 0.2, ec: 40 }, art: [L('r', [-.5, -.5, .5, .5], 'steel', 'c'), L('e', [0, 0, .3, .3], 'dark', 's')] });
def({ id: 'rw_hubble', name: 'Реактивный маховик RWA', cat: 'control', real: 'Teldix: Hubble — 0,8 Н·м', tier: 2, cost: 1.5e6, mass: 45, w: .5, h: .5, attach: 'both', rw: { torque: 0.8, ec: 100 }, art: [L('r', [-.5, -.5, .5, .5], 'steel', 'c'), L('e', [0, 0, .35, .35], 'dark', 's')] });
def({ id: 'cmg', name: 'Гиродин CMG', cat: 'control', real: 'Honeywell: МКС — 258 Н·м', tier: 3, cost: 12e6, mass: 272, w: 1.0, h: 1.0, attach: 'both', rw: { torque: 258, ec: 600 }, art: [L('r', [-.5, -.5, .5, .5], 'steel', 'c'), L('e', [0, 0, .38, .38], 'dark', 's'), L('r', [-.5, -.04, .5, .04], 'gold', 'f')] });

// ---------- Энергия ----------
function solar(id, name, real, tier, area, mass, w, h, cost, o) {
  return def(Object.assign({ id, name, cat: 'power', real, tier, cost, mass, w, h, attach: 'radial', solar: { area, eff: 0.29 * 0.88, deploy: true, track: !(o && o.fixed) }, crashV: 4, maxT: 420, art: [L('r', [-.5, -.5, .5, .5], 'solar', 'f', { grid: [.2, .1] }), L('r', [-.5, -.5, .5, -.44], 'steel', 'f')] }, o || {}));
}
solar('solar_body', 'Солнечные элементы на корпус', 'GaAs 3J (Spectrolab), CubeSat', 0, 0.3, 0.6, .3, 1.0, 40e3, { fixed: true, solar: { area: .3, eff: .25, deploy: false, track: false } });
solar('solar_small', 'Раскладная панель 4 м²', 'как у Mars Odyssey / Phoenix', 1, 4, 16, 4, .1, 400e3);
solar('solar_mid', 'Панель 20 м²', 'как у Juno (1 крыло ~ 20 м²)', 2, 20, 80, 10, .1, 3e6);
solar('solar_large', 'Ферма 120 м²', 'как панели МКС (ISS SAW ~ 375 м²)', 3, 120, 450, 24, .12, 12e6);
def({ id: 'mmrtg', name: 'ММРТГ', cat: 'power', real: 'Multi-Mission RTG: Curiosity, Perseverance — 110 Вт', tier: 2, cost: 100e6, mass: 45, w: .65, h: .66, attach: 'both', rtg: 110, heat: 2000, maxT: 1300, art: [L('r', [-.5, -.5, .5, .5], 'dark', 'c'), L('r', [-.5, -.5, .5, -.35], 'steel', 'f', { band: [.1, .03, 'steel'] }), L('r', [-.5, -.15, .5, -.02], 'steel', 'f'), L('r', [-.5, .2, .5, .33], 'steel', 'f')] });
def({ id: 'gphs', name: 'GPHS-РТГ', cat: 'power', real: 'Cassini, New Horizons — 300 Вт', tier: 3, cost: 120e6, mass: 56, w: .42, h: 1.14, attach: 'both', rtg: 300, heat: 4400, maxT: 1300, art: [L('r', [-.5, -.5, .5, .5], 'dark', 'c'), L('r', [-.5, -.38, .5, -.3], 'steel', 'f'), L('r', [-.5, .0, .5, .08], 'steel', 'f'), L('r', [-.5, .38, .5, .46], 'steel', 'f')] });
def({ id: 'batt_s', name: 'Li-ion батарея 0,2 кВт·ч', cat: 'power', real: 'малые КА (2 × MER 8 Ач)', tier: 0, cost: 20e3, mass: 2, w: .2, h: .15, attach: 'both', batt: 200, art: [L('r', [-.5, -.5, .5, .5], 'blue', 'c')] });
def({ id: 'batt_m', name: 'Li-ion батарея 2 кВт·ч', cat: 'power', real: 'зонды и ровер Perseverance', tier: 1, cost: 200e3, mass: 14, w: .4, h: .25, attach: 'both', batt: 2000, art: [L('r', [-.5, -.5, .5, .5], 'blue', 'c'), L('r', [-.4, -.1, .4, .1], 'steel', 'f')] });
def({ id: 'batt_l', name: 'Li-ion батарея 20 кВт·ч', cat: 'power', real: 'ступени-челноки, посадочные модули', tier: 2, cost: 1.5e6, mass: 130, w: .9, h: .5, attach: 'both', batt: 20000, art: [L('r', [-.5, -.5, .5, .5], 'blue', 'c'), L('r', [-.4, -.1, .4, .1], 'steel', 'f')] });

// ---------- Связь ----------
function ant(id, name, real, tier, gainDb, P, maxRate, w, h, mass, cost, art) {
  return def({ id, name, cat: 'comm', real, tier, cost, mass, w, h, attach: 'both', ant: { G: Math.pow(10, gainDb / 10), P, maxRate, ec: P * 3.2, deploy: w > 1 }, crashV: 4, maxT: 700, art });
}
ant('ant_lga', 'Антенна малого усиления', 'всенаправленная X-диапазон (LGA)', 0, 3, 10, 2e3, .1, .6, 1.2, 40e3, [L('r', [-.06, -.5, .06, .5], 'steel', 'c'), L('e', [0, .5, .4, .06], 'gold', 's')]);
ant('ant_mga', 'Антенна среднего усиления 0,5 м', 'рупорная MGA, как у Juno', 1, 20, 20, 50e3, .5, .5, 4, 200e3, [L('p', [-.5, .5, 0, -.4, .5, .5, 0, .2], 'white', 's'), L('r', [-.06, -.5, .06, -.2], 'steel', 'f')]);
ant('ant_hga15', 'Параболическая антенна 1,5 м', 'как у Mars Odyssey / MER', 2, 40, 25, 256e3, 1.5, 1.2, 12, 1.5e6, [L('p', [-.5, .5, -.4, .2, 0, 0, .4, .2, .5, .5, 0, .35], 'white', 's'), L('r', [-.03, -.5, .03, .1], 'steel', 'f')]);
ant('ant_hga37', 'Параболическая антенна 3,7 м', 'как у «Вояджера» (X/S, 23 Вт)', 3, 48, 23, 1e6, 3.7, 2.2, 100, 12e6, [L('p', [-.5, .5, -.42, .18, 0, -.1, .42, .18, .5, .5, 0, .3], 'white', 's'), L('r', [-.025, -.5, .025, 0], 'steel', 'f')]);
ant('ant_ka3', 'Антенна Ka 3 м (MRO)', 'Mars Reconnaissance Orbiter: 100 Вт X-диап.', 3, 51, 100, 6e6, 3, 1.8, 90, 20e6, [L('p', [-.5, .5, -.4, .15, 0, -.1, .4, .15, .5, .5, 0, .3], 'white', 's'), L('r', [-.03, -.5, .03, 0], 'steel', 'f')]);

// ---------- Посадка ----------
function leg(id, name, real, tier, mass, w, h, foot, cost, o) {
  return def(Object.assign({ id, name, cat: 'landing', real, tier, cost, mass, w, h, attach: 'radial', leg: { foot, tol: 8, k: 3, z: 0.8 }, crashV: 12, art: [L('p', [-.5, .5, -.35, .5, .5, -.5, .35, -.5], 'steel', 'f'), L('r', [.2, -.5, .5, -.42], 'dark', 'f')] }, o || {}));
}
leg('leg_f9', 'Посадочная опора (F9)', 'SpaceX Falcon 9: углеволокно + сотовые амортизаторы', 1, 525, 3.2, 7, [1.3, -3.5], 500e3, { leg: { foot: [1.6, -3.5], tol: 9, k: 2.5, z: .8 } });
leg('leg_lem', 'Посадочная опора LM', 'Grumman: лунный модуль «Аполлон»', 1, 150, 2.4, 3.5, [1.2, -1.75], 300e3, { leg: { foot: [1.2, -1.75], tol: 5, k: 2.5, z: .9 } });
leg('leg_probe', 'Лёгкая опора зонда', 'Phoenix / InSight (сминаемые)', 0, 4, 1.0, 1.0, [.5, -.5], 40e3, { leg: { foot: [.5, -.5], tol: 5, k: 3, z: 1 } });
function wheel(id, name, real, tier, mass, r, F, vmax, P, cost) {
  return def({ id, name, cat: 'rover', real, tier, cost, mass, w: r * 2, h: r * 2, attach: 'radial', wheel: { r, F, vmax, P }, crashV: 14, art: [L('e', [0, 0, .5, .5], 'dark', 's'), L('e', [0, 0, .32, .32], 'steel', 's'), L('r', [-.5, -.04, .5, .04], 'dark', 'f', { spokes: 1 })] });
}
wheel('wheel_msl', 'Колесо ровера (MSL)', 'Curiosity/Perseverance: Ø0,5 м, алюминий (v ≈ 0,2 м/с в игре)', 2, 8, .25, 280, .2, 110, 500e3);
wheel('wheel_lrv', 'Колесо LRV', 'Lunar Roving Vehicle: Ø0,82 м, проволочная сетка', 2, 5.5, .41, 160, 3.6, 220, 500e3);
// корпус вездехода: «тёплый ящик» с компьютером и аккумулятором; ширина меняется, колёса и мачта крепятся к нему
def({ id: 'rover_deck', name: 'Корпус вездехода', cat: 'rover', real: 'как герметичный контейнер «Лунохода» и корпус Curiosity: компьютер, аккумулятор и электроника, укрытые от холода', tier: 1, cost: 1.5e6, mass: 45, w: 1.4, h: .5, attach: 'both', core: { torque: .15, ec: 14 }, batt: 400, size: { dia: [.8, 1, 1.2, 1.4, 1.8, 2.2, 3], len: [.3, 1.2, .1] }, crashV: 8, art: [L('r', [-.5, -.5, .5, .5], 'steel', 'c'), L('r', [-.5, .2, .5, .5], 'gold', 'f'), L('r', [-.5, -.5, .5, -.34], 'dark', 'f'), L('r', [-.38, -.14, -.06, .08], 'blue', 'f'), L('e', [.3, -.02, .07, .07], 'blue', 's')] });
// мачта: поднимает камеру и антенну над корпусом, к ней же крепят панели
def({ id: 'rover_mast', name: 'Мачта вездехода', cat: 'rover', real: 'мачта камер Curiosity (≈ 2 м) / штанга антенны «Лунохода»', tier: 1, cost: 80e3, mass: 3, w: .1, h: 1, attach: 'both', size: { len: [.3, 2.5, .1] }, crashV: 6, art: [L('r', [-.5, -.5, .5, .5], 'steel', 'c', { band: [1, .06, 'dark'] })] });
wheel('wheel_lunokhod', 'Колесо «Лунохода»', 'Лавочкин: Ø0,51 м, 8 колёс', 2, 6, .255, 200, 1.0, 150, 400e3);
function chute(id, name, real, tier, mass, D, Cd, q, cost, o) {
  const A = Math.PI * D * D / 4;
  return def({ id, name, cat: 'landing', real, tier, cost, mass, w: .6, h: .4, attach: 'both', chute: { A, Cd, D, maxQ: q, deployT: o && o.t || 4, minP: o && o.minP || 0 }, crashV: 7, maxT: 650, art: [L('r', [-.5, -.5, .5, .5], 'orange', 'c'), L('r', [-.5, .3, .5, .5], 'dark', 'c')] });
}
chute('chute_sc', 'Парашют капсулы 1,6 м', 'Stardust/Genesis SRC', 0, 4, 1.6, 1.4, 1500, 100e3, { t: 2 });
chute('chute_drogue', 'Тормозной парашют 7 м', 'Orion: вытяжной/тормозной', 1, 25, 7, 0.8, 8000, 300e3, { t: 3 });
chute('chute_main', 'Основной парашют 25 м', 'Apollo: «ringsail» Ø25,4 м', 1, 150, 25.4, 1.2, 3500, 600e3, { t: 8 });
chute('chute_dgb', 'Сверхзвуковой парашют 21,5 м', 'Curiosity/Perseverance: ASPIRE DGB (Mars)', 2, 50, 21.5, 0.68, 1000, 3e6, { t: 5 });
function shield(id, name, real, tier, o) {
  return def({ id, name, cat: 'landing', real, tier, cost: o.cost, mass: 0, w: o.w, h: o.h || .3, attach: 'both', shield: { Hv: o.Hv, maxFlux: o.maxFlux, abl: o.abl, kgm2: o.kgm2, dia: o.w }, size: { dia: o.dias, len: null }, crashV: 9, maxT: o.maxT || 2400, art: [L('r', [-.5, -.5, .5, .5], o.col, 'c'), L('r', [-.5, -.5, .5, -.1], o.col2, 'c')] });
}
shield('shield_abl', 'Абляционный тепловой щит', 'PICA / Avcoat: Stardust, MSL, Orion', 1, { Hv: 30e6, maxFlux: 3e7, abl: 22, kgm2: 40, dias: [.5, .8, 1.25, 2, 2.5, 3.7, 4.5, 5, 6], w: 3, cost: 1.5e6, col: 'dark', col2: 'copper' });
shield('shield_tile', 'Керамические плитки', 'LI-900 / HRSI: Space Shuttle, Starship', 3, { Hv: 5e9, maxFlux: 1.1e6, abl: 14, kgm2: 22, dias: [1.25, 2.5, 3.7, 4.5, 6, 8.4, 9.0], w: 4.5, cost: 8e6, col: 'dark', col2: 'steel', maxT: 1900 });
def({ id: 'src', name: 'Возвращаемая капсула образцов', cat: 'landing', real: 'Stardust / Hayabusa2 SRC: Ø0,8 м, 46 кг, абляция + парашют', tier: 1, cost: 4e6, mass: 46, w: .8, h: .5, attach: 'both', samples: 6, src: 1, shield: { Hv: 30e6, maxFlux: 3e7, abl: 8, kgm2: 0, dia: .8, own: 1 }, chute: { A: 2.0, Cd: 1.4, D: 1.6, maxQ: 1500, deployT: 2, auto: 1 }, crashV: 25, maxT: 2400, art: [L('t', [-.5, .5, .5, .25], 'dark', 'c'), L('r', [-.5, -.5, .5, -.3], 'copper', 'c'), L('e', [0, .3, .15, .1], 'steel', 's')] });
def({ id: 'sample_box', name: 'Контейнер образцов', cat: 'landing', real: 'герметичные пробирки Perseverance (43 шт.)', tier: 2, cost: 2e6, mass: 12, w: .5, h: .3, attach: 'both', samples: 12, art: [L('r', [-.5, -.5, .5, .5], 'steel', 'c', { band: [.08, .02, 'dark'] })] });

// ---------- Наука ----------
// kind: cam/spec/seis/wx/mag/rad/radar/atm/lidar/drill/scoop ; sit: ситуации
function inst(id, name, real, tier, kind, mass, w, h, ec, data, time, sits, cost, extra) {
  return def(Object.assign({ id, name, cat: 'science', real, tier, cost, mass, w, h, attach: 'both', inst: { kind, ec, data, time, sits }, crashV: 5, art: [L('r', [-.5, -.5, .5, .5], 'steel', 'c'), L('r', [-.35, -.15, .35, .35], 'dark', 'f'), L('e', [0, .1, .2, .2], 'blue', 's')] }, extra || {}));
}
inst('i_mastcam', 'Камера Mastcam', 'MSL/Curiosity: Mastcam-34, 2 кг', 1, 'cam', 2, .25, .3, 10, 8, 20, ['landed', 'splashed', 'flyingLow'], 600e3);
inst('i_hirise', 'Камера высокого разрешения', 'MRO: HiRISE, 65 кг, 0,3 м/пикс с 300 км', 2, 'cam', 65, .6, 1.4, 60, 600, 200, ['spaceLow', 'flyingHigh'], 10e6, { art: [L('r', [-.5, -.5, .5, .5], 'white', 'c'), L('r', [-.4, .3, .4, .5], 'dark', 'f'), L('e', [0, .35, .3, .1], 'blue', 's')] });
inst('i_lorri', 'Телескопическая камера LORRI', 'New Horizons: Ø208 мм, 8,6 кг', 3, 'cam', 8.6, .4, .8, 8, 120, 60, ['spaceHigh', 'spaceLow'], 5e6);
inst('i_apxs', 'Рентгеновский спектрометр APXS', 'MSL: α-частицы + рентген, 1,7 кг', 1, 'spec', 1.7, .2, .25, 4, 1, 120, ['landed'], 800e3);
inst('i_chemcam', 'Лазерный спектрометр ChemCam', 'MSL: LIBS на 7 м, 10,7 кг', 2, 'spec', 10.7, .3, .6, 20, 6, 60, ['landed'], 3e6);
inst('i_grs', 'Гамма-спектрометр GRS', 'Mars Odyssey: поиск водорода, 30 кг', 2, 'spec', 30.5, .5, .6, 32, 20, 300, ['spaceLow'], 5e6);
inst('i_crism', 'ИК-спектрометр CRISM', 'MRO: минералогия, 30 кг', 3, 'spec', 30, .5, .6, 40, 200, 300, ['spaceLow', 'flyingHigh'], 8e6);
inst('i_seis', 'Сейсмометр SEIS', 'InSight: 3-осный, 29 кг (с колпаком)', 2, 'seis', 29.5, .6, .5, 6, 20, 600, ['landed'], 15e6);
inst('i_rems', 'Метеостанция REMS', 'MSL: давление, T, влажность, УФ; 1,3 кг', 1, 'wx', 1.3, .2, .3, 4, 0.5, 60, ['landed', 'flyingLow', 'splashed'], 500e3);
inst('i_hasi', 'Измеритель атмосферы HASI', 'Huygens: P, T, плотность, 6,3 кг', 1, 'wx', 6.3, .25, .3, 8, 2, 20, ['flyingLow', 'flyingHigh', 'landed'], 2e6);
inst('i_mag', 'Магнитометр', 'MAVEN MAG: феррозондовый, 2,6 кг', 0, 'mag', 2.6, .2, .3, 3, 0.5, 30, ['spaceLow', 'spaceHigh', 'flyingHigh', 'flyingLow', 'landed'], 400e3);
inst('i_rad', 'Детектор радиации RAD', 'MSL: энергичные частицы, 1,6 кг', 1, 'rad', 1.6, .2, .2, 4, 0.5, 60, ['spaceLow', 'spaceHigh', 'landed', 'flyingHigh'], 700e3);
inst('i_sharad', 'Радар-зондировщик SHARAD', 'MRO: подповерхностный лёд, 14 кг', 3, 'radar', 14, 1.2, .3, 80, 120, 300, ['spaceLow'], 9e6);
inst('i_ngims', 'Масс-спектрометр NGIMS', 'MAVEN: состав верхней атмосферы, 12 кг', 2, 'atm', 12, .3, .35, 30, 4, 60, ['flyingHigh', 'flyingLow', 'spaceLow'], 4e6);
inst('i_lola', 'Лазерный альтиметр', 'LRO/LOLA: рельеф 5 м, 12 кг', 2, 'lidar', 12.5, .3, .4, 40, 80, 300, ['spaceLow'], 6e6);
inst('i_drill', 'Бур (DRT)', 'MSL: сверло 1,6 см, до 5 см; 25 кг', 2, 'drill', 25, .5, .8, 40, 20, 120, ['landed'], 8e6, { sampleKind: 'rock' });
inst('i_scoop', 'Ковш (Robotic Arm)', 'Phoenix: 2,4 м, зачерпывает грунт; 5 кг', 1, 'scoop', 5, .3, 1.4, 20, 4, 90, ['landed'], 3e6, { sampleKind: 'soil' });

// ---------- Утилиты ----------
const pw = p => Math.max(p.w, p.w2 || 0);   // ширина габарита (у переходника — большая из двух)
function snapDia(x, list) { let b = list[0]; for (const d of list) if (Math.abs(d - x) < Math.abs(b - x)) b = d; return b; }
// размеры и массы экземпляра
function partCap(p) { const d = p.d; if (d.tank) { const P = PROPS[d.tank.prop]; return Math.PI * (p.w / 2) * (p.w / 2) * (p.h - p.w * 0.1) * 0.94 * P.rho * 0.97; } if (d.eng && d.eng.solid) return d.eng.propMass; if (d.samples) return 0; return 0; }
function partDry(p) {
  const d = p.d;
  if (d.tank) { const P = PROPS[d.tank.prop]; const cap = partCap(p); return Math.max(2, cap * P.frac + 3 * p.w * p.w * 0.35); }
  if (d.id === 'dec') return 25 * Math.PI * p.w * p.w / 4 + 15;
  if (d.id === 'adapter') return 10 * Math.PI * (p.w + (p.w2 || p.w)) / 2 * Math.hypot(p.h, Math.abs(p.w - (p.w2 || p.w)) / 2) + 20;
  if (d.id === 'nose') return 8 * Math.PI * p.w * p.h * 0.55 + 10;
  if (d.fair) return 11 * 0.85 * Math.PI * p.w * p.h + 40;
  if (d.id === 'adapter_payload') return 30 * Math.PI * p.w * p.w / 4 + 8;
  if (d.id === 'strut') return 18 * p.w * p.h * 4 + 3;
  if (d.id === 'rover_deck') return 45 * p.w * p.h + 12;
  if (d.id === 'rover_mast') return 30 * p.w * p.h + .3;
  if (d.fin) return d.mass * clamp(pw(p) * p.h / (d.w * d.h), .08, 10);   // масса растёт с площадью
  if (d.shield && !d.shield.own) return d.shield.kgm2 * Math.PI * p.w * p.w / 4 + d.shield.abl * Math.PI * p.w * p.w / 4;
  if (d.eng && !d.eng.solid && !d.eng.rcs) return d.mass * (p.n || 1);
  return d.mass;
}
function clusterW(w, n) { if (n <= 1) return w; const k = [1, 1, 2, 2.15, 2.41, 2.7, 3.0, 3.0, 3.3, 3.4][n] || (1.15 * Math.sqrt(n) + 0.2); return w * k; }
function partCost(p) {
  const d = p.d; let c = d.cost;
  if (d.tank) c = 1.5 * partCap(p) + 8000 * p.w; else if (d.id === 'dec') c = 30e3 + 15e3 * p.w * p.w; else if (d.fair) c = 0.4e6 + 55e3 * p.w * p.h; else if (d.id === 'adapter' || d.id === 'nose') c = 20e3 + 8e3 * p.w * p.h; else if (d.shield && !d.shield.own) c = d.cost * (p.w * p.w) / (d.shield.dia * d.shield.dia);
  if (d.eng && !d.eng.solid && !d.eng.rcs) c *= (p.n || 1);
  return c;
}
function propCost(prop) { return { kerolox: .8, hydrolox: 2.2, methalox: 1.0, hypergolic: 18, mono: 30, lh2: 4, xenon: 4000, solid: 6 }[prop] || 1; }
const SIT_NAMES = { landed: 'на поверхности', splashed: 'на воде', flyingLow: 'в нижней атмосфере', flyingHigh: 'в верхней атмосфере', spaceLow: 'на низкой орбите', spaceHigh: 'в дальнем космосе' };
const KIND_NAMES = { cam: 'Съёмка', spec: 'Спектрометрия', seis: 'Сейсмология', wx: 'Метеорология', mag: 'Магнитное поле', rad: 'Радиация', radar: 'Радиолокация', atm: 'Состав атмосферы', lidar: 'Лазерная топография', drill: 'Бурение', scoop: 'Забор грунта' };
