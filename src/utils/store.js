import { configureStore } from "@reduxjs/toolkit";
import stockSlice from "./stockSlice";

const store = configureStore({
    reducer:{
        stock: stockSlice,
    },
});

export default store;