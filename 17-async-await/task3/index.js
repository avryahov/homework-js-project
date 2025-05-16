const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums';
const loader = document.getElementById("loader");
const dataContainer = document.getElementById("data-container");


const renderAlbums = async () => {
    loader.style.display = 'inline';
    dataContainer.innerHTML = '';

    try {
        const response = await fetch(ALBUMS_URL);

        if (!response.ok) {
            throw new Error(`Ошибка загрузки данных: ${response.status}`);
        }

        const albums = await response.json();

        for (const album of albums) {
            const li = document.createElement('li');
            li.textContent = album.title;
            dataContainer.appendChild(li);
        }
    } catch (error) {
        dataContainer.innerHTML = '<li>Произошла ошибка в получении данных об альбомах...</li>';
        console.error('Ошибка:', error);
    } finally {
        loader.style.display = 'none';
    }
};

renderAlbums();