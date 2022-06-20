import React from "react";

const Colors = ({ items }) => {
  return (
    <div style={{ backgroundColor: items.hex }}>
      <h1>{items.name}</h1>
    </div>
  );
};

export default Colors;
