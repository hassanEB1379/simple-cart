import { configureStore } from "@reduxjs/toolkit";

// reducers
import filterReducer from "../features/filter/filterSlice";
import productsReducer from "../features/products/productSlice";
import cartReducer from "../features/cart/cartSlice";
import authReducer from "../features/auth/authSlice";

export default configureStore({
    reducer: {
        filter: filterReducer,
        products: productsReducer,
        cart: cartReducer,
        auth: authReducer,
    },
});
