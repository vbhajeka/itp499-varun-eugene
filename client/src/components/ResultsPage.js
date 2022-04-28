import {
  Container,
  Header,
  Segment,
  Button,
  Icon,
  Image,
} from 'semantic-ui-react';

import React, { Fragment } from 'react';

import 'semantic-ui-css/semantic.min.css';
import '../index.css';

import { connect as reduxConnect } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';

import { toggleExportModal } from '../actions/stateActions';

import { switchMode, viewResultsFunc } from '../actions/resultsActions';

import { leafWorld } from '../images/leafWorld';

import MapComponent from './MapComponent';

const ResultsPage = ({
  isMobile,
  homePageMessage,
  mode,
  modeMsg,
  switchMode,
  viewResultsFunc,
  viewResults,
}) => {
  const { error } = useAuth0();

  if (window.matchMedia('(max-width: 767px)').matches) {
    isMobile = true;
  } else {
    isMobile = false;
  }

  if (error) {
    homePageMessage = `${error}`;
    console.log(error);
  }

  var header;
  switch (mode) {
    case 0:
      header = 'If you plan to drive a Hybrid or Electric car...';
      break;
    case 1:
      header = 'Have you considered biking...?';
      break;
    case 2:
      header = 'You can always use public transport...';
      break;
    default:
      header =
        'Need coffee before your exercise? Try biking one way and taking the bus back';
  }

  return (
    <Fragment>
      {viewResults && (
        <Container
          fluid
          style={{
            overflowX: 'hidden',
            marginBottom: '2%',
            marginTop: '2%',
          }}
        >
          <Header as='h1'>{header}</Header>

          <MapComponent mode={mode} content={modeMsg} />
          <Button onClick={() => switchMode()}>
            <Segment>
              <Container text textAlign='center'>
                But what about other options?
              </Container>
              <Icon name='angle double down' />
            </Segment>
          </Button>
        </Container>
      )}
      {!viewResults && (
        <Container
          fluid
          style={{
            overflowX: 'hidden',
            marginBottom: '2%',
            marginTop: '2%',
          }}
        >
          <Header as='h1'>Your Eco Score</Header>
          <Container fluid text>
            <br />
            <Header as='h2'>
              In our recommendations, we evaluate an Eco Score for each mode of
              transportation. Higher scores mean a lower carbon footprint.
            </Header>
          </Container>
          <Container>
            <Image
              src={leafWorld}
              alt='Red dot'
              centered
              style={{ marginTop: '4%' }}
              size={'medium'}
            />
          </Container>
          <Container
            textAlign='center'
            style={{ position: 'absolute', bottom: '3.6%' }}
          >
            <Button onClick={() => viewResultsFunc()}>
              <Segment inverted color={'green'}>
                <Container text textAlign='center'>
                  View my Results!
                </Container>
              </Segment>
            </Button>
          </Container>
        </Container>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    continueToSurvey: state.blocks.cont,
    isAdmin: state.state.isAdmin,
    homePageMessage: state.state.homePageMessage,
    mode: state.results.transitMode,
    modeMsg: state.results.transitModeMessage,

    viewResults: state.results.viewResults,
  };
};

export default reduxConnect(mapStateToProps, {
  toggleExportModal,
  switchMode,
  viewResultsFunc,
})(ResultsPage);
