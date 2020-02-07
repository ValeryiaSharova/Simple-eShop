import { DELETE_GOOD, ADD_GOOD, EDIT_GOOD, SET_GOODS } from '../constants';

export const deleteGood = id => ({ type: DELETE_GOOD, payload: id });

export const addGood = object => ({ type: ADD_GOOD, payload: object });

export const editGood = object => ({ type: EDIT_GOOD, payload: object });

export const setGoods = goods => ({ type: SET_GOODS, payload: { goods } });

export const loadGoods = () => dispatch => {
  fetch('http://localhost:3000/goods.json')
    .then(res => res.json())
    .then(data => dispatch(setGoods(data)));
};
