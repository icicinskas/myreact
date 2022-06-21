import React, { useState } from "react";

const Sum = () => {
  const [getSum, setSum] = useState(0);

  function addSum1() {
    setSum(getSum + 1);
  }

  function addSum2() {
    setSum(getSum + 2);
  }

  function addSum8() {
    setSum(getSum + 8);
  }

  return (
    <div className="sum">
      <h1>{getSum}</h1>
      <button onClick={addSum1}>1</button>
      <button onClick={addSum2}>2</button>
      <button onClick={addSum8}>8</button>
    </div>
  );
};

export default Sum;
