import Collapsible from "react-collapsible";
import "./tech101.css";
import { CustomLink } from "../components/Navbar";

export default function Tech101() {
  return (
    <>
      <h1>Tech 101</h1>
      <hr></hr>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Common Vocabulary</button>
        }
      >
        <div className="tech">
          <table>
            <th>Word or Phrase</th>
            <th>Definition</th>
            <th>Examples</th>
            <tr>
              <td>App</td>
              <td>Commonly used to refer to phone-based installed programs</td>
              <td>Phone, Contacts, Mail</td>
            </tr>
            <tr>
              <td>Cloud</td>
              <td>
                Umbrella term for referring to storing data on remote servers
              </td>
              <td>iCloud, OneDrive</td>
            </tr>
            <tr>
              <td>iOS</td>
              <td>Apple's proprietary operating system on iPhones</td>
              <td>iOS 16, iOS 17</td>
            </tr>
            <tr>
              <td>ISP (Internet Service Provider)</td>
              <td>
                A company that provides internet connection over copper or fiber
              </td>
              <td>AT&T, Spectrum</td>
            </tr>
            <tr>
              <td>LAN (Local Area Network)</td>
              <td>A local network of interconnected devices</td>
              <td>Internet connected devices at home</td>
            </tr>
            <tr>
              <td>macOS</td>
              <td>Apple's proprietary operating system on Macs</td>
              <td>macOS 14 Sonoma</td>
            </tr>
            <tr>
              <td>Modem</td>
              <td>A device connected to an ISP that enables internet access</td>
              <td>ARRIS Surfboard</td>
            </tr>
            <tr>
              <td>Router</td>
              <td>A device that broadcasts internet over Wi-Fi or LAN</td>
              <td>Cisco E1000, TP-Link AX3000</td>
            </tr>
            <tr>
              <td>Streaming</td>
              <td>
                Watching on a platform (either paid or free) to view videos on
                demand
              </td>
              <td>Netflix, Prime Video</td>
            </tr>
            <tr>
              <td>Smartphone</td>
              <td>A modern day internet connected cellphone that uses apps</td>
              <td>iPhone 15, Galaxy S24</td>
            </tr>
            <tr>
              <td>Tablet</td>
              <td>An internet connected, large screen app-based device</td>
              <td>iPad</td>
            </tr>
            <tr>
              <td>watchOS</td>
              <td>Apple's proprietary operating system on Apple Watches</td>
              <td>watchOS 9, watchOS 10</td>
            </tr>
            <tr>
              <td>Wearable</td>
              <td>A wearable device with built-in sensors and other tech</td>
              <td>Apple Watch, Fitbit, Google Glass</td>
            </tr>

            <tr>
              <td>Windows</td>
              <td>Microsoft's proprietary operating system</td>
              <td>Windows XP, Windows 11</td>
            </tr>
          </table>
        </div>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Computer Vocabulary</button>
        }
      >
        <div className="tech">
          <table>
            <th>Word or Phrase</th>
            <th>Definition</th>
            <tr>
              <td>GPU (Graphics Processing Unit) / Graphics Card</td>
              <td>
                A computer peripheral dedicated to rendering graphics on a
                screen
              </td>
            </tr>
            <tr>
              <td>HDD (Hard Disk Drive)</td>
              <td>
                A mechanical, platter-based storage device with slow access
                speeds
              </td>
            </tr>
            <tr>
              <td>HDMI (High-Definition Multimedia Interface)</td>
              <td>
                A digital technology that transmits audio/video used with TVs
                and monitors
              </td>
            </tr>
            <tr>
              <td>Monitor</td>
              <td>
                A screen connected by a cable to a desktop or built-in to a
                laptop
              </td>
            </tr>
            <tr>
              <td>Phishing</td>
              <td>
                A malicious act of fooling a user to click a link spoofing a
                seemingly legit website
              </td>
            </tr>
            <tr>
              <td>RAM (Random Access Memory)</td>
              <td>
                A computer peripheral used to store data on a computer while
                powered on
              </td>
            </tr>
            <tr>
              <td>SSD (Solid State Drive)</td>
              <td>
                A non-mechanical, flash-based storage device with fast access
                speeds
              </td>
            </tr>
          </table>
        </div>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Advanced Vocabulary</button>
        }
      >
        <div className="tech">
          <table>
            <th>Word or Phrase</th>
            <th>Definition</th>
            <th>Examples</th>
            <tr>
              <td>AI (Artificial Intelligence)</td>
              <td>
                A complex program using an LLM to generate human-like responses,
                code, pictures, etc.
              </td>
              <td>ChatGPT, Bard, Copilot</td>
            </tr>
            <tr>
              <td>AR (Augmented Reality)</td>
              <td>
                Wearable glasses or head mounted display that superimposes data
                in front of the user's eyes{" "}
              </td>
              <td>Google Glass, Microsoft Hololens</td>
            </tr>
            <tr>
              <td>DL (Deep Learning)</td>
              <td>
                A subset of ML which focuses on learning by simulating human
                neural networks
              </td>
              <td>Tesla Full Self-Driving</td>
            </tr>
            <tr>
              <td>LLM (Large Language Model)</td>
              <td>A deep learning model pre-trained on vast amounts of data</td>
              <td>GPT, LLaMa, LaMDA</td>
            </tr>
            <tr>
              <td>ML (Machine Learning)</td>
              <td>
                A branch of AI which focuses on using data and algorithms to
                learn and refine accuracy
              </td>
              <td>Facial recognition</td>
            </tr>
            <tr>
              <td>VR (Virtual Reality)</td>
              <td>
                A simulated experience by using a head-mounted device to immerse
                the user in a virtual world
              </td>
              <td>Apple Vision Pro, Meta Quest</td>
            </tr>
          </table>
        </div>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">
            Tech Purchasing Advice
          </button>
        }
      >
        <h4>
          It can feel overwhelming when you need to purchase a new computer or
          replacement TV. Keep in mind these tips during the buying process.
        </h4>
        <div className="television">
          <table>
            <tr>
              <td>
                <a
                  href="https://www.amazon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/retailers/amazon.png"
                    alt="Amazon"
                    width="150"
                    height="50"
                  />
                </a>
              </td>
              <td>
                <a
                  href="https://www.newegg.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/retailers/newegg.png"
                    alt="Newegg"
                    width="150"
                    height="50"
                  />
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://www.bestbuy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/retailers/bestbuy.svg"
                    alt="Best Buy"
                    width="100"
                    height="50"
                  />
                </a>
              </td>
              <td>
                <a
                  href="https://www.microcenter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/retailers/microcenter.svg"
                    alt="Newegg"
                    width="150"
                    height="50"
                  />
                </a>
              </td>
            </tr>
          </table>
        </div>
        <div className="tech">
          <ul>
            <li>
              <b>Do some research!</b> The newest generation of devices have
              plenty of cool new features but a lot of them can be overkill.
              Weigh your options and decide what is a high-priority feature like
              getting an OLED TV for super deep blacks or staying in the Apple
              ecosystem with an iMac to simplify things by having an all-in-one
              computer with a streamlined interface that pairs well with other
              Apple devices.
            </li>
            <li>
              <b>Don't believe the hype!</b> Getting a computer with a new super
              expensive GPU is excessive for most people unless you do some
              serious photo/video editing or play modern games at high graphics
              settings. Even lower-end dedicated GPUs aren't necessary for basic
              web browsing and watching videos so an integrated GPU will
              probably suffice. For most people, 8GB of RAM is enough these days
              unless you like to multi-task and have a lot of programs and
              browser tabs open at once.
            </li>
            <li>
              <b>Shop around!</b> There's so many options when it comes to
              buying a new device and stores often have plenty of sales going on
              around holidays. Don't be pressured to make a quick decision
              in-store with a sales rep but at least try to view the device
              in-person before pulling the trigger. Compare prices between at
              least 2 physical and 2 online-retail stores like the ones above.
            </li>
            <li>
              <b>Use online tools!</b> If you're in the market to build a
              desktop, use a tool like{" "}
              <a href="https://pcpartpicker.com/">pcpartpicker.com</a> to ensure
              optimal compatibility with every peripheral before you even buy.
              It also gives you a few retailer options to compare prices at a
              glance.
            </li>
            <li>
              <b>Read some reviews!</b> Make sure to first read reviews of the
              product you intend to buy before purchasing. Some devices on
              Amazon have thousands of reviews describing issues with products
              that may effect you. When it comes to buying a new TV,{" "}
              <a href="https://www.rtings.com/">rtings.com</a> can be an
              excellent resource to rely on to get some in-depth details and
              comparisons between similar products.
            </li>
          </ul>
        </div>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Password Management</button>
        }
      >
        <h4>
          Almost every website these days requires an account and some
          complicated string for a password. Keep in mind the following to
          safely store these passwords!
        </h4>
        <div className="tech">
          <ul>
            <li>
              <b>Keep a physical copy in a binder.</b> Physically record your
              passwords on standard 8.5"x11" inch ruled filler paper to fit in a
              standard binder. Use the lines on the paper to neatly arrange your
              accounts in a table and sort them by category. For example, you
              could write the category "Finance" at the top of the page and draw
              a table with these 4 columns on the first line:{" "}
              <b>[Account Name] | [User Name] | [Password] | [Date Updated]</b>.
              Leave extra space in the password field so that when you need to
              update the password, you can write the new one, cross out the old
              one and note the date of the change in the Date Updated field.
              This physical copy can also be a printed out version of the
              digital copy below. Keep this binder in a very secure, discreet
              place, away from your computer.
            </li>
            <li>
              <b>Store a digital copy on a flash drive.</b> Use a spreadsheet
              program (Google Sheets, Microsoft Excel, iWork Numbers) to create
              a similar table mentioned above with the same headers. At the top
              of the spreadsheet:{" "}
              <b>[Account Name] | [User Name] | [Password] | [Date Updated]</b>{" "}
              and make these headers bold for clarity. Type the corresponding
              data in each field and password protect this file. Plug in a flash
              drive and drag and drop the file onto the drive. Remove the
              original file on the computer so the only copy exists on the flash
              drive. Keep this flash drive in a very secure, discreet place,
              away from your computer.
            </li>
            <li>
              <b>Be redundant!</b> Employ both of the above strategies to have 2
              secure copies of your account passwords. It may be a pain but just
              remember to keep them in sync and update them simultaneously when
              an account needs a password change!
            </li>
          </ul>
        </div>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Digital Photo Album</button>
        }
      >
        <h4>
          Sharing family photos is easier and more popular now than ever before
          since we all have a great camera available at all times in our pocket!
        </h4>
        <div className="tech">
          <ul>
            <li>
              <b>View photos from the cloud!</b>{" "}
              <a
                href="https://www.skylightframe.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Skylight
              </a>{" "}
              is an excellent cloud-based digital photo frame perfect for
              sending and viewing family photos. The concept is simple:{" "}
              <a
                href="https://www.amazon.com/Skylight-Frame-Digital-Picture-Anywhere/dp/B01N7ENHO6/?th=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                purchase a frame
              </a>
              , plug in and setup with the touchscreen to connect to WiFi, pick
              a unique email address for your frame, give your family this email
              address to send photos to and they appear instantly on the frame!
            </li>
            <li>
              <b>Download the app for convenience and customization!</b> Once
              you{" "}
              <a href="https://apps.apple.com/us/app/skylight-app/id1438779037">
                download the app
              </a>
              , you'll have access to all photos sent to your frame. You can
              even organize them by album and choose which to display on the
              frame!
            </li>
          </ul>
        </div>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Browsing the Web</button>
        }
      >
        <h4>
          Browsing the internet today is riskier than ever before. Use the below
          tactics to stay safe and keep your data secure!
        </h4>
        <div className="tech">
          <ul>
            <li>
              <b>Check that link!</b> Always be cautious when clicking on links
              in websites or emails. Phishing is a common cybersecurity attack
              that tries to prey on users thinking they're visiting a safe
              website that looks authentic and prompts for entering credentials
              but actually steals your data! Make sure to verify you recognize
              the URL of the website you're about to visit! Hovering over links
              in a browser should show the URL at the bottom left corner and
              hovering over links in an email should have a URL pop-up on
              screen.
            </li>
            <li>
              <b>Block those ads!</b> Some websites have pesky ads and pop-ups
              that take focus when you're trying to browse. Use an ad-block
              extension to mitigate these, including ads that play before videos
              like on Youtube. Check the Internet page for more info and tips.
            </li>
            <li>
              <b>Bookmark that site!</b> Create bookmarks for commonly visited
              websites. Toggle on your browser's bookmark bar for easy access to
              these to see them at all times. You can even group them by
              categories and put them in folders to stay organized!
            </li>
          </ul>
        </div>
      </Collapsible>
      <Collapsible
        trigger={<button className="collapsible-trigger">Battery Tips</button>}
      >
        <h4>
          Generally speaking, most modern devices these days have built-in
          rechargable Lithium-ion batteries. This battery technology allows for
          longer charge times, extended life span and quicker recharge times.
          Make sure to keep in mind the following to ensure peak performance and
          longevity!
        </h4>
        <div className="tech">
          <ul>
            <li>
              <b>Fully discharge sparingly!</b> It's not good for your device's
              battery health to be constantly discharged from 100% down to 0%.
              If you can help it, try to limit a full discharge to once a week.
              A full discharge also allows for your device's battery to
              recalibrate to take a more accurate reading when done sparingly.
            </li>
            <li>
              <b>Don't top up all the time!</b> Constantly putting your device
              on the charger puts strain and extra wear and tear on the device's
              battery. If your battery life is at 70% for example, it's not
              necessary to bring it back up to 100% asap unless absolutely
              necessary, like if you're not able to charge it for awhile.
            </li>
            <li>
              <b>Replacement time?</b> Is your phone or laptop not lasting you
              through the day anymore? You might not need to buy an entirely new
              device! Most devices these days allow you to check out your
              device's battery health but sometimes it's buried in the settings
              menu. On iPhone, battery health can be found under Settings {"->"}{" "}
              Battery {"->"} Battery Health & Charging {"->"} Maximum Capacity.
              If your device's battery health is below 80%, it may be worth
              looking into purchasing a replacement battery. For example,
              without Apple Care, an iPhone replacement battery can be bought
              and installed for under $100, check{" "}
              <a
                href="https://support.apple.com/iphone/repair/battery-replacement"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>{" "}
              for details. Other devices may have user replaceable batteries
              that can be purchased from retailers like Amazon.
            </li>
          </ul>
        </div>
      </Collapsible>
    </>
  );
}
