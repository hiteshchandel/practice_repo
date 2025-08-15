// Import Express
const express = require("express");
const app = express();
const PORT = 4000;

// Middleware to parse JSON
app.use(express.json());

// ===================== ROUTES ===================== //

// GET /products
app.get("/products", (req, res) => {
    console.log("GET /products called");
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

// ✅ Dynamic Route: GET /welcome/:username
// Example: /welcome/Julian?role=Admin
app.get("/welcome/:username", (req, res) => {
    const { username } = req.params; // Route parameter
    const { role } = req.query; // Query parameter

    if (role) {
        res.send(`Welcome ${username}, your role is ${role}.`);
    } else {
        res.send(`Welcome ${username}!`);
    }
});

// Wildcard Route for undefined paths
app.use( (req, res) => {
    res.status(404).send("<h1>404 - Page Not Found</h1>");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
