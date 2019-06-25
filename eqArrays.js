const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};




const eqArrays = function(arrayOne, arrayTwo) {
  for (var i = 0; i <= arrayOne.length; i++) {
    console.log(arrayOne[i])
    console.log(arrayTwo[i])

    // if (arrayOne[i] == undefined || arrayTwo[i] == undefined) {
    //   return false
 if (arrayOne[i] !== arrayTwo[i]) {
      return false
}} return true
}



assertEqual(eqArrays([6, 2, 3], [6, 2, 3]), true);

// Undefined at the end of loop?

// // vagrant [lotide]> node eqArrays.js
// 6
// 6
// 2
// 2
// 3
// 3
// undefined
// undefined
// Assertion Passed: true === true
