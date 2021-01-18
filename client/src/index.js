import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';

import { Auth0Provider } from '@auth0/auth0-react';

import axios from 'axios';

import store from './store';

let authConfigRes = {
  loading: true,
  domain: null,
  clientId: null,
  audience: null,
};
const getAuthInfo = async () => {
  console.log('in this func');
  try {
    const res = await axios.get('/auth0/config');
    const authVars = {
      loading: false,
      domain: res.data.domain,
      clientId: res.data.clientId,
      audience: res.data.audience,
    };
    return authVars;
  } catch (err) {
    console.log(err);
  }
};

authConfigRes = getAuthInfo(authConfigRes);

ReactDOM.render(
  <Fragment>
    {authConfigRes.loading && authConfigRes.domain === null && (
      <div> Loading</div>
    )}
    {!(authConfigRes.loading && authConfigRes.domain === null) && (
      <Fragment>
        <Auth0Provider
          // domain={authConfigRes.domain}
          // clientId={authConfigRes.clientId}
          // redirectUri={window.location.origin}
          // audience={authConfigRes.audience}
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
                  <Route
                    exact
                    path='/survey'
                    render={() => <App comp='survey' />}
                  />
                  <Route
                    exact
                    path='/confirm'
                    render={() => <App comp='confirm' />}
                  />
                  <Route
                    exact
                    path='/review'
                    render={() => <App comp='review' />}
                  />
                  <Route
                    exact
                    path='/export'
                    render={() => <App comp='export' />}
                  />
                </Switch>
              </section>
            </Provider>
          </Router>
        </Auth0Provider>
      </Fragment>
    )}
  </Fragment>,
  document.getElementById('root')
);
