import UIKit
import Capacitor

/// Registers the in-app LocalServer plugin and keeps the screen awake while playing.
class MainViewController: CAPBridgeViewController {
    override open func capacitorDidLoad() {
        bridge?.registerPluginInstance(LocalServerPlugin())
        UIApplication.shared.isIdleTimerDisabled = true
    }
}
