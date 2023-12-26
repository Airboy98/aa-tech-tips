import Collapsible from "react-collapsible";
import "./styles.css";
// import samsung from "./samsung.png";

export default function Television() {
  return (
    <>
      <h1>Television Troubleshooting</h1>
      <hr></hr>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Manufacturer Support Websites</button>
        }
      >
        NOTE: TV model number/names are usually found on a sticker on the back
        of the TV. Navigate to your brand's website below and input the model
        number/name:
        <ul>
          <li>
            <a
              href="https://www.samsung.com/us/support/contact/?model=N0002200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./images/brands/samsung.png"
                alt="Samsung"
                width="100"
                height="50"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.lg.com/us/support"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./images/brands/LG.png" alt="LG" width="100" height="50" />
            </a>
          </li>
          <li>
            <a
              href="https://www.sony.com/electronics/support/televisions-projectors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./images/brands/sony.png" alt="Sony" width="100" height="50" />
            </a>
          </li>
          <li>
            <a
              href="https://www.toshibatv-usa.com/support"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./images/brands/toshiba.png"
                alt="Toshiba"
                width="100"
                height="50"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.hisense-usa.com/support"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./images/brands/hisense.png"
                alt="Hisense"
                width="100"
                height="50"
              />
            </a>
          </li>
          <li>
            <a
              href="https://support.tcl.com/us"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./images/brands/TCL.png" alt="TCL" width="100" height="50" />
            </a>
          </li>
          <li>
            <a
              href="https://www.sharptvusa.com/support"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./images/brands/sharp.png" alt="Sharp" width="100" height="50" />
            </a>
          </li>
        </ul>
      </Collapsible>
      <Collapsible
        trigger={<button className="collapsible-trigger">Streaming Devices</button>}
      >
        {/* <div className="collapsible-content"> */}
        <h3>
          {/* <img
              src="./images/amazon-fire-tv-stick.png"
              width="100"
              height="50"
            /> */}
          <a
            href="https://www.amazon.com/gp/help/customer/display.html?nodeId=GHH5TUHA7677G4HJ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./images/devices/amazon-fire-tv-stick.png" alt="Amazon Fire TV Stick" width="100" height="50" />
          </a>
        </h3>
        <h3>
          <a
            href="https://support.roku.com/"
            target="_blank"
            rel="noopener noreferrer"
          ><img src="./images/devices/roku.png" alt="Roku" width="100" height="50" />
          </a>
        </h3>
        <h3>
          <a
            href="https://support.google.com/chromecast/chromecast/?hl=en&sjid=890919833032057258-NC#topic=3058948"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./images/devices/chromecast.svg" alt="Chromecast" width="100" height="50" />
          </a>
        </h3>
        <h3>
          <a
            href="https://support.apple.com/apple-tv"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./images/devices/appletv.png" alt="Apple TV" width="100" height="50" />
          </a>
        </h3>
        {/* </div> */}
      </Collapsible>
      <Collapsible
        trigger={<button className="collapsible-trigger">Install Smart TV App</button>}
      >
        NOTE: Steps and procedures vary greatly depending on TV make/model
        <ul>
          <li>
            On your TV's dashboard/home screen, navigate to APPS or APP STORE
          </li>
          <li>Locate the option that says DOWNLOAD or SEARCH</li>
          <li>
            Using the onscreen keyboard that should pop up, type in the app and
            search
          </li>
          <li>Select the app and hit INSTALL or DOWNLOAD</li>
        </ul>
      </Collapsible>
      <Collapsible
        trigger={<button className="collapsible-trigger">Delete Smart TV App</button>}
      >
        NOTE: Steps and procedures vary greatly depending on TV make/model
        <ul>
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
        </ul>
      </Collapsible>
    </>
  );
}
