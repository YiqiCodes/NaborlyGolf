import axios from "axios";
import useSWR from "swr";

const useGetTutorialVideos = () => {
  const fetcher = (url) => axios.get(`${url}`).then((res) => res.data);
  const { data, error } = useSWR(
    `${process.env.REACT_APP_SERVER_URL}/videos/getTutorialVideos`,
    fetcher
  );

  return {
    tutorialVideos: data.videos,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useGetTutorialVideos;
