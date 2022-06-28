import React, { useEffect, useState, useRef } from "react";

const Bars = () => {
  const [getLetter, setLetter] = useState(0);
  const [getColor, setColor] = useState("green");
  const inp = useRef();
  function addLetter() {
    setLetter(inp.current.value.length);
  }

  useEffect(
    (addColor) => {
      if (getLetter > 100 && getLetter < 180) setColor("yellow");
      if (getLetter > 180) setColor("red");
    },
    [getLetter]
  );

  return (
    <div>
      <div className="bar-box">
        <div
          style={{ background: getColor, width: getLetter }}
          className="bar"
        ></div>
      </div>

      <div>
        <h2>Count:{getLetter} </h2>
      </div>

      <div>
        <input
          onChange={addLetter}
          type="text"
          placeholder="Enter some text"
          ref={inp}
        />
      </div>
    </div>
  );
};

export default Bars;
