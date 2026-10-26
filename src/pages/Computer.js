import { useState } from "react";
import Collapsible from "react-collapsible";
import "./computer.css";
import { Card } from "primereact/card";
export default function Computer() {
  const [zoomedImage, setZoomedImage] = useState(null);

  return (
    <>
      {zoomedImage && (
        <div className="lightbox" onClick={() => setZoomedImage(null)}>
          <img src={zoomedImage.src} alt={zoomedImage.alt} />
        </div>
      )}
      <div className="section-header">
        <h1>
          {/* <img
            src="images/devices/laptop.png"
            alt="Amazon"
            width="70"
            height="60"
            style={{ marginRight: "25px" }}
          /> */}
          Computer
          {/* <img
            src="images/devices/keyboard.png"
            alt="Amazon"
            width="90"
            height="40"
            style={{ marginLeft: "25px" }}
          /> */}
        </h1>
      </div>
      <h2>Software</h2>

      <Collapsible
        trigger={
          <button className="collapsible-trigger">Malware Removal</button>
        }
      >
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>Signs of Malware</u>
            </h3>
            <h4>Symptoms of viruses and trojans</h4>
            <ul>
              <li>Random pop-ups</li>
              <li>Slow loading, freezing or crashing</li>
              <li>
                Fake virus warnings asking you to call a number or pay to fix
                your computer
              </li>
              <li>
                Your browser's homepage or search engine changed on its own
              </li>
              <li>New toolbars, extensions or programs you didn't install</li>
              <li>Your antivirus turned off without your doing</li>
              <li>Phishing emails requesting to change your password</li>
              <li>Contacts receiving mysterious emails from</li>
              <li>Compromised accounts</li>
              <li>Fraudulent transactions</li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>Malwarebytes</u>
            </h3>
            <h4>Comprehensive malware scanner tool</h4>
            <ol>
              <li>
                Click{" "}
                <a
                  href="https://www.malwarebytes.com/mwb-download/thankyou"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>{" "}
                to download Malwarebytes (automatically detects Windows or Mac)
              </li>
              <li>
                Once downloaded (check Downloads folder), double click the
                MBSetup file (.exe for Windows and .dmg for Mac)
              </li>
              <li>
                Follow on screen prompts to install Malwarebytes (you may need
                to enable full access on macOS or run as admin on Windows)
              </li>
              <li>Open Malwarebytes if it doesn't automatically open</li>
              <li>Click the "Scan Now" button to scan for any malware</li>
              <li>Quarantine any detected files once the scan is complete</li>
            </ol>
          </div>
        </div>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">
            Installing Apps on a Mac
          </button>
        }
      >
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>App Store</u>
            </h3>
            <h4>The safest place to get apps</h4>
            <ol>
              <li>Open the App Store, signed in with your Apple ID</li>
              <li>Search for the desired app</li>
              <li>
                Select the app in the results and click Get (or the price)
              </li>
            </ol>
          </div>
          <div className="package-card">
            <h3>
              <u>From a Website</u>
            </h3>
            <h4>For apps not in the App Store</h4>
            <ol>
              <li>Navigate to the app's official website and download it</li>
              <li>Open the .dmg installer from your Downloads folder</li>
              <li>Drag the app into your Applications folder</li>
            </ol>
          </div>
        </div>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">
            Installing Programs on a PC
          </button>
        }
      >
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>Microsoft Store</u>
            </h3>
            <h4>The safest place to get programs</h4>
            <ol>
              <li>
                Open the Microsoft Store, signed in with your Microsoft account
              </li>
              <li>Search for the desired program</li>
              <li>
                Select the program in the results and click Get (or the price)
              </li>
            </ol>
          </div>
          <div className="package-card">
            <h3>
              <u>From a Website</u>
            </h3>
            <h4>For programs not in the Microsoft Store</h4>
            <ol>
              <li>
                Navigate to the program's official website and download it
              </li>
              <li>Open the .exe installer from your Downloads folder</li>
              <li>Click "Yes" if Windows asks to allow changes</li>
              <li>Follow the on screen prompts to install</li>
            </ol>
          </div>
        </div>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">
            Useful Keyboard Shortcuts
          </button>
        }
      >
        <div className="tech">
          <table className="shortcut-table">
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
              <td>Print</td>
              <td>ctrl+p</td>
              <td>cmd+p</td>
            </tr>
            <tr>
              <td>Rename file</td>
              <td>F2</td>
              <td>Enter</td>
            </tr>
            <tr>
              <td>Reload page</td>
              <td>F5</td>
              <td>cmd+r</td>
            </tr>
            <tr>
              <td>Reset GPU</td>
              <td>win+ctrl+shift+b</td>
              <td>N/A</td>
            </tr>
            <tr>
              <td>Task Monitor</td>
              <td>ctrl+shift+esc</td>
              <td>cmd+option+esc</td>
            </tr>
            <tr>
              <td>Screen Snip</td>
              <td>win+shift+s</td>
              <td>cmd+shift+4</td>
            </tr>
            <tr>
              <td>Screen Shot</td>
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
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>VNC Server</u>
            </h3>
            <h4>On the computer you want to remotely access</h4>
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
                (Windows, macOS, and Linux compatible)
              </li>
              <li>Create a RealVNC account and login to VNC Server</li>
              <li>
                Add the computer to your RealVNC address book as a cloud
                connection
              </li>
            </ol>
          </div>
          <div className="package-card">
            <h3>
              <u>VNC Viewer</u>
            </h3>
            <h4>On the device you want to remotely connect from</h4>
            <ol>
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
                {")"}
              </li>
              <li>Login to your RealVNC account in VNC Viewer</li>
              <li>Select the computer to remotely access</li>
            </ol>
          </div>
        </div>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Common File Systems</button>
        }
      >
        <h4>
          A file system is how an OS organizes its files. Use this table to pick
          one that works with your computers.
        </h4>
        <div className="tech">
          <table className="filesystem-table">
            <th>File System</th>
            <th>Windows</th>
            <th>macOS</th>
            <th>Linux</th>
            <tr>
              <td>FAT32</td>
              <td>
                <span className="material-symbols-outlined">check_circle</span>
              </td>
              <td>
                <span className="material-symbols-outlined">check_circle</span>
              </td>
              <td>
                <span className="material-symbols-outlined">check_circle</span>
              </td>
            </tr>
            <tr>
              <td>exFAT</td>
              <td>
                <span className="material-symbols-outlined">check_circle</span>
              </td>
              <td>
                <span className="material-symbols-outlined">check_circle</span>
              </td>
              <td>
                <span className="material-symbols-outlined">check_circle</span>
              </td>
            </tr>
            <tr>
              <td>NTFS</td>
              <td style={{ color: "green" }}>
                <span className="material-symbols-outlined">check_circle</span>
              </td>
              <td>
                <span className="material-symbols-outlined">visibility</span>
              </td>
              <td>
                <span className="material-symbols-outlined">check_circle</span>
              </td>
            </tr>
            <tr>
              <td>HFS+</td>
              <td />
              <td>
                <span className="material-symbols-outlined">check_circle</span>
              </td>
              <td>
                <span className="material-symbols-outlined">visibility</span>
              </td>
            </tr>
            <tr>
              <td>APFS</td>
              <td />
              <td style={{ color: "green" }}>
                <span className="material-symbols-outlined">check_circle</span>
              </td>
              <td />
            </tr>
            <tr>
              <td>ext4</td>
              <td></td>
              <td />
              <td style={{ color: "green" }}>
                <span className="material-symbols-outlined">check_circle</span>
              </td>
            </tr>
            <tfoot>
              <tr>
                <td colSpan={4}>
                  <div className="fs-legend">
                    <span>
                      <span
                        className="material-symbols-outlined"
                        style={{ color: "green" }}
                      >
                        check_circle
                      </span>
                      Used to install the OS
                    </span>
                    <span>
                      <span className="material-symbols-outlined">
                        check_circle
                      </span>
                      Open and save files
                    </span>
                    <span>
                      <span className="material-symbols-outlined">
                        visibility
                      </span>
                      Open files only
                    </span>
                    <span>Blank: Not supported</span>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <h5>NOTE: FAT32 has a maximum file size limit of 4GB.</h5>
      </Collapsible>
      <Collapsible
        trigger={<button className="collapsible-trigger">Photo Sharing</button>}
      >
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>Upload</u>
            </h3>
            <h4>Add your photos to Google Drive</h4>
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
                Open up Finder (macOS) or File Explorer (Windows) and find the
                photos you'd like to share
              </li>
              <li>
                Drag and drop the folder or picture files into <b>My Drive</b>
              </li>
            </ol>
          </div>
          <div className="package-card">
            <h3>
              <u>Share</u>
            </h3>
            <h4>Send them to family and friends</h4>
            <ol>
              <li>
                Right click the folder or picture files, and select <b>Share</b>{" "}
                in the context menu
              </li>
              <li>
                To share with specific people, type their email and click{" "}
                <b>Send</b>
              </li>
              <li>
                To share with anyone, change <b>General access</b> to{" "}
                <b>Anyone with the link</b>
              </li>
              <li>
                Click <b>Copy link</b> and paste it into a text or email
              </li>
            </ol>
          </div>
        </div>
      </Collapsible>
      <h2>Hardware</h2>
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
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>Print With a Cable</u>
            </h3>
            <h4>The most reliable connection</h4>
            <ul>
              <li>
                Plug the printer into your computer with a USB Type-B cable (see
                Common Inputs below)
              </li>
              <li>Depending on your computer, this may be enough to print</li>
              <li>
                Otherwise, download drivers using the links above for your
                printer's brand
              </li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>Print Wirelessly</u>
            </h3>
            <h4>The most convenient connection</h4>
            <ul>
              <li>
                Connect the printer to your home Wi-Fi using the printer's
                screen or buttons
              </li>
              <li>You may need to type in your Wi-Fi password manually</li>
              <li>
                Download the drivers and printer utilities for your model using
                the links above
              </li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>Wi-Fi Direct</u>
            </h3>
            <h4>Broadcast your printer as a network</h4>
            <ol>
              <li>Enable Wi-Fi Direct on the printer</li>
              <li>
                On your computer or phone, find the printer's name in the list
                of available Wi-Fi networks and connect to it
              </li>
              <li>Print as usual</li>
            </ol>
          </div>
          <div className="package-card">
            <h3>
              <u>Find Your Model</u>
            </h3>
            <h4>Needed for drivers and support</h4>
            <ul>
              <li>
                Look for a sticker on the back of the printer or the name
                printed on the front
              </li>
              <li>Enter the model number on your brand's website above</li>
              <li>
                Some printer models also require a password listed on the back
              </li>
            </ul>
          </div>
        </div>
      </Collapsible>
      <Collapsible
        trigger={<button className="collapsible-trigger">Monitors</button>}
      >
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>Extend Your Desktop</u>
            </h3>
            <h4>Use more than one screen</h4>
            <ul>
              <li>Both Windows and macOS support a multi-monitor setup</li>
              <li>
                Connect your monitor to an extra display port on your computer
                (see Common Inputs below)
              </li>
              <li>
                Arrange your monitors in Display settings on Windows or System
                Settings on macOS
              </li>
            </ul>
            <div className="screenshot-row">
              <figure>
                <img
                  src="images/monitors/windows.webp"
                  alt="Windows display settings"
                  className="zoomable"
                  onClick={() =>
                    setZoomedImage({
                      src: "images/monitors/windows.webp",
                      alt: "Windows display settings",
                    })
                  }
                />
                <figcaption>Windows 11</figcaption>
              </figure>
              <figure>
                <img
                  src="images/monitors/macOS.jpg"
                  alt="macOS display settings"
                  className="zoomable"
                  onClick={() =>
                    setZoomedImage({
                      src: "images/monitors/macOS.jpg",
                      alt: "macOS display settings",
                    })
                  }
                />
                <figcaption>macOS</figcaption>
              </figure>
            </div>
          </div>
          <div className="package-card">
            <h3>
              <u>Refresh Your Monitor</u>
            </h3>
            <h4>Smoother videos and games</h4>
            <ul>
              <li>Most monitors refresh at least 60 times per second (60Hz)</li>
              <li>The higher the refresh rate, the smoother the experience</li>
              <li>
                Change it in Advanced display on Windows or System Settings on
                macOS
              </li>
              <li>
                Some monitors also need it changed in their on-screen menu using
                the physical buttons
              </li>
            </ul>
            <div className="screenshot-row">
              <figure>
                <img
                  src="images/monitors/windows2.webp"
                  alt="Windows display settings"
                  className="zoomable"
                  onClick={() =>
                    setZoomedImage({
                      src: "images/monitors/windows2.webp",
                      alt: "Windows display settings",
                    })
                  }
                />
                <figcaption>Windows 11</figcaption>
              </figure>
              <figure>
                <img
                  src="images/monitors/macOS2.jpg"
                  alt="macOS display settings"
                  className="zoomable"
                  onClick={() =>
                    setZoomedImage({
                      src: "images/monitors/macOS2.jpg",
                      alt: "macOS display settings",
                    })
                  }
                />
                <figcaption>macOS</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </Collapsible>
      <Collapsible
        trigger={<button className="collapsible-trigger">Common Inputs</button>}
      >
        <h4>
          Use this table to find the right port for your device. Many newer
          laptops only have USB Type-C ports, so you may need a dock or adapter
          for the others.
        </h4>
        <div className="television">
          <table className="inputs-table">
            <tr>
              <th>Input</th>
              <th>Example Devices</th>
            </tr>
            <tr>
              <td>
                USB Type-A<br></br>
                <img
                  src="images/ports/usb-type-a.png"
                  alt="USB Type-A"
                  width="100"
                  height="50"
                />
              </td>
              <td>
                Keyboard,<br></br>Mouse
              </td>
            </tr>
            <tr>
              <td>
                USB Type-B<br></br>
                <img
                  src="images/ports/usb-type-b.png"
                  alt="USB Type-B"
                  width="100"
                  height="75"
                />
              </td>
              <td>Printer</td>
            </tr>
            <tr>
              <td>
                USB Type-C<br></br>
                <img
                  src="images/ports/usb-type-c.png"
                  alt="USB Type-C"
                  width="100"
                  height="50"
                />
              </td>
              <td>
                Dock,<br></br>Flash drive,<br></br>Phone cable
              </td>
            </tr>
            <tr>
              <td>
                HDMI<br></br>
                <img
                  src="images/ports/hdmi.png"
                  alt="HDMI"
                  width="125"
                  height="50"
                />
              </td>
              <td>Monitor</td>
            </tr>
            <tr>
              <td>
                DisplayPort<br></br>
                <img
                  src="images/ports/dp.png"
                  alt="DisplayPort"
                  width="125"
                  height="50"
                />
              </td>
              <td>Monitor</td>
            </tr>
            <tr>
              <td>
                DVI<br></br>
                <img
                  src="images/ports/dvi.png"
                  alt="DVI"
                  width="200"
                  height="75"
                />
              </td>
              <td>Monitor</td>
            </tr>
            <tr>
              <td>
                VGA<br></br>
                <img
                  src="images/ports/vga.png"
                  alt="VGA"
                  width="200"
                  height="75"
                />
              </td>
              <td>Monitor</td>
            </tr>
            <tr>
              <td>
                Ethernet / RJ45<br></br>
                <img
                  src="images/ports/ethernet.png"
                  alt="Ethernet"
                  width="100"
                  height="50"
                />
              </td>
              <td>Router</td>
            </tr>
          </table>
        </div>
        <h5>
          NOTE: Colors of ports may vary slightly based on port version. Size
          roughly to scale.
        </h5>
      </Collapsible>

      <Collapsible
        trigger={
          <button className="collapsible-trigger">Drive Formatting</button>
        }
      >
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>Windows</u>
            </h3>
            <h4>Using File Explorer</h4>
            <ol>
              <li>Connect the drive via USB to your computer</li>
              <li>
                Open <b>File Explorer</b> and click <b>This PC</b>
              </li>
              <li>
                Right-click the drive and select <b>Format</b>
              </li>
              <li>Choose a file system (see Common File Systems above)</li>
              <li>
                Click <b>Start</b>, then <b>OK</b> to confirm
              </li>
            </ol>
          </div>
          <div className="package-card">
            <h3>
              <u>macOS</u>
            </h3>
            <h4>Using Disk Utility</h4>
            <ol>
              <li>Connect the drive via USB to your computer</li>
              <li>
                Open <b>Disk Utility</b> (Applications {"->"} Utilities)
              </li>
              <li>Select the drive in the side panel on the left</li>
              <li>
                Click <b>Erase</b> and choose a format (see Common File Systems
                above)
              </li>
              <li>
                Click <b>Erase</b> again to confirm
              </li>
            </ol>
          </div>
        </div>
        <h5>
          NOTE: Use caution when formatting as ALL drive contents will be
          erased!
        </h5>
      </Collapsible>

      <Collapsible
        trigger={<button className="collapsible-trigger">Local Backup</button>}
      >
        <h4>Keep a local backup of your files in case your computer fails.</h4>
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>Pick a Backup Drive</u>
            </h3>
            <h4>Verify your drive before you buy</h4>
            <ul>
              <li>
                <b>SSD:</b> Faster and more durable since it has no moving parts
              </li>
              <li>
                <b>HDD:</b> Slower and more fragile, but more storage for the
                money
              </li>
              <li>
                Get at least twice as much storage as your computer is using
              </li>
              <li>
                Make sure its cable fits your computer's ports (see Common
                Inputs above)
              </li>
              <li>
                Stick with trusted brands like Samsung, SanDisk, WD or Seagate
              </li>
              <li>
                If backing up manually, keep it unplugged and stored safely
                between backups
              </li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>Automatic Backups</u>
            </h3>
            <h4>Let a program back up for you</h4>
            <ul>
              <li>
                <b>Windows:</b>{" "}
                <a
                  href="https://www.fbackup.com/fbackup.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FBackup
                </a>{" "}
                is the top free option among a{" "}
                <a
                  href="https://www.pcworld.com/article/407021/best-windows-backup-software.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  number of others
                </a>
                , most of them paid
              </li>
              <li>
                <b>Windows:</b> File History is built into Windows 11,
                configured in Control Panel and needs an external drive
              </li>
              <li>
                <b>macOS:</b> Time Machine is built into macOS, configured in System Settings and needs an external drive
              </li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>Manual Backups</u>
            </h3>
            <h4>Drag and drop your files</h4>
            <ul>
              <li>
                Format the drive for your computer (see Drive Formatting above)
              </li>
              <li>
                Connect it via USB and it shows up just like your built-in drive
              </li>
              <li>Create folders with short, clear names</li>
              <li>
                Copy (not cut) files from your computer and paste them onto the
                drive
              </li>
              <li>
                Or drag and drop files between 2 open file explorer windows
              </li>
            </ul>
          </div>
        </div>
      </Collapsible>
    </>
  );
}
