function formatDate() {
  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let date = days[now.getDay()];
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
  let year = now.getFullYear();
  let hour = now.getHours();
  if (hour < 10) {
    hour = ("0" + hour).slice(-2);
  }
  let minute = now.getMinutes();
  if (minute < 10) {
    minute = ("0" + minute).slice(-2);
  }

  let currentDate = document.querySelector(".date");
  currentDate.innerHTML = `${date} ${month} ${year}`;
  let currentTime = document.querySelector(".time");
  currentTime.innerHTML = `${hour}:${minute}`;
}

let searchCity = document.querySelector("#searchengine");
searchCity.addEventListener("submit", changeCity);

function displayWeathercondition(response) {
  console.log(response.data);
  console.log(response.data.name);
  document.querySelector("#city-name").innerHTML = response.data.name;
  document.querySelector("#currentTemp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#currentWind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

function searchCityLocation(city) {
  let apiKey = "537a0e0e7ac70ad389445679f87e0b6e";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
  axios.get(apiUrl).then(displayWeathercondition);
}
function changeCity(event) {
  event.preventDefault();
  let city = document.querySelector("#search-bar").value;
  searchCityLocation(city);

  searchCity.addEventListener("submit", changeCity);
  function displayCurrentloc(event) {
    event.preventDefault();
    let apiKey = "537a0e0e7ac70ad389445679f87e0b6e";
    let units = "metric";
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;

    axios.get(apiUrl).then(displayWeathercondition);
  }

  let buttonCurrentloc = document.querySelector("#buttonCurrentloc");
  buttonCurrentloc.addEventListener("click", displayCurrentloc);
}
