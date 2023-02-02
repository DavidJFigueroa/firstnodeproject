const cowsayObject = require("cowsay");

const person = require("./information");

// Build in babysteps

const sayParameter = {
  text: person.name + " at " + person.campus,
};

const cowsayOutput = cowsayObject.say(sayParameter);

console.log(cowsayOutput);

// Refactor, write the above in a more pro way

// console.log(
//   cowsayObject.say({
//     text: "Hello NPM!",
//   })
// );
