// Import Express
const express = require("express");
const app = express();
const PORT = 4000;

// Middleware to parse JSON
app.use(express.json());

// ===== Custom Logging Middleware =====
app.use((req, res, next) => {
    console.log(`${req.method} request made to ${req.url}`);
    next(); // Pass control to the next middleware or route handler
});

// ===== Routes =====

// GET /products
app.get("/products", (req, res) => {
    res.send("Here is the list of all products.");
});

// POST /products
app.post("/products", (req, res) => {
    res.send("A new product has been added.");
});

// GET /categories
app.get("/categories", (req, res) => {
    res.send("Here is the list of all categories.");
});

// POST /categories
app.post("/categories", (req, res) => {
    res.send("A new category has been created.");
});

// Wildcard Route for undefined paths
app.use((req, res) => {
    res.status(404).send("<h1>404 - Page Not Found</h1>");
});

// Start server
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
