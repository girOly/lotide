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


const middle = function(array){
  var middy = Math.floor(array.length / 2);
  var indexValue = array[middy];
  return indexValue;
}
