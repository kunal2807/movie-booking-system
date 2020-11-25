//This file is where you connect all your reducers & stuff like that. Batman
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productListReducer, productDetailsReducer, productCreateReducer, productUpdateReducer, productReviewCreateReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import {
    userLoginReducer,
    userRegisterReducer,
    userUpdateReducer,
    userDetailsReducer,
    userUpdateProfileReducer,
    userListReducer, userDeleteReducer
} from './reducers/usersReducers';

import { orderCreateReducer, orderDetailsReducer, orderListMyReducer, orderListReducer, orderDeliverReducer, orderPayReducer } from './reducers/orderReducers';
// Reducers
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userDetails: userDetailsReducer,
    userUpdate: userUpdateReducer,
    userUpdateProfile: userUpdateProfileReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    orderCreate: orderCreateReducer,
    orderPay: orderPayReducer,
    orderListMy: orderListMyReducer,
    orderDetails: orderDetailsReducer,
    orderList: orderListReducer,
    orderDeliver: orderDeliverReducer,
    productReviewCreate: productReviewCreateReducer

})

const cartItemsFromStorage = localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : []

const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : []

const shippingAddressFromStorage = localStorage.getItem('shippingAddress ')
    ? JSON.parse(localStorage.getItem('shippingAddress '))
    : {}


const initialState = {
    cartItems: { cartItemsFromStorage },
    shippingAddress: { shippingAddressFromStorage },
    userLogin: { userInfo: userInfoFromStorage }
}
const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;