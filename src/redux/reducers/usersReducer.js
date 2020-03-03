import { handleActions } from 'redux-actions';
import {
  deleteUser,
  addUser,
  setRegistrationError,
  login,
  setLoginError,
  logout,
  changeName,
  requestForDelete,
  setUsers,
  setUsersStart,
  setUsersFail,
  updateUsers,
} from '../actions/userAction';

const initialState = {
  loginErrorFlag: null,
  registrationErrorFlag: null,
  loadedData: false,
  loading: false,
  error: null,
  usersData: [],
  visibleUsers: [],
  currentUser: { isAuth: false },
};

const reducer = handleActions(
  {
    [deleteUser]: (state, { payload: { mail } }) => ({
      ...state,
      usersData: state.usersData.filter(user => user.mail !== mail || !user.deleteRequest),
      visibleUsers: state.usersData.filter(user => user.mail !== mail || !user.deleteRequest),
    }),
    [addUser]: (state, { payload: { user, updatedUsers } }) => ({
      ...state,
      usersData: updatedUsers,
      visibleUsers: updatedUsers,
      registrationErrorFlag: null,
      currentUser: { ...user, isAuth: true },
    }),
    [setRegistrationError]: (state, { payload: { error } }) => ({
      ...state,
      registrationErrorFlag: error,
    }),
    [login]: (state, { payload: { user } }) => ({
      ...state,
      loginErrorFlag: null,
      currentUser: { isAuth: true, ...user },
    }),
    [setLoginError]: (state, { payload: { error } }) => ({
      ...state,
      loginErrorFlag: error,
    }),
    [logout]: state => ({
      ...state,
      currentUser: initialState.currentUser,
    }),
    [changeName]: (state, { payload: { user } }) => {
      const users = [...state.usersData];
      const { fname, lname, mail } = user;
      const userInfo = users.find(userFind => userFind.mail === mail);
      userInfo.fname = fname;
      userInfo.lname = lname;
      const newState = { ...state };
      const { currentUser } = state;
      newState.currentUser = { ...currentUser, ...user };
      newState.usersData = users;
      return newState;
    },
    [requestForDelete]: (state, { payload: { mail } }) => {
      const users = [...state.usersData];
      const userInfo = users.find(userFind => userFind.mail === mail);
      userInfo.deleteRequest = true;
      const newState = { ...state };
      newState.usersData = users;
      const { currentUser } = state;
      newState.currentUser = { ...currentUser, deleteRequest: true };
      return newState;
    },
    [setUsers]: (state, { payload: { users } }) => ({
      ...state,
      usersData: users,
      visibleUsers: users,
      loading: false,
    }),
    [updateUsers]: (state, { payload: { users } }) => ({ ...state, visibleUsers: users }),
    [setUsersStart]: state => ({ ...state, loading: true }),
    [setUsersFail]: (state, { payload: { error } }) => ({ ...state, loading: false, error }),
  },
  initialState
);

export default reducer;
