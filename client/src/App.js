import 'semantic-ui-css/semantic.min.css';
import './App.css';
import './index.css';

import HomePage from './components/HomePage';
import QuestionBlock from './components/QuestionBlock';
import ReviewBlock from './components/ReviewBlock';
import ExportPage from './components/ExportPage';
import AboutPage from './components/AboutPage';
import ResultsPage from './components/ResultsPage';

import { Segment, Header, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { useAuth0 } from '@auth0/auth0-react';
import { connect } from 'react-redux';

import { setSurveyData, setPrefs } from './actions/blockActions';
import { updateHPMessage } from './actions/stateActions';

import axios from 'axios';

const jwToken = require('jsonwebtoken');

function App({
  comp,
  ping,
  setSurveyData,
  setPrefs,
  blocks,
  isMobile,
  updateHPMessage,
}) {
  let visible_comp;

  switch (comp) {
    case 'survey':
      visible_comp = <QuestionBlock />;
      break;
    case 'review':
      visible_comp = <ReviewBlock />;
      break;
    case 'export':
      visible_comp = <ExportPage />;
      break;
    case 'about':
      visible_comp = <AboutPage />;
      break;
    case 'results':
      visible_comp = <ResultsPage />;
      break;
    default:
      visible_comp = <HomePage />;
  }

  const { logout, user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  const loadHomePageOptions = async () => {
    try {
      let token = await getAccessTokenSilently();
      // console.log('App.js: token set ' + token);

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
    if (blocks === undefined) loadHomePageOptions();
  } else {
    console.log('Waiting for User to Login');
  }

  if (window.matchMedia('(max-width: 767px)').matches) {
    isMobile = true;
  } else {
    isMobile = false;
  }

  return (
    <div className='App'>
      <div id='artificial-background'>
        <Segment style={{ width: '100%' }} id='topBar' className='bars'>
          <Header
            style={{ color: 'white' }}
            size={'large'}
            textAlign={'center'}
          >
            PlanCommute
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
            {comp != 'about' && (
              <Link to='/about'>
                <Segment
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    margin: '0.5rem',
                    padding: '0.5rem',
                    backgroundColor: 'black !important',
                    opacity: '0.9',
                  }}
                  textAlign='center'
                  color='green'
                  inverted
                >
                  <Header
                    size={'tiny'}
                    style={{
                      // marginLeft: '0.75rem',
                      // marginRight: '0.75rem',
                      // marginTop: '0.5rem',
                      // marginBottom: '0.5rem',
                      margin: '0.25rem 0.75rem',
                    }}
                  >
                    More Information
                  </Header>
                </Segment>
              </Link>
            )}
            {comp === 'about' && (
              <Link to='/'>
                <Segment
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    margin: '0.5rem',
                    padding: '0.5rem',
                    backgroundColor: 'black !important',
                    opacity: '0.9',
                  }}
                  textAlign='center'
                  color='green'
                  inverted
                >
                  <Header
                    size={'tiny'}
                    style={{
                      margin: '0.25rem 0.75rem',
                    }}
                  >
                    Back to Home
                  </Header>
                </Segment>
              </Link>
            )}
          </Header>
        </Segment>
        <div id='middle' className='center'>
          {visible_comp}
        </div>
      </div>
      <Segment style={{ width: '100%' }} id='bottomBar' className='bars'>
        {/* <p style={{ float: 'right' }}>&#169; Copyright 2021 Dr. Marc Safran</p> */}
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
  updateHPMessage,
})(App);
