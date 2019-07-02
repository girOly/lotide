const assertEqual = require('./assertEqual');
//   if (actual === expected) {
//     console.log(`Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// // TEST CODE
//
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1,1).split(' ').join('');

const countLetters = function(string) {
  var noSpaces = string.split(" ").join("");
  const objectLetters = {};
  for (letter of noSpaces) {
    // console.log(objectLetters[letter])
    if (objectLetters[letter]) {
      // if (objectLetters[letter]) {
      objectLetters[letter] += 1;
    } else {
      objectLetters[letter] = 1;
    }
    // console.log(letter);
  }

  return objectLetters;
};

console.log(countLetters("lighthouse in the house"));

module.exports = countLetters;
