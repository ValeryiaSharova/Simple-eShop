"use strict"

let userGoodsData = (function() {
    const goodsData = [["https://s3-goods.ozstatic.by/2000/505/603/10/10603505_0.jpg", "Classic Citadels", "In the Citadels, players compete for the right to be called the chief builder of the kingdom. To do this, you need to impress the monarch with outstanding skills and enlist the support of the nobles and the rich. Each round, you secretly choose a character who will help you. Today it is a bishop collecting church tithes, and tomorrow an assassin who will eliminate other people's minions.", "#Middle Ages #Construction", "11"],
                       ["https://s2-goods.ozstatic.by/2000/693/378/10/10378693_0.jpg", "Machi Koro", "In the game \"Machi Koro\" you have to build a city of dreams, investing in it all your talent and inspiration. Acquire various enterprises: each of them will supplement your city in its own way, as well as replenish the treasury. Most importantly, do not forget to build attractions, because they will attract tourists to the city and lead to victory.", "#Construction", "15"],
                       ["https://s2-goods.ozstatic.by/2000/123/668/10/10668123_0.jpg", "Sickle", "Players will have to take control of one of the factions in the alternative history of Europe in the 20s of the last century and bring it to wealth and prosperity to the envy of its neighbors! A unique hero, huge mechanisms and ... peasants with sickles will become a reliable support on the path to conquest.", "#Robots #Agriculture", "100"],
                       ["https://s3-goods.ozstatic.by/2000/535/646/10/10646535_0.jpg", "Barbaria", "In the days of ancient heroes, warriors and kings, the world was inhabited by monsters, witches and bloodthirsty tyrants. There were a lot of them, so that fearless barbarians would be easier to enter into legends. It's time for you to follow in the footsteps of the heroes!", "#Cave Age #Fairytale #Fantasy #Comedy", "13"],
                       ["https://s4-goods.ozstatic.by/2000/417/660/10/10660417_0.jpg", "Noir", "To take part in this gambling crime race, players will need deduction, logical thinking skills, excellent intuition, strong memory and the ability to read opponents as an open book.", "#Crime #Spies", "15"]];

    goodsData.forEach(function(good) {
        const card = document.createElement("div");
        card.classList.add("card", "box-shadow");
        
        const image = document.createElement("img");
        image.classList.add("card-img-top");
        image.setAttribute("src", good[0]);
        image.setAttribute("alt", good[1]);
        card.append(image);

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title", "text-center");
        cardTitle.textContent = good[1];
        cardBody.append(cardTitle);

        const cardText = document.createElement("p");
        cardText.classList.add("card-text", "text-justify");
        cardText.textContent = good[2];
        cardBody.append(cardText);

        const cardTag = document.createElement("p");
        cardTag.classList.add("card-text");
        const small = document.createElement("small");
        small.classList.add("text-muted");
        small.textContent = good[3];
        cardTag.append(small);
        cardBody.append(cardTag);

        const cardButton = document.createElement("div");
        cardButton.classList.add("text-center");
        const buyButton = document.createElement("a");
        buyButton.classList.add("btn", "btn-color", "btn-rounded", "my-1", "mx-1");
        buyButton.setAttribute("href", "#");
        buyButton.textContent = `Buy for ${good[4]}$`;
        const buttonImg = document.createElement("i");
        buttonImg.classList.add("fas", "fa-angle-right", "rounded-circle", "ml-1", "style-circle");
        buyButton.append(buttonImg);
        cardButton.append(buyButton);
        cardBody.append(cardButton);
        card.append(cardBody);

        const cardColumns = document.querySelector(".card-columns");
        cardColumns.prepend(card);
    })
})();