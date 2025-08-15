const express = require("express");
const router = express.Router();

// GET /books
router.get("/", (req, res) => {
    console.log("GET request made to /books");
    res.send("Here is the list of books!");
});

// POST /books
router.post("/", (req, res) => {
    console.log("Book data received:", req.body); // Book data from client
    res.send("Book has been added!");
});

module.exports = router;
