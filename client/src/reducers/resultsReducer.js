import { SWITCH_TRANSIT_MODE, STORE_MAP } from '../actions/types';

const initialState = {
  transitMode: 'drive',
  transitModeMessage: 'driving yayaya',
  buttonPressed: false,
  map: null,
  maps: null,
};

const rotateMode = (state, mode, msg) => {
  state.transitMode = mode;
  state.transitModeMessage = msg;
  state.buttonPressed = true;

  return state;
};

const storeMap = (state, map, maps) => {
  state.map = map;
  state.maps = maps;
  return state;
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SWITCH_TRANSIT_MODE:
      return { ...rotateMode(state, payload.mode, payload.msg) };
    case STORE_MAP:
      return { ...storeMap(state, payload.map, payload.maps) };
    default:
      return state;
  }
}
