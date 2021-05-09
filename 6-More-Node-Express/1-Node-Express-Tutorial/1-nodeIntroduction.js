// * $1: Node.js Installation & Introduce
console.log("Hello World! Form Node.js (JavaScript Framework)");

// * $2: Node.js Working With Module
// import module
const func = require("./modules/function");
// func(2 ,2)

// work on multiple module
/* console.log(func.PI);
console.log(func.sum(2, 2));
console.log(new func.SomeMathObject()); */

// * $3: The Events Module And EvenEmitter Class
const EvenEmitter = require("events");
const evenEmitter = new EvenEmitter();

evenEmitter.on("tutor", (num1, num2) => {
  // console.log('tutor event has occurred');
  let sum = num1 + num2;
  console.log(`Sum = ${sum}`);
});

// evenEmitter.emit("tutor", 1, 2);

class Person extends EvenEmitter {
  constructor(name) {
    super();
    this._name = name;
  }

  get name() {
    return this._name;
  }
}

let mukul = new Person("Samiur Rahman Mukul");
mukul.on("name", () => {
  console.log("My name is " + mukul.name);
});

// mukul.emit("name");

// another example
let christina = new Person("Christina");
christina.on("name", () => {
  console.log("My name is " + christina.name);
});

// christina.emit("name");

// * $4: Working with the ReadLine Module
const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n1 = Math.floor(Math.random() * 10 + 1);
let n2 = Math.floor(Math.random() * 10 + 1);

let ans = n1 + n2;
// console.log("Answer = " + ans);

r1.question(`What is ${n1} + ${n2}? \n`, (userInput) => {
  // console.log(userInput);

  if (userInput.trim() == ans) {
    rl.close();
  } else {
    r1.setPrompt("Incorrect response please try again");
    r1.prompt();

    r1.on("line", (userInput) => {
      if (userInput.trim() == ans) {
        rl.close();
      } else {
        r1.setPrompt(`Your answer of ${userInput} is incorrect tye again \n`);
        r1.prompt();
      }
    });
  }
});

r1.on("close", () => {
  console.log("Correct !!!!!");
});
