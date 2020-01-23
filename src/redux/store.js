import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import goodsReducer from './reducers/goodsReducer';
import usersReducer from './reducers/usersReducer';

const reducers = combineReducers({
  goods: goodsReducer,
  users: usersReducer,
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
