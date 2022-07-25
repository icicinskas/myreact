import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "../features/users";

const Inputs = ({ post, index }) => {
  const userArr = useSelector((state) => state.users.value.posts);
  const dispatch = useDispatch();

  function deleteUser() {
    const newArr = userArr.filter((x, i) => i !== index);
    dispatch(deletePost(newArr));
  }

  return (
    <div className="d-flex g5 wrap-flex ta-c">
      <div className="box p5">
        <img
          style={{ width: "100px", height: "150px" }}
          src={post.image}
          alt="img"
        />
        <h3>{post.username}</h3>
        <div>{post.location}</div>
        <div>{post.gender}</div>
        <div>{post.age}</div>
        <div>{post.color}</div>

        <button onClick={deleteUser}>Delete Post</button>
      </div>
    </div>
  );
};

export default Inputs;
