import Collapsible from "react-collapsible";
import "./styles.css";
// import samsung from "./samsung.png";

export default function Television() {
  return (
    <>
      <h1>Television Troubleshooting</h1>
      <Collapsible
        trigger={
          <h2 className="collapsible-trigger">Manufacturer Support Websites</h2>
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
                src="./images/samsung.png"
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
              <img src="./images/LG.png" alt="LG" width="100" height="50" />
            </a>
          </li>
          <li>
            <a
              href="https://www.sony.com/electronics/support/televisions-projectors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./images/sony.png" alt="Sony" width="100" height="50" />
            </a>
          </li>
          <li>
            <a
              href="https://www.toshibatv-usa.com/support"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./images/toshiba.png"
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
                src="./images/hisense.png"
                alt="HiSense"
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
              <img src="./images/TCL.png" alt="TCL" width="100" height="50" />
            </a>
          </li>
        </ul>
      </Collapsible>
      <Collapsible
        trigger={<h2 className="collapsible-trigger">Streaming Devices</h2>}
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
            Amazon Fire TV Stick
          </a>
        </h3>
        <h3>
          <a
            href="https://support.roku.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Roku
          </a>
        </h3>
        <h3>
          <a
            href="https://support.google.com/chromecast/chromecast/?hl=en&sjid=890919833032057258-NC#topic=3058948"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chromecast
          </a>
        </h3>
        <h3>
          <a
            href="https://support.apple.com/apple-tv"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apple TV
          </a>
        </h3>
        {/* </div> */}
      </Collapsible>
      <Collapsible
        trigger={<h2 className="collapsible-trigger">Install Smart TV App</h2>}
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
        trigger={<h2 className="collapsible-trigger">Delete Smart TV App</h2>}
      >
        NOTE: Steps and procedures vary greatly depending on TV make/model
        <ul>
          <li>
            On your TV's dashboard/home screen, navigate to the app you'd like
            to delete
          </li>
          <li>
            Use the remote's option button (some makes/models require tapping
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
