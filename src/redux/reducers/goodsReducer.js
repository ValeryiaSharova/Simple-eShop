import { DELETE_GOOD, ADD_GOOD, EDIT_GOOD } from '../constants';

const initialState = {
  goodsData: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GOOD: {
      const goods = [...state.goodsData];
      goods.unshift(action.payload);
      goods[0].id = goods.length;
      const newState = { ...state };
      newState.goodsData = goods;
      return newState;
    }
    case DELETE_GOOD: {
      const goods = [...state.goodsData];
      const newGoods = goods.filter(good => good.id !== action.payload);
      const newState = { ...state };
      newState.goodsData = newGoods;
      return newState;
    }
    case EDIT_GOOD: {
      const goods = [...state.goodsData];
      const newGood = action.payload;
      const goodId = goods.find(good => good.id === newGood.id).id;
      goods[goods.length - goodId] = { ...goods[goodId], ...newGood };
      const newState = { ...state };
      newState.goodsData = goods;
      return newState;
    }
    default:
      return state;
  }
};

export default reducer;
