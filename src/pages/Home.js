import React from "react";

// Components
import HomePage from "../components/Home/HomePage";

// Hooks
import UseGetWeather from "../hooks/GetWithSWR/UseGetWeather";

const Home = () => {
  const { weather, isLoading, isError } = UseGetWeather();

  if (isLoading || isError) return null;

  return <HomePage weather={weather} />;
};

export default Home;
