import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
} from '../actions/types';

export const INITIAL_STATE = {
  authenticated: false,
  error: '',
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
    case AUTH_USER:
      return { ...state, authenticated: true };
    case UNAUTH_USER:
      return { ...state, authenticated: false };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    default: {
      return state;
    }
  }
}
