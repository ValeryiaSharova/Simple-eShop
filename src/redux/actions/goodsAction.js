import { DELETE_GOOD, ADD_GOOD, EDIT_GOOD } from '../constants';

export const deleteGood = id => ({ type: DELETE_GOOD, payload: id });

export const addGood = object => ({ type: ADD_GOOD, payload: object });

export const editGood = object => ({ type: EDIT_GOOD, payload: object });
