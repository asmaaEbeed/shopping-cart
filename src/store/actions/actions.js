import { useDispatch } from "react-redux"
import { ADD_TO_CART, CLEAR_CART, DELETE_FROM_CART } from "./types"

export const addToCart = (productInfo, quantity) => {
    return {
        type: ADD_TO_CART,
        payload: {productInfo, quantity}
    }
}
// export const deleteFromCart = (index) => {
//     return {
//         type: DELETE_FROM_CART,
//         payload: index
//     }
// }

export function createDeleteFromCart(index) {
    return {
        type: DELETE_FROM_CART,
        payload: index
    }
}

export function deleteFromCart(index) {
    return (dispatch) => {
        dispatch(createDeleteFromCart(index))
    }
}

export const clearCart = () => {
    localStorage.clear();
    return {
        type: CLEAR_CART
    }
}