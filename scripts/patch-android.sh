#!/usr/bin/env bash
# Puts the in-app server (LocalServer plugin) into the generated Android project.
set -e
cd "$(dirname "$0")/.."
D=android/app/src/main/java/com/tokyodrift/game
[ -d android ] || { echo "Сначала: npx cap add android"; exit 1; }
mkdir -p "$D"
cp native/android/LocalServer.java native/android/LocalServerPlugin.java native/android/MainActivity.java "$D/"
echo "Android: плагин LocalServer добавлен ($D)"
