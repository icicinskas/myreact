import React from "react";
import "./Hero.css";

const Hero = ({ title, subtitle, color }) => (
  <div style={{ background: color }} className={color}>
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
  </div>
);

export default Hero;
