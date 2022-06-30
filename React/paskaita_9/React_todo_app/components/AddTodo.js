import {useRef} from 'react';

const AddTodo = ({todos,setTodos}) => {
    const inpRef = useRef()

    function add() {
        const item = {
            text: inpRef.current.value,
            timestamp: Date.now(),
            completed: false
        }

        setTodos([...todos, item])
    }

    return (
        <div>
            <input ref={inpRef} type="text" placeholder="todo text"/>
            <button onClick={add}>Add</button>
        </div>
    );
};

export default AddTodo;