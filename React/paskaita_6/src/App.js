import './App.css';
import {useState, useRef} from "react";
import SingleUser from "./components/SingleUser";

function App() {
    const nameInp = useRef()
    const photoInp = useRef()

    const [getUsers, setUsers] = useState([])

    function addUser() {
        const user = {
            name: nameInp.current.value,
            photo: photoInp.current.value
        }
        setUsers([...getUsers, user])
    }

    return (
        <div className="App d-flex">

            <div className="grow1">
                <input ref={photoInp} type="text" placeholder="photo"/>
                <input ref={nameInp} type="text" placeholder="username"/>
                <button onClick={addUser}>Add</button>
            </div>

            <div className="grow3">
                {getUsers.map((x, i) => <SingleUser key={i} user={x}/>)}
            </div>


        </div>
    );
}

export default App;