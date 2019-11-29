"use strict";

let startGoodsData = (function() {
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
      card.append(cardBody);

      const cardColumns = document.querySelector(".card-columns");
      cardColumns.prepend(card);
    });
  }

  function cleanRegisterForm() {
    $("#input-fname").val("");
    $("#input-lname").val("");
    $("#input-email").val("");
    $("#input-pass").val("");
  }

  function cleanLoginForm() {
    $("#input-login-email").val("");
    $("#input-login-pass").val("");
  }

  $("#add-new-user").submit(function(event) {
    event.preventDefault();
    let newUser = {
      name: $("#input-fname").val(),
      fname: $("#input-lname").val(),
      mail: $("#input-email").val(),
      pass: $("#input-pass").val(),
      role: "user",
      deleteRequest: false
    };
    $("#log-or-reg-modal").modal("hide");
    dataUser.addUser(newUser);
    cleanRegisterForm();
  });

  $("#login-user").submit(function(event) {
    event.preventDefault();
    let loginUser = {
      mail: $("#input-login-email").val(),
      pass: $("#input-login-pass").val()
    };
    let foundUser = dataUser.getUserByEmail(loginUser.mail);
    if (foundUser) {
      if (foundUser.pass === loginUser.pass) {
        dataUser.setActiveUser(foundUser);
        cleanLoginForm();
        $("#log-or-reg-modal").modal("hide");
        checkForRedirect();
      } else {
        alert("You enter a wrong password!");
      }
    } else {
      alert("You enter a wrong e-mail!");
    }
  });

  function checkForRedirect() {
    dataGood.addDefaultGoods();
    dataUser.addDefaultUsers();
    let activeUser = dataUser.getActiveUser();
    if (!activeUser) {
      return;
    }
    if (activeUser.role === "user") {
      document.location.href = "/pages/User_goods.html";
    } else if (activeUser.role === "admin") {
      document.location.href = "/pages/Admin_goods.html";
    }
  }

  checkForRedirect();
  renderGoodsData();
})();
