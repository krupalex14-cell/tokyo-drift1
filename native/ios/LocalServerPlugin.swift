import Foundation
import Capacitor
import Network
import CryptoKit

/// JS: Capacitor.Plugins.LocalServer.start({port}) / send({data}) / stop(); events: "msg" {data}
@objc(LocalServerPlugin)
public class LocalServerPlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "LocalServerPlugin"
    public let jsName = "LocalServer"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "start", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "send", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "stop", returnType: CAPPluginReturnPromise)
    ]
    private var server: LocalServer?

    @objc func start(_ call: CAPPluginCall) {
        let port = call.getInt("port") ?? 8080
        server?.stop()
        let s = LocalServer { [weak self] json in
            self?.notifyListeners("msg", data: ["data": json])
        }
        server = s
        s.start(from: UInt16(port)) { ok, actual in
            if ok {
                call.resolve(["port": Int(actual), "ips": LocalServer.ips()])
                s.emitWelcome()
            } else {
                call.reject("Could not start the server")
            }
        }
    }

    @objc func send(_ call: CAPPluginCall) {
        if let d = call.getString("data") { server?.fromHost(d) }
        call.resolve()
    }

    @objc func stop(_ call: CAPPluginCall) {
        server?.stop()
        server = nil
        call.resolve()
    }
}

/// Tiny HTTP + WebSocket relay, same protocol as server/server.js. The host's game is player 1.
final class LocalServer {
    private static let guid = "258EAFA5-E914-47DA-95CA-C5AB0DC85B11"
    private let maxPlayers = 4, hostId = 1
    private let q = DispatchQueue(label: "tokyodrift.localserver")
    private let toHost: (String) -> Void
    private var listener: NWListener?
    private var nextId = 2
    private var clients: [Int: Client] = [:]
    private(set) var port: UInt16 = 0

    final class Client {
        var id = 0
        let conn: NWConnection
        var buf = Data()
        var ws = false
        init(_ c: NWConnection) { conn = c }
    }

    init(toHost: @escaping (String) -> Void) { self.toHost = toHost }

    func start(from wanted: UInt16, tries: Int = 6, done: @escaping (Bool, UInt16) -> Void) {
        q.async { self.tryListen(wanted, left: tries, done: done) }
    }

    private func tryListen(_ p: UInt16, left: Int, done: @escaping (Bool, UInt16) -> Void) {
        guard left > 0, let np = NWEndpoint.Port(rawValue: p) else { done(false, 0); return }
        let params = NWParameters.tcp
        params.allowLocalEndpointReuse = true
        guard let l = try? NWListener(using: params, on: np) else { tryListen(p + 1, left: left - 1, done: done); return }
        var finished = false
        l.newConnectionHandler = { [weak self] c in self?.accept(c) }
        l.stateUpdateHandler = { [weak self] st in
            guard let self = self, !finished else { return }
            switch st {
            case .ready:
                finished = true; self.listener = l; self.port = p; done(true, p)
            case .failed(_):
                finished = true; l.cancel(); self.tryListen(p + 1, left: left - 1, done: done)
            default: break
            }
        }
        l.start(queue: q)
    }

    func stop() {
        q.async {
            self.listener?.cancel(); self.listener = nil
            for c in self.clients.values { c.conn.cancel() }
            self.clients.removeAll()
        }
    }

    func emitWelcome() {
        q.async {
            let peers = Array(self.clients.keys).sorted()
            self.emit(["t": "welcome", "id": self.hostId, "host": true, "peers": peers])
        }
    }

    /// a message from the host's own game
    func fromHost(_ text: String) {
        q.async {
            guard var m = Self.parse(text) else { return }
            if (m["t"] as? String) == "png" { self.emit(["t": "pong", "ts": m["ts"] ?? 0]); return }
            m["f"] = self.hostId
            guard let s = Self.json(m) else { return }
            if let to = m["to"] as? Int, to != 0 { if let c = self.clients[to] { self.sendText(c, s) }; return }
            for c in self.clients.values { self.sendText(c, s) }
        }
    }

    // MARK: connections (all on q)

    private func accept(_ conn: NWConnection) {
        let c = Client(conn)
        conn.stateUpdateHandler = { [weak self] st in
            switch st {
            case .failed(_), .cancelled: self?.drop(c)
            default: break
            }
        }
        conn.start(queue: q)
        receive(c)
    }

    private func receive(_ c: Client) {
        c.conn.receive(minimumIncompleteLength: 1, maximumLength: 65536) { [weak self] data, _, isDone, err in
            guard let self = self else { return }
            if let d = data, !d.isEmpty { c.buf.append(d); self.process(c) }
            if isDone || err != nil { self.drop(c); return }
            self.receive(c)
        }
    }

    private func process(_ c: Client) {
        if !c.ws {
            guard let r = c.buf.range(of: Data("\r\n\r\n".utf8)) else { if c.buf.count > 16384 { c.conn.cancel() }; return }
            let head = String(decoding: c.buf[c.buf.startIndex..<r.lowerBound], as: UTF8.self)
            c.buf.removeSubrange(c.buf.startIndex..<r.upperBound)
            let lines = head.components(separatedBy: "\r\n")
            let parts = (lines.first ?? "").split(separator: " ")
            let path = parts.count > 1 ? String(parts[1].split(separator: "?").first ?? "/") : "/"
            var key: String? = nil, upgrade = false
            for l in lines.dropFirst() {
                guard let i = l.firstIndex(of: ":") else { continue }
                let k = l[..<i].trimmingCharacters(in: .whitespaces).lowercased()
                let v = l[l.index(after: i)...].trimmingCharacters(in: .whitespaces)
                if k == "sec-websocket-key" { key = v }
                if k == "upgrade" && v.lowercased() == "websocket" { upgrade = true }
            }
            if upgrade, let k = key, path == "/ws" { handshake(c, key: k) }
            else { serveHttp(c, path: path); return }
        }
        parseFrames(c)
    }

    private func serveHttp(_ c: Client, path: String) {
        var status = "200 OK", type = "text/plain", body = Data("not found".utf8)
        if path == "/info" {
            type = "application/json"
            body = (Self.json(["ips": Self.ips(), "port": Int(port), "players": clients.count + 1]) ?? "{}").data(using: .utf8)!
        } else if path == "/" || path == "/index.html" {
            if let url = Bundle.main.url(forResource: "index", withExtension: "html", subdirectory: "public"), let d = try? Data(contentsOf: url) {
                type = "text/html; charset=utf-8"; body = d
            } else { status = "500 Internal Server Error"; body = Data("game file missing".utf8) }
        } else { status = "404 Not Found" }
        var resp = Data("HTTP/1.1 \(status)\r\nContent-Type: \(type)\r\nContent-Length: \(body.count)\r\nCache-Control: no-store\r\nAccess-Control-Allow-Origin: *\r\nConnection: close\r\n\r\n".utf8)
        resp.append(body)
        c.conn.send(content: resp, completion: .contentProcessed { _ in c.conn.cancel() })
    }

    private func handshake(_ c: Client, key: String) {
        let digest = Insecure.SHA1.hash(data: Data((key + Self.guid).utf8))
        let acc = Data(digest).base64EncodedString()
        c.conn.send(content: Data("HTTP/1.1 101 Switching Protocols\r\nUpgrade: websocket\r\nConnection: Upgrade\r\nSec-WebSocket-Accept: \(acc)\r\n\r\n".utf8), completion: .contentProcessed { _ in })
        c.ws = true
        if clients.count + 1 >= maxPlayers {
            sendText(c, "{\"t\":\"full\"}")
            c.conn.send(content: nil, contentContext: .finalMessage, isComplete: true, completion: .contentProcessed { _ in c.conn.cancel() })
            return
        }
        c.id = nextId; nextId += 1
        let peers = [hostId] + Array(clients.keys).sorted()
        clients[c.id] = c
        if let w = Self.json(["t": "welcome", "id": c.id, "host": false, "peers": peers]) { sendText(c, w) }
        let join = "{\"t\":\"join\",\"id\":\(c.id)}"
        for o in clients.values where o !== c { sendText(o, join) }
        toHost(join)
    }

    private func parseFrames(_ c: Client) {
        while true {
            let b = [UInt8](c.buf)
            if b.count < 2 { return }
            let op = b[0] & 15, masked = (b[1] & 128) != 0
            var len = Int(b[1] & 127), off = 2
            if len == 126 { if b.count < 4 { return }; len = Int(b[2]) << 8 | Int(b[3]); off = 4 }
            else if len == 127 {
                if b.count < 10 { return }
                len = 0; for i in 2..<10 { len = len << 8 | Int(b[i]) }; off = 10
            }
            if len > 1 << 20 { c.conn.cancel(); return }
            let mo = off
            if masked { off += 4 }
            if b.count < off + len { return }
            var p = Array(b[off..<(off + len)])
            if masked { for i in 0..<p.count { p[i] ^= b[mo + (i & 3)] } }
            c.buf.removeFirst(off + len)
            switch op {
            case 1: fromGuest(c, String(decoding: p, as: UTF8.self))
            case 8: c.conn.cancel(); return
            case 9:
                var f = Data([0x8A, UInt8(p.count)]); f.append(contentsOf: p)
                c.conn.send(content: f, completion: .contentProcessed { _ in })
            default: break
            }
        }
    }

    private func fromGuest(_ c: Client, _ text: String) {
        guard var m = Self.parse(text) else { return }
        if (m["t"] as? String) == "png" {
            if let s = Self.json(["t": "pong", "ts": m["ts"] ?? 0]) { sendText(c, s) }
            return
        }
        m["f"] = c.id
        guard let s = Self.json(m) else { return }
        let to = (m["to"] as? Int) ?? 0
        if to == hostId { toHost(s); return }
        if to != 0 { if let d = clients[to] { sendText(d, s) }; return }
        for o in clients.values where o !== c { sendText(o, s) }
        toHost(s)
    }

    private func drop(_ c: Client) {
        guard c.id != 0, clients[c.id] != nil else { return }
        clients[c.id] = nil
        c.conn.cancel()
        let leave = "{\"t\":\"leave\",\"id\":\(c.id)}"
        for o in clients.values { sendText(o, leave) }
        toHost(leave)
    }

    private func sendText(_ c: Client, _ text: String) {
        let p = Data(text.utf8), n = p.count
        var f = Data([0x81])
        if n < 126 { f.append(UInt8(n)) }
        else if n < 65536 { f.append(126); f.append(UInt8(n >> 8)); f.append(UInt8(n & 255)) }
        else { f.append(127); for i in (0..<8).reversed() { f.append(UInt8((n >> (8 * i)) & 255)) } }
        f.append(p)
        c.conn.send(content: f, completion: .contentProcessed { _ in })
    }

    private func emit(_ o: [String: Any]) { if let s = Self.json(o) { toHost(s) } }

    private static func parse(_ s: String) -> [String: Any]? {
        guard let d = s.data(using: .utf8), let o = try? JSONSerialization.jsonObject(with: d) as? [String: Any] else { return nil }
        return o
    }

    private static func json(_ o: [String: Any]) -> String? {
        guard JSONSerialization.isValidJSONObject(o), let d = try? JSONSerialization.data(withJSONObject: o) else { return nil }
        return String(data: d, encoding: .utf8)
    }

    /// IPv4 addresses of this phone; hotspot (bridge100 = 172.20.10.1) / Wi-Fi first
    static func ips() -> [String] {
        var pri: [String] = [], rest: [String] = []
        var ifaddr: UnsafeMutablePointer<ifaddrs>?
        guard getifaddrs(&ifaddr) == 0, let first = ifaddr else { return [] }
        defer { freeifaddrs(ifaddr) }
        var ptr: UnsafeMutablePointer<ifaddrs>? = first
        while let p = ptr {
            let ifa = p.pointee
            if let sa = ifa.ifa_addr, sa.pointee.sa_family == UInt8(AF_INET), (ifa.ifa_flags & UInt32(IFF_LOOPBACK)) == 0, (ifa.ifa_flags & UInt32(IFF_UP)) != 0 {
                var host = [CChar](repeating: 0, count: Int(NI_MAXHOST))
                if getnameinfo(sa, socklen_t(sa.pointee.sa_len), &host, socklen_t(host.count), nil, 0, NI_NUMERICHOST) == 0 {
                    let ip = String(cString: host)
                    let isPrivate = ip.hasPrefix("192.168.") || ip.hasPrefix("10.") || ip.range(of: "^172\\.(1[6-9]|2[0-9]|3[01])\\.", options: .regularExpression) != nil
                    if isPrivate { pri.append(ip) } else if !ip.hasPrefix("169.254.") { rest.append(ip) }
                }
            }
            ptr = ifa.ifa_next
        }
        return pri + rest
    }
}
