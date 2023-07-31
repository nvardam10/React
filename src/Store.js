import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Helper/userSlide";

const store = configureStore({
    reducer: {
        auth:authReducer,
    }
})

export default store