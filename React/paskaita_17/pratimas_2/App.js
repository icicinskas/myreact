import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import HomePage from "./pages/HomePage";

import mainContext from "./context/mainContext";

function App() {
  const [posts, setPost] = useState([
    {
      image:
        "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
      title: "katinas",
    },
  ]);
  const [color, setColor] = useState("lightgray");
  const [row, setRow] = useState(true);

  const state = {
    posts,
    setPost,
    color,
    setColor,
    row,
    setRow,
  };

  return (
    <mainContext.Provider value={state}>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </mainContext.Provider>
  );
}

export default App;
