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
            state.error = null;
        },
        [fetchProducts.fulfilled]: (state, action) => {
            return {
                status: "success",
                error: null,
                data: action.payload,
            };
        },
        [fetchProducts.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        },
    },
});

// selectors
export const selectProductDataByCategory = createSelector(
    state => state.products.data,
    state => state.filter,
    (products, filter) => {
        const { priceRange, categories } = filter;

        const filterByCategory = product =>
            categories.length
                ? categories.indexOf(product.category) !== -1
                : true;

        return products.filter(
            product =>
                product.price >= Number(priceRange[0]) &&
                product.price <= Number(priceRange[1]) &&
                filterByCategory(product)
        );
    }
);

export default productSlice.reducer;
