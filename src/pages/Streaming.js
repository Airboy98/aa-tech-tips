import Collapsible from "react-collapsible";
import "./streaming.css";

export default function Streaming() {
  return (
    <>
      <div className="section-header">
        <h1>Streaming Tips</h1>
      </div>
      <h2>Software</h2>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Streaming Services</button>
        }
      >
        <div className="streaming">
          <table>
            <tr>
              <td>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/streaming/youtube.png"
                    alt="Youtube"
                    width="100"
                    height="50"
                  />
                </a>
              </td>
              <td>
                <a
                  href="https://tv.youtube.com/welcome/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/streaming/youtubetv.png"
                    alt="Youtube"
                    width="100"
                    height="50"
                  />
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://netflix.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/streaming/netflix.png"
                    alt="Netflix"
                    width="100"
                    height="30"
                  />
                </a>
              </td>
              <td>
                <a
                  href="https://www.amazon.com/Amazon-Video/b?ie=UTF8&node=2858778011"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/streaming/prime.png"
                    alt="Prime Video"
                    width="100"
                    height="50"
                  />
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://www.max.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/streaming/hbo.png"
                    alt="HBO Max"
                    width="100"
                    height="35"
                  />
                </a>
              </td>
              <td>
                <a
                  href="https://www.hulu.com/welcome"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/streaming/hulu.png"
                    alt="Hulu"
                    width="100"
                    height="50"
                  />
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://www.peacocktv.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/streaming/peacock.png"
                    alt="Peacock"
                    width="100"
                    height="30"
                  />
                </a>
              </td>
              <td>
                <a
                  href="https://www.disneyplus.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/streaming/disney.png"
                    alt="Disney+"
                    width="100"
                    height="50"
                  />
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://www.paramountplus.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/streaming/paramount.png"
                    alt="Paramount+"
                    width="100"
                    height="30"
                  />
                </a>
              </td>
              <td>
                <a
                  href="https://www.discoveryplus.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/streaming/discovery.png"
                    alt="Discovery+"
                    width="100"
                    height="50"
                  />
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://tv.apple.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/streaming/appletvplus.png"
                    alt="Apple TV+"
                    width="100"
                    height="40"
                  />
                </a>
              </td>
              <td>
                <a
                  href="https://plus.espn.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/streaming/espnplus.png"
                    alt="ESPN+"
                    width="100"
                    height="50"
                  />
                </a>
              </td>
            </tr>
          </table>
        </div>
      </Collapsible>
      <h2>Hardware</h2>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Streaming Devices</button>
        }
      >
        <div className="television">
          <table>
            <tr>
              <td>
                <a
                  href="https://www.amazon.com/gp/help/customer/display.html?nodeId=GHH5TUHA7677G4HJ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/devices/amazon-fire-tv-stick.png"
                    alt="Amazon Fire TV Stick"
                    width="100"
                    height="50"
                  />
                </a>
              </td>
              <td>
                <a
                  href="https://support.roku.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/devices/roku.png"
                    alt="Roku"
                    width="100"
                    height="50"
                  />
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://support.google.com/chromecast/chromecast/?hl=en&sjid=890919833032057258-NC#topic=3058948"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/devices/chromecast1.png"
                    alt="Chromecast"
                    width="100"
                    height="50"
                  />
                </a>
              </td>
              <td>
                <a
                  href="https://support.apple.com/apple-tv"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/devices/appletv.png"
                    alt="Apple TV"
                    width="100"
                    height="50"
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
