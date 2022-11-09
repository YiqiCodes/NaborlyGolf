import axios from "axios";
import useSWR from "swr";

const useGetProducts = () => {
  const fetcher = (url) => axios.get(`${url}`).then((res) => res.data);
  const { data, error } = useSWR(
    `${process.env.REACT_APP_SERVER_URL}/products/getProducts`,
    fetcher
  );

  return {
    products: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useGetProducts;
