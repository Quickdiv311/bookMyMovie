import { configureStore } from "@reduxjs/toolkit";
import { bookingReducer } from "./reducers/BookingReducer";

export const store = configureStore({
    reducer:{
        bookingReducer
    }
})