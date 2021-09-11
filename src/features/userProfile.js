import { createSlice } from "@reduxjs/toolkit";

export const userProfile = createSlice({
    name: "user",
    initialState: localStorage.getItem("user"),
    reducers: {
        login: (state, action) => {
            state = action.payload;
        },
        logout: (state) => {
            state = null;
        },
    },
});

export const { login, logout } = userProfile.actions;

export const selectUserProfile = (state) => state.user;

export default userProfile.reducer;