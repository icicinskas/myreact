import React from 'react';
import {useSelector} from "react-redux";
import SingleCartItem from "../components/SingleCartItem";

const CartPage = () => {
    const cart = useSelector(state => state.shop.value.cart)

    function countSum() {
        let total = 0
        cart.map(x => {
            total += x.price * x.quantity
        })
        return total.toFixed(2)
    }

    return (
        <div>
            <div className="d-flex j-center">
                <div className="container">
                    {cart.map((x,i) => <SingleCartItem item={x} key={x.id} index={i}/>)}
                </div>

            </div>
            <div>
                <h1>Total sum: {countSum()} $</h1>
            </div>
        </div>


    );
};

export default CartPage;