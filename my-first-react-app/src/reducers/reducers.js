import { combineReducers } from 'redux'
import {
  DATA_LOADED,
  DATA_LOADING,
  CHANGE_EDITABLE
} from '../actions/actions';

import {
  GENERAL_FRAME,
  EDUCATION_FRAME,
  CONTACTS_FRAME
} from '../constants'

const defLoadState = {
  data: {},
  status: "empty",
};

const defTabsState = {
  [GENERAL_FRAME]: true,
  [EDUCATION_FRAME]: true,
  [CONTACTS_FRAME]: true,
};

function loadReducer(state = defLoadState, action) {
  switch (action.type) {
    case DATA_LOADING:
      return {...state, status: "loading"};
    case DATA_LOADED:
      return {...state, data: action.data, status: "loaded"};
    default:
      return state;
  }
}

function tabsReducer(state = defTabsState, action) {
  switch (action.type) {
    case CHANGE_EDITABLE:
      return {...state, [action.frame]: !action.value};
    default:
      return state;
  }
}

const githubViewerApp = combineReducers({
  loadReducer,
  tabsReducer
});

export default githubViewerApp