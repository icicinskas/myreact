import './App.css';
import Toolbar from "./components/Toolbar";
import Sidebar from "./components/Sidebar";
import Product from "./components/Product";

function App() {


  return (
    <div className="App" >
        <Toolbar/>

        <div className="d-flex">

            <div className="grow1">
                <Sidebar/>
            </div>

            <div className="grow3">
                <Product/>
                <Product/>
                <Product/>
            </div>


        </div>

    </div>
  );


}

export default App;
