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

const without = function(sourceArray, toRemove) {
    for( var i =sourceArray.length - 1; i >= 0; i--){
      for( var j=0; j < toRemove.length; j++){
        if(sourceArray[i] === toRemove[j]){
          sourceArray.splice(i, 1);
          }
            console.log(sourceArray);
  }}}

without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
