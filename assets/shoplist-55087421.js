import"./support-6fde6aec.js";const e=document.querySelector(".js-shoping-list-book"),n=document.querySelector(".listOfBookFromCategory");let s=JSON.parse(localStorage.getItem("books"));i();e.addEventListener("click",r);function i(){if(!s||s.length===0){const t=p();n.innerHTML=t,e.style.display="none";return}e.style.display="flex",e.innerHTML=l(s)}function r(t){if(t.target.tagName!="BUTTON")return;const o=s.findIndex(a=>a._id===t.target.dataset.id);s.splice(o,1),localStorage.setItem("books",JSON.stringify(s)),i()}function p(){return` <div class="shoping-empty">
      <p class="shop-list-empty-text">
        This page is empty, add some books and proceed to order.
      </p>
      <div class="shopping-list-empty-img"></div></div>`}function l(t){return t.map(o=>`<li class="shoping-books-item">
  <img src="${o.book_image}" alt="${o.title}" class="shopping-img-card">
  <div>
    <button type="button" class="shopping-card-button js-modal-remove-btn">
      <svg class="shopping-card-icon" data-id="${o._id}">
        <use href="./img/sprite.svg#icon-trash">
      </svg></button>
    <h2 class="shopping-card-title">${o.title}</h2>

    <h3 class="shopping-card-list-name">${o.list_name}</h3>
    <p class="shopping-card-description">${o.description}</p>
    <div class="shopping-card-footer">
      <p class="shopping-card-autor">${o.author}</p>
      <div class="shop-list-icons"><a class="shopplist-amazon" href="${o.amazon_product_url}"
      target="_blank"  
      rel="noopener noreferrer"
      aria-label="Amazon"></a></a>
        <a class="shopplist-apple" href="${o.buy_links[1].url}"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Apple">
        </a>
      </div>
    </div> 
</li>`).join("")}
