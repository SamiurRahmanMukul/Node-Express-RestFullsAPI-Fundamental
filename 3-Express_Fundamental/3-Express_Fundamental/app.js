const express = require("express");
const app = express();

app.get("/", (req, res) => {});

// ! 404 - page not found
app.all("*", (req, res) => {
  res.sendStatus(404).send("Resource not found!");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
