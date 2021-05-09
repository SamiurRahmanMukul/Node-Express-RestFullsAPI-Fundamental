// * $5: Working with the File System Module
const fs = require("fs"); // fs / fils system module import

// ! #1: create a file
/* fs.writeFile("./outputs/example.txt", "this is a example text file", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file create successfully");
  }
}); */

// ! #2: read file
/* fs.readFile("./outputs/example.txt", "utf-8", (err, file) => {
  if (err) {
    console.log(err);
  } else {
    console.log(file);
  }
}); */

// ! #3: rename a file
/* fs.rename("./outputs/example.txt", "./outputs/example_change.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file rename successfully");
  }
}); */

// ! #4: append data in a file
/* fs.appendFile(
  "./outputs/example_change.txt",
  " some data appended in 'example_change.txt' file",
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("file data append successfully");
    }
  }
); */

// ! #5: unlink / delete a file
/* fs.unlink("./outputs/example_change.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file unlink / delete successfully");
  }
}); */

// ! #6: create a new directory / folder
/* fs.mkdir("directory", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("folder create successfully");
  }
}); */

// ! #7: delete a directory / folder
/* fs.rmdir("directory", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("folder delete successfully");
  }
}); */

// ! #8: read a directory files
fs.readdir("./readable", (err, files) => {
  if (err) {
    console.log(err);
  } else {
    console.log(files);
  }
});
