import loggedReducer from './isLogged.js';
import adminReducer from './isAdmin.js';
import cartReducer from './cartInventory.js'
import { combineReducers } from 'redux';


const allReducers = combineReducers({
    isLogged: loggedReducer,
    isAdmin: adminReducer,
    cart: cartReducer
});

export default allReducers;