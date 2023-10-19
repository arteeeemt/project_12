import"./support-6fde6aec.js";const i=document.querySelector(".js-shoping-list-book"),n=document.querySelector(".listOfBookFromCategory");let o=JSON.parse(localStorage.getItem("books"));e();i.addEventListener("click",p);function e(){if(!o||o.length===0){const s=l();n.innerHTML=s,i.style.display="none";return}i.style.display="flex",i.innerHTML=c(o)}function p(s){if(s.target.tagName!="BUTTON")return;const t=o.findIndex(a=>a._id===s.target.dataset.id);o.splice(t,1),localStorage.setItem("books",JSON.stringify(o)),e()}function l(){return` <div class="shoping-empty">
      <p class="shop-list-empty-text">
        This page is empty, add some books and proceed to order.
      </p>
      <div class="shopping-list-empty-img"></div></div>`}function c(s){return s.map(t=>`
               <li class ="shoping-books-item">
                 <img src="${t.book_image}" alt="${t.title}" class="shopping-img-card">
                 <div>
                  <button type="button" class="shopping-card-button js-modal-remove-btn">
                  <svg class="shopping-card-icon" data-id="${t._id}">
                 <use href="../img/sprite.svg#icon-trash">
                </svg></button>
                 <h2 class = "shopping-card-title">${t.title}</h2>
                
                 <h3 class="shopping-card-list-name">${t.list_name}</h3>
                 <p class="shopping-card-description">${t.description}</p>
                 
                 <p class="shopping-card-autor">${t.author}</p></div>
                 <div class="shop-list-icons"><a class="modal-amazon"></a></a>
                <a class="modal-apple">
                </a></div>
                </li>
                 `).join("")}
