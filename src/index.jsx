import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';

import startup from './startup.js';
import reducers from './app/reducers';
import App from './app/components/app.jsx';
import CallbackHandler from './app/components/Auth/callbackHandler';

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

/**
* Entrypoint application
*/
render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/callback" component={CallbackHandler} />
        {/* <Route path="*" component={NoMatch}/> */}
      </Route>
    </Router>
  </Provider>
  , document.querySelector('#content')
);
