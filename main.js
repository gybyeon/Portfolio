"use strict";

// Make navbar transparent when it is on the top
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  this.scrollY > navbar.offsetHeight // 스크롤했을 때 y축 값과 navbar의 height 비교를 비교
    ? (navbar.style.background = "var(--color-blue)")
    : (navbar.style.background = "transparent");
});

// Handle scrolling when tapping on the navbar menu
const menu = document.querySelector(".navbar_menu");
const menuItem = document.querySelector(".navbar_menu_item");
menu.addEventListener("click", (e) => {
  const LINK = e.target.dataset.link; // data-set안에 정의한 변수들이 할당
  if (LINK === null) return;
  SCROLLINTOVIEW(LINK);
});

// Handle click on "contact me" button on home
const homeContactBtn = document.querySelector(".home_contact");
homeContactBtn.addEventListener("click", () => {
  SCROLLINTOVIEW("#contact");
});

// Make home slowly fade to transparent when scrolling down
const home = document.querySelector(".home_container");
const HOME_HEIGHT = home.offsetHeight;
const arrowUpBtn = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / HOME_HEIGHT;

  // Show arrow-up button when scrolling down
  window.scrollY > HOME_HEIGHT
    ? arrowUpBtn.classList.add("visible")
    : arrowUpBtn.classList.remove("visible");
});

// Handle click on the arrop-up button
arrowUpBtn.addEventListener("click", () => {
  SCROLLINTOVIEW("#home");
});

function SCROLLINTOVIEW(selector) {
  const scrollto = document.querySelector(selector);
  scrollto.scrollIntoView({ behavior: "smooth" });
}
