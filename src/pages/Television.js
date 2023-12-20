import ExampleAccordion from "../components/ExampleAccordion";
import "./styles.css";
// import samsung from "./samsung.png";

export default function Television() {
  return (
    <>
      <h1>Television Troubleshooting</h1>
      <h2>Streaming Devices</h2>
      <h3>Amazon Fire Stick</h3>
      <h3>Roku</h3>
      <h3>Chromecast</h3>
      <h3>Apple TV</h3>
      <div>
        Common Brands
        <ul>
          <li>
            <img
              src="./images/samsung.png"
              alt="Samsung"
              width="100"
              height="50"
            />
          </li>
          <li>
            <img src="./images/LG.png" alt="LG" width="100" height="50" />
          </li>
          <li>
            <img src="./images/sony.png" alt="Sony" width="100" height="50" />
          </li>
          <li>
            <img
              src="./images/toshiba.png"
              alt="Toshiba"
              width="100"
              height="50"
            />
          </li>
          <li>
            <img
              src="./images/hisense.png"
              alt="HiSense"
              width="100"
              height="50"
            />
          </li>
          <li>
            <img src="./images/TCL.png" alt="TCL" width="100" height="50" />
          </li>
        </ul>
        <ExampleAccordion />
      </div>
    </>
  );
}
