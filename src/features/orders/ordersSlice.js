import { createSlice, nanoid } from "@reduxjs/toolkit";
import { getStateLs } from "../../app/utils/localStorage";

const ordersSlice = createSlice({
    name: "orders",
    initialState: getStateLs("orders") || [],
    reducers: {
        addOrders: {
            reducer: (state, action) => {
                state.push(action.payload);
            },
            prepare: orders => {
                return {
                    payload: {
                        id: nanoid(),
                        orderDate: new Date().toString(),
                        data: orders,
                    },
                };
            },
        },
        clearOrders: () => {
            return [];
        },
    },
});

export const { addOrders, clearOrders } = ordersSlice.actions;

export default ordersSlice.reducer;
