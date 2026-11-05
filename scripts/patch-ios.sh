#!/usr/bin/env bash
# Puts the in-app server (LocalServer plugin) into the generated iOS project. Run on a Mac.
set -e
cd "$(dirname "$0")/.."
A=ios/App/App
[ -d "$A" ] || { echo "Сначала: npx cap add ios"; exit 1; }
cp native/ios/LocalServerPlugin.swift native/ios/MainViewController.swift "$A/"
# the storyboard should create our view controller (it registers the plugin)
sed -i '' 's/customClass="CAPBridgeViewController" customModule="Capacitor"/customClass="MainViewController" customModule="App" customModuleProvider="target"/' "$A/Base.lproj/Main.storyboard" || true
/usr/libexec/PlistBuddy -c "Add :NSLocalNetworkUsageDescription string 'Чтобы друг мог подключиться к твоей игре по Wi-Fi или точке доступа'" "$A/Info.plist" 2>/dev/null || \
/usr/libexec/PlistBuddy -c "Set :NSLocalNetworkUsageDescription 'Чтобы друг мог подключиться к твоей игре по Wi-Fi или точке доступа'" "$A/Info.plist"
echo "iOS: файлы скопированы. Откройте Xcode (npx cap open ios) и перетащите"
echo "     LocalServerPlugin.swift и MainViewController.swift из папки App в группу App (Target: App)."
