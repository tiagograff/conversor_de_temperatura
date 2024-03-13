//trocando o tema da página
//botões
const buttonDarkTheme = document.getElementById("darkButton");
const buttonLightTheme = document.getElementById("lightButton");
//variáveis
const body = document.getElementById("bodyID");
const root = document.querySelector(":root");
const dark = document.getElementById("darkButton");
const light = document.getElementById("lightButton");
const button = document.getElementById("transform");
const temperatureList = document.getElementById("selectTemperatureList");
const temperatureInput = document.getElementById("temperature");
const toConvertList = document.getElementById("selectToList");
const display = document.getElementById("displayID");
let result = 0;
let currentExpression = "";
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
//quando botão submit é clicado
button.addEventListener("click", (event) => {
  event.preventDefault();
  //limpando ao fazer uma nova operação
  display.value = "";
  if (body.dataset.theme === "dark") {
    display.style.backgroundColor = "#122f51";
  } else if (body.dataset.theme === "light") {
    display.style.backgroundColor = "#17a7a8";
  }
  //pegando valores dos inputs
  let degree = temperatureList.value;
  let number = parseFloat(temperatureInput.value).toFixed(2);
  let toConvertTemperature = toConvertList.value;

  //caso for celsius
  if (degree === "C") {
    if (toConvertTemperature === "toFahrenheit") {
      display.value = `${number * 1.8 + 32}°F`;
    } else if (toConvertTemperature === "toKelvin") {
      display.value = `${parseFloat(number) + 273.15}K`;
    } else {
      display.style.backgroundColor = "#e84624";
      display.value = "erro: escala não encontrada";
    }
  }
  //caso for fahrenheit
  else if (degree === "F") {
    if (toConvertTemperature === "toCelsius") {
      display.value = `${((parseFloat(number) - 32) * 5) / 9}°C`;
    } else if (toConvertTemperature === "toKelvin") {
      display.value = `${((parseFloat(number) - 32) * 5) / 9 + 273.15}K`;
    } else {
      display.style.backgroundColor = "#e84624";
      display.value = "erro: escala não encontrada";
    }
  }
  //caso for kelvin
  else if (degree === "K") {
    if (toConvertTemperature === "toFahrenheit") {
      display.value = `${((parseFloat(number) - 273.15) * 9) / 5 + 32}°F`;
    } else if (toConvertTemperature === "toCelsius") {
      display.value = `${parseFloat(number) - 273.15}°C`;
    } else {
      display.style.backgroundColor = "#e84624";
      display.value = "erro: escala não encontrada";
    }
  }
});
