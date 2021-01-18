import {
  SET_STATE_INIT,
  SELECT_MC_SATA,
  DROPDOWN_SELECT,
  UPDATE_FR,
  NEXT_BLOCK,
  PREV_BLOCK,
  SUBMIT_SURVEY,
  SET_PREFS,
} from './types';

import axios from 'axios';

export const setSurveyData = (initState) => (dispatch) => {
  dispatch({
    type: SET_STATE_INIT,
    payload: { initState },
  });
};

export const setPrefs = (prefs) => (dispatch) => {
  dispatch({
    type: SET_PREFS,
    payload: { prefs },
  });
};

export const blockAction = (block_id, question_id, option_selected) => (
  dispatch
) => {
  dispatch({
    type: SELECT_MC_SATA,
    payload: { block_id, question_id, option_selected },
  });
};

export const dropDownSelect = (block_id, question_id, option_selected) => (
  dispatch
) => {
  dispatch({
    type: DROPDOWN_SELECT,
    payload: { block_id, question_id, option_selected },
  });
};

export const updateFRAction = (block_id, question_id, option_selected) => (
  dispatch
) => {
  dispatch({
    type: UPDATE_FR,
    payload: { block_id, question_id, option_selected },
  });
};

export const nextBlockAction = () => (dispatch) => {
  dispatch({
    type: NEXT_BLOCK,
    payload: {},
  });
};

export const prevBlockAction = () => (dispatch) => {
  dispatch({
    type: PREV_BLOCK,
    payload: {},
  });
};

export const submitAction = (surveyData, token) => async (dispatch) => {
  console.log('reviewing');
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };

  console.log(config);

  const body = JSON.stringify(surveyData);

  try {
    const res = await axios.post('/api/submitSurvey', body, config);
    // const res = await axios.post('/api/checkToken', {}, config);

    console.log(res);
  } catch (err) {
    console.log(err);
  }

  dispatch({
    type: SUBMIT_SURVEY,
    payload: {},
  });
};
