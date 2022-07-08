import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="login">
      <div className="input">
        <input type="text" placeholder="Enter email" />
        <input type="text" placeholder="Enter password" />
      </div>
      <div className="reg-btn">
        <button>Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
