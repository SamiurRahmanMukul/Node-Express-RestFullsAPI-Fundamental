// * $14: Getting Started with Express Web Framework
// * $15: Working with Express Get Requests
// * $16: Server Static Files With Express
// * $17: Https Post Request w/ Express and Body Parser Module
// * $18: Working with JSON Data - Express and Body Parser
// * $19: User Input Validation With Express and JOI

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const Joi = require("joi");

const app = express();

// static files
app.use("/public", express.static(path.join(__dirname, "static")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  // res.send("Hello World!");
  res.sendFile(path.join(__dirname, "static", "index.html"));
});

// body parser
app.post("/", (req, res) => {
  console.log(req.body);

  // joi - schema
  const schema = Joi.object().keys({
    email: Joi.string().trim().email().required(),
    password: Joi.string().min(5).max(10).required(),
  });

  Joi.validate(req.body, schema, (err, result) => {
    if (err) {
      console.log(err);
      res.send("an error has occurred");
    } else {
      console.log(result);
      res.send("successfully posted data");
    }
  });

  // database work here
  // res.send("successfully posted data");
  // res.json({ success: true });
});

// using route
app.get("/example", (req, res) => {
  res.send("Hitting Example Route!");
});

// send object
app.get("/example/:name/:age", (req, res) => {
  console.log(req.params); // params query data send --> http://localhost:3000/example/mukul/22?tutorial=paramsTutorial&sort=byname
  console.log(req.query);
  res.send("Name: " + req.params.name + "\tAge: " + req.params.age);
});

app.listen(3000);
