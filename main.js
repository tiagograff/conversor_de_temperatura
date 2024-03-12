//trocando o tema da página
//botões
const buttonDarkTheme = document.getElementById("darkButton");
const buttonLightTheme = document.getElementById("lightButton");
//variáveis
const body = document.getElementById("bodyID");
const root = document.querySelector(":root");
const dark = document.getElementById("darkButton");
const light = document.getElementById("lightButton");
//transformando light para dark
darkButton.addEventListener("click", () => {
  if (body.dataset.theme === "light") {
    //background
    body.dataset.theme = "dark";
    body.style.backgroundColor = "#0d0c0c";
    body.style.color = "#f9f6ec";
    body.style.setProperty("--color-blue-standard", "#122f51");
    body.style.setProperty("--color-standard-two", "#1b1c26");
  }
});
//transformando dark para light
lightButton.addEventListener("click", () => {
  if (body.dataset.theme === "dark") {
    //background
    body.dataset.theme = "light";
    body.style.backgroundColor = "#f9f6ec";
    body.style.color = "#0d0c0c";
    body.style.setProperty("--color-blue-standard", "#17a7a8");
    body.style.setProperty("--color-standard-two", "#ebe7e0");
  }
});
