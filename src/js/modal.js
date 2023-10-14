// listOfBookFromCategory.addEventListener('click', e => {
//   const touch = e.target.closest('li');
//   const touchId = touch.dataset.id;
//   picture.innerHTML = '';
//   modalInfo.innerHTML = '';
//   async function forModal() {
//     const result = axios.get(`${touchId}`);
//     const resultVal = await result.then(data => data.data);
//     console.log(resultVal);
//     const modalMake = makeModal(resultVal);
//     modal.classList.add('active');
//     return modalMake;
//   }
//   forModal(touchId);
//   overlay.classList.add('active');
//   document.body.style.overflow = 'hidden';
// });
import { serviceModal } from "./apisearch";

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
              <img src="../img/modal/amazon.png" alt="Amazon" width="62" height="19" />
      
            </a>
          
            <a
              href="${buy_links[1].url}"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book"
              ><img
                src="../img/modal/book.png"
                alt="Book"
                width="33"
                height="32"
            /></a>
            </div>`;

  picture.insertAdjacentHTML('beforeend', content);
  modalInfo.insertAdjacentHTML('beforeend', text);
}

list.addEventListener('click', e => {
  const nameOfCategory = e.target.textContent;
  if (nameOfCategory === 'All categories') {
    topFive();
  }
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
});

list.addEventListener('click', e => {
  const nameOfCategory = e.target;
  console.log(nameOfCategory);
  nameOfCategory.classList.toggle('choosen-category');
});
