import Collapsible from "react-collapsible";

export default function Internet() {
  return (
    <>
      <h1>Internet</h1>
      <hr></hr>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Internet Browsers</button>
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
              <td>Safari</td>
              <td>
                <img
                  src="./images/logos/safari.png"
                  height="20"
                  width="20"
                ></img>
              </td>
              <td>
                <img
                  src="./images/logos/apple.svg"
                  height="20"
                  width="20"
                ></img>{" "}
                <img
                  src="./images/logos/windows.png"
                  height="20"
                  width="20"
                ></img>
              </td>
              <td bgcolor="green"></td>
            </tr>
            <tr>
              <td>Google Chrome</td>
              <td>
                <img
                  src="./images/logos/chrome.png"
                  height="20"
                  width="20"
                ></img>
              </td>
              <td>
                <img
                  src="./images/logos/apple.svg"
                  height="20"
                  width="20"
                ></img>{" "}
                <img
                  src="./images/logos/windows.png"
                  height="20"
                  width="20"
                ></img>
              </td>
              <td bgcolor="green"></td>
            </tr>
            <tr>
              <td>Mozilla Firefox</td>
              <td>
                <img
                  src="./images/logos/firefox.png"
                  height="20"
                  width="20"
                ></img>
              </td>
              <td>
                <img
                  src="./images/logos/apple.svg"
                  height="20"
                  width="20"
                ></img>{" "}
                <img
                  src="./images/logos/windows.png"
                  height="20"
                  width="20"
                ></img>
              </td>
              <td bgcolor="green"></td>
            </tr>
            <tr>
              <td>Microsoft Edge</td>
              <td>
                <img src="./images/logos/edge.jpg" height="20" width="20"></img>
              </td>
              <td>
                <img
                  src="./images/logos/apple.svg"
                  height="20"
                  width="20"
                ></img>{" "}
                <img
                  src="./images/logos/windows.png"
                  height="20"
                  width="20"
                ></img>
              </td>
              <td bgcolor="green"></td>
            </tr>
            <tr>
              <td>Opera</td>
              <td>
                <img
                  src="./images/logos/opera.png"
                  height="20"
                  width="20"
                ></img>
              </td>
              <td>
                <img
                  src="./images/logos/apple.svg"
                  height="20"
                  width="20"
                ></img>{" "}
                <img
                  src="./images/logos/windows.png"
                  height="20"
                  width="20"
                ></img>
              </td>
              <td bgcolor="green"></td>
            </tr>
            <tr>
              <td>Brave</td>
              <td>
                <img
                  src="./images/logos/brave.png"
                  height="20"
                  width="20"
                ></img>
              </td>
              <td>
                <img
                  src="./images/logos/apple.svg"
                  height="20"
                  width="20"
                ></img>{" "}
                <img
                  src="./images/logos/windows.png"
                  height="20"
                  width="20"
                ></img>
              </td>
              <td bgcolor="green"></td>
            </tr>
            <tr>
              <td>Internet Explorer</td>
              <td>
                <img
                  src="./images/logos/explorer.png"
                  height="20"
                  width="20"
                ></img>
              </td>
              <td>
                <img
                  src="./images/logos/apple.svg"
                  height="20"
                  width="20"
                ></img>{" "}
                <img
                  src="./images/logos/windows.png"
                  height="20"
                  width="20"
                ></img>
              </td>
              <td bgcolor="red"></td>
            </tr>
          </table>
        </div>
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
          is a great way to improve your internet browsing experience
        </h5>
      </Collapsible>
    </>
  );
}
