const menu = document.querySelector("#men");
const menuBtn = document.querySelector("#bm");

const body = document.body;

if (menu && bm) {
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuBtn.classList.toggle("active");
    body.classList.toggle("lock");
  });

  menu.querySelectorAll(".container-nav__link").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      menuBtn.classList.remove("active");
      body.classList.remove("lock");
    });
  });
}

const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    event.preventDefault();
    const blockID = anchor.getAttribute("href").substring(1);
    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

// slider

/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
  showSlides((slideIndex += 1));
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
  showSlides((slideIndex -= 1));
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
  showSlides((slideIndex = n));
}

/* Основная функция слайдера */
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("item");
  var dots = document.getElementsByClassName("slider-dots_item");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// pop up log in
const loginButton = document.getElementById("login-button");
const loginFormBlock = document.getElementById("login-form");
const signInFormBlock = document.getElementById("sign-in-form");

loginButton.addEventListener("click", () => {
  const currentDisplayProperty = loginFormBlock.style.display;
  if (currentDisplayProperty === "block") {
    loginFormBlock.style.display = "none";
  } else loginFormBlock.style.display = "block";
});

const signUpOpen = document.getElementById("sign-up-open");

signUpOpen;
