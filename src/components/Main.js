import React, { useState } from "react";
import Bars from "./Bars";
import RightSide from "./RightSide";
import Footer from "./Footer";

const Main = () => {
  const [getUser, setUser] = useState([]);

  return (
    <div className="app-div">
      <div className="users-box">
        <Bars users={getUser} />
        <RightSide users={getUser} />
      </div>

      <Footer getUser={getUser} setUser={setUser} />
    </div>
  );
};

export default Main;
