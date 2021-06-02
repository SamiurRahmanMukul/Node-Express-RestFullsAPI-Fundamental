// (function (exports, require, module, __filename, __dirname) {
var peoples = ["sakib", "tamim", "mashrafe", "mushfiq", "mahmudulah"];
var a = 6;

function test() {
  console.log("this is a test function.");
}

// export module
console.log(module);
// module.exports = people; // single module exports
// multiple module object
module.exports = {
  peoples,
  a,
  test,
};

// ife function by-default return
// return module.exports;
// });
