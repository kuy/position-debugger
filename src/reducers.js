import { combineReducers } from 'redux';
import {
  ADD_POSITION, REMOVE_POSITION, UPDATE_POSITION,
  addPosition, removePosition, updatePosition
} from './actions';

function parse(text) {
  const pos = {};
  const items = text.split(',').map(token => token.trim());
  items.forEach(item => {
    const pair = item.split(':').map(token => token.trim());
    if (pair.length === 2) {
      pos[pair[0]] = parseFloat(pair[1]);
    }
  });
  return pos;
}

const initial = {
  positions: ['']
};

function app(state = initial, action) {
  switch (action.type) {
  case ADD_POSITION:
    return { ...state, positions: state.positions.concat(['']) };
  case REMOVE_POSITION:
    return { ...state, positions: state.positions.filter((_, i) => i !== action.payload) };
  case UPDATE_POSITION:
    const obj = parse(action.payload.position);
    return { ...state, positions: state.positions.map((pos, i) => i === action.payload.index ? obj : pos) };
  default:
    return state;
  }
}

export default combineReducers(
  { app }
);
