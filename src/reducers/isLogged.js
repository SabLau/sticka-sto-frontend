const initialState = {
    id: ''
}

const loggedReducer = (state=initialState, action) => {
    switch(action.type){
        case 'SIGN_IN':
            return Object.assign({}, state, {
                id:action.id,
                name: action.name
            });
        case 'LOGOUT':
            return Object.assign({}, state, {
                id: null, 
                name: null
            })
        default:
            return state;
    }
};

export default loggedReducer;