import { refs } from '../main';
import { getImagesByQuery } from './pixabay-api';
import { onFormSubmit } from '../main';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
});
export function createGallery(images) {
  const markup = images
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => ` <li class="gallery-item">
	<a class="gallery-link" href="${largeImageURL}">
		<img 
		  class="gallery-image" 
		  src="${webformatURL}"
		  alt="${tags}"
		/>
	</a>
    <p> Likes "${likes}"</p>
    <p> Views "${views}"</p>
    <p> Comments "${comments}"</p>
    <p> Downloads "${downloads}"</p>
</li>`
    )
    .join('');
  refs.gallery.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh();
}

export function clearGallery() {}
export function showLoader() {}
export function hideLoader() {}
