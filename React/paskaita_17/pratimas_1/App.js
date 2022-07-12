import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

import contex from "./contex/main";

function App() {
  const [color, setColor] = useState({
    colorBlue: "blue",
    colorRed: "red",
  });
  return (
    <contex.Provider value={{ color, setColor }}>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </contex.Provider>
  );
}

export default App;
