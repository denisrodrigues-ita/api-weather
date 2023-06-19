"use client";

import React from "react";
import apiZipCode from "./apiZipCode";
import apiWeather from "./apiWeather";


const useCentral = async () => {

  const [data, setData] = React.useState<any>(null);
  const [city, setCity] = React.useState("lima");
  const [loading, setLoading] = React.useState(false);

  debugger
  // if (city) {
  //   await apiZipCode(city, setWeatherInfo, setLoading);
  // }

  // if (weatherInfo) {
  //   await apiWeather(weatherInfo.lat, weatherInfo.lon, setData, setLoading);
  // }

  // React.useEffect(() => {
  //   const fetchData = async () => {
  //     if (city) {
  //       await apiZipCode(city, setWeatherInfo, setLoading);
  //     }
  //   };
  //   fetchData();
  // }, [city]);

  // React.useEffect(() => {
  //   const fetchData = async () => {
  //     if (weatherInfo) {
  //       await apiWeather(weatherInfo.lat, weatherInfo.lon, setData, setLoading);
  //     }
  //   };
  //   fetchData();
  // }, [weatherInfo]);

  // return { data, weatherInfo, loading, city, setCity };
};

export default useCentral;
