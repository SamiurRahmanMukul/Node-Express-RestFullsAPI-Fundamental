const { readFileSync, writeFileSync } = require("fs");

// read file using node file system module
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

// write file & include text using node file system module
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second}`,
  { flag: "a" } // using flag to no append text
);
