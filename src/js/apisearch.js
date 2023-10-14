import axios from 'axios';
import { forModal } from './modal';

const list = document.querySelector('.js-list');

axios.defaults.baseURL = 'https://books-backend.p.goit.global/books/';

async function makeList() {
  const result = axios.get('top-books');
  const resultVal = await result.then(data => data.data);
  const dta = await resultVal.map(val => val.list_name);
  const markupLi = markup(dta);
  list.insertAdjacentHTML('beforeend', markupLi);
}

function markup(val) {
  return val
    .map(element => {
      return `<li class="list-Elem"  data-target="${element}">${element}</li>`;
    })
    .join('');
}

makeList();

// ------------------------------------------------------------------ //

const listOfBookFromCategory = document.querySelector(
  '.listOfBookFromCategory'
);

list.addEventListener('click', e => {
  const nameOfCategory = e.target.textContent;

  async function makeRequest() {
    const categoryList = axios.get(`category?category=${nameOfCategory}`);
    const resReq = await categoryList.then(data => data.data);
    const markupListBook = markupBookOfcategory(resReq);
    listOfBookFromCategory.innerHTML = markupListBook;
  }

  makeRequest();
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

async function topFive() {
  const result1 = axios.get('top-books');
  const resultVal1 = await result1.then(data => data.data);
  const dta = await resultVal1.map(e => e.books);
  const booksTopFive = dta.map(e => e);
  const markupForTopFive = markupTopFive(booksTopFive);
  listOfBookFromCategory.innerHTML = await markupForTopFive;
}

function markupTopFive(val) {
  return val
    .map(element => {
      return element.map(
        e => `<ul>
               <li data-id="${e._id}"> 
                 <img src="${e.book_image}" alt="">
                 <h1>${e.title}</h1>
                 <h2>${e.author}</h2>
               </li>             
              </ul>`
      );
    })
    .join('');
}

topFive();

//---------------------------------------------------------------//

// const modal = document.querySelector('.modal');

// listOfBookFromCategory.addEventListener('click', e => {
//   const touch = e.target.closest('li');
//   const touchId = touch.dataset.id;

//   async function forModal() {
//     const result = axios.get(`${touchId}`);
//     const resultVal = await result.then(data => data.data);
//     const modalMake = makeModal(resultVal);
//     modal.innerHTML = modalMake;
//   }

//   forModal();
// });

async function serviceModal(touchId) {
  const responce = await axios.get(`${touchId}`);
  return await responce.data;
}
listOfBookFromCategory.addEventListener('click', e => {
  const touch = e.target.closest('li');
  const touchId = touch.dataset.id;
  forModal(touchId);
});

// ============================================================ //
function makeModal(val) {
  return `<h1>MODAL</h1>
  <img src=${val.book_image}>
  <h2>${val.title}</h2>
  <h3>${val.author}</h3>
  <h4>${val.contibutor}</h4>
  <button type="button" class="js-add"> add </button>
  `;
}
export {serviceModal};
