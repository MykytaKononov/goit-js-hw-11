import iziToast from 'izitoast';

export function displayImages(images) {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '';

  if (images.length === 0) {
    iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
    });
    return;
  }

  images.forEach(image => {
    const imagecard = document.createElement('div');
    imagecard.classList.add('image-card');

    const a = document.createElement('a');
    a.href = image.largeImageURL;
    a.classList.add('image-link');

    const img = document.createElement('img');
    img.src = image.webformatURL;
    img.alt = image.tags;
    img.classList.add('image');

    const info = document.createElement('div');
    info.classList.add('image-info');
    info.innerHTML = `
        <p class="image-likes text">Likes</p>
        <p class="image-views text">Views</p>
        <p class="image-downloads text">Downloads</p>
        <p class="image-comments text">Comments</p>
        <p class="number">${image.likes}</p>
        <p class="number">${image.views}</p>
        <p class="number">${image.downloads}</p>
        <p class="number">${image.comments}</p>
        `;

    a.appendChild(img);
    imagecard.appendChild(a);
    imagecard.appendChild(info);
    gallery.appendChild(imagecard);
  });
}
