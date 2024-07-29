import { useState } from "react";
import TextField from "@mui/material/TextField";

export const SearchBar = ({ setName }: { setName: (name: string) => void }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setName(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        sx={{ width: "200px" }}
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
