import './App.css';

import {useState} from "react";
import AddTodo from "./components/AddTodo";
import Filter from "./components/Filter";
import Table from "./components/Table";

function App() {
    const [getTodos, setTodos] = useState([])
    const [getFilter, setFilter] = useState([])

    return (
        <div className="App">
            <Filter todos={getTodos} setTodos={setTodos} filter={getFilter} setFilter={setFilter}/>
            <Table todos={getFilter.length ? getFilter : getTodos} setTodos={setTodos}/>
            <AddTodo todos={getTodos} setTodos={setTodos}/>
        </div>
    );
}

export default App;