import React from 'react';

const Todo = ({item, update, remove}) => {

    return (
        <div style={{backgroundColor: item.completed ? '#9cd782' : "white", margin: "5px"}}>
            <div>{ new Date(item.timestamp).toLocaleString('lt-LT') }</div>
            <p>{item.text}</p>
            <button onClick={update}>completed</button>
            <button onClick={remove}>delete</button>
        </div>
    );
};

export default Todo;