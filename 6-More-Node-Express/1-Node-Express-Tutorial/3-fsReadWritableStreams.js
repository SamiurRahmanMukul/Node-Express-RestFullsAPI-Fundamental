// * $6: Working with Readable and Writable Streams
const fs = require("fs");

const readStream = fs.createReadStream("./outputs/lorem_text.txt", "utf-8");
const writeStream = fs.createWriteStream("./outputs/lorem_text2.txt", "utf-8");

/* readStream.on("data", (chunk) => {
  // console.log(chunk);
  writeStream.write(chunk)
}); */

// * $7: Why You Should Use Streams
/* // ? read a large without ReadableStream - Not read large text file
fs.readFile("./outputs/large_text.txt", "utf-8", (err, file) => {
  if (err) {
    console.log(err);
  } else {
    console.log(file);
  }
}); */

/* // ? using Readable Stream easily read large file
const readStreamLarge = fs.createReadStream(
  "./outputs/large_text.txt",
  "utf-8"
);
readStreamLarge.on("data", (text) => {
  console.log(text);
}); */

// * $8: Pipes and Pipe Chaining
readStream.pipe(writeStream); // ? pipe workflow --> readAFile text and writeAFile this text

// ? pipe Chaining
const zlib = require("zlib");

const gZlib = zlib.createGzip();
const gunZlib = zlib.createGunzip();

// ? compressed a file
const writeStreamCompressed = fs.createWriteStream(
  "./outputs/compressed.gz",
  "utf-8"
);

readStream.pipe(gZlib).pipe(writeStreamCompressed);

// ? uncompressed a file
const writeStreamUncompressed = fs.createWriteStream(
  "./outputs/uncompressed.txt",
  "utf-8"
);

readStream.pipe(gunZlib).pipe(writeStreamUncompressed);
