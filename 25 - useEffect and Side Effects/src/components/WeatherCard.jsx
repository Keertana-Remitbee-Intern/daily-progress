function WeatherCard({ weather }) {
  return (
    <div className="weather-result">
      <h2>{weather.city}</h2>
      <p>Temperature: {weather.temperature}°C</p>
      <p>Weather: {getWeatherDescription(weather.weatherCode)}</p>
      <p>Humidity: {weather.humidity}%</p>
      <p>Wind Speed: {weather.wind} km/h</p>
    </div>
  );
}

function getWeatherDescription(code) {
  if (code === 0) {
    return "Clear sky";
  }
  if (code === 1 || code === 2 || code === 3) {
    return "Partly cloudy";
  }
  if (code === 45 || code === 48) {
    return "Foggy";
  }
  if (code >= 51 && code <= 57) {
    return "Drizzle";
  }
  if (code >= 61 && code <= 67) {
    return "Rain";
  }
  if (code >= 71 && code <= 77) {
    return "Snow";
  }
  if (code >= 80 && code <= 82) {
    return "Rain showers";
  }
  if (code >= 95) {
    return "Thunderstorm";
  }
  return "Unknown";
}

export default WeatherCard;