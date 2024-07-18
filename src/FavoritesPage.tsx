import { CharacterCard } from "./CharacterCard";
// import { useState } from "react";
import { useFavorites } from "./hooks/use-fetch-hook-favorites";
import { Bar } from "./Bar";
import { Box } from "@mui/material";

export const FavoritesPage = () => {
  // const [page, setPage] = useState(1);
  const styles = {
    container: {
      display: "flex",
      gap: "8px",
      justifyContent: "space-around",
      flexWrap: "wrap",
    },
  };

  var { data } = useFavorites();
  if (data.length === undefined) {
    data = [data];
  }

  return (
    <>
      <Bar setName={undefined} />

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
      {/* <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Reverse Page
      </Button>
      <Button onClick={() => setPage(page + 1)} disabled={page === info}>
        Next Page
      </Button> */}
    </>
  );
};
