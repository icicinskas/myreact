import React, { useState } from "react";

function TodosMap({ item }) {
  const [getColor, setColor] = useState(item.completed);

  //   const color = item.completed ? "green" : "red";

  return (
    <div
      style={{ background: getColor ? "green" : "red" }}
      className="todo"
      onClick={() => setColor(!getColor)}
    >
      {item.title}
    </div>
  );
}

export default TodosMap;
