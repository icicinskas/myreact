import './App.css';
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {createTable} from "./features/reservations";

import MakeReservation from "./components/MakeReservation";
import Table from "./components/Table";

function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(createTable())
    }, [])

    return (

            <div className="App">
                <MakeReservation/>
                <Table/>
            </div>

    );
}

export default App;




