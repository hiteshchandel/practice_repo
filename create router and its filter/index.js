const express = require("express");
const booksRouter = require("./routes/book");

const app = express();
app.use(express.json()); // Middleware to parse JSON body

// Use router for /books
app.use("/books", booksRouter);

app.listen(4000, () => {
    console.log("Server running on port 4000");
});
