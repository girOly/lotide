const tail = require("../tail");
const assert = require("chai").assert;

describe("#tail", () => {
  // it("returns 1 for [1, 2, 3]", () => {
  //   assert.DeepEqual(tail([1, 2, 3]), 1);
  // });

  it("returns '5' for ['4, 5']", () => {
    assert.deepEqual(tail("4", "5"), "5");
  });
});

// Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!
