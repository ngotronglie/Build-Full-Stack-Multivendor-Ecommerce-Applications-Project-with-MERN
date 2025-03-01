import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from "./Reducers/authReducer";

const rootReducer = combineReducers({
    auth: authReducer
});

export default rootReducer;
