const userService = require("../services/userService");

exports.getAllUsers = (req, res, next) => {
  try {
    const result = userService.getAllUsers();
    res.send(result);
  } catch (err) {
    next(err);
  }
};

exports.getUserById = (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) throw { statusCode: 400, message: "User ID is required" };
    const result = userService.getUserById(id);
    res.send(result);
  } catch (err) {
    next(err);
  }
};

exports.addUser = (req, res, next) => {
  try {
    const result = userService.addUser();
    res.send(result);
  } catch (err) {
    next(err);
  }
};
