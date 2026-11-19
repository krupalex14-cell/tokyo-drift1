import json, sys
from playwright.sync_api import sync_playwright
LES = int(sys.argv[1]) if len(sys.argv) > 1 else 4
with sync_playwright() as p:
    b=p.chromium.launch(executable_path='/usr/bin/google-chrome',args=['--no-sandbox','--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist','--allow-file-access-from-files'])
    pg=b.new_page(viewport={'width':390,'height':780},device_scale_factor=1)
    logs=[]; pg.on('console',lambda m:logs.append(m.type+': '+m.text)); pg.on('pageerror',lambda e:logs.append('PAGEERROR '+str(e)))
    pg.goto('file:///home/claude/space/out/index.html'); pg.wait_for_timeout(1500)
    pg.get_by_text('Новая игра').first.click(); pg.wait_for_timeout(400); pg.get_by_text('Песочница').first.click(); pg.get_by_text('Начать').first.click(); pg.wait_for_timeout(3500)
    pg.evaluate(f"__T().TUT_LESSONS[{LES}].start()"); pg.wait_for_timeout(2500)
    pg.screenshot(path='/tmp/f1.png')
    print('INFO', pg.evaluate("(()=>{const T=__T(),F=T.Flight,v=F.V(); return JSON.stringify({parts:v.parts.map(p=>p.d.id),hud:F.hudMode,mode:v.mode})})()"))
    # pan by finger
    pg.mouse.move(195,300); pg.mouse.down(); pg.mouse.move(120,380,steps=10); pg.mouse.up(); pg.wait_for_timeout(400)
    print('PAN', pg.evaluate("(()=>{const T=__T(); return JSON.stringify({cen:!T.Flight.E.cenB.classList.contains('hide')})})()"))
    pg.screenshot(path='/tmp/f2.png')
    # tap on a part: find screen position of first non-fuselage part via FV.lastS
    r = pg.evaluate("""(()=>{const T=__T(),FV=T.FV,F=T.Flight,v=F.V(),S=FV.lastS; const r=__App.cv.getBoundingClientRect(),k=r.width/T.Gfx.w;
      const cps=Math.cos(S.psi),sps=Math.sin(S.psi); const out=[];
      for(const p of v.parts){ const X=(p.x-v.mp.cx), Y=(p.y-v.mp.cy); const sx=S.cx+(X*cps-Y*sps)*S.ppmV, sy=S.cyC-(X*sps+Y*cps)*S.ppmV; out.push([p.d.id,Math.round(r.left+sx*k),Math.round(r.top+sy*k)]); } return JSON.stringify(out)})()""")
    print('POS', r)
    pts = json.loads(r)
    for pid,x,y in pts[:1]:
        pass
    pg.evaluate("__T().Flight.E.cenB.click()"); pg.wait_for_timeout(300); print("CEN hidden after click:", pg.evaluate("__T().Flight.E.cenB.classList.contains('hide')"))
    r = json.loads(pg.evaluate("""(()=>{const T=__T(),FV=T.FV,F=T.Flight,v=F.V(),S=FV.lastS; const r=__App.cv.getBoundingClientRect(),k=r.width/T.Gfx.w;
      const cps=Math.cos(S.psi),sps=Math.sin(S.psi); const out=[];
      for(const p of v.parts){ const X=(p.x-v.mp.cx), Y=(p.y-v.mp.cy); const sx=S.cx+(X*cps-Y*sps)*S.ppmV, sy=S.cyC-(X*sps+Y*cps)*S.ppmV; out.push([p.d.id,Math.round(r.left+sx*k),Math.round(r.top+sy*k)]); } return JSON.stringify(out)})()"""))
    for pid,x,y in r:
        pg.mouse.click(x,y); pg.wait_for_timeout(500)
        has = pg.evaluate("!!__T().Flight.pcard")
        title = pg.evaluate("__T().Flight.pcard ? __T().Flight.pcard.textContent.slice(0,120) : ''")
        print('TAP', pid, x, y, has, title)
        if has: pg.screenshot(path=f'/tmp/f_tap_{pid}.png')
        pg.evaluate("__T().Flight.partCard(null)"); pg.wait_for_timeout(700)
    for l in logs[:10]: print(l)
    b.close()
