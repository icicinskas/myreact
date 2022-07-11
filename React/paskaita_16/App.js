import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [duck, setDuck] = useState([]);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const divArr = [];

    for (let i = 0; i < 100; i++) divArr.push(i);
    setDuck(divArr);
  }, []);

  function show(index) {
    setSelected(index);
    console.log(index);
  }

  return (
    <div className="app">
      {duck.map((x) => (
        <div
          className={x === selected ? "selected" : ""}
          onClick={() => {
            show(x);
          }}
          key={x}
        ></div>
      ))}
    </div>
  );
}

export default App;
