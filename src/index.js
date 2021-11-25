
import './sass/main.scss';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from "axios";
import { fetchImages } from './api';

import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';
// в использовании const lightbox = new SimpleLightbox('.gallery a', { /* options */ });



const refs = {
    searchForm: document.querySelector('.search-form'),
    gallery: document.querySelector('.gallery'),
    buttonLoadMore: document.querySelector('.load-more'),
}

refs.searchForm.addEventListener('submit', onSerch);
refs.buttonLoadMore.addEventListener('click', onLoadMore);

// изначально прячем кнопку дозагрузки
refs.buttonLoadMore.classList.add('is-hidden');


let page = 1;
let inputText = '';
let totalHits;





function onSerch(event) {
    
    event.preventDefault();
    inputText = event.currentTarget.elements.searchQuery.value;
    // очищаем инпут
    event.target.reset();
    
    // для обновления картинок при новом запросе
    refs.gallery.innerHTML = "";

    // если в поле ничего не ввели
    if (inputText === '') {
    return Notify.warning('Please enter your search data')
    }
    // рисуем картинки
    fetchImages(inputText, page).then(checkrenderPhoto)
        .catch(error => console.log('Это ошибочка; ', error));
  let lightbox = new SimpleLightbox('.gallery a');
}


//два варианта: если пришел пустой массив; пришли изображения
function checkrenderPhoto(images) {
    console.log('добраться до массива', images.hits);
    if (images.hits.length === 0) {
        refs.buttonLoadMore.classList.add('is-hidden');
        return Notify.failure("Sorry, there are no images matching your search query. Please try again.")
    }

    totalHits = images.total;
 refs.buttonLoadMore.classList.remove('is-hidden');
    Notify.success(`Hooray! We found ${totalHits} images.`);
    return renderPhoto(images);
}


// кнопка загрузить еще
function onLoadMore() {
    page += 1;
    console.log('клик на дозагрузку')

    // если все картинки уже загрузились
    isAllImages();
    return fetchImages(inputText, page).then(renderPhoto)
        .catch(error => console.log('Это ошибочка; ', error));

    
}

// разметка
function renderPhoto(images) {
    const imagesArray = images.hits;
    console.log('ЭТО долбыный массив', imagesArray)
    const markup = imagesArray.map(({ largeImageURL, webformatURL, tags, likes, views, comments, downloads }) => `
    <div class="gallery-item">
    <a class="link" href="${largeImageURL}">
            <div class="photo-card">
                 <img class="photo-img" src="${webformatURL}" alt="${tags}" loading="lazy" />
                 <div class="info">
                     <p class="info-item">
                     <b>Likes: ${likes}</b>
                     </p>
                     <p class="info-item">
                     <b>Views: ${views}</b>
                     </p>
                     <p class="info-item">
                     <b>Comments: ${comments}</b>
                     </p>
                     <p class="info-item">
                     <b>Downloads: ${downloads}</b>
                     </p>
                </div>
             </div>
     </a>
     </div>`
    )
        .join('');

    refs.gallery.insertAdjacentHTML('beforeend', markup);
    
    // подключаем библиотеку
    let gallery = new SimpleLightbox('.gallery a');
     gallery.refresh();
};

function isAllImages() {
    if (page * 40 >= totalHits) {
        refs.buttonLoadMore.classList.add('is-hidden');
        Notify.success('Это все что есть');
    }
}















