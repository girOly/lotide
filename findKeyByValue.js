const assertEqual = function(actual, expected) {
//   if (actual === expected) {
// //     console.log(`Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const findKeyByValue = function(object, value) {
  var listOfKeys = Object.keys(object);
  for (key of listOfKeys) {
    console.log(key);
    console.log(object[key]);
    if (object[key] == value) {
      return key
    }
  }
};



const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;
