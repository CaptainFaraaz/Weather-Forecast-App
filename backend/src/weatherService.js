const axios = require('axios');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// OpenWeatherMap API base URL
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5';

// Get API key from environment variables
const API_KEY = process.env.OPENWEATHERMAP_API_KEY;

// Check if API key is present
if (!API_KEY) {
  console.error('Error: OpenWeatherMap API key is missing. Please set it in your .env file.');
  process.exit(1);
}

/**
 * Get current weather for a specific city
 * @param {string} city - City name
 * @param {string} units - Units of measurement ('metric' for Celsius, 'imperial' for Fahrenheit)
 * @returns {Promise<Object>} - Weather data
 */
const getCurrentWeather = async (city, units = 'metric') => {
  try {
    const response = await axios.get(`${API_BASE_URL}/weather`, {
      params: {
        q: city,
        appid: API_KEY,
        units: units
      }
    });
    
    return response.data;
  } catch (error) {
    console.error(`Error fetching current weather for ${city}:`, error.message);
    
    // Forward the error for handling in the controller
    throw error;
  }
};

/**
 * Get 5-day forecast for a specific city
 * @param {string} city - City name
 * @param {string} units - Units of measurement ('metric' for Celsius, 'imperial' for Fahrenheit)
 * @returns {Promise<Object>} - Forecast data
 */
const getForecast = async (city, units = 'metric') => {
  try {
    const response = await axios.get(`${API_BASE_URL}/forecast`, {
      params: {
        q: city,
        appid: API_KEY,
        units: units
      }
    });
    
    return response.data;
  } catch (error) {
    console.error(`Error fetching forecast for ${city}:`, error.message);
    
    // Forward the error for handling in the controller
    throw error;
  }
};

module.exports = {
  getCurrentWeather,
  getForecast
};
