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
    [deleteUser]: (state, { payload: { mail } }) => {
      const users = state.usersData;
      const newUsers = users.filter(user => user.mail !== mail || !user.deleteRequest);
      const newState = { ...state };
      newState.usersData = newUsers;
      newState.visibleUsers = newUsers;
      return newState;
    },
    [addUser]: (state, { payload: { user, updatedUsers } }) => {
      const newState = { ...state };
      newState.usersData = updatedUsers;
      newState.visibleUsers = updatedUsers;
      newState.registrationErrorFlag = null;
      newState.currentUser = { ...user, isAuth: true };
      return newState;
    },
    [setRegistrationError]: (state, { payload: { error } }) => ({
      ...state,
      registrationErrorFlag: error,
    }),
    [login]: (state, { payload: { user } }) => {
      const newState = { ...state };
      let { currentUser } = state;
      currentUser = {
        isAuth: true,
        fname: user.fname,
        lname: user.lname,
        mail: user.mail,
        role: user.role,
        deleteRequest: user.deleteRequest,
      };
      newState.loginErrorFlag = null;
      newState.currentUser = currentUser;
      return newState;
    },
    [setLoginError]: (state, { payload: { error } }) => ({
      ...state,
      loginErrorFlag: error,
    }),
    [logout]: state => {
      const newState = { ...state };
      newState.currentUser = initialState.currentUser;
      return newState;
    },
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
