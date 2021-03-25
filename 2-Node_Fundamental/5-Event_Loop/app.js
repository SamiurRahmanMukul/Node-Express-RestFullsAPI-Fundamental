const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
  } else if (req.url === "/about") {
    // BLOCKING CODE !!!!!
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`);
      }
    }
  }
});

server.listen(5000, (e) => {
  if (e) {
    console.log("Something wen wrong. Server not run.");
  } else {
    console.log("5000 port server listen successfully.");
  }
});
