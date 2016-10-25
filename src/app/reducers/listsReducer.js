import {
  FETCH_FEED_LIST,
  FETCH_ALERT_LIST,
} from '../actions/types';

export const INITIAL_STATE = {
  feedList: [],
  alertList: [],
};

/**
* @function Reducer
* @description Compute new state depending on the action passed in parameter
* @param {Object} state - global state of the app
* @param {Object} action - action object
* @return {Object} - New state of the app
*/
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_FEED_LIST:
      return { ...state, feedList: action.payload };
    case FETCH_ALERT_LIST:
      return { ...state, alertList: action.payload };
    default: {
      return state;
    }
  }
}
