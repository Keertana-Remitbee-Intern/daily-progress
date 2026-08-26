// Select HTML elements

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const message = document.getElementById("message");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const weather = document.getElementById("weather");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

// Search for weather

const getWeather = async () => {
    const city = cityInput.value.trim();

    // Check if input is empty
    if (city === "") {
        message.textContent = "Please enter a city name.";
        return;
    }

    // Show loading message
    message.textContent = "Loading...";

    // Clear previous weather
    cityName.textContent = "";
    temperature.textContent = "";
    weather.textContent = "";
    humidity.textContent = "";
    wind.textContent = "";

    try {

        // Find the city's latitude and longitude

        const locationResponse = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`
        );
        if (!locationResponse.ok) {
            throw new Error("Failed to find city");
        }
        const locationData = await locationResponse.json();

        // Check whether city was found

        if (!locationData.results) {
            throw new Error("City not found");
        }
        const location = locationData.results[0];
        const latitude = location.latitude;
        const longitude = location.longitude;

        // Get weather using latitude and longitude

        const weatherResponse = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m`
        );
        if (!weatherResponse.ok) {
            throw new Error("Failed to fetch weather");
        }
        const weatherData = await weatherResponse.json();

        // Get current weather data

        const currentWeather = weatherData.current;

        // Step 3: Display data

        cityName.textContent =
            `${location.name}, ${location.country}`;
        temperature.textContent =
            `Temperature: ${currentWeather.temperature_2m}°C`;
        weather.textContent =
            `Weather: ${getWeatherDescription(currentWeather.weather_code)}`;
        humidity.textContent =
            `Humidity: ${currentWeather.relative_humidity_2m}%`;
        wind.textContent =
            `Wind Speed: ${currentWeather.wind_speed_10m} km/h`;

        // Clear loading message

        message.textContent = "";
    } catch (error) {
        // Handle errors
        message.textContent =
            "Unable to fetch weather. Please try again.";
        console.error(error);
    }
};

// Convert weather code into readable text

const getWeatherDescription = (code) => {
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
};

// Button click event

searchBtn.addEventListener("click", getWeather);

// Allow pressing Enter inside the input

cityInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        getWeather();
    }
});