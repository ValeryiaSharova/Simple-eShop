import { DELETE_USER, ADD_USER, LOGIN, LOGOUT } from '../constants';

const initialState = {
  usersData: [
    {
      name: 'Aller',
      fname: 'Forst',
      mail: 'goAller@gmail.com',
      pass: 'admin',
      role: 'admin',
      deleteRequest: false,
    },
    {
      name: 'Anastasia',
      fname: 'Novikova',
      mail: 'Nov@mail.ru',
      pass: '11111',
      role: 'user',
      deleteRequest: true,
    },
    {
      name: 'Valeryia',
      fname: 'Nemankova',
      mail: 'Neman@gmail.com',
      pass: '22222',
      role: 'user',
      deleteRequest: false,
    },
    {
      name: 'Igor',
      fname: 'Leonov',
      mail: 'Xan@yandex.com',
      pass: '33333',
      role: 'user',
      deleteRequest: false,
    },
    {
      name: 'Pavel',
      fname: 'Zinkevich',
      mail: 'Pavel@gmail.com',
      pass: '44444',
      role: 'user',
      deleteRequest: true,
    },
  ],
  currentUser: { isAuth: false },
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_USER: {
      const users = state.usersData;
      const newUsers = users.filter(user => user.mail !== action.payload || !user.deleteRequest);
      const newState = { ...state };
      newState.usersData = newUsers;
      return newState;
    }
    case ADD_USER: {
      const users = [...state.usersData];
      users.push(action.payload);
      const newState = { ...state };
      newState.usersData = users;
      newState.currentUser = { isAuth: true, mail: action.payload.mail, role: action.payload.role };
      return newState;
    }
    case LOGIN: {
      const newState = { ...state };
      let { currentUser } = state;
      const users = [...state.usersData];
      const { mail, pass } = action.payload;
      const userInfo = users.find(user => user.mail === mail);

      if (userInfo) {
        if (userInfo.pass === pass) {
          currentUser = {
            isAuth: true,
            mail: userInfo.mail,
            role: userInfo.role,
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
    default:
      return state;
  }
};

export default reducer;