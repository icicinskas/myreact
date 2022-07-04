import React from 'react';

const WeaponItem = ({item, index, addItem, sellItem}) => {
    function buyOrSell() {
        if(addItem) {
            return addItem(item)
        }

        if(sellItem) {
            return sellItem(index)
        }
    }

    return (
        <div className="d-flex align-center item">
            <img src={item.image} alt=""/>
            <div className="p-10">Price: {item.price}</div>
            <button onClick={buyOrSell}> {addItem ? 'Buy' : 'Sell'} </button>
        </div>
    );
};

export default WeaponItem;