import React from "react";

import LocationButton from "./LocationButton";
import HWCComponents from "./HWCComponents";
import SearchEngine from "./SearchEngine";

export default function Container() {
  return (
    <div classname="BigContainer">
      <div className="weather-app-wrapper">
        <div className="bg-image" link rel="backgroundpic" href="#"></div>
        <div className="bg-text"></div>

        <div className="row" id="row">
          <LocationButton />
        </div>
        <HWCComponents />
        <SearchEngine />
        <h2 id="city">Philadelphia</h2>

        <img
          src="http://openweathermap.org/img/wn/10n@2x.png"
          id="icon"
          alt="Clear"
        />
      </div>
    </div>
  );
}
