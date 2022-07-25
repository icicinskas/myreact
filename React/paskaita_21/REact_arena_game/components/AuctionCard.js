import React from 'react';
import {useNavigate} from "react-router-dom";

const AuctionCard = ({item}) => {
    const nav = useNavigate()

    return (
        <div className="auction" onClick={() => nav('/auction/'+item.id)}>
            <img src={item.photo} alt=""/>
            <div>{item.title}</div>
            <div>Latest Price: {item.price}</div>
            <div>Bids amount: {item.bids.length}</div>
            <div>user: {item.user}</div>
        </div>
    );
};

export default AuctionCard;