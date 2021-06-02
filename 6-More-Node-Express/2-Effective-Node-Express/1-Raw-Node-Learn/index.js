// * #1: Global Object & Module System
/* // ? Global Object
setTimeout(() => {
  console.log("Hello World!");
}, 1000);

// window(called browser) / global object(called node)
console.log(global);

const a = 10;
console.log(global.a); // variable not available in node(global)

// dir/file name not available in node
console.log(__dirname);
console.log(__filename); */

/* // ? Module System
const _ = require("lodash"); // external module import
const people = require("./modules/people");
// console.log(people);

// destructuring module objects
const { peoples, a, test } = people;
console.log(peoples);
console.log(a);
test();

// module object access without destructuring
console.log(people.peoples);
console.log(people.a);
people.test();

// peoples array lase elements print using lodash
console.log(_.last(peoples)); */

// * #2: Core Module & First Server Create
/* // ? 'PATH' module
const path = require("path");

const myPath =
  "H:/Github-SamiurRahmanMukul/Node-Express-RestFullsAPI-Fundamental/6-More-Node-Express/2-Effective-Node-Express/index.js";

console.log(path.basename(myPath));
console.log(path.dirname(myPath));
console.log(path.extname(myPath));
console.log(path.parse(myPath)); */

/* // ? 'OS' module
const os = require("os");

console.log(os.platform());
console.log(os.homedir());
console.log(os.freemem());
console.log(os.cpus()); */

/* // ? 'FS' module
const fs = require("fs");

// write a file synchronized way
fs.writeFileSync("outputs/myFile.txt", "Hello programmers!");
fs.appendFileSync("outputs/myFile.txt", " How are you?");

// read a file synchronized way
const data = fs.readFileSync("outputs/myFile.txt");
console.log(data); // buffer datatype data print
console.log(data.toString());

// read a file asynchronous
const data2 = fs.readFile("./outputs/myFile.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
}); */

/* // ? 'EVENT' module
const School = require("./modules/school");

const school = new School();

// register a listener for belling event
school.on("bellRing", ({ period, text }) => {
  console.log(`We need to run because ${period} ${text}.`);
});

school.startPeriod(); */

/* // ? 'HTTP' module
const http = require("http");

// create a new server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello programmers!");
    res.write("How are you doing?");
    res.end();
  } else if (req.url === "/about") {
    res.write("This is about us page");
    res.end();
  } else {
    res.write("Not found");
    res.end();
  }
});

// server.on("connection", () => {
//   console.log("New connection ...");
// });

// server run 3000 port
server.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("listening on port 3000");
  }
}); */

// * #3: Stream & Buffer
/* // ? Read Buffer
const fs = require("fs");

const ourReadStream = fs.createReadStream(
  `${__dirname}/data/bigData.txt`,
  "utf-8"
);

ourReadStream.on("data", (chunk) => {
  console.log(chunk);
});

console.log("Hello World!"); */

/* // ? Read Buffer --> example
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<html><head><title>Form Submission</title></head>");
    res.write(
      "<body><form method='post' action='/process'><input name='message'/></form></body>"
    );
    res.write("</html>");
    res.end();
  } else if (req.url === "/process") {
    const body = [];

    req.on("data", (chunk) => {
      // console.log(chunk.toString());
      body.push(chunk);
    });
    req.on("end", () => {
      console.log("Stream finished!");

      const bodyParsed = Buffer.concat(body).toString();
      console.log(bodyParsed);
    });

    res.write("Thanks you for submitting");
    res.end();
  } else {
    res.write("Sorry! Not found.");
    res.end();
  }
});

server.listen(3000, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server listen on 3000 port ...");
  }
}); */

/* // ? Write Stream
const fs = require("fs");

const ourReadStream = fs.createReadStream(
  `${__dirname}/data/bigData.txt`,
  "utf-8"
);
const ourWriteStream = fs.createWriteStream(`${__dirname}/outputs/outputs.txt`);

// ourReadStream.on("data", (chunk) => {
//   ourWriteStream.write(chunk);
// });

// read / write stream easily in --> pipe
ourReadStream.pipe(ourWriteStream); */

/* // ? Read & Write Stream Simple --> example
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const myReadStream = fs.createReadStream(
    `${__dirname}/data/bigData.txt`,
    "utf-8"
  );
  myReadStream.pipe(res);
});

server.listen(3000, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server listen on 3000 port ...");
  }
}); */
