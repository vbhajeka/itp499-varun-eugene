import {
  SET_ALERT,
  SELECTED_OPTION,
  NEXT_QUESTION,
  PREV_QUESTION,
} from './types';

export const setAlert = (msg, alertType) => (dispatch) => {
  const id = 1;
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id },
  });
};

export const selectAction = (optionSelected) => (dispatch) => {
  dispatch({
    type: SELECTED_OPTION,
    payload: { optionSelected },
  });
};

export const nextQuestion = () => (dispatch) => {
  dispatch({
    type: NEXT_QUESTION,
    payload: {},
  });
};

export const prevQuestion = () => (dispatch) => {
  dispatch({
    type: PREV_QUESTION,
    payload: {},
  });
};
