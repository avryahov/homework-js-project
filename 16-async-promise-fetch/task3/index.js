const loader = document.getElementById("loader");
const dataContainer = document.getElementById("data-container");


const LINK_USERS = "https://jsonplaceholder.typicode.com/users";

const createUserElement = (text) => {
    const userElement = document.createElement("li");
    const userAnchorElement = document.createElement("a");
    userAnchorElement.href = "#";
    userAnchorElement.textContent = text;
    userElement.append(userAnchorElement);
    return userElement;
};

const getUsersByIds = (userIds) => {
    loader.hidden = false;

    const requests = userIds.map(id => {
        const input = `${LINK_USERS}/${id}`;
        return fetch(input)
    });

    Promise.all(requests)
        .then(responses => {
            return Promise.all(
                responses
                    .filter((response) => response.ok)
                    .map((response) => response.json())
            );
        })
        .then(users => {
            dataContainer.innerHTML = "";

            users.forEach(user => {
                const userElement = createUserElement(user.name);
                dataContainer.append(userElement);
            });
        })
        .catch(error => {
            console.error("Ошибка при получении пользователей:", error);
        })
        .finally(loader.hidden = true)
};

getUsersByIds([5, 6, 2, 1]);