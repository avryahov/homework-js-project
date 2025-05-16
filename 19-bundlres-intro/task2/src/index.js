import "../index.css";
import jsLogo from "../assets/js-logo.png";

const app = document.getElementById("app");
const title = document.createElement("h1");
const image = document.createElement("img");

title.textContent = "I love JavaScript";
image.src = jsLogo;

app.appendChild(title);
app.appendChild(image);
