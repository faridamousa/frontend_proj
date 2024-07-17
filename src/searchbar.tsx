import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";

export const SearchBar = ({ setName }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setName(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="outlined-basic"
        label="Character Name"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};
