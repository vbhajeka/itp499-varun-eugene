import { TOGGLE_CANCEL_MODAL, BACK_TO_HOME } from '../actions/types';

const initialState = {
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
      let temp = JSON.parse(JSON.stringify(initState));
      initState = JSON.parse(JSON.stringify(temp));
      temp.submitted = true;
      return { ...temp };
    default:
      return state;
  }
}
