const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile_menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

document.querySelectorAll(".close").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    mobileMenu.classList.remove("active");
  })
);
