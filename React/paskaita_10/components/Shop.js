import React, { useState } from "react";
import Table from "./Table";

const Shop = ({ getWeapons, setWeapons }) => {
  const [getSwitch, setSwitch] = useState(false);

  return (
    <div className="shop">
      <h1>Shop</h1>
      <div className="shop-top">
        <div className="shop-btn">
          <button onClick={() => setSwitch(false)}>Weapons</button>
          <button onClick={() => setSwitch(true)}>Potions</button>
        </div>

        <div className="table">
          <Table getWeapons={getWeapons} />
        </div>
      </div>

      {getSwitch && trader.weapons(x => )}
      {getSwitch}
    </div>
  );
};

export default Shop;
