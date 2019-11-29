"use strict";

let dataUser = (function() {
  const tableOfUsers = [
    {
      name: "Aller",
      fname: "Forst",
      mail: "goAller@gmail.com",
      pass: "admin",
      role: "admin",
      deleteRequest: false
    },
    {
      name: "Anastasia",
      fname: "Novikova",
      mail: "Nov@mail.ru",
      pass: "11111",
      role: "user",
      deleteRequest: true
    },
    {
      name: "Valeryia",
      fname: "Nemankova",
      mail: "Neman@gmail.com",
      pass: "22222",
      role: "user",
      deleteRequest: false
    },
    {
      name: "Igor",
      fname: "Leonov",
      mail: "Xan@yandex.com",
      pass: "33333",
      role: "user",
      deleteRequest: false
    },
    {
      name: "Pavel",
      fname: "Zinkevich",
      mail: "Pavel@gmail.com",
      pass: "44444",
      role: "user",
      deleteRequest: true
    }
  ];

  function getUsers() {
    let users = JSON.parse(localStorage.getItem("allUsers"));
    return users;
  }

  function addDefaultUsers() {
    let users = getUsers();
    if (!users) {
      localStorage.setItem("allUsers", JSON.stringify(tableOfUsers));
    }
  }

  function addUser(user) {
    let users = getUsers();
    users.push(user);
    localStorage.setItem("allUsers", JSON.stringify(users));
  }

  function setActiveUser(user) {
    localStorage.setItem("activeUser", JSON.stringify(user));
  }

  function getActiveUser() {
    let user = JSON.parse(localStorage.getItem("activeUser"));
    return user;
  }

  function deleteActiveUser() {
    localStorage.removeItem("activeUser");
  }

  function getUserByEmail(email) {
    let users = getUsers();
    return users.find(user => user.mail === email);
  }

  function tryDeleteUserByEmail(email) {
    let users = getUsers();
    let userIndex = users.findIndex(
      user => user.mail === email && user.deleteRequest
    );
    if (userIndex === -1) {
      alert("You can't delete this user");
      return false;
    }
    users.splice(userIndex, 1);
    localStorage.setItem("allUsers", JSON.stringify(users));
    return true;
  }

  return {
    getUsers: getUsers,
    addDefaultUsers: addDefaultUsers,
    addUser: addUser,
    setActiveUser: setActiveUser,
    getUserByEmail: getUserByEmail,
    tryDeleteUserByEmail: tryDeleteUserByEmail,
    deleteActiveUser: deleteActiveUser,
    getActiveUser: getActiveUser
  };
})();
