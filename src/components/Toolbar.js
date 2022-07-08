import React from "react";
import { Link } from "react-router-dom";

const Toolbar = (setValid) => {
  return (
    <div className="toolbar">
      {setValid ? (
        <div className="toolbar-box">
          <Link to="/login">Posts</Link>
          <Link to="/register"> User </Link>

          <div className="toolbar-box">
            <Link to="/login">LOGOUT</Link>
          </div>
        </div>
      ) : (
        <div className="toolbar-box">
          <Link to="/login">LOGIN</Link>
          <Link to="/register"> Register </Link>
        </div>
      )}
    </div>
  );
};

export default Toolbar;
