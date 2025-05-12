const app = require('./app');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Set port from environment variable or default to 3001
const PORT = process.env.PORT || 3001;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`API is available at http://localhost:${PORT}/api`);
});
