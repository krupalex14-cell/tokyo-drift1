'use strict';
// ============ Небесные тела: реальная Солнечная система, TRAPPIST-1, случайные системы ============
const MSUN = 1.98847e30, RSUN = 6.957e8, LSUN = 3.828e26, MEARTH = 5.9722e24, REARTH = 6.371e6;

// --- таблицы плотности атмосферы (высота км -> кг/м³), лог-интерполяция ---
function tabDens(tab) {
  const A = tab.map(p => p[0] * 1000), L = tab.map(p => Math.log(p[1]));
  const n = A.length;
  return function (alt) {
    if (alt <= A[0]) return Math.exp(L[0] + (L[0] - L[1]) / (A[1] - A[0]) * (A[0] - alt) * 0 + (alt - A[0]) * (L[1] - L[0]) / (A[1] - A[0]));
    if (alt >= A[n - 1]) return Math.exp(L[n - 1] + (alt - A[n - 1]) * (L[n - 1] - L[n - 2]) / (A[n - 1] - A[n - 2]));
    let i = 1; while (A[i] < alt) i++;
    const t = (alt - A[i - 1]) / (A[i] - A[i - 1]);
    return Math.exp(L[i - 1] + (L[i] - L[i - 1]) * t);
  };
}
function expDens(rho0, H) { return alt => rho0 * Math.exp(-alt / H); }
const EARTH_TAB = [[0, 1.225], [2, 1.007], [5, 0.7364], [10, 0.4135], [15, 0.1948], [20, 0.08891], [25, 0.04008], [30, 0.01841], [40, 0.003996], [50, 0.001027], [60, 3.097e-4], [70, 8.283e-5], [80, 1.846e-5], [90, 3.416e-6], [100, 5.604e-7], [110, 9.708e-8], [120, 2.222e-8], [150, 2.076e-9], [200, 2.541e-10], [250, 6.07e-11], [300, 1.916e-11], [400, 2.8e-12], [500, 5.2e-13], [700, 3e-14]];
const VENUS_TAB = [[0, 65], [10, 38], [20, 19], [30, 8.6], [40, 3.9], [50, 1.5], [60, 0.50], [70, 0.09], [80, 0.012], [100, 3e-4], [120, 2e-5], [150, 5e-7], [250, 1e-9]];
const TITAN_TAB = [[0, 5.3], [10, 3.8], [20, 2.6], [40, 1.0], [60, 0.4], [80, 0.15], [100, 0.06], [150, 0.01], [200, 2e-3], [300, 1e-4], [400, 1e-5], [500, 2e-6], [600, 5e-7], [800, 1e-8]];
function earthTemp(alt) { const k = alt / 1000; if (k < 11) return 288.15 - 6.5 * k; if (k < 20) return 216.65; if (k < 32) return 216.65 + (k - 20); if (k < 47) return 228.65 + 2.8 * (k - 32); if (k < 51) return 270.65; if (k < 71) return 270.65 - 2.8 * (k - 51); if (k < 86) return 214.65 - 2 * (k - 71); if (k < 150) return 186.9 + (k - 86) * 12; return 1000; }

// --- палитры биомов: [верх светл, верх тёмн, середина светл, середина тёмн, порода, порода тёмн] ---
const PAL = a => a.map(hex);

// ---------- Описание реальных тел ----------
// Орбитальные элементы: a [м], e, varpi [град] (долгота перицентра), L0 [град] (средняя долгота на J2000)
function RB(o) { return o; }
const SOLAR = [
  RB({
    id: 'sun', name: 'Солнце', kind: 'star', parent: null, M: MSUN, R: RSUN, rotP: 25.05 * DAY, lum: LSUN, color: '#ffd77a', landable: false,
    desc: 'Жёлтый карлик G2V. 99,86% массы Солнечной системы. Светимость 3,83·10²⁶ Вт.'
  }),
  RB({
    id: 'mercury', name: 'Меркурий', kind: 'planet', parent: 'sun', M: 3.3011e23, R: 2.4397e6, a: 0.38710 * AU, e: 0.20563, varpi: 77.456, L0: 252.251, rotP: 58.646 * DAY,
    temp: 440, color: '#9a928a', atm: null,
    terr: { seed: 11, oct: [[1 / 4, 1500, 0], [800e3, 700, 0], [150e3, 300, 0]], rough: [30e3, 90, 0.9, 1.2], crat: { dens: 0.6, dMax: 300e3, levels: 10, depth: 0.08 }, bias: [900e3, 700], siteH: 40 },
    biomes: [['Межкратерные равнины', '#8c857d,#6f6962,#6a645d,#4f4a45,#5b5650,#403c38'], ['Дно кратера', '#6b655e,#544f49,#4f4a45,#3a3632,#47433e,#2f2c29'], ['Вал кратера', '#a39b92,#7d766e,#756e66,#5a554e,#6b655d,#4b4640'], ['Уступы', '#7a746c,#5e5852,#5d5750,#443f3a,#504b45,#38342f']],
    biome: 'crater4', sky: null,
    desc: 'Самая близкая к Солнцу планета. Почти нет атмосферы, перепад температур от −180 до +430 °C. Ядро — около 85% радиуса. МЕССЕНДЖЕР (2011–2015) картировал планету целиком; в кратерах у полюсов найден водяной лёд.'
  }),
  RB({
    id: 'venus', name: 'Венера', kind: 'planet', parent: 'sun', M: 4.8675e24, R: 6.0518e6, a: 0.72333 * AU, e: 0.00677, varpi: 131.533, L0: 181.98, rotP: -243.02 * DAY,
    temp: 737, color: '#e3c07a',
    atm: { dens: tabDens(VENUS_TAB), Rs: 189, T0: 737, Tfn: a => Math.max(250, 737 - a / 1000 * 8.2), c: 410, comp: 'CO₂ 96,5%, N₂ 3,5%', p0: 9.2e6, sky: '#d9a55a', haze: '#e8c37a', o2: false, cloud: 55000 },
    terr: { seed: 22, oct: [[1 / 3, 1800, 0], [600e3, 900, 1], [100e3, 400, 0]], rough: [30e3, 60, 0.9, 1.5], crat: { dens: 0.04, dMax: 100e3, levels: 5, depth: 0.04 }, bias: [900e3, 900], siteH: 50 },
    biomes: [['Вулканические равнины', '#7a5a38,#5e4429,#5a4028,#3f2c1b,#4e3825,#352418'], ['Тессеры (горы)', '#8a6a48,#6b5035,#68492f,#4a3321,#5a4129,#3c2b1b'], ['Лавовые потоки', '#6a4c30,#503822,#4b3320,#38261a,#412c1b,#2e2014']],
    biome: 'elev3', sky: null,
    desc: 'Давление на поверхности 92 бар, температура 464 °C — жарче Меркурия. «Венера-7» (1970) — первый аппарат, передавший данные с поверхности другой планеты; «Венера-13» (1982) прожила 127 минут и прислала цветные снимки и анализ грунта.'
  }),
  RB({
    id: 'earth', name: 'Земля', kind: 'planet', parent: 'sun', M: MEARTH, R: REARTH, a: 1.00000 * AU, e: 0.01671, varpi: 102.947, L0: 100.464, rotP: 86164.1,
    temp: 288, color: '#4a86d8',
    atm: { dens: tabDens(EARTH_TAB), Rs: 287, T0: 288, Tfn: earthTemp, c: 330, comp: 'N₂ 78%, O₂ 21%', p0: 101325, sky: '#78aef0', haze: '#9ccaff', o2: true },
    sea: { level: 0, rho: 1025, color: '#2d63b8', deep: '#14336e' },
    terr: { seed: 33, oct: [[1 / 4, 2600, 0], [900e3, 1300, 0], [250e3, 700, 1], [60e3, 380, 1], [15e3, 130, 0]], rough: [4e3, 70, 0.85, 0.7], bias: [250e3, 900], siteH: 4, shift: -400 },
    biomes: [['Океан', '#d6c88f,#bfae75,#a99860,#8a7a4c,#6e6444,#544c34'], ['Побережье', '#e4d79c,#cdbb82,#b9a46b,#99854f,#80714c,#5e5238'], ['Равнины', '#5f9a3a,#4a7f2c,#6e5b3c,#54442d,#6a6a68,#4a4a49'], ['Леса', '#2f6f2c,#245a22,#5f4c32,#473823,#615f5c,#454442'], ['Пустыня', '#d8b46a,#c09a52,#b08a48,#8f6e36,#8a7350,#665338'], ['Холмы', '#7f9a4a,#667f3a,#7a6a4a,#5c4e35,#77746f,#524f4b'], ['Горы', '#8e8a84,#6c6963,#7a766f,#57544e,#6f6c67,#4d4b47'], ['Ледники', '#f2f6fa,#cddbe8,#dbe5ee,#b4c4d4,#98a9ba,#74879b']],
    biome: 'earth', sky: null,
    desc: 'Единственная известная обитаемая планета. Атмосфера — 21% кислорода (поэтому на Земле ракеты горят огненными шарами при авариях). Вторая космическая скорость 11,2 км/с. Первый спутник — «Спутник-1», 4 октября 1957 г.; первая посадка на Луну — «Луна-9», 1966 г.'
  }),
  RB({
    id: 'moon', name: 'Луна', kind: 'moon', parent: 'earth', M: 7.342e22, R: 1.7374e6, a: 3.844e8, e: 0.0549, varpi: 83.35, L0: 218.316, rotP: 27.3217 * DAY, locked: true,
    temp: 250, color: '#b8b6b0', atm: null,
    terr: { seed: 44, oct: [[1 / 3, 1700, 0], [500e3, 900, 0], [100e3, 400, 0]], rough: [10e3, 90, 0.9, 0.5], crat: { dens: 0.75, dMax: 220e3, levels: 11, depth: 0.1 }, bias: [500e3, 500], siteH: 30 },
    biomes: [['Нагорья', '#aaa8a2,#8f8d88,#86847f,#6b6a66,#716f6b,#53524f'], ['Моря (базальт)', '#74736f,#5c5b58,#5a5956,#454441,#4c4b48,#363533'], ['Дно кратера', '#8a8883,#6f6d69,#696763,#52514e,#5a5855,#40403d'], ['Вал кратера', '#bcbab4,#9a9893,#928f8a,#75736f,#7d7b77,#5c5b57']],
    biome: 'crater4', sky: null,
    desc: 'Единственный естественный спутник Земли. Ускорение свободного падения 1,62 м/с². «Луна-16» (1970) доставила образцы автоматически, «Луна-17» привезла «Луноход-1». Лунный грунт — реголит: стеклянная мелкая пыль, не имеющая эрозии.'
  }),
  RB({
    id: 'mars', name: 'Марс', kind: 'planet', parent: 'sun', M: 6.4171e23, R: 3.3895e6, a: 1.52371 * AU, e: 0.0934, varpi: 336.04, L0: 355.453, rotP: 88642.7,
    temp: 210, color: '#c2663a',
    atm: { dens: expDens(0.020, 11100), Rs: 188, T0: 210, Tfn: a => Math.max(130, 210 - a / 1000 * 2.2), c: 240, comp: 'CO₂ 95%, N₂ 2,8%, Ar 2%', p0: 610, sky: '#d9a273', haze: '#dcae85', o2: false, dust: 0.35 },
    terr: { seed: 55, oct: [[1 / 2.5, 3500, 0], [1200e3, 2200, 1], [200e3, 800, 0], [40e3, 250, 0]], rough: [8e3, 60, 0.85, 0.6], crat: { dens: 0.4, dMax: 150e3, levels: 9, depth: 0.07 }, dune: { amp: 9, lam: 220 }, bias: [500e3, 600], siteH: 20 },
    biomes: [['Равнины', '#b76a3e,#9a5630,#8a4d2d,#6c3a21,#6b3f27,#4e2c1b'], ['Дюны', '#c47a48,#a8643a,#995a34,#7c4627,#7a4a2d,#5b3320'], ['Кратер', '#a65f38,#8a4c2b,#7a4327,#5f321d,#5d3722,#442617'], ['Нагорья', '#a05a38,#844a2c,#774127,#5b311c,#5b3621,#43271a'], ['Вулканические склоны', '#7a4a38,#5f392b,#5b3426,#43261b,#46291d,#321d14']],
    biome: 'mars', sky: null,
    desc: 'Ледяная пустыня с атмосферой в 170 раз тоньше земной. Лёгкие парашюты работают слабо: посадка требует двигателей («небесный кран» Curiosity). «Викинг-1» (1976) сел на Хриса Планитиа, «Персеверанс» (2021) собирает образцы для возврата на Землю. Давление ~6 мбар.'
  }),
  RB({
    id: 'phobos', name: 'Фобос', kind: 'moon', parent: 'mars', M: 1.0659e16, R: 11.1e3, a: 9.376e6, e: 0.0151, varpi: 150, L0: 0, rotP: 0.3189 * DAY, locked: true,
    temp: 233, color: '#7f736a', atm: null,
    terr: { seed: 66, oct: [[1 / 2, 1100, 0], [1 / 6, 500, 0]], rough: [4e3, 60, 0.9, 0.5], crat: { dens: 0.8, dMax: 9e3, levels: 8, depth: 0.12 }, bias: [8e3, 200], siteH: 0 },
    biomes: [['Реголит', '#7f7268,#665a52,#5e534b,#493f39,#4b423c,#352e2a'], ['Стики́ни (кратер)', '#6e635a,#584e47,#51483f,#3d352f,#3f3731,#2b2622'], ['Борозды', '#8c7e73,#6f6359,#6a5e54,#52483f,#554b42,#3d352e']],
    biome: 'crater3', sky: null,
    desc: 'Ближайший к планете спутник Марса, вокруг которого он делает оборот за 7,7 ч. Гравитация всего 0,0057 м/с² — прыжок на 1 м/с покидает его навсегда? Нет: вторая космическая — 11,4 м/с. «Фобос-Грунт» (2011) должен был вернуть образцы, но не покинул околоземную орбиту.'
  }),
  RB({
    id: 'deimos', name: 'Деймос', kind: 'moon', parent: 'mars', M: 1.4762e15, R: 6.2e3, a: 2.3463e7, e: 0.0003, varpi: 20, L0: 100, rotP: 1.263 * DAY, locked: true,
    temp: 233, color: '#8a7d70', atm: null,
    terr: { seed: 67, oct: [[1 / 2, 400, 0], [1 / 6, 200, 0]], rough: [2e3, 25, 0.9, 0.5], crat: { dens: 0.5, dMax: 3e3, levels: 6, depth: 0.1 }, bias: [4e3, 100], siteH: 0 },
    biomes: [['Реголит', '#8a7d70,#6f6459,#675c52,#4f463f,#52493f,#3a332c']], biome: 'one', sky: null,
    desc: 'Меньший спутник Марса (радиус ~6 км). Покрыт толстым слоем мелкого реголита, сглаживающим кратеры.'
  }),
  RB({
    id: 'ceres', name: 'Церера', kind: 'dwarf', parent: 'sun', M: 9.3835e20, R: 4.73e5, a: 2.7675 * AU, e: 0.0758, varpi: 153.9, L0: 250, rotP: 9.074 * 3600,
    temp: 168, color: '#8a8782', atm: null,
    terr: { seed: 77, oct: [[1 / 3, 2400, 0], [300e3, 1200, 0], [60e3, 400, 0]], rough: [8e3, 90, 0.9, 0.6], crat: { dens: 0.7, dMax: 280e3, levels: 10, depth: 0.08 }, bias: [150e3, 400], siteH: 0 },
    biomes: [['Тёмные равнины', '#7a7874,#615f5b,#5c5a56,#464441,#494743,#33322f'], ['Дно кратера', '#6a6864,#53524e,#4e4c49,#3a3836,#3c3b38,#2a2928'], ['Яркие пятна (соли)', '#e8e6e0,#c4c2bb,#bdbbb4,#99978f,#8a8880,#6c6a64']],
    biome: 'crater3', sky: null,
    desc: 'Крупнейший объект пояса астероидов и единственная карликовая планета во внутренней Солнечной системе. Станция «Рассвет» (Dawn, 2015) обнаружила яркие пятна в кратере Оккатор — отложения карбонатов натрия.'
  }),
  RB({
    id: 'jupiter', name: 'Юпитер', kind: 'planet', parent: 'sun', M: 1.8982e27, R: 6.9911e7, a: 5.20288 * AU, e: 0.04839, varpi: 14.331, L0: 34.351, rotP: 35730,
    temp: 165, color: '#c9a77a', gas: true,
    atm: { dens: expDens(0.16, 27000), Rs: 3600, T0: 165, Tfn: a => 165 + Math.max(-200, a) * -0.0 + (a < 0 ? -a / 1000 * 1.6 : 0), c: 1000, comp: 'H₂ 90%, He 10%', p0: 1e5, sky: '#c9a77a', haze: '#d8b98a', o2: false, floor: -160e3 },
    biomes: [], desc: 'Газовый гигант: нет твёрдой поверхности. Радиус указан по уровню 1 бар. Зонд «Галилео» (1995) вошёл в атмосферу со скоростью 47,5 км/с и передавал данные 58 минут, пока давление не достигло 23 бар.'
  }),
  RB({
    id: 'io', name: 'Ио', kind: 'moon', parent: 'jupiter', M: 8.9319e22, R: 1.8216e6, a: 4.217e8, e: 0.0041, varpi: 50, L0: 106, rotP: 1.769 * DAY, locked: true,
    temp: 130, color: '#e0c24a', atm: null,
    terr: { seed: 88, oct: [[1 / 3, 2500, 0], [400e3, 1500, 1], [80e3, 500, 0]], rough: [10e3, 120, 0.9, 0.8], crat: { dens: 0.12, dMax: 60e3, levels: 4, depth: 0.03 }, bias: [200e3, 400], siteH: 0 },
    biomes: [['Серные равнины', '#e8d060,#c9ab3e,#b89a38,#8f7529,#8a6f2a,#65501d'], ['Горы', '#c8b890,#a69870,#a08f68,#7d6f4d,#6e6244,#4f4630'], ['Лавовые поля', '#3a3430,#2b2623,#2a2522,#1d1a18,#272220,#171413']],
    biome: 'elev3', sky: null,
    desc: 'Самое вулканически активное тело Солнечной системы: извержения до 400 км высотой. Приливный нагрев от Юпитера и Европы. Поверхность — серы и диоксид серы.'
  }),
  RB({
    id: 'europa', name: 'Европа', kind: 'moon', parent: 'jupiter', M: 4.7998e22, R: 1.5608e6, a: 6.71034e8, e: 0.0094, varpi: 100, L0: 176, rotP: 3.551 * DAY, locked: true,
    temp: 102, color: '#d8cdb8', atm: null,
    terr: { seed: 99, oct: [[1 / 3, 120, 0], [100e3, 50, 0]], rough: [6e3, 40, 0.8, 0.8], crat: { dens: 0.06, dMax: 30e3, levels: 4, depth: 0.04 }, bias: [200e3, 30], siteH: 0 },
    biomes: [['Ледяные равнины', '#e6ddca,#c9bfa8,#c2b8a2,#a09783,#9a9280,#756e5f'], ['Линеаменты (трещины)', '#b2886a,#8f6c52,#8a6a50,#6a503c,#664e3c,#4a382b']],
    biome: 'lines2', sky: null,
    desc: 'Под ледяной коркой толщиной 15–25 км — океан жидкой воды объёмом вдвое больше земных океанов. Главная цель поиска внеземной жизни: миссии Europa Clipper (2024) и JUICE.'
  }),
  RB({
    id: 'ganymede', name: 'Ганимед', kind: 'moon', parent: 'jupiter', M: 1.4819e23, R: 2.6341e6, a: 1.070412e9, e: 0.0013, varpi: 140, L0: 121, rotP: 7.155 * DAY, locked: true,
    temp: 110, color: '#a89c8c', atm: null,
    terr: { seed: 101, oct: [[1 / 3, 800, 0], [200e3, 400, 0]], rough: [10e3, 80, 0.9, 0.7], crat: { dens: 0.5, dMax: 100e3, levels: 9, depth: 0.06 }, bias: [300e3, 300], siteH: 0 },
    biomes: [['Тёмные области', '#6e6458,#58504a,#554b42,#40392f,#40382f,#2c2620'], ['Светлые борозды', '#b8b0a2,#958e82,#90887a,#6f695d,#686256,#4a463d'], ['Кратер', '#8a8174,#6f675c,#675f54,#4f4a41,#4d463d,#35312a']],
    biome: 'crater3', sky: null,
    desc: 'Крупнейший спутник Солнечной системы — больше Меркурия. Единственный спутник с собственным магнитным полем. Под поверхностью — солёный океан.'
  }),
  RB({
    id: 'callisto', name: 'Каллисто', kind: 'moon', parent: 'jupiter', M: 1.0759e23, R: 2.4103e6, a: 1.882709e9, e: 0.0074, varpi: 70, L0: 300, rotP: 16.689 * DAY, locked: true,
    temp: 134, color: '#5e564e', atm: null,
    terr: { seed: 102, oct: [[1 / 3, 500, 0], [150e3, 250, 0]], rough: [10e3, 60, 0.9, 0.7], crat: { dens: 0.95, dMax: 180e3, levels: 11, depth: 0.07 }, bias: [300e3, 200], siteH: 0 },
    biomes: [['Древние кратеры', '#6a6258,#534c43,#4f483f,#3c372f,#3c372f,#2a2620'], ['Ледяные пики', '#cfc8bb,#a8a194,#a29b8e,#7d776c,#6e6a60,#4d4a43']],
    biome: 'crater2', sky: null,
    desc: 'Самая древняя и самая кратерированная поверхность в системе (4 млрд лет без обновления). Находится вне радиационных поясов Юпитера — рассматривается как база для будущих экспедиций.'
  }),
  RB({
    id: 'saturn', name: 'Сатурн', kind: 'planet', parent: 'sun', M: 5.6834e26, R: 5.8232e7, a: 9.53667 * AU, e: 0.05415, varpi: 93.057, L0: 50.077, rotP: 38362,
    temp: 134, color: '#d6c28c', gas: true,
    atm: { dens: expDens(0.19, 59500), Rs: 3600, T0: 134, Tfn: a => 134 + (a < 0 ? -a / 1000 * 1.1 : 0), c: 800, comp: 'H₂ 96%, He 3%', p0: 1e5, sky: '#d6c28c', haze: '#e3d3a0', o2: false, floor: -300e3 },
    biomes: [], desc: 'Средняя плотность 0,69 г/см³ — меньше воды. «Кассини» (2004–2017) провела 13 лет на орбите и завершила миссию входом в атмосферу.'
  }),
  RB({
    id: 'titan', name: 'Титан', kind: 'moon', parent: 'saturn', M: 1.3452e23, R: 2.5747e6, a: 1.22187e9, e: 0.0288, varpi: 180, L0: 163, rotP: 15.945 * DAY, locked: true,
    temp: 94, color: '#d1a050',
    atm: { dens: tabDens(TITAN_TAB), Rs: 296, T0: 94, Tfn: a => Math.max(70, 94 - a / 1000 * 0.5), c: 195, comp: 'N₂ 95%, CH₄ 5%', p0: 146700, sky: '#c88a3a', haze: '#d9a04e', o2: false },
    sea: { level: -140, rho: 450, color: '#2a2418', deep: '#141008' },
    terr: { seed: 103, oct: [[1 / 3, 260, 0], [300e3, 200, 0], [40e3, 80, 0]], rough: [10e3, 30, 0.8, 0.6], dune: { amp: 70, lam: 2200 }, bias: [200e3, 150], siteH: 0 },
    biomes: [['Равнины', '#8a6a3c,#6f552f,#664d2a,#503b20,#4a3822,#352718'], ['Дюны', '#4a3a24,#382b1b,#33281a,#251c12,#261e13,#1a140d'], ['Озёра метана', '#3a301c,#2c2415,#2a2214,#1d180e,#1e190f,#13100a'], ['Ледяные холмы', '#a8946a,#857450,#7e6e4c,#615539,#58502f,#403a24']],
    biome: 'titan', sky: null,
    desc: 'Единственный спутник с плотной атмосферой (1,47 бар) и жидкими озёрами — но из метана и этана, при −179 °C. Зонд «Гюйгенс» (2005) опустился на парашюте за 2,5 ч и 72 мин работал на поверхности. Из-за плотного воздуха и малой гравитации человек мог бы летать, махая крыльями.'
  }),
  RB({
    id: 'enceladus', name: 'Энцелад', kind: 'moon', parent: 'saturn', M: 1.08e20, R: 2.5223e5, a: 2.37948e8, e: 0.0047, varpi: 30, L0: 200, rotP: 1.37 * DAY, locked: true,
    temp: 75, color: '#f0f3f6', atm: null,
    terr: { seed: 104, oct: [[1 / 3, 200, 0], [60e3, 90, 0]], rough: [5e3, 25, 0.8, 0.6], crat: { dens: 0.3, dMax: 20e3, levels: 5, depth: 0.05 }, bias: [60e3, 40], siteH: 0 },
    biomes: [['Чистый лёд', '#f4f7fa,#d4dde6,#cfd8e1,#a9b4bf,#99a5b2,#778491'], ['«Тигровые полосы» (разломы)', '#b9d4e6,#8fb0c8,#86a6bd,#667f92,#5f7a90,#445a6b']],
    biome: 'lines2', sky: null,
    desc: 'Из разломов на южном полюсе бьют гейзеры воды — «Кассини» пролетала через них и обнаружила органику и молекулярный водород: признаки гидротермальной активности.'
  }),
  RB({
    id: 'uranus', name: 'Уран', kind: 'planet', parent: 'sun', M: 8.681e25, R: 2.5362e7, a: 19.18917 * AU, e: 0.04717, varpi: 173.005, L0: 314.055, rotP: -62064,
    temp: 76, color: '#9fd8dc', gas: true,
    atm: { dens: expDens(0.42, 27700), Rs: 3600, T0: 76, Tfn: a => 76 + (a < 0 ? -a / 1000 * 0.9 : 0), c: 560, comp: 'H₂ 83%, He 15%, CH₄ 2%', p0: 1e5, sky: '#9fd8dc', haze: '#b4e4e6', o2: false, floor: -150e3 },
    biomes: [], desc: 'Ледяной гигант, лежащий «на боку» (наклон оси 98°). Единственный визит — «Вояджер-2» (1986).'
  }),
  RB({
    id: 'neptune', name: 'Нептун', kind: 'planet', parent: 'sun', M: 1.02413e26, R: 2.4622e7, a: 30.06992 * AU, e: 0.00859, varpi: 48.124, L0: 304.349, rotP: 57996,
    temp: 72, color: '#4668d8', gas: true,
    atm: { dens: expDens(0.45, 20000), Rs: 3600, T0: 72, Tfn: a => 72 + (a < 0 ? -a / 1000 * 0.9 : 0), c: 560, comp: 'H₂ 80%, He 19%, CH₄ 1%', p0: 1e5, sky: '#4668d8', haze: '#6682e8', o2: false, floor: -150e3 },
    biomes: [], desc: 'Самые быстрые ветры в системе — до 2100 км/ч. Единственный визит — «Вояджер-2» (1989).'
  }),
  RB({
    id: 'triton', name: 'Тритон', kind: 'moon', parent: 'neptune', M: 2.14e22, R: 1.3534e6, a: 3.54759e8, e: 0.00002, varpi: 0, L0: 40, rotP: -5.877 * DAY, locked: true,
    temp: 38, color: '#d9c8c0',
    atm: { dens: expDens(3e-5, 14000), Rs: 297, T0: 38, Tfn: a => 38, c: 130, comp: 'N₂ 99,9%', p0: 1.4, sky: '#b8a8a8', haze: '#c8b8b8', o2: false },
    terr: { seed: 105, oct: [[1 / 3, 400, 0], [50e3, 200, 0]], rough: [8e3, 60, 0.85, 0.7], crat: { dens: 0.1, dMax: 30e3, levels: 4, depth: 0.04 }, bias: [150e3, 100], siteH: 0 },
    biomes: [['Азотный лёд', '#e8d8d0,#c9b8b0,#c0b0a8,#9c8e88,#8d7f79,#6b5f5b'], ['Дынная корка', '#b09890,#8f7a74,#88746d,#695750,#625049,#473934']],
    biome: 'lines2', sky: null,
    desc: 'Единственный крупный спутник с обратным (ретроградным) движением — вероятно, захвачен из пояса Койпера. Гейзеры азота; −235 °C — один из самых холодных объектов, которые мы видели вблизи.'
  }),
  RB({
    id: 'pluto', name: 'Плутон', kind: 'dwarf', parent: 'sun', M: 1.303e22, R: 1.1883e6, a: 39.48 * AU, e: 0.2488, varpi: 224.07, L0: 238.93, rotP: -6.387 * DAY,
    temp: 44, color: '#d6b79a',
    atm: { dens: expDens(1e-5, 50000), Rs: 297, T0: 40, Tfn: a => 40, c: 140, comp: 'N₂, CH₄, CO', p0: 1, sky: '#8a96b0', haze: '#9aa6c0', o2: false },
    terr: { seed: 106, oct: [[1 / 3, 2000, 1], [300e3, 1200, 0], [40e3, 400, 0]], rough: [10e3, 60, 0.85, 0.7], crat: { dens: 0.2, dMax: 100e3, levels: 6, depth: 0.05 }, bias: [200e3, 200], siteH: 0 },
    biomes: [['Равнина азотного льда', '#f0e4d4,#d4c6b4,#cbbfae,#a89c8c,#9a8e80,#75695d'], ['Горы водяного льда', '#b8aaa0,#968880,#8f817a,#716560,#665a56,#4a413e'], ['Толины (красные)', '#9a5a40,#7c4631,#74402c,#58321f,#563422,#3d2417']],
    biome: 'elev3', sky: null,
    desc: 'Пролёт «Новых горизонтов» (2015) показал сердцеобразную равнину Спутник — гигантский ледник азота, моложе 10 млн лет. Горы из водяного льда высотой до 3,5 км.'
  }),
  RB({
    id: 'charon', name: 'Харон', kind: 'moon', parent: 'pluto', M: 1.586e21, R: 6.06e5, a: 1.9596e7, e: 0.0002, varpi: 0, L0: 60, rotP: -6.387 * DAY, locked: true,
    temp: 53, color: '#9c968e', atm: null,
    terr: { seed: 107, oct: [[1 / 3, 1500, 0], [200e3, 700, 0]], rough: [8e3, 50, 0.9, 0.7], crat: { dens: 0.3, dMax: 80e3, levels: 8, depth: 0.05 }, bias: [100e3, 150], siteH: 0 },
    biomes: [['Серые равнины', '#9c968e,#7b766f,#767068,#5b5751,#58534d,#3f3c38'], ['Каньоны', '#8a7a70,#6e6159,#685c54,#51473f,#4c433b,#352f29']],
    biome: 'lines2', sky: null,
    desc: 'Харон и Плутон вращаются вокруг общего центра масс вне Плутона — это двойная система. Красная шапка на полюсе — толины из метана, улетевшего с Плутона.'
  })
];

// ---- TRAPPIST-1 (реальные орбиты и размеры; поверхности и атмосферы — гипотетические) ----
const TRAPPIST_PLANETS = [
  ['b', 0.01154, 1.510826, 1.116, 1.374, 0.006, 'hot'], ['c', 0.0158, 2.421937, 1.097, 1.308, 0.007, 'hot'], ['d', 0.02227, 4.049219, 0.788, 0.388, 0.008, 'thin'],
  ['e', 0.02925, 6.101013, 0.92, 0.692, 0.005, 'earth'], ['f', 0.03849, 9.20754, 1.045, 1.039, 0.01, 'ocean'], ['g', 0.04683, 12.35294, 1.129, 1.321, 0.002, 'ice'], ['h', 0.06189, 18.767, 0.755, 0.326, 0.006, 'ice']
];

// ============ Построение универсума ============
let _bodySeed = 1;
function finishBody(b, parentBody, starBody) {
  b.gm = G * b.M; b.mass = b.M;
  b.g = b.gm / (b.R * b.R);
  b.vesc = Math.sqrt(2 * b.gm / b.R);
  if (b.parent) {
    const P = parentBody;
    const a = b.a, mu = P.gm;
    b.orb = { a, e: b.e || 0, w: (b.varpi || 0) * PI / 180, n: Math.sqrt(mu / (a * a * a)) };
    b.orb.M0 = wrapPI((b.L0 * PI / 180) - b.orb.w);
    b.period = TAU / b.orb.n;
    b.soi = a * Math.pow(b.M / P.M, 0.4);
    b.hill = a * (1 - (b.e || 0)) * Math.cbrt(b.M / (3 * P.M));
    // сфера влияния не должна выходить за холм
    b.soi = Math.max(Math.min(b.soi, b.hill * 0.95), b.R * 4);   // у крошечных тел SOI не меньше 4 радиусов (игровое допущение)
  } else { b.soi = Infinity; }
  if (b.locked) b.rotP = (b.rotP < 0 ? -1 : 1) * (b.period || Math.abs(b.rotP));
  b.rotW = b.rotP ? TAU / b.rotP : 0;
  b.rot0 = ((hashStr(b.id) % 1000) / 1000) * TAU;
  b.children = [];
  b.color = typeof b.color === 'string' ? hex(b.color) : b.color;
  if (b.atm) {
    const A = b.atm;
    // граница атмосферы: плотность < 1e-6 кг/м³
    let top = 0; const lim = 1e-6;
    if (A.dens(0) > lim) { top = 1000; while (A.dens(top) > lim && top < 3e6) top += 1000; }
    A.top = top; A.rho0 = A.dens(0);
    A.sky = hex(A.sky); A.haze = hex(A.haze);
    A.pEdge = 0;
    A.scaleH = A.dens(0) / Math.max(1e-30, Math.abs((A.dens(5000) - A.dens(0)) / 5000));
    // крит. давление на высоте
    A.press = alt => A.dens(alt) * A.Rs * A.Tfn(alt);
    A.temp = alt => A.Tfn(alt);
  }
  b.landable = b.kind !== 'star' && !b.gas;
  b.hasSurface = b.landable;
  // ситуации науки: границы
  b.spaceLow = b.atm ? Math.max(b.atm.top * 2.5, b.R * 0.35) : Math.max(b.R * 0.3, 30e3);
  b.safeAlt = (b.atm ? b.atm.top : 0) + (b.landable ? Math.max(5e3, b.R * 0.005) : 0);
  if (b.terr) buildTerrain(b);
  if (b.biomes && b.biomes.length) b.pal = b.biomes.map(x => ({ name: x[0], c: PAL(x[1].split(',')) }));
  return b;
}

function Universe(def) {
  this.name = def.name; this.bodies = []; this.byId = {};
  this.home = def.home; this.star = def.star || def.bodies[0].id;
  for (const d of def.bodies) { const b = Object.assign({}, d); this.bodies.push(b); this.byId[b.id] = b; }
  for (const b of this.bodies) { const P = b.parent ? this.byId[b.parent] : null; finishBody(b, P, null); if (P) P.children.push(b); b.idx = this.bodies.indexOf(b); }
  this.root = this.byId[this.star];
  this.siteTheta = 0;
  this.kind = def.kind; this.seed = def.seed || 0;
  this.lum = this.root.lum || LSUN;
}
Universe.prototype.get = function (id) { return this.byId[id]; };
Universe.prototype.irradiance = function (distFromStar) { return this.lum / (4 * PI * distFromStar * distFromStar); };

function makeSolarSystem() { return new Universe({ name: 'Солнечная система', kind: 'solar', home: 'earth', bodies: SOLAR }); }

// ---- генераторы случайных поверхностей для гипотетических миров ----
const NAME_A = ['Ак', 'Бел', 'Вор', 'Гел', 'Дра', 'Зен', 'Кор', 'Лир', 'Мен', 'Нор', 'Окс', 'Пир', 'Рен', 'Сир', 'Тал', 'Урк', 'Фел', 'Хар', 'Эри', 'Юн', 'Ява', 'Ари'];
const NAME_B = ['тис', 'мар', 'дон', 'лис', 'рон', 'вен', 'сад', 'кор', 'бис', 'тан', 'гол', 'пол', 'нис', 'рим', 'зар', 'лон'];
function randName(r) { return NAME_A[(r() * NAME_A.length) | 0] + NAME_B[(r() * NAME_B.length) | 0]; }

const FAM = {
  rock: [['Равнины', '#8a7a68,#6e6050,#665848,#4d4136,#4a4036,#342c25'], ['Кратер', '#776859,#5d5044,#564a3d,#3f352c,#3c332b,#29231d'], ['Нагорья', '#9a8a76,#7c6d5b,#74664f,#584c3b,#54493b,#3b332a']],
  red: [['Равнины', '#b26a48,#955638,#85492f,#683823,#64392a,#47271d'], ['Дюны', '#c47c52,#a5663f,#975b38,#78472b,#764a30,#573522'], ['Нагорья', '#9a5a3e,#7e4a33,#6e3f2b,#533020,#53301f,#3b2216']],
  ice: [['Ледяные поля', '#e0eaf2,#bccbd8,#b4c4d2,#90a2b2,#8396a8,#617388'], ['Трещины', '#a8c2d8,#86a2bb,#7d9ab4,#607a92,#586f86,#41566b'], ['Торосы', '#f2f6fa,#d0dce8,#c6d4e0,#a2b2c2,#98a8b8,#728498']],
  green: [['Равнины', '#5f9a3a,#4a7f2c,#6e5b3c,#54442d,#6a6a68,#4a4a49'], ['Леса', '#2f6f2c,#245a22,#5f4c32,#473823,#615f5c,#454442'], ['Холмы', '#7f9a4a,#667f3a,#7a6a4a,#5c4e35,#77746f,#524f4b'], ['Горы', '#8e8a84,#6c6963,#7a766f,#57544e,#6f6c67,#4d4b47']],
  dark: [['Равнины', '#5a5654,#46423f,#403c3a,#2f2c2a,#2d2a28,#1f1d1c'], ['Кратер', '#4a4644,#383533,#34312f,#262322,#242120,#181615'], ['Хребты', '#6a6563,#524e4c,#4b4745,#38352f,#363230,#252322']]
};
function genRockyTerrain(r, p) {
  const seed = (r() * 1e6) | 0;
  const amp = (p.amp || 2000) * (0.6 + r() * 0.8);
  return {
    seed, oct: [[1 / 3, amp, 0], [600e3 * (p.scale || 1), amp * 0.45, 1], [120e3 * (p.scale || 1), amp * 0.2, 0]],
    rough: [12e3 * (p.scale || 1), amp * 0.04, 0.9, 0.8], crat: p.crat === 0 ? null : { dens: p.crat != null ? p.crat : 0.4, dMax: 250e3 * (p.scale || 1), levels: 9, depth: 0.07 },
    dune: p.dune ? { amp: 10, lam: 250 } : null, bias: [500e3 * (p.scale || 1), 600], siteH: p.siteH != null ? p.siteH : 20, shift: p.shift || 0
  };
}
function sysPlanet(r, id, name, parentId, M, R, a, e, L0, rotP, kind, locked) {
  return { id, name, parent: parentId, kind, M, R, a, e, varpi: r() * 360, L0, rotP, locked };
}

function makeTrappist() {
  const r = rng(1234567);
  const star = { id: 'trappist1', name: 'TRAPPIST-1', kind: 'star', parent: null, M: 0.0898 * MSUN, R: 0.1192 * RSUN, rotP: 3.3 * DAY, lum: 5.53e-4 * LSUN, color: '#ff7a3a', landable: false, desc: 'Ультрахолодный красный карлик в созвездии Водолея, 40,7 св. лет от нас. Семь землеподобных планет, три в зоне обитаемости (Gillon et al., 2017; Agol et al. 2021). Ниже — их реальные орбиты, массы и радиусы; рельеф и атмосферы выдуманы.' };
  const bodies = [star];
  for (const [l, aAU, P, rr, mm, ee, fam] of TRAPPIST_PLANETS) {
    const R = rr * REARTH, M = mm * MEARTH;
    const a = Math.cbrt(G * star.M * Math.pow(P * DAY / TAU, 2));
    const id = 'trappist1' + l;
    const base = { id, name: 'TRAPPIST-1 ' + l, parent: 'trappist1', kind: 'planet', M, R, a, e: ee, varpi: r() * 360, L0: r() * 360, rotP: P * DAY, locked: true, desc: 'Планета TRAPPIST-1 ' + l + ': радиус ' + rr + ' R⊕, масса ' + mm + ' M⊕, период ' + P + ' сут (реальные данные). Она приливно захвачена звездой: одна сторона всегда обращена к ней. Поверхность и атмосфера смоделированы произвольно.' };
    if (fam === 'hot') {
      Object.assign(base, { temp: 500, color: '#b0623a', atm: { dens: expDens(40, 14000), Rs: 189, T0: 520, Tfn: a => Math.max(300, 520 - a / 1000 * 6), c: 380, comp: 'CO₂ (модель)', p0: 4e6, sky: '#b87a46', haze: '#c88c58', o2: false }, biomes: FAM.red, terr: genRockyTerrain(r, { amp: 1500, crat: 0.1 }), biome: 'elev3' });
    } else if (fam === 'thin') {
      Object.assign(base, { temp: 280, color: '#8a7a68', atm: { dens: expDens(0.05, 9000), Rs: 189, T0: 280, Tfn: a => Math.max(150, 280 - a / 1000 * 4), c: 250, comp: 'CO₂ (модель)', p0: 5e3, sky: '#a8825a', haze: '#b8926a', o2: false }, biomes: FAM.rock, terr: genRockyTerrain(r, { amp: 1800, crat: 0.4 }), biome: 'elev3' });
    } else if (fam === 'earth') {
      Object.assign(base, { temp: 285, color: '#5aa06a', atm: { dens: expDens(1.15, 8200), Rs: 287, T0: 285, Tfn: a => Math.max(200, 285 - a / 1000 * 6), c: 330, comp: 'N₂ + O₂ (модель)', p0: 95000, sky: '#c98a68', haze: '#d9a07a', o2: true }, sea: { level: -300, rho: 1020, color: '#2d6a8a', deep: '#123a52' }, biomes: FAM.green, terr: genRockyTerrain(r, { amp: 2400, crat: 0.03, siteH: 12, shift: -200 }), biome: 'elev4' });
    } else if (fam === 'ocean') {
      Object.assign(base, { temp: 270, color: '#4a7aa8', atm: { dens: expDens(1.6, 9000), Rs: 287, T0: 270, Tfn: a => Math.max(190, 270 - a / 1000 * 6), c: 320, comp: 'N₂ + CO₂ (модель)', p0: 130000, sky: '#b87a58', haze: '#c88c68', o2: false }, sea: { level: 200, rho: 1010, color: '#2a5a82', deep: '#10304e' }, biomes: FAM.ice, terr: genRockyTerrain(r, { amp: 1800, crat: 0.05, siteH: 300, shift: 0 }), biome: 'elev3' });
    } else {
      Object.assign(base, { temp: 160, color: '#c4d4e0', atm: null, biomes: FAM.ice, terr: genRockyTerrain(r, { amp: 1200, crat: 0.3 }), biome: 'elev3' });
    }
    bodies.push(base);
  }
  return new Universe({ name: 'TRAPPIST-1', kind: 'trappist', home: 'trappist1e', bodies, star: 'trappist1' });
}

function makeRandomSystem(seed) {
  const r = rng(seed * 7919 + 13);
  const sm = 0.6 + r() * 0.9;            // масса звезды (в массах Солнца)
  const star = { id: 'star', name: randName(r) + ' A', kind: 'star', parent: null, M: sm * MSUN, R: RSUN * Math.pow(sm, 0.8), rotP: 20 * DAY, lum: LSUN * Math.pow(sm, 3.5), color: sm > 1.1 ? '#fff0c8' : sm > 0.8 ? '#ffd77a' : '#ffb060', landable: false, desc: 'Звезда случайной системы (масса ' + sm.toFixed(2) + ' M☉).' };
  const bodies = [star]; const sysName = star.name.replace(' A', '');
  let a = (0.25 + r() * 0.35) * AU * Math.sqrt(sm); let idx = 0; let home = null;
  const nP = 5 + ((r() * 4) | 0);
  const hz = Math.sqrt(Math.pow(sm, 3.5)) * AU;   // зона обитаемости ~ sqrt(L)
  for (let i = 0; i < nP; i++) {
    const id = 'p' + (i + 1); const name = sysName + ' ' + ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'][i];
    const giant = a > hz * 2.5 && r() < 0.7 || (a > hz * 1.8 && r() < 0.25);
    let M, R, fam, atm = null, sea = null, biomes, terrp, biome = 'elev3', gas = false, temp, color, cmp;
    const Teq = 278 * Math.pow(sm, 0.875) * Math.pow(AU / a, 0.5) * 0.93; // грубо
    if (giant) {
      M = MEARTH * (20 + r() * 300); R = REARTH * (3.5 + Math.log10(M / MEARTH) * 1.5 + r() * 2); gas = true; temp = Math.max(60, Teq);
      const H = 20000 + r() * 40000; color = ['#c9a77a', '#d6c28c', '#9fd8dc', '#6a86d8', '#c8805a'][(r() * 5) | 0];
      atm = { dens: expDens(0.15 + r() * 0.3, H), Rs: 3600, T0: temp, Tfn: aa => temp + (aa < 0 ? -aa / 1000 : 0), c: 800, comp: 'H₂/He', p0: 1e5, sky: color, haze: color, o2: false, floor: -150e3 };
      biomes = [];
    } else {
      M = MEARTH * Math.pow(10, -1.2 + r() * 1.6); R = REARTH * Math.pow(M / MEARTH, 0.28);
      temp = Teq;
      const tooHot = Teq > 400, cold = Teq < 200;
      const wantAtm = r() < 0.6 && R > 0.5 * REARTH;
      if (wantAtm) {
        const kind = r();
        if (tooHot) { atm = { dens: expDens(20 + r() * 40, 14000), Rs: 189, T0: Teq + 150, Tfn: aa => Math.max(250, Teq + 150 - aa / 1000 * 6), c: 400, comp: 'CO₂ (модель)', p0: 5e6, sky: '#c8944f', haze: '#d9a460', o2: false }; fam = 'red'; }
        else if (cold) { atm = { dens: expDens(0.05 + r() * 0.5, 12000), Rs: 296, T0: Teq, Tfn: aa => Math.max(60, Teq - aa / 1000 * 1.5), c: 200, comp: 'N₂ (модель)', p0: 4e4, sky: '#9aa6c0', haze: '#aab6d0', o2: false }; fam = 'ice'; }
        else if (kind < 0.35 && Math.abs(a - hz) < hz * 0.6) { atm = { dens: expDens(1.1 + r() * 0.5, 8000), Rs: 287, T0: Teq + 10, Tfn: aa => Math.max(200, Teq + 10 - aa / 1000 * 6), c: 330, comp: 'N₂ + O₂ (модель)', p0: 1e5, sky: '#78aef0', haze: '#9ccaff', o2: true }; fam = 'green'; sea = { level: -200 + r() * 400, rho: 1020, color: '#2d63b8', deep: '#14336e' }; }
        else { atm = { dens: expDens(0.02 + r() * 0.9, 9000 + r() * 4000), Rs: 220, T0: Teq, Tfn: aa => Math.max(120, Teq - aa / 1000 * 4), c: 260, comp: 'CO₂ + N₂ (модель)', p0: 1e5, sky: '#c9996a', haze: '#d9a97a', o2: false }; fam = 'red'; }
      } else fam = cold ? 'ice' : r() < 0.5 ? 'rock' : 'dark';
      biomes = FAM[fam];
      terrp = genRockyTerrain(r, { amp: 800 + R / REARTH * 1800, crat: atm ? 0.12 : 0.65, dune: fam === 'red', siteH: sea ? 10 : 20, shift: sea ? -250 : 0 });
      color = { rock: '#9a8a76', red: '#b26a48', ice: '#d0dce8', green: '#4f9a5a', dark: '#6a6563' }[fam];
      if (atm && atm.o2 !== true) atm.o2 = false;
      if (r() < 0.2 && !atm) { atm = null; }
    }
    const per = Math.pow(a / AU, 1.5) / Math.sqrt(sm) * 365.25 * DAY;
    const body = { id, name, parent: 'star', kind: 'planet', M, R, a, e: r() * 0.12, varpi: r() * 360, L0: r() * 360, rotP: (gas ? 8 + r() * 10 : 12 + r() * 60) * 3600 * (r() < 0.12 ? -1 : 1), temp, color, atm, sea, gas, biomes, terr: terrp, biome: atm && atm.o2 ? 'elev4' : 'elev3', desc: 'Планета случайной системы «' + sysName + '». Размеры и состав сгенерированы (сид ' + seed + ').' };
    bodies.push(body);
    // луны
    const nM = giant ? (1 + ((r() * 3) | 0)) : (r() < 0.45 ? 1 : 0);
    let ma = R * (giant ? 5 + r() * 4 : 20 + r() * 20);
    const probe = { M, R };
    for (let j = 0; j < nM; j++) {
      const mM = MEARTH * Math.pow(10, -4 + r() * (giant ? 2.2 : 1.6)); const mR = REARTH * Math.pow(mM / MEARTH, 0.3) * 1.1;
      const fam2 = ['rock', 'ice', 'dark', 'red'][(r() * 4) | 0];
      const mid = id + 'm' + (j + 1);
      const hasAtm = !gas && mM > MEARTH * 0.02 && r() < 0.2;
      const matm = hasAtm ? { dens: expDens(0.5, 20000), Rs: 296, T0: Math.max(80, temp * 0.8), Tfn: aa => Math.max(60, temp * 0.8 - aa / 1000), c: 200, comp: 'N₂ (модель)', p0: 4e4, sky: '#b0a0c0', haze: '#c0b0d0', o2: false } : null;
      bodies.push({ id: mid, name: name + ' ' + String.fromCharCode(97 + j), parent: id, kind: 'moon', M: mM, R: mR, a: ma, e: r() * 0.05, varpi: r() * 360, L0: r() * 360, rotP: 1, locked: true, temp: temp * 0.9, color: { rock: '#9a8a76', red: '#b26a48', ice: '#d0dce8', dark: '#6a6563' }[fam2], atm: matm, biomes: FAM[fam2], terr: genRockyTerrain(r, { amp: 300 + mR / 1e3 * 0.7, crat: matm ? 0.2 : 0.8, scale: Math.max(0.1, mR / REARTH * 3) }), biome: 'crater3', desc: 'Спутник планеты «' + name + '» (сгенерирован).' });
      ma *= 1.6 + r();
    }
    if (!giant && !home && atm && atm.o2 || (!home && i === nP - 1)) home = id;
    a *= 1.45 + r() * 0.7;
  }
  // дом: каменистая планета с атмосферой ближе к зоне обитаемости
  let best = null, bd = 1e30;
  for (const b of bodies) if (b.parent === 'star' && !b.gas) { const d = Math.abs(Math.log(b.a / hz)) + (b.atm ? 0 : 1); if (d < bd) { bd = d; best = b; } }
  home = best ? best.id : bodies[1].id;
  const hb = bodies.find(b => b.id === home);
  // домашний мир должен иметь сушу и умеренную атмосферу для старта
  if (!hb.atm) { hb.atm = { dens: expDens(1.0, 8500), Rs: 287, T0: 280, Tfn: aa => Math.max(200, 280 - aa / 1000 * 6), c: 330, comp: 'N₂ + O₂ (модель)', p0: 9e4, sky: '#78aef0', haze: '#9ccaff', o2: true }; hb.biomes = FAM.green; hb.biome = 'elev4'; }
  hb.terr = genRockyTerrain(rng(seed + 5), { amp: 2200, crat: 0.03, siteH: 8, shift: -150 });
  hb.sea = hb.sea || { level: -200, rho: 1020, color: '#2d63b8', deep: '#14336e' };
  hb.name += ' (дом)';
  return new Universe({ name: 'Система ' + sysName + ' #' + seed, kind: 'random', seed, home, bodies, star: 'star' });
}

// ============ Рельеф ============
function buildTerrain(b) {
  const T = b.terr, C = TAU * b.R, seed = T.seed | 0;
  const oct = T.oct.map((o, i) => ({ N: Math.max(2, Math.round(o[0] < 1 ? (1 / o[0]) : C / o[0])), amp: o[1], ridge: o[2], seed: seed + 11 * i }));
  const rough = T.rough ? { lamMax: T.rough[0], amp: T.rough[1], H: T.rough[2], lamMin: T.rough[3] } : null;
  const crat = T.crat, dune = T.dune, bias = T.bias, siteH = T.siteH || 0, shift = T.shift || 0;
  const sea = b.sea ? b.sea.level : -1e12;
  let amax = 0; for (const o of oct) amax += o.amp; if (rough) amax += rough.amp * 2; if (crat) amax += C * 0.0; amax *= 1.05;
  b.hMaxEst = amax; b.hMinEst = -amax;
  const NB = Math.max(2, Math.round(C / 4000));
  const ro = []; if (rough) { let lam = rough.lamMax, a = rough.amp; for (let i = 0; i < 20 && lam >= rough.lamMin; i++) { ro.push({ lam, N: Math.max(2, Math.round(C / lam)), amp: a, seed: seed + 500 + i }); lam *= 0.5; a *= Math.pow(0.5, rough.H); } }
  const duneN1 = dune ? Math.max(2, Math.round(C / (dune.lam * 7))) : 2, duneN2 = Math.max(2, Math.round(C / 12000));
  const pn = (th, N, sd) => { const x = th * N / TAU; let i = Math.floor(x), f = x - i; i %= N; if (i < 0) i += N; let j = i + 1; if (j === N) j = 0; const a = hash2(i, sd), bb = hash2(j, sd); f = f * f * f * (f * (f * 6 - 15) + 10); return (a + (bb - a) * f) * 2 - 1; };
  const flatR = 120, flatBlend = 700;  // площадка 120 м, плавный переход 700 м
  const cs = crat ? { levels: crat.levels, dMax: crat.dMax, dens: crat.dens, depth: crat.depth } : null;
  let lastCrater = 0;  // 0 — нет, 1 — внутри, 2 — вал
  function craterSum(x, lod) {
    let sum = 0; lastCrater = 0;
    let D = cs.dMax;
    for (let k = 0; k < cs.levels; k++, D *= 0.45) {
      if (D < lod * 3) break;
      const s = D * 2.4, N = Math.max(1, Math.round(C / s)), cell = C / N;
      const i0 = Math.floor(x / cell);
      for (let di = -1; di <= 1; di++) {
        const i = i0 + di, im = ((i % N) + N) % N;
        if (hash2(im, seed + 1000 + k) > cs.dens) continue;
        const cx = (i + 0.15 + 0.7 * hash2(im, seed + 2000 + k)) * cell;
        const rad = D * 0.5 * (0.55 + 0.45 * hash2(im, seed + 3000 + k));
        const u = Math.abs(x - cx) / rad;
        if (u > 1.8) continue;
        const depth = cs.depth * rad * 2 * (0.6 + 0.4 * hash2(im, seed + 4000 + k));
        let f;
        if (u < 1) { const q = 1 - u * u; f = -depth * q * (0.8 + 0.2 * q); if (u < 0.85 && depth > 15) lastCrater = 1; }
        else { f = 0; }
        const dr = u - 1.05; f += depth * 0.28 * Math.exp(-dr * dr / 0.05) + depth * 0.08 * Math.exp(-(u - 1) * 1.2) * (u > 1 ? 1 : 0);
        if (u >= 0.9 && u < 1.25 && depth > 15 && !lastCrater) lastCrater = 2;
        sum += f;
      }
    }
    return sum;
  }
  const self = {
    C, maxH: amax, minH: -amax, NB,
    // высота рельефа [м] над R в точке th (рад, в системе тела); lod — наименьшая длина волны [м]
    h(th, lod) {
      lod = lod || 0.5;
      let e = shift;
      for (let i = 0; i < oct.length; i++) {
        const o = oct[i], n = pn(th, o.N, o.seed);
        e += o.amp * (o.ridge ? (1 - Math.abs(n)) * 1.6 - 0.8 : n);
      }
      for (let i = 0; i < ro.length; i++) { const o = ro[i]; if (o.lam < lod) break; e += o.amp * pn(th, o.N, o.seed); }
      const x = th / TAU * C, xx = ((x % C) + C) % C;
      if (cs) e += craterSum(xx, lod); else lastCrater = 0;
      if (dune) { const ph = TAU * xx / dune.lam; const m = 0.6 + 0.4 * pn(th, duneN1, seed + 777); e += dune.amp * m * (Math.sin(ph + 0.9 * Math.sin(ph * 0.5)) * 0.5 + 0.5 * Math.sin(ph * 2.1)) * 0.6 * smooth(-0.4, 0.2, pn(th, duneN2, seed + 778)); }
      if (bias) {
        const d = Math.abs(wrapPI(th)) * b.R;
        if (d < flatR + flatBlend + 4 * bias[0]) {
          e += bias[1] * Math.exp(-(d / bias[0]) * (d / bias[0]));
          const f = smooth(flatR, flatR + flatBlend, d);
          e = siteH + (e - siteH) * f;
        }
      }
      return e;
    },
    lastCrater() { return lastCrater; },
    bnoise(th, scaleM, salt) { return pnoise(th, Math.max(2, Math.round(C / scaleM)), seed + salt); },
    // индекс биома в th (h — высота, уже вычисленная)
    biome(th, hgt) {
      const nb = b.biomes ? b.biomes.length : 0; if (!nb) return 0;
      const mode = b.biome;
      const m = pnoise(th, NB, seed + 901), m2 = pnoise(th, Math.max(2, Math.round(C / 25000)), seed + 902);
      switch (mode) {
        case 'one': return 0;
        case 'earth': {
          if (hgt < sea) return 0; if (hgt < sea + 25) return 1;
          if (hgt > 4200) return 7; if (hgt > 2400) return 6; if (hgt > 900) return 5;
          if (m2 < -0.35) return 4; if (m > 0.3) return 3; return 2;
        }
        case 'elev4': {
          if (nb < 4) return Math.min(nb - 1, 0);
          if (b.sea && hgt < sea + 25) return 0; if (hgt > 3500) return 3; if (hgt > 1200) return 2; return m > 0.3 ? 1 : 0;
        }
        case 'elev3': { if (hgt > 1800) return 1; if (m2 < -0.35 && nb > 2) return 2; return 0; }
        case 'crater4': { const c = lastCrater; if (c === 1) return 2 < nb ? (nb > 3 ? 2 : 1) : 0; if (c === 2) return nb > 3 ? 3 : 0; return m2 < -0.1 ? 1 : 0; }
        case 'crater3': { const c = lastCrater; if (c === 1) return 1; if (c === 2) return Math.min(2, nb - 1); return 0; }
        case 'crater2': { const c = lastCrater; return c ? 1 : 0; }
        case 'lines2': { return (Math.abs(m) > 0.78) ? 1 : 0; }
        case 'mars': {
          if (hgt > 5000) return 4; if (dune && smooth(-0.4, 0.2, pnoise(th, Math.max(2, Math.round(C / 12000)), seed + 778)) > 0.5) return 1;
          if (lastCrater) return 2; if (hgt > 2000) return 3; return 0;
        }
        case 'titan': { if (hgt < sea + 4) return 2; if (dune && smooth(-0.4, 0.2, pnoise(th, Math.max(2, Math.round(C / 12000)), seed + 778)) > 0.5) return 1; if (hgt > 250) return 3; return 0; }
      }
      return 0;
    }
  };
  b.T = self;
  return self;
}

// ---- вспомогательное: ссылка на биом по θ ----
function biomeAt(b, th) {
  if (!b.T || !b.pal) return { id: 0, name: '—' };
  const hgt = b.T.h(th, 8);
  const id = b.T.biome(th, hgt);
  return { id, name: b.pal[id] ? b.pal[id].name : '—', h: hgt };
}
