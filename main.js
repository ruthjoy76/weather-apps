import "./style.css";
import fetchCurrentWeather from "./src/fetchCurrentWeather";
import appendWeather from "./src/appendWeather";

const searchWeatherBtn = document.getElementById("search-weather-btn");
const searchWeatherInput = document.getElementById("search-weather-input");

searchWeatherBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const input = searchWeatherInput.value;

  if (input === "") return;

  fetchCurrentWeather(input).then((data) => {
    appendWeather(data);
    searchWeatherInput.value = "";
  });
});