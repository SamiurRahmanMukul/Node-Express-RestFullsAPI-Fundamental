const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
  const first = result;

  readFile("./content/second.txt", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }

    const second = result;
    writeFile(
      "./content/result-sync2.txt",
      `Here is the result: ${first}, ${second}`,
      (e, r) => {
        if (e) {
          console.log(e);
          return;
        } else {
          console.log(r);
        }
      }
    );
  });
});
