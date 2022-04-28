import { Grid, Header, Segment, Container } from 'semantic-ui-react';

import { Link } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';
import '../index.css';
import { Fragment } from 'react';
import axios from 'axios';

import { connect as reduxConnect } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';

import ExportModal from './ExportModal';

import { newer_logo } from '../images/newer_logo';

import { toggleExportModal } from '../actions/stateActions';

const HomePage = ({
  toggleExportModal,
  isAdmin,
  isMobile,
  homePageMessage,
}) => {
  const {
    isAuthenticated,
    loginWithRedirect,
    logout,
    getAccessTokenSilently,
    isLoading,
    error,
  } = useAuth0();

  if (window.matchMedia('(max-width: 767px)').matches) {
    isMobile = true;
  } else {
    isMobile = false;
  }

  if (error) {
    homePageMessage = `${error}`;
    console.log(error);
  }

  const callPost = async () => {
    console.log('hello');
    try {
      let token = await getAccessTokenSilently();
      console.log('ReviewBlk.js: token set ' + token);
      // const config = {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //     'Content-Type': 'application/json',
      //   },
      // };

      const ecoData = {
        lat_pre: 34.024733,
        long_pre: -118.2901094,
        lat_dest: 34.0160111,
        long_dest: -118.4872476,
      };

      const body = { ecoData };

      const res = await axios.post('/computeEcoScore', body);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Fragment>
      {/* <ExportModal />
      <Container>
        <Grid>
          <Grid.Row>
            {homePageMessage && (
              <Segment
                style={{
                  position: 'absolute',
                  top: 0,
                  width: '100%',
                  fontSize: '1rem',
                }}
                color={'black'}
                inverted
              >
                {homePageMessage}
              </Segment>
            )}
          </Grid.Row>
          <Grid.Row columns={1}>
            <Grid.Column>
              <div
                style={{
                  color: 'white',
                  fontSize: '100%',
                  lineHeight: '2em',
                  textAlign: 'center',
                }}
              >
                <Image
                  // src={logo}
                  // src={new_logo}
                  src={newer_logo}
                  alt='Red dot'
                  centered
                  style={{ marginTop: '4%' }}
                  onClick={() => callPost()}
                />
              </div>
            </Grid.Column>
          </Grid.Row>
          {isAuthenticated && (
            <Container style={{ position: 'absolute', bottom: '3.6%' }}>
              <Grid.Row columns={1}>
                <Grid.Column>
                  <Link to='/survey'>
                    <Segment
                      inverted
                      color={'blue'}
                      style={{
                        lineHeight: '2rem',
                        fontSize: '1.5rem',
                        margin: '3%',
                        width: '97%',
                      }}
                    >
                      Begin Operative Summary
                    </Segment>
                  </Link>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row columns={isAdmin ? 2 : 1}>
                {isAdmin && !isMobile && (
                  <Grid.Column>
                    <Segment
                      inverted
                      color={'orange'}
                      style={{
                        lineHeight: '2rem',
                        fontSize: '1.5rem',
                        margin: '3%',
                        width: '97%',
                      }}
                      onClick={() => toggleExportModal()}
                    >
                      Export Surveys
                    </Segment>
                  </Grid.Column>
                )}
              </Grid.Row>
            </Container>
          )}
          {!isAuthenticated && !error && (
            <Container style={{ padding: '4rem' }}>
              <Grid>
                <Grid.Row columns={'1'}>
                  <Grid.Column>
                    <Segment
                      disabled={isLoading}
                      inverted
                      color={'blue'}
                      onClick={() => loginWithRedirect()}
                      style={{ lineHeight: '2rem', fontSize: '1.5rem' }}
                    >
                      Click here to login and fill out survey
                    </Segment>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          )}
          {!isAuthenticated && error && (
            <Container style={{ padding: '4rem' }}>
              <Grid>
                <Grid.Row columns={'1'}>
                  <Grid.Column>
                    <Segment
                      disabled={isLoading}
                      inverted
                      color={'red'}
                      onClick={() =>
                        logout({ returnTo: window.location.origin })
                      }
                      style={{ lineHeight: '2rem', fontSize: '1.5rem' }}
                    >
                      Logout and Try Again
                    </Segment>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          )}
        </Grid>
      </Container> */}

      <Container>
        <br />
        <br />
        <br />
        <br />
        <Header as='h1' textAlign='center'>
          Interested in buying a car in LA?
          <br />
          Want to be greener?
        </Header>
        <br />
        <Header as='h1' textAlign='center'>
          See how much you’d save with an all electric or hybrid vehicle.{' '}
        </Header>
        <br />
        <Header as='h1' textAlign='center'>
          Or see other, more impactful, options for your commute.{' '}
        </Header>
        <br />
        <br />
        <Container style={{ position: 'absolute', bottom: '3.6%' }}>
          <Grid.Row columns={1}>
            <Grid.Column>
              {isAuthenticated && (
                <Link to='/survey'>
                  <Segment
                    inverted
                    color={'green'}
                    style={{
                      lineHeight: '2rem',
                      fontSize: '1.5rem',
                      margin: '3%',
                      width: '97%',
                    }}
                  >
                    Plan Your Commute
                  </Segment>
                </Link>
              )}
              {!isAuthenticated && (
                <Segment
                  inverted
                  disabled
                  color={'green'}
                  style={{
                    lineHeight: '2rem',
                    fontSize: '1.5rem',
                    margin: '3%',
                    width: '97%',
                  }}
                >
                  Plan Your Commute
                </Segment>
              )}
            </Grid.Column>
          </Grid.Row>
        </Container>
      </Container>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    continueToSurvey: state.blocks.cont,
    isAdmin: state.state.isAdmin,
    homePageMessage: state.state.homePageMessage,
  };
};

export default reduxConnect(mapStateToProps, {
  toggleExportModal,
})(HomePage);
