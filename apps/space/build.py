#!/usr/bin/env python3
"""Сборка одностраничной игры: src/template.html + src/*.js (по порядку) + шрифты (base64) -> out/index.html"""
import base64, sys, os, re
ROOT = os.path.dirname(os.path.abspath(__file__))
ORDER = ['util','bodies','parts','orbits','planner','vessel','physics','world','science','autobuild',
         'gfx','art','render','fx','audio','templates','info','pxicons','build','stages','autoui','ui','tutor','flight','map','main']
def b64(p): return base64.b64encode(open(os.path.join(ROOT,'fonts',p),'rb').read()).decode()
def main(outs):
    tpl = open(os.path.join(ROOT,'src','template.html'),encoding='utf8').read()
    js = []
    for n in ORDER:
        p = os.path.join(ROOT,'src',n+'.js')
        if os.path.exists(p): js.append('/* ==== %s.js ==== */\n'%n + open(p,encoding='utf8').read())
    fonts = ''
    # шрифты из наших прежних игр: TokyoPx («Занос Токио»; +добавленные Δ ≈ ≤ ≥ π Σ ∞ ± стрелки) и Unifont (как в шахматах) — для остальных символов
    fonts += "@font-face{font-family:'Pix';src:url(data:font/ttf;base64,%s) format('truetype');font-display:block}\n"%b64('tokyopx.ttf')
    fonts += "@font-face{font-family:'PixU';src:url(data:font/woff;base64,%s) format('woff');font-display:block}\n"%b64('unifont-sub.woff')
    html = tpl.replace('/*@FONTS@*/',fonts).replace('//@JS@','\n'.join(js))
    for o in outs:
        os.makedirs(os.path.dirname(o),exist_ok=True)
        open(o,'w',encoding='utf8').write(html)
        print('wrote',o,len(html)//1024,'KB')
if __name__=='__main__': main(sys.argv[1:] or [os.path.join(ROOT,'out','index.html')])
