const API_KEY = '48551671-8e0bd0e05b8a9090cbea8e4d9';

export function searchImages(searchrequest) {
  const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
    searchrequest
  )}&image_type=photo&orientation=horizontal&safesearch=true`;

  return fetch(URL)
    .then(response => response.json())
    .then(data => data.hits)
    .catch(error => {
      console.error('REQUEST ERROR', error);
      iziToast.error({
        title: 'Error',
        message: 'Failed to fetch images. Please try again!',
        position: 'topRight',
      });
    });
}
