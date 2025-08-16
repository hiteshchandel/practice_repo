const cartService = require("../services/cartService");

exports.getCartForUser = (req, res, next) => {
  try {
    const { userId } = req.params;
    if (!userId) throw { statusCode: 400, message: "User ID is required" };
    const result = cartService.getCartForUser(userId);
    res.send(result);
  } catch (err) {
    next(err);
  }
};

exports.addProductToCart = (req, res, next) => {
  try {
    const { userId } = req.params;
    if (!userId) throw { statusCode: 400, message: "User ID is required" };
    const result = cartService.addProductToCart(userId);
    res.send(result);
  } catch (err) {
    next(err);
  }
};
