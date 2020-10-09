// Takes in the initial state and the action that determines how state should update
export const productListReducer = (initialState = { products: [] }, action) => {
    switch (action.type) {
        case 'PRODUCTS_LIST_REQUEST':
            return { loading: true }

        case 'PRODUCTS_LIST_SUCCESS':
            return { loading: false }

        case 'PRODUCTS_LIST_SUCCESS':
            return { loading: false }

        case 'PRODUCTS_LIST_FAIL':
            return { loading: false, error: action.payload }
        default:
            return initialState
            break;
    }
}