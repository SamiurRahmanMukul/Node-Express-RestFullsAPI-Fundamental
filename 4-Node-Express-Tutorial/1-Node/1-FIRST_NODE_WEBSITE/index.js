// 'http' module include
var http = require("http");

// 'fs' module include
var fs = require("fs");

var server = http.createServer(function (req, res) {
  if (req.url == "/") {
    let page = fs.readFileSync("./assets/html/home.html", "utf-8");
    res.end(page);
  } else if (req.url == "/service") {
    let page = fs.readFileSync("./assets/html/service.html", "utf-8");
    res.end(page);
  } else if (req.url == "/contact") {
    let page = fs.readFileSync("./assets/html/contact.html", "utf-8");
    res.end(page);
  } else if (req.url == "/terms") {
    let page = fs.readFileSync("./assets/html/terms.html", "utf-8");
    res.end(page);
  } else if (req.url == "/about") {
    let page = fs.readFileSync("./assets/html/about.html", "utf-8");
    res.end(page);
  }
});

// server start 8080 port number
var run = server.listen(8080);
if (run) {
  console.log("Server Run Successfully.");
} else {
  console.log("Sorry! Server Not Run.");
}
