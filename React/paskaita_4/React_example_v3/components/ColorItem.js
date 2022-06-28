import React from 'react';

const ColorItem = ({item}) => {
    return (
        <div style={{backgroundColor: item.hex}}>
            <h1>{item.name}</h1>
        </div>
    );
};

export default ColorItem;