// подключаем axios
import axios from "axios";


const BASE_URL = "https://pixabay.com/api";
    const key = "24451783-36fc53d78d658727e466a2b4b";
    const pageSize = 40;
    

 
// запрос
export async function fetchImages(inputText, page) {
        const url = `${BASE_URL}/?key=${key}&q=${inputText}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${pageSize}`
//  запрос через axios. не забыть о поле data (например, data.hits)
    return await axios.get(url);

}



// ----------------------------------------------------------------
// было до axios и async/await:

        // const BASE_URL = "https://pixabay.com/api";
        //     const key = "24451783-36fc53d78d658727e466a2b4b";
        //     const pageSize = 40;

        // export function fetchImages(inputText, page) {
        // const url = `${BASE_URL}/?key=${key}&q=${inputText}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${pageSize}`
        

// запрос через fetch
//      return fetch(url).then(response => {
//                 if (response.ok) {
//                     return response.json();
//                 }
//                 throw Error('This is Error');
//      })
            
            
            
            
// }





