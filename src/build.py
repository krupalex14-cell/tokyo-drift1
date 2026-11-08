#!/usr/bin/env python3
"""Builds the single-file game from src/: head.html + js modules (src/order.txt) + tail.html.
Writes www/index.html and server/index.html (same file). Stamps GAME_BUILD with Moscow time."""
import os,re,datetime,sys
here=os.path.dirname(os.path.abspath(__file__));root=os.path.dirname(here)
rd=lambda p:open(os.path.join(here,p),encoding='utf-8').read()
order=[l.strip() for l in rd('order.txt').split('\n') if l.strip()]
parts=[rd('head.html')]+[rd('js/%s.js'%n) for n in order]+[rd('tail.html')]
out='\n'.join(parts)
if '--keep-stamp' not in sys.argv:
    t=datetime.datetime.now(datetime.timezone.utc)+datetime.timedelta(hours=3)
    out=re.sub(r"var GAME_BUILD='[^']*'","var GAME_BUILD='%s'"%t.strftime('%d.%m %H:%M'),out,count=1)
for p in ('www/index.html','server/index.html'):
    open(os.path.join(root,p),'w',encoding='utf-8').write(out)
print('built',len(out),'bytes,',len(order),'modules')
