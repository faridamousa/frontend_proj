import {
  AppBar,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { SearchBar } from "./searchbar";

const navItems = ["Home", "Characters", "Favorites"];

export const Bar = ({ setName }: { setName: (name: string) => void }) => {
  return (
    <AppBar
      position="sticky"
      sx={{
        alignItems: "flex-start",
        backgroundImage: "linear-gradient(to right,  #260656, #51AFF7)",
      }}
    >
      <List sx={{ display: "flex", flexDirection: "row" }}>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton href={`/${item.toLowerCase()}`}>
              <ListItemText primary={item} sx={{ textAlign: "center" }} />
            </ListItemButton>
          </ListItem>
        ))}
        <SearchBar setName={setName} />
      </List>
    </AppBar>
  );
};
