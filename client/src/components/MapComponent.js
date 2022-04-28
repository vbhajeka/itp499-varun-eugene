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

import { useHistory } from 'react-router-dom';

import {
  storeMaps,
  saveDrive,
  saveBike,
  saveTransit,
  setEcoScore,
  setBlurb,
} from '../actions/resultsActions';

import GoogleMapReact from 'google-map-react';

const MapComponent = ({
  mode,
  transitMode,
  gmap,
  gmaps,
  buttonPressed,
  storeMaps,
  modesArray,

  homeAddy,
  workAddy,

  blocks,
  rebateInfo,

  blurbHybrid,
  blurbElectric,
  blurbBike,
  blurbTransit,
  blurbCombo,
  setBlurb,
}) => {
  const history = useHistory();
  if (blocks === undefined) {
    history.push('/');
    return <div>empty</div>;
  }

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

        directionsRenderer.setDirections(response);
        directionsRenderer.setMap(map);
      })
      .catch((e) => console.log(e));
  };

  if (buttonPressed) {
    handleApiLoaded(gmap, gmaps);
  } else {
  }
  const setMessage = (googleResponse) => {
    // From Survey
    var mileageGas = parseInt(blocks[1].questions[1].value[0]);
    if (isNaN(mileageGas)) mileageGas = 24;
    const newCar = blocks[0].questions[1].value[0] === 'New Car';
    const household = parseInt(blocks[0].questions[2].value);
    var incomeScore = -1;

    switch (household) {
      case 1:
        incomeScore = blocks[0].questions[3].enumVal[0];
        break;
      case 2:
        incomeScore = blocks[0].questions[4].enumVal[0];
        break;
      case 3:
        incomeScore = blocks[0].questions[5].enumVal[0];
        break;
      case 4:
        incomeScore = blocks[0].questions[6].enumVal[0];
        break;
      case 5:
        incomeScore = blocks[0].questions[7].enumVal[0];
        break;
      default:
        incomeScore = blocks[0].questions[8].enumVal[0];
        break;
    }

    var taxCreditHybrid;
    var taxCreditElectric;
    var manufactureCostHybrid = 0;
    var manufactureCostElectric = 0;
    var newOrUsed;

    if (newCar) {
      taxCreditHybrid = rebateInfo.newCar[incomeScore].hybrid;
      taxCreditElectric = rebateInfo.newCar[incomeScore].electric;
      manufactureCostHybrid = 2000;
      manufactureCostElectric = 2500;
      newOrUsed = 'new';
    } else {
      taxCreditHybrid = rebateInfo.usedCar[incomeScore].hybrid;
      taxCreditElectric = rebateInfo.usedCar[incomeScore].electric;
      newOrUsed = 'used';
    }

    // From API
    var rawTime = googleResponse.routes[0].legs[0].duration.text.split(/(\s+)/);
    var timeDriving = parseInt(rawTime[rawTime.length - 3]);
    console.log('timeDriving type ' + typeof timeDriving);
    if (rawTime.length > 3) {
      timeDriving += parseInt(rawTime[0]) * 60;
    }

    var rawDistance =
      googleResponse.routes[0].legs[0].distance.text.split(/(\s+)/);
    var distanceDriving = parseFloat(rawDistance[0]);

    var rawTime;
    var timeDriving;
    var timeBike;
    var timeTransit;
    var rawDistance;
    var distanceDriving;
    var distanceBike;
    var distanceTransit;
    if (mode === 0) {
      rawTime = googleResponse.routes[0].legs[0].duration.text.split(/(\s+)/);
      timeDriving = parseInt(rawTime[rawTime.length - 3]);
      console.log('timeDriving type ' + typeof timeDriving);
      if (rawTime.length > 3) {
        timeDriving += parseInt(rawTime[0]) * 60;
      }
      rawDistance =
        googleResponse.routes[0].legs[0].distance.text.split(/(\s+)/);
      distanceDriving = parseFloat(rawDistance[0]);
    }
    if (mode === 1) {
      rawTime = googleResponse.routes[0].legs[0].duration.text.split(/(\s+)/);
      timeBike = parseInt(rawTime[rawTime.length - 3]);
      if (rawTime.length > 3) {
        timeBike += parseInt(rawTime[0]) * 60;
      }
      rawDistance =
        googleResponse.routes[0].legs[0].distance.text.split(/(\s+)/);
      distanceBike = parseFloat(rawDistance[0]);
    }
    if (mode === 2) {
      rawTime = googleResponse.routes[0].legs[0].duration.text.split(/(\s+)/);
      timeTransit = parseInt(rawTime[rawTime.length - 3]);
      if (rawTime.length > 3) {
        timeTransit += parseInt(rawTime[0]) * 60;
      }
      rawDistance =
        googleResponse.routes[0].legs[0].distance.text.split(/(\s+)/);
      distanceTransit = parseFloat(rawDistance[0]);
    }
    if (mode === 3) {
      rawTime = googleResponse.routes[0].legs[0].duration.text.split(/(\s+)/);
      timeBike = parseInt(rawTime[rawTime.length - 3]);
      if (rawTime.length > 3) {
        timeBike += parseInt(rawTime[0]) * 60;
      }
      rawDistance =
        googleResponse.routes[0].legs[0].distance.text.split(/(\s+)/);
      distanceBike = parseFloat(rawDistance[0]);

      rawTime = googleResponse.routes[0].legs[0].duration.text.split(/(\s+)/);
      timeTransit = parseInt(rawTime[rawTime.length - 3]);
      if (rawTime.length > 3) {
        timeTransit += parseInt(rawTime[0]) * 60;
      }
      rawDistance =
        googleResponse.routes[0].legs[0].distance.text.split(/(\s+)/);
      distanceTransit = parseFloat(rawDistance[0]);
    }

    // Other values
    var dailyCommuteDistanceDriving = 2 * distanceDriving;
    var mileageHybrid = 35;
    var mileageElectric = 0.33;
    var priceGas = 6;
    var priceElectricity = 0.5;
    var costPerMileGas = priceGas / mileageGas;
    var costPerMileHybrid = priceGas / mileageHybrid;
    var costPerMileElectric = priceElectricity * mileageElectric;
    var transitFare = 1.25;
    var transitElectricityUseKwhPMi = 2;
    var N = 1000;

    switch (mode) {
      case 0:
        // calculate values
        var dailyCostGas = costPerMileGas * dailyCommuteDistanceDriving;
        var dailyCostHybrid = costPerMileHybrid * dailyCommuteDistanceDriving;
        var dailyCostElectric =
          costPerMileElectric * dailyCommuteDistanceDriving;
        var dailySavingsHybrid = dailyCostGas - dailyCostHybrid;
        var dailySavingsElectric = dailyCostGas - dailyCostElectric;

        var monthlyDistance = dailyCommuteDistanceDriving * 22;
        var monthlyCostGas = costPerMileGas * monthlyDistance;
        var monthlyCostHybrid = costPerMileHybrid * monthlyDistance;
        var monthlyCostElectric = costPerMileElectric * monthlyDistance;
        var monthlySavingsHybrid = monthlyCostGas - monthlyCostHybrid;
        var monthlySavingsElectric = monthlyCostGas - monthlyCostElectric;

        var yearlySavingsHybrid = monthlySavingsHybrid * 12;
        var yearlySavingsElectric = monthlySavingsElectric * 12;

        var rebateDaysHybrid = taxCreditHybrid / dailyCostHybrid;
        var rebateDaysElectric = taxCreditElectric / dailyCostElectric;

        var consumptionHybrid =
          (28.9 * dailyCommuteDistanceDriving) / mileageHybrid;
        var consumptionElectric =
          (0.5 * dailyCommuteDistanceDriving) / mileageElectric;
        var ecoScoreHybrid = N / (manufactureCostHybrid + consumptionHybrid);
        var ecoScoreElectric =
          N / (manufactureCostElectric + consumptionElectric);

        var blurbDataHybrid = {
          ecoScoreHybrid: Math.round(ecoScoreHybrid * 100) / 100,
          dailySavingsHybrid: Math.round(dailySavingsHybrid * 100) / 100,
          monthlySavingsHybrid: Math.round(monthlySavingsHybrid * 100) / 100,
          yearlySavingsHybrid: Math.round(yearlySavingsHybrid * 100) / 100,
          taxCreditHybrid: Math.round(taxCreditHybrid * 100) / 100,
          rebateDaysHybrid: Math.round(rebateDaysHybrid * 100) / 100,
        };
        var blurbDataElectric = {
          ecoScoreElectric: Math.round(ecoScoreElectric * 100) / 100,
          dailySavingsElectric: Math.round(dailySavingsElectric * 100) / 100,
          monthlySavingsElectric:
            Math.round(monthlySavingsElectric * 100) / 100,
          yearlySavingsElectric: Math.round(yearlySavingsElectric * 100) / 100,
          taxCreditElectric: Math.round(taxCreditElectric * 100) / 100,
          rebateDaysElectric: Math.round(rebateDaysElectric * 100) / 100,
        };
        // ecoScoreElectric = 30;
        setBlurb('hybrid', blurbDataHybrid);
        setBlurb('electric', blurbDataElectric);
        break;
      case 1:
        // Bike Calculations
        var dailyCostGas = costPerMileGas * dailyCommuteDistanceDriving;

        var timeDiffBike = timeBike - timeDriving;
        var dailySavingsBike = dailyCostGas - 0;
        var monthlySavingsBike = 22 * dailySavingsBike;
        var yearlySavingsBike = 12 * monthlySavingsBike;
        var ecoScoreBike = 10 * distanceBike;

        var blurbBike = {
          ecoScoreBike: Math.round(ecoScoreBike * 100) / 100,
          timeBike: Math.round(timeBike * 100) / 100,
          timeDiffBike: Math.round(timeDiffBike * 100) / 100,
          dailySavingsBike: Math.round(dailySavingsBike * 100) / 100,
          monthlySavingsBike: Math.round(monthlySavingsBike * 100) / 100,
          yearlySavingsBike: Math.round(yearlySavingsBike * 100) / 100,
        };

        setBlurb('bike', blurbBike);
        break;
      case 2:
        // calculate transit score
        var dailyCostGas = costPerMileGas * dailyCommuteDistanceDriving;

        var timeDiffTransit = timeTransit - timeDriving;
        var dailySavingsTransit = dailyCostGas - 2 * transitFare;
        var monthlySavingsTransit = 22 * dailySavingsTransit;
        var yearlySavingsTransit = 12 * monthlySavingsTransit;
        var consumptionTransit =
          0.5 * (2 * distanceTransit) * transitElectricityUseKwhPMi;
        var ecoScoreTransit = N / consumptionTransit;

        var blurbTransit = {
          ecoScoreTransit: Math.round(ecoScoreTransit * 100) / 100,
          timeTransit: Math.round(timeTransit * 100) / 100,
          timeDiffTransit: Math.round(timeDiffTransit * 100) / 100,
          transitFare: Math.round(transitFare * 100) / 100,
          dailySavingsTransit: Math.round(dailySavingsTransit * 100) / 100,
          monthlySavingsTransit: Math.round(monthlySavingsTransit * 100) / 100,
          yearlySavingsTransit: Math.round(yearlySavingsTransit * 100) / 100,
        };
        setBlurb('transit', blurbTransit);
        break;
      case 3:
        // calculate combo score
        var dailyCostGas = costPerMileGas * dailyCommuteDistanceDriving;
        var timeDiffBike = timeBike - timeDriving;
        var timeDiffTransit = timeTransit - timeDriving;

        var dailySavingsBikeTransit = dailyCostGas - transitFare;
        var monthlySavingsBikeTransit = 22 * dailySavingsBikeTransit;
        var yearlySavingsBikeTransit = 12 * monthlySavingsBikeTransit;
        var consumptionBikeTransit =
          0.5 * (1 * distanceTransit) * transitElectricityUseKwhPMi;
        var ecoScoreBikeTransit = N / consumptionBikeTransit;

        var blurbCombo = {
          ecoScoreCombo: Math.round(ecoScoreBikeTransit * 100) / 100,
          timeTransit: Math.round(timeTransit * 100) / 100,
          timeDiffTransit: Math.round(timeDiffTransit * 100) / 100,
          timeBike: Math.round(timeBike * 100) / 100,
          timeDiffBike: Math.round(timeDiffBike * 100) / 100,
          transitFare: Math.round(transitFare * 100) / 100,
          dailySavingsCombo: Math.round(dailySavingsBikeTransit * 100) / 100,
          monthlySavingsCombo:
            Math.round(monthlySavingsBikeTransit * 100) / 100,
          yearlySavingsCombo: Math.round(yearlySavingsBikeTransit * 100) / 100,
        };
        setBlurb('combo', blurbCombo);
        break;
      default:
      // do nothing
    }
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
          <Grid.Column width={8}>
            <Container fluid>
              {mode === 0 && (
                <Container fluid width={8}>
                  <Header as='h3'>
                    <Icon name='car' />
                    For a{' '}
                    {blocks[0].questions[1].value[0] === 'New Car'
                      ? `New`
                      : `Used`}{' '}
                    Hybrid car:{' '}
                  </Header>
                  <Header as='h4'>
                    Eco score: {blurbHybrid.ecoScoreHybrid}
                  </Header>
                  <p>
                    For your daily commute, you save $
                    {blurbHybrid.dailySavingsHybid}.
                  </p>
                  <p>
                    Every month, you save ${blurbHybrid.monthlySavingsHybrid},
                    and every year you save ${blurbHybrid.yearlySavingsHybrid}.
                  </p>
                  <p>
                    You may be eligible for a ${blurbHybrid.taxCreditHybrid} tax
                    credit. This would offset gas costs for{' '}
                    {blurbHybrid.rebateDaysHybrid} days.
                  </p>

                  <Header as='h3'>
                    <Icon name='car' />
                    For a{' '}
                    {blocks[0].questions[1].value[0] === 'New Car'
                      ? `New`
                      : `Used`}{' '}
                    Electric car:{' '}
                  </Header>
                  <Header as='h4'>
                    Eco score: {blurbElectric.ecoScoreElectric}
                  </Header>
                  <p>
                    For your daily commute, you save $
                    {blurbElectric.dailySavingsElectric}.
                  </p>
                  <p>
                    Every month, you save $
                    {blurbElectric.monthlySavingsElectric}, and every year you
                    save ${blurbElectric.yearlySavingsElectric}.
                  </p>
                  <p>
                    You may be eligible for a ${blurbElectric.taxCreditElectric}{' '}
                    tax credit. This would offset gas costs for{' '}
                    {blurbElectric.rebateDaysElectric} days.
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
                    Eco score: {blurbBike.ecoScoreBike}
                  </Header>{' '}
                  <p>
                    Biking to work one way will take {blurbBike.timeBike}{' '}
                    minutes, which is {blurbBike.timeDiffBike} minutes longer
                    than driving.
                  </p>
                  <p>
                    However, biking is free! You save $
                    {blurbBike.dailySavingsBike} every day compared to driving a
                    gas car.
                  </p>
                  <p>
                    Each month, you would save ${blurbBike.monthlySavingsBike},
                    which would be ${blurbBike.yearlySavingsBike} every year!
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
                    Eco score: {blurbTransit.ecoScoreTransit}
                  </Header>{' '}
                  <p>
                    Taking public transportation to work one way will take{' '}
                    {blurbTransit.timeTransit}
                    minutes, which is {blurbTransit.timeDiffTransit} minutes
                    longer than driving.
                  </p>
                  <p>
                    Transit costs ${blurbTransit.transitFare} one way. You save
                    ${blurbTransit.dailySavingsTransit} every day compared to
                    driving a gas car.
                  </p>
                  <p>
                    Each month, you would save $
                    {blurbTransit.monthlySavingsTransit}, which would be $
                    {blurbTransit.yearlySavingsTransit} every year!
                  </p>
                </Container>
              )}
              {mode === 3 && (
                <Container fluid width={8}>
                  <Header as='h3'>
                    <Icon name='bicycle' /> <Icon name='bus' />
                    To Bike and take Public Transit to work:{' '}
                  </Header>
                  <Header as='h4'>Eco score: {blurbCombo.ecoScoreCombo}</Header>
                  <p>
                    Taking public transportation to work one way will take{' '}
                    {blurbCombo.timeTransit}
                    minutes, which is {blurbCombo.timeDiffTransit} minutes
                    longer than driving.
                  </p>
                  <p>
                    Biking to work one way will take {blurbCombo.timeBike}{' '}
                    minutes, which is {blurbCombo.timeDiffBike}
                    minutes longer than driving.
                  </p>
                  <p>
                    Transit costs ${blurbCombo.transitFare} one way. You save $
                    {blurbCombo.dailySavingsCombo} every day compared to driving
                    a gas car.
                  </p>
                  <p>
                    Each month, you would save ${' '}
                    {blurbCombo.monthlySavingsCombo}, which would be $
                    {blurbCombo.yearlySavingsCombo} every year!
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

    ecoScoreElectric: state.results.ecoElectric,
    ecoScoreHybrid: state.results.ecoHybrid,
    ecoScoreBike: state.results.ecoBike,
    ecoScoreTransit: state.results.ecoTransit,
    ecoScoreCombo: state.results.ecoCombo,

    blurbHybrid: state.results.blurbHybrid,
    blurbElectric: state.results.blurbElectric,
    blurbBike: state.results.blurbBike,
    blurbTransit: state.results.blurbTransit,
    blurbCombo: state.results.blurbCombo,
  };
};

export default reduxConnect(mapStateToProps, {
  toggleExportModal,
  storeMaps,
  saveDrive,
  saveBike,
  saveTransit,
  setEcoScore,
  setBlurb,
})(MapComponent);
