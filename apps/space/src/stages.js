'use strict';
// ============ Панель ступеней (как в Rocket Simulator) ============
// Показывает, что сработает на каждой нажатой «СТУП»: какие двигатели зажгутся, какие разделители отстрелятся.
// В ангаре ступени можно менять (▲ ▼), в полёте панель только показывает, что сработает следующим.
const StagePanel = {
  // детали, у которых есть действие по ступени (опоры и РСУ-движки не считаем)
  acts(parts) { return parts.filter(p => partAction(p) && !p.d.leg && !(p.d.eng && p.d.eng.rcs)); },
  // одинаковые детали одной ступени складываем в одну строку: «Rutherford ×9»
  groups(parts, st) {
    const m = new Map();
    for (const p of this.acts(parts)) {
      if (p.stage !== st) continue;
      const k = p.defId + '|' + partAction(p); let g = m.get(k);
      if (!g) { g = { defId: p.defId, d: p.d, act: partAction(p), parts: [], n: 0 }; m.set(k, g); }
      g.parts.push(p); g.n += p.d.eng && p.n > 1 ? p.n : 1;
    }
    return [...m.values()];
  },
  maxStage(parts) { let m = -1; for (const p of this.acts(parts)) m = Math.max(m, p.stage); return m; },
  // убрать пустые ступени, чтобы номера шли подряд (пустая ступень — это нажатие «СТУП», которое ничего не делает)
  compact(parts) {
    const used = [...new Set(parts.filter(p => p.stage >= 0).map(p => p.stage))].sort((a, b) => a - b);
    const mp = new Map(used.map((s, i) => [s, i])); for (const p of parts) if (p.stage >= 0) p.stage = mp.get(p.stage);
  },
  // сдвинуть группу деталей: dir −1 = раньше, +1 = позже. Возвращает true, если что-то изменилось
  move(parts, g, dir) {
    const cur = g.parts[0].stage, mx = this.maxStage(parts); let to;
    if (cur < 0) to = mx + 1;                                   // не назначена → в новую последнюю ступень
    else if (dir < 0) { if (cur <= 0) return false; to = cur - 1; }
    else { to = cur + 1; if (to > mx && this.groups(parts, cur).length < 2) return false; }   // единственная в последней — дальше некуда
    for (const p of g.parts) p.stage = to; this.compact(parts); return true;
  },
  // поменять две соседние ступени местами целиком
  swap(parts, a, b) { for (const p of parts) { if (p.stage === a) p.stage = b; else if (p.stage === b) p.stage = a; } },
  // следующая ступень: короткая сводка «иконка ×N» для кнопки СТУП в полёте
  nextBrief(v) {
    if (!v || v.stageIdx >= v.stages.length) return [];
    return this.groups(v.parts, v.stageIdx);
  },
  icon(defId, s) { const c = Icons.clone(defId); c.style.width = c.style.height = (s || 30) + 'px'; return c; },
  actCls(a) { return a === 'ign' ? 'or' : a === 'sep' ? 'rd' : 'cy'; },
  // o: { parts, edit, cur, stagesN, onChange, onAuto, onPick }
  render(o) {
    const parts = o.parts, root = h('div', { class: 'col stg' });
    const first = o.edit ? 0 : o.cur;                       // в полёте показываем только ещё не сработавшие ступени
    const mx = o.edit ? this.maxStage(parts) : Math.max(this.maxStage(parts), (o.stagesN || 0) - 1);
    if (!o.edit && o.cur > 0) root.append(h('div', { class: 'tiny mut' }, '✔ Уже сработало ступеней: ' + o.cur));
    if (o.edit) root.append(h('div', { class: 'small mut', style: 'line-height:1.35' }, 'Каждое нажатие «СТУП» запускает следующую ступень сверху вниз. ▲ ▼ у детали переносят её в соседнюю ступень, ▲ ▼ в заголовке меняют ступени местами.'));
    let shown = 0;
    for (let k = first; k <= mx; k++) {
      const gs = this.groups(parts, k); if (!gs.length) continue; shown++;
      const isNext = !o.edit && k === o.cur;
      const head = h('div', { class: 'row' }, h('b', { class: isNext ? 'gr' : 'yl' }, 'Ступень ' + (k + 1)), h('span', { class: 'tiny ' + (isNext ? 'gr' : 'mut'), style: 'flex:1' }, isNext ? '▶ сработает следующей' : (k === 0 && o.edit ? 'при старте' : (o.edit ? '' : 'ждёт'))));
      if (o.edit) {
        head.append(h('button', { class: 'btn sm', style: 'min-height:26px;padding:2px 8px', onclick: () => { if (k > 0) { this.swap(parts, k, k - 1); o.onChange(); } } }, '▲'),
          h('button', { class: 'btn sm', style: 'min-height:26px;padding:2px 8px', onclick: () => { if (k < mx) { this.swap(parts, k, k + 1); o.onChange(); } } }, '▼'));
      }
      const card = h('div', { class: 'card col stgc' + (isNext ? ' next' : ''), style: 'gap:4px' }, head);
      for (const g of gs) {
        const row = h('div', { class: 'row stgi' }, this.icon(g.defId), h('div', { class: 'sp', style: 'min-width:0;line-height:1.15' }, h('b', { class: 'small' }, g.d.name + (g.n > 1 ? ' ×' + g.n : '')), h('div', { class: 'tiny ' + this.actCls(g.act) }, ACT_NAMES[g.act])));
        if (o.edit) {
          row.onclick = e => { if (e.target.closest('button')) return; if (o.onPick) o.onPick(g.parts[0]); };
          row.append(h('button', { class: 'btn sm', style: 'min-height:28px;padding:2px 9px' + (k <= 0 ? ';opacity:.35' : ''), onclick: () => { if (this.move(parts, g, -1)) o.onChange(); } }, '▲'),
            h('button', { class: 'btn sm', style: 'min-height:28px;padding:2px 9px', onclick: () => { if (this.move(parts, g, 1)) o.onChange(); } }, '▼'));
        }
        card.append(row);
      }
      root.append(card);
    }
    if (!shown) root.append(h('div', { class: 'card small mut' }, o.edit ? 'Пока нет двигателей и разделителей — поставьте их, и ступени появятся сами.' : 'Ступеней больше нет — всё, что могло сработать, уже сработало.'));
    if (o.edit) {
      // детали с действием, но без ступени — на кнопку «СТУП» они не отзовутся
      const un = this.acts(parts).filter(p => p.stage < 0 && (p.d.eng || p.d.dec || p.d.fair || p.d.chute));
      if (un.length) {
        const gm = new Map(); for (const p of un) { const k = p.defId + '|' + partAction(p); let g = gm.get(k); if (!g) { g = { defId: p.defId, d: p.d, act: partAction(p), parts: [], n: 0 }; gm.set(k, g); } g.parts.push(p); g.n++; }
        const card = h('div', { class: 'card col stgc', style: 'gap:4px' }, h('b', { class: 'or' }, 'Без ступени'), h('div', { class: 'tiny mut' }, 'Эти детали не сработают от кнопки «СТУП». Добавьте их в ступень:'));
        for (const g of gm.values()) card.append(h('div', { class: 'row stgi' }, this.icon(g.defId), h('div', { class: 'sp small' }, h('b', null, g.d.name + (g.n > 1 ? ' ×' + g.n : '')), h('div', { class: 'tiny mut' }, ACT_NAMES[g.act])),
          h('button', { class: 'btn sm', style: 'min-height:28px', onclick: () => { if (this.move(parts, g, 1)) o.onChange(); } }, '+ ступень')));
        root.append(card);
      }
      root.append(h('button', { class: 'btn sm', onclick: () => o.onAuto() }, h('i', { class: 'px', 'data-n': 'gear' }), ' Расставить автоматически'));
    }
    return root;
  }
};
