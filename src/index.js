import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { FetchImages } from './fetchImages';
import { refs } from './refs';

const fetchImages = new FetchImages();

removeButtonLoadMore();
