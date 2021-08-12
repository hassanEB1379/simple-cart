import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./app/store";
import { saveStateLs } from "./utils/localStorage";

import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";

// fetch product in page load
import { fetchProducts } from "./features/products/productSlice";
store.dispatch(fetchProducts());

// persist state
store.subscribe(() => {
    const { user, cart, orders } = store.getState();
    saveStateLs({ user, cart, orders });
});

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
