import React from "react";
import Collapsible from "react-collapsible";
import { Link } from "react-router-dom";
import { CustomLink } from "../components/Navbar";
import "./home.css";

export default function Home() {
  return (
    <>
      <div className="section-header">
        <h1>
          {/* <img
            src="images/logos/question-phone.png"
            alt="Amazon"
            width="60"
            height="60"
            style={{ marginRight: "25px" }}
          /> */}
          AA Tech Tips
          {/* <img
            src="images/logos/question-computer.png"
            alt="Amazon"
            width="60"
            height="60"
            style={{ marginLeft: "25px" }}
          /> */}
        </h1>
      </div>
      <h2>Menu</h2>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Click or Tap Here</button>
        }
      >
        <div className="package-grid home-guide">
          <div className="package-card">
            <h3>
              <u>Get Around</u>
            </h3>
            <h4>
              Tap the logo in the top left corner to return here. Use the links
              in the top right corner (or the{" "}
              <img
                src="images/hamburger.png"
                alt="menu"
                height="20"
                width="20"
              />{" "}
              menu on smartphones) to visit other pages.
            </h4>
          </div>
          <div className="package-card">
            <h3>
              <u>Find Tips</u>
            </h3>
            <h4>
              Select a category below, or start with the basics in{" "}
              <Link to="/tech101">Tech 101</Link>. Tap the buttons on each page
              to open and close the tips.
            </h4>
          </div>
          <div className="package-card">
            <h3>
              <u>Use Tools</u>
            </h3>
            <h4>
              Visit <Link to="/streaming">Streaming</Link> to find where a movie
              or show is streaming, see what's in theaters now, music info and
              more. Visit <Link to="/gaming">Gaming</Link> to search games and
              see new and upcoming releases.
            </h4>
          </div>
          <div className="package-card">
            <h3>
              <u>Ask a Question</u>
            </h3>
            <h4>
              Use <Link to="/tech-byte">Tech Byte</Link> to ask me ANY tech
              question or get a comprehensive AI powered "byte-sized"
              appointment.
            </h4>
          </div>
          <div className="package-card">
            <h3>
              <u>Get Service</u>
            </h3>
            <h4>
              Visit <Link to="/services#booking">Services</Link> to book
              in-person tech help in the DFW area, remotely via Zoom, or various
              other tech support and services.
            </h4>
          </div>
        </div>
      </Collapsible>

      <div className="links">
        <div className="button-grid">
          <CustomLink to="/tech-byte">
            <button>Tech Byte</button>
          </CustomLink>
          <CustomLink to="/tech101">
            <button>Tech 101</button>
          </CustomLink>
          <CustomLink to="/computer">
            <button>Computer</button>
          </CustomLink>
          <CustomLink to="/television">
            <button>Television</button>
          </CustomLink>
          <CustomLink to="/gaming">
            <button>Gaming</button>
          </CustomLink>
          <CustomLink to="/internet">
            <button>Internet</button>
          </CustomLink>
          <CustomLink to="/smartphone">
            <button>Smartphone</button>
          </CustomLink>
          <CustomLink to="/streaming">
            <button>Streaming</button>
          </CustomLink>
          <CustomLink to="/wearable">
            <button>Wearable</button>
          </CustomLink>
          <CustomLink to="/ai">
            <button>AI / SI</button>
          </CustomLink>
          <CustomLink to="/services">
            <button>Services</button>
          </CustomLink>
          <CustomLink to="/about">
            <button>About</button>
          </CustomLink>
        </div>
      </div>

      <h5>
        Suggestions or feedback? Send an email to{" "}
        <a href="mailto:feedback@aatechtips.com">feedback@aatechtips.com</a>
      </h5>
    </>
  );
}
