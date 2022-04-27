import { SWITCH_TRANSIT_MODE, STORE_MAP } from './types';

export const switchMode = (mode, msg) => (dispatch) => {
  dispatch({
    payload: { mode, msg },
    type: SWITCH_TRANSIT_MODE,
  });
};

export const storeMaps = (map, maps) => (dispatch) => {
  dispatch({
    payload: { map, maps },
    type: STORE_MAP,
  });
};
