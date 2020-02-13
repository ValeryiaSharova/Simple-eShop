import axios from '../axiosInstanse';
import {
  DELETE_GOOD,
  ADD_GOOD,
  EDIT_GOOD,
  SET_GOODS,
  SET_GOODS_START,
  SET_GOODS_FAIL,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_GOODS_LOADED,
} from '../constants';

export const deleteGood = id => ({ type: DELETE_GOOD, payload: { id } });

export const addGood = good => ({ type: ADD_GOOD, payload: { good } });

export const editGood = good => ({ type: EDIT_GOOD, payload: { good } });

export const setGoods = goods => ({ type: SET_GOODS, payload: { goods } });

export const setGoodsStart = () => ({ type: SET_GOODS_START });

export const setGoodsFail = error => ({ type: SET_GOODS_FAIL, payload: { error } });

export const setGoodsLoaded = () => ({ type: SET_GOODS_LOADED });

export const loadGoods = () => dispatch => {
  dispatch(setGoodsStart());
  axios
    .get('/goods.json')
    .then(({ data }) => {
      dispatch(setGoodsLoaded());
      dispatch(setGoods(data));
    })
    .catch(error => {
      dispatch(setGoodsFail(error));
    });
};

export const addToCart = good => ({ type: ADD_TO_CART, payload: { good } });

export const removeFromCart = good => ({ type: REMOVE_FROM_CART, payload: { good } });
