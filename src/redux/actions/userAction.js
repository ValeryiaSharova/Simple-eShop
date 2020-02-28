import { createActions } from 'redux-actions';
import axios from '../axiosInstanse';

export const {
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
} = createActions({
  DELETE_USER: mail => ({ mail }),
  ADD_USER: (user, updatedUsers) => ({ user, updatedUsers }),
  SET_REGISTRATION_ERROR: error => ({ error }),
  LOGIN: user => ({ user }),
  SET_LOGIN_ERROR: error => ({ error }),
  LOGOUT: () => ({}),
  CHANGE_NAME: user => ({ user }),
  REQUEST_FOR_DELETE: mail => ({ mail }),
  SET_USERS: users => ({ users }),
  SET_USERS_START: () => ({}),
  SET_USERS_FAIL: error => ({ error }),
  UPDATE_USERS: users => ({ users }),
});

export const loadUsers = () => dispatch => {
  dispatch(setUsersStart());
  axios
    .get('/users.json')
    .then(({ data }) => {
      dispatch(setUsers(data));
    })
    .catch(error => {
      dispatch(setUsersFail(error));
    });
};

export const signin = user => (dispatch, getState) => {
  const { users } = getState();
  const userInfo = users.usersData.find(userFind => userFind.mail === user.mail);
  if (userInfo) {
    if (userInfo.pass === user.pass) {
      dispatch(login(userInfo));
    } else {
      dispatch(setLoginError('error'));
    }
  } else {
    dispatch(setLoginError('error'));
  }
};

export const registration = user => (dispatch, getState) => {
  const { users } = getState();
  const { usersData } = users;
  const userInfo = usersData.find(userFind => userFind.mail === user.mail);
  if (!userInfo) {
    const updatedUsers = [...usersData, user];
    return dispatch(addUser(user, updatedUsers));
  }
  return dispatch(setRegistrationError('error'));
};

export const search = input => (dispatch, getState) => {
  const { users } = getState();
  const { usersData } = users;
  const info = input.toLowerCase().trim();
  if (info.length === 0) {
    return dispatch(updateUsers(usersData));
  }
  const updatedUsers = usersData.filter(
    user =>
      user.fname.toLowerCase() === info
      || user.lname.toLowerCase() === info
      || user.mail.toLowerCase().indexOf(info) > -1
  );
  return dispatch(updateUsers(updatedUsers));
};
