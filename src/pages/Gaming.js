import Collapsible from "react-collapsible";
import "./television.css";
import GameSearch from "../components/GameSearch";
import { useState, useEffect } from "react";

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
      ></Collapsible>
      <Collapsible
        trigger={<button className="collapsible-trigger">Upcoming</button>}
      ></Collapsible>
      <h2>Hardware</h2>
      <Collapsible
        trigger={<button className="collapsible-trigger">Consoles</button>}
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
                    src="images/televisions/samsung.png"
                    alt="Samsung"
                    width="100"
                    height="15"
                  />
                </a>
              </td>
              <td>
                <a
                  href="https://www.lg.com/us/support"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/televisions/LG.png"
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
                  href="https://www.sony.com/electronics/support/televisions-projectors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/televisions/sony.png"
                    alt="Sony"
                    width="100"
                    height="50"
                  />
                </a>
              </td>
              <td>
                <a
                  href="https://www.toshibatv-usa.com/support"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/televisions/toshiba.png"
                    alt="Toshiba"
                    width="100"
                    height="30"
                  />
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://www.hisense-usa.com/support"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/televisions/hisense.png"
                    alt="Hisense"
                    width="100"
                    height="50"
                  />
                </a>
              </td>
              <td>
                <a
                  href="https://support.tcl.com/us"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/televisions/TCL.png"
                    alt="TCL"
                    width="100"
                    height="50"
                  />
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://www.sharptvusa.com/support"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/televisions/sharp.png"
                    alt="Sharp"
                    width="100"
                    height="50"
                  />
                </a>
              </td>
              <td>
                <a
                  href="https://support.vizio.com/s/?language=en_US"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/televisions/vizio.png"
                    alt="Vizio"
                    width="100"
                    height="30"
                  />
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://www.usa.philips.com/c-m-so/tv"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/televisions/philips.png"
                    alt="Philips"
                    width="100"
                    height="20"
                  />
                </a>
              </td>
              <td>
                <a
                  href="https://onntvsupport.com/roku-tv"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/televisions/onn.png"
                    alt="Onn."
                    width="100"
                    height="50"
                  />
                </a>
              </td>
            </tr>
          </table>
        </div>
        <h5>
          NOTE: TV model number/names are usually found on a sticker on the back
          of the TV. Navigate to your brand's website above and input the model
          number/name.
        </h5>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Graphics Cards</button>
        }
      ></Collapsible>
      <Collapsible
        trigger={<button className="collapsible-trigger">VR Headsets</button>}
      ></Collapsible> */}
    </>
  );
}
