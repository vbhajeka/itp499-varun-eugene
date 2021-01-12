import { TOGGLE_CANCEL_MODAL, BACK_TO_HOME } from '../actions/types';

export const modalActions = (action) => (dispatch) => {
  dispatch({
    type: action ? BACK_TO_HOME : TOGGLE_CANCEL_MODAL,
    payload: {},
  });
};
