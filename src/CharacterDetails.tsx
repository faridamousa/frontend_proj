import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Character } from "./interfaces/Character";
import axios from "axios";
import { Box, Typography } from "@mui/material";

export const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState<Character>();

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => {
        setCharacter(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  return (
    <Box>
      {character ? (
        <>
          <Typography variant="h4">{character.name}</Typography>
          <img src={character.image} alt={character.name} />
          <Typography>Status: {character.status}</Typography>
          <Typography>Species: {character.species}</Typography>
          <Typography>Gender: {character.gender}</Typography>
          <Typography>Origin: {character.origin.name}</Typography>
          <Typography>Location: {character.location.name}</Typography>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </Box>
  );
};