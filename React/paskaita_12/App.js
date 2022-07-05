import "./App.css";
import React from "react";
import ProfilePage from "./pages/ProfilePage";
import ContantsPage from "./pages/ContantsPage";
import GalleryPage from "./pages/GalleryPage";
import MainPage from "./pages/MainPage";
import Toolbar from "./components/Toolbar";
import Aside from "./components/Aside";
import Footer from "./components/Footer";

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

            <Route path="/contants" element={<ContantsPage />} />

            <Route path="gallery" element={<GalleryPage />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
