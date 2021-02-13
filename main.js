const burgerBtn = document.querySelector(".nav-icon");
let hiddenMenu = document.querySelectorAll(".nav-item .nav-link");

burgerBtn.addEventListener("click", () => {
  for (i = 0; i < hiddenMenu.length; i++) {
    hiddenMenu[i].classList.toggle("active");
  }
});
