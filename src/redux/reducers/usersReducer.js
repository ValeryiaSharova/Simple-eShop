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
  currentUser: [],
};
const reducer = (state = initialState, action) => state;

export default reducer;
