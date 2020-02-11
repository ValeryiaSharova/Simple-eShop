import {
  DELETE_USER,
  ADD_USER,
  LOGIN,
  LOGOUT,
  CHANGE_NAME,
  REQUEST,
  SET_USERS,
} from '../constants';

const initialState = {
  usersData: [],
  currentUser: { isAuth: false },
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_USER: {
      const users = state.usersData;
      const newUsers = users.filter(
        user => user.mail !== action.payload.mail || !user.deleteRequest
      );
      const newState = { ...state };
      newState.usersData = newUsers;
      return newState;
    }
    case ADD_USER: {
      const users = [...state.usersData];
      const newState = { ...state };
      const userInfo = users.find(user => user.mail === action.payload.user.mail);
      if (!userInfo) {
        users.push(action.payload.user);
        newState.usersData = users;
        newState.currentUser = {
          isAuth: true,
          fname: action.payload.user.fname,
          lname: action.payload.user.lname,
          mail: action.payload.user.mail,
          role: action.payload.user.role,
          deleteRequest: action.payload.user.deleteRequest,
        };
      } else {
        alert('This email has been already registered!');
      }
      return newState;
    }
    case LOGIN: {
      const newState = { ...state };
      let { currentUser } = state;
      const users = [...state.usersData];
      const { mail, pass } = action.payload.user;
      const userInfo = users.find(user => user.mail === mail);
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
          alert('error pass');
        }
      } else {
        alert('error email');
      }
      newState.currentUser = currentUser;
      return newState;
    }
    case LOGOUT: {
      const newState = { ...state };
      newState.currentUser = initialState.currentUser;
      return newState;
    }
    case CHANGE_NAME: {
      const users = [...state.usersData];
      const { fname, lname, mail } = action.payload.user;
      const userInfo = users.find(user => user.mail === mail);
      userInfo.fname = fname;
      userInfo.lname = lname;
      const newState = { ...state };
      const { currentUser } = state;
      newState.currentUser = { ...currentUser, ...action.payload.user };
      newState.usersData = users;
      return newState;
    }
    case REQUEST: {
      const users = [...state.usersData];
      const { mail } = action.payload;
      const userInfo = users.find(user => user.mail === mail);
      userInfo.deleteRequest = true;
      const newState = { ...state };
      newState.usersData = users;
      const { currentUser } = state;
      newState.currentUser = { ...currentUser, deleteRequest: true };
      return newState;
    }
    case SET_USERS: {
      return { ...state, usersData: [...state.usersData, ...action.payload.users] };
    }
    default:
      return state;
  }
};

export default reducer;
