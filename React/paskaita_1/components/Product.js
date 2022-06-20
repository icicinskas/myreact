import React, { useReducer } from "react";

const Product = () => {
  const user = {
    photo:
      "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png",
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  };

  return (
    <div className="product d-flex">
      <img src={user.photo} alt="" />
      <div>
        <h3>{useReducer.name}</h3>
      </div>
    </div>
  );
};

export default Product;
