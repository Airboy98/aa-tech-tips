import Collapsible from "react-collapsible";
import "./television.css";

export default function Television() {
  return (
    <>
      <h1>Television Tips</h1>
      <hr></hr>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">TV Manufacturers</button>
        }
      >
        <div className="television">
          <table>
            <tr>
              <td>
                <a
                  href="https://www.samsung.com/us/support/contact/?model=N0002200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/televisions/samsung.png"
                    alt="Samsung"
                    width="100"
                    height="15"
                  />
                </a>
              </td>
              <td>
                <a
                  href="https://www.lg.com/us/support"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/televisions/LG.png"
                    alt="LG"
                    width="100"
                    height="50"
                  />
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://www.sony.com/electronics/support/televisions-projectors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/televisions/sony.png"
                    alt="Sony"
                    width="100"
                    height="50"
                  />
                </a>
              </td>
              <td>
                <a
                  href="https://www.toshibatv-usa.com/support"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/televisions/toshiba.png"
                    alt="Toshiba"
                    width="100"
                    height="30"
                  />
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://www.hisense-usa.com/support"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/televisions/hisense.png"
                    alt="Hisense"
                    width="100"
                    height="50"
                  />
                </a>
              </td>
              <td>
                <a
                  href="https://support.tcl.com/us"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/televisions/TCL.png"
                    alt="TCL"
                    width="100"
                    height="50"
                  />
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://www.sharptvusa.com/support"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/televisions/sharp.png"
                    alt="Sharp"
                    width="100"
                    height="50"
                  />
                </a>
              </td>
              <td>
                <a
                  href="https://support.vizio.com/s/?language=en_US"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/televisions/vizio.png"
                    alt="Vizio"
                    width="100"
                    height="30"
                  />
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://www.usa.philips.com/c-m-so/tv"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/televisions/philips.png"
                    alt="Philips"
                    width="100"
                    height="20"
                  />
                </a>
              </td>
              <td>
                <a
                  href="https://onntvsupport.com/roku-tv"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/televisions/onn.png"
                    alt="Onn."
                    width="100"
                    height="50"
                  />
                </a>
              </td>
            </tr>
          </table>
        </div>
        <h5>
          NOTE: TV model number/names are usually found on a sticker on the back
          of the TV. Navigate to your brand's website above and input the model
          number/name
        </h5>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Streaming Devices</button>
        }
      >
        <div className="television">
          <table>
            <tr>
              <td>
                <a
                  href="https://www.amazon.com/gp/help/customer/display.html?nodeId=GHH5TUHA7677G4HJ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/devices/amazon-fire-tv-stick.png"
                    alt="Amazon Fire TV Stick"
                    width="100"
                    height="50"
                  />
                </a>
              </td>
              <td>
                <a
                  href="https://support.roku.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/devices/roku.png"
                    alt="Roku"
                    width="100"
                    height="50"
                  />
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://support.google.com/chromecast/chromecast/?hl=en&sjid=890919833032057258-NC#topic=3058948"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/devices/chromecast1.png"
                    alt="Chromecast"
                    width="100"
                    height="50"
                  />
                </a>
              </td>
              <td>
                <a
                  href="https://support.apple.com/apple-tv"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/devices/appletv.png"
                    alt="Apple TV"
                    width="100"
                    height="50"
                  />
                </a>
              </td>
            </tr>
          </table>
        </div>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Cast from Phone to TV</button>
        }
      >
        <ol>
          <li>Open the desired phone app you wish to cast to TV</li>
          <li>Start playing a video/movie</li>
          <li>
            Tap the fullscreen icon{" "}
            <img src="images/menu/fullscreen.png" height="15" width="15" />
          </li>
          <li>
            Tap the cast to TV icon{" "}
            <img src="images/menu/cast.png" height="15" width="15" /> or Airplay
            icons <img src="images/menu/airplay.png" height="15" width="30" />
          </li>
        </ol>
        <h5>
          NOTE: Not all smart TVs have Airplay/cast from phone functionality
        </h5>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Install Smart TV App</button>
        }
      >
        <ol>
          <li>
            On your TV's dashboard/home screen, navigate to APPS or APP STORE
          </li>
          <li>Locate the option that says DOWNLOAD or SEARCH</li>
          <li>
            Using the onscreen keyboard that should pop up, type in the app and
            search
          </li>
          <li>Select the app and hit INSTALL or DOWNLOAD</li>
        </ol>
        <h5>
          NOTE: Steps and procedures vary greatly depending on TV make/model
        </h5>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Delete Smart TV App</button>
        }
      >
        <ol>
          <li>
            On your TV's dashboard/home screen, navigate to the app you'd like
            to delete
          </li>
          <li>
            Use the remote's option button (some makes/models require pressing
            and holding the select button) on the app
          </li>
          <li>
            In the context menu that pops up, select the option DELETE or
            UNINSTALL or REMOVE
          </li>
        </ol>
        <h5>
          NOTE: Steps and procedures vary greatly depending on TV make/model
        </h5>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Display Inputs</button>
        }
      >
        <h4>
          At first glance, older electronic devices might seem to be
          incompatible with modern TVs but they can still be used! It just takes
          an extra device to get them to be compatible. Keep in mind the
          following when dealing with older devices like VCRs, DVD players and
          old game consoles.
        </h4>
        <div className="television">
          <table>
            <tr>
              <th>Input</th>
              <th>Example Devices</th>
            </tr>
            <tr>
              <td>
                USB Type-A<br></br>
                <img
                  src="images/ports/usb-type-a.png"
                  alt="USB Type-A"
                  width="100"
                  height="50"
                />
              </td>
              <td>
                Keyboard,<br></br>Charging brick
              </td>
            </tr>
            <tr>
              <td>
                USB Type-C<br></br>
                <img
                  src="images/ports/usb-type-c.png"
                  alt="USB Type-C"
                  width="100"
                  height="50"
                />
              </td>
              <td>
                iPad Pro,<br></br>Android phone
              </td>
            </tr>
            <tr>
              <td>
                HDMI<br></br>
                <img
                  src="images/ports/hdmi.png"
                  alt="HDMI"
                  width="125"
                  height="50"
                />
              </td>
              <td>
                Blu-ray player,<br></br>game console
              </td>
            </tr>
            <tr>
              <td>
                Coaxial / Antenna<br></br>
                <img
                  src="images/ports/coaxial.png"
                  alt="Coaxial"
                  width="50"
                  height="50"
                />
              </td>
              <td>Cable</td>
            </tr>
            <tr>
              <td>
                S-Video<br></br>
                <img
                  src="images/ports/s-video.png"
                  alt="S-Video"
                  width="70"
                  height="50"
                />
              </td>
              <td>Video camera</td>
            </tr>
            <tr>
              <td>
                Composite / RCA<br></br>
                <img
                  src="images/ports/composite.png"
                  alt="Composite"
                  width="150"
                  height="50"
                />
              </td>
              <td>VCR, Wii, N64</td>
            </tr>
            <tr>
              <td>
                Component<br></br>
                <img
                  src="images/ports/component.png"
                  alt="Component"
                  width="200"
                  height="50"
                />
              </td>
              <td>
                DVD player,<br></br>HD Wii connector
              </td>
            </tr>
          </table>
        </div>
        <div className="inputs">
          <ul>
            <li>
              <b>Convert that signal!</b> When it comes to modern devices hooked
              up to TVs, nearly everything uses a digital signal these days with
              an HDMI connection. If you still have an older device that uses a
              standard composite connection, this is a surprisingly simple
              hurdle to overcome with an affordable handy little ADC (analog to
              digital converter) like{" "}
              <a
                href="https://www.amazon.com/Converter-ABLEWE-Composite-Supporting-Blue-Ray/dp/B07RX69KR8/"
                target="_blank"
                rel="noopener noreferrer"
              >
                this
              </a>
              . Once you connect this box up to power (usually over USB Type-A
              that some TVs have a spare port for in the back), plug in the
              composite cables from the older device into the corresponding
              ports and connect a standard HDMI cable to the ADC and the TV.
              Voila! Your analog signal from the older device is now converted
              to digital and can be used with the modern TV!
            </li>
          </ul>
        </div>
      </Collapsible>
    </>
  );
}
