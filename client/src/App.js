import 'semantic-ui-css/semantic.min.css';
import './App.css';
import './index.css';

import HomePage from './components/HomePage';
import ConfirmPage from './components/ConfirmPage';
import QuestionBlock from './components/QuestionBlock';
import ReviewBlock from './components/ReviewBlock';

import { Segment, Header } from 'semantic-ui-react';

import { useAuth0 } from '@auth0/auth0-react';

import { connect } from 'react-redux';

function App({ comp, ping }) {
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

  console.log(useAuth0());

  const {
    loginWithRedirect,
    logout,
    user,
    isAuthenticated,
    isLoading,
    getAccessTokenSilently,
  } = useAuth0();

  // const attemptLogin = () => {
  //   if (isLoading) {
  //     return;
  //   }
  //   if (!isAuthenticated) {
  //     loginWithRedirect();
  //     getToken();
  //   } else {
  //     logout({ returnTo: window.location.origin });
  //   }
  // };

  console.log('user is', user);

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
  };
};

export default connect(mapStateToProps, {})(App);
