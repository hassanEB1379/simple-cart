import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginApi } from "../../api/api";
import { getStateLs } from "../../utils/localStorage";

// thunks
export const loginThunk = createAsyncThunk("auth/login", async userData => {
    return await loginApi(userData);
});

// slice
const stateTemplate = {
    status: "idle",
    isAuthenticated: false,
    data: {},
};

const initialState = getStateLs("auth") || stateTemplate;

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state, _) => {
            return stateTemplate;
        },
    },
    extraReducers: {
        [loginThunk.pending]: (state, _) => {
            state.status = "loading";
        },
        [loginThunk.fulfilled]: (state, action) => {
            state.status = "success";
            state.isAuthenticated = true;
            state.data = action.payload.info;
        },
    },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
