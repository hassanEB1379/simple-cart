import { configureStore } from "@reduxjs/toolkit";

// reducers
import productsReducer from "../features/products/productSlice";
import cartReducer from "../features/cart/cartSlice";
import userReducer from "../features/user/userSlice";
import ordersReducer from "../features/orders/ordersSlice";

export default configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
        user: userReducer,
        orders: ordersReducer,
    },
});
