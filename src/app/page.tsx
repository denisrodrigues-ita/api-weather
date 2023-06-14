"use client";

import React from "react";
import apiZipCode from "@/services/apiZipCode";
import apiWeather from "@/services/apiWeather";
import InfosWeather from "@/components/InfosWeather";
import Loading from "@/components/Loading";

const Home = () => {
  const [weatherInfo, setWeatherInfo] = React.useState<any>(null);
  const [data, setData] = React.useState<any>(null);
  const [city, setCity] = React.useState("itamonte");
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    apiZipCode(city, setWeatherInfo);
  }, [city]);

  React.useEffect(() => {
    if (weatherInfo) {
      apiWeather(weatherInfo[0].lat, weatherInfo[0].lon, setData);
    }
  }, [weatherInfo]);

  if (loading) return <Loading />;
  return (
    <div>
      <h1>Clima de hoje</h1>
      <InfosWeather data={data} weatherInfo={weatherInfo} />
    </div>
  );
};

export default Home;
