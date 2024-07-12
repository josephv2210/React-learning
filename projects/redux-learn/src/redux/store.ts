import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import counterReducer from './counterSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        counter: counterReducer,
    }
})