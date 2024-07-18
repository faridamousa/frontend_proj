//import "./CharactersPage.css";
import { Box, Button } from "@mui/material";
import { CharacterCard } from "./CharacterCard";
import { Bar } from "./Bar";
import { useState } from "react";
import { useCharacter } from "./hooks/use-fetch-hook-character";

export const CharactersPage = () => {
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const styles = {
    container: {
      display: "flex",
      gap: "8px",
      justifyContent: "space-around",
      flexWrap: "wrap",
    },
  };
  const { data, info } = useCharacter(name, page);

  console.log(data);
  return (
    <>
      <Bar setName={setName} />
      <Box sx={styles.container}>
        {data?.map(
          (item: {
            id: number;
            name: string;
            status: string;
            image: string;
          }) => {
            return (
              <CharacterCard
                key={item.id}
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
          }
        )}
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
