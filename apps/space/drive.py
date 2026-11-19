import sys, json
from playwright.sync_api import sync_playwright
# usage: drive.py steps.json   steps: [["wait",s],["js",code],["click",text],["shot",name],["tap",x,y]]
steps = json.load(open(sys.argv[1])); url = sys.argv[2] if len(sys.argv)>2 else 'file:///home/claude/space/out/index.html'
w = 390; h = 780
with sync_playwright() as p:
    b = p.chromium.launch(executable_path='/usr/bin/google-chrome', args=['--no-sandbox','--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist','--allow-file-access-from-files'])
    pg = b.new_page(viewport={'width':w,'height':h}, device_scale_factor=1, has_touch=False)
    logs=[]
    pg.on('console', lambda m: logs.append(m.type+': '+m.text))
    pg.on('pageerror', lambda e: logs.append('PAGEERROR: '+str(e)))
    pg.goto(url)
    for st in steps:
        k = st[0]
        try:
            if k=='wait': pg.wait_for_timeout(int(st[1]*1000))
            elif k=='js':
                r = pg.evaluate(st[1])
                if r is not None: print('JS:', r)
            elif k=='click':
                pg.get_by_text(st[1], exact=False).first.click(timeout=3000)
            elif k=='tap': pg.mouse.click(st[1], st[2])
            elif k=='shot': pg.screenshot(path=st[1])
            elif k=='dragshot':
                pg.mouse.move(st[1],st[2]); pg.mouse.down(); pg.mouse.move(st[3],st[4],steps=10); pg.wait_for_timeout(250); pg.screenshot(path=st[5]); pg.mouse.up()
            elif k=='drag':
                pg.mouse.move(st[1],st[2]); pg.mouse.down(); pg.mouse.move(st[3],st[4],steps=8); pg.mouse.up()
        except Exception as e:
            print('STEP FAIL', st, str(e)[:200])
    for l in logs[:25]: print(l)
    b.close()
