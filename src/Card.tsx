import { Card } from "@mui/material";
import { Character } from "./interfaces/Character";
import { useNavigate } from "react-router-dom";

export const CharacterCard = ({ name, status, image, id }: Character) => {
  const navigate = useNavigate();
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
    <Card sx={styles.container} onClick={() => navigate(`/character/${id}`)}>
      <img src={image} width="50" height="50"></img>
      <p>{name}</p>
      <p>{status}</p>
    </Card>
  );
};
