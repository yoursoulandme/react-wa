import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          <a
            href="https://github.com/yoursoulandme/weatherApp"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Open-source
          </a>{" "}
          coded by
          <a
            href="https://www.linkedin.com/in/juliakuznetsovaqa/"
            target="_blank"
            rel="noreferrer"
          >
            Julia Kuznetsova
          </a>{" "}
          and hosted on
          <a
            href="https://app.netlify.com/sites/famous-chaja-041917/deploys/635497fdb3d9590009cf9f55"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Netlify{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}
