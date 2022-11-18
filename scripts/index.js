const sideNav = document.querySelector("aside");
const closeSideNav = document.querySelector(".close-sidenav");
const openMenuBtn = document.querySelector(".open-menu-btn");
openMenuBtn.addEventListener("click", () => {
  sideNav.classList.toggle("expand");
});
closeSideNav.addEventListener("click", () => {
  sideNav.classList.toggle("expand");
});
const closeWhenResize = () => {
  if (window.innerWidth > 1100) {
    sideNav.classList.remove("expand");
  }
};

window.addEventListener("resize", closeWhenResize);
