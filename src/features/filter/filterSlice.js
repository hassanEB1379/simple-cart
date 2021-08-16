import { createSlice } from "@reduxjs/toolkit";

export const initialRange = [0, 1000];

const initialState = {
    priceRange: initialRange,
    categories: [],
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        changePriceRange: (state, action) => {
            state.priceRange = action.payload;
        },
        addCategory: (state, action) => {
            state.categories.push(action.payload);
        },
        removeCategory: (state, action) => {
            state.categories = state.categories.filter(
                item => item !== action.payload
            );
        },
    },
});

export const { changePriceRange, addCategory, removeCategory } =
    filterSlice.actions;

export default filterSlice.reducer;
