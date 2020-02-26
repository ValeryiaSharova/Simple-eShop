import { handleActions } from 'redux-actions';
import {
  deleteGood,
  setGoods,
  setGoodsStart,
  setGoodsFail,
  setGoodsLoaded,
  addToCart,
  removeFromCart,
  logout,
  updateGoods,
} from '../actions/goodsAction';

const initialState = {
  loadedData: false,
  loading: false,
  error: null,
  goodsData: [],
  visibleGoods: [],
  cart: [],
};

const reducer = handleActions(
  {
    [deleteGood]: (state, { payload: { id } }) => {
      const goods = [...state.goodsData];
      const newGoods = goods.filter(good => good.id !== id);
      const newState = { ...state };
      newState.goodsData = newGoods;
      newState.visibleGoods = newGoods;
      return newState;
    },
    [setGoods]: (state, { payload: { goods } }) => ({
      ...state,
      goodsData: goods,
      visibleGoods: goods,
      loading: false,
    }),
    [updateGoods]: (state, { payload: { goods } }) => ({
      ...state,
      visibleGoods: goods,
    }),
    [setGoodsStart]: state => ({ ...state, loading: true }),
    [setGoodsFail]: (state, { payload: { error } }) => ({ ...state, loading: false, error }),
    [setGoodsLoaded]: state => ({ ...state, loadedData: true }),
    [addToCart]: (state, { payload: { good } }) => {
      const cart = [...state.cart];
      const addGoodCart = cart.find(goodFind => goodFind.id === good.id);
      if (!addGoodCart) {
        cart.push({ count: 1, ...good });
      } else {
        const index = cart.indexOf(addGoodCart);
        ++cart[index].count;
      }
      const newState = { ...state };
      newState.cart = cart;
      return newState;
    },
    [removeFromCart]: (state, { payload: { good } }) => {
      const cart = [...state.cart];
      const index = cart.indexOf(good);
      if (good.count === 1) {
        cart.splice(index, 1);
      } else {
        --cart[index].count;
      }
      const newState = { ...state };
      newState.cart = cart;
      return newState;
    },
    [logout]: state => {
      let cart = [...state.cart];
      cart = [];
      const newState = { ...state };
      newState.cart = cart;
      return newState;
    },
  },
  initialState
);

export default reducer;
