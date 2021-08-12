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
export const selectByCategory = category => {
    return createSelector(
        state => state.products,
        products => {
            if (category === "all") return products;

            return {
                ...products,
                data: products.data.filter(
                    product => product.category === category
                ),
            };
        }
    );
};

export default productSlice.reducer;
