import React, { setState } from "react";

const Shop = (stats) => {
  const buildings = [
    {
      name: "house",
      price: {
        gold: 10,
        stone: 20,
        wood: 50,
      },
      image:
        "https://thumbs.dreamstime.com/b/house-pixel-art-isolated-home-pixels-white-background-136637846.jpg",
    },
    {
      name: "castle",
      price: {
        gold: 100,
        stone: 200,
        wood: 500,
      },
      image:
        "https://images.cdn4.stockunlimited.net/preview1300/pixel-castle_2021418.jpg",
    },
    {
      name: "tent",
      price: {
        gold: 5,
        stone: 5,
        wood: 10,
      },
      image: "https://preview.pixlr.com/images/800wm/100/1/1001509056.jpg",
    },
  ];
  function buyItem(price) {
    if (price.gold > stats.getGold) console.log("no gold");
    if (price.wood > stats.getWood) console.log("no gold");
    if (price.stone > stats.getStone) console.log("no gold");

    console.log(stats.getGold);
    console.log(stats.getStone);
    console.log(price);
    console.log(stats);
  }

  return (
    <div className="shopImage">
      <h1>SHOP</h1>
      <div className="d-flex space-btw shopImg">
        {buildings.map((x, i) => (
          <div className="buildings" key={i} onClick={() => buyItem(x.price)}>
            <img src={x.image} alt="" />
            <div key={i} className="box">
              <span>GOLD: {x.price.gold}</span>
              <span>WOOD: {x.price.wood}</span>
              <span>STONE: {x.price.stone}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
