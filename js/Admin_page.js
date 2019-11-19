"use strict"

let adminPageData = (function() {  
    const tableOfUsers = [
                            {
                                name: "Aller",
                                fname: "Forst",
                                mail: "goAller@gmail.com",
                                role: "admin",
                                deleteRequest: false
                            },
                            {
                                name: "Anastasia",
                                fname: "Novikova",
                                mail: "Nov@mail.ru",
                                role: "user",
                                deleteRequest: false
                            },
                            {
                                name: "Valeryia",
                                fname: "Nemankova",
                                mail: "Neman@gmail.com",
                                role: "user",
                                deleteRequest: false
                            },
                            {
                                name: "Igor",
                                fname: "Leonov",
                                mail: "Xan@yandex.com",
                                role: "user",
                                deleteRequest: false
                            },
                            {
                                name: "Pavel",
                                fname: "Zinkevich",
                                mail: "Pavel@gmail.com",
                                role: "user",
                                deleteRequest: true
                            }
                        ];

    tableOfUsers.forEach(function(user, index) {
        
        const tableRow = document.createElement("tr");
        const tableHeader = document.createElement("th");
        tableHeader.textContent = index + 1;
        tableRow.append(tableHeader);
        
        for (let key in user) {
            const tableData = document.createElement("td");
            tableData.textContent = user[key];
            tableRow.append(tableData);
        }
           
        const removeButton = document.createElement("button");
        removeButton.setAttribute("id", "delete");
        removeButton.classList.add("btn", "btn-color");
        removeButton.setAttribute("type", "button");
        removeButton.textContent = "Remove";
        const lastTableRow = document.createElement("td");
        lastTableRow.append(removeButton);
        tableRow.append(lastTableRow);
        const tbody = document.querySelector("#table-of-users > tbody");
        
        tbody.append(tableRow);
    });
})();