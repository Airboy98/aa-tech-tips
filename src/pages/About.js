// import "./about.css";

import Collapsible from "react-collapsible";
import { CustomLink } from "../components/Navbar";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <div className="section-header">
        <h1>About</h1>
      </div>
      <h2>This Website</h2>
      <Collapsible
        trigger={<button className="collapsible-trigger">Purpose</button>}
      >
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>Why This Site Exists</u>
            </h3>
            <h4>Serving others with technology</h4>
            <ul>
              <li>
                The Lord gave me an opportunity to serve the older demographic
                at my church with IT help and see a need
              </li>
              <li>
                This website allows me to utilize the skills God has gifted me
                with
              </li>
              <li>A way to assist others with their technology issues</li>
              <li>
                Pronounced "double-a-tech-tips," referencing my two passions
              </li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>What You'll Find</u>
            </h3>
            <h4>Tips, tools and free resources</h4>
            <ul>
              <li>Helpful tech tips and information</li>
              <li>Infographics and step-by-step instructions</li>
              <li>Quick fixes for common issues with modern tech</li>
              <li>
                Search tools for movies, shows, music, podcasts, games and more
              </li>
              <li>
                Guidance on safe tech usage and making informed tech purchases
              </li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>Get in Touch</u>
            </h3>
            <h4>Book a visit or reach out for help</h4>
            <ul>
              <li>
                Feel free to <Link to="/services">book an appointment</Link>{" "}
                (in-person exclusive to DFW residents, RR weekends only)
              </li>
              <li>
                Get a <Link to="/tech-byte">Tech Byte</Link> for a "byte-sized"
                appointment
              </li>
              <li>
                Send any suggestions, feedback, or additions to the site to the
                appropriate email address below
              </li>
            </ul>
          </div>
        </div>
      </Collapsible>
      <h2>Me</h2>
      <Collapsible
        trigger={<button className="collapsible-trigger">Background</button>}
      >
        <div className="package-grid">
          <div className="package-card">
            <h3>
              <u>Faith & Family</u>
            </h3>
            <h4>Made to magnify my Maker</h4>
            <ul>
              <li>Professing Bible-believing Christian</li>
              <li>Jesus Christ is my Lord and Savior</li>
              <li>Striving to glorify the Lord with my abilities</li>
              <li>Serving others as a vessel for Him</li>
              <li>Married back in May to a God-fearing woman</li>
              <li>Expecting a son in March 2027</li>
            </ul>
          </div>

          <div className="package-card">
            <h3>
              <u>Education & Experience</u>
            </h3>
            <h4>Years of hands-on IT work</h4>
            <ul>
              <li>
                Graduated from Texas Tech in 2019 with a BS in Computer
                Science{" "}
              </li>
              <li>4 years of on-campus IT support for dorm hall students</li>
              <li>3 technical consulting jobs in Dallas</li>

              <li>
                Projects in software development, SQL database management, cloud
                engineering, cybersecurity and system administration
              </li>
              <li>
                Tech Concierge at a continuous care retirement community,
                supporting 700+ senior living residents
              </li>
            </ul>
          </div>
          <div className="package-card">
            <h3>
              <u>Tech Enthusiast</u>
            </h3>
            <h4>30+ years of tech experience</h4>
            <ul>
              <li>
                Started gaming on my 4th birthday when I unwrapped a Sega
                Genesis and Sonic 2
              </li>
              <li>Enjoyed tinkering with tech growing up</li>
              <li>Upgraded and modded laptops before building custom PCs</li>
              <li>Built websites for fun in my spare time in college</li>
            </ul>
          </div>
        </div>
        <a href="/sonic/" target="_blank" rel="noopener noreferrer">
          <img src="images/selfie.png" height="220" width="200" />
        </a>
      </Collapsible>

      <br></br>
      <footer>
        Developed and Designed by Aaron T.
        <br></br>
        AA Tech Tips Est. 2024
        <br></br>
        <a href="mailto:appointment@aatechtips.com">
          appointment@aatechtips.com
        </a>
        <br></br>
        <a href="mailto:feedback@aatechtips.com">feedback@aatechtips.com</a>
        <br></br>
        Copyright © 2024 - All Rights Reserved
        <br></br>
      </footer>
    </>
  );
}
