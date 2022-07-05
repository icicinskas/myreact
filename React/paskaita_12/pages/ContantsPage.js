import React, { useState, useEffect } from "react";

const ContantsPage = () => {
  const [contant, setContant] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setContant(data);
      });
  });

  return (
    <div className="contant">
      {contant.map((x) => (
        <div className="contant-box">
          <h3>{x.title}</h3>
          <p>{x.body}</p>
        </div>
      ))}
    </div>
  );
};

export default ContantsPage;
