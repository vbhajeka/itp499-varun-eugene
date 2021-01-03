import { Grid, Segment, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import '../index.css';

export const TestComp = () => {
  return (
    <Grid verticalAlign='middle'>
      <Grid.Row columns={1}>
        <Grid.Column>
          <Header size='huge' id='questionTitleHeader'>
            Hip Arthroscopy Surgery Survey
          </Header>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row columns={1}>
        <Grid.Column>
          <div
            style={{
              color: 'white',
              'font-size': '100%',
              'line-height': '1.5em',
              textAlign: 'left',
            }}
          >
            Treatment of hip pathology through a minimally invasive approach.
            This technique is sometimes used to help in the treatment of various
            joint disorders and has gained popularity because of the small
            incisions used and shorter recovery times when compared with
            conventional surgical techniques
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row columns={1}>
        <Grid.Column>
          <Link to='/'>
            <Segment inverted color={'blue'} style={{ 'font-size': '100%' }}>
              Begin Operative Summary
            </Segment>
          </Link>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row columns={1}>
        <Grid.Column>
          <Link to='/'>
            <Segment inverted color={'green'} style={{ 'font-size': '100%' }}>
              View Previous Surveys
            </Segment>
          </Link>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
