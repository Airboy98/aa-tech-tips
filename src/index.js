import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
// import "primeicons/primeicons.css";
import { BrowserRouter } from "react-router-dom";
import { AppointmentsContextProvider } from "./context/AppointmentContext";
import { Analytics } from "@vercel/analytics/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppointmentsContextProvider>
      <App />
      <Analytics />
    </AppointmentsContextProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
