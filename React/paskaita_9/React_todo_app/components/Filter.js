import React from 'react';

const Filter = ({todos, setFilter}) => {
    function getCompletedCount() {
        let count = 0
        todos.map(x => {
            if(x.completed) count++
        })
        return count
    }

    function setCompleted() {
        const all = todos.filter(x => x.completed === true)
        setFilter(all)
    }

    function setNotCompleted() {
        const all = todos.filter(x => x.completed === false)
        setFilter(all)
    }

    return (
        <div>
            <button onClick={() => setFilter([])}>All ({todos.length})</button>
            <button onClick={setCompleted}>Completed ({getCompletedCount()})</button>
            <button onClick={setNotCompleted}>Not Completed ({todos.length - getCompletedCount()})</button>
        </div>
    );
};

export default Filter;