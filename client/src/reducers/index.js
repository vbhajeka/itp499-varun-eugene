import { combineReducers } from 'redux';

import blockReducer from './blockReducer';

import { SUBMIT_SURVEY } from '../actions/types';

const appReducer = combineReducers({
  blocks: blockReducer,
});

const rootReducer = (state, action) => {
  if (action.type === SUBMIT_SURVEY) {
    console.log('here');
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
