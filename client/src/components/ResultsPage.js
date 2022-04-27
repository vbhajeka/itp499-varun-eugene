import {
  Container,
  Header,
  Grid,
  Segment,
  Button,
  Icon,
} from 'semantic-ui-react';

import React from 'react';

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

  var carType = 'Electric';

  /* One way distance and cost of commute */

  //   var oneWayDistance = 35;

  /* FROM API RESPONSE*/

  //   var oneWayGasCost = 0.208 * oneWayDistance;
  //   var oneWayHybridCost = 0.125 * oneWayDistance;
  //   var oneWayElectricCost = 0.083 * oneWayDistance;
  //   var commuteNumber = 22 * 2;
  //   var monthlyGasCost = commuteNumber * oneWayGasCost;
  //   var monthlyHybridCost = commuteNumber * oneWayHybridCost;
  //   var monthlyElectricCost = commuteNumber * oneWayElectricCost;
  //   var monthlyHybridDiff = monthlyGasCost - monthlyHybridCost;
  //   var monthlyElectricDiff = monthlyGasCost - monthlyElectricCost;

  var morningDrivingTime = 15;

  /* FROM API RESPONSE*/

  var eveningDrivingTime = 18;

  /* FROM API RESPONSE*/

  var totalDrivingTime = morningDrivingTime + eveningDrivingTime;

  //   var bikeRoundCostDiff = 2 * oneWayGasCost - 0;
  var bikeOneWayTime = 25;

  /* FROM API RESPONSE*/

  var bikeRoundTimeDiff = 2 * bikeOneWayTime - totalDrivingTime;

  var transitMorningTime = 35;

  /* FROM API RESPONSE*/

  var transitEveningTime = 38;

  /* FROM API RESPONSE*/

  var transitTotalTime = transitMorningTime + transitEveningTime;
  //   var transitRoundCostDiff = 2 * oneWayGasCost - 2.5;
  var transitRoundTimeDiff = transitTotalTime - totalDrivingTime;
  var carDailyCost = 41;

  const rotateMode = () => {
    var newMode;
    switch (mode) {
      case 'drive':
        newMode = 'bike';
        break;
      case 'bike':
        newMode = 'transit';
        break;
      default:
        newMode = 'drive';
    }
    switchMode(newMode, 'bike yayay');
  };

  //   const handleApiLoaded = (map, maps, mode) => {
  //     // use map and maps objects
  //     var transitMode;
  //     switch (mode) {
  //       case 'drive':
  //         transitMode = maps.TravelMode.DRIVING;
  //         break;
  //       case 'bike':
  //         transitMode = maps.TravelMode.BICYCLING;
  //         break;
  //       case 'transit':
  //         transitMode = maps.TravelMode.TRANSIT;
  //         break;
  //     }

  //     const directionsService = new maps.DirectionsService();
  //     const directionsRenderer = new maps.DirectionsRenderer();

  //     directionsService
  //       .route({
  //         origin: {
  //           query: '2565 Ellendale Pl Los Angeles CA 90007',
  //         },
  //         destination: {
  //           query: '10745 Dickson Ct, Los Angeles, CA 90095',
  //         },
  //         travelMode: maps.TravelMode.BICYCLING,
  //       })
  //       .then((response) => {
  //         console.log(response);
  //         directionsRenderer.setDirections(response);
  //         directionsRenderer.setMap(map);
  //         console.log('rendered...?');
  //       })
  //       .catch((e) => console.log('error'));
  //   };

  return (
    <Container>
      <Header as='h1'>If you buy a {carType} car...</Header>
      {/* <Segment>
        <Grid centered columns={2}>
          <Grid.Column>
            <Segment>
              <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: 'AIzaSyC8XUHzHj-4Fwjv_-lS04AplPam2cZ0PVc',
                  }}
                  defaultCenter={defaultProps.center}
                  defaultZoom={defaultProps.zoom}
                  onGoogleApiLoaded={({ map, maps }) =>
                    handleApiLoaded(map, maps, 'drive')
                  }
                ></GoogleMapReact>
              </div>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Container text>
              You can save ${Math.round(monthlyElectricDiff)} in gas every
              month!
            </Container>
          </Grid.Column>
        </Grid>
      </Segment> */}
      <MapComponent mode={mode} content={modeMsg} />
      <Button onClick={() => rotateMode('bike')}>
        <Segment>
          <Container text textAlign='center'>
            But what about other options?
          </Container>
          <Icon name='angle double down' />
        </Segment>
      </Button>

      <Header as='h2' textAlign='center'>
        You can take...
      </Header>

      {/* <Segment>
        <Grid centered columns={2}>
          <Grid.Column>
            <Grid centered columns={2}>
              <Grid.Column>
                <Icon name='bicycle' />
              </Grid.Column>
              <Grid.Column centered>
                <Header as='h3'>Bike</Header>
              </Grid.Column>
            </Grid>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: 'AIzaSyC8XUHzHj-4Fwjv_-lS04AplPam2cZ0PVc',
              }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
              onGoogleApiLoaded={({ map, maps }) =>
                handleApiLoaded(map, maps, 'bike')
              }
            ></GoogleMapReact>
          </Grid.Column>
          <Grid.Column>
            <Container text>
              It will take {bikeRoundTimeDiff} more minutes than driving.
            </Container>
            <Container text>
              And it's free! This saves you ${Math.round(bikeRoundCostDiff)} a
              day.
            </Container>
          </Grid.Column>
        </Grid>
      </Segment> */}
      {/* <mapComponent mode='bike' /> */}

      {/* <Segment>
        <Grid centered columns={2}>
          <Grid.Column>
            <Grid centered columns={2}>
              <Grid.Column>
                <Icon name='bus' />
              </Grid.Column>
              <Grid.Column centered>
                <Header as='h3'>Transit</Header>
              </Grid.Column>
            </Grid>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: 'AIzaSyC8XUHzHj-4Fwjv_-lS04AplPam2cZ0PVc',
              }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
              onGoogleApiLoaded={({ map, maps }) =>
                handleApiLoaded(map, maps, 'transit')
              }
            ></GoogleMapReact>
          </Grid.Column>
          <Grid.Column>
            <Container text>
              It will take {transitRoundTimeDiff} more minutes than driving.
            </Container>
            <Container text>
              And it's free! This saves you ${Math.round(transitRoundCostDiff)}{' '}
              a day.
            </Container>
          </Grid.Column>
        </Grid>
      </Segment> */}
      {/* <mapComponent mode='transit' /> */}

      <Header as='h2' textAlign='center'>
        If you have more time, consider mixing and matching...{' '}
      </Header>
      <Segment>
        <Grid centered={true} columns={2}>
          <Grid.Column>
            <Grid centered={true} columns={2}>
              <Grid.Column>
                <Icon name='bicycle' />
                <Icon name='bus' />
              </Grid.Column>
              <Grid.Column centered='true'>
                <Header as='h3'>Morning: Bike</Header>
                <Header as='h3'>Evening: Transit</Header>
              </Grid.Column>
            </Grid>
          </Grid.Column>
          <Grid.Column>
            <Container text>
              It will take {bikeRoundTimeDiff} more minutes than driving.
            </Container>
            <Container text>
              It will take {transitRoundTimeDiff} more minutes than driving.
            </Container>
            <Container text>
              It's not free. This saves you ${carDailyCost} a day.
            </Container>
          </Grid.Column>
        </Grid>
      </Segment>
    </Container>
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
