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

export const setSurveyData = (initState, isAdmin) => (dispatch) => {
  dispatch({
    type: SET_STATE_INIT,
    payload: { initState, isAdmin },
  });
};

export const setPrefs = (prefs) => (dispatch) => {
  dispatch({
    type: SET_PREFS,
    payload: { prefs },
  });
};

export const blockAction =
  (block_id, question_id, option_selected, enumVal) => (dispatch) => {
    dispatch({
      type: SELECT_MC_SATA,
      payload: { block_id, question_id, option_selected, enumVal },
    });
  };

export const dropDownSelect =
  (block_id, question_id, option_selected) => (dispatch) => {
    dispatch({
      type: DROPDOWN_SELECT,
      payload: { block_id, question_id, option_selected },
    });
  };

export const updateFRAction =
  (block_id, question_id, option_selected) => (dispatch) => {
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

export const submitAction = () => async (dispatch) => {
  dispatch({
    type: SUBMIT_SURVEY,
    payload: {},
  });
};
