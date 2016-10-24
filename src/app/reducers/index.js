import { combineReducers } from 'redux';

// Combine all reducers in one global state
const rootReducer = combineReducers({
  feed: [],
});

export default rootReducer;
