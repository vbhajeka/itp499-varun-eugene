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
  setBlurb,
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

  blurbHybrid,
  blurbElectric,
  blurbBike,
  blurbTransit,
  blurbCombo,
  setBlurb,
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
		// From Survey 
		var mileageGas = parseInt(blocks[1].questions[1].value[0]);
		if(isNaN(mileageGas)) mileageGas = 24; 
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

		var rawDistance = googleResponse.routes[0].legs[0].distance.text.split(/(\s+)/);
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
      rawDistance = googleResponse.routes[0].legs[0].distance.text.split(/(\s+)/);
      distanceDriving = parseFloat(rawDistance[0]);
    }
    if (mode === 1) {
      rawTime = googleResponse.routes[0].legs[0].duration.text.split(/(\s+)/);
      timeBike = parseInt(rawTime[rawTime.length - 3]);
      if (rawTime.length > 3) {
        timeBike += parseInt(rawTime[0]) * 60;
      }
      rawDistance = googleResponse.routes[0].legs[0].distance.text.split(/(\s+)/);
      distanceBike = parseFloat(rawDistance[0]);
    }
    if (mode === 2) {
      rawTime = googleResponse.routes[0].legs[0].duration.text.split(/(\s+)/);
      timeTransit = parseInt(rawTime[rawTime.length - 3]);
      if (rawTime.length > 3) {
        timeTransit += parseInt(rawTime[0]) * 60;
      }
      rawDistance = googleResponse.routes[0].legs[0].distance.text.split(/(\s+)/);
      distanceTransit = parseFloat(rawDistance[0]);
    } 
		if (mode === 3) {
			rawTime = googleResponse.routes[0].legs[0].duration.text.split(/(\s+)/);
      timeBike = parseInt(rawTime[rawTime.length - 3]);
      if (rawTime.length > 3) {
        timeBike += parseInt(rawTime[0]) * 60;
      }
      rawDistance = googleResponse.routes[0].legs[0].distance.text.split(/(\s+)/);
      distanceBike = parseFloat(rawDistance[0]);

			rawTime = googleResponse.routes[0].legs[0].duration.text.split(/(\s+)/);
      timeTransit = parseInt(rawTime[rawTime.length - 3]);
      if (rawTime.length > 3) {
        timeTransit += parseInt(rawTime[0]) * 60;
      }
      rawDistance = googleResponse.routes[0].legs[0].distance.text.split(/(\s+)/);
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
				var dailyCostElectric = costPerMileElectric * dailyCommuteDistanceDriving;
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

				var consumptionHybrid = 28.9 * dailyCommuteDistanceDriving / mileageHybrid;
				var consumptionElectric = 0.5 * dailyCommuteDistanceDriving / mileageElectric;
				var ecoScoreHybrid = N / (manufactureCostHybrid + consumptionHybrid);
				var ecoScoreElectric = N / (manufactureCostElectric + consumptionElectric);

				var blurbDataHybrid = { 
					ecoScoreHybrid: ecoScoreHybrid,
					dailySavingsHybid: dailySavingsHybrid,
					monthlySavingsHybrid: monthlySavingsHybrid,
					yearlySavingsHybrid: yearlySavingsHybrid,
					taxCreditHybrid: taxCreditHybrid,
					rebateDaysHybrid: rebateDaysHybrid,
				};
				var blurbDataElectric = {
					ecoScoreElectric: ecoScoreElectric,
					dailySavingsElectric: dailySavingsElectric,
					monthlySavingsElectric: monthlySavingsElectric,
					yearlySavingsElectric: yearlySavingsElectric,
					taxCreditElectric: taxCreditElectric,
					rebateDaysElectric: rebateDaysElectric,
				}
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
					ecoScoreBike: ecoScoreBike,
					timeBike: timeBike,
					timeDiffBike: timeDiffBike,
					dailySavingsBike: dailySavingsBike,
					monthlySavingsBike: monthlySavingsBike,
					yearlySavingsBike: yearlySavingsBike,
				};

				setBlurb('bike', blurbBike);
        break;
      case 2:
        // calculate transit score
				var dailyCostGas = costPerMileGas * dailyCommuteDistanceDriving;

				var timeDiffTransit = timeTransit - timeDriving;
				var dailySavingsTransit = dailyCostGas - (2 * transitFare);
				var monthlySavingsTransit = 22 * dailySavingsTransit;
				var yearlySavingsTransit = 12 * monthlySavingsTransit;
				var consumptionTransit = 0.5 * (2 * distanceTransit) * transitElectricityUseKwhPMi;
				var ecoScoreTransit = N / (consumptionTransit);

				var blurbTransit = {
					ecoScoreTransit: ecoScoreTransit,
					timeTransit: timeTransit,
					timeDiffTransit: timeDiffTransit,
					transitFare: transitFare,
					dailySavingsTransit: dailySavingsTransit,
					monthlySavingsTransit: monthlySavingsTransit,
					yearlySavingsTransit: yearlySavingsTransit,
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
				var consumptionBikeTransit = 0.5 * (1 * distanceTransit) * transitElectricityUseKwhPMi;
				var ecoScoreBikeTransit = N / (consumptionBikeTransit);

				var blurbCombo = {
					ecoScoreCombo: ecoScoreBikeTransit,
					timeTransit: timeTransit,
					timeDiffTransit: timeDiffTransit,
					timeBike: timeBike,
					timeDiffBike: timeDiffBike,
					transitFare: transitFare,
					dailySavingsCombo: dailySavingsBikeTransit,
					monthlySavingsCombo: monthlySavingsBikeTransit,
					yearlySavingsCombo: yearlySavingsBikeTransit,
				};
        setBlurb('combo', blurbCombo);
        break;
			default: 
				// do nothing
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
  pingFunc,
  setEcoScore,
  setBlurb, 
})(MapComponent);
