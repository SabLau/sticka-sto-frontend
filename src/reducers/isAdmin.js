const adminReducer = (state = false, action) => {
    switch(action.type){
        case 'IS_ADMIN':
            return true;
        case 'NOT_ADMIN':
            return false;
        case 'LOGOUT':
            return false;
        default:
            return false;
    }
};

export default adminReducer;