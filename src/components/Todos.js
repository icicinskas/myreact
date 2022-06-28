import React, { useState, useEffect } from "react";
import TodosMap from "./TodosMap";

const Todos = () => {
  const [getData, setData] = useState([{}]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div>
      {getData.map((x, i) => (
        <TodosMap item={x} key={i} />
      ))}
    </div>
  );
};

export default Todos;
