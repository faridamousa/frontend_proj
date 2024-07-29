import { CharacterCard } from "./CharacterCard";
import { useFavorites } from "./hooks/use-fetch-hook-favorites-query";
import { Bar } from "./Bar";
import { Box } from "@mui/material";

export const FavoritesPage = () => {
  const styles = {
    container: {
      display: "flex",
      gap: "8px",
      justifyContent: "space-around",
      flexWrap: "wrap",
    },
  };

  const [data, , ] = useFavorites();

  return (
    <>
      <Bar setName={() => {}} />
      <Box sx={styles.container}>
        {typeof data !== 'boolean' && data?.data?.length > 0 &&
          data?.data?.map(
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
    </>
  );
};
