import './App.css';
import {useState} from "react";
import Toolbar from "./components/Toolbar";
import Shop from "./components/Shop";
import Builings from "./components/Builings";

function App() {

    const [getGold, setGold] = useState(0)
    const [getWood, setWood] = useState(0)
    const [getStone, setStone] = useState(0)

    const [getBuildings, setBuildings] = useState([])

    const stats = {
        getGold,
        getWood,
        getStone,
        setGold,
        setWood,
        setStone
    }

    return (
        <div className="App" >
            <Toolbar wood={getWood} stone={getStone} gold={getGold}/>

            <div className="images d-flex space-btw">
                <img onClick={() => setGold(getGold+100)} src="https://img.freepik.com/free-vector/pile-gold-bullion-with-pixel-art-style_475147-541.jpg?w=2000" alt=""/>
                <img onClick={() => setWood(getWood+100)} src="https://img.freepik.com/free-vector/wood-log-pixel-art-style_475147-1390.jpg" alt=""/>
                <img onClick={() => setStone(getStone+100)} src="https://img.freepik.com/free-vector/sharp-stone-pixel-art-style_475147-1450.jpg" alt=""/>
            </div>

            <Builings buildings={getBuildings}/>
            <Shop stats={stats} getBuildings={getBuildings} setBuildings={setBuildings}/>
        </div>
    );
}

export default App;