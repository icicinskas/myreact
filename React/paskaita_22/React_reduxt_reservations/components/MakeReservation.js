import {useRef} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {addReservation, cancelReservation} from "../features/reservations";

const MakeReservation = () => {

    const ref = useRef()
    const {selected, table} = useSelector(state => state.reservations.value)
    const dispatch = useDispatch()

    function reservation() {
        const item = {
            index: selected,
            text: ref.current.value
        }

        dispatch(addReservation(item))
    }

    function cancel() {
        dispatch(cancelReservation(selected))
    }

    return (
        <div>
            <input ref={ref} type="text"/>

            {table.length > 0 && table[selected].length > 0 ?
                <button onClick={cancel}>Cancel Reservation</button> :
                <button onClick={reservation}>Add Reservation</button>
            }
        </div>
    );
};

export default MakeReservation;