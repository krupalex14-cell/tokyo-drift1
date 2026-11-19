import sys, json
from playwright.sync_api import sync_playwright
w,h=390,780
with sync_playwright() as p:
    b=p.chromium.launch(executable_path='/usr/bin/google-chrome',args=['--no-sandbox','--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist','--allow-file-access-from-files'])
    pg=b.new_page(viewport={'width':w,'height':h},device_scale_factor=1)
    logs=[]; pg.on('console',lambda m:logs.append(m.type+': '+m.text)); pg.on('pageerror',lambda e:logs.append('PAGEERROR '+str(e)))
    pg.goto('file:///home/claude/space/out/index.html'); pg.wait_for_timeout(1500)
    pg.get_by_text('Новая игра').first.click(); pg.wait_for_timeout(400); pg.get_by_text('Песочница').first.click(); pg.get_by_text('Начать').first.click(); pg.wait_for_timeout(3500)
    pg.get_by_text('Ангар').first.click(); pg.wait_for_timeout(1200)
    # загрузить Electron
    pg.evaluate("(()=>{const B=__B(); const t=TEMPLATES; })" if False else "0")
    pg.get_by_text('Шаблоны').first.click(); pg.wait_for_timeout(400)
    pg.evaluate("[...document.querySelectorAll('.ptile')].find(e=>e.textContent.includes('Электрон')).click()"); pg.wait_for_timeout(800)
    info=pg.evaluate("""(()=>{const {Builder:B,Gfx}=__T(); const ps=B.D.parts.map(p=>({id:p.defId,y:+p.y.toFixed(2),h:+p.h.toFixed(2),w:+p.w.toFixed(2)})); return JSON.stringify({n:ps.length,scale:Gfx.scale,ps})})()""")
    print('INFO', info[:600])
    # найти стык «двигатель второй ступени / бак» — просто возьмём середину между двумя первыми деталями второй ступени: ставим разделитель на верх первого бака
    pos=pg.evaluate("""(()=>{const {Builder:B,Gfx,PARTS,prect}=__T(); const ps=B.D.parts; const tanks=ps.filter(p=>p.d.tank&&!p.d.eng); const t=tanks[0]; const r=prect(t); const top=B.scr(t.x,r.y1); const e=PARTS.dec; return JSON.stringify({x:top[0]*Gfx.scale,y:top[1]*Gfx.scale,n:ps.length,ppm:B.cam.ppm})})()""")
    print('POS',pos); d=json.loads(pos)
    # перетащить «Разделитель» (вкладка Конструкция) на верх первого бака: курсор на 60px ниже центра призрака → центр призрака на (x,y), курсор y+60
    pg.get_by_text('Конструкция').first.click(); pg.wait_for_timeout(400)
    pg.mouse.move(45,725); pg.mouse.down(); pg.mouse.move(d['x'],d['y']+60,steps=12); pg.wait_for_timeout(300); pg.screenshot(path='out/i0.png'); pg.mouse.up(); pg.wait_for_timeout(600); pg.screenshot(path='out/i1.png')
    print('AFTER', pg.evaluate("""(()=>{const {Builder:B,validateDesign}=__T(); const ps=B.D.parts.slice().sort((a,b)=>a.y-b.y); return JSON.stringify(ps.map(p=>p.defId+'@'+p.y.toFixed(1))+' | errs '+validateDesign(B.D.parts,B.W,{}).issues.map(i=>i.text).join(';'))})()"""))
    for l in logs[:10]: print(l)
    b.close()
