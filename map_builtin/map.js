const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const assertEqual = function(actual, expected) {
  if (eqArrays(actual, expected) == true) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};
//
//
//

const eqArrays = function(arrayOne, arrayTwo) {
  for (var i = 0; i <= arrayOne.length; i++) {
    console.log(arrayOne[i]);
    console.log(arrayTwo[i]);
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};
