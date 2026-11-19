import json, sys
from playwright.sync_api import sync_playwright
with sync_playwright() as p:
    b=p.chromium.launch(executable_path='/usr/bin/google-chrome',args=['--no-sandbox','--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist','--allow-file-access-from-files'])
    pg=b.new_page(viewport={'width':390,'height':780},device_scale_factor=1)
    logs=[]; pg.on('console',lambda m:logs.append(m.type+': '+m.text)); pg.on('pageerror',lambda e:logs.append('PAGEERROR '+str(e)))
    pg.goto('file:///home/claude/space/out/index.html'); pg.wait_for_timeout(2500)
    pg.screenshot(path='/tmp/au01_menu.png')
    pg.get_by_text('Новая игра').first.click(); pg.wait_for_timeout(600); pg.screenshot(path='/tmp/au02_new.png')
    pg.get_by_text('Песочница').first.click(); pg.wait_for_timeout(300); pg.get_by_text('Начать').first.click(); pg.wait_for_timeout(4000)
    pg.screenshot(path='/tmp/au03_hub.png')
    print('HUB BUTTONS', pg.evaluate("[...document.querySelectorAll('#ui button')].filter(b=>b.offsetParent).map(b=>b.textContent.trim().slice(0,24)).join(' | ')"))
    for l in logs[:10]: print(l)
    b.close()
