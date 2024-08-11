import Collapsible from "react-collapsible";
import "./wearable.css";

export default function Wearable() {
  return (
    <>
      <div className="section-header">
        <h1>Wearable Tips</h1>
      </div>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Wearable Brands</button>
        }
      >
        <div className="television">
          <table>
            <tr>
              <td>
                <a
                  href="https://www.apple.com/watch/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/wearables/apple-watch.png"
                    alt="Samsung"
                    width="150"
                    height="35"
                  />
                </a>
              </td>
              <td>
                <a
                  href="https://www.samsung.com/us/watches/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/wearables/galaxy-watch.svg"
                    alt="LG"
                    width="150"
                    height="60"
                  />
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://www.fitbit.com/global/us/home"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/wearables/fitbit.png"
                    alt="Sony"
                    width="150"
                    height="40"
                  />
                </a>
              </td>
              <td>
                <a
                  href="https://store.google.com/category/watches?hl=en-US"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/wearables/pixel-watch.png"
                    alt="Toshiba"
                    width="150"
                    height="60"
                  />
                </a>
              </td>
            </tr>
          </table>
        </div>
      </Collapsible>
      <h2>Apple Watch</h2>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Remote Control Camera</button>
        }
      >
        <ol>
          <li>Press the side crown (scroll wheel) to bring up app screen</li>
          <li>
            Swipe screen or use side crown to scroll through apps to find the
            Camera app
          </li>
          <li>
            Remotely view your iPhone's camera to capture a pic (great for
            family photos!)
          </li>
        </ol>
        <h5>
          NOTE: The above feature is available if your iPhone is within range
          (about 30 feet over Bluetooth).
        </h5>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Turn on Flashlight</button>
        }
      >
        <ol>
          <li>
            Press the side button (watchOS 10) or slide up from bottom of screen
            (pre-watchOS 10) to bring up Control Center
          </li>
          <li>Scroll through button options and tap the flashlight icon</li>
          <li>
            Swipe between 3 different options: solid white, blinking white, and
            red
          </li>
          <li>Tap the screen to brighten the color</li>
        </ol>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Medical ID / SOS</button>
        }
      >
        <ol>
          <li>Press and hold the side button (watchOS 10)</li>
          <li>
            Locate the desired circle, top one for Medical ID and bottom for SOS
          </li>
          <li>Drag the circle from left to right to activate</li>
        </ol>
        <h5>
          NOTE: Activating SOS will contact emergency services! Check{" "}
          <a
            href="https://support.apple.com/en-us/108374"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>{" "}
          to learn more about this.
        </h5>
      </Collapsible>
      <Collapsible
        trigger={<button className="collapsible-trigger">Ping iPhone</button>}
      >
        <ol>
          <li>
            Click side button (watchOS 10) or slide up from bottom of screen
            (pre-watchOS 10) to bring up Control Center
          </li>
          <li>Scroll through button options and tap the iPhone icon</li>
          <li>A pulse sound will play over your iPhone's speakers</li>
          <li>
            Tap and hold on iPhone icon to play the sound and flash the
            flashlight
          </li>
        </ol>
        <h5>
          NOTE: The above feature is available if your iPhone is within range
          (about 30 feet over Bluetooth).
        </h5>
      </Collapsible>
    </>
  );
}
