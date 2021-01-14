import {
  TOGGLE_CANCEL_MODAL,
  BACK_TO_HOME,
  SET_TOKEN,
  SUBMIT_SURVEY,
} from '../actions/types';

const initialState = {
  auth0Token: null,
  cancelModalIsOpen: false,
  submitted: false,
};

const toggleModal = (state) => {
  state.cancelModalIsOpen = !state.cancelModalIsOpen;
  return state;
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case TOGGLE_CANCEL_MODAL:
      return { ...toggleModal(state) };
    case BACK_TO_HOME:
      state.cancelModalIsOpen = false;
      state.submitted = false;
      return { ...state };
    case SET_TOKEN:
      state.auth0Token = payload.token;
      return { ...state };
    case SUBMIT_SURVEY:
      state.submitted = true;
      return { ...state };
    default:
      return state;
  }
}
