"use strict";

// Make navbar transparent when it is on the top
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  this.scrollY > navbar.offsetHeight // 스크롤했을 때 y축 값과 navbar의 height 비교
    ? (navbar.style.background = "var(--color-blue)")
    : (navbar.style.background = "transparent");
});

// scroll to each secntion when the button is clicked
const menuItem = document.querySelector(".navbar_menu_item");
menuItem.addEventListener("click", (e) => {
  e.target.scrollIntoView({ behavior: "smooth" });
});
