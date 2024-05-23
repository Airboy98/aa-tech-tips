import Collapsible from "react-collapsible";
import "./computer.css";

export default function Computer() {
  return (
    <>
      <h1>Computer Tips</h1>
      <hr></hr>
      <Collapsible
        trigger={<button className="collapsible-trigger">Photo Sharing</button>}
      >
        <ol>
          <li>
            Login to{" "}
            <a
              href="https://drive.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Drive
            </a>{" "}
            with your Google Account or create one if necessary
          </li>
          <li>
            Navigate to <b>My Drive</b> on the left side panel
          </li>
          <li>
            Open up Finder (macOS) or Windows Explorer (Windows) and find the
            photos you'd like to share
          </li>
          <li>
            Drag and drop the folder or picture files from Finder or Windows
            Explorer into <b>My Drive</b>
          </li>
          <li>
            Right click the folder or picture files and hover over <b>Share</b>{" "}
            in the context menu
          </li>
          <li>
            Select <b>Copy Link</b> to copy the picture URL to share or select{" "}
            <b>Share</b> to choose an account to share to
          </li>
        </ol>
        {/* </div> */}
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Malware Removal</button>
        }
      >
        {/* <div className="collapsible-content"> */}
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
          <li>
            Follow on screen prompts to install Malwarebytes (you may need to
            enable full access on MacOS or run as admin on Windows)
          </li>
          <li>Open Malwarebytes if it doesn't automatically open</li>
          <li>Click "Scan Now" button to scan your system for any malware</li>
          <li>Quarantine any detected files once the scan is complete</li>
        </ol>
        <h5>
          NOTE: Symptoms of malware (such as viruses and trojans) include random
          pop-ups, slow loading, phishing emails requesting to change password,
          compromised accounts, and fraulent transactions
        </h5>
        {/* </div> */}
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">
            Installing Apps (macOS)
          </button>
        }
      >
        <ol>
          <li>
            Navigate to the APP STORE that is logged in with your Apple ID
          </li>
          <li>Search for the desired app</li>
          <li>Select the app in the results and click Install</li>
        </ol>
        <br></br>
        OR
        <br></br>
        <ol>
          <li>Navigate to the website to find the desired app</li>
          <li>
            Once downloaded, click the .dmg installer on the desktop to install
          </li>
        </ol>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">
            Installing Programs (Windows)
          </button>
        }
      >
        <ol>
          <li>
            Navigate to the MICROSOFT STORE that is logged in with your
            Microsoft Account
          </li>
          <li>Search for the desired app</li>
          <li>Select the app in the results and click Install</li>
        </ol>
        <br></br>
        OR
        <br></br>
        <ol>
          <li>Navigate to the website to find the desired program</li>
          <li>Once downloaded, click the .exe installer to install</li>
        </ol>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">
            Useful Keyboard Shortcuts
          </button>
        }
      >
        <div className="tech">
          <table>
            <th>Action</th>
            <th>Windows</th>
            <th>macOS</th>
            <tr>
              <td>Select All</td>
              <td>ctrl+a</td>
              <td>cmd+a</td>
            </tr>
            <tr>
              <td>Copy Selection</td>
              <td>ctrl+c</td>
              <td>cmd+c</td>
            </tr>
            <tr>
              <td>Cut Selection</td>
              <td>ctrl+x</td>
              <td>cmd+x</td>
            </tr>
            <tr>
              <td>Paste Selection</td>
              <td>ctrl+v</td>
              <td>cmd+v</td>
            </tr>
            <tr>
              <td>Undo</td>
              <td>ctrl+z</td>
              <td>cmd+z</td>
            </tr>
            <tr>
              <td>Redo</td>
              <td>ctrl+y</td>
              <td>cmd+y / cmd+shift+z</td>
            </tr>
            <tr>
              <td>Screen Snip (crosshairs)</td>
              <td>windows+shift+s</td>
              <td>cmd+shift+4</td>
            </tr>
            <tr>
              <td>Full Screen Shot</td>
              <td>print screen</td>
              <td>cmd+shift+3</td>
            </tr>
          </table>
        </div>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Remote Desktop Access</button>
        }
      >
        <ol>
          <li>
            Install{" "}
            <a
              href="https://www.realvnc.com/en/connect/download/vnc/"
              target="_blank"
              rel="noopener noreferrer"
            >
              VNC Server
            </a>{" "}
            (Windows, macOS, and Linux compatible) on the computer you want to
            remotely access
          </li>
          <li>Create a RealVNC account and login to VNC Server</li>
          <li>
            Add the computer to your RealVNC address book as a cloud connection
          </li>
          <li>
            Install VNC Viewer{" ("}
            <a
              href="https://www.realvnc.com/en/connect/download/viewer/"
              target="_blank"
              rel="noopener noreferrer"
            >
              desktop client
            </a>{" "}
            or{" "}
            <a
              href="https://apps.apple.com/us/app/realvnc-viewer-remote-desktop/id352019548"
              target="_blank"
              rel="noopener noreferrer"
            >
              app
            </a>
            {") "}
            on the device you want to remotely connect from
          </li>
          <li>Login to your RealVNC account in VNC Viewer</li>
          <li>Open VNC Viewer and select the computer to remotely access</li>
        </ol>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Drive Formatting</button>
        }
      >
        <ol>
          <li>Connect the drive via USB to your laptop/desktop computer</li>
          <li>
            In macOS, open <b>Disk Utility</b> or Windows, open{" "}
            <b>Windows Explorer</b>
          </li>
          <li>Find the drive in the side panel on the left and select it</li>
          <li>Click the Format option and specify a format type</li>
          <li>
            NTFS (Windows), APFS (macOS), FAT32(4GB file size limit)/exFAT
            (cross platform)
          </li>
        </ol>
        <h5>
          NOTE: Use caution when formatting as ALL drive contents will be
          erased!
        </h5>
      </Collapsible>
      <Collapsible
        trigger={<button className="collapsible-trigger">Local Backup</button>}
      >
        <h4>
          It is highly advised to keep a backup of your files locally.
          Regardless of the platform, there are 2 main methods of backing up:
          full system backups and manual backups. For quick read/write speeds
          and durability, it is recommended to use an SSD as an external drive
          but HDDs are the more cost efficient option for mass storage.
        </h4>
        <ul className="tech">
          <li>
            <b>Use a utility program to keep full system backups.</b> macOS has
            a built-in utility called Time Machine that allows you to use an
            entire external drive as a Time Machine Backup and can periodically
            perform a backup automatically for you based on configuration. For
            Windows users, there's a{" "}
            <a
              href="https://www.pcworld.com/article/407021/best-windows-backup-software.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              number of options
            </a>{" "}
            available, most of them paid. The top free one is{" "}
            <a
              href="https://www.fbackup.com/fbackup.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              fbackup
            </a>
            .
          </li>
          <li>
            <b>
              Drag and drop files onto an external drive for manual backups.
            </b>{" "}
            Ensure that the drive is properly formatted for your OS using the
            above tip and connect it your computer via USB. Once detected, you
            can essentially treat the drive just like you would the built-in
            drive as it should show up similarly under drives connected. Try to
            stay organized and create concise and succinct folder names to hold
            any important files you'd like to keep as a backup. Copy (not cut)
            files from your computer's drive and paste them onto the external
            drive. Alternatively, you can drag and drop files easily if you have
            2 file explorer windows open.
          </li>
        </ul>
      </Collapsible>
      <Collapsible
        trigger={<button className="collapsible-trigger">Printers</button>}
      >
        <div className="printers">
          <table>
            <tr>
              <ul>
                <td>
                  <li>
                    <a
                      href="https://www.brother-usa.com/home/printers-fax"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="images/printers/brother.png"
                        alt="Brother"
                        width="150"
                        height="40"
                      />
                    </a>
                    <br></br>
                    <a
                      href="https://www.brother-usa.com/brother-support/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Support
                    </a>
                    <a
                      href="https://www.brother-usa.com/brother-support/driver-downloads"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Drivers
                    </a>
                  </li>
                </td>
                <td>
                  <li>
                    <a
                      href="https://www.hp.com/us-en/shop/cat/printers"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="images/printers/hp.png"
                        alt="HP"
                        width="150"
                        height="35"
                      />
                    </a>
                    <br></br>
                    <a
                      href="https://support.hp.com/us-en/printer"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Support
                    </a>
                    <a
                      href="https://support.hp.com/us-en/drivers"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Drivers
                    </a>
                  </li>
                </td>
              </ul>
            </tr>
            <tr>
              <ul>
                <td>
                  <li>
                    <a
                      href="https://epson.com/printers"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="images/printers/epson.png"
                        alt="Epson"
                        width="150"
                        height="40"
                      />
                    </a>
                    <br></br>
                    <a
                      href="https://epson.com/Support/Printers/sh/s"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Support
                    </a>
                    <a
                      href="https://download.ebz.epson.net/dsc/search/01/search/searchModule"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Drivers
                    </a>
                  </li>
                </td>
                <td>
                  <li>
                    <a
                      href="https://www.usa.canon.com/printers"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="images/printers/canon.png"
                        alt="Canon"
                        width="150"
                        height="40"
                      />
                    </a>
                    <br></br>
                    <a
                      href="https://www.usa.canon.com/support"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Support
                    </a>
                    <a
                      href="https://www.usa.canon.com/support/software-and-drivers"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Drivers
                    </a>
                  </li>
                </td>
              </ul>
            </tr>
          </table>
        </div>
        <h5>
          NOTE: Printer model number/names are usually found on a sticker on the
          back of the printer or printed on the front. Navigate to your brand's
          website above and input the model number/name
        </h5>
      </Collapsible>
    </>
  );
}
