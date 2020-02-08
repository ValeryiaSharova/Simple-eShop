import axios from '../axiosInstanse';
import {
  DELETE_USER,
  ADD_USER,
  LOGIN,
  LOGOUT,
  CHANGE_NAME,
  REQUEST,
  SET_USERS,
} from '../constants';

export const deleteUser = mail => ({ type: DELETE_USER, payload: { mail } });

export const addUser = user => ({ type: ADD_USER, payload: { user } });

export const login = user => ({ type: LOGIN, payload: { user } });

export const logout = () => ({ type: LOGOUT });

export const changeName = user => ({ type: CHANGE_NAME, payload: { user } });

export const requestForDelete = mail => ({ type: REQUEST, payload: { mail } });

export const setUsers = users => ({ type: SET_USERS, payload: { users } });

export const loadUsers = () => dispatch => {
  axios.get('/users.json').then(({ data }) => dispatch(setUsers(data)));
};
