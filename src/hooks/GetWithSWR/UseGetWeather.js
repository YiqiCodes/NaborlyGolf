import axios from "axios";
import useSWR from "swr";

const useGetWeather = () => {
  const weatherAPIToken = process.env.REACT_APP_API_WEATHER_TOKEN;
  const fetcher = (url) =>
    axios
      .get(`${url}?key=${weatherAPIToken}&q=${"Toronto"}`)
      .then((res) => res.data);

  const { data, error } = useSWR(
    `http://api.weatherapi.com/v1/current.json`,
    fetcher,
    { refreshInterval: 10000 }
  );

  return {
    weather: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useGetWeather;
