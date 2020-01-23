import { DELETE_GOOD, ADD_GOOD } from '../constants';

export const deleteGood = title => ({ type: DELETE_GOOD, payload: title });

export const addGood = object => ({
  type: ADD_GOOD,
  payload: object,
});
