import { combineReducers } from 'redux'
import {
  DATA_LOADED,
  DATA_LOADING
} from '../actions/actions';

const defState = {
  data: {},
  status: "empty",
};

function loader(state = defState, action) {
  switch (action.type) {
    case DATA_LOADING:
      return {...state, status: "loading"};
    case DATA_LOADED:
      return {...state, data: action.data, status: "loaded"};
    default:
      return state;
  }
}

const githubViewerApp = combineReducers({
  loader
});

export default githubViewerApp