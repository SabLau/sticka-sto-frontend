const initialState = {
    cart: [
    ]
}

const cartReducer = (state=initialState, action) => {
    switch(action.type){
        case 'RESET_CART':
            return {
                cart: []
            }
        case 'ADD_STICKER':
            return {...state, 
                cart: [...state.cart, action.payload]
            };
        case 'REMOVE_STICKER':
            console.log("remove sticker case")
            return state.filter(id => id !== action.payload.id);
        case 'UPDATE_STICKER':
            const index2 = state.cart.filter(id=>id !== action.id)
            const newList = [...state.cart]
            newList[index2].qty = action.qty
            return {...state, cart:newList};
        default:
            return state;
    }
};
export default cartReducer;