import Collapsible from "react-collapsible";
import "./television.css";
import GameSearch from "../components/GameSearch";
import UpcomingGames from "../components/UpcomingGames";
import NewReleases from "../components/NewReleases";
import DeveloperSearch from "../components/DeveloperSearch";

export default function Gaming() {
  return (
    <>
      <div className="section-header">
        <h1>Gaming</h1>
      </div>
      <h2>Software</h2>
      <Collapsible
        trigger={<button className="collapsible-trigger">Game Search</button>}
      >
        <GameSearch />
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Developer Search</button>
        }
      >
        <DeveloperSearch />
      </Collapsible>
      <Collapsible
        trigger={<button className="collapsible-trigger">New Releases</button>}
      >
        <br></br>
        <NewReleases />
      </Collapsible>
      <Collapsible
        trigger={<button className="collapsible-trigger">Upcoming</button>}
      >
        <br></br>
        <UpcomingGames />
      </Collapsible>
      <h2>Hardware</h2>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Current Consoles</button>
        }
      >
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>Sony</u>
            </h3>
            <a
              className="console-tile"
              href="https://www.playstation.com/en-us/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="images/consoles/PS5.png" alt="PS5" width="200" height="100" />
              <img
                src="images/consoles/PS5console.jpg"
                alt="PS5 console"
                width="200"
                height="200"
              />
            </a>
            <h4>5th generation PlayStation console</h4>
            <ul>
              <li>Released November 12, 2020</li>
              <li>Optional 4K Ultra Blu-ray drive</li>
              <li>16GB GDDR6 RAM</li>
              <li>1TB SSD (2TB on PS5 Pro) with an M.2 expansion slot</li>
              <li>Supports 8K/60 Hz and 4K/120 Hz</li>
              <li>Plays nearly all PS4 games</li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>Microsoft</u>
            </h3>
            <a
              className="console-tile"
              href="https://www.xbox.com/en-US/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="images/consoles/XboxSeries.png" alt="Xbox Series X | S" width="200" height="100" />
              <img
                src="images/consoles/Xboxconsole2.png"
                alt="Xbox Series X | S console"
                width="200"
                height="200"
              />
            </a>
            <h4>4th generation Xbox console</h4>
            <ul>
              <li>Released November 10, 2020</li>
              <li>4K Ultra Blu-ray drive (XSX disc edition only)</li>
              <li>16GB GDDR6 RAM (XSX)</li>
              <li>10GB GDDR6 RAM (XSS)</li>
              <li>1TB SSD (XSX), 512GB or 1TB SSD (XSS)</li>
              <li>Supports 8K/60 Hz and 4K/120 Hz (XSX)</li>
              <li>Supports 2K/120 Hz (XSS)</li>
              <li>
                Plays nearly all Xbox One games and many Xbox 360 and original
                Xbox games
              </li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>Nintendo</u>
            </h3>
            <a
              className="console-tile"
              href="https://www.nintendo.com/us/gaming-systems/switch-2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="images/consoles/NintendoSwitch2.png" alt="Nintendo Switch 2" width="100" height="100" />
              <img
                src="images/consoles/Switch2console.jpg"
                alt="Nintendo Switch 2 console"
                width="200"
                height="133"
              />
            </a>
            <h4>2nd generation Switch console</h4>
            <ul>
              <li>Released June 5, 2025</li>
              <li>12GB LPDDR5X RAM</li>
              <li>256GB UFS</li>
              <li>microSD Express card slot</li>
              <li>Supports 4K/60 Hz and 2K/120 Hz (docked)</li>
              <li>Supports 1080p/120 Hz (handheld)</li>
              <li>Plays most Switch 1 games, including physical cartridges</li>
            </ul>
          </div>
        </div>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Computer vs Console</button>
        }
      >
        <h4>
          As console generations have progressed, the clear difference between
          consoles and computers has blurred. Modern day consoles are
          essentially powerful, custom-built, locked-down computers. Desktop
          computers are far more upgradable than consoles but come with a higher
          price tag and a few tradeoffs.
        </h4>
        <div className="tech">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Computer</th>
                <th>Console</th>
                <th>Explanation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Convenience</td>
                <td></td>
                <td>
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>
                </td>
                <td>Consoles are more portable than desktop computers</td>
              </tr>
              <tr>
                <td>Cost</td>
                <td></td>
                <td>
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>
                </td>
                <td>Consoles have a lower financial barrier of entry</td>
              </tr>
              <tr>
                <td>Graphics</td>
                <td>
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>
                </td>
                <td></td>
                <td>Desktop graphics cards can be upgraded regularly</td>
              </tr>
              <tr>
                <td>Modularity</td>
                <td>
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>
                </td>
                <td></td>
                <td>All desktop components can be upgraded</td>
              </tr>
              <tr>
                <td>Speed</td>
                <td>
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>
                </td>
                <td></td>
                <td>Desktop processors can be upgraded regularly</td>
              </tr>
              <tr>
                <td>Stability</td>
                <td></td>
                <td>
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>
                </td>
                <td>Consoles have dedicated stable operating systems</td>
              </tr>
              <tr>
                <td>Versatility</td>
                <td>
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>
                </td>
                <td></td>
                <td>Desktops can be used for a multitude of purposes</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h5>
          NOTE: Custom-built computers vary wildly in price and performance. Use{" "}
          <a
            href="https://pcpartpicker.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            pcpartpicker.com
          </a>{" "}
          to maximize compatibility and build a computer that fits your needs
          and budget.
        </h5>
      </Collapsible>
      {/* <Collapsible
        trigger={
          <button className="collapsible-trigger">Graphics Cards</button>
        }
      >
        <h3>NVIDIA Cards</h3>
        <h4>GeForce RTX 50 Series</h4>
        <div className="television">
          <table>
            <tr>
              <td>
                <a
                  href="https://protonvpn.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/vpns/proton.png"
                    alt="ProtonVPN"
                    width="100"
                    height="25"
                  />
                </a>
              </td>
              <td>
                <a
                  href="https://nordvpn.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/vpns/nord.png"
                    alt="NordVPN"
                    width="100"
                    height="25"
                  />
                </a>
              </td>
              <td>
                <a
                  href="https://www.expressvpn.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/vpns/express.png"
                    alt="ExpressVPN"
                    width="100"
                    height="50"
                  />
                </a>
              </td>
            </tr>
          </table>
        </div>
        <h4>GeForce RTX 40 Series</h4>
        <h3>AMD Cards</h3>
      </Collapsible> */}
      {/* <Collapsible
        trigger={<button className="collapsible-trigger">VR Headsets</button>}
      ></Collapsible> */}
    </>
  );
}
