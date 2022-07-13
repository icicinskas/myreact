import React from "react";
import Header from "../components/Header";
import Inputs from "../components/Inputs";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import Toolbar from "../components/Toolbar";

const HomePage = () => {
  return (
    <div className="home d-flex">
      <Inputs />

      <div className="right d-flex fl-col grow3 m10 g5">
        <Toolbar />
        <Header />
        <div className="box d-flex g5">
          <Sidebar />
          <Main />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
