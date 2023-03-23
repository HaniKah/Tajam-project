const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile_menu");
const headerLogo = document.querySelector(".header_logo");
const headerLogoMobile = document.querySelector(".header_logo_mobile");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
  headerLogo.classList.toggle("active");
  headerLogoMobile.classList.toggle("active");
});

document.querySelectorAll(".close").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    mobileMenu.classList.remove("active");
    headerLogo.classList.remove("active");
    headerLogoMobile.classList.remove("active");
  })
);
