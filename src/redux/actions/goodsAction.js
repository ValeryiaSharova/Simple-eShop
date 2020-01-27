import { DELETE_GOOD, ADD_GOOD } from '../constants';

export const deleteGood = id => ({ type: DELETE_GOOD, payload: id });

export const addGood = object => ({
  type: ADD_GOOD,
  payload: object,
});
