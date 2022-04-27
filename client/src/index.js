import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';

import { Auth0Provider } from '@auth0/auth0-react';

import axios from 'axios';

import store from './store';

// function to get auth0 env vars from the server, then render page
const getAuth0Environment = async () => {
  console.log('in this func');
  try {
    // call api
    const res = await axios.get('/auth0/config');
    // set results
    const auth0Vars = {
      domain: res.data.domain,
      clientId: res.data.clientId,
      audience: res.data.audience,
    };
    // now that we've recieved auth0 env vars from the server, we can safely render the Auth0Provider
    renderIndexPage(auth0Vars);
  } catch (err) {
    console.log(err);
  }
};

const renderIndexPage = (auth0ConfigRes) => {
  ReactDOM.render(
    <Fragment>
      <Fragment>
        <Auth0Provider
          domain={auth0ConfigRes.domain}
          clientId={auth0ConfigRes.clientId}
          redirectUri={window.location.origin}
          audience={auth0ConfigRes.audience}
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
                    path='/review'
                    render={() => <App comp='review' />}
                  />
                  <Route
                    exact
                    path='/export'
                    render={() => <App comp='export' />}
                  />
                  <Route
                    exact
                    path='/about'
                    render={() => <App comp='about' />}
                  />
                  <Route
                    exact
                    path='/results'
                    render={() => <App comp='results' />}
                  />
                </Switch>
              </section>
            </Provider>
          </Router>
        </Auth0Provider>
      </Fragment>
    </Fragment>,
    document.getElementById('root')
  );
};

// load index page
getAuth0Environment();
