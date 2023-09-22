const hamburguer = document.getElementById("hamburguer");
const navMenu = document.querySelector(".nav__menu");
const galeria = document.querySelector(".galeria");

hamburguer.addEventListener("click", () => {
  hamburguer.classList.toggle("active");
  navMenu.classList.toggle("active");
  galeria.classList.toggle("active");
});
