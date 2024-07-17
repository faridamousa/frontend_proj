import { useEffect, useState } from "react";
import { Character } from "../interfaces/Character";
import axios from "axios";
export const useFetch = (apiUrl: string) => {
  const [data, setData] = useState<Character[]>([]);
  const [info, setInfo] = useState();
  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data.results);
        setInfo(response.data.info.pages);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [apiUrl]);
  return {
    data,
    info,
  };
};
