import './App.css';
import Shop from "./components/Shop";
import Inventory from "./components/Inventory";
import {useState} from "react";

function App() {
    const [getGold, setGold] = useState(5000)
    const [getInventory, setInventory] = useState([])
    const [getError, setError] = useState(false)

    function addItem(item) {
        if(getGold < item.price) return setError(true)

        setError(false)
        setGold(getGold - item.price)
        setInventory([...getInventory, item])
    }

    function sellItem(index) {
        const itemSold = getInventory[index]
        const newInventory = getInventory.filter((x, i) => i !== index)

        setGold(getGold + itemSold.price / 2)
        setInventory(newInventory)
    }

    return (
        <div>
            {getError && "NO GOLD"}
            <div className="App d-flex">
                <div className="grow1">
                    <Shop addItem={addItem}/>
                </div>
                <div className="grow1">
                    <Inventory gold={getGold} inventory={getInventory} sellItem={sellItem}/>
                </div>
            </div>
        </div>
    );
}

export default App;