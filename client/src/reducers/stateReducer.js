import { TOGGLE_CANCEL_MODAL, BACK_TO_HOME, SET_TOKEN } from '../actions/types';

const initialState = {
  auth0Token: null,
  cancelModalIsOpen: false,
};

let initState = JSON.parse(JSON.stringify(initialState));

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
      return { ...state };
    case SET_TOKEN:
      state.auth0Token = payload.token;
      return { ...state };
    default:
      return state;
  }
}
