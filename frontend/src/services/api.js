import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api';

// Function to fetch current weather data
export const fetchCurrentWeather = async (city, unit = 'metric') => {
  try {
    const response = await axios.get(`${API_BASE_URL}/weather/${city}`, {
      params: { units: unit }
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error('Error fetching current weather. Please try again.');
  }
};

// Function to fetch forecast data
export const fetchForecast = async (city, unit = 'metric') => {
  try {
    const response = await axios.get(`${API_BASE_URL}/forecast/${city}`, {
      params: { units: unit }
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error('Error fetching forecast. Please try again.');
  }
};

// Function to get weather icon URL
export const getWeatherIconUrl = (iconCode) => {
  return `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
};

// Helper function to format date
export const formatDate = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });
};

// Helper function to format time
export const formatTime = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });
};

// Helper function to get unit symbol
export const getUnitSymbol = (unit) => {
  return unit === 'metric' ? '°C' : '°F';
};

// Helper function to get wind speed unit
export const getWindSpeedUnit = (unit) => {
  return unit === 'metric' ? 'm/s' : 'mph';
};
