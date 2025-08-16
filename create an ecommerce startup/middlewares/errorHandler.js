// middlewares/errorHandler.js

// Error handling middleware
const errorHandler = (err, req, res, next) => {
  console.error(err.stack); // log full error stack for debugging

  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
};

module.exports = errorHandler;
