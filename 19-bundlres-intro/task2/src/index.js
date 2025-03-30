import './index.css';
import jsImage from '../assets/NulpBMmMmNQ.jpg';

// Создаем элементы
const title = document.createElement('h1');
title.textContent = 'I love JavaScript';
document.body.appendChild(title);

const img = document.createElement('img');
img.src = jsImage;
img.alt = 'JavaScript';
document.body.appendChild(img);