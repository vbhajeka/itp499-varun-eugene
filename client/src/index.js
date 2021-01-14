import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';

import { Auth0Provider } from '@auth0/auth0-react';

import store from './store';

ReactDOM.render(
  <Auth0Provider
    /**domain={process.env.AUTH_DOMAIN}
    clientId={process.env.AUTH0_CLIENT_ID}
    redirectUri={window.location.origin}
    audience={process.env.AUTH_AUDIENCE} */
    domain='dev-g1b86-e1.us.auth0.com'
    clientId='EavhqaPMrv16U1GY0WYHOPwfinV4wiHB'
    redirectUri={window.location.origin}
    audience='https://dev-g1b86-e1.us.auth0.com/api/v2/'
    scope='read:current_user update:current_user_metadata'
  >
    <Router>
      <Provider store={store}>
        <Route exact path='/' component={App} />
        <section>
          <Switch>
            <Route exact path='/survey' render={() => <App comp='survey' />} />
            <Route
              exact
              path='/confirm'
              render={() => <App comp='confirm' />}
            />
            <Route exact path='/review' render={() => <App comp='review' />} />
            <Route exact path='/img' render={() => <App comp='img' />} />
          </Switch>
        </section>
      </Provider>
    </Router>
  </Auth0Provider>,
  document.getElementById('root')
);
