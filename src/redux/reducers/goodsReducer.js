import {
  DELETE_GOOD,
  ADD_GOOD,
  EDIT_GOOD,
  SET_GOODS,
  ADD_TO_CART,
  LOGOUT,
  REMOVE_FROM_CART,
} from '../constants';

const initialState = {
  goodsData: [],
  cart: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GOOD: {
      const goods = [...state.goodsData];
      goods.unshift(action.payload.good);
      goods[0].id = goods.length;
      const newState = { ...state };
      newState.goodsData = goods;
      return newState;
    }
    case DELETE_GOOD: {
      const goods = [...state.goodsData];
      const newGoods = goods.filter(good => good.id !== action.payload.id);
      const newState = { ...state };
      newState.goodsData = newGoods;
      return newState;
    }
    case EDIT_GOOD: {
      const goods = [...state.goodsData];
      const newGood = action.payload.good;
      const goodId = goods.find(good => good.id === newGood.id).id;
      goods[goods.length - goodId] = { ...goods[goodId], ...newGood };
      const newState = { ...state };
      newState.goodsData = goods;
      return newState;
    }
    case SET_GOODS: {
      return { ...state, goodsData: [...state.goodsData, ...action.payload.goods] };
    }
    case ADD_TO_CART: {
      const cart = [...state.cart];
      const addGood = cart.find(good => good.id === action.payload.good.id);
      if (!addGood) {
        cart.push({ count: 1, ...action.payload.good });
      } else {
        const index = cart.indexOf(addGood);
        ++cart[index].count;
      }
      const newState = { ...state };
      newState.cart = cart;
      return newState;
    }
    case LOGOUT: {
      let cart = [...state.cart];
      cart = [];
      const newState = { ...state };
      newState.cart = cart;
      return newState;
    }
    case REMOVE_FROM_CART: {
      const cart = [...state.cart];
      const index = cart.indexOf(action.payload.good);
      if (action.payload.good.count === 1) {
        cart.splice(index, 1);
      } else {
        --cart[index].count;
      }
      const newState = { ...state };
      newState.cart = cart;
      return newState;
    }
    default:
      return state;
  }
};

export default reducer;
