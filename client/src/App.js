import 'semantic-ui-css/semantic.min.css';
import './App.css';
import './index.css';

import HomePage from './components/HomePage';
import ConfirmPage from './components/ConfirmPage';
import QuestionBlock from './components/QuestionBlock';
import ReviewBlock from './components/ReviewBlock';

import { Segment, Header, Image } from 'semantic-ui-react';

import { useAuth0 } from '@auth0/auth0-react';

import { connect } from 'react-redux';

import { setAuth0Token } from './actions/stateActions';

import { setSurveyData } from './actions/blockActions';

import axios from 'axios';

function App({ comp, ping, setAuth0Token, token, setSurveyData, blocks }) {
  let visible_comp;

  console.log(comp);

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
    default:
      visible_comp = <HomePage />;
  }

  const {
    loginWithRedirect,
    logout,
    user,
    isAuthenticated,
    isLoading,
    getAccessTokenSilently,
  } = useAuth0();

  const loadSurvey = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const body = {};

    try {
      const res = await axios.post('/api/getSurveyData', body, config);
      console.log(res.status);
      await setSurveyData(res.data);
    } catch (err) {
      console.log(`err is ${err}`);
      console.log(JSON.stringify(err));
    }
  };

  console.log('user is', user);

  const setToken = async () => {
    let token = await getAccessTokenSilently();
    console.log('token is', token);
    setAuth0Token(token);
    return token;
  };

  if (isAuthenticated) {
    setToken();
    if (token && blocks === undefined) {
      loadSurvey();
    }
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
            HIPSTR Survey
            {/* <Segment
              inverted
              color={'blue'}
              style={{
                minWidth: '15%',
                verticalAlign: 'middle',
                textAlign: 'center',
                marginTop: '0.5%',
                marginRight: '0.5%',
                position: 'absolute',
                top: 0,
                right: 0,
                padding: '0.5em 0.5em',
              }}
              disabled={isLoading}
              onClick={() => attemptLogin()}
            >
              {isAuthenticated && (
                <Header size={'tiny'}>
                  <Image
                    src={user.picture}
                    alt={user.name}
                    circular
                    size={'mini'}
                  ></Image>
                  {user.name}
                </Header>
              )}
              {!isAuthenticated && <Header size={'tiny'}>Login</Header>}
              </Segment> */}
            {isAuthenticated && (
              <Image
                onClick={() => logout()}
                style={{ position: 'absolute', right: 0, marginBottom: '1rem' }}
                src={user.picture}
                alt={user.name}
                circular
                size={'mini'}
              ></Image>
            )}
          </Header>
        </Segment>
        <div id='middle' className='center'>
          {visible_comp}
        </div>
      </div>
      <Segment style={{ width: '100%' }} id='bottomBar' className='bars'>
        <p style={{ float: 'right' }}>Copyright Marc Safran 2021 &#169;</p>
        <p style={{ float: 'left' }}>V 1.0</p>
      </Segment>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ping: state.blocks.ping,
    cancelModalIsOpen: state.state.cancelModalIsOpen,
    token: state.state.auth0Token,
    blocks: state.blocks.blocks,
  };
};

export default connect(mapStateToProps, { setAuth0Token, setSurveyData })(App);
