import { combineReducers } from 'redux';
import login from './LoginReducer';
// ... other reducers

export default combineReducers({
    login,
    // ... other reducers
});