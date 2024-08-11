// import "./about.css";

import Collapsible from "react-collapsible";

export default function About() {
  return (
    <>
      <div className="section-header">
        <h1>About</h1>
      </div>

      <Collapsible
        trigger={<button className="collapsible-trigger">This Website</button>}
      >
        {/* <br></br>
        <br></br> */}
        This site (pronounced double-a-tech-tips) offers helpful tech tips, info
        and streamlines resolving common issues with modern tech. Along with the
        tips, helpful links to brand websites are provided.<br></br>
        <br></br> If you want to request an appointment or have any suggestions,
        feedback, or additions to the site, please send them to the appropriate
        email address below.
        <br></br>
      </Collapsible>
      <Collapsible
        trigger={<button className="collapsible-trigger">About Me</button>}
      >
        {/* <h2>About Me</h2> */}
        This site is, first and foremost, an opportunity the Lord has given me
        to assist and serve others with technology. Watermark Community Church
        in Dallas, Texas is my home church and I get the opportunity to serve
        ocassionally during Sunday services and with the Legacy ministry. I
        graduated with a BS in CS from Texas Tech in 2019 and worked as IT
        support on-campus for dorm hall students for 4 years. I wanted to use
        that experience to create and maintain this website to help out those
        who may be less technologically inclined as well as provide some useful
        info for more technical users.
        <br></br>
        <img src="images/selfie.png" height="220" width="200" />
      </Collapsible>

      <br></br>
      <footer>
        <p>Developed and Designed by Aaron Turner</p>
        <p>AA Tech Tips Est. 2024</p>
        <p>
          <b>
            <a href="mailto:appointment@aatechtips.com">
              appointment@aatechtips.com
            </a>
            <br></br>
            <a href="mailto:feedback@aatechtips.com">feedback@aatechtips.com</a>
          </b>
        </p>
        <p>Copyright © 2024 - All Rights Reserved</p>
        <br></br>
      </footer>
    </>
  );
}
