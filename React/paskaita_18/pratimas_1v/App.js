import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import HomePage from "./pages/HomePage";

import mainContext from "./context/mainContext";

function App() {
  const [toolbarColor, setToolbarColor] = useState("lightgray");
  const [mainBgColor, setMainBgColor] = useState("lightgray");
  const [toolbarPad, setToolbarPad] = useState(5);
  const [tolbarLinks, setToolbarLinks] = useState(null);
  const [headerBgImg, setHeaderBgImg] = useState(
    "https://images.unsplash.com/photo-1654696623123-3f4dffe33a80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
  );
  const [headerTxt, setHeaderTxt] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, commodi obcaecati? Doloribus, nemo deleniti cum culpa odio vero temporibus officiis"
  );
  const [headerHeight, setHeaderHeight] = useState(200);
  const [sidebar, setSidebar] = useState(true);
  const [posts, setPost] = useState([
    {
      image:
        "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
      title: "Katinas",
    },
  ]);
  const [row, setRow] = useState(true);
  const [link, setLink] = useState([1, 2, 3]);

  const state = {
    toolbarColor,
    setToolbarColor,
    mainBgColor,
    setMainBgColor,
    toolbarPad,
    setToolbarPad,
    tolbarLinks,
    setToolbarLinks,
    headerBgImg,
    setHeaderBgImg,
    headerTxt,
    setHeaderTxt,
    headerHeight,
    setHeaderHeight,
    sidebar,
    setSidebar,
    posts,
    setPost,
    row,
    setRow,
    link,
    setLink,
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
