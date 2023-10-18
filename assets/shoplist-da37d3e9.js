import"./support-c9d2ce61.js";const o=document.querySelector(".js-shoping-list-book"),p=document.querySelector(".listOfBookFromCategory");let i=JSON.parse(localStorage.getItem("books"));e();o.addEventListener("click",r);function e(){if(!i||i.length===0){const s=l();p.innerHTML=s,o.style.display="none";return}o.style.display="flex",o.innerHTML=a(i)}function r(s){if(s.target.tagName!="BUTTON")return;const t=i.findIndex(n=>n._id===s.target.dataset.id);i.splice(t,1),localStorage.setItem("books",JSON.stringify(i)),e()}function l(){return` <div class="shoping-empty">
      <p class="shop-list-empty-text">
        This page is empty, add some books and proceed to order.
      </p>
      <div class="shopping-list-empty-img"></div></div>`}function a(s){return s.map(t=>`
               <li class ="shoping-books-item">
                 <img src="${t.book_image}" alt="${t.title}" class="shopping-img-card">
                 <div>
                  <svg class="shopping-card-button" data-id="${t._id}" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                   <ellipse cx="14" cy="14" rx="14" ry="14" fill="#4F2EE8"/><use href="/img/sprite.svg#icon-trash"></use>
                 </svg>
                 <h2 class = "shopping-card-title">${t.title}</h2>
                
                 <h3 class="shopping-card-list-name">${t.list_name}</h3>
                 <p class="shopping-card-description">${t.description}</p>
                 
                 <p class="shopping-card-autor">${t.author}</p></div></li>`).join("")}
