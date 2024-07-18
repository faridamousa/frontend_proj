import { useEffect, useState } from "react";
import axios from "axios";
export const useFavorites = () => {
  const [Favorites, setFavorites] = useState<number[]>([]);
  useEffect(() => {
    const favoritesFromStorage = localStorage.getItem("favorites");

    if (favoritesFromStorage) {
      const parsedFavorites = JSON.parse(favoritesFromStorage);
      setFavorites(parsedFavorites);
    }
  }, []);
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    if (Favorites.length !== 0) {
      const ApiUrl = `https://rickandmortyapi.com/api/character/${Favorites}`;

      axios
        .get(ApiUrl)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  });
  return {
    data,
    // info,
  };
};
