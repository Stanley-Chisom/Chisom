let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  navbar.classList.toggle("open-menu");
  menu.classList.toggle("move");
};

window.onscroll = () => {
  navbar.classList.remove("open-menu");
  menu.classList.remove("move");
};

var swiper = new Swiper(".reviews-content", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

validate = () => {
  let name = document.querySelector(".name");
  let email = document.querySelector(".email");
  let message = document.querySelector(".message");
  let sendBtn = document.querySelector(".send-btn");

  sendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (name.value == "" || email.value == "" || message.value == "") {
      emptyerror();
    } else {
      success();
    }
  });
};
validate();

emptyerror = () => {
  swal({
    title: "Sorry...!",
    text: "Fields cannot be empty 😥",
    icon: "error",
  });
};

success = () => {
  swal({
    title: "Email sent successfully ",
    text: "Thanks for reaching out",
    icon: "success",
  });
};

let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("header-active", window.scrollY > 0);
});

let scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
  scrollTop.classList.toggle("scroll-active", window.scrollY >= 400);
});
