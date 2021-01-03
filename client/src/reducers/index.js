import { combineReducers } from 'redux';

import selectReducer from './selectReducer';
import questionBankReducer from './questionBankReducer.js';
import surveyReducer from './surveyReducer';

export default combineReducers({
  survey: surveyReducer,
  questionBankReducer,
  selectReducer,
});
