var express = require("express"); // TODO: express.js module import
var bodyParser = require("body-parser"); // TODO: body-parser module import
var multer = require("multer"); // TODO: multer module import
var multer = multer();

var app = express();
app.use(bodyParser.json());
app.use(multer.array());
app.use(express.static("public"));

// TODO: get() request method -->
app.get("/", (req, res) => {
  // URL ---> request set query:
  // Example ---> http://localhost:8000?firstName=Samiur&lastName=Rahman
  /* let firstName = req.query.firstName;
  let lastName = req.query.lastName; */

  // request header -->
  let firstName = req.header.firstName;
  let lastName = req.header.lastName;

  res.end(firstName + " " + lastName);
});

// TODO: post() request method() -->
app.post("/post", (req, res) => {
  // query property --->
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  res.send(firstName + " " + lastName);

  // header property --->
  let userName = req.header("userName");
  let password = req.header("password");
  res.send(userName + "\n" + password);
});

// TODO: body-parser --- json post() method -->
app.post("/bodyParser", (req, res) => {
  let jsonData = req.body;
  /* let jsonString = JSON.stringify(jsonData);
  res.send(jsonString); */

  let name = jsonData["name"];
  let city = jsonData["city"];
  res.end(name + "\n" + city);
});

// TODO: multer --- multipart form data -->
app.post("/multer", (req, res) => {
  let jsonData = req.body;
  res.status(JSON.stringify(jsonData));
});

// TODO: multer --- file uploads
var storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, "./uploads");
  },
  filename: (req, file, callBack) => {
    callBack(null, file.originalname);
  },
});

var upload = multer({ storage: storage }).signal("myFile");

app.post("/uploads", (req, res) => {
  upload(req, res, (e) => {
    if (e) {
      console.log(e);
      res.end("File Upload Fail.");
    } else {
      res.end("File Upload Success.");
    }
  });
});

// TODO: run a server 8000 port -->
app.listen(8000, (e) => {
  if (e) {
    console.log(e);
  } else {
    console.log("Server Run Success.");
  }
});
