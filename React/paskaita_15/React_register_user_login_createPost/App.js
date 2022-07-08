import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import Toolbar from "./components/Toolbar";
import SimglePostPage from "./pages/SimglePostPage";
import AllPostsPage from "./pages/AllPostsPage";
import {useState} from "react";
import CreatePostPage from "./pages/CreatePostPage";

function App() {
    const [users, setUsers] = useState([])
    const [currentUser, setCurrentUser] = useState(null)
    const [posts, setPosts] = useState([])

    function addNewUser(item) {
        const user = {
            email: item.email,
            password: item.passOne,
            image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
        }

        setUsers([...users, user])
    }

    return (
        <div className="App">

                <div className="container">
                    <BrowserRouter>
                        <Toolbar user={currentUser} setUser={setCurrentUser}/>
                        <Routes>
                            <Route path="/" element={<LoginPage setUser={setCurrentUser} users={users}/>} />
                            <Route path="/register" element={<RegisterPage addNewUser={addNewUser}/>}/>
                            <Route path="/profile" element={<ProfilePage user={currentUser} setUser={setCurrentUser}/>}/>

                            <Route path="/createPost" element={<CreatePostPage user={currentUser} posts={posts} setPosts={setPosts}/>}/>
                            <Route path="/allPosts" element={<AllPostsPage posts={posts}/>}/>
                            <Route path="/single/:id" element={<SimglePostPage posts={posts} users={users}/>}/>
                        </Routes>
                    </BrowserRouter>

                </div>
        </div>
    );
}

export default App;


// create register and login pages
// before using app, user should reg and login
// use mail validator on register
// logged user can make reservation on days with his name
// when other user logs in, he can see reservations by other users
