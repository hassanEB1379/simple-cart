import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const { id, count } = action.payload;

            const existInCart = state.find(item => item.id === id);

            existInCart
                ? (existInCart.count += count)
                : state.push(action.payload);
        },
        removeOneFromCart: (state, action) => {
            return state.filter(item => item.id !== action.payload);
        },
        clearCart: (state, _) => {
            return [];
        },
        countItemIncrement: (state, action) => {
            const item = state.find(item => item.id === action.payload);
            item.count++;
        },
        countItemDecrement: (state, action) => {
            const item = state.find(item => item.id === action.payload);
            item.count--;
        },
    },
});

export const {
    addToCart,
    removeOneFromCart,
    clearCart,
    countItemIncrement,
    countItemDecrement,
} = cartSlice.actions;

export default cartSlice.reducer;
