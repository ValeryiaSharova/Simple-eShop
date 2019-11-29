"use strict";

let adminPageData = (function() {
  function renderTableOfUsers() {
    let tableOfUsers = dataUser.getUsers();
    tableOfUsers.forEach(function(user, index) {
      const tableRow = document.createElement("tr");
      const tableHeader = document.createElement("th");
      tableHeader.textContent = index + 1;
      tableRow.append(tableHeader);

      let tableData = document.createElement("td");
      tableData.textContent = user.name;
      tableRow.append(tableData);
      tableData = document.createElement("td");
      tableData.textContent = user.fname;
      tableRow.append(tableData);
      tableData = document.createElement("td");
      tableData.setAttribute("name", "user-mail");
      tableData.textContent = user.mail;
      tableRow.append(tableData);
      tableData = document.createElement("td");
      tableData.textContent = user.role;
      tableRow.append(tableData);
      tableData = document.createElement("td");
      tableData.textContent = user.deleteRequest;
      tableRow.append(tableData);

      const removeButton = document.createElement("button");
      removeButton.classList.add("btn", "btn-color");
      removeButton.setAttribute("type", "button");
      removeButton.setAttribute("name", "user-remove-button");
      removeButton.onclick = userRemoveButtonHandler;
      removeButton.textContent = "Remove";
      const lastTableRow = document.createElement("td");
      lastTableRow.append(removeButton);
      tableRow.append(lastTableRow);

      const tbody = document.querySelector("#table-of-users > tbody");
      tbody.append(tableRow);
    });
  }

  function cleanUserTable() {
    const tbody = document.querySelector("#table-of-users > tbody");
    tbody.innerHTML = "";
  }

  function userRemoveButtonHandler(event) {
    event.preventDefault();
    const button = $(this);
    const currentTr = button.parents("tr");
    const currentUserMail = currentTr.children("td[name=user-mail]").text();
    if (dataUser.tryDeleteUserByEmail(currentUserMail)) {
      cleanUserTable();
      renderTableOfUsers();
    }
  }

  function logoutHandler(event) {
    event.preventDefault();
    dataUser.deleteActiveUser();
    document.location.href = "/";
  }

  function setEventToLogoutButton() {
    let logoutButton = document.querySelector("#logout-button");
    logoutButton.onclick = logoutHandler;
  }

  renderTableOfUsers();
  setEventToLogoutButton();
})();
