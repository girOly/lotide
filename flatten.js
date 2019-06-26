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
    console.log(arrayOne[i])
    console.log(arrayTwo[i])
 if (arrayOne[i] !== arrayTwo[i]) {
      return false
}} return true
}



var flatArray = []
var arrayThick = [];
const flatten = function(arrayThick){
for (var i = 0; i < arrayThick.length; ++i) {
  if (Array.isArray(arrayThick) == true) {
    flatArray = flatArray.concat(arrayThick[i]);
  }
    // console.log(flatArray);
}}

flatten([1,2,3,[5,8,9]]);

console.log(flatArray);
