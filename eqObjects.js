const assertEqual = require('./assertEqual');
//   if (actual === expected) {
//     console.log(`Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`Assertion Failed: ${actual} !== ${expected}`);
//   }
// };
// _____________________________________________________________________________
const eqArrays = require('./eqArrays');
//   for (var i = 0; i <= arrayOne.length; i++) {
//     console.log(arrayOne[i]);
//     console.log(arrayTwo[i]);
//
//     // if (arrayOne[i] == undefined || arrayTwo[i] == undefined) {
//     //   return false
//     if (arrayOne[i] !== arrayTwo[i]) {
//       return false;
//     }
//   }
//   return true;
// };
// ______________________________________________________________________________
const eqObjects = function(object1, object2) {
  var objectListOne = Object.keys(object1);
  var objectListTwo = Object.keys(object2);
  if (objectListOne.length != objectListTwo.length) {
    console.log("Ending at Line 27");
    return false;
  } else {
    for (key of objectListOne) {
      console.log("Ending at Line 31"[key]);
      if (Array.isArray(objectListOne[key]) == true) {
        console.log("Loop ending at Line 33");
        return eqArrays(objectListOne, objectListTwo);
      } else {
        if (objectListOne[key] !== objectListTwo[key]) {
          console.log("Loop ending at Line 37" + [key]);
          return false;
          // } else {
          //   console.log("Loop ending at line 40");
          //   return false;
        }
        return true;
      }
    }
  }
};
// ______________________________________________________________________________
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2" };
console.log(eqObjects(ab, abc)); // => false
