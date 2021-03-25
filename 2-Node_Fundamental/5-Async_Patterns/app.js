const { readFile, writeFile } = require("fs");

const getText = (path) => {
  return new Promise((resolve, rejects) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        rejects(err);
      } else {
        resolve(data);
      }
    });
  });
};

getText("./Content/first.txt")
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

const start = async () => {
  try {
    const first = await getText("./Content/first.txt");
  } catch (error) {
    console.log(error);
  }
};

start();

// ?
const util = require("util");
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start2 = async () => {
  try {
    // readFile
    const first = await readFilePromise("./Content/first.txt", "utf8");
    const second = await getText("./Content/second.txt");

    // writeFile
    try {
      await writeFile("./Content/third.txt", "Hello, this third.txt file", {
        flag: "a",
      });
    } catch (error) {
      console.log(error);
    }

    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start2();
