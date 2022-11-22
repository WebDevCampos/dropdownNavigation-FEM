// const sideNav = document.querySelector("aside");
// const closeSideNav = document.querySelector(".close-sidenav");
// const openMenuBtn = document.querySelector(".open-menu-btn");
const features = document.querySelector(".feat");
const featContent = document.querySelector(".feat-content");
const arrowUp = document.querySelector(".feat__arrow--up");
const arrowDown = document.querySelector(".feat__arrow--down");
const company = document.querySelector(".company");
const companyContent = document.querySelector(".company-content");
const companyArrowUp = document.querySelector(".company__arrow--up");
const companyArrowDown = document.querySelector(".company__arrow--down");
// openMenuBtn.addEventListener("click", () => {
//   sideNav.classList.toggle("expand");
// });
// closeSideNav.addEventListener("click", () => {
//   sideNav.classList.toggle("expand");
// });
// const closeWhenResize = () => {
//   if (window.innerWidth > 1100) {
//     sideNav.classList.remove("expand");
//   }
// };

// window.addEventListener("resize", closeWhenResize);

features.addEventListener("click", (e) => {
  arrowUp.classList.toggle("hide");
  arrowDown.classList.toggle("hide");
  featContent.classList.toggle("hide");
});

company.addEventListener("click", () => {
  companyArrowUp.classList.toggle("hide");
  companyArrowDown.classList.toggle("hide");
  companyContent.classList.toggle("hide");
});
