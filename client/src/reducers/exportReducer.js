import { SET_EXPORT_DATA, TOGGLE_OPEN_SPECIFIC } from '../actions/types';

const initialState = {
  surveyData: [],
  openSpecific: false,
  toDisplay: '',
  allQIds: [],
};

const setData = (data, ids, state) => {
  data = data.map((s) => {
    const doc = s.doctor;
    const date = s.date;
    return { doc, date, surveyAnswers: s.surveyAnswers.map(JSON.parse) };
  });
  console.log(data);
  state.surveyData = data;
  state.allQIds = ids;
  return state;
};

const toggleExportModalAction = (state, date) => {
  state.openSpecific = !state.openSpecific;
  if (date) {
    state.toDisplay = date;
  }
  return state;
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_EXPORT_DATA:
      return { ...setData(payload.data, payload.ids, state) };
    case TOGGLE_OPEN_SPECIFIC:
      return { ...toggleExportModalAction(state, payload.surveyDate) };
    default:
      return state;
  }
}
