const adminPageData = (function () {
  function renderTableOfUsers() {
    const tableOfUsers = dataUser.getUsers();
    tableOfUsers.forEach((user, index) => {
      const tableRow = $('<tr/>');

      $('<th/>', {
        text: index + 1,
      }).appendTo(tableRow);

      $('<td/>', {
        text: user.name,
      }).appendTo(tableRow);
      $('<td/>', {
        text: user.fname,
      }).appendTo(tableRow);
      $('<td/>', {
        name: 'user-mail',
        text: user.mail,
      }).appendTo(tableRow);
      $('<td/>', {
        text: user.role,
      }).appendTo(tableRow);
      $('<td/>', {
        text: user.deleteRequest,
      }).appendTo(tableRow);

      const removeButton = $('<button/>', {
        class: 'btn btn-color',
        type: 'button',
        name: 'user-remove-button',
        text: 'Remove',
        click: userRemoveButtonHandler,
      });

      const lastTableRow = $('<td/>');
      removeButton.appendTo(lastTableRow);
      lastTableRow.appendTo(tableRow);

      tableRow.appendTo('#table-of-users > tbody');
    });
  }

  function cleanUserTable() {
    $('#table-of-users > tbody').html('');
  }

  function userRemoveButtonHandler(event) {
    event.preventDefault();
    const button = $(this);
    const currentTr = button.parents('tr');
    const currentUserMail = currentTr.children('td[name=user-mail]').text();
    if (dataUser.tryDeleteUserByEmail(currentUserMail)) {
      cleanUserTable();
      renderTableOfUsers();
    }
  }

  function logoutHandler(event) {
    event.preventDefault();
    dataUser.deleteActiveUser();
    document.location.href = '/';
  }

  function setEventToLogoutButton() {
    $('#logout-button').on('click', logoutHandler);
  }

  renderTableOfUsers();
  setEventToLogoutButton();
}());
