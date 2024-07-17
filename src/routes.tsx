import { Route, Routes } from "react-router-dom";
// import { App } from "./App";
import { Home } from "./Home";
import { CharactersPage } from "./CharactersPage";
import { CharacterDetails } from "./CharacterDetails";
import { FavoritesPage } from "./FavoritesPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/characters" element={<CharactersPage />} />
      <Route path="/character/:id" element={<CharacterDetails />} />
      <Route path="/favorites" element={<FavoritesPage />} />
    </Routes>
  );
};
