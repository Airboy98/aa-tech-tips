import Collapsible from "react-collapsible";
import "./tech101.css";
import { CustomLink } from "../components/Navbar";
import { Link } from "react-router-dom";
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
          <table className="glossary-table">
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
                <td>Android 16</td>
              </tr>
              <tr>
                <td>App</td>
                <td>A program installed on a smartphone or tablet</td>
                <td>Phone, Contacts, Mail</td>
              </tr>

              <tr>
                <td>Badge</td>
                <td>
                  A numerical visual indicator on an app icon showing new
                  notifications
                </td>
                <td>Messages app showing "3" in a red circle</td>
              </tr>
              <tr>
                <td>Bluetooth</td>
                <td>
                  A short-range wireless connection used to link devices to
                  accessories without cables
                </td>
                <td>Wireless headphones, car audio</td>
              </tr>
              <tr>
                <td>Browser</td>
                <td>A program used to visit websites</td>
                <td>Safari, Chrome, Firefox</td>
              </tr>
              <tr>
                <td>Cloud</td>
                <td>Remote internet-connected computers in data warehouses</td>
                <td>iCloud, OneDrive, Google Drive</td>
              </tr>

              <tr>
                <td>Download</td>
                <td>Pulling a file from the internet onto a device</td>
                <td>Installing an app</td>
              </tr>
              <tr>
                <td>Hotspot</td>
                <td>Broadcasting a phone's cellular data as a Wi-Fi network</td>
                <td>Personal Hotspot, Mobile Hotspot</td>
              </tr>
              <tr>
                <td>iOS</td>
                <td>Apple's proprietary operating system on iPhones</td>
                <td>iOS 26</td>
              </tr>
              <tr>
                <td>ipadOS</td>
                <td>Apple's proprietary operating system on iPads</td>
                <td>ipadOS 26</td>
              </tr>
              <tr>
                <td>macOS</td>
                <td>Apple's proprietary operating system on Macs</td>
                <td>macOS 26 Tahoe</td>
              </tr>
              <tr>
                <td>Notification</td>
                <td>An alert message that displays on screen from an app</td>
                <td>Text message, calendar reminders</td>
              </tr>
              <tr>
                <td>Passkey</td>
                <td>
                  A way to sign in using a fingerprint or facial recognition
                  instead of a password
                </td>
                <td>Google Passkey</td>
              </tr>

              <tr>
                <td>QR Code</td>
                <td>
                  A square barcode website link accessed by scanning with a
                  phone camera
                </td>
                <td>Restaurant menus, event tickets</td>
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
                <td>iPhone 17, Galaxy S25</td>
              </tr>
              <tr>
                <td>Sync</td>
                <td>
                  Keeping data on a device consistent with data in the cloud
                </td>
                <td>Photos and contacts across devices</td>
              </tr>
              <tr>
                <td>Tablet</td>
                <td>An internet connected, large screen app-based device</td>
                <td>iPad</td>
              </tr>
              <tr>
                <td>Upload</td>
                <td>Sending a file from a device to the internet</td>
                <td>Attaching a file to an email</td>
              </tr>
              <tr>
                <td>Voice Assistant</td>
                <td>
                  A built-in helper controlled by voice to interact with devices
                </td>
                <td>Siri, Google Assistant, Alexa</td>
              </tr>
              <tr>
                <td>watchOS</td>
                <td>Apple's proprietary operating system on Apple Watches</td>
                <td>watchOS 26</td>
              </tr>
              <tr>
                <td>Wearable</td>
                <td>A body-worn device with built-in sensors</td>
                <td>Apple Watch, Fitbit, Google Glass</td>
              </tr>
              <tr>
                <td>Widget</td>
                <td>A small home-screen panel showing info from an app</td>
                <td>Weather, calendar, battery widgets</td>
              </tr>
              <tr>
                <td>Wi-Fi</td>
                <td>
                  A wireless internet connection using a router and usually
                  protected by a password
                </td>
                <td>Home or public network</td>
              </tr>
              <tr>
                <td>Windows</td>
                <td>Microsoft's proprietary operating system</td>
                <td>Windows XP, Windows 11</td>
              </tr>
              <tr>
                <td>2FA</td>
                <td>
                  Two-factor authentication, a security measure used for
                  accounts requiring a code
                </td>
                <td>Texted codes, Google Authenticator</td>
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
          With the amount of options these days, it can be overwhelming when you
          need to purchase a new computer or replacement TV. Keep in mind these
          tips during the buying process.
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
                      alt="Micro Center"
                      width="150"
                      height="50"
                    />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>Do Some Research</u>
            </h3>
            <h4>Decide which features matter most</h4>
            <ul>
              <li>
                The newest generation of devices have plenty of cool new
                features but a lot of them can be overkill
              </li>
              <li>
                Weigh your options and decide what you think are high-priority
                features
              </li>
              <li>
                Example 1: get a Sony OLED TV for super deep blacks and the
                easy-to-use Google TV interface if you're familiar with Android
                phones
              </li>
              <li>
                Example 2: get an iMac if you already have an iPhone so it
                seamessly integrates into your existing ecosystem
              </li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>Don't Believe the PC Hype</u>
            </h3>
            <h4>You probably need less than you think</h4>
            <ul>
              <li>
                You don't need a new super expensive GPU unless you do some
                serious photo/video editing or play modern games at high
                graphics settings
              </li>
              <li>
                An integrated GPU will probably suffice for most users doing
                basic web browsing, email, etc
              </li>
              <li>
                8GB of RAM is adequate these days unless you like to multi-task
                and have a lot of programs and browser tabs open at once
              </li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>Shop Around</u>
            </h3>
            <h4>Compare before you commit</h4>
            <ul>
              <li>
                Many options are available when it comes to buying a new device
                and stores often have plenty of sales going on around holidays
              </li>
              <li>
                Don't be pressured to make a quick decision in-store with a
                pushy sales rep but at least try to view the device in-person
                before pulling the trigger
              </li>
              <li>
                Compare prices between at least 2 physical and 2 online-retail
                stores like the ones listed above
              </li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>Use Online Tools</u>
            </h3>
            <h4>Let websites do the hard work</h4>
            <ul>
              <li>
                Use a tool like{" "}
                <a
                  href="https://pcpartpicker.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  pcpartpicker.com
                </a>{" "}
                to ensure optimal compatibility for custom desktop builds and
                price comparisons
              </li>
              <li>
                <a
                  href="https://shopping.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Shopping
                </a>{" "}
                lets you search for a product and compare prices across many
                stores in one place
              </li>
              <li>
                Shopping on Amazon? Use{" "}
                <a
                  href="https://camelcamelcamel.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  camelcamelcamel.com
                </a>{" "}
                to see a product's price history and get an email alert when the
                price drops
              </li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>Read Some Reviews</u>
            </h3>
            <h4>Learn from other buyers</h4>
            <ul>
              <li>
                Read reviews of the product you intend to buy on
                online-retailers before purchasing
              </li>
              <li>
                Some products on Amazon have thousands of reviews describing
                issues that may be applicable to you
              </li>
              <li>
                When it comes to buying a new TV,{" "}
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
        </div>
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
            Remove Compromised Data
          </button>
        }
      >
        <h4>
          DeleteMe is a subscription service that scours the web to find and
          remove your compromised personal data.
        </h4>
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>What Gets Removed</u>
            </h3>
            <h4>Personal information collected by data brokers</h4>
            <ul>
              <li>Full name and birthday</li>
              <li>Current and past addresses</li>
              <li>Phone numbers and email addresses</li>
              <li>Relatives and photos</li>
              <li>Social media profiles</li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>Removal Procedure</u>
            </h3>
            <h4>Hundreds of sites, handled for you</h4>
            <ul>
              <li>
                Data broker sites (like Whitepages, Spokeo, and Radaris) are
                scanned and opt-out requests are submitted on your behalf
              </li>
              <li>
                Unlike some fully automated competitors, DeleteMe uses human
                "privacy experts" to handle more difficult removals
              </li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>Continuous Monitoring</u>
            </h3>
            <h4>Keeps your info from coming back</h4>
            <ul>
              <li>
                Data brokers often "re-list" information shortly after it is
                deleted
              </li>
              <li>
                DeleteMe performs new scans every three months to ensure your
                data stays off the web
              </li>
              <li>
                You can update your profile at any time to include more
                information
              </li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>Detailed Privacy Reports</u>
            </h3>
            <h4>See exactly what was found</h4>
            <ul>
              <li>
                Within seven days of joining, you'll receive your first detailed
                privacy report
              </li>
              <li>
                Each report shows exactly where your info was found and the
                status of its removal
              </li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>Pricing</u>
            </h3>
            <h4>
              <span className="package-price">Starting at $129/year</span>
              <br />
              Plans for individuals and families
            </h4>
            <table className="package-table">
              <thead>
                <tr>
                  <th>Plan</th>
                  <th>1 Year</th>
                  <th>2 Years</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1 person</td>
                  <td>$129</td>
                  <td>$209</td>
                </tr>
                <tr>
                  <td>2 people</td>
                  <td>$229</td>
                  <td>$349</td>
                </tr>
                <tr>
                  <td>Up to 4 people</td>
                  <td>$329</td>
                  <td>$499</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="tech">
          <div>
            <a
              href="https://www.de33watrk.com/M1MJJW/KMKS9/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginTop: "0px",
                marginBottom: "16px",
                padding: "12px 14px",
                backgroundColor: "#0f3455",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "16px",
                borderRadius: "8px",
                textDecoration: "none",
                border: "2px solid #3c709f",
                letterSpacing: "0.5px",
              }}
            >
              Join DeleteMe Now!
            </a>
          </div>
        </div>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">
            Identity Theft Protection
          </button>
        }
      >
        <h4>
          Norton LifeLock offers comprehensive identity theft monitoring and
          recovery support, so you'll know quickly if your identity is at risk
          and get expert help fixing it.
        </h4>
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>Identity & Credit Monitoring</u>
            </h3>
            <h4>Watches for compromised info</h4>
            <ul>
              <li>
                Alerts you if your Social Security number, bank accounts, credit
                cards, or personal info show up on the dark web or are used to
                open new accounts in your name
              </li>
              <li>
                Tracks changes to your credit file and notifies you of new
                credit inquiries, accounts, and other activity that could signal
                fraud
              </li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>Recovery Support</u>
            </h3>
            <h4>Help getting back on your feet</h4>
            <ul>
              <li>
                Helps cancel and replace lost or stolen credit cards and ID
                cards
              </li>
              <li>
                If your identity is stolen, a U.S. based restoration specialist
                works on your behalf to help fix the damage
              </li>
              <li>
                Million Dollar Protection Package: reimbursement for stolen
                funds and coverage for personal expenses and lawyer fees
                incurred in resolving identity theft, up to plan limits
              </li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>Pricing</u>
            </h3>
            <h4>
              <span className="package-price">Starting at $12.49/mo</span>
              <br />
              Higher tiers add more coverage
            </h4>
            <table className="package-table">
              <thead>
                <tr>
                  <th>Plan</th>
                  <th>Annually</th>
                  <th>Monthly</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Core</td>
                  <td>$124.99/yr</td>
                  <td>$12.49/mo</td>
                </tr>
                <tr>
                  <td>Advanced</td>
                  <td>$199.99/yr</td>
                  <td>$19.99/mo</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>$349.99/yr</td>
                  <td>$34.99/mo</td>
                </tr>
              </tbody>
            </table>
            <ul>
              <li>60-day money back guarantee with annual plans</li>
              <li>Cancel anytime</li>
            </ul>
          </div>
        </div>
        <div className="tech">
          <div>
            <a
              href="https://lifelock.norton.com/products"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginTop: "0px",
                marginBottom: "16px",
                padding: "12px 14px",
                backgroundColor: "#0f3455",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "16px",
                borderRadius: "8px",
                textDecoration: "none",
                border: "2px solid #3c709f",
                letterSpacing: "0.5px",
              }}
            >
              Join LifeLock Now!
            </a>
          </div>
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
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>Check That Link</u>
            </h3>
            <h4>Make sure a website is what it claims to be</h4>
            <ul>
              <li>
                Always be cautious when clicking on links in websites, emails
                and texts
              </li>
              <li>
                Phishing (smishing when done via SMS aka texts) is a common
                cybersecurity attack that preys on users by providing a link
                that looks authentic and prompts for entering credentials but
                actually steals your data
              </li>
              <li>
                Make sure to verify you recognize the URL of the website you're
                about to visit
              </li>
              <li>
                Hovering over links in a browser should show the URL at the
                bottom left corner and hovering over links in an email should
                have a URL pop-up on screen
              </li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>Block Ads & Trackers</u>
            </h3>
            <h4>Browse without pop-ups or being tracked</h4>
            <ul>
              <li>
                Some websites have pesky ads and pop-ups that take focus when
                you're trying to browse
              </li>
              <li>
                Many websites also use trackers to follow what you do online and
                build a profile on you to sell to advertisers
              </li>
              <li>
                Use an ad-block extension like{" "}
                <a
                  href="https://chromewebstore.google.com/detail/ublock-origin-lite/ddkjiahejlhfcafbddmgiahcphecmpfh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  uBlock
                </a>{" "}
                to block ads and trackers, including the ones that play before
                videos like on Youtube
              </li>
              <li>
                Alternatively, use a browser like{" "}
                <a
                  href="https://brave.com/download/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Brave
                </a>{" "}
                that includes a built-in ad and tracker blocker
              </li>
              <li>
                Check the <Link to="/internet">Internet page</Link> for more
                info and tips
              </li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>Take Advantage of Bookmarks</u>
            </h3>
            <h4>Your favorite websites, one click away</h4>
            <ul>
              <li>Create bookmarks for commonly visited websites</li>
              <li>
                Toggle on your browser's bookmark bar (aka Favorites) for easy
                access at the top of your browser
              </li>
              <li>
                You can even group them by categories and put them in folders to
                stay organized.
              </li>
              <li>
                It's beneficial to use the same browser across devices to keep
                bookmarks in sync, so for example, if you're a Chrome user,
                login to the same Google account in Chrome on all devices to
                sync bookmarks and access them on each device
              </li>
            </ul>
          </div>
        </div>
      </Collapsible>
      <Collapsible
        trigger={<button className="collapsible-trigger">Battery Tips</button>}
      >
        <h4>
          Make sure to keep in mind the following to ensure peak performance and
          longevity!
        </h4>
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>Modern Battery Technology</u>
            </h3>
            <h4>What powers most of your devices</h4>
            <ul>
              <li>
                Most devices these days have built-in rechargeable Lithium-ion
                batteries
              </li>
              <li>
                This battery technology allows for longer battery life, extended
                life span and quicker recharge times
              </li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>Fully Discharge Sparingly</u>
            </h3>
            <h4>Avoid running down to 0% often</h4>
            <ul>
              <li>
                It's not good for your device's battery health to be constantly
                discharged from 100% down to 0%
              </li>
              <li>
                If you can help it, try to limit a full discharge to once a week
              </li>
              <li>
                A full discharge also allows for your device's battery to
                recalibrate to take a more accurate reading when done sparingly
              </li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>Don't Top Up All the Time</u>
            </h3>
            <h4>No need to keep it at 100%</h4>
            <ul>
              <li>
                Constantly putting your device on the charger puts strain and
                extra wear and tear on the device's battery
              </li>
              <li>
                If your battery life is at 70% for example, it's not necessary
                to bring it back up to 100% asap unless absolutely necessary,
                like if you're not able to charge it for awhile
              </li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>Replacement Time?</u>
            </h3>
            <h4>You may not need to buy an entirely new device</h4>
            <ul>
              <li>
                Most modern devices allow you to check out your device's battery
                health
              </li>
              <li>
                If your device's battery health is below 80%, it may be worth
                looking into purchasing a replacement battery
              </li>
              <li>
                Older devices may have user replaceable batteries that can be
                purchased from retailers like Amazon
              </li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>iPhone Battery Health</u>
            </h3>
            <h4>For iPhones running iOS 11.3 or newer</h4>
            <ul>
              <li>
                Found under Settings {"->"} Battery {"->"} Battery Health &
                Charging {"->"} Maximum Capacity
              </li>
              <li>
                Without Apple Care, an iPhone replacement battery can be bought
                and installed for under $100, check{" "}
                <a
                  href="https://support.apple.com/iphone/repair/battery-replacement"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>{" "}
                for details
              </li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>Android Battery Health</u>
            </h3>
            <h4>For Android phones running Android 16 or newer</h4>
            <ul>
              <li>
                Found under Settings {"->"} Battery {"->"} Battery Health
              </li>
              <li>
                The exact location may vary depending on your phone's
                manufacturer
              </li>
              <li>
                Most manufacturers offer battery replacements through authorized
                repair shops like{" "}
                <a
                  href="https://www.ubreakifix.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  uBreakiFix
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Collapsible>
      <Collapsible
        trigger={<button className="collapsible-trigger">Email</button>}
      >
        <h4>
          Email not integrating in Outlook or on your phone? Sign in through
          your provider's website.
        </h4>
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>Email Providers</u>
            </h3>
            <h4>View your email in a browser</h4>
            <ul>
              <li>
                <a
                  href="https://login.aol.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AOL
                </a>
                <br />
                <span className="package-payment">@aol.com</span>
              </li>
              <li>
                <a
                  href="https://accounts.google.com/v3/signin/identifier?emr=1&ltmpl=default&nojavascript=1&rm=false&service=mail&ss=1&flowName=WebLiteSignIn&flowEntry=ServiceLogin&ifkv=ARESoU2o_M4tPDsvfmKoIA4Fx5Q7UhiZ-BJ_wsF0z9HUzx16d6L0RU9WpzXOjeggfec0xz4Ay6hzvw&dsh=S824919858%3A1762883661818387"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Gmail
                </a>
                <br />
                <span className="package-payment">@gmail.com</span>
              </li>
              <li>
                <a
                  href="https://login.yahoo.com/?src=ym&pspid=159600001&activity=mail-direct&lang=en-US&intl=us&done=https%3A%2F%2Fmail.yahoo.com%2Fd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Yahoo
                </a>
                <br />
                <span className="package-payment">
                  @yahoo.com, @att.net, @sbcglobal.net, @bellsouth.net
                </span>
              </li>
              <li>
                <a
                  href="https://login.microsoftonline.com/common/oauth2/v2.0/authorize?scope=service%3A%3Aaccount.microsoft.com%3A%3AMBI_SSL+openid+profile+offline_access&response_type=code&client_id=81feaced-5ddd-41e7-8bef-3e20a2689bb7&redirect_uri=https%3A%2F%2Faccount.microsoft.com%2Fauth%2Fcomplete-sign-in-oauth&client-request-id=0386b2d4-ecb7-4f29-bfb9-d9dab1f6f538&x-client-SKU=MSAL.Desktop&x-client-Ver=4.66.1.0&x-client-OS=Windows+Server+2019+Datacenter&prompt=login&client_info=1&state=H4sIAAAAAAAEAAXBOZaCMAAA0LtMS8ELS8DCApBFQIOyhLGTfYBAZI-nn_9__OqTJBFzX78A6inPNWWsOlPLx-zwMGbqZHgupB31is5ipyNZtmOrNfCxrDhoQM9D57H_Xea0Ndj-vT5zf9J7-yVlqZm1aAjGmiPQvLCgyCjBOXFVRWz2JYqA0BHrMY5DLHnrILiRRB7-yMxsShZKIw2l6DOWNRSxxrPydtd6eaHfyLkrQopXYOSyeDAiiNWAghJTV6dsTXMnFMVZ1qjEKJRfdaXazkinzd5GnzyR3NByvaG0ON4z4Cuj6eYMbf16BYO4jpP9CFTsbIWtZqJHLNxNuhW2XDJIR9diCPVvcsW2uSgoPPV0em99LAMOgXnPkJ1wjt4qCkF7zoX1-fzzD3RQHWpaAQAA&msaoauth2=true&instance_aware=true&lc=1033"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Microsoft
                </a>
                <br />
                <span className="package-payment">
                  @outlook.com, @live.com, @msn.com, @hotmail.com
                </span>
              </li>
              <li>
                <a
                  href="https://webmail.spectrum.net/mail/auth"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Spectrum
                </a>
                <br />
                <span className="package-payment">
                  @roadrunner.com, @rr.com, @twc.com, @brighthouse.com,
                  @charter.net
                </span>
              </li>
            </ul>
          </div>
        </div>
        {/* <h3>Dealing with Unwanted Emails</h3> */}
        <h4>
          Pair{" "}
          <a
            href="https://www.de33watrk.com/M1MJJW/KMKS9/"
            target="_blank"
            rel="noopener noreferrer"
          >
            DeleteMe
          </a>{" "}
          with the tips below for a cleaner, safer inbox.
        </h4>
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>Disregard It</u>
            </h3>
            <h4>Harmless notifications from trused senders</h4>
            <ul>
              <li>Leave the email in your inbox and ignore it</li>
              <li>
                If desired, mark as read to decrement the unread messages count
              </li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>Unsubscribe</u>
            </h3>
            <h4>Companies you no longer want to hear from</h4>
            <ul>
              <li>Click the "Unsubscribe" link at the bottom of the email</li>
              <li>
                "Unsubscribe" button also appears at the top of some emails in
                Gmail, Outlook, and Apple Mail
              </li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>Mark as Spam</u>
            </h3>
            <h4>Suspicious or unknown senders</h4>
            <ul>
              <li>DO NOT OPEN IT</li>
              <li>Mark it as spam (or junk), which autodeletes it</li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>Mass Delete</u>
            </h3>
            <h4>Clear out many emails at once</h4>
            <ul>
              <li>Check the box next to each email you want to remove</li>
              <li>Click delete (trash can icon) to remove them all at once</li>
            </ul>
          </div>
        </div>
      </Collapsible>
      <h2>Intermediate</h2>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Computer Vocabulary</button>
        }
      >
        <div className="tech">
          <table className="computer-vocab-table">
            <thead>
              <tr>
                <th>Word or Phrase</th>
                <th>Definition</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bandwidth</td>
                <td>
                  The maximum rate of data an internet connection can transfer,
                  affecting speed
                </td>
              </tr>
              <tr>
                <td>BIOS / UEFI</td>
                <td>
                  Low-level software on the motherboard that starts the computer
                  before the operating system loads
                </td>
              </tr>
              <tr>
                <td>Cache</td>
                <td>
                  Temporary files a device stores to load apps and websites
                  faster on return visits
                </td>
              </tr>
              <tr>
                <td>Cookies</td>
                <td>
                  Small files a website saves in the browser to remember logins
                  and preferences
                </td>
              </tr>
              <tr>
                <td>CPU (Central Processing Unit)</td>
                <td>
                  A computer's main chip that carries out instructions for
                  programs
                </td>
              </tr>
              <tr>
                <td>Driver</td>
                <td>
                  Software that lets the OS communicate with a piece of hardware
                </td>
              </tr>
              <tr>
                <td>Encryption</td>
                <td>
                  Scrambling data so only someone with the correct key or
                  password can read it
                </td>
              </tr>
              <tr>
                <td>Firewall</td>
                <td>
                  A security barrier that monitors and blocks unwanted network
                  traffic
                </td>
              </tr>
              <tr>
                <td>Firmware</td>
                <td>
                  Software built into a device that controls how its hardware
                  operates
                </td>
              </tr>
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
                <td>IP Address</td>
                <td>
                  A unique number identifying a device on a network or the
                  internet
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
                <td>Malware</td>
                <td>
                  Harmful software (like viruses) designed to damage a device or
                  steal data
                </td>
              </tr>
              <tr>
                <td>Modem</td>
                <td>
                  A device connected to an ISP that enables internet access
                </td>
              </tr>
              <tr>
                <td>Motherboard</td>
                <td>
                  A computer's main circuit board that connects and links other
                  hardware
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
                <td>OS (Operating System)</td>
                <td>
                  A computer's core software that the user interacts with to run
                  programs
                </td>
              </tr>
              <tr>
                <td>Peripheral</td>
                <td>
                  A piece of hardware attached to a computer, either external or
                  internal
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
                <td>USB (Universal Serial Bus)</td>
                <td>
                  A common connector standard for plugging in peripherals to a
                  computer
                </td>
              </tr>
              <tr>
                <td>VPN (Virtual Private Network)</td>
                <td>
                  A service that changes a device's IP address for privacy and
                  security
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
          Almost every website requires an account and a password. Keep yours
          secure with these tips!
        </h4>
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>Make a Digital Copy</u>
            </h3>
            <h4>Keep a spreadsheet on a flash drive</h4>
            <ul>
              <li>Create a spreadsheet in Google Sheets, Excel or Numbers</li>
              <li>
                Label the first row of the table with these 4 headers:{" "}
                <b>Account Name, User Name, Password, Date Updated</b>
              </li>
              <li>Password protect the file</li>
              <li>
                Move it to a flash drive and delete the original from your
                computer
              </li>
              <li>
                Store the flash drive in a secure, discreet place away from your
                computer
              </li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>Don't Keep It Simple</u>
            </h3>
            <h4>Simple passwords are easy to guess</h4>
            <ul>
              <li>Avoid simple passwords like "Password123"</li>
              <li>Start with a word or sentence you can easily remember</li>
              <li>
                Swap letters for numbers or special characters, like "e" for "3"
                or "a" for "@"
              </li>
              <li>
                Salt your password with extra numbers or characters at the end
                for added security
              </li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>Print a Physical Copy</u>
            </h3>
            <h4>Securely store the printed spreadsheet</h4>
            <ul>
              <li>Print out your password spreadsheet</li>
              <li>
                Regularly update the printed copy with any new passwords or
                changes to keep it current
              </li>
              <li>
                Keep it hidden away from your computer, like in a safe or in a
                drawer with other papers
              </li>
              <li>
                Be sure to shred old printed copies when you update to a new one
              </li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>Make Use of MFA</u>
            </h3>
            <h4>Multi-factor authentication</h4>
            <ul>
              <li>
                Turn on MFA for an extra layer of security beyond your password
              </li>
              <li>
                Start with your most important accounts, like email and banking
              </li>
              <li>Get a verification code by text message</li>
              <li>
                Use an authenticator app that generates a short-lived code
              </li>
              <li>
                Sign in with Face ID, your fingerprint or a passkey where
                offered
              </li>
              <li>Never approve a sign-in request you didn't make yourself</li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>Use a Password Manager</u>
            </h3>
            <h4>
              <span className="package-price">Starting at about $2/mo</span>
              <br />
              <a
                href="https://go.nordpass.io/aff_c?offer_id=488&aff_id=34741&url_id=9356"
                target="_blank"
                rel="noopener noreferrer sponsored"
              >
                NordPass
              </a>{" "}
              keeps all your logins in one place
            </h4>
            <ul>
              <li>Remember a single master password for everything</li>
              <li>Autofill and save logins on all your devices</li>
              <li>Generate long, random passwords for every account</li>
              <li>Get alerts for weak, reused or breached passwords</li>
              <li>Store credit cards and secure notes</li>
              <li>Zero-knowledge encryption means only you can unlock it</li>
            </ul>
          </div>
        </div>
        <div className="tech">
          <div>
            <a
              href="https://go.nordpass.io/aff_c?offer_id=488&aff_id=34741&url_id=9356"
              target="_blank"
              rel="noopener noreferrer sponsored"
              style={{
                display: "inline-block",
                marginTop: "0px",
                marginBottom: "16px",
                padding: "12px 14px",
                backgroundColor: "#0f3455",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "16px",
                borderRadius: "8px",
                textDecoration: "none",
                border: "2px solid #3c709f",
                letterSpacing: "0.5px",
              }}
            >
              Get NordPass Now!
            </a>
          </div>
        </div>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">
            Tech Remote Assistance
          </button>
        }
      >
        <h4>Can't meet in person? Zoom is a close second.</h4>
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>Why Zoom?</u>
            </h3>
            <h4>Get help without leaving home</h4>
            <ul>
              <li>
                A trusted technician can remotely view and/or control your
                computer
              </li>
              <li>Compatible with any platform</li>
              <li>No download required as it works in the browser</li>
              <li>You stay in control of your computer the entire time</li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>Join and Share</u>
            </h3>
            <h4>Four easy steps</h4>
            <ol>
              <li>Click the Zoom meeting link the technician provides</li>
              <li>
                On the pre-meeting screen, enable your mic, enter your name and
                click "Join"
              </li>
              <li>
                Click the "Share" button and select your screen to start sharing
              </li>
              <li>Approve the technician's remote control request</li>
            </ol>
          </div>
        </div>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Digital Photo Frame</button>
        }
      >
        <h4>
          With a great camera in every pocket, sharing family photos is easier
          than ever!
        </h4>
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>View Photos From the Cloud</u>
            </h3>
            <h4>
              <a
                href="https://www.skylightframe.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Skylight
              </a>{" "}
              makes sharing family photos simple
            </h4>
            <ol>
              <li>
                <a
                  href="https://www.amazon.com/Skylight-Frame-Digital-Picture-Anywhere/dp/B01N7ENHO6/?th=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Purchase a frame
                </a>
              </li>
              <li>Plug it in and connect to WiFi using the touchscreen</li>
              <li>Pick a unique email address for your frame</li>
              <li>Give your family this email address to send photos to</li>
              <li>Photos appear instantly on the frame!</li>
            </ol>
          </div>
          <div className="package-card">
            <h3>
              <u>Download the App</u>
            </h3>
            <h4>
              <span className="package-price">Plus: $39/yr</span>
              <br />
              For convenience and customization
            </h4>
            <ul>
              <li>
                Download the app for{" "}
                <a
                  href="https://apps.apple.com/us/app/skylight-app/id1438779037"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  iPhone
                </a>{" "}
                or{" "}
                <a
                  href="https://play.google.com/store/apps/details?id=com.skylightframe.mobile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Android
                </a>{" "}
                to access all photos sent to your frame
              </li>
              <li>Choose which photos to display on the frame</li>
              <li>Send videos up to 1 minute long (Plus)</li>
              <li>Add captions to your photos (Plus)</li>
              <li>Organize them by album (Plus)</li>
              <li>Save photos from your frame back to your phone (Plus)</li>
            </ul>
          </div>
        </div>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Tracking Devices</button>
        }
      >
        <h4>
          Airtags and Tile trackers are small devices that can be attached to
          your items or pets to track their location using a smart phone.
        </h4>
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>AirTag</u>
            </h3>
            <a
              className="tracker-img"
              href="https://www.apple.com/airtag/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="images/tech101/airtag.png" alt="Apple AirTag" />
            </a>
            <h4>Best for iPhone users</h4>
            <ul>
              <li>
                <b>Network:</b> Uses the extensive Find My network of nearby
                iPhones
              </li>
              <li>
                <b>Precision:</b> Uses precise UWB technology instead of solely
                Bluetooth
              </li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>Tile</u>
            </h3>
            <a
              className="tracker-img"
              href="https://www.life360.com/tile-trackers/products/tile-mate?icid=seatbelt-mate-us"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="images/tech101/tile.webp" alt="Tile tracker" />
            </a>
            <h4>Best for flexibility</h4>
            <ul>
              <li>
                <b>Compatibility:</b> Works with both iPhone and Android
              </li>
              <li>
                <b>Form Factor:</b> Comes in various sizes for keys and wallets
              </li>
              <li>
                <b>History:</b> 30 day location history with an optional
                subscription
              </li>
            </ul>
          </div>
        </div>
      </Collapsible>
      <h2>Advanced</h2>

      <Collapsible
        trigger={
          <button className="collapsible-trigger">Advanced Vocabulary</button>
        }
      >
        <div className="tech">
          <table className="glossary-table">
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
                  A field of computer science focused on simulating
                  machine-based intelligence
                </td>
                <td>LLMs, self-driving cars</td>
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
        trigger={<button className="collapsible-trigger">Cloud Storage</button>}
      >
        <h4>
          While most of the major brands have a <b>cloud service</b>, none of
          them are locked to their own platform so you are free to use{" "}
          <b>iCloud</b> on Windows or <b>Google Drive</b> on iPhone.
        </h4>
        <div className="tech">
          <table className="cloud-storage-table">
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
                    href="https://apps.microsoft.com/detail/9pktq5699m62"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Windows
                  </a>
                  <br></br>
                  <a
                    href="https://www.apple.com/icloud/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    macOS
                  </a>
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
                    href="https://play.google.com/store/apps/details?id=mt.io.syncforicloud"
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
                    href="https://apps.apple.com/us/app/onedrive/id823766827"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    macOS
                  </a>
                </td>
                <td>
                  <a
                    href="https://apps.apple.com/us/app/microsoft-onedrive/id477537958"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    iPhone
                  </a>
                  <br></br>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.microsoft.skydrive"
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
                    href="https://apps.apple.com/us/app/google-drive/id507874739"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    iPhone
                  </a>
                  <br></br>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.google.android.apps.docs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
                    href="https://play.google.com/store/apps/details?id=com.prosoftnet.android.idriveonline"
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
                    href="https://www.dropbox.com/"
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
                    href="https://play.google.com/store/apps/details?id=com.dropbox.android"
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
          Linux is a free, open-source alternative platform to Windows and
          macOS.
        </h4>
        <div className="package-grid">
          <div className="package-card wide-card">
            <h3>
              <u>Distributions</u>
            </h3>
            <h4>Pick one that fits your needs</h4>
            <table className="package-table">
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
                      href="https://www.raspberrypi.com/software/"
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
                      href="https://fedoraproject.org/"
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
                      href="https://rockylinux.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Rocky Linux
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
                      href="https://system76.com/pop"
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
          <div className="package-card wide-card">
            <h3>
              <u>Software</u>
            </h3>
            <h4>Alternatives to programs you use</h4>
            <table className="package-table">
              <thead>
                <tr>
                  <th>Instead of</th>
                  <th>Try</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Microsoft Word</td>
                  <td>
                    <a
                      href="https://www.libreoffice.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LibreOffice Writer
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Microsoft Excel</td>
                  <td>
                    <a
                      href="https://www.libreoffice.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LibreOffice Calc
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Microsoft PowerPoint</td>
                  <td>
                    <a
                      href="https://www.libreoffice.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LibreOffice Impress
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Microsoft Outlook</td>
                  <td>
                    <a
                      href="https://www.thunderbird.net/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Thunderbird
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Adobe Photoshop</td>
                  <td>
                    <a
                      href="https://www.gimp.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GIMP
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Adobe Illustrator</td>
                  <td>
                    <a
                      href="https://inkscape.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Inkscape
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Adobe Acrobat</td>
                  <td>
                    <a
                      href="https://okular.kde.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Okular
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Adobe Premiere / iMovie</td>
                  <td>
                    <a
                      href="https://kdenlive.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Kdenlive
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>iTunes</td>
                  <td>
                    <a
                      href="https://flathub.org/apps/org.gnome.Rhythmbox3"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Rhythmbox
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="package-card wide-card">
            <h3>
              <u>Compatibility</u>
            </h3>
            <h4>Natively supported on Linux</h4>
            <table className="package-table plain-table">
              <thead>
                <tr>
                  <th>App</th>
                  <th>Used for</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://www.google.com/chrome/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Google Chrome
                    </a>
                  </td>
                  <td>Web browsing</td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://store.steampowered.com/linux"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Steam
                    </a>
                  </td>
                  <td>Gaming</td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://discord.com/download"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Discord
                    </a>
                  </td>
                  <td>Chat and voice calls</td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://www.spotify.com/download/linux/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Spotify
                    </a>
                  </td>
                  <td>Music and podcasts</td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://zoom.us/download"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Zoom
                    </a>
                  </td>
                  <td>Video meetings</td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://www.videolan.org/vlc/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      VLC
                    </a>
                  </td>
                  <td>Videos and DVDs</td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://www.dropbox.com/install-linux"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Dropbox
                    </a>
                  </td>
                  <td>Cloud storage</td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://obsproject.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      OBS Studio
                    </a>
                  </td>
                  <td>Screen recording</td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://code.visualstudio.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visual Studio Code
                    </a>
                  </td>
                  <td>Coding</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Collapsible>
    </>
  );
}
