import React from 'react';

const Product = () => {


    const productName = "Labai grazus batai"



    return (
        <div className="product d-flex">
            <img src="https://m.media-amazon.com/images/I/81i057rz8gS._UL1500_.jpg" alt=""/>
            <div>
                <h3>{productName}</h3>
            </div>
        </div>
    );
};

export default Product;
