import { createActions } from 'redux-actions';
import axios from '../axiosInstanse';

export const {
  deleteUser,
  addUser,
  login,
  logout,
  changeName,
  requestForDelete,
  setUsers,
  setUsersStart,
  setUsersFail,
} = createActions({
  DELETE_USER: mail => ({ mail }),
  ADD_USER: user => ({ user }),
  LOGIN: user => ({ user }),
  LOGOUT: () => ({}),
  CHANGE_NAME: user => ({ user }),
  REQUEST_FOR_DELETE: mail => ({ mail }),
  SET_USERS: users => ({ users }),
  SET_USERS_START: () => ({}),
  SET_USERS_FAIL: error => ({ error }),
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
