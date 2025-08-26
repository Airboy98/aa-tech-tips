import Collapsible from "react-collapsible";
import { useState } from "react";
import "./tech101.css";

export default function Baby() {
  const [activeSection, setActiveSection] = useState("cribs");

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <h1>Snuggle Swap</h1>
      <div className="section-header">
        <div
          className="category-bar"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <button
            className="category"
            style={{ color: "white", fontSize: "1.2em" }}
            onClick={() => handleSectionChange("cribs")}
          >
            Cribs
          </button>
          <button
            className="category"
            style={{ color: "white", fontSize: "1.2em" }}
            onClick={() => handleSectionChange("dresses")}
          >
            Dresses
          </button>
          <button
            className="category"
            style={{ color: "white", fontSize: "1.2em" }}
            onClick={() => handleSectionChange("shoes")}
          >
            Shoes
          </button>
          <button
            className="category"
            style={{ color: "white", fontSize: "1.2em" }}
            onClick={() => handleSectionChange("toys")}
          >
            Toys
          </button>
          <button
            className="category"
            style={{ color: "white", fontSize: "1.2em" }}
            onClick={() => handleSectionChange("strollers")}
          >
            Strollers
          </button>
        </div>
      </div>
      {activeSection === "cribs" && (
        <>
          <h2>Cribs</h2>
          <div
            className="tech"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <table style={{ width: "fit-content" }}>
              <tr>
                <img
                  src="images/devices/laptop.jpg"
                  alt="cribs"
                  height="200"
                  width="300"
                />
              </tr>
              <tr>Crib 1</tr>
              <tr>$200</tr>
            </table>
          </div>
        </>
      )}
      {activeSection === "dresses" && (
        <>
          <h2>Dresses</h2>
          <div
            className="tech"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <table style={{ width: "fit-content" }}>
              <tr>
                <img
                  src="images/devices/laptop.jpg"
                  alt="dresses"
                  height="200"
                  width="300"
                />
              </tr>
              <tr>Dress 1</tr>
              <tr>$50</tr>
            </table>
          </div>
        </>
      )}
      {activeSection === "shoes" && (
        <>
          <h2>Shoes</h2>
          <div
            className="tech"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <table style={{ width: "fit-content" }}>
              <tr>
                <img
                  src="images/devices/laptop.jpg"
                  alt="shoes"
                  height="200"
                  width="300"
                />
              </tr>
              <tr>Shoe 1</tr>
              <tr>$25</tr>
            </table>
          </div>
        </>
      )}
      {activeSection === "toys" && (
        <>
          <h2>Toys</h2>
          <div
            className="tech"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <table style={{ width: "fit-content" }}>
              <tr>
                <img
                  src="images/devices/laptop.jpg"
                  alt="toys"
                  height="200"
                  width="300"
                />
              </tr>
              <tr>Toy 1</tr>
              <tr>$15</tr>
            </table>
          </div>
        </>
      )}
      {activeSection === "strollers" && (
        <>
          <h2>Strollers</h2>
          <div
            className="tech"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <table style={{ width: "fit-content" }}>
              <tr>
                <img
                  src="images/devices/laptop.jpg"
                  alt="strollers"
                  height="200"
                  width="300"
                />
              </tr>
              <tr>Stroller 1</tr>
              <tr>$100</tr>
            </table>
          </div>
        </>
      )}
    </>
  );
}
