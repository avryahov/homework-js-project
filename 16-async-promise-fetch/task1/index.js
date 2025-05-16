const loader = document.getElementById("loader");
const dataContainer = document.getElementById("data-container");

loader.hidden = false;

const LINK_USERS = "https://jsonplaceholder.typicode.com/users";

fetch(LINK_USERS).then((response) => response.json())
    .then(users => {
        dataContainer.innerHTML = "";
        users.forEach(user => {
            const li = document.createElement("li");
            const link = document.createElement("a");
            link.href = "#";
            link.textContent = user.name;

            li.appendChild(link);
            dataContainer.appendChild(li);
        });
    }).catch(error => {
    console.error("Не удалось загрузить данные:", error);
})
    .finally(loader.hidden = true)