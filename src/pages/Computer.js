// import from ./components/Button
import ExampleAccordion from "../components/ExampleAccordion";
import "./styles.css";

export default function Computer() {
  return (
    <div className="computer">
      <h1>Computer Troubleshooting</h1>
      <h2>Malware Removal</h2>
      <div className="instructions">
        <ol>
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
          <li>Follow on screen prompts to install Malwarebytes</li>
          <li>Open Malwarebytes if it doesn't automatically open</li>
          <li>Click "Scan Now" button to scan your system for any malware</li>
          <li>Quarantine any detected files once the scan is complete</li>
        </ol>
        <ExampleAccordion />
      </div>
      <h2>Installing Apps/Programs</h2>
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
