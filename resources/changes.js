// Location Search

function searchLocale(event) {
  event.preventDefault();
  let location = document.querySelector("#location");
  let city = document.querySelector("h1");
  city.innerHTML = location.value;
}

let form = document.querySelector("#location-search");
form.addEventListener("submit", searchLocale);

// Fahrenheit to Celsius
let temperature = document.querySelector(".temp");

function changeTemp() {
  temperature.innerHTML = 30;
}

let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", changeTemp);

function changeTempBack() {
  temperature.innerHTML = 86;
}

let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", changeTempBack);
