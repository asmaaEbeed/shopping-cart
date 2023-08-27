import { ADD_TO_CART, CLEAR_CART } from "../actions/types";
import { DELETE_FROM_CART } from "../actions/types"
import store from "../store";
const initialState = {
  cart: [
    // {
    //   product: {},
    //   quantity: 0
    // },
  ],
};

function loadState() {
  const state = localStorage.getItem('cart');

  if(state !== null) {
    console.log(state);
    return JSON.parse(state);
  }
  return {
    cart: []
  }

}


export default function cartReducer(state = loadState(), action) {
  console.log(state, action);
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        cart: [
          ...state.cart,
          {
            product: action.payload.productInfo,
            quantity: action.payload.quantity
          },
        ],
      };
    }
    case DELETE_FROM_CART: 
    {
      const itemIndex = action.payload;
      const new_state = {...state};
      delete new_state.cart[itemIndex]
        return new_state
    }

    case CLEAR_CART: {
      const new_state = { ...state };
      new_state.cart = [];
      console.log(new_state);
      return new_state
    }

    default:
      return state;
  }
}