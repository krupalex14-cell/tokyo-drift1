import json, sys
from playwright.sync_api import sync_playwright
with sync_playwright() as p:
    b=p.chromium.launch(executable_path='/usr/bin/google-chrome',args=['--no-sandbox','--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist','--allow-file-access-from-files'])
    pg=b.new_page(viewport={'width':390,'height':780},device_scale_factor=1)
    logs=[]; pg.on('console',lambda m:logs.append(m.type+': '+m.text)); pg.on('pageerror',lambda e:logs.append('PAGEERROR '+str(e)))
    pg.goto('file:///home/claude/space/out/index.html'); pg.wait_for_timeout(1500)
    pg.get_by_text('Новая игра').first.click(); pg.wait_for_timeout(400); pg.get_by_text('Песочница').first.click(); pg.get_by_text('Начать').first.click(); pg.wait_for_timeout(3500)
    pg.get_by_text('Ангар').first.click(); pg.wait_for_timeout(1200)
    pg.get_by_text('Шаблоны').first.click(); pg.wait_for_timeout(400)
    pg.locator('.ptile', has_text='Луноход').first.click(); pg.wait_for_timeout(900)
    pg.screenshot(path='/tmp/r3.png')
    print('PARTS', pg.evaluate("JSON.stringify(__T().Builder.D.parts.map(p=>[p.defId,+p.x.toFixed(2),+p.y.toFixed(2)]))"))
    pg.get_by_text('старт', exact=False).first.click(); pg.wait_for_timeout(700)
    pg.screenshot(path='/tmp/r4.png')
    pg.get_by_text('Луна', exact=True).first.click(); pg.wait_for_timeout(2500)
    pg.screenshot(path='/tmp/r5.png')
    print('V', pg.evaluate("(()=>{const v=__T().Flight.V(); return JSON.stringify({mode:v.mode,body:v.body,alive:v.alive,ec:Math.round(v.ec)})})()"))
    box = pg.evaluate("(()=>{const r=__T().Flight.E.right.getBoundingClientRect(); return [r.x+r.width/2, r.y+r.height/2]})()")
    pg.mouse.move(box[0],box[1]); pg.mouse.down(); pg.wait_for_timeout(4000); pg.screenshot(path='/tmp/r6.png'); 
    print('DRIVING', pg.evaluate("__T().Flight.V().drive"))
    pg.mouse.up(); pg.wait_for_timeout(1500)
    print('AFTER', pg.evaluate("(()=>{const v=__T().Flight.V(); return JSON.stringify({drive:v.drive,vx:+v.vx.toFixed(2),vy:+v.vy.toFixed(2)})})()"))
    # тап по колесу и мачте
    for l in logs[:10]: print(l)
    b.close()
