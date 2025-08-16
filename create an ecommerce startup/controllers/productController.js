// controllers/productController.js

// GET /products
exports.getAllProducts = (req, res) => {
  res.send("Fetching all products");
};

// GET /products/:id
exports.getProductById = (req, res) => {
  res.send(`Fetching product with ID: ${req.params.id}`);
};

// POST /products
exports.addProduct = (req, res) => {
  res.send("Adding a new product");
};
