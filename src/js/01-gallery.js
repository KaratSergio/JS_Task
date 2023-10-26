// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"; 
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryContainer = document.querySelector(".gallery");

galleryItems.forEach((item) => {
    const galleryItem = document.createElement("li");
    galleryItem.classList.add("gallery__item");

    const link = document.createElement("a");
    link.classList.add("gallery__link");
    link.href = item.original;

    const image = document.createElement("img");
    image.classList.add("gallery__image");
    image.src = item.preview;
    image.alt = item.description;

    link.appendChild(image);
    galleryItem.appendChild(link);
    galleryContainer.appendChild(galleryItem);
});

const lightbox = new SimpleLightbox(".gallery__link", {
    captions: true,
    captionsData: "alt",
    captionsDelay: 250
});

console.log(galleryItems);
