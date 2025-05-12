import React from 'react';
import './CurrentWeather.css';
import { getWeatherIconUrl, formatTime, getUnitSymbol, getWindSpeedUnit } from '../services/api';

const CurrentWeather = ({ data, unit }) => {
  if (!data) return null;

  const {
    name,
    main: { temp, feels_like, humidity, pressure },
    weather,
    wind,
    sys: { sunrise, sunset },
    visibility
  } = data;

  const weatherDescription = weather[0].description;
  const weatherIcon = weather[0].icon;
  const tempUnit = getUnitSymbol(unit);
  const windUnit = getWindSpeedUnit(unit);

  return (
    <div className="current-weather">
      <div className="weather-header">
        <h2>{name}</h2>
        <div className="weather-icon">
          <img src={getWeatherIconUrl(weatherIcon)} alt={weatherDescription} />
        </div>
      </div>
      
      <div className="weather-info">
        <div className="temperature">
          <h3>{Math.round(temp)}{tempUnit}</h3>
          <p>{weatherDescription}</p>
          <p>Feels like: {Math.round(feels_like)}{tempUnit}</p>
        </div>
        
        <div className="weather-details">
          <div className="detail-row">
            <div className="detail-item">
              <span className="label">Humidity</span>
              <span className="value">{humidity}%</span>
            </div>
            <div className="detail-item">
              <span className="label">Wind</span>
              <span className="value">{wind.speed} {windUnit}</span>
            </div>
          </div>
          
          <div className="detail-row">
            <div className="detail-item">
              <span className="label">Pressure</span>
              <span className="value">{pressure} hPa</span>
            </div>
            <div className="detail-item">
              <span className="label">Visibility</span>
              <span className="value">{visibility / 1000} km</span>
            </div>
          </div>
          
          <div className="detail-row">
            <div className="detail-item">
              <span className="label">Sunrise</span>
              <span className="value">{formatTime(sunrise)}</span>
            </div>
            <div className="detail-item">
              <span className="label">Sunset</span>
              <span className="value">{formatTime(sunset)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
