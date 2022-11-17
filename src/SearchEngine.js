import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(false);
  const [load, setLoad] = useState({});

  function handleTemperature(response) {
    setWeatherData(true);
    setLoad({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleTemperature);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city.." onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
  );

  if (weatherData) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {Math.round(load.temperature)}°C</li>
          <li>Description: {load.description}</li>
          <li>Humidity: {load.humidity}%</li>
          <li>Wind: {Math.round(load.wind)}km/h</li>
          <li>
            <img src={load.icon} alt={load.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
