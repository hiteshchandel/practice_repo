// controllers/userController.js

// GET /users
exports.getAllUsers = (req, res) => {
  res.send("Fetching all users");
};

// POST /users
exports.addUser = (req, res) => {
  res.send("Adding a new user");
};

// GET /users/:id
exports.getUserById = (req, res) => {
  res.send(`Fetching user with ID: ${req.params.id}`);
};
