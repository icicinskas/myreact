import {createSlice} from "@reduxjs/toolkit";

export const textSlice = createSlice({
    name: "text",
    initialState: {
        value: {
            textValue: "ddd"
        }
    },
    reducers: {
        updateText: ({value}, {payload}) => {
           value.textValue = payload
        }
    }
})


export const {updateText} = textSlice.actions
export default textSlice.reducer