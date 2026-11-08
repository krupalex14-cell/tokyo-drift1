# Исходники игры

Игра собирается в один файл `www/index.html` (он же `server/index.html`) из частей в `src/`:

- `head.html` — разметка и стили до `<script>`;
- `js/*.js` — модули в порядке из `order.txt`;
- `tail.html` — конец файла.

Сборка: `python3 src/build.py` (ставит в `GAME_BUILD` время сборки по Москве).
