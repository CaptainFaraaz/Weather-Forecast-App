Weather Forecast Application
A full-stack weather forecast application that displays current weather conditions and forecasts using the OpenWeatherMap API.
Project Overview
This application allows users to:

Search for weather by city name
View current weather conditions
See a 5-day forecast
Toggle between Celsius and Fahrenheit
View weather details including humidity, wind speed, and more

Technology Stack
Frontend

React.js: For building the user interface
Axios: For making API requests
CSS: For styling components

Backend

Node.js: JavaScript runtime environment
Express.js: Web application framework
Axios: For making API requests to OpenWeatherMap
Cors: For handling Cross-Origin Resource Sharing
Dotenv: For managing environment variables

API

OpenWeatherMap API: For weather data

Project Structure
weather-forecast-app/
├── frontend/                 # React frontend
│   ├── public/               # Public assets
│   ├── src/                  # Source files
│   │   ├── components/       # React components
│   │   ├── App.js            # Main application component
│   │   ├── index.js          # Entry point
│   │   └── ...               # Other frontend files
│   ├── package.json          # Frontend dependencies
│   └── README.md             # Frontend documentation
├── backend/                  # Node.js backend
│   ├── src/                  # Source files
│   │   ├── routes/           # API routes
│   │   ├── controllers/      # Request handlers
│   │   ├── services/         # Business logic
│   │   ├── app.js            # Express application setup
│   │   └── server.js         # Server entry point
│   ├── package.json          # Backend dependencies
│   ├── .env.example          # Example environment variables
│   └── README.md             # Backend documentation
└── README.md                 # Main project documentation
Setup and Installation
Prerequisites

Node.js (v14 or higher)
npm (v6 or higher)
OpenWeatherMap API key (register at OpenWeatherMap)

Backend Setup

Navigate to the backend directory:
cd backend

Install dependencies:
npm install

Create a .env file:
cp .env.example .env

Add your OpenWeatherMap API key to the .env file:
OPENWEATHERMAP_API_KEY=your_api_key_here
PORT=3001

Start the backend server:
npm start


Frontend Setup

Navigate to the frontend directory:
cd frontend

Install dependencies:
npm install

Start the React development server:
npm start

The application should now be running at http://localhost:3000

API Endpoints
Backend API

GET /api/weather/:city - Get current weather for a city
GET /api/forecast/:city - Get 5-day forecast for a city

Features
Current Weather

Display current temperature
Weather conditions (sunny, cloudy, etc.)
Humidity percentage
Wind speed and direction
Pressure
Visibility
Sunrise and sunset times

Forecast

5-day weather forecast
Daily high and low temperatures
Weather conditions for each day

Future Enhancements

User authentication
Saving favorite locations
Weather alerts
Geolocation to automatically detect user's location
Dark/Light theme toggle
More detailed weather information
Weather maps

OpenWeatherMap for providing the weather data API
React.js and Node.js communities for the excellent documentation and resources
