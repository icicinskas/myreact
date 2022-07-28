import {createSlice} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "users",
    initialState: {
        value: {
            products: [],
            cart: [],
        }
    },
    reducers: {
        setProducts: ({value}, {payload}) => {
            value.products = payload
        },
        addToCart: ({value}, {payload}) => {
            value.cart.push(payload)
        },
        addQuantity: ({value}, {payload}) => {
            value.cart[payload].quantity++
        },
        subtractQuantity: ({value}, {payload}) => {
            value.cart[payload].quantity--
        },
        updateCart: ({value}, {payload}) => {
            value.cart = payload
        },
    }
})

export const {setProducts, addToCart, updateCart, addQuantity, subtractQuantity} = cartSlice.actions
export default cartSlice.reducer
