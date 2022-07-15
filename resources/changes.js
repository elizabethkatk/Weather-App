// Change Background?? //

let backgroundImage = document.querySelector("#background-image");
if (
  response.data.weather[0].icon === "01n" ||
  "02n" ||
  "03n" ||
  "04n" ||
  "05n" ||
  "06n" ||
  "07n" ||
  "08n" ||
  "09n" ||
  "10n" ||
  "11n" ||
  "12n" ||
  "13n" ||
  "50n"
) {
  backgroundImage.classList.remove(".card-body-day");
} else {
  backgroundImage.classList.remove(".card-body-night");
}
