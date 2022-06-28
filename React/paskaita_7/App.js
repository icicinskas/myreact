import "./App.css";
import React from "react";
import Bars from "./components/Bars";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <Bars />
      <Todos />
    </div>
  );
}

export default App;
