'use strict';
// ============ Пиксельные иконки ============
// Заменяют эмодзи во всём интерфейсе: каждая иконка нарисована пикселями (строки ASCII + палитра),
// на старте превращается в маленькую картинку, а текст с эмодзи автоматически подменяется <i class="px">.
// Моно-иконки ('#') красятся цветом текста (CSS-маска), цветные — своей палитрой.
const PX_PAL = {
  k: '#141a33', w: '#f4f7ff', g: '#c3cde0', G: '#8793ad', d: '#55607f', r: '#ea5a4d', R: '#a93a34', o: '#f29a3c', y: '#f7d94c', Y: '#c99a2a',
  b: '#4f8cee', B: '#2c5cb0', c: '#5ad4ec', n: '#52c96e', N: '#2f8f4c', p: '#e48ac0', P: '#a8528c', m: '#94623f', M: '#66402a', s: '#f2c9a0', l: '#b6e85a'
};
const PX_ART = {
  rocket: ['.....rr.....', '....rrrr....', '...kwwwwk...', '...kwccwk...', '...kwccwk...', '...kwwwwk...', '..rkwwwwkr..', '.rrkwGGwkrr.', '.rr.kkkk.rr.', '....oyyo....', '.....oo.....'],
  stop: ['...kkkkkk...', '..krrrrrrk..', '.krrrrrrrrk.', 'krrrrrrrrrrk', 'krrrrrrrrrrk', 'krwwwwwwwwrk', 'krwwwwwwwwrk', 'krrrrrrrrrrk', 'krrrrrrrrrrk', '.krrrrrrrrk.', '..krrrrrrk..', '...kkkkkk...'],
  microscope: ['...kggk......', '...kggk......', '..kkggkk.....', '..kgGGgk..kk.', '..kgGGgk.kGk.', '...kGGk..kGk.', '...kggk..kGk.', '..kkggkk.kGk.', '..kwwwwk.kGk.', '.kkkkkkkkkGk.', '.kyyyyyyk.Gk.', '.kGGGGGGGGGk.', '.kkkkkkkkkkk.'],
  robot: ['.....rr.....', '.....kk.....', '..kkkkkkkk..', '.kggggggggk.', '.kgccggccgk.', '.kgccggccgk.', '.kggggggggk.', '.kgkkkkkkgk.', '..kkkkkkkk..', '....kGGk....', '.kGGGGGGGGk.', '.kGGyyyyGGk.', '..kkkkkkkk..'],
  flask: ['....kkkk....', '....kggk....', '....kggk....', '....kggk....', '...kgggGk...', '..kggnnnGk..', '.kgnnnnnnGk.', '.kgnnnnnnGk.', '.kgnnNNnnGk.', '.kgGnnnnGGk.', '..kGGGGGGk..', '...kkkkkk...'],
  lander: ['....kkkk....', '...kgggGk...', '...kgbbGk...', '...kgggGk...', '..kkkkkkkk..', '..kGGGGGGk..', '.kk.kyyk.kk.', '.k..kyok..k.', 'kk...oo...kk', 'kkk......kkk'],
  book: ['.kkkkkkkkkk.', 'kbbbbkbbbbbk', 'kbwwbkbwwwbk', 'kbwwbkbwwwbk', 'kbwwbkbwwwbk', 'kbwwbkbwwwbk', 'kbbbbkbbbbbk', '.kkkkkkkkkk.'],
  chute: ['..kkkkkkkk..', '.krrrwwrrrk.', 'krrrrwwrrrrk', 'krrwwrrwwrrk', '.k.k.kk.k.k.', '..k..kk..k..', '...k.kk.k...', '....kkkk....', '....kggk....'],
  moon: ['...kkkkk....', '..kwwwwgk...', '.kwwGwwwgk..', 'kwwwwwwGwgk.', 'kwGwwwwwwgk.', 'kwwwwGwwwgk.', '.kwwwwwwgk..', '..kgwwwgk...', '...kkkkk....'],
  warn: ['.....kk.....', '....kyyk....', '...kyyyyk...', '..kyykkyyk..', '.kyyykkyyyk.', 'kyyyykkyyyyk', 'kyyyyyyyyyyk', 'kyyyykkyyyyk', 'kkkkkkkkkkkk'],
  save: ['kkkkkkkkkk.', 'kbwwwwwwbkk', 'kbwwkkwwbbk', 'kbwwkkwwbbk', 'kbwwwwwwbbk', 'kbbbbbbbbbk', 'kbkkkkkkkbk', 'kbkwwwwwkbk', 'kbkwwwwwkbk', 'kkkkkkkkkkk'],
  trash: ['....kkkk....', '.kkkkkkkkkk.', '.kggggggggk.', '..kGgGgGgGk.', '..kgGgGgGgk.', '..kGgGgGgGk.', '..kgGgGgGgk.', '..kGgGgGgGk.', '..kgGgGgGgk.', '..kkkkkkkkk.'],
  gear: ['....kgk....', '.kk.kgk.kk.', 'kgggggggggk', '.kgGGGGGgk.', 'kgGGkkkGGgk', 'kgGGkkkGGgk', '.kgGGGGGgk.', 'kgggggggggk', '.kk.kgk.kk.', '....kgk....'],
  wrench: ['.kk......kk.', 'kggk....kggk', 'kggk....kggk', 'kgggkkkkgggk', '.kgggggggggk', '..kkgggggkk.', '....kgGgk...', '....kgGgk...', '....kgGgk...', '....kgGgk...', '....kgGgk...', '.....kkk....'],
  sparkle: ['.....yy.....', '.....yy.....', '....yyyy....', '...yyyyyy...', 'yyyyywwyyyyy', 'yyyyywwyyyyy', '...yyyyyy...', '....yyyy....', '.....yy.....', '.....yy.....'],
  wheel: ['...kkkkkk...', '..kddddddk..', '.kddGGGGddk.', 'kddGGkkGGddk', 'kdGGkggkGGdk', 'kdGkgwwgkGdk', 'kdGkgwwgkGdk', 'kdGGkggkGGdk', 'kddGGkkGGddk', '.kddGGGGddk.', '..kddddddk..', '...kkkkkk...'],
  globe: ['...kkkkkk...', '..kbbnnbbk..', '.kbbnnnbbbk.', 'kbbnnnnbnbbk', 'kbnnnnbbnnbk', 'kbbnnbbbnnbk', 'kbbbbbbbbnbk', 'kbbbnnbbbbbk', '.kbbnnnbbbk.', '..kbbnnbbk..', '...kkkkkk...'],
  dish: ['.kkkk.......', 'kggggk......', 'kgggGgk..y..', '.kgGGGk.y.y.', '..kkGGGk..y.', '.....kGk....', '.....kGk....', '...kkkkkkk..'],
  sat: ['.bbbb..bbbb.', '.bBBb..bBBb.', '.bbbbkkbbbb.', '.bBBbkggkbBBb', '.bbbbkggkbbbb', '.bBBbkkkkbBBb', '.bbbb.kk.bbb', '......k.....', '.....kyk....'],
  check: ['..........nn', '.........nnn', '........nnn.', 'nn.....nnn..', 'nnn...nnn...', '.nnn.nnn....', '..nnnnn.....', '...nnn......', '....n.......'],
  home: ['.....rr.....', '....rrrr....', '...rrrrrr...', '..rrrrrrrr..', '.rrrrrrrrrr.', 'rrrrrrrrrrrr', '.kwwwwwwwwk.', '.kwwwkkwwwk.', '.kwwwkkwwwk.', '.kwwwkkwwwk.', '.kkkkkkkkkk.'],
  compass: ['...kkkkkk...', '..kwwwwwwk..', '.kwwwrrwwwk.', 'kwwwwrrwwwwk', 'kwwwwrrwwwwk', 'kwwwwwwwwwwk', 'kwwwwbbwwwwk', 'kwwwwbbwwwwk', '.kwwwbbwwwk.', '..kwwwwwwk..', '...kkkkkk...'],
  lock: ['...kkkkkk...', '..kGggggGk..', '..kg....gk..', '..kg....gk..', '.kkkkkkkkkk.', '.kyyyyyyyyk.', '.kyyyykkyyk.', '.kyyyykkyyk.', '.kyyyyyyyyk.', '.kkkkkkkkkk.'],
  magnet: ['kkk......kkk', 'kwwk....kwwk', 'krrk....kbbk', 'krrk....kbbk', 'krrk....kbbk', 'krrrk..kbbbk', '.krrrkkbbbk.', '..krrrbbbk..', '...kkkkkk...'],
  ruler: ['kkkkkkkkkkkk', 'kyyyyyyyyyyk', 'kkykykykykyk', 'kyyyyyyyyyyk', 'kkkkkkkkkkkk'],
  folder: ['kkkk........', 'kyyykkkkkkk.', 'kyyyyyyyyyyk', 'kyyyyyyyyyyk', 'kyyyyyyyyyyk', 'kyyyyyyyyyyk', 'kkkkkkkkkkkk'],
  search: ['..kkkk......', '.kwccck.....', 'kwcccccK....', 'kwcccccck...', 'kccccccck...', '.kccccck....', '..kkkkkm....', '.......mm...', '........mm..', '.........mk.'],
  dice: ['.kkkkkkkkkk.', 'kwwwwwwwwwwk', 'kwkkwwwwkkwk', 'kwkkwwwwkkwk', 'kwwwwkkwwwwk', 'kwwwwkkwwwwk', 'kwkkwwwwkkwk', 'kwkkwwwwkkwk', 'kwwwwwwwwwwk', '.kkkkkkkkkk.'],
  scroll: ['.kkkkkkkkkk.', 'kyyyyyyyyyyk', '.kyYYYYYYyk.', '.kyyyyyyyyk.', '.kyYYYYYYyk.', '.kyyyyyyyyk.', '.kyYYYYYyyk.', 'kyyyyyyyyyyk', '.kkkkkkkkkk.'],
  joystick: ['...kkkk.....', '..krrrrk....', '..krrrrk....', '...kGGk.....', '...kGGk.....', '.kkkGGkkk...', 'kddddddddk..', 'kddgddyddk..', 'kddddddddk..', 'kkkkkkkkkk..'],
  recycle: ['...nnnnnn...', '..nn....nn..', '.nn......nn.', '.n......nnnn', '.n.......nn.', '.nn.....nn..', 'nnnn...nn...', '.nn.nnnn....', '..nnn.......'],
  sun: ['.....yy.....', '.y...yy...y.', '..y.yyyy.y..', '...yyyyyy...', 'yy.yyyyyy.yy', 'yy.yyyyyy.yy', '...yyyyyy...', '..y.yyyy.y..', '.y...yy...y.', '.....yy.....'],
  hourglass: ['kkkkkkkkkk', 'kwwwwwwwwk', '.kwwyywwk.', '..kwyywk..', '...kyyk...', '...kyyk...', '..kwyywk..', '.kwyyyywk.', 'kwyyyyyywk', 'kkkkkkkkkk'],
  brain: ['..kkkkkk....', '.kppppppkk..', 'kppkpppkppk.', 'kpkpppkpppk.', 'kppppkpppkk.', '.kpkppppkpk.', '..kppkppkk..', '...kkkkk....'],
  star: ['.....yy.....', '.....yy.....', '....yyyy....', 'yyyyyyyyyyyy', '.yyyyyyyyyy.', '..yyyyyyyy..', '...yyyyyy...', '..yyyy.yyyy.', '..yyy...yyy.', '.yy......yy.']
};
// моно-иконки: красятся цветом текста
const PX_MONO = {
  ff: ['#.....#....', '##....##...', '###...###..', '####..####.', '#####.#####', '####..####.', '###...###..', '##....##...', '#.....#....'],
  rew: ['....#.....#', '...##....##', '..###...###', '.####..####', '#####.#####', '.####..####', '..###...###', '...##....##', '....#.....#'],
  stopSq: ['########', '########', '########', '########', '########', '########', '########', '########'],
  up: ['....##....', '...####...', '..######..', '.########.', '...####...', '...####...', '...####...'],
  menu: ['##########', '##########', '..........', '##########', '##########', '..........', '##########', '##########'],
  x: ['##......##', '###....###', '.###..###.', '..######..', '...####...', '..######..', '.###..###.', '###....###', '##......##'],
  sym: ['....#.#....', '...##.##...', '..###.###..', '.####.####.', '#####.#####', '.####.####.', '..###.###..', '...##.##...', '....#.#....'],
  flip: ['..#......#..', '.##......##.', '############', '############', '.##......##.', '..#......#..'],
  chevR: ['##....', '###...', '.###..', '..###.', '...###', '..###.', '.###..', '###...', '##....'],
  chevL: ['....##', '...###', '..###.', '.###..', '###...', '.###..', '..###.', '...###', '....##'],
  stages: ['#########', '.........', '.#######.', '.........', '..#####..', '.........', '...###...'],
  rot: ['...####....', '..#....#...', '.#......###', '.#.......#.', '.#.........', '.#.........', '..#.......#.', '...#.....#..', '....#####...'],
  copy: ['#######....', '#.....#....', '#.....#....', '#...#######', '#...#.....#', '#...#.....#', '#####.....#', '....#.....#', '....#######']
};
const PX_MAP = {
  '🚀': 'rocket', '⛔': 'stop', '🔬': 'microscope', '🤖': 'robot', '🧪': 'flask', '⚠': 'warn', '💾': 'save', '🗑': 'trash', '🧹': 'trash', '⚙': 'gear',
  '🛠': 'wrench', '🔧': 'wrench', '✨': 'sparkle', '✦': 'sparkle', '🛞': 'wheel', '🌍': 'globe', '⏩': 'ff', '⏪': 'rew', '⏹': 'stopSq', '📡': 'dish',
  '🛰': 'sat', '✔': 'check', '🏠': 'home', '🧭': 'compass', '🔒': 'lock', '🧲': 'magnet', '📐': 'ruler', '📂': 'folder', '🔍': 'search', '🎲': 'dice',
  '📜': 'scroll', '🕹': 'joystick', '♻': 'recycle', '☀': 'sun', '⬆': 'up', '⏳': 'hourglass', '🧠': 'brain', '★': 'star', '☰': 'menu', '✕': 'x', '⇆': 'sym', '⇋': 'flip', '⟳': 'rot', '⧉': 'copy', '🪂': 'chute', '📖': 'book', '🎓': 'book', '🛬': 'lander', '🌙': 'moon'
};
const PxIcon = {
  urls: {}, mono: {}, re: null, on: false,
  // картинка из строк: обрезаем пустые поля, делаем квадрат (иконка стоит по центру)
  make(rows, mono) {
    const R = rows.map(r => r.split('')); let x0 = 1e9, x1 = -1, y0 = 1e9, y1 = -1;
    const solid = c => c !== '.' && c !== ' ';
    R.forEach((r, y) => r.forEach((c, x) => { if (solid(c)) { x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y); } }));
    const w = x1 - x0 + 1, h = y1 - y0 + 1, S = Math.max(w, h), ox = ((S - w) >> 1) - x0, oy = ((S - h) >> 1) - y0;
    const cv = document.createElement('canvas'); cv.width = cv.height = S; const g = cv.getContext('2d');
    R.forEach((r, y) => r.forEach((c, x) => { if (!solid(c)) return; g.fillStyle = mono ? '#000' : (PX_PAL[c] || '#f0f'); g.fillRect(x + ox, y + oy, 1, 1); }));
    return cv.toDataURL('image/png');
  },
  init() {
    if (this.on || typeof document === 'undefined') return; this.on = true;
    let css = '.px{display:inline-block;width:1.15em;height:1.15em;vertical-align:-.2em;margin:0 .08em;image-rendering:pixelated;background-size:100% 100%;background-repeat:no-repeat;background-position:center;flex:none}' +
      '.px.mono{background-color:currentColor;background-image:none!important;-webkit-mask-size:100% 100%;mask-size:100% 100%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center}';
    for (const k in PX_ART) css += '.px[data-n="' + k + '"]{background-image:url(' + this.make(PX_ART[k], false) + ')}';
    for (const k in PX_MONO) { const u = this.make(PX_MONO[k], true); this.mono[k] = 1; css += '.px.mono[data-n="' + k + '"]{-webkit-mask-image:url(' + u + ');mask-image:url(' + u + ')}'; }
    const st = document.createElement('style'); st.textContent = css; document.head.append(st);
    this.re = new RegExp('(' + Object.keys(PX_MAP).map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|') + ')[\\uFE0E\\uFE0F]?', 'g');
    this.replaceIn(document.body);
    new MutationObserver(ms => {
      for (const m of ms) {
        if (m.type === 'characterData') this.fixText(m.target);
        else for (const n of m.addedNodes) this.replaceIn(n);
      }
    }).observe(document.body, { childList: true, subtree: true, characterData: true });
  },
  el(name, px) {
    const i = document.createElement('i'); i.className = 'px' + (this.mono[name] ? ' mono' : ''); i.dataset.n = name;
    if (px) { i.style.width = i.style.height = px + 'px'; } return i;
  },
  fixText(t) {
    if (!t || t.nodeType !== 3 || !t.parentNode) return; const p = t.parentNode;
    if (/^(SCRIPT|STYLE|TEXTAREA|OPTION|TITLE)$/.test(p.nodeName)) return;
    const s = t.data; this.re.lastIndex = 0; if (!this.re.test(s)) return;
    this.re.lastIndex = 0; const fr = document.createDocumentFragment(); let last = 0, m;
    while ((m = this.re.exec(s))) {
      if (m.index > last) fr.append(s.slice(last, m.index));
      fr.append(this.el(PX_MAP[m[1]])); last = m.index + m[0].length;
    }
    if (last < s.length) fr.append(s.slice(last));
    p.replaceChild(fr, t);
  },
  replaceIn(n) {
    if (!n) return;
    if (n.nodeType === 3) { this.fixText(n); return; }
    if (n.nodeType !== 1) return;
    const w = document.createTreeWalker(n, NodeFilter.SHOW_TEXT); const list = []; let c; while ((c = w.nextNode())) list.push(c);
    for (const t of list) this.fixText(t);
  }
};
if (typeof window !== 'undefined') window.__Px = { PX_ART, PX_MONO, PxIcon };
