import { TOGGLE_CANCEL_MODAL, BACK_TO_HOME, SET_TOKEN } from '../actions/types';

export const modalActions = (action) => (dispatch) => {
  dispatch({
    type: action ? BACK_TO_HOME : TOGGLE_CANCEL_MODAL,
    payload: {},
  });
};

export const setAuth0Token = (token) => (dispatch) => {
  dispatch({
    type: SET_TOKEN,
    payload: { token },
  });
};
