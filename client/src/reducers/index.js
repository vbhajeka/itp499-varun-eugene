import { combineReducers } from 'redux';

//import surveyReducer from './surveyReducer';
import blockReducer from './blockReducer';

export default combineReducers({
  blocks: blockReducer,
});
