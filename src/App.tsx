import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { CharactersPage } from "./CharactersPage";
// import Details from './Details';

export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" Component={Home} />
        <Route path="/characters" Component={CharactersPage} />
        {/* <Route path="/details" Component={Details} /> */}
      </Routes>
    </Router>
  );
};
