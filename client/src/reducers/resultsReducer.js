import {
  SWITCH_TRANSIT_MODE,
  STORE_MAP,
  SAVE_DRIVE,
  SAVE_BIKE,
  SAVE_TRANSIT,
  SAVE_ADDYS,
  PING,
  SET_ECO_SCORE,
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
  ping: true,
  ecoElectric: 0,
  ecoHybrid: 0,
  ecoBike: 0,
  ecoTransit: 0,
  ecoCombo: 0,
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

const ping = (state) => {
  state.ping = !state.ping;
  console.log('pinged');
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
    case PING:
      return { ...ping(state) };
    case SET_ECO_SCORE:
      return { ...setEcoScore(state, payload.type, payload.score) };
    default:
      return state;
  }
}
