#!/usr/bin/env python3
"""Assembles the single-file page web/fly/index.html from the parts in this folder.
usage: python3 build_page.py <responses.json> <three.min.js> <out index.html>"""
import json, sys, pathlib
here = pathlib.Path(__file__).resolve().parent
resp, three, out = sys.argv[1:4]
data = json.dumps(json.load(open(resp, encoding='utf-8')), separators=(',', ':'), ensure_ascii=False)
js3 = open(three, encoding='utf-8').read()
assert '</script' not in js3.lower() and '</script' not in data.lower()
page = f"""<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no">
<meta name="theme-color" content="#0b0f17">
<title>Муха и её настоящий мозг</title>
<style>
{(here/'style.css').read_text(encoding='utf-8')}
</style>
</head>
<body>
{(here/'body.html').read_text(encoding='utf-8')}
<script>
{js3}
</script>
<script>
window.__DATA={data};
</script>
<script>
{(here/'main.js').read_text(encoding='utf-8')}
</script>
</body>
</html>
"""
pathlib.Path(out).write_text(page, encoding='utf-8')
print('written', out, len(page) // 1024, 'KB')
