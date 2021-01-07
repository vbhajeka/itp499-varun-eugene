import {
  SELECT_MC_SATA,
  DROPDOWN_SELECT,
  UPDATE_FR,
  NEXT_BLOCK,
  PREV_BLOCK,
} from './types';

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
