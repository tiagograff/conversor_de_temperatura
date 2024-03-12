"use strict";

//trocando o tema da página
//botões
var buttonDarkTheme = document.getElementById("darkButton");
var buttonLightTheme = document.getElementById("lightButton"); //variáveis

var body = document.getElementById("bodyID");
var root = document.querySelector(":root");
var dark = document.getElementById("darkButton");
var light = document.getElementById("lightButton"); //transformando light para dark

darkButton.addEventListener("click", function () {
  if (body.dataset.theme === "light") {
    //background
    body.dataset.theme = "dark";
    body.style.backgroundColor = "#0d0c0c";
    body.style.color = "#f9f6ec";
    body.style.setProperty("--color-blue-standard", "#122f51");
    body.style.setProperty("--color-standard-two", "#1b1c26");
  }
}); //transformando dark para light

lightButton.addEventListener("click", function () {
  if (body.dataset.theme === "dark") {
    //background
    body.dataset.theme = "light";
    body.style.backgroundColor = "#f9f6ec";
    body.style.color = "#0d0c0c";
    body.style.setProperty("--color-blue-standard", "#17a7a8");
    body.style.setProperty("--color-standard-two", "#ebe7e0");
  }
});