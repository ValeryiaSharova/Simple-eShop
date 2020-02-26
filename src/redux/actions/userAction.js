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
  updateUsers,
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
      || user.mail.toLowerCase() === info
  );
  return dispatch(updateUsers(updatedUsers));
};
