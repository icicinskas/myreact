import React from 'react';

const ColorComp = ({color, setColor}) => {

    return (
        <div className="colorBox" onClick={() => setColor(color.hex)} style={{backgroundColor: color.hex}}>
            <div>{color.name}</div>
            <div>{color.hex}</div>
        </div>
    );
};

export default ColorComp;