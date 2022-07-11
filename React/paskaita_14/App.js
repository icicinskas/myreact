import "./App.css";
import React from "react";
import ProfilePage from "./pages/ProfilePage";
import ContantsPage from "./pages/ContantsPage";
import GalleryPage from "./pages/GalleryPage";
import MainPage from "./pages/MainPage";
import Toolbar from "./components/Toolbar";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import PostPage from "./pages/Postpage";
import AlbumPage from "./pages/AlbumPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Toolbar />
        <div className="container over">
          <Aside />
          <Routes>
            <Route path="/" element={<MainPage />} />

            <Route path="/profile" element={<ProfilePage />} />

            <Route path="/user/:userName" element={<UserPage />} />

            <Route path="/contants" element={<ContantsPage />} />

            <Route path="/post/:id" element={<PostPage />} />

            <Route path="/gallery" element={<GalleryPage />} />

            <Route path="/album/:id" element={<AlbumPage />} />

            <Route path="/home/:color" element={<HomePage />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;