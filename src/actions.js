import { createAction } from 'redux-actions';

export const ADD_POSITION = 'ADD_POSITION';
export const REMOVE_POSITION = 'REMOVE_POSITION';
export const UPDATE_POSITION = 'UPDATE_POSITION';

export const addPosition = createAction(ADD_POSITION);
export const removePosition = createAction(REMOVE_POSITION);
export const updatePosition = createAction(UPDATE_POSITION);
