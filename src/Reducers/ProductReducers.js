import { createReducer } from "@reduxjs/toolkit";

const initialState = {};

export const productsReducer = createReducer(initialState, {
    ALL_PRODUCT_REQUEST: (state) => {
        state.loading = true;
    },
    ALL_PRODUCT_SUCCESS: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    ALL_PRODUCT_FAIL: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

});

const initialStatelink = { link: '?' }
export const linkReducer = createReducer(initialStatelink, {
    CHANGE_LINK_SUCCESS: (state, action) => {
        state.link = action.payload;
    }
})