import { getRandomColor } from "./utils";

function initApp() {
    const button = document.createElement("button");
    button.className = "button";
    button.textContent = "Изменить цвет страницы";

    document.body.appendChild(button);
    button.addEventListener("click", () => {
        const randomColor = getRandomColor();
        document.body.style.backgroundColor = randomColor;
        console.log(`Новый цвет страницы: ${randomColor}`);
    });
}

export default initApp;