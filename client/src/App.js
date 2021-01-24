import 'semantic-ui-css/semantic.min.css';
import './App.css';
import './index.css';

import HomePage from './components/HomePage';
import ConfirmPage from './components/ConfirmPage';
import QuestionBlock from './components/QuestionBlock';
import ReviewBlock from './components/ReviewBlock';
import ExportPage from './components/ExportPage';

import { Segment, Header, Image } from 'semantic-ui-react';

import { useAuth0 } from '@auth0/auth0-react';
import { connect } from 'react-redux';

import { setSurveyData, setPrefs } from './actions/blockActions';

import axios from 'axios';

const jwToken = require('jsonwebtoken');

function App({ comp, ping, setSurveyData, setPrefs, blocks, isMobile }) {
  let visible_comp;

  switch (comp) {
    case 'survey':
      visible_comp = <QuestionBlock />;
      break;
    case 'confirm':
      visible_comp = <ConfirmPage />;
      break;
    case 'review':
      visible_comp = <ReviewBlock />;
      break;
    case 'export':
      visible_comp = <ExportPage />;
      break;
    default:
      visible_comp = <HomePage />;
  }

  const { logout, user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  const loadHomePageOptions = async () => {
    try {
      let token = await getAccessTokenSilently();
      console.log('App.js: token set ' + token);

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      console.log('Authenticated User is', user);
      const res = await axios.get('/api/getSurveyData', config);

      // decode token
      let decoded = jwToken.decode(token, { complete: true });

      await setSurveyData(
        res.data.questions,
        decoded.payload[`http://hipstr-survey/roles`] &&
          decoded.payload[`http://hipstr-survey/roles`].includes('survey_admin')
      );

      // if the user has prefs, load them
      if (res.data.prefs) {
        await setPrefs(res.data.prefs);
      }

      return;
    } catch (err) {
      console.log(`Page load after Authentication failed: ${err}`);
      return;
    }
  };

  if (isAuthenticated) {
    // get fresh token before calling backend for fresh survey
    // setToken();
    if (/*token &&*/ blocks === undefined) loadHomePageOptions();
  } else {
    console.log('Waiting for User to Login');
  }

  if (window.matchMedia('(max-width: 767px)').matches) {
    isMobile = true;
  } else {
    isMobile = false;
  }

  // const mql = window.matchMedia('(max-width: 767px)');

  // let mobileView = mql.matches;

  // const resetMobileView = (mobileView) => {
  //   if (mobileView) {
  //     isMobile = true;
  //   } else {
  //     isMobile = false;
  //   }
  // };

  // resetMobileView(mobileView);

  return (
    <div className='App'>
      <div id='artificial-background'>
        <Segment style={{ width: '100%' }} id='topBar' className='bars'>
          <Header
            style={{ color: 'white' }}
            size={'large'}
            textAlign={'center'}
          >
            HipSTER Survey
            {isAuthenticated && !isMobile && (
              <Segment
                style={{
                  position: 'absolute',
                  right: 0,
                  top: 0,
                  margin: '0.5rem',
                  padding: '0.5rem',
                  backgroundColor: 'black !important',
                }}
                onClick={() => logout({ returnTo: window.location.origin })}
                inverted
              >
                <Header size={'tiny'} style={{ marginLeft: '0.75rem' }}>
                  {user.name}
                  <Image
                    src={user.picture}
                    alt={user.name}
                    circular
                    size={'mini'}
                    style={{ marginLeft: '0.75rem' }}
                  ></Image>
                </Header>
              </Segment>
            )}
            {isAuthenticated && isMobile && (
              <Image
                src={user.picture}
                alt={user.name}
                circular
                size={'mini'}
                onClick={() => logout({ returnTo: window.location.origin })}
                floated={'right'}
              ></Image>
            )}
          </Header>
        </Segment>
        <div id='middle' className='center'>
          {visible_comp}
        </div>
      </div>
      <Segment style={{ width: '100%' }} id='bottomBar' className='bars'>
        <p style={{ float: 'right' }}>&#169; Copyright 2021 Dr. Marc Safran</p>
        <p style={{ float: 'left' }}>V 1.0</p>
      </Segment>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ping: state.blocks.ping,
    cancelModalIsOpen: state.state.cancelModalIsOpen,
    blocks: state.blocks.blocks,
  };
};

export default connect(mapStateToProps, {
  setSurveyData,
  setPrefs,
})(App);
