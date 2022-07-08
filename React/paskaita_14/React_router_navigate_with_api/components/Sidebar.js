import React from 'react';
import {Link} from "react-router-dom";

const Sidebar = () => {
    return (
        <div>
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                <Link to="/about">about</Link>
            </div>
        </div>
    );
};

export default Sidebar;