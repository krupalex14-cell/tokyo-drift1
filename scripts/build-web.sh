#!/usr/bin/env bash
# Builds the browser version for GitHub Pages into ./site: the same game page as the app,
# plus what iPhone needs to run it full-screen from the home screen (Safari → Share → Add to Home Screen).
set -euo pipefail
rm -rf site && mkdir -p site
cp web/manifest.webmanifest web/icon-180.png web/icon-192.png web/icon-512.png site/
python3 - <<'PY'
src=open('www/index.html',encoding='utf-8').read()
tags=('<meta name="apple-mobile-web-app-capable" content="yes">\n'
      '<meta name="mobile-web-app-capable" content="yes">\n'
      '<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">\n'
      '<meta name="apple-mobile-web-app-title" content="Занос Токио">\n'
      '<meta name="theme-color" content="#0b0a1a">\n'
      '<link rel="apple-touch-icon" href="icon-180.png">\n'
      '<link rel="manifest" href="manifest.webmanifest">\n')
i=src.index('<title>')
open('site/index.html','w',encoding='utf-8').write(src[:i]+tags+src[i:])
PY
touch site/.nojekyll
echo "site ready: $(du -sh site | cut -f1)"
