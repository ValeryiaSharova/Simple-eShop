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

    function renderTableOfUsers() {
            tableOfUsers.forEach(function(user, index) {
            
            const tableRow = document.createElement("tr");
            const tableHeader = document.createElement("th");
            tableHeader.textContent = index + 1;
            tableRow.append(tableHeader);
            
            for (let key in user) {
                const tableData = document.createElement("td");
                if (key === "mail") {
                    tableData.setAttribute("name", "user-mail");
                }
                tableData.textContent = user[key];
                tableRow.append(tableData);
            }
            
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
        let position = -1;
        for (let i = 0; i < tableOfUsers.length; i++) {
            if (currentUserMail === tableOfUsers[i].mail && tableOfUsers[i].deleteRequest) {
                position = i;
                break;
            }
        }
        if (position === -1) {
            alert("You can't delete this user");
        } else {
            tableOfUsers.splice(position, 1);
            cleanUserTable();
            renderTableOfUsers();
        }
    }

    renderTableOfUsers();

})();