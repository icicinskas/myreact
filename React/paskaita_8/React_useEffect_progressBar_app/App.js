import './App.css';
import Footer from "./components/Footer";
import Table from "./components/Table";
import Progress from "./components/Progress";
import {useState} from "react";

function App() {

    const [getUsers, setUsers] = useState([])

    return (
        <div className="App">
            <div className="d-flex">
                <div className="grow1">
                    <Progress users={getUsers}/>
                </div>
                <div className="grow1">
                    <Table users={getUsers}/>
                </div>
            </div>
            <Footer getUsers={getUsers} setUsers={setUsers}/>
        </div>
    );
}

export default App;