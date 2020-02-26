import { handleActions } from 'redux-actions';
import {
  deleteUser,
  addUser,
  login,
  logout,
  changeName,
  requestForDelete,
  setUsers,
  setUsersStart,
  setUsersFail,
  updateUsers,
} from '../actions/userAction';

const initialState = {
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
    [addUser]: (state, { payload: { user } }) => {
      const users = [...state.usersData];
      const newState = { ...state };
      const userInfo = users.find(userFind => userFind.mail === user.mail);
      if (!userInfo) {
        users.push(user);
        newState.usersData = users;
        newState.visibleUsers = users;
        newState.currentUser = {
          isAuth: true,
          fname: user.fname,
          lname: user.lname,
          mail: user.mail,
          role: user.role,
          deleteRequest: user.deleteRequest,
        };
      } else {
        return newState;
      }
      return newState;
    },
    [login]: (state, { payload: { user } }) => {
      const newState = { ...state };
      let { currentUser } = state;
      const users = [...state.usersData];
      const { mail, pass } = user;
      const userInfo = users.find(userFind => userFind.mail === mail);
      if (userInfo) {
        if (userInfo.pass === pass) {
          currentUser = {
            isAuth: true,
            fname: userInfo.fname,
            lname: userInfo.lname,
            mail: userInfo.mail,
            role: userInfo.role,
            deleteRequest: userInfo.deleteRequest,
          };
        } else {
          return newState;
        }
      } else {
        return newState;
      }
      newState.currentUser = currentUser;

      return newState;
    },
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
