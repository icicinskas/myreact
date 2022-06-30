import React, { useState, useEffect } from "react";

const Bars = ({ users }) => {
  const [getPercent, setPercent] = useState(0);
  const [getColor, setColor] = useState("#79cc46");

  useEffect(() => {
    setPercent(users.length * 2);
  }, [users]);

  useEffect(() => {
    if (getPercent > 50) setColor("#e7d24c");
    if (getPercent > 90) setColor("#e7594c");
  }, [getPercent]);

  return (
    <div className="bar-box">
      <div className="bar-border">
        <div
          style={{ background: getColor, height: getPercent + "%" }}
          className="bar"
        ></div>
      </div>
      <div className="bar-title">
        <h2>50 users</h2>
        <h2>0 users</h2>
      </div>
    </div>
  );
};

export default Bars;
