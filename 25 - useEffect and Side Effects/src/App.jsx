import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Message from "./components/Message";

function App() {
  const [city, setCity] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchCity.trim() === "") {
      return;
    }

    // Create controller for cleanup
    const controller = new AbortController();

    const getWeather = async () => {
      setLoading(true);
      setMessage("");
      setWeather(null);

      try {
        // Find city coordinates

        const locationResponse = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
            searchCity
          )}&count=1`,
          {
            signal: controller.signal,
          }
        );

        if (!locationResponse.ok) {
          throw new Error("Failed to find city");
        }

        const locationData = await locationResponse.json();

        // Check if city exists
        if (
          !locationData.results ||
          locationData.results.length === 0
        ) {
          throw new Error("City not found");
        }

        const location = locationData.results[0];

        // Fetch weather

        const weatherResponse = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m`,
          {
            signal: controller.signal,
          }
        );

        if (!weatherResponse.ok) {
          throw new Error("Failed to fetch weather");
        }

        const weatherData = await weatherResponse.json();
        const currentWeather = weatherData.current;

        // Store weather in state

        setWeather({
          city: `${location.name}, ${location.country}`,
          temperature: currentWeather.temperature_2m,
          weatherCode: currentWeather.weather_code,
          humidity: currentWeather.relative_humidity_2m,
          wind: currentWeather.wind_speed_10m,
        });

        setMessage("");
      } catch (error) {
        // Ignore cancelled requests
        if (error.name === "AbortError") {
          return;
        }

        console.error(error);

        setMessage(
          "Unable to fetch weather. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    getWeather();

    return () => {
      controller.abort();
    };
  }, [searchCity]);

  // Search button
  const handleSearch = () => {
    const trimmedCity = city.trim();

    if (trimmedCity === "") {
      setMessage("Please enter a city name.");
      setWeather(null);
      return;
    }

    setSearchCity(trimmedCity);
  };

  return (
    <div className="container">
      <h1>Weather Checker</h1>

      <SearchBar
        city={city}
        setCity={setCity}
        onSearch={handleSearch}
      />

      <Message
        message={message}
        loading={loading}
      />

      {weather && !loading && (
        <WeatherCard weather={weather} />
      )}
    </div>
  );
}

export default App;