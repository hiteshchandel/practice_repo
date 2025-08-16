// const express = require("express");
// const app = express();

// app.use(express.json());

// app.use("/products", require("./routes/productRoutes"));

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


// const express = require("express");
// const path = require("path");

// const app = express();

// // GET endpoint serving HTML
// app.get("/api/products", (req, res) => {
//   res.sendFile(path.join(__dirname, "views", "products.html"));
// });

// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


// const express = require("express");
// const path = require("path");

// const app = express();

// // Middleware to parse form data
// app.use(express.urlencoded({ extended: true }));

// // GET endpoint serving HTML form
// app.get("/api/products", (req, res) => {
//   res.sendFile(path.join(__dirname, "views", "addProduct.html"));
// });

// // POST endpoint to handle form submission
// app.post("/api/products", (req, res) => {
//   const productName = req.body.productName;
//   res.send(`Product "${productName}" added successfully!`);
// });

// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


const express = require("express");
const path = require("path");

const app = express();

// Middleware to parse JSON body
app.use(express.json());

// Serve HTML form
app.get("/api/products", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "addProduct.html"));
});

// Handle POST request
app.post("/api/products", (req, res) => {
  const productName = req.body.productName;
  console.log("Product added:", productName); // log on server
  res.json({ message: `Product "${productName}" added successfully!` });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


