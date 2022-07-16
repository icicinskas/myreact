import {useContext} from 'react';
import {Link} from "react-router-dom";
import mainContext from "../context/mainContext";

const Toolbar = () => {
    const {gold} = useContext(mainContext)


    return (
        <div className="d-flex space-btw toolbar">
            <Link to="/shop">Shop</Link>

            <div>
                Gold: {gold}
            </div>
            <Link to="/arena">Arena</Link>
        </div>
    );
};

export default Toolbar;