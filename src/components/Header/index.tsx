"use client";

import React, { use } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useCentralContext } from "@/CentralContext";
import Day from "../../../public/svg/Day";
import Night from "../../../public/svg/Night";
import Rain from "../../../public/svg/Rain";
import Wind from "../../../public/svg/Wind";
import Snow from "../../../public/svg/Snow";


const Header: React.FC<any> = () => {
  const date = new Date();

  const { setCityInfo, data } = useCentralContext();
  const [city, setCity] = React.useState("");

  const climate = () => {
    if (data) {
      if (data.weather[0].main === "Rain") {
        return <Rain />;
      } else if (data.weather[0].main === "Snow") {
        return <Snow />;
      } else if (data.weather[0].main === "Wind") {
        return <Wind />;
      } else {
        return (
          date.getHours() <= 18 && date.getHours() >= 6 ? <Day /> : <Night />
        );
      }
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCityInfo(city);
    setCity("");
  };

  return (
    <header className="bg-slate-400">
      <div className="py-4 container">
        { climate()}
      </div>

      <div className="container py-4">
        <form className="flex" action="submit" onSubmit={handleSubmit}>
          <input
            className="w-full md:w-1/2 lg:w-2/6 border-2 border-gray-300 rounded-s-md p-1"
            type="text"
            placeholder="Digite aqui a cidade que procura"
            value={city}
            onChange={handleChange}
          />
          <button type="submit" className="bg-gray-300 rounded-e-md p-2">
            <MagnifyingGlassIcon className="h-4 w-4" />
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
