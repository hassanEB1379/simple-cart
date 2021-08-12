import { createSelector, createSlice } from "@reduxjs/toolkit";
import { getStateLs } from "../../utils/localStorage";

const initialState = getStateLs("cart") || [];

const cartSlice = createSlice({
    name: "cart",
    initialState,
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

// selectors
export const selectTotalPurchases = createSelector(
    state => state.cart,
    cart => {
        // Calculate the total price of the cart
        let total = 0;
        for (const cartItem of cart) {
            const { price, count } = cartItem;
            total += price * count;
        }
        return total;
    }
);

export const {
    addToCart,
    removeOneFromCart,
    clearCart,
    countItemIncrement,
    countItemDecrement,
} = cartSlice.actions;

export default cartSlice.reducer;
