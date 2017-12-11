import { combineReducers } from 'redux'
import { ADD_ITEM } from '../actions/actions';

function items(state = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      return [
        ...state,
        {
          text: action.text
        }
      ];
    default:
      return state
  }
}


const todoApp = combineReducers({
  items
});

export default todoApp