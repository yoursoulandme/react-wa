import React from "react";

export default function LocationButton() {
  return (
    <div className="col-6">
      <ul>
        <li>
          Humidity: <span class="highlightColor" id="humidity"></span>%
        </li>
        <li>
          Wind: <span class="highlightColor" id="wind"></span> km/h
        </li>
        <li>
          Condition: <span class="highlightColor" id="condition"></span>
        </li>
      </ul>
    </div>
  );
}
