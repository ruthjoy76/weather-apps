export default async function fetchCurrentWeather(city) {
  const API_KEY = "bc75fae98b1eb155fea6aabade06ddb8";
  const CURRENT_WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  const response = await fetch(CURRENT_WEATHER_API);
  const weatherData = await response.json();

  return weatherData;
}