import { createActions } from 'redux-actions';
import axios from '../axiosInstanse';

export const {
  deleteGood,
  addGood,
  editGood,
  setGoods,
  setGoodsStart,
  setGoodsFail,
  setGoodsLoaded,
  addToCart,
  removeFromCart,
  logout,
} = createActions({
  DELETE_GOOD: id => ({ id }),
  ADD_GOOD: good => ({ good }),
  EDIT_GOOD: good => ({ good }),
  SET_GOODS: goods => ({ goods }),
  SET_GOODS_START: () => ({}),
  SET_GOODS_FAIL: error => ({ error }),
  SET_GOODS_LOADED: () => ({}),
  ADD_TO_CART: good => ({ good }),
  REMOVE_FROM_CART: good => ({ good }),
  LOGOUT: () => ({}),
});

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
export const setRating = (id, rating) => (dispatch, getState) => {
  const { goods } = getState();
  const updatedGoods = goods.goodsData.map(good => {
    if (good.id === id) {
      return { ...good, rating: [...good.rating, rating] };
    }
    return good;
  });
  dispatch(setGoods(updatedGoods));
};

export const deleteRating = (id, mail) => (dispatch, getState) => {
  const { goods } = getState();
  const updatedGoods = goods.goodsData.map(good => {
    if (good.id === id) {
      const ratingId = good.rating.indexOf(mail);
      good.rating.splice(ratingId, 1);
    }
    return good;
  });
  dispatch(setGoods(updatedGoods));
};
