import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserPage = () => {
  return (
    <div className="user">
      <div className="img">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnPGqX4s6HDBoVTLwIhy3fFmdxvMiDIfUtdA&usqp=CAU"
          alt=""
        />
      </div>
      <div className="reg-btn">
        <button>Change your avatar</button>
      </div>
    </div>
  );
};

export default UserPage;
