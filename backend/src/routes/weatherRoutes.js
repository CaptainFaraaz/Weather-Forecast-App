const express = require('express');
const weatherController = require('../controllers/weatherController');

const router = express.Router();

// Route to get current weather by city
router.get('/weather/:city', weatherController.getCurrentWeather);

// Route to get forecast by city
router.get('/forecast/:city', weatherController.getForecast);

module.exports = router;
