import React from 'react';

const Toolbar = ({gold, wood, stone}) => {
    return (
        <div className="d-flex space-btw">
            <h2>Gold: {gold}</h2>
            <h2>Wood: {wood}</h2>
            <h2>Stone: {stone}</h2>
        </div>
    );
};

export default Toolbar;