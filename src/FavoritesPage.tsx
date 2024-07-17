import { Character } from "./interfaces/Character";
import { CharacterCard } from "./CharacterCard";
import { useState, useEffect } from "react";
import { useFetch } from "./hooks/use-fetch-hook";
import { Bar } from "./Bar";
import { Box, Button } from "@mui/material";
export const FavoritesPage = () => {
  const [page, setPage] = useState(1);
  const [Favorites, setFavorites] = useState<number[]>([]);
  const styles = {
    container: {
      display: "flex",
      gap: "8px",
      justifyContent: "space-around",
      flexWrap: "wrap",
    },
  };
  useEffect(() => {
    const favoritesFromStorage = localStorage.getItem("favorites");
    if (favoritesFromStorage) {
      const parsedFavorites = JSON.parse(favoritesFromStorage);
      setFavorites(parsedFavorites);
    }
  });
  const ApiUrl = `https://rickandmortyapi.com/api/character/${Favorites}`;
  const { data, info } = useFetch(ApiUrl);
  return (
    <>
      <Bar setName={undefined} />
      <Box sx={styles.container}>
        {data.map((item) => {
          return (
            <CharacterCard
              id={item.id}
              name={item.name}
              status={item.status}
              image={item.image}
              species={""}
              type={""}
              gender={""}
              origin={{
                name: "",
                url: "",
              }}
              location={{
                name: "",
                url: "",
              }}
              episode={[]}
              url={""}
              created={""}
            />
          );
        })}
      </Box>
      <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Reverse Page
      </Button>
      <Button onClick={() => setPage(page + 1)} disabled={page === info}>
        Next Page
      </Button>
    </>
  );
};
