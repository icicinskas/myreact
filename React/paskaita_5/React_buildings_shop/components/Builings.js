import React from 'react';

const Builings = ({buildings}) => {
    return (
        <div>
            <h1>BUILDINGS</h1>
            <div className="d-flex flex-wrap">
                {buildings.map((x, i) =>
                    <div className="building" key={i} >
                        <img src={x.image} alt=""/>
                        <h3>{x.name}</h3>
                        <div className="d-flex space-btw">
                            <span>Gold: {x.price.gold}</span>
                            <span>Wood: {x.price.wood}</span>
                            <span>Stone: {x.price.stone}</span>
                        </div>
                    </div>)}
            </div>

        </div>
    );
};

export default Builings;