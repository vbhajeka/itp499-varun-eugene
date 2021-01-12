import { Grid, Segment, Image, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { useHistory } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';
import '../index.css';
import { Fragment } from 'react';

import { logo } from '../images/logo';

import axios from 'axios';

import { connect as reduxConnect } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';

const HomePage = ({ submitted, token }) => {
  const history = useHistory();

  const { isAuthenticated } = useAuth0();

  const getSurveys = async (sd, ed) => {
    console.log('getting');
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = { startDate: sd, endDate: ed };

    try {
      const res = await axios.post('/api/getSurveys', body, config);
      downloadCsv(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const downloadCsv = (body) => {
    body.forEach((x) => {
      x.surveyAnswers.forEach((y) => {
        console.log(JSON.parse(y));
      });
    });
  };

  const beginSurvey = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const body = {};

    try {
      const res = await axios.post('/api/external', body, config);
      downloadCsv(res.data);
    } catch (err) {
      console.log(err);
    }

    if (isAuthenticated) {
      history.push('/survey');
    } else {
      console.log('not authenticated');
    }
  };

  return (
    <Fragment>
      <Container>
        <Grid>
          <Grid.Row>
            {submitted && (
              <Segment
                style={{ position: 'absolute', top: 0, width: '100%' }}
                color={'green'}
                inverted
              >
                Thank you for Submitting!
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
          <Container style={{ position: 'absolute', bottom: '3.6%' }}>
            <Grid.Row columns={1}>
              <Grid.Column>
                <Segment
                  inverted
                  color={'blue'}
                  style={{
                    lineHeight: '100%',
                    fontSize: '100%',
                    margin: '3%',
                    width: '97%',
                  }}
                  onClick={() => beginSurvey()}
                >
                  Begin Operative Summary
                </Segment>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row columns={1}>
              <Grid.Column>
                <Segment
                  inverted
                  color={'green'}
                  style={{
                    lineHeight: '100%',
                    fontSize: '100%',
                    margin: '3%',
                    width: '97%',
                  }}
                  onClick={() => getSurveys('2020-12-01', '2021-2-1')}
                >
                  View Previous Surveys
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Container>
        </Grid>
      </Container>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    submitted: state.blocks.submitted,
    token: state.state.auth0Token,
  };
};

export default reduxConnect(mapStateToProps, {})(HomePage);
