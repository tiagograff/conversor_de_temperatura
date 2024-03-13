"use strict";

//trocando o tema da página
//botões
var buttonDarkTheme = document.getElementById("darkButton");
var buttonLightTheme = document.getElementById("lightButton"); //variáveis

var body = document.getElementById("bodyID");
var root = document.querySelector(":root");
var dark = document.getElementById("darkButton");
var light = document.getElementById("lightButton");
var button = document.getElementById("transform");
var temperatureList = document.getElementById("selectTemperatureList");
var temperatureInput = document.getElementById("temperature");
var toConvertList = document.getElementById("selectToList");
var display = document.getElementById("displayID");
var result = 0;
var currentExpression = ""; //transformando light para dark

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
}); //quando botão submit é clicado

button.addEventListener("click", function (event) {
  event.preventDefault(); //limpando ao fazer uma nova operação

  display.value = "";

  if (body.dataset.theme === "dark") {
    display.style.backgroundColor = "#122f51";
  } else if (body.dataset.theme === "light") {
    display.style.backgroundColor = "#17a7a8";
  } //pegando valores dos inputs


  var degree = temperatureList.value;
  var number = parseFloat(temperatureInput.value).toFixed(2);
  var toConvertTemperature = toConvertList.value; //caso for celsius

  if (degree === "C") {
    if (toConvertTemperature === "toFahrenheit") {
      display.value = "".concat(number * 1.8 + 32, "\xB0F");
    } else if (toConvertTemperature === "toKelvin") {
      display.value = "".concat(parseFloat(number) + 273.15, "K");
    } else {
      display.style.backgroundColor = "#e84624";
      display.value = "erro: Escala não encontrada";
    }
  } //caso for fahrenheit
  else if (degree === "F") {
      if (toConvertTemperature === "toCelsius") {
        display.value = "".concat((parseFloat(number) - 32) * 5 / 9, "\xB0C");
      } else if (toConvertTemperature === "toKelvin") {
        display.value = "".concat((parseFloat(number) - 32) * 5 / 9 + 273.15, "K");
      } else {
        display.style.backgroundColor = "#e84624";
        display.value = "erro: Escala não encontrada";
      }
    } //caso for kelvin
    else if (degree === "K") {
        if (toConvertTemperature === "toFahrenheit") {
          display.value = "".concat((parseFloat(number) - 273.15) * 9 / 5 + 32, "\xB0F");
        } else if (toConvertTemperature === "toCelsius") {
          display.value = "".concat(parseFloat(number) - 273.15, "\xB0C");
        } else {
          display.style.backgroundColor = "#e84624";
          display.value = "erro: Escala não encontrada";
        }
      }
});