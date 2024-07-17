import { useEffect, useState } from "react";
import { Character } from "../interfaces/Character";
import axios from "axios";
export const useFetch = (apiUrl: string) => {
  const [data, setData] = useState<Character[]>([]);
  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [apiUrl]);
  return {
    data,
  };
};
