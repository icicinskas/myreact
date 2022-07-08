import React from 'react';
import {Link, useNavigate} from "react-router-dom"

const Toolbar = ({user, setUser}) => {

    const nav = useNavigate()

    function logout() {
        setUser(null)
        nav('/')
    }


    return (
        <div className="toolbar d-flex space-btw">
            <div></div>

            {!user ?
                <div>
                    <Link to="/">Login</Link>
                    <Link to="/register">Register</Link>
                </div> :

                <div>
                    <Link to="/profile">Profile</Link>
                    <Link to="/createPost">Create Post</Link>
                    <Link to="/allPosts">All posts</Link>
                    <button onClick={logout}>Logout</button>
                </div>
            }

        </div>
    );
};

export default Toolbar;