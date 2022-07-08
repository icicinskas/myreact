import React from "react";
import { Link } from "react-router-dom";

const Toolbar = () => {
  return (
    <div className="toolbar">
      <div>
        <Link to="/"> &lArr; </Link>
      </div>
    </div>
  );
};

export default Toolbar;
