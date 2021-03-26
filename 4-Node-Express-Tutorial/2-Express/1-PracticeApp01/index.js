const { response } = require("express");
var express = require("express");
app = express();

// TODO: get() method call -->
app.get("/", (req, res) => {
  res.send("Hello World! || Home Page");
});

// TODO: express.js routing -->
app.post("/contact", (req, res) => {
  res.send("Hello World! || Contact Page");
});
app.put("/terms", (req, res) => {
  res.send("Hello World! || Terms Page");
});
app.delete("/about", (req, res) => {
  res.send("Hello World! || About Page");
});

// TODO: simple string response -->
// res.send() ---> response body
// res.end() ---> response ending point

app.get("/get", (req, res) => {
  res.send("this is simple string response ---> get() method");
});
app.post("/post", (req, res) => {
  res.send("this is simple string response ---> post() method");
});

// TODO: change response status code -->
app.get("/statusCode", (req, res) => {
  res.status(401).end("Unauthorized ... !");
});

// TODO: json response -->
app.get("/json", (req, res) => {
  // create a simple json array --->
  let MyJsonArray = [
    {
      name: "Mukul",
      city: "Mymensingh",
      occupation: "Programmer & developer",
    },
  ];

  res.json(MyJsonArray);
});

// TODO: download response -->
app.get("/download", (req, res) => {
  res.download("./uploads/abc.jpg");
});

// TODO: redirect response -->
app.get("/bangladesh", (req, res) => {
  res.redirect("http://localhost:1010/india");
});
app.get("/india", (req, res) => {
  res.send("Hey, I'm India.");
});

// TODO: response header -->
app.get("/header", (req, res) => {
  res.append("Your Name: ", "Samiur Rahman Mukul");
  res.append("City: ", "Mymensingh");
  res.append("Age: ", "22 years old");

  res.send("Hello World");
  res.status(201).end();
});

// TODO: response cookie -->
app.get("/cookie", (req, res) => {
  res.cookie("Your Name: ", "Samiur Rahman Mukul");
  res.cookie("City: ", "Mymensingh");
  res.cookie("Age: ", "22 years old");

  res.end("Cookie Send Success.");
});

// TODO: cookies clear -->
app.get("/cookieClear", (req, res) => {
  res.clearCookie("Your Name: ");
  res.clearCookie("City: ");
  res.clearCookie("Age: ");

  res.end("Clear Cookies Success.");
});

// TODO: run server 1010 port -->
app.listen(1010, (e) => {
  if (e) {
    console.log("Server Run Fail.");
  } else {
    console.log("Server Run Success.");
  }
});
