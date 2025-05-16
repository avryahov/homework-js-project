import "./index.css";
import MY_IMAGE from './assets/NulpBMmMmNQ.jpg';

function hello() {
    console.log("Hello world!");
}

hello();

[1, 2, 3].map(n => n + 1);

const img = document.createElement("img");
img.src = MY_IMAGE;
document.body.append(img);