import json, sys
from playwright.sync_api import sync_playwright
with sync_playwright() as p:
    b=p.chromium.launch(executable_path='/usr/bin/google-chrome',args=['--no-sandbox','--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist','--allow-file-access-from-files'])
    pg=b.new_page(viewport={'width':390,'height':780},device_scale_factor=1)
    logs=[]; pg.on('pageerror',lambda e:logs.append('PAGEERROR '+str(e)))
    pg.goto('file:///home/claude/space/out/index.html'); pg.wait_for_timeout(1500)
    pg.get_by_text('Новая игра').first.click(); pg.wait_for_timeout(400); pg.get_by_text('Песочница').first.click(); pg.get_by_text('Начать').first.click(); pg.wait_for_timeout(3500)
    pg.evaluate("__T().Tutor.begin('orbit')"); pg.wait_for_timeout(2000); pg.evaluate("__T().Tutor.stop()")
    st=lambda: pg.evaluate("(()=>{const F=__T().Flight; return JSON.stringify({mode:F.hudMode, lcol:F.E.lcol.style.display, h2:F.E.hud2.style.display})})()")
    print('start', st())
    pg.locator('.trbtns button', has_text='HUD').click(); pg.wait_for_timeout(500); print('click1', st()); pg.screenshot(path='/tmp/hud_full.png')
    pg.locator('.trbtns button', has_text='HUD').click(); pg.wait_for_timeout(500); print('click2', st()); pg.screenshot(path='/tmp/hud_off.png')
    pg.locator('.trbtns button', has_text='HUD').click(); pg.wait_for_timeout(500); print('click3', st())
    # панорама и двойной тап
    pg.mouse.move(200,300); pg.mouse.down(); pg.mouse.move(120,380,steps=8); pg.mouse.up(); pg.wait_for_timeout(300)
    print('pan cen shown', pg.evaluate("!__T().Flight.E.cenB.classList.contains('hide')"))
    pg.mouse.click(300,450); pg.wait_for_timeout(120); pg.mouse.click(302,452); pg.wait_for_timeout(400)
    print('after dbl-tap cen shown', pg.evaluate("!__T().Flight.E.cenB.classList.contains('hide')"))
    # колесо мыши — зум
    pg.mouse.move(195,300); pg.mouse.wheel(0,-300); pg.wait_for_timeout(300)
    print('ERR', logs)
    b.close()
