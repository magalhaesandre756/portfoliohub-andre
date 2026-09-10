// Atualiza o ano do rodapé automaticamente
document.getElementById("year").textContent = new Date().getFullYear();

// Abre/fecha o menu no celular
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Fecha o menu ao clicar em um link (celular)
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});
