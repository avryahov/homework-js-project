const loader = document.getElementById("loader");
const dataContainer = document.getElementById("data-container");

const PHOTO_API_URL = "https://api.slingacademy.com/v1/sample-data/photos/";

const createPhotoElement = (photo) => {
    const photoItem = document.createElement("li");
    photoItem.className = "photo-item";

    const img = document.createElement("img");
    img.className = "photo-item__image";
    img.src = photo.url;

    const title = document.createElement("h3");
    title.className = "photo-item__title";
    title.textContent = photo.title;

    photoItem.append(img, title);
    return photoItem;
};

const toggleLoader = (show) => {
    loader.hidden = !show;
};

const getFastestLoadedPhoto = (ids) => {
    toggleLoader(true);

    const requests = ids.map(id => fetch(`${PHOTO_API_URL}${id}`));

    Promise.race(requests)
        .then(response => response.json())
        .then(data => data.photo)
        .then(photo => {
            dataContainer.innerHTML = "";
            const photoElement = createPhotoElement(photo);
            dataContainer.appendChild(photoElement);
        })
        .catch(error => {
            console.error("Не удалось загрузить фото:", error);
        })
        .finally(() => {
            toggleLoader(false);
        });
};

getFastestLoadedPhoto([60, 12, 55]);