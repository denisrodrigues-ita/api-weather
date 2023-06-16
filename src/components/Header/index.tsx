"use client";

import React from "react";
import useCentral from "@/services/useCentral";

const Header: React.FC<any> = ({ weatherInfo }) => {
  const { setCity } = useCentral();
  const [inputValue, setInputValue] = React.useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCity(inputValue);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
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
            value={inputValue}
            onChange={handleChange}
          />
          <button type="submit">Atualizar</button>
        </form>
      </div>
    </header>
  );
};

export default Header;
