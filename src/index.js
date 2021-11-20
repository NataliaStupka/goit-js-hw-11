import axios from "axios";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// ??? или const lightbox = new SimpleLightbox('.gallery a', { /* options */ });
import SimpleLightbox from "simplelightbox";

// разметка для SimpleLightbox, и обернуть каждую карточку изображения в ссылку, как указано в документации
{/* <div class="gallery">
    <a href="images/image1.jpg"><img src="images/thumbs/thumb1.jpg" alt="" title=""/></a>
    <a href="images/image2.jpg"><img src="images/thumbs/thumb2.jpg" alt="" title="Beautiful Image"/></a>
</div> */}