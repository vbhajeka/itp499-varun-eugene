import {
  Grid,
  Segment,
  Image,
  Container,
  Header,
  Icon,
} from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';
import '../index.css';
import { Fragment } from 'react';

import { connect as reduxConnect } from 'react-redux';

import { toggleExportModal } from '../actions/stateActions';

import {
  storeMaps,
  saveDrive,
  saveBike,
  saveTransit,
  pingFunc,
  setEcoScore,
} from '../actions/resultsActions';

import GoogleMapReact from 'google-map-react';

const MapComponent = ({
  mode,
  content,
  transitMode,
  gmap,
  gmaps,
  buttonPressed,
  storeMaps,
  modesArray,

  homeAddy,
  workAddy,

  ecoScoreElectric,
  ecoScoreHybrid,
  ecoScoreBike,
  ecoScoreTransit,
  ecoScoreCombo,

  blocks,
  rebateInfo,
  driveData,
  bikeData,
  transitData,

  ping,
  pingFunc,
  setEcoScore,
}) => {
  const defaultProps = {
    center: {
      lat: 34.001928,
      lng: -118.293934,
    },
    zoom: 7,
  };

  const handleApiLoaded = (map, maps) => {
    // use map and maps objects
    storeMaps(map, maps);
    console.log(modesArray[mode] + ' is mode');
    switch (mode) {
      case 0:
        transitMode = maps.TravelMode.DRIVING;
        break;
      case 1:
        transitMode = maps.TravelMode.BICYCLING;
        break;
      case 2:
        transitMode = maps.TravelMode.TRANSIT;
        break;
      default:
        transitMode = maps.TravelMode.TRANSIT;
    }

    const directionsService = new maps.DirectionsService();
    const directionsRenderer = new maps.DirectionsRenderer();

    directionsService
      .route({
        origin: {
          query: homeAddy,
        },
        destination: {
          query: workAddy,
        },
        travelMode: transitMode,
      })
      .then((response) => {
        console.log(response);

        setMessage(response);
        // switch (mode) {
        //   case 0:
        //     console.log('saving drive data');
        //     saveDrive(
        //       response.routes[0].legs[0].duration.text,
        //       response.routes[0].legs[0].distance.text,
        //       msg
        //     );

        //     break;
        //   case 1:
        //     saveBike(
        //       response.routes[0].legs[0].duration.text,
        //       response.routes[0].legs[0].distance.text,
        //       msg
        //     );
        //     break;
        //   case 2:
        //     saveTransit(
        //       response.routes[0].legs[0].duration.text,
        //       response.routes[0].legs[0].distance.text,
        //       msg
        //     );
        //     break;
        //   default:
        //   // no new data, this is a combo
        // }

        directionsRenderer.setDirections(response);
        directionsRenderer.setMap(map);
        console.log(driveData);
      })
      .catch((e) => console.log(e));
  };

  if (buttonPressed) {
    handleApiLoaded(gmap, gmaps);
  } else {
    console.log('rendering map');
  }
  const setMessage = (googleResponse) => {
    switch (mode) {
      case 0:
        // calculate drive score
        // ecoScoreElectric = 30;
        setEcoScore('hybrid', 50);
        setEcoScore('electric', 30);
        break;
      case 1:
        // calculate bike score
        setEcoScore('bike', 50);
        break;
      case 2:
        // calculate transit score
        setEcoScore('transit', 50);
        break;
      default:
        // calculate combo score
        setEcoScore('combo', 30);
        break;
    }
    pingFunc();
  };

  return (
    <Fragment>
      <Segment>
        <Grid centered={true} columns={2}>
          <Grid.Column width={8}>
            <Segment>
              <div style={{ height: '38vh', width: '100%' }}>
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: 'AIzaSyC8XUHzHj-4Fwjv_-lS04AplPam2cZ0PVc',
                  }}
                  defaultCenter={defaultProps.center}
                  defaultZoom={defaultProps.zoom}
                  onGoogleApiLoaded={({ map, maps }) =>
                    handleApiLoaded(map, maps)
                  }
                  yesIWantToUseGoogleMapApiInternals={true}
                ></GoogleMapReact>
              </div>
            </Segment>
          </Grid.Column>
          <Grid.Column fluid width={8}>
            <Container>
              {mode === 0 && (
                <Container fluid width={8}>
                  <Header as='h3'>
                    <Icon name='car' />
                    For a new Hybrid car:{' '}
                  </Header>
                  <Header as='h4'>
                    Eco score: {ecoScoreHybrid}
                    {console.log(`ecoScoreHybrid is ${ecoScoreHybrid}`)}
                  </Header>
                  <p>For your daily commute, you save $ 16.43.</p>
                  <p>
                    Every month, you save $ 427.14, and every year you save
                    $5125.71 .
                  </p>
                  <p>
                    You may be eligible for a $4250 tax credit. This would
                    offset gas costs for 583 days.
                  </p>

                  <Header as='h3'>
                    <Icon name='car' />
                    For a new Electric car:{' '}
                  </Header>
                  <Header as='h4'>
                    Eco score: {ecoScoreElectric}
                    {console.log(`ecoScoreElectric is ${ecoScoreElectric}`)}
                  </Header>
                  <p>For your daily commute, you save $ 16.75.</p>
                  <p>
                    Every month, you save $ 435.50, and every year you save $
                    5226.00.
                  </p>
                  <p>
                    You may be eligible for a $7500 tax credit. This would
                    offset gas costs for 909 days.
                  </p>
                </Container>
              )}
              {mode === 1 && (
                <Container fluid width={8}>
                  <Header as='h3'>
                    <Icon name='bicycle' />
                    To Bike to work:{' '}
                  </Header>
                  <Header as='h4'>
                    Eco score: {ecoScoreBike}
                    {console.log(`ecoScoreBike is ${ecoScoreBike}`)}
                  </Header>{' '}
                  <p>
                    Biking to work one way will take 40 minutes, which is 10
                    minutes longer than driving.
                  </p>
                  <p>
                    However, biking is free! You save $ 25 every day compared to
                    driving a gas car.
                  </p>
                  <p>
                    Each month, you would save $ 550, which would be $6600 every
                    year!
                  </p>
                </Container>
              )}
              {mode === 2 && (
                <Container fluid width={8}>
                  <Header as='h3'>
                    <Icon name='bus' />
                    To take Public Transit to work:{' '}
                  </Header>
                  <Header as='h4'>
                    Eco score: {ecoScoreTransit}
                    {console.log(`ecoScoreTransit is ${ecoScoreTransit}`)}
                  </Header>{' '}
                  <p>
                    Taking public transportation to work one way will take 45
                    minutes, which is 15 minutes longer than driving.
                  </p>
                  <p>
                    Transit costs $1.25 one way. You save $ 22.50 every day
                    compared to driving a gas car.
                  </p>
                  <p>
                    Each month, you would save $ 495, which would be $5940 every
                    year!
                  </p>
                </Container>
              )}
              {mode === 3 && (
                <Container fluid width={8}>
                  <Header as='h3'>
                    <Icon name='bicycle' />
                    <Icon name='bus' />
                    To Bike and take Public Transit to work:{' '}
                  </Header>
                  <Header as='h4'>
                    Eco score: {ecoScoreCombo}
                    {console.log(`ecoScoreCombo is ${ecoScoreCombo}`)}
                  </Header>
                  <p>
                    Taking public transportation to work one way will take 45
                    minutes, which is 15 minutes longer than driving.
                  </p>
                  <p>
                    Biking to work one way will take 40 minutes, which is 10
                    minutes longer than driving.
                  </p>
                  <p>
                    Transit costs $1.25 one way. You save $ 23.75 every day
                    compared to driving a gas car.
                  </p>
                  <p>
                    Each month, you would save $ 522.50, which would be $6270{' '}
                    every year!
                  </p>
                </Container>
              )}
            </Container>
          </Grid.Column>
        </Grid>
      </Segment>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    continueToSurvey: state.blocks.cont,
    isAdmin: state.state.isAdmin,
    homePageMessage: state.state.homePageMessage,
    mode: state.results.transitMode,
    buttonPressed: state.results.buttonPressed,
    gmap: state.results.map,
    gmaps: state.results.maps,
    modesArray: state.results.transitModeStates,
    homeAddy: state.results.homeAddy,
    workAddy: state.results.workAddy,

    blocks: state.blocks.blocks,
    rebateInfo: state.caRebate,
    driveData: state.results.driveData,
    bikeData: state.results.bikeData,
    transitData: state.results.transitData,
    ping: state.results.ping,

    ecoScoreElectric: state.results.ecoElectric,
    ecoScoreHybrid: state.results.ecoHybrid,
    ecoScoreBike: state.results.ecoBike,
    ecoScoreTransit: state.results.ecoTransit,
    ecoScoreCombo: state.results.ecoCombo,
  };
};

export default reduxConnect(mapStateToProps, {
  toggleExportModal,
  storeMaps,
  saveDrive,
  saveBike,
  saveTransit,
  pingFunc,
  setEcoScore,
})(MapComponent);
