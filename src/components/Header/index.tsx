"use client";

import React from "react";
import useCentral from "@/services/useCentral";
import { useCentralContext } from "@/CentralContext";

const Header: React.FC<any> = () => {
  const { weatherInfo, setWeatherInfo } = useCentralContext();
  const { cityInfo, setCityInfo } = useCentralContext();
  const [city, setCity] = React.useState("");


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // debugger
    // setCityInfo(event.target.value);
    setCity(event.target.value);
  };

  // const handleCity = () => {
  //   const cityFormat = city.replace(" ", "+");
  //   const fetchData = async () => {
  //     setLoading(true);
  //     const timestamp = new Date().getTime();
  //     const response = await fetch(
  //       `${process.env.URL_ZIP_CODE}q=${cityFormat}&appid=${process.env.API_KEY}&timestamp=${timestamp}`
  //     );
  //     const result = await response.json();
  //     setWeatherInfo(result[0]);
  //     const responses = await fetch(
  //       `${process.env.URL_WEATHER}lat=${result[0].lat}&lon=${result[0].lon}&appid=${process.env.API_KEY}&units=metric&lang=pt_br&timestamp=${timestamp}`
  //     );
  //     const results = await responses.json();
  //     setData(results);
  //     setLoading(false);
  //   };
  //   fetchData();
  // }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCityInfo(city);
  };

  return (
    <header>
      <div className="flex mb-8 bg-gradient-to-r from-cyan-500 to-blue-500 h-28">
        {weatherInfo && (
          <p>
            {weatherInfo?.name}, {weatherInfo?.state}, {weatherInfo?.country}
          </p>
        )}
      </div>
      <div className="container">
        <form action="submit" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Digite aqui a cidade que procura"
            value={city}
            onChange={handleChange}
          />
          <button type="submit">Atualizar</button>
        </form>
      </div>
    </header>
  );
};

export default Header;
