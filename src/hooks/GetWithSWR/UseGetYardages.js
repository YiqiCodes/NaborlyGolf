import axios from "axios";
import useSWR from "swr";

const useGetYardages = () => {
  const fetcher = (url) => axios.get(`${url}`).then((res) => res.data);

  const { data, error } = useSWR(
    `${process.env.REACT_APP_SERVER_URL}/yardages`,
    fetcher
  );

  return {
    yardages: data.userYardages.stockYardages,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useGetYardages;
