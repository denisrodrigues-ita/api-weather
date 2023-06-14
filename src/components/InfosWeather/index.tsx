import React from "react";

const InfosWeather = ({data}: any, {weatherInfo}: any) => {
  const capitalizeWords = (sentence: string) => {
    const words = sentence.split(" ");
    const capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );
    return capitalizedWords.join(" ");
  };

  if (!data) <p>carregando...</p>;
  return (
    <div>
      {weatherInfo && <p>{weatherInfo[0]?.name}</p>}
      {weatherInfo && <p>{weatherInfo[0]?.state}</p>}
      {weatherInfo && <p>{weatherInfo[0]?.country}</p>}
      {data && <p>Nascer do Sol {data?.sys?.sunrise}</p>}
      {data && <p>Pôr do Sol {data?.sys?.sunset}</p>}
      {data && (
        <img
          src={`https://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png`}
        />
      )}
      {data && <p>{data?.main?.temp} °C</p>}
      {data && <p>{capitalizeWords(data?.weather[0]?.description)}</p>}
      {data && <p>Nebulozidade: {data?.clouds?.all}%</p>}
      {data && <p>Umidade: {data?.main?.humidity}%</p>}
      {data && (
        <p>
          Vento: {`${((data?.wind?.speed * 60 * 60) / 1000).toFixed(2)}`} k/h
        </p>
      )}
    </div>
  );
};

export default InfosWeather;
