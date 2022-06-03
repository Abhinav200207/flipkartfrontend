import axios from "axios";
import { ALL_PRODUCT_REQUEST, ALL_PRODUCT_SUCCESS, ALL_PRODUCT_FAIL } from '../Constants/ProductConstants.js'

export const getProduct = (linkin) => async (dispatch) => {
    try {
        dispatch({ type: ALL_PRODUCT_REQUEST });

        let link = `http://localhost:4000/api/v1/products${linkin}`
        const { data } = await axios.get(link);


        dispatch({
            type: ALL_PRODUCT_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: ALL_PRODUCT_FAIL,
            payload: error.response.data.message,
        });
    }
};


export const changeLink = (link, key, value, flag) => (dispatch) => {
    if (flag) {
        if (link.indexOf(`${link}&${key}=${value}`) === -1) {
            link = `${link}&${key}=${value}`;
        }
    } else {
        link = link.replace(`&${key}=${value}`, '');
    }

    dispatch({
        type: "CHANGE_LINK_SUCCESS",
        payload: link,
    })
}

export const changeLinkSort = (link, key, value) => (dispatch) => {
    link = link.replace(`&sortby=asc`, '');
    link = link.replace(`&sortby=desc`, '');
    link = link.replace(`&popular=1`, ``)
    if (key !== "" && value !== "") {
        link = `${link}&${key}=${value}`;
    }

    dispatch({
        type: "CHANGE_LINK_SUCCESS",
        payload: link,
    })
}



export const countElement = (array, ele) => {
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === ele) {
            counter++;
        }
    };
    return counter;
}