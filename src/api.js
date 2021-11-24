


const BASE_URL = "https://pixabay.com/api";
    const key = "24451783-36fc53d78d658727e466a2b4b";
    const pageSize = 40;
    const totalImages = 500;

 
// перенести сюда fetch
export function fetchImages(inputText, page) {
const url = `${BASE_URL}/?key=${key}&q=${inputText}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${pageSize}`
  
     return fetch(url).then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw Error('This is Error');
        })
}













