import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryBox = document.querySelector('.gallery');

const createGalleryTable = () => {
  const galleryTable = galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src='${preview}' data-source='${original}' alt='${description}'></a></li>`
    )
    .join('');

  return galleryTable;
};

galleryBox.insertAdjacentHTML('beforeend', createGalleryTable());

let lightbox = new SimpleLightbox('.gallery a', { 
  scrollZoom: false,
  captionsData: 'alt',
  captionDelay: 250,
});
