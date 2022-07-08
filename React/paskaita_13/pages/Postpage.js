import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PostPage = () => {
  const { id } = useParams();

  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
      });
  }, []);

  return (
    <div className="profile d-flex">
      <h1>{id}</h1>
      {post && (
        <div>
          <h3>{post.title}</h3>
          <div>{post.body}</div>
        </div>
      )}
    </div>
  );
};

export default PostPage;
