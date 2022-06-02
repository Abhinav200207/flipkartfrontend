import { configureStore } from "@reduxjs/toolkit";
import { linkReducer, productsReducer } from "./Reducers/ProductReducers";

const store = configureStore({
    reducer: {
        productReducer: productsReducer,
        linkReducer: linkReducer
    },
});

export default store;