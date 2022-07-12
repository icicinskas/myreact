import React from "react";
import ShowPosts from "../components/ShowPosts";
import Inputs from "../components/Inputs";
import Toogle from "../components/Toogle";
import Color from "../components/Color";

const HomePage = () => {
  return (
    <div className="home">
      <div className="left d-flex grow3">
        <ShowPosts />
      </div>

      <div className="right d-flex grow1">
        <Inputs />
        <Color />
        <Toogle />
      </div>
    </div>
  );
};

export default HomePage;
