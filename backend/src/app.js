const express = require('express');
const cors = require('cors');
const weatherRoutes = require('./routes/weatherRoutes');

// Initialize Express app
const app = express();

// Enable CORS
app.use(cors());

// Parse JSON request bodies
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Server is running' });
});

// Weather API routes
app.use('/api', weatherRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(err.statusCode || 500).json({
    error: true,
    message: err.message || 'An unexpected error occurred'
  });
});

// 404 Not Found middleware
app.use((req, res) => {
  res.status(404).json({
    error: true,
    message: 'Resource not found'
  });
});

module.exports = app;
