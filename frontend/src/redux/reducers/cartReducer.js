import * as actionTypes from "../constants/cartConstants"

export const cartReducer = (state = { cartItems: []}, action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CART: 
        // item to add to cart 
        const newItem = action.payload
        // checks if the item already exists in the cart
        const existingItem = state.cartItems.find((item) => item.product === newItem.product)

        if (existingItem) {
            return {
                ...state,
                // set cartItems to a new array, mapping over the old array to check if the new item is the same as one already in the cart
                cartItems: state.cartItems.map((item) => item.product === existingItem.product ? newItem : item)
            }
        } else {
            // if the item isn't found, it's the first time you are adding it to the cart
            return {
                ...state, 
                cartItems: [...state.cartItems, newItem]
            }
        }
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                // keep everything in the cartItems array, apart from the product with the matching id (i.e. the one to be deleted...)
                cartItems: state.cartItems.filter((item) => item.product !== action.payload)
            }
        case actionTypes.RESET_CART:
            return {
                ...state,
            }
        default: 
        return state;
    }
}