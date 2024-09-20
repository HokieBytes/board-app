// Import required modules
import express from 'express';
import morgan from 'morgan';

// Create an Express app
const app = express();

// Use Morgan for logging requests
app.use(morgan('dev'));

// Define routes for the app
app.get('/', (req, res) => {
  // Handle GET requests to the root route
  res.send('Welcome to our board app!');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
