"use client";

import React from "react";
import apiZipCode from "./apiZipCode";
import apiWeather from "./apiWeather";

const useCentral = () => {
  const [weatherInfo, setWeatherInfo] = React.useState<any>(null);
  const [data, setData] = React.useState<any>(null);
  const [city, setCity] = React.useState("lima");
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (city) {
      apiZipCode(city, setWeatherInfo, setLoading);
    }
  }, [city]);

  console.log("weatherInfo", weatherInfo)
  console.log("data", data)
  console.log("city", city)

  React.useEffect(() => {
    if (weatherInfo) {
      apiWeather(weatherInfo.lat, weatherInfo.lon, setData, setLoading);
    }
  }, [weatherInfo]);

  return { data, weatherInfo, loading, city, setCity };
};

export default useCentral;

