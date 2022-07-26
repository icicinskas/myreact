import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Toolbar = ({ users, setUser }) => {
  const nav = useNavigate();

  function logout() {
    setUser(null);
    nav("/");
  }

  return (
    <div className="toolbar d-flex g20 space-btw">
      {!users ? (
        <div className="d-flex g20">
          <Link to="/">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      ) : (
        <div className="d-flex toolbar-main">
          <div className="d-flex g50">
            <Link to="/profile">Profile</Link>
            <Link to="/allUsers">All posts</Link>
            <Link to="/conversation">Convarsations</Link>
          </div>

          <button onClick={logout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Toolbar;
