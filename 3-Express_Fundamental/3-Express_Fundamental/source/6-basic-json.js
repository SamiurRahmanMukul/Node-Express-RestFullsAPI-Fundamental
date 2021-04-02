const express = require("express");
const app = express();

// * import data
const { products } = require("../Data/data");

app.get("/", (req, res) => {
  res.json(products);
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
