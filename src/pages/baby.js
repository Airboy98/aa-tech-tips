import Collapsible from "react-collapsible";
import { useState } from "react";
import "./tech101.css";

export default function Baby() {
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
          >
            Cribs
          </button>
          <button
            className="category"
            style={{ color: "white", fontSize: "1.2em" }}
          >
            Dresses
          </button>

          <button
            className="category"
            style={{ color: "white", fontSize: "1.2em" }}
          >
            Shoes
          </button>
          <button
            className="category"
            style={{ color: "white", fontSize: "1.2em" }}
          >
            Toys
          </button>
          <button
            className="category"
            style={{ color: "white", fontSize: "1.2em" }}
          >
            Strollers
          </button>
        </div>
      </div>
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
  );
}
