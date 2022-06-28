import "./App.css";
import { useState } from "react";
import Game from "./components/Game";
import Push from "./components/Push";
import Post from "./components/Post";

function App() {
  return (
    <div className="App">
      <Game />
      <Push />
      {/* <Post /> */}
    </div>
  );
}

export default App;
