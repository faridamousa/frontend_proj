import { useEffect, useState } from "react";
import axios from "axios";

export const useCharacter = (name:string, page: number) => {
  const [data, setData] = useState<any>([]);
  const [info, setInfo] = useState(null);
  const apiUrl = `https://rickandmortyapi.com/api/character/?page=${page}&name=${name}`;
  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        console.log("LOG", response);
        setData(response.data.results);
        setInfo(response.data.info?.pages);
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
