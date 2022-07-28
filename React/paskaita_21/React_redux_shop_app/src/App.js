import './App.css';
import {useEffect} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import IndexPage from "./pages/indexPage";
import CartPage from "./pages/CartPage";
import SingleProductPage from "./pages/SingleProductPage";
import {useDispatch} from "react-redux";
import {setProducts} from "./features/cart";
import Toolbar from "./components/Toolbar";

function App() {
    const dispatch = useDispatch()


    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => {
                dispatch(setProducts(data))
            })

    }, [])

    return (
            <div className="App">
                <BrowserRouter>
                    <Toolbar/>
                    <Routes>
                        <Route path="/" element={ <IndexPage/> }/>
                        <Route path="/cart" element={ <CartPage/> }/>
                        <Route path="/product/:id" element={ <SingleProductPage/> }/>
                    </Routes>

                </BrowserRouter>

            </div>
    );
}

export default App;




