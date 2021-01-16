import React, { Fragment } from 'react';

import { connect } from 'react-redux';
import { Container, Grid, Header, Button } from 'semantic-ui-react';

import { getSurveyAction } from '../actions/exportActions';

const ExportPage = ({ getSurveyAction }) => {
  return (
    <Fragment>
      <Container
        id='header'
        style={{
          backgroundColor: 'white',
          padding: '3%',
          borderRadius: '10px',
        }}
      >
        <Grid padded divided>
          <Grid.Row columns={'5'}>
            <Grid.Column>
              <Header
                size={'small'}
                color={'blue'}
                style={{ lineHeight: '2rem' }}
              >
                Header 1
              </Header>
              <Button onClick={() => getSurveyAction()}>action</Button>
            </Grid.Column>
            <Grid.Column>
              <Header
                size={'small'}
                color={'blue'}
                style={{ lineHeight: '2rem' }}
              >
                Header 2
              </Header>
            </Grid.Column>
            <Grid.Column>
              <Header
                size={'small'}
                color={'blue'}
                style={{ lineHeight: '2rem' }}
              >
                Header 3
              </Header>
            </Grid.Column>
            <Grid.Column>
              <Header
                size={'small'}
                color={'blue'}
                style={{ lineHeight: '2rem' }}
              >
                Header 4
              </Header>
            </Grid.Column>
            <Grid.Column>
              <Header
                size={'small'}
                color={'blue'}
                style={{ lineHeight: '2rem' }}
              >
                Header 5
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { getSurveyAction })(ExportPage);
