console.log("=====> HEY, I WILL BE LEARN NODE, EXPRESS & API <=====");

// ? CommonJS, every file is module (by default)
// ? Modules - Encapsulated Code (only share minimum)

// import created module
const names = require("./4-names");
const sayHi = require("./5-utils");

sayHi(names.alam);
sayHi(names.arif);
sayHi(names.mukul);
sayHi(names.mostofa);

const data = require("./6-alternative-flavor");
console.log(data);

require("./7-mind-grenade");
