import './App.css';

import {useState, useEffect, useRef} from "react";
import SingleItem from "./components/SingleItem";

function App() {
    const [getTodos, setDodos] = useState([])

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res => res.json())
            .then(data => {
                setDodos(data)
            })

    }, [])

    return (
        <div className="App">
            {getTodos.map(x => <SingleItem item={x} key={x.id}/>)}
        </div>
    );
}

export default App;