import './App.css';
import {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import mainContext from "./context/mainContext";
import SelectCharacterPage from "./pages/SelectCharacterPage";
import MainMenuPage from "./pages/MainMenuPage";
import ShopPage from "./pages/ShopPage";

function App() {
    const [player, setPlayer] = useState(null)
    const [gold, setGold] = useState(0)
    const [inventory, setInventory] = useState([])

    const values = {
        player,
        setPlayer,
        gold,
        setGold,
        inventory,
        setInventory
    }

    return (
        <mainContext.Provider value={values}>

            <div className="App">

                <BrowserRouter>

                    <Routes>
                        <Route path="/" element={<SelectCharacterPage/>}/>
                        <Route path="/menu" element={<MainMenuPage/>}/>
                        <Route path="/shop" element={<ShopPage/>}/>
                    </Routes>
                </BrowserRouter>
            </div>

        </mainContext.Provider>
    );
}

export default App;


