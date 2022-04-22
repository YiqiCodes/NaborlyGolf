import axios from "axios";
import useSWR from "swr";

const useGetCourses = () => {
  const fetcher = (url) => axios.get(`${url}`).then((res) => res.data);
  const { data, error } = useSWR(
    `${process.env.REACT_APP_SERVER_URL}/courses`,
    fetcher
  );

  return {
    courses: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useGetCourses;
