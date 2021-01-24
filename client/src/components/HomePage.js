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

const HomePage = ({ submitted, toggleExportModal, isAdmin }) => {
  const {
    isAuthenticated,
    loginWithRedirect,
    logout,
    isLoading,
    user,
    error,
  } = useAuth0();

  const attemptLogin = () => {
    if (isLoading) {
      return;
    }
    if (!isAuthenticated) {
      loginWithRedirect();
    } else {
      logout({ returnTo: window.location.origin });
    }
  };

  let homePageMessage = null;
  const queryString = window.location.search;
  if (queryString) {
    let params = {};
    queryString
      .substr(1)
      .split('&')
      .forEach((item) => {
        let s = item.split('='),
          key = s[0],
          value = s[1] && decodeURIComponent(s[1]); //  null-coalescing / short-circuit
        (params[key] = params[key] || []).push(value); // null-coalescing / short-circuit
      });
    console.log('Query Parameters are' + JSON.stringify(params));
    if (
      params.error &&
      params.error_description &&
      params.error_description.length > 0
    ) {
      homePageMessage = { msg: params.error_description[0], type: 'err' };
    }
  }

  if (submitted) {
    homePageMessage = {
      msg: `Thank you for your submission! A copy has been emailed to ${user.email}!`,
      type: 'suc',
    };
  }

  // if (error) {
  //   homePageMessage = {
  //     msg: `Authentication Error, please reload page & login again: ${error}`,
  //     type: 'err',
  //   };
  // }

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
                {homePageMessage.msg}
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
                <Grid.Column>
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
                </Grid.Column>
                {isAdmin && (
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
          {!isAuthenticated && (
            <Container style={{ padding: '4rem' }}>
              <Grid>
                <Grid.Row columns={'1'}>
                  <Grid.Column>
                    <Segment
                      disabled={isLoading}
                      inverted
                      color={'blue'}
                      onClick={() => attemptLogin()}
                      style={{ lineHeight: '2rem', fontSize: '1.5rem' }}
                    >
                      Click here to login and fill out survey
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
    submitted: state.state.submitted,
    token: state.state.auth0Token,
    continueToSurvey: state.blocks.cont,
    isAdmin: state.state.isAdmin,
  };
};

export default reduxConnect(mapStateToProps, {
  toggleExportModal,
})(HomePage);
