//import "./CharactersPage.css";
import { Box, Button } from "@mui/material";
import { CharacterCard } from "./Card";
import { Bar } from "./Bar";
import { useState } from "react";
import { useFetch } from "./hooks/use-fetch-hook";

export const CharactersPage = () => {
  const [page, setPage] = useState(1);
  const styles = {
    container: {
      display: "flex",
      gap: "8px",
      justifyContent: "space-around",
      flexWrap: "wrap",
    },
  };
  const [name, setName] = useState("");
  const apiUrl = `https://rickandmortyapi.com/api/character/?page=${page}&name=${name}`;
  const { data, info } = useFetch(apiUrl);

  return (
    <>
      <Bar setName={setName} />
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
