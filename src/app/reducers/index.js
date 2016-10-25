import { combineReducers } from 'redux';
import authReducer from './authReducer';
import listsReducer from './listsReducer';

// Combine all reducers in one global state
const rootReducer = combineReducers({
  auth: authReducer,
  lists: listsReducer,
});

export default rootReducer;
