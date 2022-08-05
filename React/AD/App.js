import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import mainContext from "./context/mainContext";

import AllUsersPage from "./pages/AllUsersPage";
import ConversationPage from "./pages/ConversationPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";
import UserPage from "./pages/UserPage";
import Toolbar from "./components/Toolbar";
import SingleChatPage from "./pages/SingleChatPage";

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
              <Route path="/profile" element={<ProfilePage />} />

              <Route path="/conversation" element={<ConversationPage />} />
              <Route path="/allUsers" element={<AllUsersPage />} />
              <Route path="/user/:id" element={<UserPage />} />
              <Route path="/chat/:id" element={<SingleChatPage />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </mainContext.Provider>
  );
}

export default App;
