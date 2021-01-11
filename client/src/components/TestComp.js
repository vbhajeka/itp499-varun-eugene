import { Grid, Segment, Image, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import '../index.css';
import { Fragment } from 'react';

import { logo } from '../images/logo';

import axios from 'axios';

export const TestComp = () => {
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

  return (
    <Fragment>
      <Container>
        <Grid>
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
                <Link to='/survey'>
                  <Segment
                    inverted
                    color={'blue'}
                    style={{ fontSize: '100%', margin: '3%', width: '97%' }}
                  >
                    Begin Operative Summary
                  </Segment>
                </Link>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row columns={1}>
              <Grid.Column>
                <Segment
                  inverted
                  color={'green'}
                  style={{ fontSize: '100%', margin: '3%', width: '97%' }}
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
