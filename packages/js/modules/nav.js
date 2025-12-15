// nav.js: Handles mobile menu show/hide and link clicks
export function initNav() {
  const navMenu = document.getElementById("nav-menu");
  const navToggle = document.getElementById("nav-toggle");
  const navClose = document.getElementById("nav-close");
  const navLink = document.querySelectorAll(".nav__link");

  // Menu show
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.add("show-menu");
    });
  }

  // Menu hide
  if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  }

  // Remove menu on link click
  function linkAction() {
    navMenu.classList.remove("show-menu");
  }
  navLink.forEach((n) => n.addEventListener("click", linkAction));
}