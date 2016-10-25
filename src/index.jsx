import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';

import startup from './startup';
import reducers from './app/reducers';
import App from './app/components/app';
import Welcome from './app/components/welcome';
import CallbackHandler from './app/components/Auth/callbackHandler';
import Signout from './app/components/Auth/signout';
import Lists from './app/components/lists';
import Feed from './app/components/feed';
import requireAuth from './app/components/Auth/requireAuth';
import { AUTH_USER } from './app/actions/types';

/**
* Function startup runs before app.
* Can overload window object
*/
startup(window);

/**
* Load Store middleware
* Useful when we need to add async method to fetch remote information
*/
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

// If token exists, consider the user to be signed in
const token = localStorage.getItem('token');
if (token) { store.dispatch({ type: AUTH_USER }); }

/**
* Entrypoint application
*/
render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Welcome} />
        <Route path="/callback" component={CallbackHandler} />
        <Route path="/signout" component={Signout} />
        <Route path="/lists" component={requireAuth(Lists)} />
        <Route path="/lists/:alert_id" component={requireAuth(Feed)} />
        {/* <Route path="*" component={NoMatch}/> */}
      </Route>
    </Router>
  </Provider>
  , document.querySelector('#content')
);
