const assert = require("chai").assert;
const middle = require("../middle");

describe("#middle", () => {
  it("returns 3 for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), 3);
  });

  // it("returns '5' for ['5']", () => {
  //   assert.strictEqual(head(['5']), '5');
  // });
});

// console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])); // => [3]
//
//
// console.log(middle([1]), []); // => []
// console.log(assertArraysEqual(middle([1, 2]), [])); // => []
// console.log(assertArraysEqual(middle([1, 2, 3]), [2])); // => [2]
// console.log(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
// console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])); // => [3, 4]


// const head = require("../head");
// const assertEqual = require("../assertEqual");

// TEST CODE

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1,1);

// assertEqual(head([5, 6, 7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
