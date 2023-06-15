import React from "react";

const Header = ({ weatherInfo }: any) => {
  const capitalizeWords = (sentence: string) => {
    const words = sentence.split(" ");
    const capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );
    return capitalizedWords.join(" ");
  };

  return (
    <header className="mb-8 bg-gradient-to-r from-cyan-500 to-blue-500 h-28">
      <div className="flex">
        {weatherInfo && (
          <p>
            {weatherInfo?.name}, {weatherInfo?.state}, {weatherInfo?.country}
          </p>
        )}
      </div>
    </header>
  );
};

export default Header;
