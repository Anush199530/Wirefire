function convertTofahrenheid(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  let temperature = temperatureElement.innerHTML;
  temperature = Number(temperature);
  temperatureElement.innerHTML = Math.round((temperature * 9) / 5 + 32);
}

let fahrenheidLink = document.querySelector("#fahrenheid-link");
fahrenheidLink.addEventListener("click", convertTofahrenheid);

function convertTocelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  let celsiustemperature = temperatureElement.innerHTML;
  celsiustemperature = Number(celsiustemperature);
  temperatureElement.innerHTML = Math.round((celsiustemperature / 9) * 5 - 32);
}
let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertTocelsius);
