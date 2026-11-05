package com.tokyodrift.game;

import android.os.Bundle;
import android.view.WindowManager;
import android.webkit.WebView;

import androidx.activity.OnBackPressedCallback;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        registerPlugin(LocalServerPlugin.class);
        super.onCreate(savedInstanceState);
        // the screen should not dim in the middle of a race
        getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
        // system back: let the game close its screens (dialog, map, settings, race → garage → menu);
        // on the main menu the app just goes to the background instead of being killed
        getOnBackPressedDispatcher().addCallback(this, new OnBackPressedCallback(true) {
            @Override
            public void handleOnBackPressed() {
                WebView wv = getBridge() != null ? getBridge().getWebView() : null;
                if (wv == null) { moveTaskToBack(true); return; }
                wv.evaluateJavascript("(window.tdBack&&window.tdBack())?'y':'n'", v -> {
                    if (v == null || !v.contains("y")) moveTaskToBack(true);
                });
            }
        });
    }
}
