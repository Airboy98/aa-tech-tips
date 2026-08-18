import { useEffect } from "react";
import { useAppointmentsContext } from "../hooks/useAppointmentsContext";

// components
import Collapsible from "react-collapsible";
import Calendly from "../components/Calendly";
import "./services.css";

export default function Services() {
  const { appointments, dispatch } = useAppointmentsContext();

  return (
    <>
      <div className="section-header">
        <h1>Services</h1>
      </div>
      <h2>Appointment</h2>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Booking Schedule</button>
        }
      >
        <Calendly />
        <h5>
          Send any appointment inquiries to{" "}
          <a href="mailto:appointment@aatechtips.com">
            appointment@aatechtips.com
          </a>
        </h5>
      </Collapsible>

      <Collapsible
        trigger={<button className="collapsible-trigger">In-Person</button>}
      >
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>Instructional</u>
            </h3>
            <h4>
              <span className="package-price">$100/hr</span>
              <br />
              <span className="package-payment">
                Stripe, Zelle, Apple Pay, Cash or Check
              </span>
              <br />
              Learn while resolving your tech issues step-by-step
            </h4>
            <ul>
              <li>
                Informational IT lessons (ex: learn how to use a smartphone,
                tablet, macOS, etc.)
              </li>
              <li>Specific program training (ex: MS Office products)</li>
              <li>
                Data backup/transfer (external drive not provided, refer to{" "}
                <a href="https://aatechtips.com/tech101">Tech 101</a> for
                retailers)
              </li>
              <li>
                New device setup (smartphone, TV, printer, home network, etc.)
              </li>
              <li>Password management</li>
              <li>Malware/virus removal</li>
              <li>Other tech teaching topics</li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>Direct</u>
            </h3>
            <h4>
              <span className="package-price">$75/hr</span>
              <br />
              <span className="package-payment">
                Zelle, Apple Pay, Cash or Check
              </span>
              <br />
              Fast, no-fuss IT support, I handle it for you
            </h4>
            <ul>
              <li>
                Device setup (smartphone, TV, printer, home network, etc.)
              </li>
              <li>Internet/cable provider setup and account management</li>
              <li>Smart TV and streaming platform configuration</li>
              <li>
                Account setup (email, Microsoft 365, streaming services, etc.)
              </li>
              <li>Program/app installation or removal</li>
              <li>Malware/virus removal</li>
              <li>Other tech troubleshooting</li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>Purchase Assistance</u>
            </h3>
            <h4>
              <span className="package-price">$50/hr</span>
              <br />
              <span className="package-payment">
                Zelle, Apple Pay, Cash or Check
              </span>
              <br />
              I'll shop with or for you to find exactly what you need
            </h4>
            <ul>
              <li>
                Go to the store on your behalf based on your pre-defined needs
              </li>
              <li>Accompany you to Microcenter, Best Buy, Apple Store, etc.</li>
              <li>
                Find the right product for your needs and within your budget
              </li>
              <li>Cut through tech jargon and marketing language</li>
              <li>Avoid unnecessary upsells, subscriptions, and add-ons</li>
              <li>Assist with initial setup once home</li>
            </ul>
          </div>
        </div>
      </Collapsible>
      <Collapsible
        trigger={<button className="collapsible-trigger">Drop-Off</button>}
      >
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>Digitization</u>
            </h3>
            <h4>
              <span className="package-price">Starting at $30</span>
              <br />
              <span className="package-price">$0.99/photo or document</span>
              <br />
              <span className="package-payment">
                Zelle, Apple Pay, Cash or Check
              </span>
              <br />
              Drop off your photos or documents and I'll scan and organize them
              for you
            </h4>
            <ul>
              <li>
                Digitize printed photos like family pictures into
                high-resolution scans
              </li>
              <li>Digitize documents into organized PDF or image files</li>
              <li>Files delivered on flash drive or cloud folder</li>
              <li>Optional organization by date or event (additional fee)</li>
              <li>
                Originals handled with care and returned in the same condition
              </li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>Computer Servicing</u>
            </h3>
            <h4>
              <span className="package-price">Starting at $20</span>
              <br />
              <span className="package-payment">
                Zelle, Apple Pay, Cash or Check
              </span>
              <br />
              Drop off your computer and I'll assess it and handle the repairs
              and upgrades
            </h4>
            <table className="package-table">
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Hardware assessment</td>
                  <td>$20</td>
                </tr>
                <tr>
                  <td>Hardware upgrade</td>
                  <td>$40</td>
                </tr>
                <tr>
                  <td>Malware/virus removal</td>
                  <td>$50</td>
                </tr>
                <tr>
                  <td>OS install or reinstall</td>
                  <td>$100</td>
                </tr>
                <tr>
                  <td>Data backup and transfer</td>
                  <td>$100</td>
                </tr>
                <tr>
                  <td>Product recommendations</td>
                  <td>Included</td>
                </tr>
                <tr>
                  <td>Parts (RAM/HDD/SSD)</td>
                  <td>Varies</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Collapsible>
      <Collapsible
        trigger={<button className="collapsible-trigger">Virtual</button>}
      >
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>Zoom Call</u>
            </h3>
            <h4>
              <span className="package-price">$50/hr</span>
              <br />
              <span className="package-payment">Zelle or Apple Pay</span>
              <br />
              Convenient remote help from anywhere
            </h4>
            <ul>
              <li>
                Basic IT Lessons (ex: organize files and folders, use programs
                like MS Office, web browser, etc.)
              </li>
              <li>Data Transfer (flash/thumb drive required)</li>
              <li>Program/App Installation or Removal</li>
              <li>Any tech related questions</li>
            </ul>
          </div>
        </div>
      </Collapsible>

      <h2>Priority Support</h2>
      <Collapsible
        trigger={<button className="collapsible-trigger">Details</button>}
      >
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>On-Call</u>
            </h3>
            <h4>
              <span className="package-price">$200/mo</span>
              <br />
              <span className="package-payment">Zelle or Apple Pay</span>
              <br />
              Dedicated IT support at your fingertips, whenever you need it
            </h4>
            <ul>
              <li>Priority response to calls and texts</li>
              <li>Unlimited tech questions via text or email</li>
              <li>Remote troubleshooting sessions as needed</li>
              <li>Monthly in-person IT appointment</li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>Remote</u>
            </h3>
            <h4>
              <span className="package-price">$75/mo</span>
              <br />
              <span className="package-payment">Zelle or Apple Pay</span>
              <br />
              Affordable remote IT coverage for peace of mind
            </h4>
            <ul>
              <li>Tech questions via email</li>
              <li>Software and app support</li>
              <li>Basic troubleshooting guidance</li>
              <li>Monthly remote IT appointment</li>
            </ul>
          </div>
        </div>
        <h5>
          Email{" "}
          <a href="mailto:appointment@aatechtips.com">
            appointment@aatechtips.com
          </a>{" "}
          to request a priority support package
        </h5>
      </Collapsible>
      <h2>Contract Developer</h2>
      <Collapsible
        trigger={<button className="collapsible-trigger">Details</button>}
      >
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>Web Dev</u>
            </h3>
            <h4>
              <span className="package-price">$125/hr</span>
              <br />
              <span className="package-payment">Zelle or Apple Pay</span>
              <br />
              Custom website built to your exact needs
            </h4>
            <ul>
              <li>Website design and development</li>
              <li>API integrations and third-party services</li>
              <li>Ongoing maintenance and updates</li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>App Dev</u>
            </h3>
            <h4>
              <span className="package-price">$200/hr</span>
              <br />
              <span className="package-payment">Zelle or Apple Pay</span>
              <br />
              Custom mobile or desktop apps built for you
            </h4>
            <ul>
              <li>iOS and Android app development</li>
              <li>Cross-platform apps (React Native, etc.)</li>
              <li>UI/UX design and prototyping</li>
              <li>App store submission and deployment</li>
              <li>Ongoing maintenance and updates</li>
            </ul>
          </div>
        </div>
        <h5>
          Email{" "}
          <a href="mailto:appointment@aatechtips.com">
            appointment@aatechtips.com
          </a>{" "}
          to discuss your project
        </h5>
      </Collapsible>
    </>
  );
}
