import { GET_SURVEYS } from '../actions/types';

const initialState = {
  display: [],
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_SURVEYS:
      console.log('here');
      return { ...state };
    default:
      return state;
  }
}
