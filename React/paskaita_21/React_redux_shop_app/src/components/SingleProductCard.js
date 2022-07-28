import React from 'react';
import {useNavigate} from "react-router-dom"

const SingleProductCard = ({item, index}) => {
    const nav = useNavigate()

    return (
        <div className="product" onClick={() => nav("/product/"+item.id)}>
            <img src={item.image} alt=""/>
            <div>{item.title}</div>
            <div>Price: {item.price}$</div>
        </div>
    );
};

export default SingleProductCard;