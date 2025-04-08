import Collapsible from "react-collapsible";
import "./internet.css";

export default function Internet() {
  return (
    <>
      <div className="section-header">
        <h1>Internet</h1>
      </div>
      <h2>Browser</h2>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Common Browsers</button>
        }
      >
        <div className="tech">
          <table>
            <tr>
              <th>Browser Name</th>
              <th>Icon</th>
              <th>Platform</th>
              <th>Updated?</th>
            </tr>
            <tr>
              <td>
                <a
                  href="https://support.apple.com/downloads/safari"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Safari
                </a>
              </td>
              <td>
                <img src="images/logos/safari.png" height="20" width="20"></img>
              </td>
              <td style={{ textAlign: "left" }}>
                <img src="images/logos/apple.png" height="20" width="20"></img>{" "}
              </td>
              <td>
                <span className="material-symbols-outlined">check_circle</span>
              </td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://www.google.com/chrome/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chrome
                </a>
              </td>
              <td>
                <img src="images/logos/chrome.png" height="20" width="20"></img>
              </td>
              <td style={{ textAlign: "left" }}>
                <img src="images/logos/apple.png" height="20" width="20"></img>{" "}
                <img
                  src="images/logos/windows.png"
                  height="20"
                  width="20"
                ></img>{" "}
                <img src="images/logos/chrome.png" height="20" width="20"></img>
              </td>
              <td>
                <span className="material-symbols-outlined">check_circle</span>
              </td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://www.mozilla.org/en-US/firefox/new/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Firefox
                </a>
              </td>
              <td>
                <img
                  src="images/logos/firefox.png"
                  height="20"
                  width="20"
                ></img>
              </td>
              <td style={{ textAlign: "left" }}>
                <img src="images/logos/apple.png" height="20" width="20"></img>{" "}
                <img
                  src="images/logos/windows.png"
                  height="20"
                  width="20"
                ></img>{" "}
                <img src="images/logos/chrome.png" height="20" width="20"></img>
                *
              </td>
              <td>
                <span className="material-symbols-outlined">check_circle</span>
              </td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://www.microsoft.com/en-us/edge/download?form=MA13FJ&ch=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Edge
                </a>
              </td>
              <td>
                <img src="images/logos/edge.png" height="20" width="20"></img>
              </td>
              <td style={{ textAlign: "left" }}>
                <img src="images/logos/apple.png" height="20" width="20"></img>{" "}
                <img
                  src="images/logos/windows.png"
                  height="20"
                  width="20"
                ></img>
              </td>
              <td>
                <span className="material-symbols-outlined">check_circle</span>
              </td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://brave.com/download/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Brave
                </a>
              </td>
              <td>
                <img src="images/logos/brave.png" height="20" width="20"></img>
              </td>
              <td style={{ textAlign: "left" }}>
                <img src="images/logos/apple.png" height="20" width="20"></img>{" "}
                <img
                  src="images/logos/windows.png"
                  height="20"
                  width="20"
                ></img>{" "}
                <img src="images/logos/chrome.png" height="20" width="20"></img>
                *
              </td>
              <td>
                <span className="material-symbols-outlined">check_circle</span>
              </td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://duckduckgo.com/windows?origin=funnel_home_google__details"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DuckDuckGo
                </a>
              </td>
              <td>
                <img
                  src="images/logos/duckduckgo.png"
                  height="20"
                  width="20"
                ></img>
              </td>
              <td style={{ textAlign: "left" }}>
                <img src="images/logos/apple.png" height="20" width="20"></img>{" "}
                <img
                  src="images/logos/windows.png"
                  height="20"
                  width="20"
                ></img>{" "}
                <img src="images/logos/chrome.png" height="20" width="20"></img>
                *
              </td>
              <td>
                <span className="material-symbols-outlined">check_circle</span>
              </td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://www.opera.com/download"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Opera
                </a>
              </td>
              <td>
                <img src="images/logos/opera.png" height="20" width="20"></img>
              </td>
              <td style={{ textAlign: "left" }}>
                <img src="images/logos/apple.png" height="20" width="20"></img>{" "}
                <img
                  src="images/logos/windows.png"
                  height="20"
                  width="20"
                ></img>{" "}
                <img src="images/logos/chrome.png" height="20" width="20"></img>
                *
              </td>
              <td>
                <span className="material-symbols-outlined">check_circle</span>
              </td>
            </tr>
            <tr>
              <td>Explorer</td>
              <td>
                <img
                  src="images/logos/explorer.png"
                  height="20"
                  width="20"
                ></img>
              </td>
              <td style={{ textAlign: "left" }}>
                <img src="images/logos/apple.png" height="20" width="20"></img>{" "}
                <img
                  src="images/logos/windows.png"
                  height="20"
                  width="20"
                ></img>
              </td>
              <td></td>
            </tr>
          </table>
        </div>

        <h5>
          NOTE: * indicates these browsers aren't natively supported on chromeOS
          but can be installed after enabling Linux apps by following{" "}
          <a
            href="https://www.howtogeek.com/777839/can-you-use-other-browsers-on-a-chromebook/#install-linux-browsers-on-a-chromebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            these
          </a>{" "}
          steps.
        </h5>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Installing Extensions</button>
        }
      >
        <ol>
          <li>
            Using your browser of choice, navigate to the Manage Extensions menu
            in your browser settings
          </li>
          <li>
            Find the link to the extension store in Manage Extensions menu
          </li>
          <li>Search for the desired extension in the store</li>
          <li>Click the Add to browser button</li>
        </ol>
        <h5>
          NOTE: Adding ad blocking extensions like uBlock Origin or AdBlock Plus
          is a great way to improve your security while browsing.
        </h5>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Search Engines</button>
        }
      >
        <div className="internet">
          <table>
            <tbody>
              <tr>
                <td>
                  <img
                    src="images/logos/google.png"
                    alt="Google logo"
                    width="75"
                    height="25"
                  />
                </td>
                <td>
                  <form
                    action="https://www.google.com/search"
                    method="get"
                    target="_blank"
                  >
                    <div className="search">
                      <input type="text" name="q" placeholder="Search" />
                    </div>
                    <button type="submit">
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: "24px", color: "white" }}
                      >
                        search
                      </span>
                    </button>
                  </form>
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    src="images/logos/yahoo.png"
                    alt="Yahoo logo"
                    width="75"
                    height="25"
                  />
                </td>
                <td>
                  <form
                    action="https://search.yahoo.com/search"
                    method="get"
                    target="_blank"
                  >
                    <div className="search">
                      <input type="text" name="p" placeholder="Search" />
                    </div>
                    <button type="submit">
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: "24px", color: "white" }}
                      >
                        search
                      </span>
                    </button>
                  </form>
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    src="images/logos/bing.png"
                    alt="Bing logo"
                    width="75"
                    height="25"
                  />
                </td>
                <td>
                  <form
                    action="https://www.bing.com/search"
                    method="get"
                    target="_blank"
                  >
                    <div className="search">
                      <input type="text" name="q" placeholder="Search" />
                    </div>
                    <button type="submit">
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: "24px", color: "white" }}
                      >
                        search
                      </span>
                    </button>
                  </form>
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    src="images/logos/duckduckgo2.png"
                    alt="DuckDuckGo logo"
                    width="75"
                    height="25"
                  />
                </td>
                <td>
                  <form
                    action="https://duckduckgo.com/html"
                    method="get"
                    target="_blank"
                  >
                    <div className="search">
                      <input type="text" name="q" placeholder="Search" />
                    </div>
                    <button type="submit">
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: "24px", color: "white" }}
                      >
                        search
                      </span>
                    </button>
                  </form>
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    src="images/logos/bravesearch.png"
                    alt="Brave logo"
                    width="75"
                    height="25"
                  />
                </td>
                <td>
                  <form
                    action="https://search.brave.com/search"
                    method="get"
                    target="_blank"
                  >
                    <div className="search">
                      <input type="text" name="q" placeholder="Search" />
                    </div>
                    <button type="submit">
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: "24px", color: "white" }}
                      >
                        search
                      </span>
                    </button>
                  </form>
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    src="images/logos/yandex.png"
                    alt="Yandex logo"
                    width="75"
                    height="25"
                  />
                </td>
                <td>
                  <form
                    action="https://yandex.com/search"
                    method="get"
                    target="_blank"
                  >
                    <div className="search">
                      <input type="text" name="text" placeholder="Search" />
                    </div>
                    <button type="submit">
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: "24px", color: "white" }}
                      >
                        search
                      </span>
                    </button>
                  </form>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h5>
          NOTE: Popular search engines like Google, Bing and Yahoo are notorious
          for taking a left-wing bias and censoring search results.
        </h5>
      </Collapsible>
      <h2>Connections</h2>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Choosing an ISP</button>
        }
      >
        <h4>
          Keep in mind the following when browsing around for an ISP (Internet
          Service Provider):
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
                <td>Download Speed</td>
                <td>
                  Transferring data to your device, measured in megabits per
                  second (Mbps)
                </td>
                <td>Basic internet browsing, video streaming</td>
              </tr>
              <tr>
                <td>Upload Speed</td>
                <td>
                  Transferring data from your device, measured in megabits per
                  second (Mbps)
                </td>
                <td>Uploading photos, videos to YouTube</td>
              </tr>
              <tr>
                <td>Connection Type</td>
                <td>
                  The cable wired to your home to provide internet, fiber being
                  the optimal choice
                </td>
                <td>Fiber optic, copper</td>
              </tr>
              <tr>
                <td>Ping</td>
                <td>
                  How quickly your device gets a response from a server,
                  measured in milliseconds (ms)
                </td>
                <td>Responsive online gaming</td>
              </tr>
              <tr>
                <td>Jitter</td>
                <td>
                  Fluctuations in the speed of data downloaded, measured in
                  milliseconds (ms)
                </td>
                <td>Clarity in video calls</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="internet">
          <table>
            <tbody>
              <tr>
                <td>
                  <form
                    action="https://broadbandnow.com/zip"
                    method="get"
                    target="_blank"
                  >
                    <div className="search">
                      <input
                        type="text"
                        name="zip"
                        placeholder="Enter ZIP to search ISPs"
                      />
                    </div>
                    <button type="submit">
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: "24px", color: "white" }}
                      >
                        search
                      </span>
                    </button>
                  </form>
                </td>
              </tr>
            </tbody>
          </table>
          <h5>
            NOTE: Most ISP packages include a modem/router combo device for free
            because of the cheap older hardware inside. Use a dedicated router
            to fully utilize your Wi-Fi speeds and increase coverage.
          </h5>
        </div>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Extending Wi-Fi Range</button>
        }
      >
        <div className="tech">
          <table>
            <thead>
              <tr>
                <th>Method</th>
                <th>Features</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Wi-Fi Extender</td>
                <td style={{ textAlign: "left" }}>
                  <ol>
                    <li>
                      Picks up your router's signal and re-broadcasts it to
                      cover dead zones
                    </li>{" "}
                    <li>
                      Ideal placement is halfway between your router and the
                      weak spot
                    </li>
                    <li>
                      Downsides: broadcasts a separate network and cheaper ones
                      won't carry the full bandwith
                    </li>
                  </ol>
                </td>
              </tr>
              <tr>
                <td>Mesh Network</td>
                <td style={{ textAlign: "left" }}>
                  <ol>
                    <li>
                      Seamlessly broadcasts your router's signal on the same
                      network
                    </li>
                    <li>Utilizes multiple "nodes" placed around your home</li>
                    <li>Higher starting cost but reliable and user-friendly</li>
                  </ol>
                </td>
              </tr>
              <tr>
                <td>Powerline Adapter</td>
                <td style={{ textAlign: "left" }}>
                  <ol>
                    <li>
                      Utilizes your home's electrical wiring to connect devices
                    </li>
                    <li>
                      Provides a wired connection with minimal latency and
                      interference
                    </li>
                    <li>Requires a power outlet for each device</li>
                  </ol>
                </td>
              </tr>
              <tr>
                <td>
                  5Ghz &<br></br>2.4Ghz<br></br>Bands
                </td>
                <td style={{ textAlign: "left" }}>
                  <ol>
                    <li>
                      5Ghz: higher frequency, shorter range, less interference,
                      faster speeds
                    </li>
                    <li>
                      2.4Ghz: lower frequency, longer range, more interference,
                      slower speeds
                    </li>
                  </ol>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
      {/* <Collapsible
        trigger={
          <button className="collapsible-trigger">
            Virtual Private Network
          </button>
        }
      >
        <h4>
          A virtual private network (VPN) is a secure connection that allows you
          to access the internet from a private network, such as your home or
          office. It encrypts your internet traffic and re-routes your IP
          address, making it more difficult for hackers and other third parties
          to track your online activities.
        </h4>
      </Collapsible> */}
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Wi-Fi vs Wired</button>
        }
      >
        <h4>
          With modern devices and a standard ISP package, for most uses, a Wi-Fi
          connection to your devices is adequate. However, if you want to fully
          utilize your internet speed, a wired connection to your router with an
          Ethernet cable is the way to go with the devices that support it.
        </h4>
        <div className="tech">
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Wi-Fi</th>
                <th>Wired</th>
                <th>Explanation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Convenience</td>
                <td>
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>
                </td>
                <td></td>
                <td>Wi-Fi is wireless</td>
              </tr>
              <tr>
                <td>Interference</td>
                <td></td>
                <td>
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>
                </td>
                <td>Wired doesn't broadcast any RF</td>
              </tr>
              <tr>
                <td>Speed</td>
                <td></td>
                <td>
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>
                </td>
                <td>Wired has a direct connection to the router</td>
              </tr>
              <tr>
                <td>Stability</td>
                <td></td>
                <td>
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>
                </td>
                <td>Wired doesn't have fluctuations because of interference</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h5>
          NOTE: Devices like desktops and laptops (natively or via an{" "}
          <a href="https://www.amazon.com/USB-Ethernet-Adapter-Gigabit-Switch/dp/B09GRL3VCN/ref=sr_1_2?sr=8-2">
            adapter
          </a>
          ) support a wired connection with an Ethernet port (see the Common
          Inputs tip <a href="https://www.aatechtips.com/computer">here</a>).
        </h5>
      </Collapsible>
      <h2>IoT (Internet of Things)</h2>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Smart Speakers</button>
        }
      >
        <h4>
          Most Big Tech companies these days have a Smart Speaker that allows
          you to interact with their proprietary smart assistant. For example,
          Apple has Siri, Amazon uses Alexa and Google uses Google Assistant and
          they can each be summoned by name.
        </h4>
        <div className="television">
          <table>
            <tr>
              <td>
                <a
                  href="https://www.amazon.com/smart-home-devices/b?ie=UTF8&node=9818047011"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/iot/echo.png"
                    alt="Samsung"
                    width="100"
                    height="25"
                  />
                </a>
              </td>
              <td>
                <a
                  href="https://www.apple.com/homepod/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/iot/homepod.png"
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
                  href="https://www.sonos.com/en-us/shop/smart-speakers"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/iot/sonos.png"
                    alt="Sony"
                    width="100"
                    height="50"
                  />
                </a>
              </td>
              <td>
                <a
                  href="https://store.google.com/us/category/nest_speakers?hl=en-US"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/iot/nest.png"
                    alt="Toshiba"
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
        trigger={<button className="collapsible-trigger">Smart Home</button>}
      >
        <h4>
          It is easier now than ever before to create a unified experience with
          a wide range of Smart Home devices all connected to and interacted
          with via your smartphone. Most devices can be integrated with{" "}
          <a href="https://support.google.com/chromecast/answer/7071794?hl=en&co=GENIE.Platform%3DAndroid">
            Google Home
          </a>
          {", "}
          <a href="https://www.samsung.com/us/support/owners/app/smartthings">
            Samsung SmartThings
          </a>
          {", "}
          and <a href="https://www.apple.com/home-app/">Apple Home</a> or a more
          privacy focused alternative such as{" "}
          <a href="https://www.home-assistant.io/">Home Assistant</a>.
        </h4>
        <div className="television">
          <table>
            <tr>
              <td>
                <a
                  href="https://store.google.com/us/category/connected_home?hl=en-US"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/iot/nest.png"
                    alt="Nest"
                    width="100"
                    height="50"
                  />
                </a>
              </td>
              <td>
                <a
                  href="https://ring.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/iot/ring.svg"
                    alt="Ring"
                    width="100"
                    height="50"
                  />
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://www.philips-hue.com/en-us"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/iot/hue.png"
                    alt="Philips Hue"
                    width="75"
                    height="50"
                  />
                </a>
              </td>
              <td>
                <a
                  href="https://www.lg.com/us/lg-thinq"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/iot/thinq.png"
                    alt="LG Thinq"
                    width="100"
                    height="15"
                  />
                </a>
              </td>
            </tr>
          </table>
        </div>
      </Collapsible>
    </>
  );
}
