const weatherService = require('../services/weatherService');

/**
 * Controller function to get current weather for a city
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
const getCurrentWeather = async (req, res, next) => {
  try {
    const { city } = req.params;
    const { units = 'metric' } = req.query;
    
    if (!city) {
      return res.status(400).json({
        error: true,
        message: 'City parameter is required'
      });
    }
    
    const weatherData = await weatherService.getCurrentWeather(city, units);
    return res.status(200).json(weatherData);
  } catch (error) {
    console.error('Error getting current weather:', error);
    
    // Check if it's a known error from the OpenWeatherMap API
    if (error.response && error.response.data) {
      return res.status(error.response.status || 400).json({
        error: true,
        message: error.response.data.message || 'Error fetching weather data'
      });
    }
    
    next(error);
  }
};

/**
 * Controller function to get forecast for a city
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
const getForecast = async (req, res, next) => {
  try {
    const { city } = req.params;
    const { units = 'metric' } = req.query;
    
    if (!city) {
      return res.status(400).json({
        error: true,
        message: 'City parameter is required'
      });
    }
    
    const forecastData = await weatherService.getForecast(city, units);
    return res.status(200).json(forecastData);
  } catch (error) {
    console.error('Error getting forecast:', error);
    
    // Check if it's a known error from the OpenWeatherMap API
    if (error.response && error.response.data) {
      return res.status(error.response.status || 400).json({
        error: true,
        message: error.response.data.message || 'Error fetching forecast data'
      });
    }
    
    next(error);
  }
};

module.exports = {
  getCurrentWeather,
  getForecast
};
