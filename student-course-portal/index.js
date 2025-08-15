const express = require("express");
const studentRoutes = require("./routes/studentRoutes");
const courseRoutes = require("./routes/courseRoutes");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to the Student & Course Portal API!");
});

// Routes
app.use("/students", studentRoutes);
app.use("/courses", courseRoutes);

// 404 handler
app.use((req, res) => {
    res.status(404).send("Page not found");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
