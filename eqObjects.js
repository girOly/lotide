const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};
// _____________________________________________________________________________
const eqArrays = function(arrayOne, arrayTwo) {
  for (var i = 0; i <= arrayOne.length; i++) {
    console.log(arrayOne[i]);
    console.log(arrayTwo[i]);

    // if (arrayOne[i] == undefined || arrayTwo[i] == undefined) {
    //   return false
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};
// ______________________________________________________________________________
const eqObjects = function(object1, object2) {
  var objectListOne = Object.keys(object1);
  var objectListTwo = Object.keys(object2);
  if (objectListOne.length != objectListTwo.length) {
    return false;
  } else {
    for (key of objectListOne) {
      if (objectListOne[key] != objectListTwo[key]) {
        return false;
      } else {
        return true;
      }
    }
  }
};
// ______________________________________________________________________________
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false
