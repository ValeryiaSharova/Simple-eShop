const startGoodsData = (function () {
  function renderGoodsData() {
    const goodsData = dataGood.getGoods();
    goodsData.forEach((good) => {
      const card = $('<div/>').addClass('card box-shadow');

      $('<img/>', {
        class: 'card-img-top',
        src: good.picture,
        alt: good.title,
      }).appendTo(card);

      const cardBody = $('<div/>').addClass('card-body');

      $('<h5/>', {
        class: 'card-title text-center',
        text: good.title,
      }).appendTo(cardBody);

      $('<p/>', {
        class: 'card-text text-justify',
        text: good.description,
      }).appendTo(cardBody);

      const cardTag = $('<p/>').addClass('card-text');

      $('<small/>', {
        class: 'text-muted',
        text: good.tags,
      }).appendTo(cardTag);

      cardTag.appendTo(cardBody);
      cardBody.appendTo(card);

      $('.card-columns').prepend(card);
    });
  }

  function cleanRegisterForm() {
    $('#input-fname')
      .val('')
      .removeClass('is-valid');
    $('#input-lname')
      .val('')
      .removeClass('is-valid');
    $('#input-email')
      .val('')
      .removeClass('is-valid');
    $('#input-pass')
      .val('')
      .removeClass('is-valid');
  }

  function cleanLoginForm() {
    $('#input-login-email').val('');
    $('#input-login-pass').val('');
  }

  function addNewUserHandler() {
    const newUser = {
      name: $('#input-fname').val(),
      fname: $('#input-lname').val(),
      mail: $('#input-email').val(),
      pass: $('#input-pass').val(),
      role: 'user',
      deleteRequest: false,
    };
    $('#log-or-reg-modal').modal('hide');
    dataUser.addUser(newUser);
    cleanRegisterForm();
  }

  $(document).ready(() => {
    $('#add-new-user').validate({
      messages: {
        'input-fname': 'This field is required',
        'input-lname': 'This field is required',
        'input-email': {
          required: 'This field is required',
          email: 'You should enter email',
        },
        'input-pass': {
          required: 'This field is required',
          minlength: 'Password should consist of a minimum of 5 symbols',
        },
      },
      highlight(element) {
        $(element)
          .addClass('is-invalid')
          .removeClass('is-valid');
      },
      unhighlight(element) {
        $(element)
          .addClass('is-valid')
          .removeClass('is-invalid');
      },
      submitHandler: addNewUserHandler,
    });
  });

  $('#login-user').submit((event) => {
    event.preventDefault();
    const loginUser = {
      mail: $('#input-login-email').val(),
      pass: $('#input-login-pass').val(),
    };
    const foundUser = dataUser.getUserByEmail(loginUser.mail);
    if (foundUser) {
      if (foundUser.pass === loginUser.pass) {
        dataUser.setActiveUser(foundUser);
        cleanLoginForm();
        $('#log-or-reg-modal').modal('hide');
        checkForRedirect();
      } else {
        alert('You enter a wrong password!');
      }
    } else {
      alert('You enter a wrong e-mail!');
    }
  });

  function checkForRedirect() {
    dataGood.addDefaultGoods();
    dataUser.addDefaultUsers();
    const activeUser = dataUser.getActiveUser();
    if (!activeUser) {
      return;
    }
    if (activeUser.role === 'user') {
      document.location.href = '/pages/User_goods.html';
    } else if (activeUser.role === 'admin') {
      document.location.href = '/pages/Admin_goods.html';
    }
  }

  checkForRedirect();
  renderGoodsData();
}());
