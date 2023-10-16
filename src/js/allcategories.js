import axios from 'axios';
//Це Функція виклику модалки!!!
import { forModal } from './modal';

import { makeList, booksOfCurrentCategory, topFive } from './apisearch';
const list = document.querySelector('.js-list');

axios.defaults.baseURL = 'https://books-backend.p.goit.global/books/';

makeList().then(data => {
  const categoryNameForList = data.map(val => {
    return val.list_name;
  });
  const markupLi = markup(categoryNameForList);
  list.insertAdjacentHTML('beforeend', markupLi);
});

function markup(val) {
  return val
    .map(element => {
      return `<li class="list-elem"  data-target="${element}">${element}</li>`;
    })
    .join('');
}

makeList();

// // ------------------------------------------------------------------ //

const listOfBookFromCategory = document.querySelector(
  '.listOfBookFromCategory'
);

list.addEventListener('click', e => {
  const nameOfCategory = e.target.textContent;

  booksOfCurrentCategory(nameOfCategory).then(data => {
    const markupListBook = markupBookOfcategory(data);
    listOfBookFromCategory.innerHTML = markupListBook;
  });

  booksOfCurrentCategory();
});

function markupBookOfcategory(val) {
  return val
    .map(elem => {
      return `      <li>
    <img src="${elem.book_image}" alt="" />
    <h1>${elem.title}</h1>
  </li>`;
    })
    .join('');
}

//-----------------------------------------------------//

topFive().then(data =>
  data.map(val => markupTopFive(val.list_name, val.books))
);

function markupTopFive(category, arrBook) {
  const book = arrBook
    .map(
      elem => `<li class="js-list-card">
                <img class="js-list-img" src="${elem.book_image}" alt="${elem._id}">
                <div class="js-list-text">
                  <h4 class="js-list-title">${elem.title}</h4>
                  <p class="js-autor">${elem.author}</p>
                </div>
               </li>`
    )
    .join('');

  listOfBookFromCategory.insertAdjacentHTML(
    'beforeend',
    `<div>
       <h3 class="js-markup-category">${category}</h3>
       <ul class="js-markup-list">${book}</ul>
       <div class="js-button-more"><button class="js-see-more">See more</button></div>
     </div>`
  );
}

const listHeader = document.querySelector('.list-header');
listHeader.insertAdjacentHTML(
  'beforeend',
  `<h2 class="top-list-header">
  Best Sellers <span class="top-list-header-span">Books</span>
</h2>`
);

topFive();

//---------------------------------------------------------------//

// Це виклик модалки
listOfBookFromCategory.addEventListener('click', e => {
  const touch = e.target.closest('li');
  const touchId = touch.dataset.id;
  forModal(touchId);
});

// ==================================================

function markupAllCategories() {
  return `     <li class="list-elem" data-target="All categories">All categories</li> 
`;
}
list.insertAdjacentHTML('afterbegin', markupAllCategories());
markupAllCategories();

list.addEventListener('click', e => {
  const nameOfCategory = e.target.textContent;
  if (nameOfCategory === 'All categories') {
    console.log(nameOfCategory)
    topFive().then(data =>
      data.map(val => markupTopFive(val.list_name, val.books))
    );;
  }
});

function tabClick(evt) {
  let tabs = document.getElementsByClassName('list-elem');
  let listTabs = Array.from(tabs);

  for (let i = 0; i < listTabs.length; i++) {
    listTabs[i].classList.remove('chose');
  }
  evt.target.classList.add('chose');
  console.log(evt.target)
}

list.addEventListener('click', tabClick);
