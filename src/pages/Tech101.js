import Collapsible from "react-collapsible";
import "./tech101.css";
import { CustomLink } from "../components/Navbar";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Tooltip } from "primereact/tooltip";
import { Card } from "primereact/card";
import React, { useState } from "react";

export default function Tech101() {
  const [hoveredText, setHoveredText] = useState(null);
  const handleMouseEnter = (text) => {
    setHoveredText(text);
  };
  const handleMouseLeave = () => {
    setHoveredText(null);
  };
  const tableData = [
    { text: "Phone, Contacts, Mail", imageSrc: "/images/retailers/amazon.png" },
  ];
  return (
    <>
      <div className="section-header">
        <h1>Tech 101</h1>
      </div>
      <h2>Beginner</h2>

      <Collapsible
        trigger={
          <button className="collapsible-trigger">Common Vocabulary</button>
        }
      >
        <div className="tech">
          <table>
            <thead>
              <tr>
                <th>Word or Phrase</th>
                <th>Definition</th>
                <th>Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Android</td>
                <td>
                  Google's proprietary operating system for phones and tablets
                </td>
                <td>Android 14</td>
              </tr>
              <tr>
                <td>App</td>
                <td>
                  Commonly used to refer to smartphone-based installed programs
                </td>
                <td>Phone, Contacts, Mail</td>
              </tr>
              <tr>
                <td>Cloud</td>
                <td>
                  Umbrella term for referring to storing data on remote servers
                </td>
                <td>iCloud, OneDrive, Google Drive</td>
              </tr>
              <tr>
                <td>iOS</td>
                <td>Apple's proprietary operating system on iPhones</td>
                <td>iOS 16, iOS 17</td>
              </tr>
              <tr>
                <td>macOS</td>
                <td>Apple's proprietary operating system on Macs</td>
                <td>macOS 14 Sonoma</td>
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
                <td>
                  A modern day internet connected cellphone that uses apps
                </td>
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
            </tbody>
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
            <tbody>
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
            </tbody>
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
              <a
                href="https://pcpartpicker.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                pcpartpicker.com
              </a>{" "}
              to ensure optimal compatibility with every peripheral before you
              even buy. It also gives you a few retailer options to compare
              prices at a glance.
            </li>
            <li>
              <b>Read some reviews!</b> Make sure to first read reviews of the
              product you intend to buy before purchasing. Some devices on
              Amazon have thousands of reviews describing issues with products
              that may effect you. When it comes to buying a new TV,{" "}
              <a
                href="https://www.rtings.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                rtings.com
              </a>{" "}
              can be an excellent resource to rely on to get some in-depth
              details and comparisons between similar products.
            </li>
          </ul>
        </div>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">
            Anatomy of a Scam Email
          </button>
        }
      >
        <h4>
          Most scam emails are flagged as spam or junk mail. However, a few may
          make it through your email's spam filter and look authentic. Here are
          some obvious signs to look out for.
        </h4>
        <img
          src="images/tech101/scam-email.png"
          alt="Scam Email"
          height="500"
          width="350"
        />
        <h5>
          NOTE: When you receive a scam email, DO NOT click any links or buttons
          (known as phishing attempts). When in doubt, manually type in the
          website in a browser.
        </h5>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">
            Anatomy of a Scam Text
          </button>
        }
      >
        <h4>
          Frequency of scam texts, also known as smishing attempts, is on the
          rise. There are several clues to look out for to determine if a text
          is authentic or not.
        </h4>
        <img src="images/tech101/scam-text.png" alt="Scam Text" />
        <h5>
          NOTE: When you receive a scam text, DO NOT respond and DO NOT click
          any links. When in doubt, manually type in the website in a browser.
        </h5>
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
              in websites, emails and texts. Phishing (smishing when done via
              SMS aka texts) is a common cybersecurity attack that tries to prey
              on users thinking they're visiting a safe website that looks
              authentic and prompts for entering credentials but actually steals
              your data! Make sure to verify you recognize the URL of the
              website you're about to visit. Hovering over links in a browser
              should show the URL at the bottom left corner and hovering over
              links in an email should have a URL pop-up on screen.
            </li>
            <li>
              <b>Block those ads!</b> Some websites have pesky ads and pop-ups
              that take focus when you're trying to browse. Use an ad-block
              extension to mitigate these, including ads that play before videos
              like on Youtube. Alternatively, use a browser like{" "}
              <a
                href="https://brave.com/download/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Brave
              </a>{" "}
              that includes a built-in ad blocker. Check the{" "}
              <a href="https://www.aatechtips.com/internet">Internet page</a>{" "}
              for more info and tips.
            </li>
            <li>
              <b>Take advantage of bookmarks!</b> Create bookmarks for commonly
              visited websites. Toggle on your browser's bookmark bar for easy
              access to see them at all times. You can even group them by
              categories and put them in folders to stay organized. It's also
              beneficial to use the same browser across devices. For example, if
              you're a Chrome user, login to the same Google account in Chrome
              on all devices to sync bookmarks and access them on each device.
              This also applies to other browsers like Safari, so if you have a
              Macbook and an iPhone and use the default Safari browser, you'll
              be able to see the same bookmarks on each device.
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
      <h2>Intermediate</h2>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Computer Vocabulary</button>
        }
      >
        <div className="tech">
          <table>
            <thead>
              <tr>
                <th>Word or Phrase</th>
                <th>Definition</th>
              </tr>
            </thead>
            <tbody>
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
                <td>ISP (Internet Service Provider)</td>
                <td>
                  A company (like AT&T) that provides internet connection over
                  copper or fiber
                </td>
              </tr>
              <tr>
                <td>LAN (Local Area Network)</td>
                <td>A local network of interconnected devices</td>
              </tr>
              <tr>
                <td>Modem</td>
                <td>
                  A device connected to an ISP that enables internet access
                </td>
              </tr>

              <tr>
                <td>Monitor</td>
                <td>
                  A screen connected by a video cable to a desktop or built-in
                  to a laptop
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
                <td>PSU (Power Supply Unit)</td>
                <td>
                  A computer peripheral that provides power to internal
                  components
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
                <td>Remote (cloud connection)</td>
                <td>
                  Accessing something over the internet as opposed to locally
                </td>
              </tr>
              <tr>
                <td>Refresh Rate</td>
                <td>
                  The number of times per second (hertz) a screen updates its
                  image
                </td>
              </tr>
              <tr>
                <td>Router</td>
                <td>A device that broadcasts internet over Wi-Fi or LAN</td>
              </tr>
              <tr>
                <td>SSD (Solid State Drive)</td>
                <td>
                  A non-mechanical, flash-based storage device with fast access
                  speeds
                </td>
              </tr>
              <tr>
                <td>Wired Internet (Ethernet)</td>
                <td>
                  A wired connection using an Ethernet cable to connect to the
                  internet
                </td>
              </tr>
              <tr>
                <td>Wi-Fi</td>
                <td>
                  A wireless signal broadcasted by a router to connect to the
                  internet
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Password Management</button>
        }
      >
        <h4>
          Almost every website these days requires an account and some
          complicated string for a password. Keep in mind the following to keep
          them secure!
        </h4>
        <div className="tech">
          <ul>
            <li>
              <b>Don't keep it simple!</b> The simpler a password is (such as
              "Password123"), the less secure the account is and you run the
              risk of your data being compromised! Choose a word or sentence you
              can easily remember and mix in a few numbers or special characters
              in place of letters (ex: swap "e" for "3" or "a" for "@"). Salt
              your password with extra numbers or characters at the end for an
              added level of security.
            </li>
            <li>
              <b>Use a password manager!</b> Most common web browsers have a
              built-in password manager but using a dedicated password manager
              service is even more secure and most have a mobile app too. Some
              common ones are{" "}
              <a
                href="https://1password.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                1Password
              </a>
              ,{" "}
              <a
                href="https://www.dashlane.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dashlane
              </a>
              ,{" "}
              <a
                href="https://keepass.info/"
                target="_blank"
                rel="noopener noreferrer"
              >
                KeePass
              </a>
              ,{" "}
              <a
                href="https://www.lastpass.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LastPass
              </a>
              , and{" "}
              <a
                href="https://www.roboform.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                RoboForm
              </a>
              . Keep in mind that while these are secure services, they have a
              small chance of being compromised if servers are breached so one
              of the below options may be preferred if you want a non-cloud
              solution.
            </li>
            <li>
              <b>Keep a physical copy in a binder!</b> Physically record your
              passwords on standard 8.5x11 inch ruled filler paper to fit in a
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
              <b>Store a digital copy on a flash drive!</b> Use a spreadsheet
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
              <b>Be redundant!</b> Employ a few strategies above to have
              multiple secure copies of your account passwords. It may be a pain
              but just remember to keep them in sync and update them
              simultaneously when an account needs a password change!
            </li>
            <li>
              <b>Make use of MFA!</b> In addition to just a password, some
              websites require MFA which stands for multi-factor authentication.
              Even though it can be a bit tedious to setup, it is highly
              recommended to add an extra layer of security. MFA can be done a
              few ways, one being a OTP (one-time password) texted to your phone
              and another way uses an authenticator app paired with your account
              to generate a temporary code that lasts a few seconds.
            </li>
          </ul>
        </div>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">
            Tech Remote Assistance
          </button>
        }
      >
        <h4>
          Getting tech assistance may be the most ideal in person but a close
          second is using Zoom to have a trusted technician remotely view and/or
          control your computer, whether you're using a Windows machine or a
          Mac. You will have the ability to control your computer the entire
          time.
        </h4>
        <ol>
          <li>Click the Zoom meeting link the technician provides</li>
          <li>
            On the pre-meeting screen, enable your mic and enter your name
            before hitting "Join" button.
          </li>
          <li>Click the "Share" button to start sharing your screen.</li>
        </ol>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Digital Photo Frame</button>
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
              sending and viewing family photos. The process is simple:{" "}
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
      <h2>Advanced</h2>

      <Collapsible
        trigger={
          <button className="collapsible-trigger">Advanced Vocabulary</button>
        }
      >
        <div className="tech">
          <table>
            <thead>
              <tr>
                <th>Word or Phrase</th>
                <th>Definition</th>
                <th>Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>AI (Artificial Intelligence)</td>
                <td>
                  A complex program using an LLM to generate human-like
                  responses, code, pictures, etc.
                </td>
                <td>ChatGPT, Gemini, Grok</td>
              </tr>
              <tr>
                <td>AR (Augmented Reality)</td>
                <td>
                  An experience using a head-mounted device that superimposes
                  data in front of the user's eyes{" "}
                </td>
                <td>Apple Vision Pro, Meta Quest</td>
              </tr>
              <tr>
                <td>Cloud Computing</td>
                <td>
                  Utilizing powerful servers in remote data warehouses to
                  process large amounts of data
                </td>
                <td>AWS, Azure, GCP</td>
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
                <td>IoT (Internet of Things)</td>
                <td>A network of smart devices connected to the internet</td>
                <td>Nest thermostat, Ring doorbell</td>
              </tr>
              <tr>
                <td>LLM (Large Language Model)</td>
                <td>
                  A deep learning model pre-trained on vast amounts of data
                </td>
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
                <td>OCR (Optical Character Recognition)</td>
                <td>
                  A technology that converts scanned or printed text into
                  machine-readable data
                </td>
                <td>Google Lens</td>
              </tr>
              <tr>
                <td>VR (Virtual Reality)</td>
                <td>
                  A simulated experience using a head-mounted device to fully
                  immerse the user in a virtual world
                </td>
                <td>Apple Vision Pro, Meta Quest</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>

      <Collapsible
        trigger={
          <button className="collapsible-trigger">
            Artificial Intelligence
          </button>
        }
      >
        <h3>Generative Chatbots</h3>
        <h4>
          The below AI tools are interacted with via prompts: specifically
          worded queries to generate text or image responses and can be
          iteratively refined.
        </h4>
        <div className="television">
          <table>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://chatgpt.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="images/ai/chatgpt.png"
                      alt="Amazon"
                      width="150"
                      height="50"
                    />
                  </a>
                </td>
                <td>
                  <a
                    href="https://copilot.microsoft.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="images/ai/copilot.png"
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
                    href="https://gemini.google.com/app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="images/ai/gemini.png"
                      alt="Best Buy"
                      width="150"
                      height="50"
                    />
                  </a>
                </td>
                <td>
                  <a
                    href="https://grok.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="images/ai/grok.png"
                      alt="Newegg"
                      width="150"
                      height="50"
                    />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3>Examples</h3>
        <div className="tech">
          <table>
            <th>AI</th>
            <th>Prompt(s) </th>
            <th>Final Output</th>
            <tr>
              <td>ChatGPT</td>
              <td>
                <ol>
                  <li>Tell me about the Gospels of the Bible</li>
                  <li>Shorten that to summarize in 2 sentences</li>
                </ol>
              </td>
              <td>
                <img
                  src="images/ai/prompt1.png"
                  alt="prompt1"
                  width="150"
                  height="100"
                />
              </td>
            </tr>
            <tr>
              <td>Copilot</td>
              <td>Generate a picture of the grand canyon full of plant life</td>
              <td>
                <img
                  src="images/ai/prompt2.png"
                  alt="prompt2"
                  width="150"
                  height="150"
                />
              </td>
            </tr>
            <tr>
              <td>Gemini</td>
              <td>
                <ol>
                  <li>Give me an itinerary on things to do in Rome</li>
                  <li>Condense that to a single day</li>
                </ol>
              </td>
              <td>
                <img
                  src="images/ai/prompt3.png"
                  alt="prompt3"
                  width="150"
                  height="120"
                />
              </td>
            </tr>
            <tr>
              <td>Grok</td>
              <td>
                Summarize the attempted assassination of Donald Trump in Butler
              </td>
              <td>
                <img
                  src="images/ai/prompt4.png"
                  alt="prompt4"
                  width="150"
                  height="150"
                />
              </td>
            </tr>
          </table>
        </div>
      </Collapsible>

      <Collapsible
        trigger={<button className="collapsible-trigger">Cloud Storage</button>}
      >
        <h4>
          While most of the major brands have a <b>cloud service</b>, none of
          them are locked to their own platform so you are free to use{" "}
          <b>iCloud</b> on Windows or <b>Google Drive</b> on iPhone.
        </h4>
        <div className="tech">
          <table>
            <thead>
              <tr>
                <th>Cloud Service</th>
                <th>Brand</th>
                <th>Desktop Client</th>
                <th>Mobile App</th>
                <th>Free Tier</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://www.icloud.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    iCloud
                  </a>
                </td>
                <td>Apple</td>
                <td>
                  <a
                    href="https://apps.microsoft.com/detail/9pktq5699m62?cid=icloudweb2023&rtc=1&hl=en-us&gl=US"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Windows<br></br>
                  </a>
                  macOS
                </td>
                <td>
                  <a
                    href="https://apps.apple.com/us/app/files/id1232058109"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    iPhone
                  </a>
                  <br></br>
                  <a
                    href="https://play.google.com/store/apps/details?id=mt.io.syncforicloud&hl=en_US&gl=US"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Android
                  </a>
                </td>
                <td>5GB</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://onedrive.live.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    OneDrive
                  </a>
                </td>
                <td>Microsoft</td>
                <td>
                  <a
                    href="https://www.microsoft.com/en-us/microsoft-365/onedrive/download"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Windows
                  </a>
                  <br></br>
                  <a
                    href="https://apps.apple.com/us/app/onedrive/id823766827?mt=12"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    macOS
                  </a>
                </td>
                <td>
                  <a href="https://apps.apple.com/us/app/microsoft-onedrive/id477537958">
                    iPhone
                  </a>
                  <br></br>
                  <a href="https://play.google.com/store/apps/details?id=com.microsoft.skydrive&hl=en_US&gl=US">
                    Android
                  </a>
                </td>
                <td>5GB</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://drive.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Drive
                  </a>
                </td>
                <td>Google</td>
                <td>
                  <a
                    href="https://www.google.com/drive/download/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Windows
                  </a>
                  <br></br>
                  <a
                    href="https://www.google.com/drive/download/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    macOS
                  </a>
                </td>
                <td>
                  <a
                    href="https://apps.apple.com/au/app/google-drive/id507874739?platform=iphone"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    iPhone
                  </a>
                  <br></br>
                  <a href="https://play.google.com/store/apps/details?id=com.google.android.apps.docs&hl=en_US&gl=US">
                    Android
                  </a>
                </td>
                <td>15GB</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://www.idrive.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    iDrive
                  </a>
                </td>
                <td>Agnostic</td>
                <td>
                  <a
                    href="https://www.idrive.com/online-backup-download"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Windows
                  </a>
                  <br></br>
                  <a
                    href="https://www.idrive.com/online-backup-download"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    macOS
                  </a>
                </td>
                <td>
                  <a
                    href="https://apps.apple.com/us/app/idrive-online-backup/id427956708"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    iPhone
                  </a>
                  <br></br>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.prosoftnet.android.idriveonline&hl=en_US&gl=US"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Android
                  </a>
                </td>
                <td>10GB</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://www.idrive.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Dropbox
                  </a>
                </td>
                <td>Agnostic</td>
                <td>
                  <a
                    href="https://www.dropbox.com/desktop"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Windows
                  </a>
                  <br></br>
                  <a
                    href="https://www.dropbox.com/desktop"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    macOS
                  </a>
                </td>
                <td>
                  <a
                    href="https://apps.apple.com/us/app/dropbox-files-photo-storage/id327630330"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    iPhone
                  </a>
                  <br></br>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.dropbox.android&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Android
                  </a>
                </td>
                <td>2GB</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
      <Collapsible
        trigger={<button className="collapsible-trigger">Linux</button>}
      >
        <h4>
          Linux is an alternative free operating system to Windows and macOS. It
          is light-weight, open-source, highly customizable and comes in various
          flavors known as distributions (aka distros) suited for different
          needs.
        </h4>
        <div className="tech">
          <table>
            <thead>
              <tr>
                <th>Distro</th>
                <th>Ideal for</th>
                <th>Ease of Use</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://www.linuxmint.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Linux Mint
                  </a>
                </td>
                <td>Windows users</td>
                <td>Beginner</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://lubuntu.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Lubuntu
                  </a>
                </td>
                <td>Lightweight</td>
                <td>Beginner</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://www.raspberrypi.org/downloads/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Raspberry Pi OS
                  </a>
                </td>
                <td>Raspberry Pi projects</td>
                <td>Beginner</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://www.ubuntu.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ubuntu
                  </a>
                </td>
                <td>Mac users</td>
                <td>Beginner</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://www.opensuse.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    openSUSE
                  </a>
                </td>
                <td>System administration</td>
                <td>Intermediate</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://getfedora.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Fedora
                  </a>
                </td>
                <td>Developers</td>
                <td>Intermediate</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://www.centos.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CentOS
                  </a>
                </td>
                <td>Enterprise</td>
                <td>Intermediate</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://www.debian.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Debian
                  </a>
                </td>
                <td>Stable servers</td>
                <td>Intermediate</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://pop-os.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pop!_OS
                  </a>
                </td>
                <td>Developers / gamers</td>
                <td>Intermediate</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://archlinux.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Arch Linux
                  </a>
                </td>
                <td>Enthusiasts</td>
                <td>Expert</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://www.kali.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Kali Linux
                  </a>
                </td>
                <td>Cybersecurity</td>
                <td>Expert</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </>
  );
}
