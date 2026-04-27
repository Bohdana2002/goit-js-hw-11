import axios from 'axios';

import { getImagesByQuery } from './js/pixabay-api';
import {} from './js/render-functions';

const refs = {
  form: document.querySelector('.form'),
};
function onFormSubmit(event) {
  event.preventDefault();
  const query = event.target.elements['search-text'].value.trim();
  if (!query) {
    return;
  }
  getImagesByQuery(query)
    .then(data => {
      if (data.hits.length === 0) {
        return alert(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      }
    })
    .catch(err => console.log(err));
}
refs.form.addEventListener('submit', onFormSubmit);
