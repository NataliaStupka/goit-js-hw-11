
















// ко









// ======================================1й вариант ВОЗМОЖНО удалить
// const BASE_URL = "https://pixabay.com/api";
// const key = "24451783-36fc53d78d658727e466a2b4b";

// let page = 1;
// const totalImages = 500;
// const pageSize = 40;
// const totalPages = totalImages / pageSize;

// export function fetchPhoto(name) {
//     const url = `${BASE_URL}/?key=${key}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${pageSize}`;
//     return fetch(url).then(response => {
//             if (response.ok) {
//                 return response.json();
//             }
//             throw Error('This is Error');
//     }).then(images => {
//         page += 1;
//         return {
//             images,
//             hasNextPage: page <= totalPages,
//         };
//         })
// }