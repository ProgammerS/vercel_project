require('dotenv').config();
const express = require('express');
const path = require('path');
const { logRequest } = require('./middleware/logger'); // Importing the middleware

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(logRequest); // Using the imported middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/submit', (req, res) => {
  const message = req.body.message;
  console.log(`Received message: ${message}`);
  res.send('Message submitted successfully!');
});

// Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
