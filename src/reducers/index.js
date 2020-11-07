import loggedReducer from './isLogged.js';
import adminReducer from './isAdmin.js';
import { combineReducers } from 'redux';


const allReducers = combineReducers({
    isLogged: loggedReducer,
    isAdmin: adminReducer,
});

export default allReducers;