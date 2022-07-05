import React, { useState, useEffect } from "react";

import movies from "../assets/movies.json";
import Cards from "./Cards";
import Favorites from "./CardsFavorites";

const Main = () => {
  const [getMain, setMain] = useState(true);
  const [getFavorites, setFavorites] = useState(false);
  const [getFav, setFav] = useState([]);

  function showFav() {
    if (getFav.length === 1) return;
    setFavorites(true);
    setMain(false);
  }

  function showMain() {
    setMain(true);
    setFavorites(false);
  }

  console.log(getFav);

  return (
    <div className="main">
      <nav className="nav">
        <button onClick={() => showMain()}>Main</button>
        <button onClick={() => showFav()}>Favorites</button>
      </nav>
      <div className="cards">
        {getMain && <Cards getFav={getFav} setFav={setFav} movies={movies} />}
        {getFavorites && <Favorites getFav={getFav} setFav={setFav} />}
      </div>
    </div>
  );
};

export default Main;
