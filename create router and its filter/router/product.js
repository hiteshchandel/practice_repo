const express = require("express");
const router = express.Router();

// Example routes for products
router.get("/", (req, res) => {
    res.send("<h1>Here is the list of all products.</h1>");
});

router.post("/", (req, res) => {
    res.send("<h1>A new product has been added.</h1>");
});

module.exports = router;
