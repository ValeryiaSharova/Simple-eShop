import { DELETE_GOOD, ADD_GOOD, EDIT_GOOD, SET_GOODS } from '../constants';

const initialState = {
  goodsData: [],
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
    default:
      return state;
  }
};

export default reducer;
