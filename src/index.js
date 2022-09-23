import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { FetchImages } from './fetchImages';
import { refs } from './refs';

const fetchImages = new FetchImages();

removeButtonLoadMore();

let gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

refs.form.addEventListener('submit', onFormSubmit);
refs.loadMoreBtn.addEventListener('click', onButtonLoadMore);

function onFormSubmit(evt) {
  evt.preventDefault();

  clearPhotosContainer();

  fetchImages.resetPage();

  fetchImages
    .getPhotos()
    .then(data => {
      infoMessage(data);
      renderingCards(data);
    })
    .catch(e => {
      removeButtonLoadMore();
      onSearchError();
    });
  addButtonLoadMore();
  evt.target.reset();
}
