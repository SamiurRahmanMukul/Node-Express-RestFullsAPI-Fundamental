const express = require("express");
const app = express();

// module import
const logger = require("../module/logger");
const authorize = require("../module/authorize");

//  req => middleware => res
app.use([logger, authorize]);

// api/home/about/products
app.get("/", (req, res) => {
  res.send("Home");
});
app.get("/about", (req, res) => {
  res.send("About");
});
app.get("/api/products", (req, res) => {
  res.send("Products");
});
app.get("/api/items", (req, res) => {
  console.log(req.user);
  res.send("Items");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
