"use strict";

let adminGoodsData = (function() {
  function renderGoodsData() {
    let goodsData = dataGood.getGoods();
    goodsData.forEach(function(good) {
      const card = document.createElement("div");
      card.classList.add("card", "box-shadow");

      const image = document.createElement("img");
      image.classList.add("card-img-top");
      image.setAttribute("src", good.picture);
      image.setAttribute("alt", good.title);
      card.append(image);

      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

      const cardTitle = document.createElement("h5");
      cardTitle.classList.add("card-title", "text-center");
      cardTitle.textContent = good.title;
      cardBody.append(cardTitle);

      const cardText = document.createElement("p");
      cardText.classList.add("card-text", "text-justify");
      cardText.textContent = good.description;
      cardBody.append(cardText);

      const cardTag = document.createElement("p");
      cardTag.classList.add("card-text");
      const small = document.createElement("small");
      small.classList.add("text-muted");
      small.textContent = good.tags;
      cardTag.append(small);
      cardBody.append(cardTag);

      const cardButton = document.createElement("div");
      cardButton.classList.add("text-center");
      const buyButton = document.createElement("a");
      buyButton.classList.add(
        "btn",
        "btn-color",
        "btn-rounded",
        "my-1",
        "mx-1"
      );
      buyButton.setAttribute("href", "#");
      buyButton.textContent = `Buy for ${good.price}$`;
      const buttonImg = document.createElement("i");
      buttonImg.classList.add(
        "fas",
        "fa-angle-right",
        "rounded-circle",
        "ml-1",
        "style-circle"
      );
      buyButton.append(buttonImg);
      cardButton.append(buyButton);
      const deleteButton = document.createElement("button");
      deleteButton.classList.add(
        "btn",
        "btn-color",
        "btn-rounded",
        "my-1",
        "mx-1"
      );
      deleteButton.setAttribute("href", "#");
      deleteButton.textContent = "Delete";
      deleteButton.onclick = goodRemoveButtonHandler;
      const deleteImg = document.createElement("i");
      deleteImg.classList.add(
        "fas",
        "fa-times",
        "rounded-circle",
        "ml-1",
        "style-circle"
      );
      deleteButton.append(deleteImg);
      cardButton.append(deleteButton);
      cardBody.append(cardButton);
      card.append(cardBody);

      const cardColumns = document.querySelector(".card-columns");
      cardColumns.prepend(card);
    });
  }

  function cleanGoodsData() {
    $("#add-good")
      .prevUntil()
      .remove();
  }

  function cleanForm() {
    $("#title").val("");
    $("#description").val("");
    $("#price").val("");
    $("#picture").val("");
    $("#tags").val("");
  }

  function goodRemoveButtonHandler(event) {
    event.preventDefault();
    const button = $(this);
    const currentDiv = button.parents(".card-body");
    const currentGoodTitle = currentDiv.children(".card-title").text();

    dataGood.tryDeleteGoodByTitle(currentGoodTitle);
    cleanGoodsData();
    renderGoodsData();
  }

  $("#add-good-form").submit(function(event) {
    event.preventDefault();
    const newGood = {
      title: $("#title").val(),
      description: $("#description").val(),
      price: +$("#price").val(),
      picture: $("#picture").val(),
      tags: $("#tags").val()
    };
    $("#add-good-modal").modal("hide");

    dataGood.addGood(newGood);
    cleanForm();
    cleanGoodsData();
    renderGoodsData();
  });

  function logoutHandler(event) {
    event.preventDefault();
    dataUser.deleteActiveUser();
    document.location.href = "/";
  }

  function setEventToLogoutButton() {
    let logoutButton = document.querySelector("#logout-button");
    logoutButton.onclick = logoutHandler;
  }

  dataGood.addDefaultGoods();
  setEventToLogoutButton();
  renderGoodsData();
})();
