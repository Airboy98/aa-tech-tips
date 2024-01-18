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
              <td>Safari</td>
              <td>
                <img src="images/logos/safari.png" height="20" width="20"></img>
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
              <td>Chrome</td>
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
              <td>Firefox</td>
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
              <td>Edge</td>
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
              <td>Opera</td>
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
              <td>Brave</td>
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
            <a href="https://www.howtogeek.com/777839/can-you-use-other-browsers-on-a-chromebook/#install-linux-browsers-on-a-chromebook">
              these
            </a>{" "}
            steps
          </h5>
        </Collapsible>
        <Collapsible
          trigger={
            <button className="collapsible-trigger">Browsing 101</button>
          }
        >
          Browsing the internet today is riskier than ever before. Use the below
          tactics to stay safe and keep your data secure!
          <ul>
            <li>
              <strong>Always</strong> be cautious when clicking on links in
              websites or emails. Phishing is a common cybersecurity attack that
              tries to prey on users thinking they're visiting a safe website
              that looks authentic and prompts for entering credentials but
              actually steals your data! Make sure to verify you recognize the
              URL of the website you're about to visit!
            </li>
            <li>
              Some websites have pesky ads and pop-ups that take focus when
              you're trying to navigate. Use an ad-block extension to mitigate
              these, including ads that play before videos.
            </li>
            <li>
              Create bookmarks for commonly visited websites. Toggle on your
              browser's bookmark bar for easy access to these. You can even
              group them by categories and put them in folders to stay
              organized!
            </li>
          </ul>
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
          <ul>
            <li>Google</li>
            <li>Yahoo</li>
            <li>Bing</li>
            <li>DuckDuckGo</li>
            <li>Brave</li>
          </ul>
          <h5>
            NOTE: Popular search engines like Google, Bing and Yahoo are
            notorious for censoring search results according to a left-wing bias
          </h5>
        </Collapsible>
      </div>
    </>
  );
}
