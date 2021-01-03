import {
  NEW_NEXT_QUESTION,
  NEW_SELECT_OPTION,
  MFRO_SELECT,
  NEW_PREVIOUS_QUESTION,
} from './types';

export const nextQuestionAction = () => (dispatch) => {
  dispatch({
    type: NEW_NEXT_QUESTION,
    payload: {},
  });
};

export const prevQuestionAction = () => (dispatch) => {
  dispatch({
    type: NEW_PREVIOUS_QUESTION,
    payload: {},
  });
};

export const selectOptionAction = (option) => (dispatch) => {
  dispatch({
    type: NEW_SELECT_OPTION,
    payload: { option },
  });
};

export const multiFreeResponseSelectAction = (subQuestionID, option) => (
  dispatch
) => {
  dispatch({
    type: MFRO_SELECT,
    payload: { subQuestionID, option },
  });
};
