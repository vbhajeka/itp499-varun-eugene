import { Grid, Segment, Image, Container } from 'semantic-ui-react';

import { useHistory, Link } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';
import '../index.css';
import { Fragment } from 'react';

import { logo } from '../images/logo';

import axios from 'axios';

import { connect as reduxConnect } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';

import { setSurveyData } from '../actions/blockActions';
import { toggleExportModal } from '../actions/stateActions';

import ExportModal from './ExportModal';

const HomePage = ({
  submitted,
  token,
  setSurveyData,
  continueToSurvey,
  toggleExportModal,
  isAdmin = true,
}) => {
  const history = useHistory();

  const {
    isAuthenticated,
    loginWithRedirect,
    logout,
    isLoading,
    user,
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

  console.log(continueToSurvey);
  console.log(isLoading);
  console.log(isAdmin ? 2 : 1);

  return (
    <Fragment>
      <ExportModal />
      <Container>
        <Grid>
          <Grid.Row>
            {submitted && (
              <Segment
                style={{ position: 'absolute', top: 0, width: '100%' }}
                color={'green'}
                inverted
              >
                Thank you for Submitting! An email with your selections has been
                sent to {user.email}!
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
                      color={'green'}
                      style={{
                        lineHeight: '2rem',
                        fontSize: '1.5rem',
                        margin: '3%',
                        width: '97%',
                      }}
                      //onClick={() => getSurveys('2020-12-01', '2021-2-1')}
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
  };
};

export default reduxConnect(mapStateToProps, {
  setSurveyData,
  toggleExportModal,
})(HomePage);
