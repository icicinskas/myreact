import React from 'react';
import WeaponItem from "./WeaponItem";

const Inventory = ({gold, inventory, sellItem}) => {
    return (
        <div className="inventory">
            <div className="p-10 goldStats">Gold: {gold}</div>
            <div>
                {inventory.map((x, i) => <WeaponItem sellItem={sellItem} index={i} key={i} item={x}/>)}
            </div>
        </div>
    );
};

export default Inventory;