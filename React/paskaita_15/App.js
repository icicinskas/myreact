import "./App.css";
import React, { useState } from "react";
import UserPage from "./pages/UserPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/ReristerPage";
import Toolbar from "./components/Toolbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [valid, setValid] = useState(false);

  return (
    <div className="app">
      <BrowserRouter>
        <Toolbar valid={setValid} />

        <div className="container">
          <Routes>
            <Route
              path="/register"
              element={<RegisterPage valid={setValid} />}
            />

            <Route path="/login" element={<LoginPage />} />

            <Route path="/user/" element={<UserPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
