import { Grid, Segment, Image, Container } from 'semantic-ui-react';

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
  saveDrive,
  saveBike,
  saveTransit,
  homeAddy,
  workAddy,
  ecoScore,

  blocks,
  rebateInfo,
  driveData,
  bikeData,
  transitData,
}) => {
  const computeEcoScore = (jankData) => {
    // eco score

    // From Survey
    const mileageGas = parseInt(blocks[1].questions[1].value[0]);
    const miscDistMonthly = parseInt(blocks[2].questions[8].value[0]);
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
    var rawTime;
    var timeDriving;
    var timeBike;
    var timeTransit;
    var rawDistance;
    var distanceDriving;
    var distanceBike;
    var distanceTransit;
    if (mode === 0) {
      console.log(jankData);
      var jankDuration = jankData.duration;
      rawTime = jankDuration.split(/(\s+)/);
      timeDriving = parseInt(rawTime[rawTime.length - 3]);
      console.log('timeDriving type ' + typeof timeDriving);
      if (rawTime.length > 3) {
        timeDriving += parseInt(rawTime[0]) * 60;
      }
      var jankDistance = jankData.distance;
      rawDistance = jankDistance.split(/(\s+)/);
      distanceDriving = parseFloat(rawDistance[0]);
    }
    if (mode === 1) {
      var jankDuration = jankData.duration;
      rawTime = jankDuration.split(/(\s+)/);
      timeBike = parseInt(rawTime[rawTime.length - 3]);
      if (rawTime.length > 3) {
        timeBike += parseInt(rawTime[0]) * 60;
      }
      var jankDistance = jankData.distance;
      rawDistance = jankDistance.split(/(\s+)/);
      distanceBike = parseFloat(rawDistance[0]);
    }
    if (mode === 2) {
      rawTime = jankData.duration.split(/(\s+)/);
      timeTransit = parseInt(rawTime[rawTime.length - 3]);
      if (rawTime.length > 3) {
        timeTransit += parseInt(rawTime[0]) * 60;
      }
      rawDistance = jankData.distance.split(/(\s+)/);
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

    // Calculations for Hybrid and Gas
    var dailyCostGas = costPerMileGas * dailyCommuteDistanceDriving;
    var dailyCostHybrid = costPerMileHybrid * dailyCommuteDistanceDriving;
    var dailyCostElectric = costPerMileElectric * dailyCommuteDistanceDriving;
    var dailySavingsHybrid = dailyCostGas - dailyCostHybrid;
    var dailySavingsElectric = dailyCostGas - dailyCostElectric;

    var monthlyDistance = dailyCommuteDistanceDriving * 22 + miscDistMonthly;
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
      (18.9 * dailyCommuteDistanceDriving) / mileageHybrid;
    var consumptionElectric =
      (0.5 * dailyCommuteDistanceDriving) / mileageElectric;
    var ecoScoreHybrid = N / (manufactureCostHybrid + consumptionHybrid);
    var ecoScoreElectric = N / (manufactureCostElectric + consumptionElectric);

    // Bike Calculations
    var timeDiffBike = timeBike - timeDriving;
    var dailySavingsBike = dailyCostGas - 0;
    var monthlySavingsBike = 22 * dailySavingsBike;
    var yearlySavingsBike = 12 * monthlySavingsBike;
    var ecoScoreBike = 40;

    // Transit Calculations
    var timeDiffTransit = timeTransit - timeDriving;
    var dailySavingsTransit = dailyCostGas - 2 * transitFare;
    var monthlySavingsTransit = 22 * dailySavingsTransit;
    var yearlySavingsTransit = 12 * monthlySavingsTransit;
    var consumptionTransit =
      0.5 * (2 * distanceTransit) * transitElectricityUseKwhPMi;
    var ecoScoreTransit = N / consumptionTransit;

    // Bike + Transit Calculations
    var timeDiffBikeTransit = timeTransit - timeDriving;
    var dailySavingsBikeTransit = dailyCostGas - transitFare;
    var monthlySavingsBikeTransit = 22 * dailySavingsBikeTransit;
    var yearlySavingsBikeTransit = 12 * monthlySavingsBikeTransit;
    var consumptionBikeTransit =
      0.5 * (1 * distanceTransit) * transitElectricityUseKwhPMi;
    var ecoScoreBikeTransit = N / consumptionBikeTransit;

    return {
      electric: ecoScoreElectric,
      hybrid: ecoScoreHybrid,
      bike: ecoScoreBike,
      transit: ecoScoreTransit,
      combo: ecoScoreBikeTransit,
    };
  };

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

        var msg = getMessage(response);
        var jankyData;
        switch (mode) {
          case 0:
            console.log('saving drive data');
            saveDrive(
              response.routes[0].legs[0].duration.text,
              response.routes[0].legs[0].distance.text,
              msg
            );
            jankyData = {
              duration: response.routes[0].legs[0].duration.text,
              distance: response.routes[0].legs[0].distance.text,
            };
            break;
          case 1:
            saveBike(
              response.routes[0].legs[0].duration.text,
              response.routes[0].legs[0].distance.text,
              msg
            );
            jankyData = {
              duration: response.routes[0].legs[0].duration.text,
              distance: response.routes[0].legs[0].distance.text,
            };
            break;
          case 2:
            saveTransit(
              response.routes[0].legs[0].duration.text,
              response.routes[0].legs[0].distance.text,
              msg
            );
            jankyData = {
              duration: response.routes[0].legs[0].duration.text,
              distance: response.routes[0].legs[0].distance.text,
            };
            break;
          default:
          // no new data, this is a combo
        }

        directionsRenderer.setDirections(response);
        directionsRenderer.setMap(map);
        console.log(driveData);
        console.log(jankyData);
        ecoScore = computeEcoScore(jankyData);
        console.log(ecoScore);
      })
      .catch((e) => console.log(e));
  };

  var modeBool = false;
  switch (mode) {
    case 0:
      if (driveData.duration === null) {
        modeBool = true;
      }
      break;
    case 1:
      if (bikeData.duration === null) {
        modeBool = true;
      }
      break;
    case 2:
      if (transitData.duration === null) {
        modeBool = true;
      }
      break;
    default:
      console.log('');
  }
  if (buttonPressed && modeBool) {
    handleApiLoaded(gmap, gmaps);
  } else {
    console.log('rendering map');
  }
  const getMessage = (googleResponse) => {};

  return (
    <Fragment>
      <Segment>
        <Grid centered={true} columns={2}>
          <Grid.Column width={10}>
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
          <Grid.Column width={6}>
            <Container text>{content}</Container>
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
  };
};

export default reduxConnect(mapStateToProps, {
  toggleExportModal,
  storeMaps,
  saveDrive,
  saveBike,
  saveTransit,
})(MapComponent);
