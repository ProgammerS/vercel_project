// middleware.js

// Middleware to log request details with timestamp
const logRequest = (req, res, next) => {
    const timestamp = new Date().toLocaleString();
    console.log(`${timestamp} - ${req.method} request to ${req.originalUrl}`);
    next();
  };
  
  module.exports = {
    logRequest
  };
  