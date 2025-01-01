const burger = document.getElementById("menu-toogle-btn");
const nav = document.getElementById("nav-container");
const header = document.querySelector(".header");
const active = document.querySelector(".active");
const black = document.querySelectorAll(".black");


burger.addEventListener("click", () => {
  nav.classList.toggle("hidden");
  header.classList.toggle("hidden");

  black.forEach(item => {
    item.classList.toggle("black");
  })
  
  black[0].classList.toggle("active");
  black[1].classList.toggle("active");
});


