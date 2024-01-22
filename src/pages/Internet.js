import Collapsible from "react-collapsible";
import "./internet.css";

export default function Internet() {
  return (
    <>
      <h1>Internet Tips</h1>
      <hr></hr>
      <div className="internet">
        <Collapsible
          trigger={<button className="collapsible-trigger">Browsers</button>}
        >
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
          <h5>
            NOTE: * indicates these browsers aren't natively supported on
            chromeOS but can be installed after enabling Linux apps by following{" "}
            <a
              href="https://www.howtogeek.com/777839/can-you-use-other-browsers-on-a-chromebook/#install-linux-browsers-on-a-chromebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              these
            </a>{" "}
            steps
          </h5>
        </Collapsible>
        <Collapsible
          trigger={
            <button className="collapsible-trigger">
              Installing Extensions
            </button>
          }
        >
          <ol>
            <li>
              Using your browser of choice, navigate to the Manage Extensions
              menu in your browser settings
            </li>
            <li>
              Find the link to the extension store in Manage Extensions menu
            </li>
            <li>Search for the desired extension in the store</li>
            <li>Click the Add to browser button</li>
          </ol>
          <h5>
            NOTE: Adding ad blocking extensions like uBlock Origin or AdBlock
            Plus is a great way to improve your security while browsing
          </h5>
        </Collapsible>
        <Collapsible
          trigger={
            <button className="collapsible-trigger">Search Engines</button>
          }
        >
          {/* <div className="links"> */}
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
          <h5>
            NOTE: Popular search engines like Google, Bing and Yahoo are
            notorious for taking a left-wing bias and censoring search results
          </h5>
          {/* </div> */}
        </Collapsible>
      </div>
    </>
  );
}
