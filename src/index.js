// import axios from "axios";
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// ??? или const lightbox = new SimpleLightbox('.gallery a', { /* options */ });
// import SimpleLightbox from "simplelightbox";

// разметка для SimpleLightbox, и обернуть каждую карточку изображения в ссылку, как указано в документации


import { fetchPhoto } from "./api"
import {LoadMoreBtn} from "./load-more-btn"

const refs = {
    input: document.querySelector('.input-form'),
    buttonSearch: document.querySelector('.button-form'),
    gallery: document.querySelector('.gallery'),
    // buttonLoadMore: document.querySelector('.load-more'),
}

const loadMoreBtn = new LoadMoreBtn({
    selector: '.load-more',
    className: 'is-hidden',
    isHidden: true,
    onClick() {
        loadPhoto();
    }
});

loadMoreBtn.hide();


loadPhoto().then(() => {
    refs.buttonLoadMore.show();
});

    
function loadPhoto() 
 { return  fetchPhoto().then(data => {
     renderPhoto(data.images);
     // скрываем кнопку когда дошли до конца
     if (!data.hasNextPage) {
          refs.buttonLoadMore.hide();
     }
 })
}


function renderPhoto(images) {
    const imagesArray = images.data.hits;
    console.log('ЭТО долбыный массив', imagesArray)
    const markup = imagesArray.map(({ largeImageURL, webformatURL, tags, likes, views, comments, downloads }) => `
        <a class="" href="${largeImageURL}">
                 <div class="photo-card">
                 <img src="${webformatURL}" alt="${tags}" loading="lazy" />
                 <div class="info">
                     <p class="info-item">
                     <b>Likes:${likes}</b>
                     </p>
                     <p class="info-item">
                     <b>Views:${views}</b>
                     </p>
                     <p class="info-item">
                     <b>Comments:${comments}</b>
                     </p>
                     <p class="info-item">
                     <b>Downloads:${downloads}</b>
                     </p>
                 </div>
                 </div>
            </a>`
    )
        .join('');
    
    refs.insertAdjacentHTML('beforeend', markup); 
}



// exemple https://pixabay.com/api/?key=24451783-36fc53d78d658727e466a2b4b&q=yellow+flowers&image_type=photo
// const URL = `https://pixabay.com/api/?key=24451783-36fc53d78d658727e466a2b4b&q=${inputText}&image_type=photo&orientation=horizontal&safesearch=true`;
// --------------------------------------DELETE----------------------


// function onButtonSearch(event) {
//     event.preventDefault();
//     const inputText = refs.input.value;

//     fetchPhoto(inputText)
//         .then(renderPhotoCard)
//         .catch(error => {
//             console.log('ошибка!!!?', error)
//         });;
//     console.log('клацнули на поиск')
// };



