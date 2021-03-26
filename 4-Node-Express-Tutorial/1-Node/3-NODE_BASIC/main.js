var http = require("http");
var url = require("url");

// create first http server
var server = http.createServer(function (req, res) {
  //   res.end("Hello World - Learn Node.js");

  /* if (req.url == "/") {
    res.writeHead(200, { content0type: "text/html" });
    res.write("<h1>This Is Home Page</h1>");
    res.end();
  } else if (req.url == "/about") {
    res.writeHead(200, { content0type: "text/html" });
    res.write("<h1>This Is About Page</h1>");
    res.end();
  } else if (req.url == "./contact") {
    res.writeHead(200, { content0type: "text/html" });
    res.write("<h1>This Is Contact Page</h1>");
    res.end();
  } */

  // url
  var myURL = "https://www.facebook.com/SamiurRahmanMukul";
  var myURLObj = url.parse(myURL, true);

  var myHostName = myURLObj.host;
  var myPathName = myURLObj.pathname;
  var mySearchName = myURLObj.search;

  res.writeHead(200, { "content-Type": "text/html" });
  res.write(myHostName);
  res.end();
});

server.listen(5050);
console.log("Sever Run Successful.");
