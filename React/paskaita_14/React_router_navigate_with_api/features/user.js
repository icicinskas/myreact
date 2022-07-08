import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        value: {
            name: "Andrius",
            age: 0,
            email: "kasovskis@gmail.com",
            color: "#689152"
        }
    },
    reducers: {
        changeName: (state, action) => {
            state.value.name = action.payload
        },
        changeColor: (state, action) => {
            console.log(action.payload)
            state.value.color = action.payload
        },
    }
})


export const {changeName, changeColor} = userSlice.actions
export default userSlice.reducer