//import "./CharactersPage.css";
import { Box, Button } from "@mui/material";
import { Card } from "./Card";
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
    },
  };
  const [name, setName] = useState("");
  const apiUrl = `https://rickandmortyapi.com/api/character/?page=${page}&name=${name}`;
  const { data } = useFetch(apiUrl);


  return (
    <>
      <Bar setName={setName} />
      <Box sx={styles.container}>
        {data.map((item) => {
          return (
            <Card
              id={item.id}
              name={item.name}
              status={item.status}
              image={item.image}
            />
          );
        })}
        <Button onClick={() => setPage(page + 1)}>Next</Button>
      </Box>
    </>
  );
};
