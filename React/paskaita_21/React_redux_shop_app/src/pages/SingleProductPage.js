import React from 'react';
import {useParams} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {addToCart, addQuantity} from "../features/cart";


const SingleProductPage = () => {
    const dispatch = useDispatch()
    const {products, cart} = useSelector(state => state.shop.value)
    const {id} = useParams()
    const item = products.find(x => x.id === Number(id))

    function add() {
        if(cart.find(x => x.id === item.id)) {
            const itemIndex = cart.findIndex(x => x.id === item.id)
            dispatch(addQuantity(itemIndex))
        } else {
            const product = {...item}
            product.quantity = 1
            dispatch(addToCart(product))
        }
    }

    return (
        <div className="d-flex">
            <div className="grow1 productImg">
                <img src={item.image} alt=""/>
            </div>
            <div className="grow1">
                <h1>{item.title}</h1>
                <div>{item.description}</div>
                <h2>Price: {item.price}</h2>
                <button onClick={add}>Add to Cart</button>
            </div>
        </div>
    );
};

export default SingleProductPage;