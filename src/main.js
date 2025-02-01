import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { searchImages } from './js/pixabay-api.js';
import { displayImages } from './js/render-function.js';

document.getElementById('form').addEventListener('submit', function (event) {
  event.preventDefault();

  const searchrequest = document.getElementById('input').value.trim();

  if (!searchrequest) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter search request!',
      position: 'topRight',
    });
    return;
  }

  const loader = document.querySelector('.loader');
  loader.style.visibility = 'visible';

  searchImages(searchrequest)
    .then(function (images) {
      displayImages(images);
      new SimpleLightbox('.image-link', {
        captionsData: 'alt',
        captionDelay: 500,
      }).refresh();
    })
    .catch(error => {
      console.error('RENDER ERROR', error);
      iziToast.error({
        title: 'Error',
        message: 'Failed to load images. Please try again!',
        position: 'topRight',
      });
    })
    .finally(() => {
      loader.style.visibility = 'hidden';
    });
});
