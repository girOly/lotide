const assertEqual = require('./assertEqual');
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`Assertion Failed: ${actual} !== ${expected}`);
//   }
// };
const tail = function(element, elementTwo) {
  return elementTwo;
};

// const tail = function(number) {
//   let newBucket = [];
//   for (let i = 0; i < number.length; i++) {
//     if (i !== 0) {
//       newBucket.push(number[i]);
//     }
//   }
//   return newBucket;
// };

// TEST CODE

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1,1);



module.exports = tail;
