// http module
var http = require("http");

// fileSystem / fs-module
var fs = require("fs");

var server = http.createServer(function (req, res) {
  if ((req.url = "/")) {
    // fileRead - asynchronous
    /* fs.readFile("home.html", function (error, data) {
      res.writeHead(200, { "content-Type": "text/html" });
      res.write(data);
      res.end();
    }); */
    // fileRead - synchronous
    /* let data = fs.readFileSync("home.html");
    res.writeHead(200, { "content-Type": "text/html" });
    res.write(data);
    res.end(); */
    // fileWrite - asynchronous
    /* fs.writeFile("demo.txt", "Welcome To Node.js", function (error) {
      if (error) {
        res.writeHead(200, { "content-Type": "text/html" });
        res.write("File Write Fail.");
        res.end();
      } else {
        res.writeHead(200, { "content-Type": "text/html" });
        res.write("File Write Successful.");
        res.end();
      }
    }); */
    // fileWrite - synchronous
    /* let error = fs.writeFileSync("demoSyn.txt", "Todo something write here");
    if (error) {
      if (error) {
        res.writeHead(200, { "content-Type": "text/html" });
        res.write("File Write Fail.");
        res.end();
      } else {
        res.writeHead(200, { "content-Type": "text/html" });
        res.write("File Write Successful.");
        res.end();
      }
    } */
    // fileRename - asynchronous
    /* fs.rename("demo.txt", "demoNew.txt", function (error) {
        if (error) {
          res.writeHead(200, { "content-Type": "text/html" });
          res.write("File Rename Fail.");
          res.end();
        } else {
          res.writeHead(200, { "content-Type": "text/html" });
          res.write("File Rename Successful.");
          res.end();
        }
      }); */
    // fileRename - synchronous
    /* let error = fs.renameSync("demoSyn.txt", "demoSynNew.txt");
    if (error) {
      if (error) {
        res.writeHead(200, { "content-Type": "text/html" });
        res.write("File Rename Fail.");
        res.end();
      } else {
        res.writeHead(200, { "content-Type": "text/html" });
        res.write("File Rename Successful.");
        res.end();
      }
    } */
    // fileDelete - asynchronous
    /* fs.unlink("demoNew.txt", function (error) {
        if (error) {
          res.writeHead(200, { "content-Type": "text/html" });
          res.write("File Delete Fail.");
          res.end();
        } else {
          res.writeHead(200, { "content-Type": "text/html" });
          res.write("File Delete Successful.");
          res.end();
        }
      }); */
    // fileDelete - synchronous
    /* let error = fs.unlinkSync("demoSynNew.txt");
    if (error) {
      if (error) {
        res.writeHead(200, { "content-Type": "text/html" });
        res.write("File Delete Fail.");
        res.end();
      } else {
        res.writeHead(200, { "content-Type": "text/html" });
        res.write("File Delete Successful.");
        res.end();
      }
    } */
    // fileExists - asynchronous
    /* fs.exists("demoNew.txt", function (error) {
      if (error) {
        res.end("True");
      } else {
        res.end("False");
      }
    }); */
    // fileExists - synchronous
    /* let error = fs.existsSync("demoSynNew.txt");
    if (error) {
      if (error) {
        res.end("True");
      } else {
        res.end("False");
      }
    } */
  }
});

// server run port number set
var run = server.listen(4040);
if (run) {
  console.log("Server Is Run Successfully.");
} else {
  console.log("Sorry! Server Is Not Running.");
}
