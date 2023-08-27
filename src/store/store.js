import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import cartReducer from "./reducers";
import thunk from "redux-thunk";
import { debounce } from "debounce";

const initialState = {
  cart: [
    {
      product: {
        id: 1,
        title: "cart store",
        description: "store cart description",
        price: 100,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      },
      quantity: 5,
    },
    {
      product: {
        id: 2,
        title: "cart store item2",
        description: "store cart description2",
        price: 100,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      },
      quantity: 3,
    },
  ],
};

const reducers = (state = initialState) => {
  return state;
};


async function saveState(state) {

  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('cart', serializedState);
  } catch (e) {
    console.log("error");
  }
}



const store = createStore(
  cartReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.subscribe(
  debounce(() => {
    saveState(store.getState());
  }, 800)

);

export default store;
