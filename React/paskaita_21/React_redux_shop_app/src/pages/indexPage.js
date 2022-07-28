import React from 'react';
import {useSelector} from "react-redux";
import SingleProductCard from "../components/SingleProductCard";

const IndexPage = () => {

    const products = useSelector(state => state.shop.value.products)

    return (
        <div className="d-flex flex-wrap">
            {products.map((x, i) => <SingleProductCard item={x} index={i} key={x.id}/>)}
        </div>
    );
};

export default IndexPage;