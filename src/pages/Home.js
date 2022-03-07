import React, { useEffect } from "react";

// Axios
import axios from "axios";

// Components
import HomePage from "../components/home/HomePage";

// Recoil
import { useSetRecoilState } from "recoil";
import userCoordinatesAtom from "../recoil/UserCoordinatesAtom";
import userWeatherAtom from "../recoil/UserWeatherAtom";

// Vars
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};
const weatherAPIToken = process.env.REACT_APP_API_WEATHER_TOKEN;

const Home = () => {
  const setWeather = useSetRecoilState(userWeatherAtom);
  const setUserCoords = useSetRecoilState(userCoordinatesAtom);

  useEffect(() => {
    // Fetches weather based on user coordinates
    // Stores coordinates and weather in atoms
    const success = (pos) => {
      let crd = pos.coords;
      setUserCoords({ lat: crd.latitude, lng: crd.longitude });
      axios({
        method: "get",
        url: `https://api.weatherapi.com/v1/current.json?key=${weatherAPIToken}&q=${crd.latitude},${crd.longitude}`,
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
  }, [setUserCoords, setWeather]);

  return <HomePage />;
};

export default Home;
