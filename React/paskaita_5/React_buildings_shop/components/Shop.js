import React from 'react';

const Shop = ({stats, getBuildings, setBuildings}) => {
    const buildings = [
        {
            name: "house",
            price: {
                gold: 10,
                stone: 20,
                wood: 50
            },
            image: "https://thumbs.dreamstime.com/b/house-pixel-art-isolated-home-pixels-white-background-136637846.jpg"
        },
        {
            name: "castle",
            price: {
                gold: 100,
                stone: 200,
                wood: 500
            },
            image: "https://images.cdn4.stockunlimited.net/preview1300/pixel-castle_2021418.jpg"
        },
        {
            name: "tent",
            price: {
                gold: 5,
                stone: 5,
                wood: 10
            },
            image: "https://preview.pixlr.com/images/800wm/100/1/1001509056.jpg"
        },
    ]

    function buyBuilding(price, building) {

        if(price.gold > stats.getGold) {
            return console.log('no gold')
        }

        if(price.stone > stats.getStone) {
            return console.log('no stone')
        }

        if(price.wood > stats.getWood) {
            return console.log('no wood')
        }

        stats.setGold(stats.getGold - price.gold)
        stats.setWood(stats.getWood - price.wood)
        stats.setStone(stats.getStone - price.stone)

        const builds = getBuildings
        builds.push(building)
        setBuildings(builds)
    }

    return (
        <div>
            <h1>SHOP</h1>

            <div className="d-flex space-btw">

                {buildings.map((x, i) =>
                    <div className="building" key={i} onClick={() => buyBuilding(x.price, x)}>
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

export default Shop;