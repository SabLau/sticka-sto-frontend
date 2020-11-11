const initialState = {
    cart: [
        {
            id: '',
            qty: ''
        }
    ]
}

const cartReducer = (state=initialState, action) => {
    switch(action.type){
        case 'ADD_STICKER':
            return Object.assign({}, state, {
                id: action.id,
                qty: action.qty
            });
        case 'REMOVE_STICKER':
            const index1 = Object.filter(id => id !== action.id)
            return {
                ...state, 
                cart: index1
            };

        case 'UPDATE_STICKER':
            const index2 = Object.filter(id=>id !== action.id)
            const newList = [...state.cart]
            newList[index2].qty = action.qty
            return {...state, cart:newList};
    }
};
export default cartReducer;