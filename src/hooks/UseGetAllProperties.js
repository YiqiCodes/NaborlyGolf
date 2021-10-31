import axios from "axios";
import useSWR from "swr";

// Initial GET Hook setup
// Need to create route & server via node/express
const useGetAllProperties = () => {
  const fetcher = (url) => axios.get(`${url}`).then((res) => res.data);

  const { data, error } = useSWR(`/get_all_properties`, fetcher);

  return {
    allProperties: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useGetAllProperties;
