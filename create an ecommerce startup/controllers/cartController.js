// controllers/cartController.js

// GET /cart/:userId
exports.getCartForUser = (req, res) => {
  res.send(`Fetching cart for user with ID: ${req.params.userId}`);
};

// POST /cart/:userId
exports.addProductToCart = (req, res) => {
  res.send(`Adding product to cart for user with ID: ${req.params.userId}`);
};
