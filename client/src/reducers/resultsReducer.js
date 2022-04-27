import {
  SWITCH_TRANSIT_MODE,
  STORE_MAP,
  SAVE_DRIVE,
  SAVE_BIKE,
  SAVE_TRANSIT,
  SAVE_ADDYS,
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
    default:
      return state;
  }
}
