package com.tokyodrift.game;

import android.content.Context;
import android.util.Base64;

import org.json.JSONArray;
import org.json.JSONObject;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.Inet4Address;
import java.net.InetAddress;
import java.net.InetSocketAddress;
import java.net.NetworkInterface;
import java.net.ServerSocket;
import java.net.Socket;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Enumeration;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

/**
 * Tiny HTTP + WebSocket relay that runs inside the host's app. Same protocol as server/server.js:
 *   GET /  -> the game (assets/public/index.html), GET /info -> {"ips":[..],"port":N,"players":N}
 *   WS /ws -> relay. The host's own game is the virtual player 1 and talks to us through the plugin.
 */
final class LocalServer {
    interface Emitter { void emit(String json); }

    private static final String GUID = "258EAFA5-E914-47DA-95CA-C5AB0DC85B11";
    private static final int MAXP = 4, HOST_ID = 1;

    private final Context ctx;
    private final Emitter toHost;
    private ServerSocket ss;
    private volatile boolean running;
    int port;
    private int nextId = 2;
    private final Map<Integer, Client> clients = new LinkedHashMap<>();

    private static final class Client {
        final int id; final Socket sock; final OutputStream out;
        Client(int id, Socket s, OutputStream o) { this.id = id; this.sock = s; this.out = o; }
    }

    LocalServer(Context ctx, Emitter toHost) { this.ctx = ctx; this.toHost = toHost; }

    /** binds synchronously (tries a few ports), then accepts on a background thread */
    void start(int wanted) throws IOException {
        IOException last = null;
        for (int p = wanted; p < wanted + 6; p++) {
            try {
                ServerSocket s = new ServerSocket();
                s.setReuseAddress(true);
                s.bind(new InetSocketAddress(p));
                ss = s; port = p; break;
            } catch (IOException e) { last = e; }
        }
        if (ss == null) throw last != null ? last : new IOException("bind failed");
        running = true;
        Thread t = new Thread(() -> {
            while (running) {
                try { Socket c = ss.accept(); new Thread(() -> handle(c), "td-client").start(); }
                catch (IOException e) { if (!running) break; }
            }
        }, "td-accept");
        t.setDaemon(true);
        t.start();
    }

    void stop() {
        running = false;
        try { if (ss != null) ss.close(); } catch (IOException ignored) {}
        synchronized (clients) { for (Client c : clients.values()) try { c.sock.close(); } catch (IOException ignored) {} clients.clear(); }
    }

    int players() { synchronized (clients) { return clients.size() + 1; } }

    void emitWelcome() {
        try { JSONObject o = new JSONObject(); o.put("t", "welcome"); o.put("id", HOST_ID); o.put("host", true); JSONArray p = new JSONArray(); synchronized (clients) { for (Integer id : clients.keySet()) p.put(id); } o.put("peers", p); toHost.emit(o.toString()); } catch (Exception ignored) {}
    }

    /** a message from the host's own game */
    void fromHost(String text) {
        try {
            JSONObject m = new JSONObject(text);
            if ("png".equals(m.optString("t"))) { JSONObject r = new JSONObject(); r.put("t", "pong"); r.put("ts", m.opt("ts")); toHost.emit(r.toString()); return; }
            m.put("f", HOST_ID);
            int to = m.optInt("to", 0);
            String s = m.toString();
            synchronized (clients) {
                if (to != 0) { Client c = clients.get(to); if (c != null) send(c, s); }
                else for (Client c : clients.values()) send(c, s);
            }
        } catch (Exception ignored) {}
    }

    private void fromGuest(Client from, String text) {
        try {
            JSONObject m = new JSONObject(text);
            if ("png".equals(m.optString("t"))) { JSONObject r = new JSONObject(); r.put("t", "pong"); r.put("ts", m.opt("ts")); send(from, r.toString()); return; }
            m.put("f", from.id);
            int to = m.optInt("to", 0);
            String s = m.toString();
            if (to == HOST_ID) { toHost.emit(s); return; }
            synchronized (clients) {
                if (to != 0) { Client c = clients.get(to); if (c != null) send(c, s); return; }
                for (Client c : clients.values()) if (c != from) send(c, s);
            }
            toHost.emit(s);
        } catch (Exception ignored) {}
    }

    private void handle(Socket sock) {
        try {
            sock.setTcpNoDelay(true);
            InputStream in = sock.getInputStream();
            OutputStream out = sock.getOutputStream();
            String head = readHead(in);
            if (head == null) { sock.close(); return; }
            String[] lines = head.split("\r\n");
            String[] req = lines[0].split(" ");
            String path = req.length > 1 ? req[1].split("\\?")[0] : "/";
            String key = null; boolean upgrade = false;
            for (String l : lines) {
                int i = l.indexOf(':'); if (i < 0) continue;
                String k = l.substring(0, i).trim().toLowerCase(), v = l.substring(i + 1).trim();
                if (k.equals("sec-websocket-key")) key = v;
                if (k.equals("upgrade") && v.equalsIgnoreCase("websocket")) upgrade = true;
            }
            if (upgrade && key != null && path.equals("/ws")) { websocket(sock, in, out, key); return; }
            if (path.equals("/info")) {
                JSONObject o = new JSONObject(); o.put("ips", new JSONArray(ips())); o.put("port", port); o.put("players", players());
                http(out, "200 OK", "application/json", o.toString().getBytes(StandardCharsets.UTF_8));
            } else if (path.equals("/") || path.equals("/index.html")) {
                http(out, "200 OK", "text/html; charset=utf-8", readAsset("public/index.html"));
            } else http(out, "404 Not Found", "text/plain", "not found".getBytes(StandardCharsets.UTF_8));
            sock.close();
        } catch (Exception e) { try { sock.close(); } catch (IOException ignored) {} }
    }

    private void websocket(Socket sock, InputStream in, OutputStream out, String key) throws Exception {
        String acc = Base64.encodeToString(MessageDigest.getInstance("SHA-1").digest((key + GUID).getBytes(StandardCharsets.UTF_8)), Base64.NO_WRAP);
        out.write(("HTTP/1.1 101 Switching Protocols\r\nUpgrade: websocket\r\nConnection: Upgrade\r\nSec-WebSocket-Accept: " + acc + "\r\n\r\n").getBytes(StandardCharsets.UTF_8));
        out.flush();
        Client me;
        JSONArray peers = new JSONArray();
        synchronized (clients) {
            if (clients.size() + 1 >= MAXP) { Client tmp = new Client(0, sock, out); send(tmp, "{\"t\":\"full\"}"); sock.close(); return; }
            me = new Client(nextId++, sock, out);
            peers.put(HOST_ID);
            for (Integer id : clients.keySet()) peers.put(id);
            clients.put(me.id, me);
        }
        JSONObject w = new JSONObject(); w.put("t", "welcome"); w.put("id", me.id); w.put("host", false); w.put("peers", peers);
        send(me, w.toString());
        String join = "{\"t\":\"join\",\"id\":" + me.id + "}";
        synchronized (clients) { for (Client c : clients.values()) if (c != me) send(c, join); }
        toHost.emit(join);
        try {
            while (running) {
                int b0 = in.read(), b1 = in.read();
                if (b0 < 0 || b1 < 0) break;
                int op = b0 & 15; boolean masked = (b1 & 128) != 0; long len = b1 & 127;
                if (len == 126) len = ((in.read() & 255) << 8) | (in.read() & 255);
                else if (len == 127) { len = 0; for (int i = 0; i < 8; i++) len = (len << 8) | (in.read() & 255); }
                if (len > (1 << 20)) break;
                byte[] mask = new byte[4];
                if (masked) readFully(in, mask);
                byte[] p = new byte[(int) len];
                readFully(in, p);
                if (masked) for (int i = 0; i < p.length; i++) p[i] ^= mask[i & 3];
                if (op == 1) fromGuest(me, new String(p, StandardCharsets.UTF_8));
                else if (op == 8) break;
                else if (op == 9) synchronized (me.out) { me.out.write(new byte[]{(byte) 0x8A, (byte) p.length}); me.out.write(p); me.out.flush(); }
            }
        } catch (IOException ignored) {}
        drop(me);
    }

    private void drop(Client c) {
        boolean had;
        synchronized (clients) { had = clients.remove(c.id) != null; }
        try { c.sock.close(); } catch (IOException ignored) {}
        if (!had) return;
        String leave = "{\"t\":\"leave\",\"id\":" + c.id + "}";
        synchronized (clients) { for (Client o : clients.values()) send(o, leave); }
        toHost.emit(leave);
    }

    private static void send(Client c, String text) {
        byte[] p = text.getBytes(StandardCharsets.UTF_8);
        int n = p.length;
        byte[] h;
        if (n < 126) h = new byte[]{(byte) 0x81, (byte) n};
        else if (n < 65536) h = new byte[]{(byte) 0x81, 126, (byte) (n >> 8), (byte) n};
        else { h = new byte[10]; h[0] = (byte) 0x81; h[1] = 127; for (int i = 0; i < 8; i++) h[9 - i] = (byte) ((long) n >> (8 * i)); }
        try { synchronized (c.out) { c.out.write(h); c.out.write(p); c.out.flush(); } } catch (IOException ignored) {}
    }

    private static void http(OutputStream out, String status, String type, byte[] body) throws IOException {
        out.write(("HTTP/1.1 " + status + "\r\nContent-Type: " + type + "\r\nContent-Length: " + body.length + "\r\nCache-Control: no-store\r\nAccess-Control-Allow-Origin: *\r\nConnection: close\r\n\r\n").getBytes(StandardCharsets.UTF_8));
        out.write(body);
        out.flush();
    }

    private byte[] readAsset(String name) throws IOException {
        try (InputStream a = ctx.getAssets().open(name)) {
            ByteArrayOutputStream b = new ByteArrayOutputStream();
            byte[] buf = new byte[16384]; int r;
            while ((r = a.read(buf)) > 0) b.write(buf, 0, r);
            return b.toByteArray();
        }
    }

    private static String readHead(InputStream in) throws IOException {
        ByteArrayOutputStream b = new ByteArrayOutputStream();
        int state = 0, c;
        while ((c = in.read()) >= 0) {
            b.write(c);
            if (b.size() > 16384) return null;
            state = (c == '\r' && (state == 0 || state == 2)) ? state + 1 : (c == '\n' && (state == 1 || state == 3)) ? state + 1 : 0;
            if (state == 4) return b.toString("UTF-8");
        }
        return null;
    }

    private static void readFully(InputStream in, byte[] a) throws IOException {
        int o = 0;
        while (o < a.length) { int r = in.read(a, o, a.length - o); if (r < 0) throw new IOException("eof"); o += r; }
    }

    /** IPv4 addresses of this phone; hotspot / Wi-Fi (private ranges) first */
    static List<String> ips() {
        List<String> pri = new ArrayList<>(), rest = new ArrayList<>();
        try {
            for (NetworkInterface ni : Collections.list(NetworkInterface.getNetworkInterfaces())) {
                if (!ni.isUp() || ni.isLoopback()) continue;
                for (InetAddress a : Collections.list(ni.getInetAddresses())) {
                    if (!(a instanceof Inet4Address) || a.isLoopbackAddress()) continue;
                    String ip = a.getHostAddress();
                    if (ip.startsWith("192.168.") || ip.startsWith("10.") || ip.matches("^172\\.(1[6-9]|2\\d|3[01])\\..*")) pri.add(ip); else rest.add(ip);
                }
            }
        } catch (Exception ignored) {}
        pri.addAll(rest);
        return pri;
    }
}
