import React from "react";

const RightSide = ({ users }) => {
  return (
    <div className="box table">
      {users.map((x, i) => (
        <div
          className="user"
          style={{
            backgroundColor: x.gender === "male" ? "lightblue" : "pink",
          }}
          key={i}
        >
          <img src={x.foto} alt="" />
          <div className="name">
            <h3>{x.user}</h3>
            <div>{x.gender}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default RightSide;
