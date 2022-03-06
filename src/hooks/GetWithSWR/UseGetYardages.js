import axios from "axios";
import useSWR from "swr";

// Recoil
import { useRecoilValue } from "recoil";
import userLoginCredentialsAtom from "../../recoil/atoms/UserLoginCredentialsAtom";

const useGetYardages = () => {
  const fetcher = (url) => axios.get(`${url}`).then((res) => res.data);
  const token = useRecoilValue(userLoginCredentialsAtom);
  const { data, error } = useSWR(
    `${process.env.REACT_APP_SERVER_URL}/yardages/${token}`,
    fetcher
  );

  return {
    yardages: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useGetYardages;
