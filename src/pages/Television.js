import Collapsible from "react-collapsible";
import "./television.css";

export default function Television() {
  return (
    <>
      <div className="section-header">
        <h1>Television</h1>
      </div>
      <h2>Software</h2>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Cast from Phone to TV</button>
        }
      >
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>Cast a Video</u>
            </h3>
            <h4>Seamlessly play a video to your TV</h4>
            <ol>
              <li>Make sure your phone and TV are on the same Wi-Fi network</li>
              <li>Open the desired phone app you wish to cast to TV</li>
              <li>Start playing a video/movie</li>
              <li>
                Tap the fullscreen icon{" "}
                <img
                  src="images/menu/fullscreen.png"
                  className="card-icon"
                  height="15"
                  width="15"
                  alt="fullscreen icon"
                />
              </li>
              <li>
                Tap the cast icon{" "}
                <img
                  src="images/menu/cast.png"
                  className="card-icon"
                  height="15"
                  width="15"
                  alt="cast icon"
                />{" "}
                or AirPlay icon{" "}
                <img
                  src="images/menu/airplay.png"
                  className="card-icon"
                  height="15"
                  width="30"
                  alt="airplay icon"
                />
              </li>
              <li>Select your TV from the list</li>
            </ol>
          </div>
          <div className="package-card">
            <h3>
              <u>Limitations</u>
            </h3>
            <h4>Not all smart TVs support both</h4>
            <ul>
              <li>
                <b>Cast</b>{" "}
                <img
                  src="images/menu/cast.png"
                  className="card-icon"
                  height="15"
                  width="15"
                  alt="cast icon"
                />
                : Works from iPhone and Android to Chromecast, Google TV and
                many smart TVs
              </li>
              <li>
                <b>AirPlay</b>{" "}
                <img
                  src="images/menu/airplay.png"
                  className="card-icon"
                  height="15"
                  width="30"
                  alt="airplay icon"
                />
                : Works from iPhone and iPad to Apple TV and AirPlay-compatible
                smart TVs
              </li>
              <li>
                Check your TV's settings or manual to see which one it supports
              </li>
            </ul>
          </div>
        </div>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Install Smart TV App</button>
        }
      >
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>Install an App</u>
            </h3>
            <h4>Steps vary by TV make and model</h4>
            <ol>
              <li>
                On your TV's home screen, navigate to <b>Apps</b> or{" "}
                <b>App Store</b>
              </li>
              <li>
                Select <b>Search</b>
              </li>
              <li>
                Using the onscreen keyboard that pops up, type in the app and
                search
              </li>
              <li>
                Select the app and choose <b>Install</b> or <b>Download</b>
              </li>
            </ol>
          </div>
          <div className="package-card">
            <h3>
              <u>Limitations</u>
            </h3>
            <h4>Other options to try</h4>
            <ul>
              <li>Check your home screen, as some apps come preinstalled</li>
              <li>Some TVs only offer a limited set of apps</li>
              <li>Older smart TVs eventually lose compatibility with apps</li>
              <li>
                Plug in a streaming stick like Roku or Apple TV to restore
                access to apps
              </li>
            </ul>
          </div>
        </div>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Delete Smart TV App</button>
        }
      >
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>Delete an App</u>
            </h3>
            <h4>Steps vary by TV make and model</h4>
            <ol>
              <li>
                On your TV's home screen, navigate to the app you'd like to
                delete
              </li>
              <li>
                Press the remote's options button, or press and hold the select
                button on some TVs
              </li>
              <li>
                In the menu that pops up, select <b>Delete</b>, <b>Uninstall</b>{" "}
                or <b>Remove</b>
              </li>
            </ol>
          </div>
          <div className="package-card">
            <h3>
              <u>Find the Delete Option</u>
            </h3>
            <h4>Varies by brand</h4>
            <ul>
              <li>
                <b>Roku:</b> Press the <b>*</b> button
              </li>
              <li>
                <b>Fire TV:</b> Press the menu button (three lines)
              </li>
              <li>
                <b>Google TV:</b> Press and hold the select button
              </li>
              <li>
                <b>Samsung:</b> Press down on the app
              </li>
              <li>
                <b>LG:</b> Press and hold the select button
              </li>
            </ul>
          </div>
        </div>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">TV Troubleshooting</button>
        }
      >
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>No Signal</u>
            </h3>
            <h4>The TV is on but shows nothing</h4>
            <ul>
              <li>
                Press <b>Input</b> or <b>Source</b> on the remote and pick the
                right HDMI port
              </li>
              <li>Make sure the connected device is turned on</li>
              <li>
                Ensure the display and power cables are plugged in firmly at
                both ends
              </li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>Frozen or Slow</u>
            </h3>
            <h4>Apps freeze or the menu lags</h4>
            <ol>
              <li>Unplug the TV from the wall for 60 seconds</li>
              <li>Plug it back in and turn it on</li>
              <li>Check for a software update in the TV's settings</li>
              <li>Check for an update to the app</li>
            </ol>
          </div>
          <div className="package-card">
            <h3>
              <u>Remote Not Working</u>
            </h3>
            <h4>Buttons are unresponsive</h4>
            <ul>
              <li>Replace the batteries</li>
              <li>Point the remote at the TV and remove anything in the way</li>
              <li>
                Remotes occasionally need to be re-paired, so check your TV's
                manual
              </li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>Apps Won't Load</u>
            </h3>
            <h4>The TV can't connect to the internet</h4>
            <ul>
              <li>Restart your router by unplugging it for 30 seconds</li>
              <li>
                Reconnect to Wi-Fi in the TV's <b>Network</b> settings
              </li>
              <li>Restart the TV after it reconnects</li>
            </ul>
          </div>
        </div>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Soap Opera Effect</button>
        }
      >
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>What It Is</u>
            </h3>
            <h4>Why movies look strange</h4>
            <ul>
              <li>
                Motion smoothing adds extra frames to make movement look
                smoother
              </li>
              <li>It makes movies look like a cheap daytime soap opera</li>
              <li>Turned on by default on most new TVs</li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>Turn It Off</u>
            </h3>
            <h4>Get the picture the director intended</h4>
            <ol>
              <li>
                Go to your TV's <b>Picture</b> settings
              </li>
              <li>
                Change the picture mode to <b>Movie</b>, <b>Cinema</b> or{" "}
                <b>Filmmaker Mode</b>
              </li>
              <li>
                Turn off motion smoothing: <b>Picture Clarity</b> (Samsung),{" "}
                <b>TruMotion</b> (LG) or <b>Motionflow</b> (Sony)
              </li>
            </ol>
          </div>
        </div>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Dialogue Options</button>
        }
      >
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>Turn On Captions</u>
            </h3>
            <h4>Great for loud movies or on mute</h4>
            <ol>
              <li>
                Press the <b>Settings</b> or <b>Menu</b> button on your remote
              </li>
              <li>
                Go to <b>Accessibility</b> (sometimes under <b>General</b>) or
                find the speech bubble icon in streaming apps
              </li>
              <li>
                Turn on <b>Captions</b> or <b>Subtitles</b>
              </li>
              <li>Adjust the caption size and style if available</li>
            </ol>
          </div>
          <div className="package-card">
            <h3>
              <u>Clearer Dialogue</u>
            </h3>
            <h4>Boost vocal audio</h4>
            <ul>
              <li>
                Look in your TV's <b>Sound</b> settings for a dialogue option
              </li>
              <li>
                <b>LG:</b> Clear Voice
              </li>
              <li>
                <b>Sony:</b> Voice Zoom
              </li>
              <li>
                <b>Samsung:</b> Active Voice Amplifier
              </li>
              <li>
                <b>Roku:</b> Speech Clarity
              </li>
              <li>Turn off virtual surround effects, which can muddy voices</li>
            </ul>
          </div>
        </div>
      </Collapsible>
      <Collapsible
        trigger={<button className="collapsible-trigger">Data Tracking</button>}
      >
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>What It Is</u>
            </h3>
            <h4>Your TV monitors your content</h4>
            <ul>
              <li>
                Most smart TVs track what you watch, even from cable or antenna
              </li>
              <li>
                This data is used for advertising content to you based on what
                you watch
              </li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>Turn It Off</u>
            </h3>
            <h4>Look in your privacy settings</h4>
            <ul>
              <li>
                <b>Samsung:</b> Viewing Information Services
              </li>
              <li>
                <b>LG:</b> Live Plus
              </li>
              <li>
                <b>Vizio:</b> Viewing Data
              </li>
              <li>
                <b>Roku:</b> Use Info from TV Inputs
              </li>
              <li>
                <b>Sony:</b> Samba Interactive TV
              </li>
            </ul>
          </div>
        </div>
      </Collapsible>

      <h2>Hardware</h2>
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
                  href="https://www.onntvsupport.com/s/"
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
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>Find Your Model</u>
            </h3>
            <h4>Needed for support and manuals</h4>
            <ul>
              <li>Look for a sticker on the back of the TV</li>
              <li>
                Or check your TV's <b>Settings</b> menu under <b>Support</b> or{" "}
                <b>About</b>
              </li>
              <li>Enter the model number on your brand's website above</li>
            </ul>
          </div>
        </div>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Universal Control</button>
        }
      >
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>HDMI-CEC</u>
            </h3>
            <h4>Control connected devices with your smart TV remote</h4>
            <ul>
              <li>
                Turn on and control a soundbar, cable box or streaming stick
              </li>
              <li>Devices turn on and switch inputs automatically</li>
              <li>Works over the HDMI cable you already have</li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>Turn It On</u>
            </h3>
            <h4>Each brand calls it something different</h4>
            <ul>
              <li>
                <b>Samsung:</b> Anynet+
              </li>
              <li>
                <b>LG:</b> SimpLink
              </li>
              <li>
                <b>Sony:</b> Bravia Sync
              </li>
              <li>
                <b>Vizio:</b> CEC
              </li>
              <li>
                <b>Roku:</b> Control Other Devices (CEC)
              </li>
              <li>
                Turn it on for the connected device too, if it has the setting
              </li>
            </ul>
          </div>
        </div>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Display Inputs</button>
        }
      >
        <h4>
          Use this table to find the right port for your device. Newer TVs
          usually only have the first 4, found on the back or side.
        </h4>
        <div className="television">
          <table className="inputs-table">
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
                Streaming stick<br></br>power
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
                Streaming stick<br></br>power
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
                Blu-ray player,<br></br>game console,<br></br>streaming stick
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
              <td>
                Cable,<br></br>satellite
              </td>
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
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>Older Devices</u>
            </h3>
            <h4>Most can still work with a modern TV</h4>
            <ul>
              <li>Nearly all modern devices connect to TVs with HDMI</li>
              <li>
                Older devices like VCRs use composite cables (red, white and
                yellow)
              </li>
              <li>
                An affordable analog to digital converter (ADC) like{" "}
                <a
                  href="https://www.amazon.com/Converter-ABLEWE-Composite-Supporting-Blue-Ray/dp/B07RX69KR8/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  this one
                </a>{" "}
                bridges the gap
              </li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>Convert That Signal</u>
            </h3>
            <h4>Set up the converter</h4>
            <ol>
              <li>
                Connect the converter to power using a spare USB Type-A port on
                the back of the TV or outlet
              </li>
              <li>
                Plug the older device's composite cables into the matching color
                ports on the converter
              </li>
              <li>Connect an HDMI cable from the converter to the TV</li>
              <li>Switch the TV to that HDMI input and enjoy!</li>
            </ol>
          </div>
        </div>
      </Collapsible>

      <Collapsible
        trigger={<button className="collapsible-trigger">Soundbars</button>}
      >
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>Why a Soundbar</u>
            </h3>
            <h4>A big upgrade over TV speakers</h4>
            <ul>
              <li>
                Modern TVs have small speakers that often face down or backward
              </li>
              <li>Clearer dialogue and fuller sound</li>
              <li>Many have a voice mode to make speech easier to hear</li>
              <li>
                Night mode keeps voices clear while quieting loud explosions
              </li>
              <li>Some include a subwoofer for deeper bass</li>
              <li>Many can also play music from your phone over Bluetooth</li>
              <li>Fits neatly below the TV and works with your TV remote</li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>Connection</u>
            </h3>
            <h4>Use the HDMI ARC port</h4>
            <ol>
              <li>
                Find the TV's HDMI port labeled <b>ARC</b> or <b>eARC</b>
              </li>
              <li>
                Connect an HDMI cable from that port to the soundbar's{" "}
                <b>HDMI ARC</b> port
              </li>
              <li>Turn on HDMI-CEC (see Universal Control above)</li>
              <li>
                Set the TV's sound output to the soundbar in <b>Sound</b>{" "}
                settings
              </li>
            </ol>
          </div>
        </div>
      </Collapsible>
    </>
  );
}
