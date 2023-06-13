"use client";

import React from "react";
import apiZipCode from "@/services/apiZipCode";
import apiWeather from "@/services/apiWeather";

const Home = () => {
  const [weatherInfo, setWeatherInfo] = React.useState<any>(null);
  const [data, setData] = React.useState<any>(null);
  const [city, setCity] = React.useState("itamonte");

  React.useEffect(() => {
    apiZipCode(city, setWeatherInfo);
  }, []);

  React.useEffect(() => {
    if (weatherInfo) {
      apiWeather(weatherInfo[0].lat, weatherInfo[0].lon, setData);
    }
  }, [weatherInfo]);

  console.log(data);
  console.log(weatherInfo);

  return (
    <div>
      <h1>Clima de hoje</h1>
      <p>{weatherInfo && weatherInfo[0].name}</p>
      <p>{weatherInfo && weatherInfo[0].state}</p>
      <p>{weatherInfo && weatherInfo[0].country}</p>
      <p>{data && data.main.temp}°C</p>
      <p>{data && data.weather[0].description}</p>
      <p>{data && data.clouds.all}%</p>
      <p>{data && data.main.humidity} humidade</p>
    </div>
  );
};

export default Home;
