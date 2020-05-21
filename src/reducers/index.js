/* eslint-disable no-param-reassign */
import { combineReducers } from 'redux';
import {
  LOAD_CELL_SETS, UPDATE_CELL_SETS, LOAD_CELLS, CELL_SETS_COLOR,
} from '../actions/actionType';


const cellSetsReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_CELL_SETS:
      state.data = action.data;
      return state;
    case UPDATE_CELL_SETS:
      state.data = action.data;
      return state;
    default:
      return state;
  }
};

const cellsReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_CELLS:
      state.data = action.data;
      return state;
    default:
      return state;
  }
};

const cellSetsColorReducer = (state = {}, action) => {
  switch (action.type) {
    case CELL_SETS_COLOR:
      state.data = action.data;
      return state;
    default:
      return state;
  }
};

export default combineReducers({
  cellSets: cellSetsReducer,
  cellSetsColor: cellSetsColorReducer,
  cells: cellsReducer,
});