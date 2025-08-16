// const express = require("express");
// const app = express();

// // Import route files
// const userRoutes = require("./routes/userRoutes");
// const productRoutes = require("./routes/productRoutes");
// const cartRoutes = require("./routes/cartRoutes");

// // Middleware
// app.use(express.json());

// // Use routes
// app.use("/users", userRoutes);
// app.use("/products", productRoutes);
// app.use("/cart", cartRoutes);

// // Start server
// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

const express = require("express");
const path = require("path");
const app = express();

const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");

const errorHandler = require("./middlewares/errorHandler");

// Middleware
app.use(express.json());

// Routes
app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);

// Serve HTML form for products
app.get("/api/products-form", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "addProduct.html"));
});

// Handle 404 for unknown routes
app.use((req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  error.statusCode = 404;
  next(error);
});

// Centralized error handler
app.use(errorHandler);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

