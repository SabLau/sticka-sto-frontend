
const cartReducer = (state={cart:[]}, action={}) => {
    switch(action.type){
        case 'RESET_CART':
            return {cart:[]}
        case 'ADD_STICKER':
            return Object.assign({}, state, {cart:[...state.cart, action.payload
            ]})
        case 'REMOVE_STICKER':
            console.log("remove sticker case")
            return {cart: state.cart.filter(cart=>cart.id !==action.payload.id)}
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