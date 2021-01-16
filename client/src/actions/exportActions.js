import { GET_SURVEYS } from './types';

export const getSurveyAction = () => (dispatch) => {
  dispatch({
    payload: {},
    type: GET_SURVEYS,
  });
};
