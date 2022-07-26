import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import AllUsersPage from "./pages/AllUsersPage";
import ConversationPage from "./pages/ConversationPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";
import UserPage from "./pages/UserPage";
import Toolbar from "./components/Toolbar";

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  function addNewUser(item) {
    const user = {
      username: item.username,
      password: item.passOne,
      image:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
    };

    setUsers([...users, user]);
  }

  return (
    <div className="app">
      <div className="container">
        <BrowserRouter>
          <Toolbar user={currentUser} setUser={setCurrentUser} />
          <Routes>
            <Route
              path="/"
              element={<LoginPage setUser={setCurrentUser} users={users} />}
            />
            <Route
              path="/register"
              element={<RegisterPage addNewUser={addNewUser} users={users} />}
            />
            <Route
              path="/profile"
              element={
                <ProfilePage user={currentUser} setUser={setCurrentUser} />
              }
            />

            <Route path="/conversation" element={<ConversationPage />} />
            <Route path="/allUsers" element={<AllUsersPage users={users} />} />
            <Route path="/user/:id" element={<UserPage users={users} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
