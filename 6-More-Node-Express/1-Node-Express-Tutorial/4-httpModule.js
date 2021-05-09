// * $9: Creating a Http Server Using the Http Module
const http = require("http");

/* // ! create a server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<h1>Hello World! -- Home Page</h1>");
    res.end();
  } else {
    res.write("<h1>Sorry! Page not found.</h1>");
    res.end();
  }
}); */

/* // ! run server in 3000 / or any number of port
server.listen("3000", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("server run successfully at 3000 port ...");
  }
}); */

// * $10: Serving Static Files with Http and File System Modules
const fs = require("fs");

http
  .createServer((req, res) => {
    const readStream = fs.createReadStream("./static/index.html");
    // const readStream = fs.createReadStream("./static/example.json");
    // const readStream = fs.createReadStream("./static/favicon.png");

    if (req.url === "/") {
      res.writeHead(200, { "Content-type": "text/html" });
      // res.writeHead(200, { "Content-type": "text/json" });
      // res.writeHead(200, { "Content-type": "image/png" });
      readStream.pipe(res);
    }
  })
  .listen(3000);
