var express = require("express");
var app = express();

app.use((req, res) => {
  console.log("I am middleware.");
  middle();
});

app.get("/", (req, res, middle) => {
  res.end("Home Page");
});

app.listen(3030, (e) => {
  if (e) {
    console.log(e);
  } else {
    console.log("Server Run Success.");
  }
});
