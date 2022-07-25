import React from 'react';
import Cell from "./Cell";
import {useSelector} from "react-redux";

const Table = () => {
    const cells = useSelector(state => state.reservations.value.table)


    return (
        <div className="table">
            {cells.map((x, i) => <Cell key={i} item={x} index={i}/>)}
        </div>
    );
};

export default Table;