import { Grid, Segment, Image, Container } from 'semantic-ui-react';

import { Link } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';
import '../index.css';
import { Fragment } from 'react';

import { logo } from '../images/logo';

import { connect as reduxConnect } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';

import { toggleExportModal } from '../actions/stateActions';

import ExportModal from './ExportModal';

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

  return (
    <Fragment>
      <ExportModal />
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
                  src={logo}
                  alt='Red dot'
                  centered
                  style={{ marginTop: '4%' }}
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
                {/* <Grid.Column>
                  <Segment
                    inverted
                    color={'green'}
                    style={{
                      lineHeight: '2rem',
                      fontSize: '1.5rem',
                      margin: '3%',
                      width: '97%',
                    }}
                    //onClick={() => getSurveys('2020-12-01', '2021-2-1')}
                  >
                    View Previous Surveys
                  </Segment>
                </Grid.Column> */}
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
