const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end("Welcome");
// });

// Using Event Emitter API
const server2 = http.createServer();
// emits request event
// subscribe to it / listen for it / respond to it
server2.on("request", (req, res) => {
  res.end("Welcome");
});

server2.listen(5000);
