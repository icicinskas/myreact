import React from 'react';

const ProductCard = ({item}) => {
    let color = ""

    if(item.price < 20)  color = "green"

    if(item.price > 20 && item.price < 50)  color = "yellow"

    if(item.price > 50)  color = "red"


    return (
        <div className="post" style={{backgroundColor: color}}>

            <img src={item.image} alt=""/>
            <div>{item.title}</div>
            <h1>{item.price}</h1>
        </div>
    );
};

export default ProductCard;