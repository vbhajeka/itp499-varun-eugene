import {
  SWITCH_TRANSIT_MODE,
  STORE_MAP,
  SAVE_DRIVE,
  SAVE_BIKE,
  SAVE_TRANSIT,
  SAVE_ADDYS,
  SET_ECO_SCORE,
  SET_BLURB,
  VIEW_RESULTS,
} from '../actions/types';

const initialState = {
  transitMode: 0,
  transitModeMessage: 'driving yayaya',
  buttonPressed: false,
  map: null,
  maps: null,
  transitModeStates: ['drive', 'bike', 'transit', 'combo'],
  driveData: {
    duration: null,
    distance: null,
  },
  bikeData: {
    duration: null,
    distance: null,
  },
  transitData: {
    duration: null,
    distance: null,
  },
  homeAddy: null,
  workAddy: null,
  ecoElectric: 0,
  ecoHybrid: 0,
  ecoBike: 0,
  ecoTransit: 0,
  ecoCombo: 0,
  viewResults: false,

  blurbHybrid: {
    ecoScoreHybrid: 0,
    dailySavingsHybrid: 0,
    monthlySavingsHybrid: 0,
    yearlySavingsHybrid: 0,
    taxCreditHybrid: 0,
    rebateDaysHybrid: 0,
  },
  blurbElectric: {
    ecoScoreElectric: 0,
    dailySavingsElectric: 0,
    monthlySavingsElectric: 0,
    yearlySavingsElectric: 0,
    taxCreditElectric: 0,
    rebateDaysElectric: 0,
  },
  blurbBike: {
    ecoScoreBike: 0,
    timeBike: 0,
    timeDiffBike: 0,
    dailySavingsBike: 0,
    monthlySavingsBike: 0,
    yearlySavingsBike: 0,
  },
  blurbTransit: {
    ecoScoreTransit: 0,
    timeTransit: 0,
    timeDiffTransit: 0,
    transitFare: 0,
    dailySavingsTransit: 0,
    monthlySavingsTransit: 0,
    yearlySavingsTransit: 0,
  },
  blurbCombo: {
    ecoScoreCombo: 0,
    timeTransit: 0,
    timeDiffTransit: 0,
    timeBike: 0,
    timeDiffBike: 0,
    transitFare: 0,
    dailySavingsCombo: 0,
    monthlySavingsCombo: 0,
    yearlySavingsCombo: 0,
  },
};

const rotateMode = (state) => {
  state.transitMode = (state.transitMode + 1) % 4;
  state.buttonPressed = true;

  return state;
};

const storeMap = (state, map, maps) => {
  state.map = map;
  state.maps = maps;
  return state;
};

const saveCommuteData = (state, dur, dist, type) => {
  switch (type) {
    case SAVE_DRIVE:
      state.driveData = {
        duration: dur,
        distance: dist,
      };
      break;
    case SAVE_BIKE:
      state.bikeData = {
        duration: dur,
        distance: dist,
      };
      break;
    case SAVE_TRANSIT:
      state.transitData = {
        duration: dur,
        distance: dist,
      };
      break;
    default:
      //do nothing
      console.log('do nothing');
  }
  return state;
};

const saveAddresses = (state, home, work) => {
  state.homeAddy = home;
  state.workAddy = work;

  return state;
};

const setEcoScore = (state, type, score) => {
  switch (type) {
    case 'electric':
      state.ecoElectric = score;
      break;
    case 'hybrid':
      state.ecoHybrid = score;
      break;
    case 'bike':
      state.ecoBike = score;
      break;
    case 'transit':
      state.ecoTransit = score;
      break;
    case 'combo':
      state.ecoCombo = score;
      break;
    default:
    // do nothing
  }
  return state;
};

const setBlurb = (state, type, blurbData) => {
  switch (type) {
    case 'electric':
      state.blurbElectric = blurbData;
      break;
    case 'hybrid':
      state.blurbHybrid = blurbData;
      break;
    case 'bike':
      state.blurbBike = blurbData;
      break;
    case 'transit':
      state.blurbTransit = blurbData;
      break;
    case 'combo':
      state.blurbCombo = blurbData;
      break;
    default:
    // do nothing
  }
  return state;
};

const viewRes = (state) => {
  state.viewResults = true;
  return state;
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SWITCH_TRANSIT_MODE:
      return { ...rotateMode(state) };
    case STORE_MAP:
      return { ...storeMap(state, payload.map, payload.maps) };
    case SAVE_DRIVE:
      return {
        ...saveCommuteData(state, payload.duration, payload.dist, type),
      };
    case SAVE_BIKE:
      return {
        ...saveCommuteData(state, payload.duration, payload.dist, type),
      };
    case SAVE_TRANSIT:
      return {
        ...saveCommuteData(state, payload.duration, payload.dist, type),
      };
    case SAVE_ADDYS:
      return { ...saveAddresses(state, payload.home, payload.work) };
    case VIEW_RESULTS:
      return { ...viewRes(state) };
    case SET_ECO_SCORE:
      return { ...setEcoScore(state, payload.type, payload.score) };
    case SET_BLURB:
      return { ...setBlurb(state, payload.type, payload.blurbData) };
    default:
      return state;
  }
}
