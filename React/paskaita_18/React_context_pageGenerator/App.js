import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

import mainContext from "./context/mainContext";

function App() {
  const [styles, setStyles] = useState({
    toolbarColor: "white",
    toolbarPadding: "10px",
    headerImage: "",
    headerText: "header text here",
    headerHeight: "300px",
    sidebar: true,
    mainRow: true,
    mainColor: "white",
  });

  const [toolbarLinks, setToolbarLinks] = useState([]);
  const [posts, setPosts] = useState([]);

  const values = {
    styles,
    setStyles,
    toolbarLinks,
    setToolbarLinks,
    posts,
    setPosts,
  };

  return (
    <mainContext.Provider value={values}>
      <div className="App d-flex ">
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
