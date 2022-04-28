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
} from './types';

export const switchMode = () => (dispatch) => {
  dispatch({
    payload: {},
    type: SWITCH_TRANSIT_MODE,
  });
};

export const storeMaps = (map, maps) => (dispatch) => {
  dispatch({
    payload: { map, maps },
    type: STORE_MAP,
  });
};

export const saveDrive = (duration, dist) => (dispatch) => {
  dispatch({
    payload: { duration, dist },
    type: SAVE_DRIVE,
  });
};

export const saveBike = (duration, dist) => (dispatch) => {
  dispatch({
    payload: { duration, dist },
    type: SAVE_BIKE,
  });
};

export const saveTransit = (duration, dist) => (dispatch) => {
  dispatch({
    payload: { duration, dist },
    type: SAVE_TRANSIT,
  });
};

export const saveAddys = (home, work) => (dispatch) => {
  dispatch({
    payload: { home, work },
    type: SAVE_ADDYS,
  });
};

export const setEcoScore = (type, score) => (dispatch) => {
  console.log('uhhhhhh');
  dispatch({
    payload: { type, score },
    type: SET_ECO_SCORE,
  });
};

export const setBlurb = (type, blurbData) => (dispatch) => {
  dispatch({
    payload: { type, blurbData },
    type: SET_BLURB,
  });
};

export const viewResultsFunc = () => (dispatch) => {
  console.log('duh');
  dispatch({
    payload: {},
    type: VIEW_RESULTS,
  });
};
