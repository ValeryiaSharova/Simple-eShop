const adminGoodsData = (function () {
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

      const cardButton = $('<div/>').addClass('text-center');

      const buyButton = $('<a/>', {
        class: 'btn btn-color btn-rounded my-1 mx-1',
        href: '#',
        text: `Buy for ${good.price}$`,
      });

      $('<i/>', {
        class: 'fas fa-angle-right rounded-circle ml-1 style-circle',
      }).appendTo(buyButton);

      buyButton.appendTo(cardButton);

      const deleteButton = $('<button/>', {
        class: 'btn btn-color btn-rounded my-1 mx-1',
        href: '#',
        text: 'Delete',
        click: goodRemoveButtonHandler,
      });

      $('<i/>', {
        class: 'fas fa-times rounded-circle ml-1 style-circle',
      }).appendTo(deleteButton);

      deleteButton.appendTo(cardButton);
      cardButton.appendTo(cardBody);
      cardBody.appendTo(card);

      $('.card-columns').prepend(card);
    });
  }

  function cleanGoodsData() {
    $('#add-good')
      .prevUntil()
      .remove();
  }

  function cleanForm() {
    $('#title')
      .val('')
      .removeClass('is-valid');
    $('#description')
      .val('')
      .removeClass('is-valid');
    $('#price')
      .val('')
      .removeClass('is-valid');
    $('#picture')
      .val('')
      .removeClass('is-valid');
    $('#tags')
      .val('')
      .removeClass('is-valid');
  }

  function goodRemoveButtonHandler(event) {
    event.preventDefault();
    const button = $(this);
    const currentDiv = button.parents('.card-body');
    const currentGoodTitle = currentDiv.children('.card-title').text();

    dataGood.tryDeleteGoodByTitle(currentGoodTitle);
    cleanGoodsData();
    renderGoodsData();
  }

  function addGoodHandler() {
    const newGood = {
      title: $('#title').val(),
      description: $('#description').val(),
      price: +$('#price').val(),
      picture: $('#picture').val(),
      tags: $('#tags').val(),
    };
    $('#add-good-modal').modal('hide');

    dataGood.addGood(newGood);
    cleanForm();
    cleanGoodsData();
    renderGoodsData();
  }

  $(document).ready(() => {
    $('#add-good-form').validate({
      messages: {
        title: 'This field is required',
        description: 'This field is required',
        price: 'This field is required',
        picture: {
          required: 'This field is required',
          url: 'You should enter url',
        },
        tags: 'This field is required',
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
      submitHandler: addGoodHandler,
    });
  });

  function logoutHandler(event) {
    event.preventDefault();
    dataUser.deleteActiveUser();
    document.location.href = '/';
  }

  function setEventToLogoutButton() {
    $('#logout-button').on('click', logoutHandler);
  }

  dataGood.addDefaultGoods();
  setEventToLogoutButton();
  renderGoodsData();
}());
