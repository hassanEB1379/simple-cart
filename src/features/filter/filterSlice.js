import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState: {
        category: "all",
    },
    reducers: {
        filterByCategory: (state, action) => {
            state.category = action.payload;
        },
    },
});

export const { filterByCategory } = filterSlice.actions;

export default filterSlice.reducer;
