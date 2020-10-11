import {
    PRODUCTS_LIST_REQUEST,
    PRODUCTS_LIST_FAIL,
    PRODUCTS_LIST_SUCCESS, PRODUCTS_DETAILS_REQUEST, PRODUCTS_DETAILS_SUCCESS, PRODUCTS_DETAILS_FAIL
} from '../constants/productConstants'


// Takes in the initial state and the action that determines how state should update
export const productListReducer = (initialState = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCTS_LIST_REQUEST:
            return { loading: true, products: [] }

        case PRODUCTS_LIST_SUCCESS:
            return { loading: false, products: action.payload }

        case PRODUCTS_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return initialState
    }
}
// Reducer for product details
export const productDetailsReducer = (initialState = { products: { reviews: [] } }, action) => {
    switch (action.type) {
        case PRODUCTS_DETAILS_REQUEST:
            return { loading: true, ...initialState }

        case PRODUCTS_DETAILS_SUCCESS:
            return { loading: false, product: action.payload }

        case PRODUCTS_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return initialState
    }
}