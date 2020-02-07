import {
  DELETE_USER,
  ADD_USER,
  LOGIN,
  LOGOUT,
  CHANGE_NAME,
  REQUEST,
  SET_USERS,
} from '../constants';

export const deleteUser = mail => ({ type: DELETE_USER, payload: mail });

export const addUser = object => ({ type: ADD_USER, payload: object });

export const login = object => ({ type: LOGIN, payload: object });

export const logout = () => ({ type: LOGOUT });

export const changeName = object => ({ type: CHANGE_NAME, payload: object });

export const requestForDelete = mail => ({ type: REQUEST, payload: mail });

export const setUsers = users => ({ type: SET_USERS, payload: { users } });

export const loadUsers = () => dispatch => {
  fetch('http://localhost:3000/users.json')
    .then(res => res.json())
    .then(data => dispatch(setUsers(data)));
};
