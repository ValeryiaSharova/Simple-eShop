const userGoodsData = (function () {
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
    cardButton.appendTo(cardBody);
    cardBody.appendTo(card);

    $('.card-columns').prepend(card);
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
}());
