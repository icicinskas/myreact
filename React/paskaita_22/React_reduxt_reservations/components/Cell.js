import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {selectCell} from "../features/reservations";

const Cell = ({item, index}) => {
    const dispatch = useDispatch()
    const selected = useSelector(state => state.reservations.value.selected)

    const borderStyle = selected === index ? "3px solid #ba21d9" : "1px solid black"
    const bgColor = item.length > 0 ? "#e3e3e3" : "white"

    function action() {
        dispatch(selectCell(index))
    }

    return (
        <div onClick={action} style={{border: borderStyle, backgroundColor: bgColor}}>
            {index}
            <div>
                {item}
            </div>
        </div>
    );
};

export default Cell;