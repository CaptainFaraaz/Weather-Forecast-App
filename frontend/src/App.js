import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import UnitToggle from './components/UnitToggle';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import { fetchCurrentWeather, fetchForecast } from './services/api';

function App() {
  const [city, setCity] = useState('');
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [unit, setUnit] = useState('metric'); // 'metric' for Celsius, 'imperial' for Fahrenheit
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch weather data
  const fetchWeatherData = async (searchCity) => {
    setLoading(true);
    setError(null);
    
    try {
      // Fetch current weather
      const weatherData = await fetchCurrentWeather(searchCity, unit);
      setCurrentWeather(weatherData);
      
      // Fetch forecast
      const forecastData = await fetchForecast(searchCity, unit);
      setForecast(forecastData);
      
      // Update city state
      setCity(searchCity);
    } catch (err) {
      setError(err.message || 'Failed to fetch weather data');
      console.error('Error fetching weather data:', err);
    } finally {
      setLoading(false);
    }
  };

  // Handle search submit
  const handleSearch = (searchCity) => {
    if (searchCity.trim()) {
      fetchWeatherData(searchCity);
    }
  };

  // Handle unit toggle
  const handleUnitToggle = (newUnit) => {
    setUnit(newUnit);
    if (city) {
      fetchWeatherData(city);
    }
  };

  // Initial load - could use geolocation here for user's current location
  useEffect(() => {
    // Default city on initial load
    fetchWeatherData('New York');
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Weather Forecast</h1>
        <SearchBar onSearch={handleSearch} />
        <UnitToggle currentUnit={unit} onToggle={handleUnitToggle} />
      </header>

      <main className="app-content">
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <ErrorMessage message={error} />
        ) : (
          <>
            {currentWeather && <CurrentWeather data={currentWeather} unit={unit} />}
            {forecast && <Forecast data={forecast} unit={unit} />}
          </>
        )}
      </main>

      <footer className="app-footer">
        <p>Weather data provided by OpenWeatherMap</p>
      </footer>
    </div>
  );
}

export default App;
