import {
    PRODUCTS_LIST_REQUEST,
    PRODUCTS_LIST_FAIL,
    PRODUCTS_LIST_SUCCESS, PRODUCTS_DETAILS_REQUEST, PRODUCTS_DETAILS_FAIL, PRODUCTS_DETAILS_SUCCESS
} from '../constants/productConstants'
import axios from 'axios';
// Actions
export const listProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({
            type: PRODUCTS_DETAILS_REQUEST
        })
        const { data } = await axios.get(`/api/products/${id}`)
        dispatch({
            type: PRODUCTS_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRODUCTS_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const list = () => async (dispatch) => {
    try {
        dispatch({
            type: PRODUCTS_LIST_REQUEST
        })
        const { data } = await axios.get('/api/products')
        dispatch({
            type: PRODUCTS_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRODUCTS_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}