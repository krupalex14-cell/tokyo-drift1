import json, sys
from playwright.sync_api import sync_playwright
ID = sys.argv[1] if len(sys.argv) > 1 else 'autoland'
with sync_playwright() as p:
    b=p.chromium.launch(executable_path='/usr/bin/google-chrome',args=['--no-sandbox','--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist','--allow-file-access-from-files'])
    pg=b.new_page(viewport={'width':390,'height':780},device_scale_factor=1)
    logs=[]; pg.on('console',lambda m:logs.append(m.type+': '+m.text)); pg.on('pageerror',lambda e:logs.append('PAGEERROR '+str(e)))
    pg.goto('file:///home/claude/space/out/index.html'); pg.wait_for_timeout(1500)
    pg.get_by_text('Новая игра').first.click(); pg.wait_for_timeout(400); pg.get_by_text('Песочница').first.click(); pg.get_by_text('Начать').first.click(); pg.wait_for_timeout(3500)
    pg.evaluate(f"__T().Tutor.begin('{ID}')"); pg.wait_for_timeout(3000)
    pg.screenshot(path='/tmp/t1.png')
    pg.evaluate("document.querySelector('.tut.pn .row').click()"); pg.wait_for_timeout(600)
    pg.screenshot(path='/tmp/t2.png')
    print('cardH', pg.evaluate("(()=>{const c=document.querySelector('.tut.pn');return c.offsetHeight})()"))
    for l in logs[:10]: print(l)
    b.close()
