/* eslint camelcase: "off" */
import axios from 'axios';
import { browserHistory } from 'react-router';
import config from '../config';
import { AUTH_USER } from './types';

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
        dispatch({ type: AUTH_USER });
        browserHistory.push('/feed');
      })
      .catch(err => {
        console.log(err);
      });
  };
}
