const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("open");
};

const sr = ScrollReveal({
  distance: "30px",
  duration: 2600,
  reset: true,
});

sr.reveal(".home-text", { delay: 280, origin: "bottom" });

sr.reveal(".featured,.cta,.new,.brand,.contact", {
  delay: 200,
  origin: "bottom",
});

// modal jaqueta bomber
var modal = document.getElementById("modal");
var btn = document.querySelector(".new-content .box:first-child");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "flex";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// JavaScript for Image Slider
let slideIndex = 0;
showSlides(slideIndex);

function showSlides(n) {
  const slides = document.querySelectorAll('.slide');
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  slides.forEach((slide, index) => {
    slide.style.display = 'none';
    if (index === slideIndex) {
      slide.style.display = 'block';
    }
  });
}

document.querySelector('.prev').addEventListener('click', () => {
  showSlides(--slideIndex);
});

document.querySelector('.next').addEventListener('click', () => {
  showSlides(++slideIndex);
});

// modal carrinho
const cartIcon = document.querySelector('.bx-shopping-bag');
const cartModal = document.getElementById('cartModal');
const cartClose = document.querySelector('.cart-close');

cartIcon.addEventListener('click', () => {
  cartModal.style.display = 'block';
});

cartClose.addEventListener('click', () => {
  cartModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === cartModal) {
    cartModal.style.display = 'none';
  }
});
