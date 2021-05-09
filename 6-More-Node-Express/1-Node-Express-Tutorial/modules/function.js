const sum = (num1, num2) => {
  const sum = num1 + num2;
  console.log(`Sum = ${sum}`);
};

const PI = 3.1416;

class SomeMathObject {
  constructor() {
    console.log("object created");
  }
}

// exports module
// single module exports
// module.exports = sum;

// multiple module exports
/* module.exports.sum = sum;
module.exports.PI = PI;
module.exports.SomeMathObject = SomeMathObject; */

// multiple module exports in object type
module.exports = { sum: sum, PI: PI, SomeMathObject: SomeMathObject };
