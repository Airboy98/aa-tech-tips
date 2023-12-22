// import from ./components/Button
import Collapsible from "react-collapsible";
import "./styles.css";

export default function Computer() {
  return (
    <div className="computer">
      <h1>Computer Troubleshooting</h1>
      <Collapsible
        trigger={<h2 className="collapsible-trigger">Malware Removal</h2>}
      >
        {/* <div className="collapsible-content"> */}
        <ul>
          <li>
            Click{" "}
            <a href="https://www.malwarebytes.com/mwb-download/thankyou">
              here
            </a>{" "}
            to download Malwarebytes (automatically detects Windows or Mac)
          </li>
          <li>
            Once downloaded (check Downloads folder), double click the MBSetup
            file (.exe for Windows and .dmg for Mac)
          </li>
          <li>
            Follow on screen prompts to install Malwarebytes (you may need to
            enable full access on MacOS or run as admin on Windows)
          </li>
          <li>Open Malwarebytes if it doesn't automatically open</li>
          <li>Click "Scan Now" button to scan your system for any malware</li>
          <li>Quarantine any detected files once the scan is complete</li>
        </ul>
        {/* </div> */}
      </Collapsible>
      <Collapsible
        trigger={
          <h2 className="collapsible-trigger">Installing Apps/Programs</h2>
        }
      >
        <ul>
          <li>test</li>
        </ul>
      </Collapsible>
      <h2>Printers</h2>
      <h2>External Drives</h2>
      <h2>Thumb/Flash Drives</h2>
      <ul>
        <li>test</li>
        <li>test</li>
        <li>test</li>
      </ul>
    </div>
  );
}
