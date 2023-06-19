"use client";

import React from "react";
import InfosWeather from "@/components/InfosWeather";
import Loading from "@/components/Loading";
import { useCentralContext } from "@/CentralContext";

const Home = () => {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState(null);
  const { weatherInfo, setWeatherInfo } = useCentralContext();
  const { cityInfo, setCityInfo } = useCentralContext();
  const [city, setCity] = React.useState("São Paulo");

  React.useEffect(() => {

    const cityFormat = city.replace(" ", "+");

    const fetchData = async () => {
      setLoading(true);
      const timestamp = new Date().getTime();
      const response = await fetch(
        `${process.env.URL_ZIP_CODE}q=${cityFormat}&appid=${process.env.API_KEY}&timestamp=${timestamp}`
      );
      const result = await response.json();
      setWeatherInfo(result[0]);
      const responses = await fetch(
        `${process.env.URL_WEATHER}lat=${result[0].lat}&lon=${result[0].lon}&appid=${process.env.API_KEY}&units=metric&lang=pt_br&timestamp=${timestamp}`
      );
      const results = await responses.json();
      setData(results);
      setLoading(false);
    };
    fetchData();
  }, []);

  React.useEffect(() => {

    debugger
    if(cityInfo){
      debugger

      const cityFormat = cityInfo.replace(" ", "+");

      const fetchData = async () => {
        setLoading(true);
        const timestamp = new Date().getTime();
        const response = await fetch(
          `${process.env.URL_ZIP_CODE}q=${cityFormat}&appid=${process.env.API_KEY}&timestamp=${timestamp}`
        );
        const result = await response.json();
        setWeatherInfo(result[0]);
        const responses = await fetch(
          `${process.env.URL_WEATHER}lat=${result[0].lat}&lon=${result[0].lon}&appid=${process.env.API_KEY}&units=metric&lang=pt_br&timestamp=${timestamp}`
        );
        const results = await responses.json();
        setData(results);
        setLoading(false);
      };
      fetchData();

    }

  }, [cityInfo]);

  return (
    <div>
      <h1>Clima de hoje</h1>
      {loading ? (
        <Loading />
      ) : (
        <InfosWeather data={data} weatherInfo={weatherInfo} />
      )}
    </div>
  );
};

export default Home;
