"use client";

import React from "react";
import InfosWeather from "@/components/InfosWeather";
import useCentral from "@/services/useCentral";
import Loading from "@/components/Loading";

const Home = () => {
  const { loading } = useCentral();

  return (
    <div>
      <h1>Clima de hoje</h1>
      {loading ? <Loading /> : <InfosWeather />}
    </div>
  );
};

export default Home;
