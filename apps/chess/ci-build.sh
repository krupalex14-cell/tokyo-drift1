#!/usr/bin/env bash
# Cloud build of the pixel chess APK (used by .github/workflows/chess-android.yml)
set -euxo pipefail
cd "$(dirname "$0")"
rm -rf www && mkdir -p www
# the page itself is encrypted; the app asks for the personal link once and remembers the key
cp ../../web/p/index.html www/index.html
# the chess engine goes inside the app, so the bot is strong without internet or VPN
for u in https://cdnjs.cloudflare.com/ajax/libs/stockfish.js/10.0.2/stockfish.js \
         https://cdn.jsdelivr.net/npm/stockfish.js@10.0.2/stockfish.js \
         https://unpkg.com/stockfish.js@10.0.2/stockfish.js; do
  if curl -fsSL --retry 3 "$u" -o www/stockfish.js && [ "$(wc -c < www/stockfish.js)" -gt 100000 ]; then break; fi
  rm -f www/stockfish.js
done
ls -la www/stockfish.js || echo "stockfish.js not downloaded: the app will use its built-in engine"
cat > www/THIRD-PARTY.txt <<'TXT'
stockfish.js 10.0.2: the Stockfish chess engine compiled to JavaScript. License: GNU GPL v3.
Source: https://github.com/nmrugg/stockfish.js and https://github.com/official-stockfish/Stockfish
TXT
npm install --no-audit --no-fund
npx cap add android
npx --yes @capacitor/assets@3 generate --android --iconBackgroundColor '#1a1c2c' --splashBackgroundColor '#1a1c2c' || echo "icons skipped"
# the same fixed debug key as the drift app, so new builds install over old ones
mkdir -p ~/.android && cp ../../keys/debug.keystore ~/.android/debug.keystore
npx cap sync android
cd android
chmod +x gradlew
./gradlew assembleDebug --no-daemon --stacktrace
cp app/build/outputs/apk/debug/app-debug.apk ../pixel-chess.apk
ls -la ../pixel-chess.apk
