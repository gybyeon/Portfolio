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
const menuItems = document.querySelectorAll(".navbar_menu_item");
menu.addEventListener("click", (e) => {
  const LINK = e.target.dataset.link; // data-set안에 정의한 변수들이 할당
  if (LINK === null) return;
  menu.classList.remove("open");
  SCROLL_INTO_VIEW(LINK);
});

// Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector(".navbar_toggle_btn");
navbarToggleBtn.addEventListener("click", () => {
  menu.classList.toggle("open");
});

// Handle click on "contact me" button on home
const homeContactBtn = document.querySelector(".home_contact");
homeContactBtn.addEventListener("click", () => {
  SCROLL_INTO_VIEW("#contact");
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
  SCROLL_INTO_VIEW("#home");
});

// Projects
const workBtnList = document.querySelector(".work_categories");
const projectContainer = document.querySelector(".work_projects");
const projects = document.querySelectorAll(".project");
workBtnList.addEventListener("click", (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter === null) {
    return;
  }
  projectContainer.classList.add("animation_out");
  setTimeout(() => {
    projectContainer.classList.remove("animation_out");
    projects.forEach((project) => {
      filter === "*" || filter === project.dataset.type
        ? project.classList.remove("invisible")
        : project.classList.add("invisible");
    });
  }, 400);

  // Remove selection from the previous item and select the new one
  const workBtns = document.querySelectorAll(".category_btn");
  workBtns.forEach((btn) => {
    btn !== e.target
      ? btn.classList.remove("selected")
      : e.target.classList.add("selected");
  });
});

function SCROLL_INTO_VIEW(selector) {
  const scrollto = document.querySelector(selector);
  scrollto.scrollIntoView({ behavior: "smooth" });
}
