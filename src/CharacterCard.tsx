import { Card } from "@mui/material";
import { Character } from "./interfaces/Character";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";

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
  const [favorites, setFavorites] = useState<number[]>([]);
  const handleFavoriteClick = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation();
    const favoritesFromStorage = localStorage.getItem("favorites");
    let favoritesArray = favoritesFromStorage
      ? JSON.parse(favoritesFromStorage)
      : [];
    if (!favoritesArray.includes(id)) {
      favoritesArray.push(id);
    } else {
      favoritesArray = favoritesArray.filter(
        (favorite: number) => favorite !== id
      );
    }
    localStorage.setItem("favorites", JSON.stringify(favoritesArray));
    setFavorites(favoritesArray);
    
  };

  // <IconButton onClick={handleFavoriteClick}>
  //   <FavoriteIcon />
  // </IconButton>;
  return (
    <Card sx={styles.container} onClick={() => navigate(`/character/${id}`)}>
      <img src={image} width="50" height="50"></img>
      <p>{name}</p>
      <p>{status}</p>

      <IconButton onClick={handleFavoriteClick}>
        <FavoriteIcon />
      </IconButton>
    </Card>
  );
};
