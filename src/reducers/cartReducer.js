export const cartReducer = (state, { type, payload}) => {
    switch(type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, payload.product]
            }
        default: 
            return state;
    }
}