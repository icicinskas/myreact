import React from 'react';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const Toolbar = () => {
    const nav = useNavigate()

    const cart = useSelector(state => state.shop.value.cart)

    return (
        <div className="d-flex space-btw">
           <div onClick={() => nav("/")}>
               Home
           </div>
            <div className="d-flex" onClick={() => nav("/cart")}>
                <img src="https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg" className="cartIcon" alt=""/>
                <h1>Cart: {cart.length}</h1>
            </div>
        </div>
    );
};

export default Toolbar;