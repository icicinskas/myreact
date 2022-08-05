import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import mainContext from "./context/mainContext";

import LoginPage from "./pages/LoginPage";

import RegisterPage from "./pages/RegisterPage";

import Toolbar from "./components/Toolbar";

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [conversation, setConversation] = useState([]);
  const [msg, setMsg] = useState([]);

  const state = {
    users,
    setUsers,
    currentUser,
    setCurrentUser,
    conversation,
    setConversation,
    msg,
    setMsg,
  };

  function addNewUser(item) {
    const user = {
      username: item.username,
      password: item.passOne,
      image:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
      id: Date.now(),
    };

    setUsers([...users, user]);
  }

  return (
    <mainContext.Provider value={state}>
      <div className="app">
        <div className="container">
          <BrowserRouter>
            <Toolbar />
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route
                path="/register"
                element={<RegisterPage addNewUser={addNewUser} />}
              />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </mainContext.Provider>
  );
}

export default App;
