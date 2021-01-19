import {
  TOGGLE_CANCEL_MODAL,
  BACK_TO_HOME,
  SET_TOKEN,
  SUBMIT_SURVEY,
  TOGGLE_EXPORT_MODAL,
  DATE_CHANGED,
  SET_STATE_INIT,
} from '../actions/types';

import axios from 'axios';
import { setExportData } from '../actions/exportActions';

const initialState = {
  auth0Token: null,
  cancelModalIsOpen: false,
  submitted: false,
  exportModal: {
    isOpen: false,
    startDate: '',
    endDate: '',
    datesLegal: false,
  },
  isAdmin: false,
};

const toggleCancelModal = (state) => {
  state.cancelModalIsOpen = !state.cancelModalIsOpen;
  return state;
};

const toggleExportModal = (state) => {
  if (state.exportModal.isOpen) {
    state.exportModal = {
      isOpen: false,
      startDate: '',
      endDate: '',
      datesLegal: false,
    };
  } else {
    state.exportModal.isOpen = true;
  }
  return state;
};

const handleDateChanged = (state, isStart, val) => {
  console.log(isStart, val);
  if (isStart) {
    state.exportModal.startDate = val;
  } else {
    state.exportModal.endDate = val;
  }
  if (state.exportModal.startDate !== '' && state.exportModal.endDate !== '') {
    state.exportModal.datesLegal =
      new Date(state.exportModal.startDate) <
      new Date(state.exportModal.endDate);
  }
  return { ...state };
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case TOGGLE_CANCEL_MODAL:
      return { ...toggleCancelModal(state) };
    case BACK_TO_HOME:
      state.cancelModalIsOpen = false;
      state.submitted = false;
      return { ...state };
    case SET_TOKEN:
      state.auth0Token = payload.token;
      return { ...state };
    case SUBMIT_SURVEY:
      state.submitted = true;
      return { ...state };
    case TOGGLE_EXPORT_MODAL:
      return { ...toggleExportModal(state) };
    case DATE_CHANGED:
      return {
        ...handleDateChanged(state, payload.date === 'start', payload.val),
      };
    case SET_STATE_INIT:
      state.isAdmin = payload.isAdmin;
      return { ...state };
    default:
      return state;
  }
}
