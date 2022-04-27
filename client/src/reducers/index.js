import { combineReducers } from 'redux';

import blockReducer from './blockReducer';
import stateReducer from './stateReducer';
import exportReducer from './exportReducer';
import resultsReducer from './resultsReducer';
import caRebateReducer from './caRebateReducer';

import { SUBMIT_SURVEY } from '../actions/types';

const appReducer = combineReducers({
  blocks: blockReducer,
  state: stateReducer,
  exportData: exportReducer,
  results: resultsReducer,
  caRebate: caRebateReducer,
});

const rootReducer = (state, action) => {
  if (action.type === SUBMIT_SURVEY) {
    console.log('here');
    state.blocks = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
