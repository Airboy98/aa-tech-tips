import Collapsible from "react-collapsible";
import "./internet.css";

export default function Internet() {
  return (
    <>
      <div className="section-header">
        <h1>Internet Tips</h1>
      </div>
      <h2>Browser</h2>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Common Browsers</button>
        }
      >
        <div className="internet">
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
              <td>
                <img src="images/logos/apple.svg" height="20" width="20"></img>{" "}
              </td>
              <td bgcolor="green"></td>
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
              <td>
                <img src="images/logos/apple.svg" height="20" width="20"></img>{" "}
                <img
                  src="images/logos/windows.png"
                  height="20"
                  width="20"
                ></img>{" "}
                <img src="images/logos/chrome.png" height="20" width="20"></img>
              </td>
              <td bgcolor="green"></td>
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
              <td>
                <img src="images/logos/apple.svg" height="20" width="20"></img>{" "}
                <img
                  src="images/logos/windows.png"
                  height="20"
                  width="20"
                ></img>{" "}
                <img src="images/logos/chrome.png" height="20" width="20"></img>
                *
              </td>
              <td bgcolor="green"></td>
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
                <img src="images/logos/edge.jpg" height="20" width="20"></img>
              </td>
              <td>
                <img src="images/logos/apple.svg" height="20" width="20"></img>{" "}
                <img
                  src="images/logos/windows.png"
                  height="20"
                  width="20"
                ></img>
              </td>
              <td bgcolor="green"></td>
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
              <td>
                <img src="images/logos/apple.svg" height="20" width="20"></img>{" "}
                <img
                  src="images/logos/windows.png"
                  height="20"
                  width="20"
                ></img>{" "}
                <img src="images/logos/chrome.png" height="20" width="20"></img>
                *
              </td>
              <td bgcolor="green"></td>
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
              <td>
                <img src="images/logos/apple.svg" height="20" width="20"></img>{" "}
                <img
                  src="images/logos/windows.png"
                  height="20"
                  width="20"
                ></img>{" "}
                <img src="images/logos/chrome.png" height="20" width="20"></img>
                *
              </td>
              <td bgcolor="green"></td>
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
              <td>
                <img src="images/logos/apple.svg" height="20" width="20"></img>{" "}
                <img
                  src="images/logos/windows.png"
                  height="20"
                  width="20"
                ></img>
              </td>
              <td bgcolor="red"></td>
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
        <div className="links">
          <ul>
            <li>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google
              </a>
            </li>
            <li>
              <a
                href="https://search.yahoo.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Yahoo
              </a>
            </li>
            <li>
              <a
                href="https://www.bing.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bing
              </a>
            </li>
            <li>
              <a
                href="https://duckduckgo.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                DuckDuckGo
              </a>
            </li>
            <li>
              <a
                href="https://search.brave.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Brave
              </a>
            </li>
          </ul>
        </div>

        <h5>
          NOTE: Popular search engines like Google, Bing and Yahoo are notorious
          for taking a left-wing bias and censoring search results.
        </h5>
      </Collapsible>
      <h2>IoT (Internet of Things)</h2>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Smart Speakers</button>
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
