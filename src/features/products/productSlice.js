import {
    createAsyncThunk,
    createSelector,
    createSlice,
} from "@reduxjs/toolkit";
import { getAllProducts } from "../../api/api";

// thunks
export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
        return await getAllProducts();
    }
);

// slice
const productSlice = createSlice({
    name: "products",
    initialState: {
        status: "idle",
        error: null,
        data: [],
    },
    reducers: {},
    extraReducers: {
        [fetchProducts.pending]: (state, _) => {
            state.status = "loading";
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state.status = "success";
            state.data = action.payload;
        },
        [fetchProducts.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        },
    },
});

// selectors
export const selectByCategory = createSelector(
    state => state.products,
    state => state.filter.category,
    (products, category) => {
        console.log(category);
        if (category === "all") return products;

        return {
            ...products,
            data: products.data.filter(
                product => product.category === category
            ),
        };
    }
);

export default productSlice.reducer;
