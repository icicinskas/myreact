import {createSlice} from "@reduxjs/toolkit";

export const reservationSlice = createSlice({
    name: "users",
    initialState: {
        value: {
            table: [],
            selected: 10
        }
    },
    reducers: {
        createTable: (state) => {
            const arr = []
            for (let i = 0; i < 25; i++) {
                arr.push("")
            }
            state.value.table = arr
        },
        selectCell: (state, action) => {
            state.value.selected = action.payload
        },
        addReservation: ({value}, {payload}) => {
            value.table[payload.index] = payload.text
        },
        cancelReservation: ({value}, {payload}) => {
            value.table[payload] = ""
        }
    }
})

export const {createTable, selectCell, addReservation, cancelReservation} = reservationSlice.actions
export default reservationSlice.reducer

// add user image to your state
// display image as img tag
// create input ro retrieve image url
// and update user image in redux store