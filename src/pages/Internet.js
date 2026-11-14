import Collapsible from "react-collapsible";
import { Link } from "react-router-dom";
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
          <table className="browser-table">
            <tr>
              <th>Browser</th>
              <th>Icon</th>
              <th>OS</th>
              <th>Updated?</th>
            </tr>
            <tr>
              <td>
                <a
                  href="https://www.apple.com/safari/"
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
                <img
                  src="images/logos/apple.png"
                  height="20"
                  width="20"
                ></img>{" "}
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
                <img src="images/logos/linux.png" height="20" width="20"></img>{" "}
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
                <img src="images/logos/linux.png" height="20" width="20"></img>{" "}
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
                ></img>{" "}
                <img src="images/logos/linux.png" height="20" width="20"></img>
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
                <img src="images/logos/linux.png" height="20" width="20"></img>{" "}
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
                <img src="images/logos/linux.png" height="20" width="20"></img>{" "}
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
                <img src="images/logos/linux.png" height="20" width="20"></img>{" "}
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
          <button className="collapsible-trigger">Search Engines</button>
        }
      >
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>Search the Web</u>
            </h3>
            <h4>Searches open in a new tab</h4>
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
          </div>
        </div>

        <h5>
          NOTE: Popular search engines like Google, Bing and Yahoo are notorious
          for taking a left-wing bias and censoring search results.
        </h5>
      </Collapsible>
      <Collapsible
        trigger={<button className="collapsible-trigger">Extensions</button>}
      >
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>Install an Extension</u>
            </h3>
            <h4>Add new features to your browser</h4>
            <ol>
              <li>
                Open your browser's menu (the three dots or lines in the top
                corner)
              </li>
              <li>
                Select <b>Extensions</b> (<b>Add-ons</b> in Firefox) and open
                the extension store
              </li>
              <li>
                Search for the extension you want, like{" "}
                <a
                  href="https://chromewebstore.google.com/detail/ublock-origin-lite/ddkjiahejlhfcafbddmgiahcphecmpfh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  uBlock Origin Lite
                </a>
              </li>
              <li>
                Click <b>Add to...</b>, or <b>Get</b>, then confirm
              </li>
            </ol>
          </div>
          <div className="package-card">
            <h3>
              <u>Extension Stores</u>
            </h3>
            <h4>Use the browser's official store</h4>
            <div className="store-grid">
              <a
                className="store-tile"
                href="https://chromewebstore.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="Chrome Web Store (Chrome and Brave)"
              >
                <img
                  src="images/logos/chrome.png"
                  alt="Chrome Web Store (Chrome and Brave)"
                />
              </a>
              <a
                className="store-tile"
                href="https://microsoftedge.microsoft.com/addons"
                target="_blank"
                rel="noopener noreferrer"
                title="Edge Add-ons"
              >
                <img src="images/logos/edge.png" alt="Edge Add-ons" />
              </a>
              <a
                className="store-tile"
                href="https://addons.mozilla.org/"
                target="_blank"
                rel="noopener noreferrer"
                title="Firefox Add-ons"
              >
                <img src="images/logos/firefox.png" alt="Firefox Add-ons" />
              </a>
              <a
                className="store-tile"
                href="https://support.apple.com/guide/safari/get-extensions-sfri32508/mac"
                target="_blank"
                rel="noopener noreferrer"
                title="Safari Extensions"
              >
                <img src="images/logos/safari.png" alt="Safari Extensions" />
              </a>
            </div>
          </div>
        </div>
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
                <td>The cable wired to your home to provide internet</td>
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
              <tr>
                <td>DSL Internet</td>
                <td>
                  A connection using telephone lines to provide internet with a
                  max speed of 100Mbps
                </td>
                <td>Optimal for common internet use</td>
              </tr>
              <tr>
                <td>Fiber Internet</td>
                <td>
                  A connection using fiber optic cables to provide speeds of
                  1Gbps+
                </td>
                <td>Ideal for large data transfers and streaming</td>
              </tr>
              <tr>
                <td>Dial-Up Internet</td>
                <td>
                  A connection using telephone lines to provide internet with a
                  max speed of 56kbps
                </td>
                <td>Adequate only for text-based websites</td>
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
            NOTE: Most ISP packages include a modem/router combo device, often
            for a monthly rental fee, with cheap older hardware inside. Use a
            dedicated router to fully utilize your Wi-Fi speeds and increase
            coverage.
          </h5>
        </div>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Extending Wi-Fi Range</button>
        }
      >
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>Wi-Fi Extender</u>
            </h3>
            <h4>The most affordable option</h4>
            <ul>
              <li>
                Picks up your router's signal and re-broadcasts it to cover dead
                zones
              </li>
              <li>
                Ideal placement is halfway between your router and the weak spot
              </li>
              <li>
                Downsides: broadcasts a separate EXT network and cheaper ones
                won't carry the full bandwidth
              </li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>Mesh Network</u>
            </h3>
            <h4>The most seamless option</h4>
            <ul>
              <li>
                Seamlessly broadcasts your router's signal on the same network
              </li>
              <li>Utilizes multiple "nodes" placed around your home</li>
              <li>Higher starting cost but reliable and user-friendly</li>
              <li>
                Popular options include{" "}
                <a
                  href="https://www.tp-link.com/us/whole-home-mesh/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TP-Link Deco
                </a>{" "}
                and{" "}
                <a
                  href="https://eero.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Amazon eero
                </a>{" "}
                devices
              </li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>Powerline Adapter</u>
            </h3>
            <h4>A wired connection through your home</h4>
            <ul>
              <li>
                Uses your home's electrical wiring to carry your internet
                connection
              </li>
              <li>
                Provides a wired connection with minimal latency and
                interference
              </li>
              <li>
                Requires adapters to be plugged in to power outlets on the same
                breaker
              </li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>5GHz & 2.4GHz</u>
            </h3>
            <h4>Pick the right band for each device</h4>
            <ul>
              <li>
                <b>5GHz:</b> higher frequency, shorter range, less interference,
                faster speeds
              </li>
              <li>
                <b>2.4GHz:</b> lower frequency, longer range, more interference,
                slower speeds
              </li>
            </ul>
          </div>
        </div>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">
            Virtual Private Network
          </button>
        }
      >
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>What It Is</u>
            </h3>
            <h4>More than a buzzword</h4>
            <ul>
              <li>A secure connection that encrypts your internet traffic</li>
              <li>
                Routes your traffic through the VPN company's server, masking
                your IP address
              </li>
              <li>
                Makes it more difficult for hackers, ISPs and other third
                parties to track your online activities
              </li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>Do You Need One?</u>
            </h3>
            <h4>Overkill for most people unless you...</h4>
            <ul>
              <li>Need to connect securely to a server for work purposes</li>
              <li>Want to avoid your ISP tracking you</li>
              <li>
                Want to access content (like streaming) that is restricted in
                your country
              </li>
              <li>
                Regularly use public Wi-Fi at airports, hotels or coffee shops
              </li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>Providers</u>
            </h3>
            <h4>Popular paid VPN services</h4>
            <div className="vpn-logos">
              <a
                href="https://protonvpn.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="images/vpns/proton.png" alt="ProtonVPN" />
              </a>
              <a
                href="https://nordvpn.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="images/vpns/nord.png" alt="NordVPN" />
              </a>
              <a
                href="https://www.expressvpn.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="images/vpns/express.png" alt="ExpressVPN" />
              </a>
            </div>
          </div>
        </div>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Wi-Fi vs Wired</button>
        }
      >
        <h4>
          Wi-Fi is adequate for most use cases, but a wired connection with an
          Ethernet cable reliably delivers your full internet speed.
        </h4>
        <div className="tech">
          <table className="comparison-table">
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
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>What They Do</u>
            </h3>
            <h4>Dedicated speaker for a voice assistant</h4>
            <ul>
              <li>Talk to a voice assistant, each summoned by name</li>
              <li>Amazon's Alexa, Apple's Siri or Google's Gemini</li>
              <li>
                Ask questions, play music, set timers and control smart home
                devices
              </li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>Brands</u>
            </h3>
            <h4>Popular smart speakers</h4>
            <div className="store-grid">
              <a
                className="store-tile logo-tile"
                href="https://www.amazon.com/echo"
                target="_blank"
                rel="noopener noreferrer"
                title="Amazon Echo"
              >
                <img src="images/iot/echo.png" alt="Amazon Echo" />
              </a>
              <a
                className="store-tile logo-tile"
                href="https://www.apple.com/homepod/"
                target="_blank"
                rel="noopener noreferrer"
                title="Apple HomePod"
              >
                <img src="images/iot/homepod.png" alt="Apple HomePod" />
              </a>
              <a
                className="store-tile logo-tile"
                href="https://www.sonos.com/en-us/shop/smart-speakers"
                target="_blank"
                rel="noopener noreferrer"
                title="Sonos"
              >
                <img src="images/iot/sonos.png" alt="Sonos" />
              </a>
              <a
                className="store-tile logo-tile"
                href="https://store.google.com/us/category/nest_speakers?hl=en-US"
                target="_blank"
                rel="noopener noreferrer"
                title="Google Nest"
              >
                <img src="images/iot/nest.png" alt="Google Nest" />
              </a>
            </div>
          </div>
        </div>
      </Collapsible>
      <Collapsible
        trigger={<button className="collapsible-trigger">Smart Home</button>}
      >
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>Smart Home Apps</u>
            </h3>
            <h4>Unified control of smart devices</h4>
            <div className="store-grid">
              <a
                className="store-tile logo-tile captioned"
                href="https://support.google.com/chromecast/answer/7071794?hl=en&co=GENIE.Platform%3DAndroid"
                target="_blank"
                rel="noopener noreferrer"
                title="Google Home"
              >
                <img src="images/iot/google-home.svg" alt="Google Home" />
                <span>Google Home</span>
              </a>
              <a
                className="store-tile logo-tile captioned"
                href="https://www.samsung.com/us/support/owners/app/smartthings"
                target="_blank"
                rel="noopener noreferrer"
                title="Samsung SmartThings"
              >
                <img
                  src="images/iot/smartthings.svg"
                  alt="Samsung SmartThings"
                />
                <span>SmartThings</span>
              </a>
              <a
                className="store-tile logo-tile captioned"
                href="https://www.apple.com/home-app/"
                target="_blank"
                rel="noopener noreferrer"
                title="Apple Home"
              >
                <img src="images/iot/apple-home.svg" alt="Apple Home" />
                <span>Apple Home</span>
              </a>
              <a
                className="store-tile logo-tile captioned"
                href="https://www.home-assistant.io/"
                target="_blank"
                rel="noopener noreferrer"
                title="Home Assistant (privacy-focused)"
              >
                <img src="images/iot/home-assistant.svg" alt="Home Assistant" />
                <span>Home Assistant</span>
              </a>
            </div>
          </div>
          <div className="package-card">
            <h3>
              <u>Brands</u>
            </h3>
            <h4>Popular smart home devices</h4>
            <div className="store-grid">
              <a
                className="store-tile logo-tile"
                href="https://ring.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="Ring"
              >
                <img src="images/iot/ring.svg" alt="Ring" />
              </a>
              <a
                className="store-tile logo-tile"
                href="https://www.apple.com/apple-homeview/"
                target="_blank"
                rel="noopener noreferrer"
                title="Apple HomeView"
              >
                <img src="images/iot/homeview.png" alt="Apple HomeView" />
              </a>
              <a
                className="store-tile logo-tile"
                href="https://www.philips-hue.com/en-us"
                target="_blank"
                rel="noopener noreferrer"
                title="Philips Hue"
              >
                <img src="images/iot/hue.png" alt="Philips Hue" />
              </a>

              <a
                className="store-tile logo-tile"
                href="https://store.google.com/us/category/connected_home?hl=en-US"
                target="_blank"
                rel="noopener noreferrer"
                title="Nest"
              >
                <img src="images/iot/nest.png" alt="Nest" />
              </a>
            </div>
          </div>
        </div>
      </Collapsible>
    </>
  );
}
