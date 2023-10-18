import"./support-13a0f787.js";const s=document.querySelector(".js-shoping-list-book"),l=document.querySelector(".listOfBookFromCategory");let o=JSON.parse(localStorage.getItem("books"));e();s.addEventListener("click",p);function e(){if(!o||o.length===0){const i=a();l.innerHTML=i,s.style.display="none";return}s.style.display="flex",s.innerHTML=r(o)}function p(i){if(i.target.tagName!="BUTTON")return;const t=o.findIndex(n=>n._id===i.target.dataset.id);o.splice(t,1),localStorage.setItem("books",JSON.stringify(o)),e()}function a(){return` <div class="shoping-empty">
      <p class="shop-list-empty-text">
        This page is empty, add some books and proceed to order.
      </p>
      <div class="shopping-list-empty-img"></div></div>`}function r(i){return i.map(t=>`
               <li class ="shoping-books-item">
                 <img src="${t.book_image}" alt="${t.title}" class="shopping-img-card">
                 <div>
                  <svg class="shopping-card-button" data-id="${t._id}" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                   <ellipse cx="14" cy="14" rx="14" ry="14" fill="#4F2EE8"/>
                 </svg>
                 <h2 class = "shopping-card-title">${t.title}</h2>
                
                 <h3 class="shopping-card-list-name">${t.list_name}</h3>
                 <p class="shopping-card-description">${t.description}</p>
                 
                 <p class="shopping-card-autor">${t.author}</p></div></li>`).join("")}
