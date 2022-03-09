import { SET_EXPORT_DATA, TOGGLE_OPEN_SPECIFIC } from './types';

export const setExportData = (data, ids) => (dispatch) => {
  console.log('setting');
  dispatch({
    payload: { data, ids },
    type: SET_EXPORT_DATA,
  });
};

export const toggleOpenSpecific = (surveyDate) => (dispatch) => {
  dispatch({
    payload: { surveyDate },
    type: TOGGLE_OPEN_SPECIFIC,
  });
};
