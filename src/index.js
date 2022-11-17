import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Container from "./Container";
import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const mystyle = {
  maxwidth: "500px",
  fontFamily: "Arial, Helvetica, sans-serif",
};

root.render(
  ///Search form, button and location button
  <StrictMode>
    <div className="App" style={mystyle}>
      <Container />
    </div>
    <div className="signature">
      <a href="https://github.com/yoursoulandme/weatherApp" target="_blank">
        {" "}
        Open-source
      </a>{" "}
      coded by
      <a href="https://www.linkedin.com/in/juliakuznetsovaqa/" target="_blank">
        Julia Kuznetsova
      </a>{" "}
      and hosted on
      <a
        href="https://app.netlify.com/sites/famous-chaja-041917/deploys/635497fdb3d9590009cf9f55"
        target="_blank"
      >
        {" "}
        Netlify{" "}
      </a>
    </div>
  </StrictMode>
);
