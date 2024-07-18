import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const useFavorites = () => {
  async function getData() {
    const favoritesFromStorage = localStorage.getItem("favorites");

    const parsedFavorites = JSON.parse(favoritesFromStorage!);
    if (favoritesFromStorage && parsedFavorites.length !== 0) {
      const ApiUrl = `https://rickandmortyapi.com/api/character/[${parsedFavorites}]`;

      const response = await axios.get(ApiUrl).catch((error) => {
        console.error("Error fetching data:", error);
      });

      return response;
    }
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => getData(),
  });

  return [data, isLoading, isError];
};
