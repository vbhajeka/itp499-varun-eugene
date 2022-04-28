import {
  Container,
  Header,
  Grid,
  Segment,
  Button,
  Icon,
} from 'semantic-ui-react';

import React, { Fragment } from 'react';

import 'semantic-ui-css/semantic.min.css';
import '../index.css';

import { connect as reduxConnect } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';

import { toggleExportModal } from '../actions/stateActions';

import { switchMode } from '../actions/resultsActions';

// import GoogleMapReact from 'google-map-react';

import MapComponent from './MapComponent';

const ResultsPage = ({
  isMobile,
  homePageMessage,
  mode,
  modeMsg,
  switchMode,
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
  };
};

export default reduxConnect(mapStateToProps, {
  toggleExportModal,
  switchMode,
})(ResultsPage);
