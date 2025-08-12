import Collapsible from "react-collapsible";
import "./television.css";
import GameSearch from "../components/GameSearch";
import { useState, useEffect } from "react";
import UpcomingGames from "../components/UpcomingGames";
import NewReleases from "../components/NewReleases";

export default function Gaming() {
  const [searchGame, setSearchGame] = useState("");

  const handleSearchGame = (e) => {
    e.preventDefault();
    const game = e.target.elements.q.value;
    setSearchGame(game);
  };

  return (
    <>
      <div className="section-header">
        <h1>Gaming</h1>
      </div>
      <h2>Software</h2>
      <Collapsible
        trigger={<button className="collapsible-trigger">Game Search</button>}
      >
        <div className="internet">
          <table>
            <tbody>
              <tr>
                <td>
                  <form onSubmit={handleSearchGame}>
                    <div className="search">
                      <input
                        type="search"
                        name="q"
                        placeholder="Enter game name..."
                      />
                    </div>
                    <button>
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
        <GameSearch searchQuery={searchGame} />
      </Collapsible>
      {/* <Collapsible
        trigger={<button className="collapsible-trigger">New Releases</button>}
      ></Collapsible> */}
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
        <div className="television">
          <table>
            <tbody>
              <tr>
                <td>
                  <h1>Sony</h1>
                  <a
                    href="https://www.playstation.com/en-us/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="images/consoles/PS5.png"
                      alt="PS5"
                      width="200"
                      height="100"
                    />
                    <br></br>
                    <img
                      src="images/consoles/PS5console.jpg"
                      alt="PS5 console"
                      width="200"
                      height="200"
                    />
                  </a>

                  <h4>5th generation PlayStation console</h4>
                  <h4>Released 11.12.2020</h4>
                  <h4>Optional 4K Ultra Blu-ray drive</h4>
                  <h4>16GB GDDR6 RAM</h4>
                  <h4>1TB M.2 SSD</h4>
                  <h4>Supports 8K/60 Hz and 4K/120 Hz</h4>
                </td>
              </tr>
              <tr>
                <td>
                  <h1>Microsoft</h1>
                  <a
                    href="https://www.xbox.com/en-US/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="images/consoles/XboxSeries.png"
                      alt="Xbox Series X | S"
                      width="200"
                      height="100"
                    />
                    <br></br>
                    <img
                      src="images/consoles/Xboxconsole2.png"
                      alt="Xbox Series X | S console"
                      width="200"
                      height="200"
                    />
                  </a>

                  <h4>4th generation Xbox console</h4>
                  <h4>Released 11.10.2020</h4>
                  <h4>4K Ultra Blu-ray drive (XSX only)</h4>
                  <h4>16GB GDDR6 RAM (XSX)</h4>
                  <h4>10GB GDDR6 RAM (XSS)</h4>
                  <h4>1TB M.2 SSD</h4>
                  <h4>Supports 8K/60 Hz and 4K/120 Hz (XSX)</h4>
                  <h4>Supports 2K/120 Hz (XSS)</h4>
                </td>
              </tr>
              {/* <tr>
                <td>
                  <h1>Nintendo</h1>
                  <a
                    href="https://www.nintendo.com/switch/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="images/consoles/NintendoSwitch.png"
                      alt="Nintendo Switch"
                      width="200"
                      height="100"
                    />
                    <br></br>
                    <img
                      src="images/consoles/Switchconsole.jpg"
                      alt="Nintendo Switch console"
                      width="200"
                      height="200"
                    />
                  </a>

                  <h4>1st generation Switch console</h4>
                  <h4>Released 03.03.2017</h4>
                  <h4>Proprietary game cartridge slot</h4>
                  <h4>4GB LPDDR4 RAM</h4>
                  <h4>32GB eMMC</h4>
                  <h4>microSD card slot</h4>
                  <h4>Supports 1080p/60 Hz (docked)</h4>
                </td>
              </tr> */}
              <tr>
                <td>
                  <h1>Nintendo</h1>
                  <a
                    href="https://www.nintendo.com/us/gaming-systems/switch-2/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="images/consoles/NintendoSwitch2.png"
                      alt="Nintendo Switch 2"
                      width="100"
                      height="100"
                    />
                    <br></br>
                    <img
                      src="images/consoles/Switch2console.jpg"
                      alt="Nintendo Switch 2 console"
                      width="200"
                      height="133"
                    />
                  </a>

                  <h4>2nd generation Switch console</h4>
                  <h4>Released 06.05.2025</h4>
                  <h4>Switch 1 compatible game cartridge slot</h4>
                  <h4>12GB LPDDR5X RAM</h4>
                  <h4>256GB UFS</h4>
                  <h4>microSD Express card slot</h4>
                  <h4>Supports 4K/60 Hz and 2K/120 Hz (docked)</h4>
                  <h4>Supports 1080p/120 Hz (handheld)</h4>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h5>
          NOTE: It is quite common for consoles and games to be heavily
          discounted during Black Friday, Cyber Monday, and other holidays.
        </h5>
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
          <table>
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
