import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AlbumPage from "./pages/AlbumPage";
import ProfilePage from "./pages/ProfilePage";

function App() {

    return (

        <div className="App">

            <div className="d-flex">
                <BrowserRouter>

                        <Routes>
                            <Route path="/" element={<HomePage/>}/>
                            <Route path="/album/:id" element={<AlbumPage/>}/>
                            <Route path="/profile/:id" element={<ProfilePage/>}/>
                        </Routes>
                </BrowserRouter>
            </div>


        </div>
    );
}

export default App;