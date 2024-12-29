// import "./about.css";

import Collapsible from "react-collapsible";
import { CustomLink } from "../components/Navbar";

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
        {/* <br></br>
        <br></br> */}
        <p>
          This site (pronounced double-a-tech-tips) is, first and foremost, an
          opportunity the Lord has given me to assist and serve others with
          technology. It offers helpful tech tips, information, infographics,
          useful step-by-step instructions and streamlines resolving common
          issues with modern tech. Along with the tips, helpful links to brand
          websites are provided to those seeking assistance and making informed
          tech decisions.
          <br></br>
          <br></br>
          Feel free to{" "}
          <a href="https://www.aatechtips.com/appointment">
            book an appointment
          </a>{" "}
          (in-person exclusive to DFW residents) or send any suggestions,
          feedback, or additions to the site to the appropriate email address
          below.
        </p>
      </Collapsible>
      <h2>Me</h2>
      <Collapsible
        trigger={<button className="collapsible-trigger">Background</button>}
      >
        <p>
          I have been an avid tech enthusiast ever since I received a Sega
          Genesis and Sonic 2 for my 4th birthday. I now get the opportunity to
          serve with tech needs at my home church in Dallas, Texas during Sunday
          services and with the Legacy ministry. I am a professing
          Bible-believing Christian and the Lord has gifted me with a passion
          for assisting and teaching others about technology. I graduated with a
          BS in Computer Science from Texas Tech in 2019 and worked as IT
          support on-campus for dorm hall students for 4 years. I have had 2
          technical consulting jobs with numerous projects ranging from software
          development, data manipulation and migration to the cloud, and system
          administrator experience. I wanted to use this skillset to create and
          maintain this website to help out those who are less technologically
          inclined as well as provide some useful information for more technical
          users with bleeding edge technologies like cloud and AI.
        </p>
        <a href="/sonic/" target="_blank" rel="noopener noreferrer">
          <img src="images/selfie.png" height="220" width="200" />
        </a>
      </Collapsible>

      <br></br>
      <footer>
        Developed and Designed by Aaron Turner
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
