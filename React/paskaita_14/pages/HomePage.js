import React from "react";
import { useParams } from "react-router-dom";

const HomePage = () => {
  const { color } = useParams();

  return (
    <div className="div-box">
      <div style={{ background: color }} className="box"></div>
      <div style={{ background: "#" + color }} className="box"></div>
    </div>
  );
};

export default HomePage;
