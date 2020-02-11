import axios from '../axiosInstanse';
import {
  DELETE_GOOD,
  ADD_GOOD,
  EDIT_GOOD,
  SET_GOODS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from '../constants';

export const deleteGood = id => ({ type: DELETE_GOOD, payload: { id } });

export const addGood = good => ({ type: ADD_GOOD, payload: { good } });

export const editGood = good => ({ type: EDIT_GOOD, payload: { good } });

export const setGoods = goods => ({ type: SET_GOODS, payload: { goods } });

export const loadGoods = () => dispatch => {
  axios
    .get('/goods.json')
    .then(({ data }) => dispatch(setGoods(data)))
    .catch(error => {
      console.log('error', error);
    });
};

export const addToCart = good => ({ type: ADD_TO_CART, payload: { good } });

export const removeFromCart = good => ({ type: REMOVE_FROM_CART, payload: { good } });
