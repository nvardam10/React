import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        currentUser: null,
        users: {}
    },
    reducers: {
        registerUser: (state, action) => {
            const { email, user } = action.payload;
            state.currentUser = user.name;
            state.users[email] = user;
        },
        loggedInUser: (state, action) => {
            state.currentUser=action.payload
        }
    }
})

export const { registerUser,loggedInUser } = authSlice.actions;
export default authSlice.reducer;