const productService = require("../services/productService");

exports.getAllProducts = (req, res, next) => {
  try {
    const result = productService.getAllProducts();
    res.send(result);
  } catch (err) {
    next(err);
  }
};

exports.getProductById = (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) throw { statusCode: 400, message: "Product ID is required" };
    const result = productService.getProductById(id);
    res.send(result);
  } catch (err) {
    next(err);
  }
};

exports.addProduct = (req, res, next) => {
  try {
    const { productName } = req.body;
    if (!productName) throw { statusCode: 400, message: "Product name is required" };
    const result = productService.addProduct(productName);
    res.send(result);
  } catch (err) {
    next(err);
  }
};
