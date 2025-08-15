const express = require("express");
const app = express();
const PORT = 4000;

app.use(express.json());

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

// Wildcard route (Express 5 compatible)
app.use((req, res) => {
    res.status(404).send("<h1>404 - Page Not Found</h1>");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
