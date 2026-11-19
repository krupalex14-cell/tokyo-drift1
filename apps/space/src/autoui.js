'use strict';
// ============ Панель автосборки: ИИ строит ракету под зонд и выбранную цель ============
const AutoUI = {
  D: null, target: null, alt: 200, goal: null, res: null, sh: null, busy: false,
  open(D) {
    const W = App.W;
    if (!D.parts.length) return UI.toast('Сначала соберите зонд или спутник', 'bad');
    if (!D.parts.some(p => p.d.core && !p.d.core.rocket)) return UI.toast('У зонда нет блока управления (CubeSat или бортовой компьютер) — без него нечем управлять', 'bad');
    this.D = D; this.target = W.homeBody.id; this.alt = 200; this.goal = null; this.res = null; this.busy = false;
    const body = h('div', { class: 'col' }); this.sh = UI.sheet('✨ Автосборка ракеты', body, { height: '88%', onClose: () => { this.sh = null; } }); this.body = body;
    this.pick(this.target);
  },
  pick(id) {
    this.target = id; this.res = null; this.goal = null; this.render();
    setTimeout(() => {
      if (!this.sh) return; const W = App.W;
      try { this.goal = AutoBuild.planGoal(W, id === W.homeBody.id ? null : id, this.alt * 1000); } catch (e) { this.goal = { err: 'Ошибка расчёта: ' + e.message }; }
      this.render();
    }, 30);
  },
  render() {
    const W = App.W, U = W.U, home = W.homeBody, b = this.body; if (!b) return; b.innerHTML = '';
    const pl = AutoBuild.payloadInfo(this.D);
    b.append(h('div', { class: 'card' }, h('b', { class: 'cy' }, 'Полезная нагрузка: ' + (this.D.name || 'зонд')), h('div', { class: 'kv' }, h('span', null, 'Масса'), h('span', null, fmtMass(pl.mass))), h('div', { class: 'kv' }, h('span', null, 'Размер'), h('span', null, pl.h.toFixed(1) + ' × ' + (pl.halfW * 2).toFixed(1) + ' м'))));
    const hasEng = this.D.parts.some(p => p.d.eng && !p.d.eng.rcs);
    b.append(h('h3', null, 'Куда лететь?'));
    const dest = (id, name, sub) => h('div', { class: 'card' + (this.target === id ? ' sel' : ''), style: 'cursor:pointer;padding:6px 8px', onclick: () => this.pick(id) }, h('b', { class: 'small' }, name), h('div', { class: 'tiny mut' }, sub));
    const grid = h('div', { class: 'grid2' });
    grid.append(dest(home.id, '🛰 Орбита ' + home.name, 'околопланетная'));
    const bodies = U.bodies.filter(x => x.kind !== 'star' && x.id !== home.id);
    for (const x of bodies) grid.append(dest(x.id, (x.kind === 'moon' ? '◦ ' : '● ') + x.name, x.parent ? 'у ' + U.byId[x.parent].name : ''));
    b.append(grid);
    if (this.target === home.id) {
      const av = h('b', { class: 'cy' }, this.alt + ' км');
      b.append(h('div', { class: 'card col' }, h('div', { class: 'row' }, h('span', { class: 'small' }, 'Высота круговой орбиты: '), av),
        h('input', { type: 'range', min: Math.ceil(((home.atm ? home.atm.top : 0) / 1000 + 20) / 10) * 10, max: 1500, step: 10, value: this.alt, oninput: e => { this.alt = +e.target.value; av.textContent = this.alt + ' км'; }, onchange: () => this.pick(this.target) })));
    }
    const g = this.goal;
    if (!g) b.append(h('div', { class: 'card cy' }, 'Считаю окно запуска…'));
    else if (g.err) b.append(h('div', { class: 'card rd' }, '⛔ ' + g.err));
    else {
      const p = g.plan;
      b.append(h('div', { class: 'card' }, h('b', { class: 'yl' }, g.label),
        h('div', { class: 'kv' }, h('span', null, 'Импульс отлёта'), h('span', null, g.inj ? Math.round(g.inj) + ' м/с' : '—')),
        (p ? h('div', { class: 'kv' }, h('span', null, 'Ждать окна'), h('span', null, fmtDur(p.tBurn - W.ut))) : null), (p ? h('div', { class: 'kv' }, h('span', null, 'Время в пути'), h('span', null, fmtDur(p.tof))) : null)));
      if (g.target && !hasEng) b.append(h('div', { class: 'card or small' }, '⚠ У зонда нет двигателя: он долетит, но затормозить на орбите не сможет (пролёт). Добавьте двигатель и бак для захвата.'));
      if (this.busy) b.append(h('div', { class: 'card cy' }, '⏳ ИИ подбирает двигатели, считает ступени и проверяет ракету виртуальным полётом…'));
      else b.append(h('button', { class: 'btn go big', onclick: () => this.run() }, '🧠 Построить ракету'));
    }
    if (this.res) this.results();
  },
  run() {
    this.busy = true; this.res = null; this.render();
    setTimeout(() => {
      const W = App.W; let r;
      try { r = AutoBuild.run(W, this.D, this.goal, {}); } catch (e) { r = { err: 'Ошибка расчёта: ' + e.message }; console.error(e); }
      this.busy = false; this.res = r; this.render();
      const el = this.body && this.body.lastElementChild; if (el && el.scrollIntoView) el.scrollIntoView({ block: 'start' });
    }, 60);
  },
  results() {
    const W = App.W, b = this.body, r = this.res; const free = W.sandbox || W.cheats.freeBuild;
    if (r.err) { b.append(h('div', { class: 'card rd' }, '⛔ ' + r.err)); return; }
    b.append(h('h3', null, 'Готовые ракеты'));
    for (const V of r.variants) {
      const rp = V.report; const can = true;
      const stg = rp.stages.map((s, i) => h('div', { class: 'tiny' }, (i + 1) + '. ' + s.n + '× ' + s.eng + ' · ' + s.prop.split(' ')[0] + ' · ⌀' + s.D + '×' + s.L.toFixed(1) + ' м'));
      b.append(h('div', { class: 'card col', style: 'gap:3px' }, h('div', { class: 'row' }, h('b', { class: 'yl', style: 'flex:1;font-size:17px' }, V.name), h('b', { class: 'mut' }, 'цена ' + fmtMoney(V.cost))), ...stg,
        h('div', { class: 'kv' }, h('span', null, 'Масса на старте'), h('span', null, fmtMass(rp.m0))), h('div', { class: 'kv' }, h('span', null, 'Тяговооружённость'), h('span', null, rp.twr0.toFixed(2))),
        h('div', { class: 'kv' }, h('span', null, 'Запас Δv после вывода'), h('span', null, Math.round(rp.dvLeft) + ' м/с')), h('div', { class: 'kv' }, h('span', null, 'Макс. перегрузка / Q'), h('span', null, rp.maxG.toFixed(1) + ' g · ' + fmtNum(rp.maxQ / 1000) + ' кПа')),
        h('div', { class: 'kv' }, h('span', null, 'Подъём до орбиты'), h('span', null, fmtDur(rp.tAscent) + ', Pe ' + fmtDist(rp.pe))),
        h('div', { class: 'row', style: 'margin-top:4px' }, h('button', { class: 'btn go sp' + (can ? '' : ' dis'), onclick: () => { this.sh && this.sh.close(); UI.launch(V.design, this.goal); } }, '🚀 Запустить миссию'),
          h('button', { class: 'btn sp', onclick: () => { this.sh && this.sh.close(); Builder.snap(); Builder.D.parts = V.design.parts.map(clonePart); Builder.D.name = V.design.name; Builder.nameEl.value = V.design.name; Builder.D.top = 0; Builder.manualStage = true; Builder.vp.parts = Builder.D.parts; Builder.sel = null; Builder.touch(); Builder.fit(); UI.toast('Ракета в ангаре — можно доработать', 'ok'); } }, '🛠 В ангар'))));
    }
    b.append(h('div', { class: 'tiny mut' }, 'Каждая ракета проверена виртуальным полётом: выведена на орбиту автопилотом с запасом Δv на отлёт. «Эконом» — дешевле, «Мощная» — с большим запасом.'));
  }
};
