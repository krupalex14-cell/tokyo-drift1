import json, sys
from playwright.sync_api import sync_playwright
with sync_playwright() as p:
    b=p.chromium.launch(executable_path='/usr/bin/google-chrome',args=['--no-sandbox','--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist','--allow-file-access-from-files'])
    pg=b.new_page(viewport={'width':390,'height':780},device_scale_factor=1)
    logs=[]; pg.on('console',lambda m:logs.append(m.type+': '+m.text)); pg.on('pageerror',lambda e:logs.append('PAGEERROR '+str(e)))
    pg.goto('file:///home/claude/space/out/index.html'); pg.wait_for_timeout(1500)
    pg.get_by_text('Новая игра').first.click(); pg.wait_for_timeout(400); pg.get_by_text('Песочница').first.click(); pg.get_by_text('Начать').first.click(); pg.wait_for_timeout(3500)
    def shot(n): pg.wait_for_timeout(800); pg.screenshot(path=f'/tmp/{n}.png')
    pg.get_by_text('Ангар').first.click(); pg.wait_for_timeout(1500); shot('au20_hangar')
    pg.get_by_text('Шаблоны').first.click(); pg.wait_for_timeout(500); shot('au21_tpl')
    pg.locator('.ptile', has_text='Falcon 9').first.click(); pg.wait_for_timeout(1200); shot('au22_f9')
    pg.get_by_text('старт', exact=False).first.click(); pg.wait_for_timeout(2500); shot('au30_pad')
    # включаем тягу и ступень
    pg.evaluate("__T().Flight.doStage()"); pg.wait_for_timeout(300); pg.evaluate("__T().Flight.setThr(1)"); pg.wait_for_timeout(12000); shot('au31_ascent')
    print('ST', pg.evaluate("(()=>{const v=__T().Flight.V(); return JSON.stringify({alt:Math.round(Math.hypot(v.x,v.y)-6371000),sp:v.sp&&Math.round(v.sp)})})()"))
    pg.evaluate("__T().UI.go('map')"); pg.wait_for_timeout(1500); shot('au40_map')
    for l in logs[:10]: print(l)
    b.close()
