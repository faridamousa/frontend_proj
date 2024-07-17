import TextField from "@mui/material/TextField";
import { useState } from "react";

export const SearchBar = () => {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submit action
    const url = `https://rickandmortyapi.com/api/character/?name=${name}`;
    console.log(url); // For demonstration, replace this with your actual navigation logic
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};
