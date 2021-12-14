import axios from "axios";
import useSWR from "swr";

const useGetBTCPrice = () => {
  const fetcher = (url) => axios.get(`${url}`).then((res) => res.data);

  const { data, error } = useSWR(
    `https://api.coindesk.com/v1/bpi/currentprice.json`,
    fetcher
  );

  return {
    btcPrice: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useGetBTCPrice;
