import React from "react";

const Form = ({ post }) => {
  const bgColor = {
    backgroundColor: "lightblue",
    border: "5px solid black",
  };

  return (
    <div className="post-user" style={bgColor}>
      <img src={post.image} alt="" />
      <h2>{post.title}</h2>
      <h3>{post.username}</h3>
      <div>{post.description}</div>
    </div>
  );
};

export default Form;
