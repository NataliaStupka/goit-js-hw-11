
import './sass/main.scss';
import axios from "axios";

// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// ??? или const lightbox = new SimpleLightbox('.gallery a', { /* options */ });
// import SimpleLightbox from "simplelightbox";

// разметка для SimpleLightbox, и обернуть каждую карточку изображения в ссылку, как указано в документации



const refs = {
    searchForm: document.querySelector('.search-form'),
    gallery: document.querySelector('.gallery'),
    buttonLoadMore: document.querySelector('.load-more'),
}

refs.searchForm.addEventListener('submit', onSerch);
refs.buttonLoadMore.addEventListener('click', onLoadMore);

// refs.buttonLoadMore.classList.add('is-hidden');


    const BASE_URL = "https://pixabay.com/api";
    const key = "24451783-36fc53d78d658727e466a2b4b";
    const pageSize = 40;
    const totalImages = 500;
     let page = 1;



function onSerch(event) {
        event.preventDefault();

        const inputText = event.currentTarget.elements.searchQuery.value;
        const url = `${BASE_URL}/?key=${key}&q=${inputText}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${pageSize}`
    
        return fetch(url).then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw Error('This is Error');
        }).then(renderPhoto)
        .catch(error => console.log('Это ошибочка; ', error));

        // alert
}


function fetchImages() {
    // перенести сюда кет
}




// кнопка загрузить еще
function onLoadMore() {
    page += 1;
    console.log('клик на дозагрузку')
}


// разметка
function renderPhoto(images) {
    const imagesArray = images.hits;
    console.log('ЭТО долбыный массив', imagesArray)
    const markup = imagesArray.map(({ largeImageURL, webformatURL, tags, likes, views, comments, downloads }) => `
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
     </a>`
    )
        .join('');

   return refs.gallery.insertAdjacentHTML('beforeend', markup);
};




























// =============== 1й вариант Вщзможно удалить или коректировать
// import { fetchPhoto } from "./api"
// import { LoadMoreBtn } from "./load-more-btn"


// let searchQueryInput = '';



 

// const loadMoreBtn = new LoadMoreBtn({
//     selector: '.load-more',
//     className: 'is-hidden',
//     isHidden: true,
//     onClick() {
//         loadPhoto();
//     }
// });

// loadMoreBtn.hide();


// loadPhoto().then(() => {
                        // refs.buttonLoadMore.show();
//     refs.buttonLoadMore.classList.remove('is-hidden')

// });


// function loadPhoto() {
//     return fetchPhoto().then(data => {
//         renderPhoto(data.images);
//         // скрываем кнопку когда дошли до конца
//         if (!data.hasNextPage) {
//             // refs.buttonLoadMore.hide();
//         }
//     })
// }

// refs.gallery.insertAdjacentHTML = "";
// function renderPhoto(images) {
     
//     const imagesArray = images.hits;
//     console.log('ЭТО долбыный массив', imagesArray)
//     const markup = imagesArray.map(({ largeImageURL, webformatURL, tags, likes, views, comments, downloads }) => `
//         <a class="" href="${largeImageURL}">
//                  <div class="photo-card">
//                  <img src="${webformatURL}" alt="${tags}" loading="lazy" />
//                  <div class="info">
//                      <p class="info-item">
//                      <b>Likes:${likes}</b>
//                      </p>
//                      <p class="info-item">
//                      <b>Views:${views}</b>
//                      </p>
//                      <p class="info-item">
//                      <b>Comments:${comments}</b>
//                      </p>
//                      <p class="info-item">
//                      <b>Downloads:${downloads}</b>
//                      </p>
//                  </div>
//                  </div>
//             </a>`
//     )
//         .join('');

//     refs.gallery.insertAdjacentHTML('beforeend', markup);
// };
