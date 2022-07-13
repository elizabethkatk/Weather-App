// Date & Time
let now = new Date();

// Current Date

let date = now.getDate();

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];

let days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
let day = days[now.getDay()];

function formatDate() {
  return `${day}, ${month} ${date}`;
}

let currentDate = document.querySelector(".date");
currentDate.innerHTML = formatDate();

// Current Time

let hour = now.getHours();
let minutes = now.getMinutes();

function formatTime() {
  return `${hour}:${minutes}`;
}

function formatOtherTime() {
  return `${hour}:0${minutes}`;
}

let currentTime = document.querySelector(".time");

if (minutes < 10) {
  currentTime.innerHTML = formatOtherTime();
} else {
  currentTime.innerHTML = formatTime();
}

// Location Search

let apiKey = "e5563a39d3909663bfcb47fa3fa4fa5e";

let form = document.querySelector("#location-search");
form.addEventListener("submit", searchLocale);

function searchLocale(event) {
  event.preventDefault();
  let location = document.querySelector("#location");
  let city = `${location.value}`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp);
}

function showTemp(response) {
  let temperature = document.querySelector(".temp");
  temperature.innerHTML = Math.round(response.data.main.temp);
  let currentCity = document.querySelector("h1");
  currentCity.innerHTML = response.data.name;
  let mainIcon = document.querySelector(".main-icon");
  mainIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  let description = document.querySelector(".description");
  description.innerHTML = response.data.weather[0].main;
  let windSpeed = document.querySelector(".wind-speed");
  windSpeed.innerHTML = Math.round(response.data.wind.speed);
  let humidity = document.querySelector(".humidity");
  humidity.innerHTML = response.data.main.humidity;
  let highTemp = document.querySelector(".max-temp");
  highTemp.innerHTML = Math.round(response.data.main.temp_max);
  let lowTemp = document.querySelector(".min-temp");
  lowTemp.innerHTML = Math.round(response.data.main.temp_min);
  console.log(response);
}

// Current Location

let currentLocation = document.querySelector("button");
currentLocation.addEventListener("click", findPosition);

function findPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(myPosition);
}

function myPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp);
}
