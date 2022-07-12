import { useContext } from "react";
import mainContext from "../context/mainContext";
import React from "react";

const Post = ({ item }) => {
  const { color } = useContext(mainContext);

  return (
    <div
      className="post flex-d wrap-flex m10"
      style={{ backgroundColor: color }}
    >
      <div>
        <img src={item.image} alt="img" />
        <h3>{item.title}</h3>
      </div>
    </div>
  );
};

export default Post;
