// * $22: Node.js tutorial - Middleware
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use("/example", (req, res, next) => {
  // console.log(req.url, req.method);
  req.banana = "banana";
  next();
});

app.get("/", (req, res) => {
  console.log(req.banana);
  res.send("Middleware");
});
