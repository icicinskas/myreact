import React, { useState } from "react";

const SumSum = () => {
  const nums = [51, 8, 28, 4, 9, 36, 5, 8, 44, 2, 9, 52, 8, 4, 2, 23];

  const [getSum, setSum] = useState(0);

  function addSum(number) {
    setSum(getSum + number);
  }

  return (
    <div className="sum">
      <h1>{getSum}</h1>
      {nums.map((x) => (
        <button onClick={() => addSum(x)}>{x}</button>
      ))}
    </div>
  );
};

export default SumSum;
