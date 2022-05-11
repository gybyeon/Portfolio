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
  const LINK = e.target.dataset.link;
  const target = document.querySelector(`${LINK}`); // data-set안에 정의한 변수들이 할당
  if (LINK === null) return;
  target.scrollIntoView({ behavior: "smooth" });
});
