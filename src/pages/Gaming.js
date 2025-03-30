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
        trigger={<button className="collapsible-trigger">Consoles</button>}
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
                  </a>
                  <br></br>
                  <img
                    src="images/consoles/PS5console.jpg"
                    alt="PS5 console"
                    width="200"
                    height="200"
                  />

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
                  </a>
                  <br></br>
                  <img
                    src="images/consoles/Xboxconsole.jpg"
                    alt="Xbox Series X | S console"
                    width="200"
                    height="200"
                  />

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
              <tr>
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
                  </a>
                  <br></br>
                  <img
                    src="images/consoles/Switchconsole.jpg"
                    alt="Nintendo Switch console"
                    width="200"
                    height="200"
                  />

                  <h4>9th generation Nintendo console</h4>
                  <h4>Released 03.03.2017</h4>
                  <h4>Proprietary game cartridge slot</h4>
                  <h4>4GB LPDDR4 RAM</h4>
                  <h4>32GB eMMC</h4>
                  <h4>microSD card slot</h4>
                  <h4>Supports 1080p/60 Hz (docked)</h4>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <h5>
          NOTE: TV model number/names are usually found on a sticker on the back
          of the TV. Navigate to your brand's website above and input the model
          number/name.
        </h5> */}
      </Collapsible>
      {/* <Collapsible
        trigger={
          <button className="collapsible-trigger">Graphics Cards</button>
        }
      ></Collapsible> */}
      {/* <Collapsible
        trigger={<button className="collapsible-trigger">VR Headsets</button>}
      ></Collapsible> */}
    </>
  );
}
