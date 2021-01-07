import { Grid, Segment, Header, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import '../index.css';
import { Fragment } from 'react';

export const TestComp = () => {
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
                Treatment of hip pathology through a minimally invasive
                approach. This technique is sometimes used to help in the
                treatment of various joint disorders and has gained popularity
                because of the small incisions used and shorter recovery times
                when compared with conventional surgical techniques
              </div>
            </Grid.Column>
          </Grid.Row>
          <Container style={{ position: 'absolute', bottom: '3.6%' }}>
            <Grid.Row columns={1}>
              <Grid.Column>
                <Link to='/'>
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
