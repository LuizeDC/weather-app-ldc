let now = new Date();

let changeWeekDay = document.querySelector("#weekDay");
let date = now.getDate();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hour = now.getHours();
let minutes = now.getMinutes();
changeWeekDay.innerHTML = `${day}, ${hour}:${minutes}`;

function showCity(event) {
  event.preventDefault();

  let city = document.querySelector("#search-text-input");
  let cityNameChange = document.querySelector(".primaryCity");
  if (city.value) {
    cityNameChange.innerHTML = city.value;
  }
}

let searchButton = document.querySelector("#search-button");
searchButton.addEventListener("click", showCity);

function convertToF(event) {
  event.preventDefault();
  let fahrenheit = document.querySelector("#currentTemperature");
  fahrenheit.innerHTML = (15 * 9) / 5 + 32;
}
let convertF = document.querySelector(".farenheit");
convertF.addEventListener("click", convertToF);

function convertToC(event) {
  event.preventDefault();
  let celisius = document.querySelector("#currentTemperature");
  celisius.innerHTML = 15;
}
let convertC = document.querySelector(".celsius");
convertC.addEventListener("click", convertToC);
