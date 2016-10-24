import { combineReducers } from 'redux';
import authReducer from './authReducer';

// Combine all reducers in one global state
const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
