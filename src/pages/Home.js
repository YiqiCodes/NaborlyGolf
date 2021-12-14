import React, { useEffect, useState } from "react";

// Components
import HomePage from "../components/Home/HomePage";

// Recoil
import axios from "axios";

// Vars
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};
const weatherAPIToken = process.env.REACT_APP_API_WEATHER_TOKEN;

const Home = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const success = (pos) => {
      let crd = pos.coords;
      axios({
        method: "get",
        url: `http://api.weatherapi.com/v1/current.json?key=${weatherAPIToken}&q=${crd.latitude},${crd.longitude}`,
      }).then((res) => {
        setWeather(res.data);
      });
    };

    const error = (err) => {
      console.warn(
        `Edward Snowden has entered the chat: (${err.code}): ${err.message}`
      );
    };

    return navigator.geolocation.getCurrentPosition(success, error, options);
  }, []);

  return <HomePage weather={weather} />;
};

export default Home;
