const express = require("express");

const app = express();
const port = 3000;

const addUserToRequest = (req, res, next) => {
    req.user = "Guest";
    next();
}

app.get("/message", addUserToRequest, (req, res) => {
    res.send(`<h1>Welcome ${req.user}!</h1>`);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})