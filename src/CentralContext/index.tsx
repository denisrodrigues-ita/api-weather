'use client'

import React, { createContext, useState, useContext } from "react";

interface CentralContextProps {
  children: React.ReactNode;
}

interface CentralContextValue {
  weatherInfo: any;
  setWeatherInfo: React.Dispatch<React.SetStateAction<any>>;
  cityInfo: any;
  setCityInfo: any;
}

const CentralContext = createContext<CentralContextValue | undefined>(
  undefined
);

export const CentralProvider: React.FC<CentralContextProps> = ({
  children,
}) => {
  const [weatherInfo, setWeatherInfo] = useState<any>(null);
  const [cityInfo, setCityInfo] = useState<any>(null);


  const value: CentralContextValue = {
    weatherInfo,
    setWeatherInfo,
    cityInfo,
    setCityInfo
  };

  return (
    <CentralContext.Provider value={value}>{children}</CentralContext.Provider>
  );
};

export const useCentralContext = (): CentralContextValue => {
  const context = useContext(CentralContext);
  if (!context) {
    throw new Error("useCentralContext must be used within a CentralProvider");
  }
  return context;
};
