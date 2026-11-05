package com.tokyodrift.game;

import com.getcapacitor.JSArray;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

/** JS: Capacitor.Plugins.LocalServer.start({port}) / send({data}) / stop(); events: "msg" {data} */
@CapacitorPlugin(name = "LocalServer")
public class LocalServerPlugin extends Plugin {
    private LocalServer server;

    @PluginMethod
    public void start(PluginCall call) {
        int port = call.getInt("port", 8080);
        if (server != null) server.stop();
        LocalServer s = new LocalServer(getContext(), json -> {
            JSObject o = new JSObject();
            o.put("data", json);
            notifyListeners("msg", o);
        });
        try {
            s.start(port);
        } catch (Exception e) {
            call.reject("Could not start the server: " + e.getMessage());
            return;
        }
        server = s;
        JSObject r = new JSObject();
        r.put("port", s.port);
        r.put("ips", new JSArray(LocalServer.ips()));
        call.resolve(r);
        s.emitWelcome();
    }

    @PluginMethod
    public void send(PluginCall call) {
        String d = call.getString("data");
        if (server != null && d != null) server.fromHost(d);
        call.resolve();
    }

    @PluginMethod
    public void stop(PluginCall call) {
        if (server != null) server.stop();
        server = null;
        call.resolve();
    }

    @Override
    protected void handleOnDestroy() {
        if (server != null) server.stop();
        server = null;
    }
}
