import Collapsible from "react-collapsible";
import "./smartphone.css";

export default function Smartphone() {
  return (
    <>
      <div className="section-header">
        <h1>Smartphone</h1>
      </div>
      <h2>Connections</h2>

      <Collapsible
        trigger={
          <button className="collapsible-trigger">Choosing a Carrier</button>
        }
      >
        <h4>
          Keep in mind the following when browsing around for a mobile carrier:
        </h4>
        <div className="tech">
          <table>
            <thead>
              <tr>
                <th>Phrase</th>
                <th>Definition</th>
                <th>Usage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Coverage</td>
                <td>The geographical area where a carrier provides service</td>
                <td>Urban vs rural areas</td>
              </tr>
              <tr>
                <td>Data Cap</td>
                <td>
                  The amount of data provided per billing cycle, measured in
                  gigabytes (GB)
                </td>
                <td>Unlimited vs limited data</td>
              </tr>
              <tr>
                <td>eSIM</td>
                <td>
                  A digital SIM card enabling alternate carriers and data plans
                  on one device
                </td>
                <td>Multiple phone plans</td>
              </tr>
              <tr>
                <td>MVNO</td>
                <td>
                  Mobile Virtual Network Operator, leases network capacity from
                  other carriers
                </td>
                <td>Alternative carriers</td>
              </tr>
              <tr>
                <td>Network Technology</td>
                <td>
                  The type of network used, such as 4G LTE or 5G, affecting
                  speed and performance
                </td>
                <td>5G for faster speeds</td>
              </tr>
              <tr>
                <td>Roaming Charges</td>
                <td>
                  Additional costs incurred when using the phone outside a
                  carrier's network
                </td>
                <td>International travel</td>
              </tr>
              <tr>
                <td>SIM</td>
                <td>
                  A small card inserted into the phone, storing phone plan data
                  and phone number
                </td>
                <td>Required for cellular connectivity</td>
              </tr>
              <tr>
                <td>Throttling</td>
                <td>
                  Reduced download and upload speeds after a certain amount of
                  data has been used
                </td>
                <td>Data-intensive activities</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h4>Big Carriers</h4>
        <div className="television">
          <table>
            <tr>
              <td>
                <a
                  href="https://www.att.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/smartphones/att.webp"
                    alt="AT&T"
                    width="100"
                    height="50"
                  />
                </a>
              </td>
              <td>
                <a
                  href="https://www.tmobile.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/smartphones/tmobile.png"
                    alt="T-Mobile"
                    width="100"
                    height="50"
                  />
                </a>
              </td>
              <td>
                <a
                  href="https://www.verizon.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/smartphones/verizon.png"
                    alt="Verizon"
                    width="100"
                    height="50"
                  />
                </a>
              </td>
            </tr>
          </table>
        </div>
        <h4>Alternative Carriers</h4>
        <div className="television">
          <table>
            <tr>
              <td>
                <a
                  href="https://www.boostmobile.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/smartphones/boost.png"
                    alt="Boost Mobile"
                    width="100"
                    height="50"
                  />
                </a>
              </td>
              <td>
                <a
                  href="https://www.mintmobile.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/smartphones/mint.png"
                    alt="Mint Mobile"
                    width="100"
                    height="25"
                  />
                </a>
              </td>
              <td>
                <a
                  href="https://www.puretalkusa.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/smartphones/puretalk.png"
                    alt="Pure Talk"
                    width="100"
                    height="25"
                  />
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://www.uscellular.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/smartphones/uscellular.svg"
                    alt="US Cellular"
                    width="100"
                    height="50"
                  />
                </a>
              </td>
              <td>
                <a
                  href="https://www.consumercellular.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/smartphones/consumer.png"
                    alt="Consumer Cellular"
                    width="100"
                    height="40"
                  />
                </a>
              </td>
              <td>
                <a
                  href="https://www.cricketwireless.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/smartphones/cricket.svg"
                    alt="Cricket Wireless"
                    width="100"
                    height="50"
                  />
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://patriotmobile.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/smartphones/patriot.png"
                    alt="Patriot Mobile"
                    width="70"
                    height="50"
                  />
                </a>
              </td>
              <td>
                <a
                  href="https://www.straighttalk.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/smartphones/straight.png"
                    alt="Straight Talk"
                    width="100"
                    height="50"
                  />
                </a>
              </td>
              <td>
                <a
                  href="https://www.usmobile.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/smartphones/usmobile.png"
                    alt="US Mobile"
                    width="100"
                    height="50"
                  />
                </a>
              </td>
            </tr>
          </table>
        </div>
        <h5>
          NOTE: Check{" "}
          <a
            href="https://coveragemap.com/cell-phone-coverage"
            target="_blank"
            rel="noopener noreferrer"
          >
            carrier coverage
          </a>{" "}
          in your area before committing to a plan. Alternative carriers also
          utilize big carrier networks.
        </h5>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Personal Hotspot</button>
        }
      >
        <ol>
          <li>
            Open the <b>Settings</b> app
          </li>
          <li>
            Enable <b>Personal Hotspot</b> (iPhone) or <b>Mobile Hotspot</b>{" "}
            (Android)
          </li>
          <li>Configure the password for the hotspot</li>
          <li>On your separate device, view Wi-Fi networks</li>
          <li>
            Connect to the hotspot (phone name) and enter the password
            configured
          </li>
        </ol>
        <h5>
          NOTE: Verify that your phone plan allows for hotspot usage. Some plans
          differentiate cell data and hotspot data.
        </h5>
      </Collapsible>
      <h2>iPhone</h2>
      <Collapsible
        trigger={<button className="collapsible-trigger">Photo Editing</button>}
      >
        {/* <table>
            <tr>
              <th>iPhone Steps</th>
              <th>Android Steps</th>
            </tr>
          </table> */}
        <ol>
          <li>
            Open the <b>Photos</b> app
          </li>
          <li>Select the photo you'd like to edit</li>
          <li>
            Tap{" "}
            <img
              src="images/menu/edit-slider.png"
              height="15"
              width="15"
              alt="share icon"
            />{" "}
            at the bottom
          </li>
          <li>
            Swipe through the setting circles on the bottom and use the slider
            to modify
          </li>
          <li>Tap filters at the bottom to select a filter</li>
          <li>
            Tap crop to trim the photo down to size by dragging the corners
          </li>
        </ol>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Shared Photo Album</button>
        }
      >
        <ol>
          <li>
            Open the <b>Photos</b> app
          </li>
          <li>Select the photo(s) you'd like to share</li>
          <li>
            Tap{" "}
            <img
              src="images/menu/share-iphone.png"
              height="15"
              width="15"
              alt="share icon"
            />{" "}
            in bottom left corner
          </li>
          <li>
            Tap the <b>Add to Shared Album</b> button in list
          </li>
          <li>Type a comment to add (optional)</li>
          <li>
            Tap <b>Shared Album</b> to select a pre-existing album or create a
            new one
          </li>
        </ol>
        <h5>NOTE: The above feature is available in iOS 16 and later.</h5>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">
            Analyze Text in Picture
          </button>
        }
      >
        <ol>
          <li>
            Open the <b>Camera</b> app
          </li>
          <li>Take a picture of a subject with text</li>
          <li>Bring up that recently captured photo</li>
          <li>
            Tap{" "}
            <img
              src="images/menu/scan-text.png"
              height="15"
              width="15"
              alt="scan text icon"
            />{" "}
            in the bottom right corner
          </li>
          <li>
            Links to websites will appear at the bottom and text can be
            highlighted and copied
          </li>
        </ol>
        <br></br>
        <img
          src="images/smartphones/analyze.jpg"
          height="500"
          width="250"
          alt="camera-timer icon"
        />
        <h5>NOTE: The above feature is available in iOS 15 and later.</h5>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">
            FaceTime Screen Sharing
          </button>
        }
      >
        <ol>
          <li>
            Open the <b>FaceTime</b> app
          </li>
          <li>Choose a contact to initiate a FaceTime Audio or Video</li>
          <li>
            After the call connects, tap{" "}
            <img
              src="images/menu/share-screen.png"
              height="15"
              width="20"
              alt="scan text icon"
            />{" "}
            to start sharing your screen
          </li>
        </ol>
        <h5>
          NOTE: The above feature is available for the latest iOS and may not be
          available on older versions.
        </h5>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">
            Flashlight Variable Brightness
          </button>
        }
      >
        <ol>
          <li>
            Swipe down from top right corner of screen (or swipe up from bottom
            on iPhones with home button) to open Control Center
          </li>
          <li>Tap and hold on the flashlight button</li>
          <li>
            Drag the flashlight beam to raise or lower the level of brightness
          </li>
          <li>Enabling flashlight now defaults to that level of brightness</li>
        </ol>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Timed Picture Capture</button>
        }
      >
        <ol>
          <li>
            Open the <b>Camera</b> app
          </li>
          <li>Tap the up arrow button at the top center of the screen</li>
          <li>
            Slide the icons at the bottom and tap{" "}
            <img
              src="images/menu/camera-timer-icon.png"
              height="15"
              width="15"
              alt="camera-timer icon"
            />{" "}
          </li>
          <li>Choose from 3s, 5s or 10s</li>
          <li>Tap the shutter circle button</li>
        </ol>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Change Background</button>
        }
      >
        <ol>
          <li>
            Open the <b>Settings</b> app
          </li>
          <li>
            Scroll down and tap <b>Wallpaper</b>
          </li>
          <li>Tap Lockscreen or Homescreen and set photo</li>
        </ol>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Change Passcode</button>
        }
      >
        <ol>
          <li>
            Open the <b>Settings</b> app
          </li>
          <li>
            Scroll down and tap <b>Face ID & Passcode</b>
          </li>
          <li>Enter current passcode</li>
          <li>
            Scroll down and tap <b>Change Passcode</b>
          </li>
          <li>Enter new passcode</li>
        </ol>
      </Collapsible>
      <h2>Android</h2>
      <Collapsible
        trigger={<button className="collapsible-trigger">Photo Editing</button>}
      >
        <ol>
          <li>
            Open your preferred app for photos (
            <a
              href="https://play.google.com/store/apps/details?id=com.google.android.apps.photos&hl=en_US"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Photos
            </a>{" "}
            or <b>Gallery</b>)
          </li>
          <li>Select the photo you'd like to edit</li>
          <li>
            Tap{" "}
            <img
              src="images/menu/edit-slider.png"
              height="15"
              width="15"
              alt="share icon"
            />{" "}
            or a similar icon at the bottom of the screen
          </li>
          <li>
            Swipe through the options on the bottom and use the slider to modify
          </li>
          <li>
            Crop to trim the photo down to size by dragging the corner dots
          </li>
        </ol>
        {/* <h3>Camera Settings</h3>
        <h3>Change Lockscreen/Homescreen Background</h3> */}
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Shared Photo Album</button>
        }
      >
        <ol>
          <li>
            Open the{" "}
            <a
              href="https://play.google.com/store/apps/details?id=com.google.android.apps.photos&hl=en_US"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Photos
            </a>{" "}
            app and login with a Google account
          </li>
          <li>
            Tap <b>Collections</b> on the left side pane
          </li>
          <li>
            Tap <b>+</b> in the top right corner{" "}
          </li>
          <li>
            Tap <b>Album</b> in the Create new list
          </li>
          <li>
            Name the album in the <b>Add a title</b> field
          </li>
          <li>
            Tap <b>+ Select photos</b>
          </li>
          <li>
            Tap the photo(s) to add to the album and hit <b>Add</b> in the top
            right corner
          </li>
          <li>Tap the check mark in the top left corner</li>
          <li>
            Tap{" "}
            <img
              src="images/menu/share-android.png"
              height="15"
              width="15"
              alt="share icon"
            />{" "}
            at the bottom of the screen
          </li>
          <li>
            Tap <b>Get link</b> and <b>Create link</b> which will be copied to
            the clipboard
          </li>
          <li>Share this link of the shared album with your contacts</li>
        </ol>
        {/* <h5>NOTE: The above feature is available after pairing a Google account.</h5> */}
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">
            Analyze Text in Picture
          </button>
        }
      >
        <ol>
          <li>
            Open the{" "}
            <a
              href="https://play.google.com/store/apps/details?id=com.google.ar.lens&hl=en_US"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Lens
            </a>{" "}
            app
          </li>
          <li>
            Point your camera at text to analyze and tap <b>Select text</b>
          </li>
          <li>
            Text will now be highlighted and can be copied or Google searched
          </li>
        </ol>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">
            Flashlight Variable Brightness
          </button>
        }
      >
        <ol>
          <li>
            Swipe down from top right corner of screen (or swipe up from bottom
            on iPhones with home button) to open Quick Settings
          </li>
          <li>Tap and hold on the flashlight button</li>
          <li>Drag the slider to raise or lower the level of brightness</li>
          <li>Enabling flashlight now defaults to that level of brightness</li>
        </ol>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Timed Picture Capture</button>
        }
      >
        <ol>
          <li>
            Open the <b>Camera</b> app
          </li>
          <li>
            Tap{" "}
            <img
              src="images/menu/camera-timer-icon.png"
              height="15"
              width="15"
              alt="camera-timer icon"
            />{" "}
            at the top
          </li>
          <li>Choose from 2s, 5s or 10s</li>
          <li>Tap the shutter circle button</li>
        </ol>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Change Background</button>
        }
      >
        <ol>
          <li>
            Open the <b>Settings</b> app
          </li>
          <li>
            Scroll down and tap <b>Wallpaper and style</b>
          </li>
          <li>Tap the lockscreen or homescreen</li>
          <li>
            Tap <b>Wallpapers</b> in the top left corner
          </li>
          <li>Select a photo from the categories</li>
        </ol>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Change Lock Type</button>
        }
      >
        <ol>
          <li>
            Open the <b>Settings</b> app
          </li>
          <li>
            Scroll down and tap <b>Lockscreen</b>
          </li>
          <li>
            Tap <b>Screen lock type</b>
          </li>
          <li>Choose a new lock type and enter on-screen prompts</li>
        </ol>
      </Collapsible>
    </>
  );
}
