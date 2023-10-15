import { serviceModal } from './apisearch';

const modal = document.querySelector('.modal-field');
const picture = document.querySelector('.js-modal-picture');
const modalInfo = document.querySelector('.js-modal-info');
const overlay = document.querySelector('.js-overlay-modal');
const addBtn = document.querySelector('js-modal-btn');

const closeBtn = document.querySelector('.js-modal-close');
const LS_KEY = 'book-inf';

export async function forModal(touchId) {
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  picture.innerHTML = '';
  modalInfo.innerHTML = '';
  const result = await serviceModal(touchId);
  console.log(result);

  const modalMake = makeModal(result);
  modal.classList.add('active');
  return modalMake;
}

function makeModal({
  author,
  book_image,
  book_image_width,
  book_image_height,
  description,
  title,
  amazon_product_url,
  buy_links,
}) {
  const content = `<img class="modal-picture-content" src="${book_image}" alt="${title}"  width="${book_image_width}" height="${book_image_height}" />`;
  const text = `<h2 class= "modal-title">${title}</h2>
        <h3 class="modal-author">${author}</h3>
        <p class="modal-description">${description}</p>
        <div class="modal-icons">
            <a
              href="${amazon_product_url}"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Amazon"
            >
              <img class="modal-amazon" src="./img/modal/_amazon.png" alt="Amazon" width="62" height="19" />
      
            </a>
          
            <a
              href="${buy_links[1].url}"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book"
              >
              <img class="modal-apple" src="./img/modal/_book.png" alt="Book" width="33" height="32" />

            </a>
            </div>`;

  picture.insertAdjacentHTML('beforeend', content);
  modalInfo.insertAdjacentHTML('beforeend', text);
}

closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
});
