import React, { useState } from "react";

const building = [
  "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1598228723793-52759bba239c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
];

const Push = () => {
  const [getBuiding, setBuilding] = useState([]);

  function addImg(link) {
    let items = [...getBuiding];
    items.push();
    setBuilding(items);
  }

  return (
    <div>
      <div className="array">
        {getBuiding.map((x) => (
          <img src={x} alt="" />
        ))}
      </div>
      <div className="img">
        {building.map((x, i) => (
          <img onClick={() => addImg(x)} key={i} src={x} alt="" />
        ))}
      </div>
    </div>
  );
};

export default Push;
