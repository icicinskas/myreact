import React from "react";

const FakeStore = ({ item }) => {
  let bg = "";

  if (item.price < 20) bg = "green";

  if (item.price >= 20 && item.price <= 50) bg = "yellow";

  if (item.price > 50) bg = "red";

  return (
    <div style={{ backgroundColor: bg }}>
      <img src={item.image} alt="img" />
      <h4>{item.title}</h4>
      <h3>{item.price}</h3>
    </div>
  );
};

export default FakeStore;
