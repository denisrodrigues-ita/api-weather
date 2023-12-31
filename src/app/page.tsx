"use client";

import React from "react";
import InfosWeather from "@/components/InfosWeather";
import Loading from "@/components/Loading";
import { useCentralContext } from "@/CentralContext";
import CityNotFound from "@/app/CityNotFound/page";

const Home = () => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const { weatherInfo, setWeatherInfo, data, setData } = useCentralContext();
  const { cityInfo } = useCentralContext();
  const city = "São Paulo";

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
    if (cityInfo) {
      setError(false);
      const cityFormat = cityInfo.replace(" ", "+");

      const fetchData = async () => {
        setLoading(true);
        const timestamp = new Date().getTime();
        const response = await fetch(
          `${process.env.URL_ZIP_CODE}q=${cityFormat}&appid=${process.env.API_KEY}&timestamp=${timestamp}`
        );
        const result = await response.json();
        if (result.length === 0) {
          setLoading(false);
          setError(true);
          return;
        }
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
      {loading ? (
        <Loading />
      ) : error ? (
        <CityNotFound />
      ) : (
        <InfosWeather data={data} weatherInfo={weatherInfo} />
      )}
    </div>
  );
};

export default Home;
