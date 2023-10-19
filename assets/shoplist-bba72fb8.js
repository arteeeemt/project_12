import"./support-6fde6aec.js";const i=document.querySelector(".js-shoping-list-book"),a=document.querySelector(".listOfBookFromCategory");let o=JSON.parse(localStorage.getItem("books"));e();i.addEventListener("click",p);function e(){if(!o||o.length===0){const t=l();a.innerHTML=t,i.style.display="none";return}i.style.display="flex",i.innerHTML=c(o)}function p(t){if(t.target.tagName!="BUTTON")return;const s=o.findIndex(n=>n._id===t.target.dataset.id);o.splice(s,1),localStorage.setItem("books",JSON.stringify(o)),e()}function l(){return` <div class="shoping-empty">
      <p class="shop-list-empty-text">
        This page is empty, add some books and proceed to order.
      </p>
      <div class="shopping-list-empty-img"></div></div>`}function c(t){return t.map(s=>`<li class="shoping-books-item">
  <img src="${s.book_image}" alt="${s.title}" class="shopping-img-card">
  <div>
    <button type="button" class="shopping-card-button js-modal-remove-btn">
      <svg class="shopping-card-icon" data-id="${s._id}">
        <use href="../img/sprite.svg#icon-trash">
      </svg></button>
    <h2 class="shopping-card-title">${s.title}</h2>

    <h3 class="shopping-card-list-name">${s.list_name}</h3>
    <p class="shopping-card-description">${s.description}</p>
    <div class="shopping-card-footer">
      <p class="shopping-card-autor">${s.author}</p>
      <div class="shop-list-icons"><a class="shopplist-amazon"></a></a>
        <a class="shopplist-apple">
        </a>
      </div>
    </div> 
</li>`).join("")}
