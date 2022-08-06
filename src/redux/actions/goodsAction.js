import { createActions } from 'redux-actions';
import axios from '../axiosInstanse';

export const {
  deleteGood,
  setGoods,
  setGoodsStart,
  setGoodsFail,
  setGoodsLoaded,
  addToCart,
  removeFromCart,
  logout,
  updateGoods,
} = createActions({
  DELETE_GOOD: (id) => ({ id }),
  SET_GOODS: (goods) => ({ goods }),
  SET_GOODS_START: () => ({}),
  SET_GOODS_FAIL: (error) => ({ error }),
  SET_GOODS_LOADED: () => ({}),
  ADD_TO_CART: (good) => ({ good }),
  REMOVE_FROM_CART: (good) => ({ good }),
  LOGOUT: () => ({}),
  UPDATE_GOODS: (goods) => ({ goods }),
});

export const loadGoods = () => (dispatch) => {
  dispatch(setGoodsStart());
  axios
    .get('b/62ab3dc7449a1f38210bee5f', {
      headers: {
        'X-Bin-Meta': false,
      },
    })
    .then(({ data }) => {
      dispatch(setGoodsLoaded());
      dispatch(setGoods(data));
      dispatch(updateGoods(data));
    })
    .catch((error) => {
      dispatch(setGoodsFail(error));
    });
};

export const setRating = (id, rating) => (dispatch, getState) => {
  const { goods } = getState();
  const updatedGoods = goods.goodsData.map((good) => {
    if (good.id === id) {
      return { ...good, rating: [...good.rating, rating] };
    }
    return good;
  });
  dispatch(setGoods(updatedGoods));
  dispatch(updateGoods(updatedGoods));
};

export const deleteRating = (id, mail) => (dispatch, getState) => {
  const { goods } = getState();
  const { goodsData } = goods;
  const updatedGoods = goodsData.map((good) => {
    if (good.id === id) {
      const ratingId = good.rating.indexOf(mail);
      good.rating.splice(ratingId, 1);
    }
    return good;
  });
  dispatch(setGoods(updatedGoods));
};

export const addGood = (good) => (dispatch, getState) => {
  const { goods } = getState();
  const { goodsData } = goods;
  const tags = good.tags
    .replace(/  +/g, ' ')
    .trim()
    .split(' ');
  const correctGood = { ...good, id: goodsData.length + 1, tags };
  const updatedGoodsData = [...goodsData, { ...correctGood }];
  dispatch(setGoods(updatedGoodsData));
  dispatch(updateGoods(updatedGoodsData));
};

export const editGood = (good) => (dispatch, getState) => {
  const { goods } = getState();
  const { goodsData } = goods;
  let updatedGood = {};
  if (typeof good.tags === 'string') {
    const tags = good.tags
      .replace(/  +/g, ' ')
      .trim()
      .split(' ');
    updatedGood = {
      ...goodsData.find((goodFind) => goodFind.id === good.id),
      ...good,
      tags,
    };
  } else {
    updatedGood = {
      ...goodsData.find((goodFind) => goodFind.id === good.id),
      ...good,
    };
  }

  const updatedGoods = goodsData.map((goodFind) => {
    if (goodFind.id === updatedGood.id) {
      return updatedGood;
    }
    return goodFind;
  });
  dispatch(setGoods(updatedGoods));
  dispatch(updateGoods(updatedGoods));
};

export const search = (input) => (dispatch, getState) => {
  const { goods } = getState();
  const { goodsData } = goods;
  const tags = input
    .toLowerCase()
    .replace(/  +/g, ' ')
    .trim()
    .split(' ');
  if (tags[0].length === 0) {
    return dispatch(updateGoods(goodsData));
  }
  const updatedGoods = goodsData.filter((good) =>
    tags.every((tag) =>
      good.tags.map((goodTag) => goodTag.toLowerCase()).includes(tag)
    )
  );
  return dispatch(updateGoods(updatedGoods));
};

export const getEvaluatedGoods = (mail, switchState) => (
  dispatch,
  getState
) => {
  const { goods } = getState();
  const { goodsData } = goods;
  if (switchState) {
    dispatch(updateGoods(goodsData));
  } else {
    const updatedGoods = goodsData.filter((good) =>
      good.rating.some((rating) => rating.mail === mail)
    );
    dispatch(updateGoods(updatedGoods));
  }
};

export const getAllGoods = () => (dispatch, getState) => {
  const { goods } = getState();
  const { goodsData } = goods;
  dispatch(updateGoods(goodsData));
};
