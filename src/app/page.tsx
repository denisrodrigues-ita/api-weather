"use client";

import React from "react";
import apiZipCode from "@/services/apiZipCode";
import apiWeather from "@/services/apiWeather";
import InfosWeather from "@/components/InfosWeather";
import Loading from "@/components/Loading";

const Home = () => {
  const [weatherInfo, setWeatherInfo] = React.useState<any>(null);
  const [data, setData] = React.useState<any>(null);
  const [city, setCity] = React.useState("nova iguaçu");
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    apiZipCode(city, setWeatherInfo, setLoading);
  }, [city]);

  React.useEffect(() => {
    if (weatherInfo) {
      apiWeather(weatherInfo.lat, weatherInfo.lon, setData, setLoading);
    }
  }, [weatherInfo]);

  return (
    <div>
      <h1>Clima de hoje</h1>
      {loading && <Loading />}
      {data && weatherInfo && !loading && (
        <InfosWeather data={data} weatherInfo={weatherInfo} />
        
      )}
    </div>
  );
};

export default Home;
