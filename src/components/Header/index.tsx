"use client";

import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useCentralContext } from "@/CentralContext";

const Header: React.FC<any> = () => {
  const { setCityInfo } = useCentralContext();
  const [city, setCity] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCityInfo(city);
    setCity("");
  };

  return (
    <header>
      <div className="flex mb-8 bg-gradient-to-r from-cyan-500 to-blue-500 h-28"></div>
      <div className="container">
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
