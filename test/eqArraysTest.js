const eqArrays = require("../eqArrays");
const assertEqual = require("../assertEqual");

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
