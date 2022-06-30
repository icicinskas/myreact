import React from 'react';
import Todo from "./Todo";

const Table = ({todos, setTodos}) => {


    function setCompleted(index) {
        const items = [...todos]
        items[index].completed = !items[index].completed
        setTodos(items)
    }

    function remove(index) {
        const newValues = todos.filter((x, i) => i !== index)
        setTodos(newValues)
    }

    return (
        <div className="table">
            {todos.map((x, i) =>
                <Todo key={x.timestamp}
                      remove={() => remove(i)}
                      update={() => setCompleted(i)}
                      item={x}/>)
            }
        </div>
    );
};

export default Table;