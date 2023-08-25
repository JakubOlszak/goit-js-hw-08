

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const createGalleryItem = (hrefImg, srclImg, descr) => {
  return `<li class="gallery__item">
  <a class="gallery__link" href="${hrefImg}">
    <img
      class="gallery__image"
      src="${srclImg}"
      alt="${descr}"
    />
  </a>
</li>`;
};

 
  const images = galleryItems.map(({ original, preview, description }) =>
    createGalleryItem(original, preview, description)
  );
  gallery.insertAdjacentHTML('beforeend', images.join(''));
 

const gallerySimpleLightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});