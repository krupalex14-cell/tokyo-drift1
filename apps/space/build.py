#!/usr/bin/env python3
"""Сборка одностраничной игры: src/template.html + src/*.js (по порядку) + шрифты (base64) -> out/index.html"""
import base64, sys, os, re
ROOT = os.path.dirname(os.path.abspath(__file__))
ORDER = ['util','bodies','parts','orbits','planner','vessel','physics','world','science','autobuild',
         'gfx','art','render','fx','audio','templates','build','autoui','ui','flight','map','main']
def b64(p): return base64.b64encode(open(os.path.join(ROOT,'fonts',p),'rb').read()).decode()
def main(outs):
    tpl = open(os.path.join(ROOT,'src','template.html'),encoding='utf8').read()
    js = []
    for n in ORDER:
        p = os.path.join(ROOT,'src',n+'.js')
        if os.path.exists(p): js.append('/* ==== %s.js ==== */\n'%n + open(p,encoding='utf8').read())
    fonts = ''
    for name, f, rng in [('Pix','pixelify-sans-latin-400-normal.woff2','U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD'),
                         ('Pix','pixelify-sans-cyrillic-400-normal.woff2','U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116'),
                         ('PixB','pixelify-sans-latin-700-normal.woff2','U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD'),
                         ('PixB','pixelify-sans-cyrillic-700-normal.woff2','U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116')]:
        fonts += "@font-face{font-family:'%s';src:url(data:font/woff2;base64,%s) format('woff2');unicode-range:%s;font-display:block}\n"%(name,b64(f),rng)
    html = tpl.replace('/*@FONTS@*/',fonts).replace('//@JS@','\n'.join(js))
    for o in outs:
        os.makedirs(os.path.dirname(o),exist_ok=True)
        open(o,'w',encoding='utf8').write(html)
        print('wrote',o,len(html)//1024,'KB')
if __name__=='__main__': main(sys.argv[1:] or [os.path.join(ROOT,'out','index.html')])
