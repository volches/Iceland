!function(){"use strict";(function(){const e=document.querySelector(".header__nav");window.addEventListener("scroll",(function(t){scrollY>50?e.classList.add("active"):e.classList.remove("active")}));const t=document.querySelector("#nav-icon");console.log(t);const o=document.querySelector("#nav");console.log(o);const c=document.querySelector("#header__nav-list");console.log(c),t.addEventListener("click",(function(){console.log(555),this.classList.toggle("nav-icon--active"),o.classList.toggle("nav--active"),c.classList.toggle("none")}));const n=document.querySelectorAll(".nav__a");console.log(n),n.forEach((function(e){e.addEventListener("click",(function(){o.classList.remove("nav--active"),t.classList.remove("nav-icon--active"),c.classList.remove("none")}))})),document.querySelector(".btn-up").onclick=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}})(),function(){console.clear();const e=document.querySelector("#features"),t=document.querySelectorAll(".feature");e.addEventListener("pointermove",(e=>{t.forEach((t=>{const o=t.getBoundingClientRect();t.style.setProperty("--x",e.clientX-o.left),t.style.setProperty("--y",e.clientY-o.top)}))}))}()}();