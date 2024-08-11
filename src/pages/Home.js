import React from "react";
import Collapsible from "react-collapsible";
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
      {/* <hr></hr> */}
      <h4>
        Need IT help or looking for some tips? Select a category below or start
        with the basics and tap Tech 101. Tap the buttons on each page to expand
        and collapse the tips.<br></br>
        <br></br>Tap the logo in the top left corner to return here and navigate
        the site with the links in the top right corner (or{" "}
        <img src="images/hamburger.png" height="20" width="20" /> menu on
        smartphones).
      </h4>
      <div className="links">
        <CustomLink to="/tech101">
          <button>Tech 101</button>
        </CustomLink>
        <div className="button-grid">
          <CustomLink to="/computer">
            <button>Computer</button>
          </CustomLink>
          <CustomLink to="/television">
            <button>Television</button>
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
        </div>
        <CustomLink to="/appointment">
          <button>Appointment</button>
        </CustomLink>
        <CustomLink to="/about">
          <button>About</button>
        </CustomLink>
      </div>

      <h5>
        Suggestions or feedback? Send an email to{" "}
        <a href="mailto:feedback@aatechtips.com">feedback@aatechtips.com</a>
      </h5>
    </>
  );
}
