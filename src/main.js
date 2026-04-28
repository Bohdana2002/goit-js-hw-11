import axios from 'axios';

import { getImagesByQuery } from './js/pixabay-api';
import { createGallery } from './js/render-functions';

export const refs = {
  form: document.querySelector('.form'),
  gallery: document.querySelector('.gallery'),
};
export function onFormSubmit(event) {
  event.preventDefault();
  const query = event.target.elements['search-text'].value.trim();
  if (!query) {
    return;
  }
  refs.gallery.innerHTML = '';
  getImagesByQuery(query)
    .then(data => {
      if (data.hits.length === 0) {
        return alert(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      }
      createGallery(data.hits);
    })
    .catch(err => console.log(err));
}
refs.form.addEventListener('submit', onFormSubmit);
