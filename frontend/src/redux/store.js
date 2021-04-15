import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { authReducer } from "./reducers/authReducer";
import { cartReducer } from "./reducers/cartReducer";
import {
  getProductsReducer,
  getProductDetailsReducer,
} from "./reducers/productReducers";

const reducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
});

// the middleware is used to make asynchronous requests in your actions
const middleware = [thunk];

const cartFromLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const INITIAL_STATE = {
  cart: {
    cartItems: cartFromLocalStorage,
  },
};

export const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);
