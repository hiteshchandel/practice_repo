// controllers/productController.js
const productService = require("../services/productService");

// GET /products
exports.getAllProducts = (req, res) => {
  const result = productService.getAllProducts();
  res.send(result);
};

// GET /products/:id
exports.getProductById = (req, res) => {
  const result = productService.getProductById(req.params.id);
  res.send(result);
};

// POST /products
exports.addProduct = (req, res) => {
  const result = productService.addProduct();
  res.send(result);
};
