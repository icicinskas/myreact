import React from "react";

const ColorJs = ({ color, setColor }) => {
  function countArr(arr) {
    let counter = 0;
    arr.map((x) => (counter += x.length));
    return counter;
  }

  return (
    <div
      className="bgBox"
      onClick={() => setColor(color.hex)}
      style={{ backgroundColor: color.hex }}
    >
      <div>{color.name}</div>
      <div>{countArr(color.families)}</div>
      <div>{color.hex}</div>
    </div>
  );
};

export default ColorJs;
