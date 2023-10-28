// Function Implementation
/* const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
*/ 
const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  const areEqual = eqArrays(arr1, arr2);
  if (areEqual) {
    console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

module.exports = assertArraysEqual;

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);

