"use strict"

let adminPageData = (function() {
    const tableOfUsers = [["Anastasia", "Novikova", "Nov@mail.ru", null],
                        ["Valeryia", "Nemankova", "Neman@gmail.com", null],
                        ["Igor", "Leonov", "Xan@yandex.com", null],
                        ["Pavel", "Zinkevich", "Pavel@gmail.com", "Remove"]];

    tableOfUsers.forEach(function(user, index) {
        
        const tableRow = document.createElement("tr");
        const tableHeader = document.createElement("th");
        tableHeader.textContent = index + 1;
        tableRow.append(tableHeader);
        
        user.forEach(function(userData){
            const tableData = document.createElement("td");
            tableData.textContent = userData;
            tableRow.append(tableData);
        });
        
        const removeButton = document.createElement("button");
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