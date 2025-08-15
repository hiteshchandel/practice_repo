const express = require("express");
const app = express();
const productRoutes = require("./router/product");

// Middleware for logging requests
app.use((req, res, next) => {
    console.log(`${req.method} request made to ${req.url}`);
    next();
});

// Mount router
app.use("/products", productRoutes);

// Example extra route for categories
app.get("/categories", (req, res) => {
    res.send("Here is the list of all categories.");
});

app.post("/categories", (req, res) => {
    res.send("A new category has been created.");
});

// Start server
app.listen(4000, () => {
    console.log("Server running on http://localhost:4000");
});
