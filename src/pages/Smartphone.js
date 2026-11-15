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
          <table className="glossary-table">
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
        <div className="television hover-logos">
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
                  href="https://www.t-mobile.com/"
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
        <div className="television hover-logos">
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
                  href="https://www.puretalk.com/"
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
            </tr>
            <tr>
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
              <td>
                <a
                  href="https://www.tracfone.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/smartphones/tracfone.svg"
                    alt="Tracfone"
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
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>Turn It On</u>
            </h3>
            <h4>Broadcast your internet connection</h4>
            <ol>
              <li>
                Open the <b>Settings</b> app
              </li>
              <li>
                Enable <b>Personal Hotspot</b> (iPhone) or <b>Mobile Hotspot</b>{" "}
                (Android)
              </li>
              <li>Configure the password for the hotspot</li>
            </ol>
          </div>
          <div className="package-card">
            <h3>
              <u>Connect</u>
            </h3>
            <h4>Join it like any Wi-Fi network</h4>
            <ol>
              <li>View available Wi-Fi networks</li>
              <li>
                Connect to the hotspot (your phone's name) and enter the
                password configured
              </li>
            </ol>
          </div>
          <div className="package-card">
            <h3>
              <u>Good to Know</u>
            </h3>
            <h4>Before you use</h4>
            <ul>
              <li>Verify that your phone plan allows for hotspot usage</li>
              <li>Some plans differentiate cell data and hotspot data</li>
              <li>Using a hotspot drains your phone's battery quickly</li>
            </ul>
          </div>
        </div>
      </Collapsible>
      <h2>iPhone</h2>
      <Collapsible
        trigger={<button className="collapsible-trigger">Photo Editing</button>}
      >
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>Open the Editor</u>
            </h3>
            <h4>Built-in to the default app</h4>
            <ol>
              <li>
                Open the <b>Photos</b> app
              </li>
              <li>Select the photo you'd like to edit</li>
              <li>
                Tap{" "}
                <img
                  src="images/menu/edit-slider.png"
                  className="card-icon"
                  height="15"
                  width="15"
                  alt="edit icon"
                />{" "}
                at the bottom
              </li>
            </ol>
          </div>
          <div className="package-card">
            <h3>
              <u>Make Changes</u>
            </h3>
            <h4>Tap Done to save</h4>
            <ul>
              <li>
                <b>Adjust:</b> Swipe through the setting circles on the bottom
                and use the slider to modify
              </li>
              <li>
                <b>Filters:</b> Tap filters at the bottom to select a filter
              </li>
              <li>
                <b>Crop:</b> Trim the photo down to size by dragging the corners
              </li>
              <li>
                Changes can be undone anytime with <b>Revert</b>
              </li>
            </ul>
          </div>
        </div>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Shared Photo Album</button>
        }
      >
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>Share Photos</u>
            </h3>
            <h4>Send photos to family and friends</h4>
            <ol>
              <li>
                Open the <b>Photos</b> app
              </li>
              <li>Select the photo(s) you'd like to share</li>
              <li>
                Tap{" "}
                <img
                  src="images/menu/share-iphone.png"
                  className="card-icon"
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
                Tap <b>Shared Album</b> to select a pre-existing album or create
                a new one
              </li>
              <li>
                Tap <b>Post</b>
              </li>
            </ol>
          </div>
          <div className="package-card">
            <h3>
              <u>Good to Know</u>
            </h3>
            <h4>Before you share</h4>
            <ul>
              <li>
                Shared Albums must be turned on in <b>Settings</b> {"->"}{" "}
                <b>Apps</b> {"->"} <b>Photos</b> (<b>Settings</b> {"->"}{" "}
                <b>Photos</b> on older iPhones)
              </li>
              <li>Invited family and friends can view, like and comment</li>
              <li>
                Family without an iPhone can view the album through a{" "}
                <b>Public Website</b> link
              </li>
              <li>Shared Albums don't count against your iCloud storage</li>
            </ul>
          </div>
        </div>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">
            Analyze Text in Picture
          </button>
        }
      >
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>Scan Text</u>
            </h3>
            <h4>Uses OCR (text recognition)</h4>
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
                  className="card-icon"
                  height="15"
                  width="15"
                  alt="scan text icon"
                />{" "}
                in the bottom right corner
              </li>
            </ol>
          </div>
          <div className="package-card">
            <h3>
              <u>What You Can Do</u>
            </h3>
            <h4>Available in iOS 15 and later</h4>
            <ul>
              <li>Tap links to websites that appear at the bottom</li>
              <li>Highlight and copy text</li>
              <li>Tap a phone number to call it</li>
              <li>Translate text into another language</li>
            </ul>
          </div>
        </div>
        <img
          src="images/smartphones/analyze.jpg"
          height="500"
          width="250"
          alt="Live Text example"
        />
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">
            FaceTime Screen Sharing
          </button>
        }
      >
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>Share Your Screen</u>
            </h3>
            <h4>Show someone what you see</h4>
            <ol>
              <li>
                Open the <b>FaceTime</b> app
              </li>
              <li>Choose a contact to initiate a FaceTime Audio or Video</li>
              <li>
                After the call connects, tap{" "}
                <img
                  src="images/menu/share-screen.png"
                  className="card-icon"
                  height="15"
                  width="20"
                  alt="share screen icon"
                />{" "}
                and then <b>Share My Screen</b>
              </li>
            </ol>
          </div>
          <div className="package-card">
            <h3>
              <u>Good to Know</u>
            </h3>
            <h4>Great for getting tech help</h4>
            <ul>
              <li>Both people need iOS 15.1 or later</li>
              <li>Sharing starts after a short countdown</li>
              <li>Tap the same icon again to stop sharing</li>
            </ul>
          </div>
        </div>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">
            Flashlight Variable Brightness
          </button>
        }
      >
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>Adjust the Brightness</u>
            </h3>
            <h4>A hidden Control Center feature</h4>
            <ol>
              <li>
                Swipe down from top right corner of screen (or swipe up from
                bottom on iPhones with home button) to open Control Center
              </li>
              <li>Tap and hold on the flashlight button</li>
              <li>
                Drag the flashlight beam to change brightness and beam width
              </li>
              <li>
                Enabling flashlight now defaults to that level of brightness
              </li>
            </ol>
          </div>
        </div>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Timed Picture Capture</button>
        }
      >
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>Set the Timer</u>
            </h3>
            <h4>Great for group photos</h4>
            <ol>
              <li>
                Open the <b>Camera</b> app
              </li>
              <li>
                Tap the six-dot button in the bottom right corner to show the
                camera controls
              </li>
              <li>
                Tap{" "}
                <img
                  src="images/menu/camera-timer-icon.png"
                  className="card-icon"
                  height="15"
                  width="15"
                  alt="camera timer icon"
                />{" "}
                <b>Timer</b>
              </li>
              <li>Choose from 3s, 5s or 10s</li>
              <li>Tap the shutter circle button</li>
            </ol>
          </div>
          <div className="package-card">
            <h3>
              <u>Good to Know</u>
            </h3>
            <h4>Bonus camera tips</h4>
            <ul>
              <li>Prop your phone against something steady or use a tripod</li>
              <li>Choose 10s to give yourself time to get in the shot</li>
              <li>Switch to the front camera for timed selfies</li>
              <li>
                Tap <b>Edit</b> in the controls to add Timer to the top row for
                one-tap access
              </li>
            </ul>
          </div>
        </div>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Change Background</button>
        }
      >
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>Make It Yours</u>
            </h3>
            <h4>Put a favorite photo on display</h4>
            <ol>
              <li>
                Open the <b>Settings</b> app
              </li>
              <li>
                Scroll down and tap <b>Wallpaper</b>
              </li>
              <li>Tap Lockscreen or Homescreen and set photo</li>
              <li>
                Swipe to choose a photo style like black and white or a color
                wash
              </li>
              <li>
                For the Home Screen, you can also choose a <b>Blur</b> effect or
                a gradient <b>Color</b>
              </li>
              <li>
                Tap <b>Done</b> to save
              </li>
            </ol>
          </div>
          <div className="package-card">
            <h3>
              <u>Lock Screen Extras</u>
            </h3>
            <h4>Press and hold the Lock Screen, then tap Customize</h4>
            <ul>
              <li>
                Add widgets like weather, calendar or battery level above and
                below the clock
              </li>
              <li>Change the clock's font and color</li>
              <li>Drag the corner of the clock to make it bigger or smaller</li>
              <li>
                Tap <b>Done</b> to save
              </li>
            </ul>
          </div>
        </div>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Change Passcode</button>
        }
      >
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>Lock Your Phone</u>
            </h3>
            <h4>Required for Apple Wallet</h4>
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
          </div>
          <div className="package-card">
            <h3>
              <u>Good to Know</u>
            </h3>
            <h4>Extra Security</h4>
            <ul>
              <li>
                iPhones with a Home button use <b>Touch ID & Passcode</b>{" "}
                instead
              </li>
              <li>
                Tap <b>Passcode Options</b> to choose 6 digits or alphanumeric
              </li>
              <li>Avoid easy codes like 1234 or your birth year</li>
            </ul>
          </div>
        </div>
      </Collapsible>
      <h2>Android</h2>
      <Collapsible
        trigger={<button className="collapsible-trigger">Photo Editing</button>}
      >
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>Open the Editor</u>
            </h3>
            <h4>Built-in to the default app</h4>
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
                  className="card-icon"
                  height="15"
                  width="15"
                  alt="edit icon"
                />{" "}
                or a similar icon at the bottom of the screen
              </li>
            </ol>
          </div>
          <div className="package-card">
            <h3>
              <u>Make Changes</u>
            </h3>
            <h4>Tap Save when done</h4>
            <ul>
              <li>
                <b>Adjust:</b> Swipe through the options on the bottom and use
                the slider to modify
              </li>
              <li>
                <b>Crop:</b> Trim the photo down to size by dragging the corner
                dots
              </li>
              <li>
                Choose <b>Save as copy</b> to keep the original photo
              </li>
            </ul>
          </div>
        </div>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Shared Photo Album</button>
        }
      >
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>Share Photos</u>
            </h3>
            <h4>Send photos to family and friends</h4>
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
                Tap <b>Collections</b> at the bottom
              </li>
              <li>
                Tap <b>+</b> in the top right corner
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
                Tap the photo(s) to add to the album and hit <b>Add</b> in the
                top right corner
              </li>
              <li>Tap the check mark in the top left corner</li>
              <li>
                Tap{" "}
                <img
                  src="images/menu/share-android.png"
                  className="card-icon"
                  height="15"
                  width="15"
                  alt="share icon"
                />{" "}
                at the bottom of the screen
              </li>
              <li>
                Tap <b>Get link</b> and <b>Create link</b> which will be copied
                to the clipboard
              </li>
              <li>Share this link of the shared album with your contacts</li>
            </ol>
          </div>
          <div className="package-card">
            <h3>
              <u>Good to Know</u>
            </h3>
            <h4>Before you share</h4>
            <ul>
              <li>
                Anyone with the link can view the album, including iPhone users
              </li>
              <li>Invited family can add their own photos if you allow it</li>
              <li>Shared albums count against your Google account storage</li>
              <li>Family can like and comment on photos in the album</li>
              <li>You'll get a notification when new photos are added</li>
              <li>
                Turn off <b>Link sharing</b> in the album's options anytime to
                stop sharing
              </li>
            </ul>
          </div>
        </div>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">
            Analyze Text in Picture
          </button>
        }
      >
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>Scan Text</u>
            </h3>
            <h4>Uses OCR (text recognition)</h4>
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
            </ol>
          </div>
          <div className="package-card">
            <h3>
              <u>What You Can Do</u>
            </h3>
            <h4>Built into most Android phones</h4>
            <ul>
              <li>Highlight and copy text</li>
              <li>Search the text with Google</li>
              <li>Translate text into another language</li>
              <li>
                On newer phones, press and hold the bottom bar to use{" "}
                <b>Circle to Search</b>
              </li>
            </ul>
          </div>
        </div>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">
            Flashlight Variable Brightness
          </button>
        }
      >
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>Adjust the Brightness</u>
            </h3>
            <h4>A hidden Quick Settings feature</h4>
            <ol>
              <li>
                Swipe down from the top of the screen to open Quick Settings
              </li>
              <li>
                Tap and hold the flashlight button (on Samsung, tap the word{" "}
                <b>Flashlight</b>)
              </li>
              <li>Drag the slider to raise or lower the level of brightness</li>
              <li>
                Enabling flashlight now defaults to that level of brightness
              </li>
            </ol>
          </div>
        </div>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Timed Picture Capture</button>
        }
      >
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>Set the Timer</u>
            </h3>
            <h4>Great for group photos</h4>
            <ol>
              <li>
                Open the <b>Camera</b> app
              </li>
              <li>
                Tap{" "}
                <img
                  src="images/menu/camera-timer-icon.png"
                  className="card-icon"
                  height="15"
                  width="15"
                  alt="camera timer icon"
                />{" "}
                at the top
              </li>
              <li>Choose from 2s, 5s or 10s</li>
              <li>Tap the shutter circle button</li>
            </ol>
          </div>
          <div className="package-card">
            <h3>
              <u>Good to Know</u>
            </h3>
            <h4>Bonus camera tips</h4>
            <ul>
              <li>Prop your phone against something steady or use a tripod</li>
              <li>Choose 10s to give yourself time to get in the shot</li>
              <li>Switch to the front camera for timed selfies</li>
            </ul>
          </div>
        </div>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Change Background</button>
        }
      >
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>Make It Yours</u>
            </h3>
            <h4>Put a favorite photo on display</h4>
            <ol>
              <li>
                Open the <b>Settings</b> app
              </li>
              <li>
                Scroll down and tap <b>Wallpaper and style</b>
              </li>
              <li>
                Tap <b>Change wallpaper</b>
              </li>
              <li>Select a photo from your gallery or the categories</li>
              <li>
                Tap <b>Set wallpaper</b> and choose the home screen, lock screen
                or both
              </li>
            </ol>
          </div>
          <div className="package-card">
            <h3>
              <u>Lock Screen Extras</u>
            </h3>
            <h4>Press and hold the lock screen to customize</h4>
            <ul>
              <li>Change the clock style and color</li>
              <li>
                Pick shortcuts for the bottom corners, like the flashlight or
                camera
              </li>
              <li>Your phone can match its colors to your wallpaper</li>
            </ul>
          </div>
        </div>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Change Lock Type</button>
        }
      >
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>Lock Your Phone</u>
            </h3>
            <h4>Required for Google Wallet</h4>
            <ol>
              <li>
                Open the <b>Settings</b> app
              </li>
              <li>
                Scroll down and tap <b>Lock screen</b> (or{" "}
                <b>Security & privacy</b>)
              </li>
              <li>
                Tap <b>Screen lock type</b>
              </li>
              <li>Choose a new lock type and follow on-screen prompts</li>
            </ol>
          </div>
          <div className="package-card">
            <h3>
              <u>Good to Know</u>
            </h3>
            <h4>Extra Security</h4>
            <ul>
              <li>
                A screen lock is required for fingerprint unlock, face unlock
                and Google Wallet
              </li>
              <li>A PIN or password is more secure than a pattern</li>
              <li>Avoid easy codes like 1234 or your birth year</li>
            </ul>
          </div>
        </div>
      </Collapsible>
    </>
  );
}
