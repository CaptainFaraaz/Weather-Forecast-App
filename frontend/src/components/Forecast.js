import React from 'react';
import './Forecast.css';
import { getWeatherIconUrl, formatDate, getUnitSymbol } from '../services/api';

const Forecast = ({ data, unit }) => {
  if (!data || !data.list) return null;

  // Process forecast data to get daily forecast
  // OpenWeatherMap returns forecast in 3-hour intervals
  // Group by day to get daily forecast
  const dailyForecast = {};
  
  data.list.forEach(item => {
    const date = formatDate(item.dt);
    
    if (!dailyForecast[date]) {
      dailyForecast[date] = {
        date,
        temp_min: item.main.temp_min,
        temp_max: item.main.temp_max,
        weather: item.weather[0],
        icon: item.weather[0].icon
      };
    } else {
      // Update min/max temps if needed
      if (item.main.temp_min < dailyForecast[date].temp_min) {
        dailyForecast[date].temp_min = item.main.temp_min;
      }
      if (item.main.temp_max > dailyForecast[date].temp_max) {
        dailyForecast[date].temp_max = item.main.temp_max;
      }
    }
  });

  // Convert object to array and take first 5 days
  const forecastArray = Object.values(dailyForecast).slice(0, 5);
  const tempUnit = getUnitSymbol(unit);

  return (
    <div className="forecast">
      <h2>5-Day Forecast</h2>
      <div className="forecast-container">
        {forecastArray.map((day, index) => (
          <div key={index} className="forecast-day">
            <p className="day">{day.date}</p>
            <img 
              src={getWeatherIconUrl(day.icon)} 
              alt={day.weather.description} 
              className="forecast-icon"
            />
            <p className="temp-range">
              <span className="temp-max">{Math.round(day.temp_max)}{tempUnit}</span>
              <span className="temp-min">{Math.round(day.temp_min)}{tempUnit}</span>
            </p>
            <p className="forecast-desc">{day.weather.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
