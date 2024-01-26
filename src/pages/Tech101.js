import Collapsible from "react-collapsible";
import "./tech101.css";

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
              <td>GPU (Graphics Processing Unit)</td>
              <td>A computer peripheral used to render graphics on a screen</td>
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
          <button className="collapsible-trigger">Purchasing Advice</button>
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
              It also gives you a few retailer options to see prices at a
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
              like on Youtube.
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
    </>
  );
}
