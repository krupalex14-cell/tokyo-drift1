import json, sys
from playwright.sync_api import sync_playwright
with sync_playwright() as p:
    b=p.chromium.launch(executable_path='/usr/bin/google-chrome',args=['--no-sandbox','--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist','--allow-file-access-from-files'])
    pg=b.new_page(viewport={'width':390,'height':780},device_scale_factor=1)
    logs=[]; pg.on('console',lambda m:logs.append(m.type+': '+m.text) if m.type=='error' and 'vibrate' not in m.text else None); pg.on('pageerror',lambda e:logs.append('PAGEERROR '+str(e)))
    pg.goto('file:///home/claude/space/out/index.html'); pg.wait_for_timeout(1500)
    pg.get_by_text('Новая игра').first.click(); pg.wait_for_timeout(400); pg.get_by_text('Песочница').first.click(); pg.get_by_text('Начать').first.click(); pg.wait_for_timeout(3500)
    for id in ['build','flight','orbit','moon','autoland','mars','chute','rover']:
        pg.evaluate(f"__T().Tutor.begin('{id}')"); pg.wait_for_timeout(2500)
        info = pg.evaluate("(()=>{const T=__T(); const c=document.querySelector('.tut.pn'); return JSON.stringify({card:!!c, h:c&&c.offsetHeight, mode:__App.mode, step:T.Tutor.si, failed:T.Tutor.failed})})()")
        print(id, info)
        pg.screenshot(path=f'/tmp/les_{id}.png')
        pg.evaluate("__T().Tutor.stop()")
    print('ERRORS', logs[:6])
    b.close()
