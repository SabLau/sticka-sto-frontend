
const cartReducer = (state={cart:[]}, action={}) => {
    switch(action.type){
        case 'RESET_CART':
            return {cart:[]}
        case 'ADD_STICKER':
            return Object.assign({}, state, {cart:[...state.cart, action.payload
            ]})
        case 'REMOVE_STICKER':
            //filter creates a new array of objects that fit the criteria in its parameters
            const newCart = state.cart.filter(cart=>cart.id!=action.id);
            //assigns new array to replace the previous one in state
            return {cart: newCart};
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