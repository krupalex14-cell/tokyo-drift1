import json, sys
from playwright.sync_api import sync_playwright
WARP = int(sys.argv[1]) if len(sys.argv) > 1 else -1
with sync_playwright() as p:
    b=p.chromium.launch(executable_path='/usr/bin/google-chrome',args=['--no-sandbox','--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist','--allow-file-access-from-files'])
    pg=b.new_page(viewport={'width':390,'height':780},device_scale_factor=1)
    logs=[]; pg.on('console',lambda m:logs.append(m.type+': '+m.text)); pg.on('pageerror',lambda e:logs.append('PAGEERROR '+str(e)))
    pg.goto('file:///home/claude/space/out/index.html'); pg.wait_for_timeout(1500)
    pg.get_by_text('Новая игра').first.click(); pg.wait_for_timeout(400); pg.get_by_text('Песочница').first.click(); pg.get_by_text('Начать').first.click(); pg.wait_for_timeout(3500)
    pg.evaluate("__T().Tutor.begin('autoland')"); pg.wait_for_timeout(1500)
    pg.evaluate("__T().Flight.startLand()"); pg.wait_for_timeout(500)
    if WARP >= 0: pg.evaluate(f"__App.W.autoWarp=false; __App.W.setWarp({WARP})")
    for i in range(40):
        pg.wait_for_timeout(3000)
        r = pg.evaluate("(()=>{const W=__App.W,v=__T().Flight.V(); if(!v) return 'novessel'; return JSON.stringify({t:Math.round(W.ut),ph:v.ap&&v.ap.phase,done:v.ap&&v.ap.done,mode:v.mode,warp:W.warpIdx!=null?W.warpIdx:W.warp,alive:v.alive!==false,imp:v.lastImpact&&+(+v.lastImpact).toFixed?+(+v.lastImpact).toFixed(2):v.lastImpact})})()")
        print(i*3+3, r)
        if '"mode":"landed"' in r or 'novessel' in r: break
    pg.screenshot(path='/tmp/l1.png')
    for l in logs[:10]: print(l)
    b.close()
