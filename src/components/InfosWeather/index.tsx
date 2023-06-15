import React from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const InfosWeather = ({ data, weatherInfo }: any) => {
  const capitalizeWords = (sentence: string) => {
    const words = sentence.split(" ");
    const capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );
    return capitalizedWords.join(" ");
  };

  const convertDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    const formattedTime = `${hours}:${minutes}`;
    return formattedTime;
  };

  return (
    <>
      <div className="flex my-4">
        {weatherInfo && (
          <p>
            {weatherInfo?.name}, {weatherInfo?.state}, {weatherInfo?.country}
          </p>
        )}
      </div>
      <div className="my-4">
        <div className="flex items-center">
          <SunIcon className="h-4 w-4" />
          {data && <p>Nascer do Sol: {convertDate(data?.sys?.sunrise)}</p>}
        </div>
        <div className="flex items-center">
          <MoonIcon className="h-4 w-4" />
          {data && <p>Pôr do Sol: {convertDate(data?.sys?.sunset)}</p>}
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex flex-col items-center">
          {data && (
            <img
              src={`https://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png`}
            />
          )}
          {data && <p>{capitalizeWords(data?.weather[0]?.description)}</p>}
        </div>
        <div className="flex">
          {data && (
            <p className="text-5xl flex bg-stone-100 rounded-full p-4 drop-shadow-lg">
              {(data?.main?.temp).toFixed(0)}
              <span className="text-base font-bold">°C</span>
            </p>
          )}
          <div className="flex flex-col ml-4">
            {data && <p>Nebulozidade: {data?.clouds?.all}%</p>}
            {data && <p>Umidade: {data?.main?.humidity}%</p>}
            {data && (
              <p>
                Vento: {`${((data?.wind?.speed * 60 * 60) / 1000).toFixed(2)}`}{" "}
                k/h
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default InfosWeather;
