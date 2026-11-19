import json, sys
from playwright.sync_api import sync_playwright
def run():
  with sync_playwright() as p:
    b=p.chromium.launch(executable_path='/usr/bin/google-chrome',args=['--no-sandbox','--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist','--allow-file-access-from-files'])
    pg=b.new_page(viewport={'width':390,'height':780},device_scale_factor=1)
    logs=[]; pg.on('console',lambda m:logs.append(m.type+': '+m.text)); pg.on('pageerror',lambda e:logs.append('PAGEERROR '+str(e)))
    pg.goto('file:///home/claude/space/out/index.html'); pg.wait_for_timeout(1500)
    pg.get_by_text('Новая игра').first.click(); pg.wait_for_timeout(400); pg.get_by_text('Песочница').first.click(); pg.get_by_text('Начать').first.click(); pg.wait_for_timeout(3500)
    def shot(n): pg.wait_for_timeout(700); pg.screenshot(path=f'/tmp/{n}.png')
    def back():
        # закрыть лист/вернуться
        pg.evaluate("(()=>{const x=[...document.querySelectorAll('#ui button')].find(b=>b.offsetParent&&(b.textContent.trim()==='✕'||b.querySelector('i[data-n=x]'))); if(x) x.click();})()"); pg.wait_for_timeout(400)
    pg.get_by_text('Обучение').first.click(); shot('au10_tut'); back()
    pg.get_by_text('Готовые ракеты').first.click(); shot('au11_examples'); 
    pg.evaluate("document.querySelector('.sheet, .sh')&&0")
    back()
    pg.get_by_text('Контракты').first.click(); shot('au12_contracts'); back()
    pg.get_by_text('Наука').first.click(); shot('au13_science'); back()
    pg.get_by_text('Технологии').first.click(); shot('au14_tech'); back()
    pg.get_by_text('Читы').first.click(); shot('au15_cheats'); back()
    pg.get_by_text('Меню').first.click(); shot('au16_menu'); back()
    pg.get_by_text('Ангар').first.click(); pg.wait_for_timeout(1200); shot('au20_hangar')
    for l in logs[:10]: print(l)
    b.close()
run()
