import React, { useState } from "react";
import Shop from "./Shop";

const Game = () => {
  const [getGold, setGold] = useState(0);
  const [getWood, setWood] = useState(0);
  const [getStone, setStone] = useState(0);

  const stats = {
    getGold,
    getWood,
    getStone,
    setGold,
    setWood,
    setStone,
  };

  return (
    <div>
      <nav>
        <h2>Gold: {getGold}</h2>
        <h2>Wood: {getWood}</h2>
        <h2>Stone: {getStone}</h2>
      </nav>
      <section>
        <img
          onClick={() => setGold(getGold + 100)}
          src="https://img.freepik.com/free-vector/pile-gold-bullion-with-pixel-art-style_475147-541.jpg?w=2000"
          alt=""
        />
        <img
          onClick={() => setWood(getWood + 100)}
          src="https://img.freepik.com/free-vector/wood-log-pixel-art-style_475147-1390.jpg"
          alt=""
        />
        <img
          onClick={() => setStone(getStone + 100)}
          src="https://img.freepik.com/free-vector/sharp-stone-pixel-art-style_475147-1450.jpg"
          alt=""
        />
      </section>

      <Shop stats={stats} />
    </div>
  );
};

export default Game;
