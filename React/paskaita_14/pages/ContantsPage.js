import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ContantsPage = () => {
  const nav = useNavigate();
  const [contant, setContant] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setContant(data);
      });
  }, []);

  function goToPost(id) {
    nav("/post/" + id);
    console.log(id);
  }

  return (
    <div className="contant">
      {contant.map((x, i) => (
        <div key={i} onClick={() => goToPost(x.postId)} className="contant-box">
          <h3>{x.name}</h3>
          <div>{x.email}</div>
          <p>{x.body}</p>
        </div>
      ))}
    </div>
  );
};

export default ContantsPage;
