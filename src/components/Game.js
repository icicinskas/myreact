import React, { useState } from "react";

const Game = () => {
  const [getGold, setGold] = useState(0);
  const [getWood, setWood] = useState(0);
  const [getStone, setStone] = useState(0);

  function addGold() {
    setGold(getGold + 20);
  }

  function addWood() {
    setWood(getWood + 20);
  }

  function addStone() {
    setStone(getStone + 20);
  }

  return (
    <div>
      <nav>
        <h2>Gold: {getGold}</h2>
        <h2>Wood: {getWood}</h2>
        <h2>Stone: {getStone}</h2>
      </nav>
      <section>
        <img
          onClick={addGold}
          src="https://img.freepik.com/free-vector/pile-gold-bullion-with-pixel-art-style_475147-541.jpg?w=2000"
          alt=""
        />
        <img
          onClick={addWood}
          src="https://img.freepik.com/free-vector/wood-log-pixel-art-style_475147-1390.jpg"
          alt=""
        />
        <img
          onClick={addStone}
          src="https://img.freepik.com/free-vector/sharp-stone-pixel-art-style_475147-1450.jpg"
          alt=""
        />
      </section>
    </div>
  );
};

export default Game;
