(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();(()=>{const o={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),closeMenuLink:document.querySelectorAll(".header-mob-link")};o.openMenuBtn.addEventListener("click",n),o.closeMenuBtn.addEventListener("click",n),o.closeMenuLink.forEach(r=>r.addEventListener("click",n));function n(){o.menu.classList.toggle("is-open"),document.body.classList.toggle("no-scroll")}})();const i=document.getElementById("slider");i.addEventListener("change",function(){this.checked?document.body.classList.add("theme-dark"):document.body.classList.remove("theme-dark")});
