/* eslint camelcase: "off" */
import axios from 'axios';
import { browserHistory } from 'react-router';
import config from '../config';
import { AUTH_USER, AUTH_ERROR } from './types';

/**
* @function fn
* @description Action controller fn - ...
* @param ...args - ...
* @return {Object} - ...
*/
export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error,
  };
}

/**
* @function fn
* @description Action controller fn - ...
* @param ...args - ...
* @return {Object} - ...
*/
export function getToken(code) {
  return dispatch => {
    const { oauthUrl, client_id, client_secret, redirect_uri } = config;
    const params = {
      client_id,
      client_secret,
      redirect_uri,
      code,
      response_type: 'token',
      grant_type: 'authorization_code',
    };

    axios.post(`${oauthUrl}`, params)
      .then(response => {
        localStorage.setItem('token', response.data.access_token);
        dispatch({ type: AUTH_USER });
        browserHistory.push('/feed');
      })
      .catch(() => {
        // Error while trying to get token from mention Auth server
        dispatch(authError('Bad login info'));
      });
  };
}
