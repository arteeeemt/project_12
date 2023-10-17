import"./support-13a0f787.js";const e=document.querySelector(".js-shoping-list-book"),r=document.querySelector(".listOfBookFromCategory");let i=JSON.parse(localStorage.getItem("books"));s();e.addEventListener("click",a);function s(){if(!i||i.length===0){const o=l();r.innerHTML=o,e.style.display="none";return}e.style.display="flex",e.innerHTML=p(i)}function a(o){if(o.target.tagName!="BUTTON")return;const t=i.findIndex(n=>n._id===o.target.dataset.id);i.splice(t,1),localStorage.setItem("books",JSON.stringify(i)),s()}function l(){return` <div class="shoping-empty">
      <p class="shop-list-empty-text">
        This page is empty, add some books and proceed to order.
      </p>
      <div class="shopping-list-empty-img"></div></div>`}function p(o){return o.map(t=>`
               <li class ="shoping-books-item">
                 <img src="${t.book_image}" alt="${t.title}" class="shopping-img-card">
                 <div>
                 <h2 class = "shopping-card-title">${t.title}</h2>
                 <h3>${t.list_name}</h3>
                 <p>${t.description}</p>
                 <button type="button" data-id="${t._id}">remove</button>
                 <h4>${t.author}</h4></div></li>`).join("")}
