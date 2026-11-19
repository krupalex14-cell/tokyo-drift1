import json, sys
from playwright.sync_api import sync_playwright
def si(pg): return pg.evaluate("__T().Tutor.si")
with sync_playwright() as p:
    b=p.chromium.launch(executable_path='/usr/bin/google-chrome',args=['--no-sandbox','--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist','--allow-file-access-from-files'])
    pg=b.new_page(viewport={'width':390,'height':780},device_scale_factor=1)
    logs=[]; pg.on('console',lambda m:logs.append(m.type+': '+m.text)); pg.on('pageerror',lambda e:logs.append('PAGEERROR '+str(e)))
    pg.goto('file:///home/claude/space/out/index.html'); pg.wait_for_timeout(1500)
    pg.get_by_text('Новая игра').first.click(); pg.wait_for_timeout(400); pg.get_by_text('Песочница').first.click(); pg.get_by_text('Начать').first.click(); pg.wait_for_timeout(3500)
    pg.evaluate("__T().Tutor.begin('rover')"); pg.wait_for_timeout(1500)
    pg.screenshot(path='/tmp/lr0.png')
    def tab(n): pg.evaluate("(n)=>[...document.querySelectorAll('.tabs .tab')].find(e=>e.textContent.includes(n)).click()", n); pg.wait_for_timeout(300)
    def tile(n): pg.locator('.ptile', has_text=n).first.click(); pg.wait_for_timeout(500)
    def sel(defId, idx=0, extreme=False):
        pg.evaluate("""([d,i,ex])=>{const B=__T().Builder; let l=B.D.parts.filter(p=>p.defId===d); if(ex) l=l.sort((a,b)=>Math.abs(b.x)-Math.abs(a.x)); B.select(l[i]);}""",[defId,idx,extreme]); pg.wait_for_timeout(300)
    def stp(label): 
        pg.wait_for_timeout(900); print(label, 'step', si(pg))
    tab('Вездеход'); tile('Корпус вездехода'); stp('deck')
    tile('Колесо LRV'); stp('wheels2')
    sel('wheel_lrv',0,True); tile('Колесо LRV'); stp('wheels4')
    sel('rover_deck'); tile('Мачта вездехода'); stp('mast')
    sel('rover_mast'); tab('Наука'); tile('Камера Mastcam'); stp('cam')
    sel('i_mastcam'); tab('Связь'); tile('Антенна среднего усиления'); stp('ant')
    sel('rover_mast'); tab('Энергия'); tile('Раскладная панель'); stp('solar')
    print('PARTS', pg.evaluate("JSON.stringify(__T().Builder.D.parts.map(p=>[p.defId,+p.x.toFixed(2),+p.y.toFixed(2)]))"))
    pg.screenshot(path='/tmp/lr1.png')
    print('ISSUES', pg.evaluate("JSON.stringify(__T().validateDesign(__T().Builder.D.parts,__App.W,{}).issues.map(i=>i.lvl+':'+i.text))"))
    pg.get_by_text('старт', exact=False).first.click(); pg.wait_for_timeout(700)
    pg.get_by_text('Луна', exact=True).first.click(); pg.wait_for_timeout(2500); stp('onmoon')
    box = pg.evaluate("(()=>{const r=__T().Flight.E.right.getBoundingClientRect(); return [r.x+r.width/2, r.y+r.height/2]})()")
    pg.mouse.move(box[0],box[1]); pg.mouse.down()
    for k in range(14):
        pg.wait_for_timeout(1000)
        if si(pg)>=9: break
    pg.mouse.up(); stp('drove')
    pg.screenshot(path='/tmp/lr2.png')
    # тап по панели
    def tap_part(defId, which=0):
        pos = pg.evaluate("""([d,w])=>{const T=__T(),FV=T.FV,F=T.Flight,v=F.V(),S=FV.lastS; const r=__App.cv.getBoundingClientRect(),k=r.width/T.Gfx.w;
          const cps=Math.cos(S.psi),sps=Math.sin(S.psi); const ps=v.parts.filter(p=>p.defId===d); const p=ps[w];
          let px=p.x; if(p.d.solar&&p.d.solar.deploy&&!p.st.deployed){ const hw=1; px=p.x-(p.x<0?-1:1)*Math.max(0,p.w/2-.2);} 
          const X=(px-v.mp.cx), Y=(p.y-v.mp.cy); const sx=S.cx+(X*cps-Y*sps)*S.ppmV, sy=S.cyC-(X*sps+Y*cps)*S.ppmV; return [r.left+sx*k, r.top+sy*k]}""",[defId,which])
        pg.mouse.click(pos[0],pos[1]); pg.wait_for_timeout(600)
    tap_part('solar_small',0)
    print('CARD', pg.evaluate("__T().Flight.pcard ? __T().Flight.pcard.textContent.slice(0,140) : 'none'"))
    pg.screenshot(path='/tmp/lr3.png')
    stp('solar tapped')
    pg.evaluate("__T().Flight.partCard(null)")
    tap_part('i_mastcam',0)
    print('CARD2', pg.evaluate("__T().Flight.pcard ? __T().Flight.pcard.textContent.slice(0,200) : 'none'"))
    pg.evaluate("(()=>{const b=[...__T().Flight.pcard.querySelectorAll('button')].find(e=>e.textContent.includes('Запустить')); if(b) b.click();})()"); pg.wait_for_timeout(1200); stp('camera')
    pg.screenshot(path='/tmp/lr4.png')
    for l in logs[:10]: print(l)
    b.close()
