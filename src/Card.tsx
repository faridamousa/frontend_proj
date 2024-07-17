import { Box } from "@mui/material";
import { Character } from "./interfaces/Character";

export const Card = ({name, status, image }: Character) => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      padding: "20px",
      borderRadius: "20px",
      width: "20%",
      backgroundColor: "#f0f0f0",
    },
  };
  return (
    <Box sx={styles.container}>
      <img src={image} width="50" height="50"></img>
      <p>{name}</p>
      <p>{status}</p>
    </Box>
  );
};
