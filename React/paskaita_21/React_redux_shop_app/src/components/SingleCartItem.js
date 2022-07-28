import React from 'react';
import {addQuantity, subtractQuantity, updateCart} from "../features/cart";
import {useDispatch, useSelector} from "react-redux";

const SingleCartItem = ({item, index}) => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.shop.value.cart)

    function subtract() {
        if(item.quantity === 1) {
            const newCart = cart.filter(x => x.id !== item.id)
            return dispatch(updateCart(newCart))
        }

        dispatch(subtractQuantity(index))
    }

    return (
        <div className="d-flex space-btw cartItem">
            <img src={item.image} alt=""/>
            <h4>Price: {item.price}$ </h4>
            <h4>Quantity: {item.quantity} </h4>
            <div>
                <button onClick={() => dispatch(addQuantity(index))}>Add</button>
                <button onClick={subtract}>Remove</button>

            </div>
        </div>
    );
};

export default SingleCartItem;