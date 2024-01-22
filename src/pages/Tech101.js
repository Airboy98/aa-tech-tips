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
                A platform (either paid or free) used to view videos on demand
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
            {/* <tr>ML (Machine Learning)</tr>
            <tr>LLM (Large Language Model)</tr>
            <tr>VR (Virtual Reality)</tr> */}
          </table>
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
        <ul>
          <li>
            <strong>Always</strong> be cautious when clicking on links in
            websites or emails. Phishing is a common cybersecurity attack that
            tries to prey on users thinking they're visiting a safe website that
            looks authentic and prompts for entering credentials but actually
            steals your data! Make sure to verify you recognize the URL of the
            website you're about to visit!
          </li>
          <li>
            Some websites have pesky ads and pop-ups that take focus when you're
            trying to browse. Use an ad-block extension to mitigate these,
            including ads that play before videos like on Youtube.
          </li>
          <li>
            Create bookmarks for commonly visited websites. Toggle on your
            browser's bookmark bar for easy access to these. You can even group
            them by categories and put them in folders to stay organized!
          </li>
        </ul>
      </Collapsible>
    </>
  );
}
