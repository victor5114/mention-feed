/* eslint camelcase: "off" */
import axios from 'axios';
import { browserHistory } from 'react-router';
import config from '../config';
import {
  AUTH_USER, UNAUTH_USER,
  AUTH_ERROR, FETCH_FEED_LIST,
  FETCH_ALERT_LIST,
} from './types';

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
    const { oauthUrl, client_id, client_secret, redirect_uri, apiUrl } = config;
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

        return axios.get(`${apiUrl}/accounts/me`, {
          headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
        });
      })
      .then(response => {
        localStorage.setItem('account_id', response.data.account.id);
        dispatch({ type: AUTH_USER });
        browserHistory.push('/lists');
      })
      .catch(() => {
        // Error while trying to get token from mention Auth server
        localStorage.removeItem('token');
        localStorage.removeItem('account_id');
        dispatch(authError('Bad login info'));
      });
  };
}

/**
* @function fn
* @description Action controller fn - ...
* @param ...args - ...
* @return {Object} - ...
*/
export function signoutUser() {
  localStorage.removeItem('token');
  return { type: UNAUTH_USER };
}


function extractInfoAlert(alerts) {
  const newArr = [];
  alerts.forEach(alert => {
    newArr.push({ id: alert.id, name: alert.name });
  });
  return newArr;
}

/**
* @function fn
* @description Action controller fn - ...
* @param ...args - ...
* @return {Object} - ...
*/
export function fetchAlertList() {
  const { apiUrl } = config;

  return dispatch => {
    const accountId = localStorage.getItem('account_id');

    axios.get(`${apiUrl}/accounts/${accountId}/alerts`, {
      headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
    }).then(response => {
      if (response.data.alerts) {
        const alerts = response.data.alerts;
        dispatch({ type: FETCH_ALERT_LIST, payload: extractInfoAlert(alerts) });
      } else {
        dispatch(authError('Error retrieving alerts info'));
      }
    }).catch(() => {
      dispatch(authError('Error retrieving alerts info'));
    });
  };
}

/**
* @function fn
* @description Action controller fn - ...
* @param ...args - ...
* @return {Object} - ...
*/
export function fetchFeedList(alertId) {
  const { apiUrl } = config;

  return dispatch => {
    const accountId = localStorage.getItem('account_id');

    axios.get(`${apiUrl}/accounts/${accountId}/alerts/${alertId}/mentions`, {
      headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
    }).then(response => {
      if (response.data.mentions) {
        dispatch({ type: FETCH_FEED_LIST, payload: response.data.mentions });
      } else {
        dispatch(authError('Error retrieving mentions info'));
      }
    }).catch(err => {
      console.log(err);
    });
  };
}
