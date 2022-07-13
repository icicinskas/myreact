import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AllPostPage from "./pages/AllPostPage";
import CreatePostPage from "./pages/CreatePostPage";
import PostPage from "./pages/PostPage";

import mainContext from "./context/mainContext";
import Toolbar from "./components/Toolbar";

function App() {
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [commets, setComments] = useState([]);
  const [valited, setValited] = useState(false);

  const state = {
    error,
    setError,
    users,
    setUsers,
    posts,
    setPosts,
    commets,
    setComments,
    valited,
    setValited,
  };

  function addNewUser(item) {
    const user = {
      email: item.email,
      password: item.passOne,
    };

    setUsers([...users, user]);
  }

  return (
    <mainContext.Provider value={state}>
      <div className="app">
        <BrowserRouter>
          <Toolbar />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
              path="/register"
              element={<RegisterPage addNewUser={addNewUser} />}
            />
            <Route path="/allPosts" element={<AllPostPage />} />
            <Route path="/createPost" element={<CreatePostPage />} />
            <Route path="/post/:id" element={<PostPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </mainContext.Provider>
  );
}

export default App;
