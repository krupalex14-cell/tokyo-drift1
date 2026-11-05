#!/usr/bin/env bash
# Cloud build of the Android APK (used by .github/workflows/android.yml)
set -euxo pipefail
cd "$(dirname "$0")/.."
npm install --no-audit --no-fund
npx cap add android
bash scripts/patch-android.sh
# app icon + splash from assets/ (optional: the build goes on with the default icon if this fails)
npx --yes @capacitor/assets@3 generate --android --iconBackgroundColor '#171226' --splashBackgroundColor '#171226' || echo "icons skipped"
# one fixed debug key, so a new build installs over the old one and keeps the saves
mkdir -p ~/.android && cp keys/debug.keystore ~/.android/debug.keystore
npx cap sync android
cd android
chmod +x gradlew
./gradlew assembleDebug --no-daemon --stacktrace
cp app/build/outputs/apk/debug/app-debug.apk ../tokyo-drift.apk
ls -la ../tokyo-drift.apk
